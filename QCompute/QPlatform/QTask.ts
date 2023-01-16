// Copyright (c) 2020 Baidu, Inc. All Rights Reserved.
//
//     Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//     You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//     Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//     See the License for the specific language governing permissions and
// limitations under the License.

import * as fs from 'fs';
import * as path from 'path';
import * as axios from "axios";
import axiosRetry from 'axios-retry';
import Define from "../Define/Define";
import {NetworkError, TokenError, LogicError, ArgumentError, RuntimeError, ErrorBase} from "./Error";
import {BosClient} from '@baiducloud/sdk';
import Settings from "../Define/Settings";
import * as sleep from 'sleep-promise';
import {BatchID} from "./BatchID";

// @ts-ignore
axiosRetry(axios, {
    retries: Define.waitTaskRetryTimes,
    retryDelay: (retryCount) => {
        return Define.pollInterval * 1000;
    }
});

async function invokeBackend<REQ, RES>(target: string, params: REQ): Promise<RES> {
    let ret: axios.AxiosResponse;
    try {
        // @ts-ignore
        ret = await axios({
            url: `${Define.quantumHubAddr}/${target}`,
            method: 'POST',
            data: params
        });
    } catch (ex) {
        throw new NetworkError(ex.toString());
    }

    if (ret.data.error > 0) {
        const errCode = ret.data.error;
        const errMsg = ret.data.message;
        const vendor = ret.data.vendor;

        if (errCode === 401) {
            throw new TokenError(errMsg);
        } else {
            throw new LogicError(`vendor: ${vendor}; errCode: ${errCode}; errMsg: ${errMsg}`);
        }
    }

    return ret.data.data;
}

async function getSTSToken(): Promise<[BosClient, string]> {
    if (!Define.hubToken) {
        throw new ArgumentError('Please provide a valid token');
    }

    const config = await invokeBackend<GenSTSReq, GenSTSRes>("circuit/genSTS", {
        token: Define.hubToken
    });

    const bosClient = new BosClient({
        endpoint: 'http://bd.bcebos.com',
        credentials: {
            ak: config.accessKeyId,
            sk: config.secretAccessKey
        },
        sessionToken: config.sessionToken
    });

    return [bosClient, config.dest];
}

async function downloadToFile(url: string, localFile: string): Promise<[string, number]> {
    // @ts-ignore
    const result = await axios({
        url,
        responseType: 'stream'
    });
    const stream = fs.createWriteStream(localFile);
    await new Promise<void>((resolve) => {
        result.data.pipe(stream);
        stream.on('finish', () => {
            resolve();
        });
    });
    return [localFile, parseInt(result.headers['content-length'])];
}

export default class QTask {
    public circuitId: number;
    public taskId: number;
    private originFile: string;
    private measureFile: string;

    public async uploadCircuit(file: string): Promise<void> {
        const [client, dest] = await getSTSToken();

        await client.putObjectFromFile(Define.quantumBucket, `tmp/${dest}`, file);

        const ret = await invokeBackend<CreateCircuitReq, CreateCircuitRes>(
            "circuit/createCircuit",
            {
                token: Define.hubToken,
                dest: dest,
                sdkVersion: Define.sdkVersion,
                source: Define.taskSource
            });

        this.circuitId = ret.circuitId;
    }

    public async create(shots: number, backend: string, qbits: number, backendParam: (string | object)[] = null,
                        modules: [string, object][] = null, notes: string | null, debug: string | null): Promise<void> {
        const req: CreateTaskReq = {
            token: Define.hubToken,
            circuitId: this.circuitId,
            taskType: backend,
            shots: shots,
            sdkVersion: Define.sdkVersion,
            source: Define.taskSource,
            modules: modules ? modules : undefined,
            qbits,
            batchID: BatchID.id,
        };

        if (notes) {
            req.notes = notes;
        }
        if (debug) {
            req.debug = debug;
        }

        if (backendParam) {
            const paramList: string[] = [];
            for (const param in backendParam) {
                paramList.push(param);
            }
            req.backendParam = paramList;
        }

        const ret = await invokeBackend<CreateTaskReq, CreateTaskRes>(
            "task/createTask",
            req
        );

        this.taskId = ret.taskId;
    }

    private async fetchResult(): Promise<void> {
        const ret = await invokeBackend<GetTaskInfoReq, GetTaskInfoRes>("task/getTaskInfo", {
            token: Define.hubToken,
            taskId: this.taskId
        });
        const result = ret.result;
        const originUrl = result.originUrl;
        // const originSize = result.originSize;

        let downloadSize: number;
        try {
            const [originFile, size] = await downloadToFile(originUrl, path.join(Define.outputPath, `remote.${this.taskId}.origin.json`));
            this.originFile = originFile;
            downloadSize = size;
        } catch (ex) {
            throw new NetworkError(ex.toString());
        }
        if (Settings.outputInfo) {
            console.log(`Download origin success ${this.originFile} size = ${downloadSize}`);
        }

        const measureUrl = result.measureUrl;
        // const measureSize = result.measureSize;
        try {
            const [measureFile, size] = await downloadToFile(measureUrl, path.join(Define.outputPath, `remote.${this.taskId}.measure.json`));
            this.measureFile = measureFile;
            downloadSize = size;
        } catch (ex) {
            throw new NetworkError(ex.toString());
        }
        if (Settings.outputInfo) {
            console.log(`Download measure success ${this.measureFile} size = ${downloadSize}`);
        }
    }

    private fetchOriginResult(): OriginResult | null {
        const localFile = path.join(Define.outputPath, `remote.${this.taskId}.origin.json`);
        if (fs.existsSync(localFile)) {
            const jsonStr = fs.readFileSync(localFile, 'utf-8');
            return JSON.parse(jsonStr);
        } else {
            return null;
        }
    }

    private fetchMeasureResult(): object | null {
        const localFile = path.join(Define.outputPath, `remote.${this.taskId}.measure.json`);
        if (fs.existsSync(localFile)) {
            const jsonStr = fs.readFileSync(localFile, 'utf-8');
            return JSON.parse(jsonStr);
        } else {
            return null;
        }
    }

    public async wait(fetchMeasure, downloadResult): Promise<TaskResult | string> {
        if (Settings.outputInfo) {
            console.log(`Task ${this.taskId} is running, please wait...`);
        }

        const req: CheckTaskReq = {
            token: Define.hubToken,
            taskId: this.taskId
        };

        let stepStatus = Status.waiting;
        let stepStatusName = Status[Status.waiting];
        let result: TaskResult | string;
        for (; ;) {
            try {
                await sleep(Define.pollInterval * 1000);
                const ret = await invokeBackend<CheckTaskReq, CheckTaskRes>('task/checkTask', req);
                const newStatusName = ret.status;
                const newStatus = Status[newStatusName];
                if (newStatus > 0) {
                    if (Settings.outputInfo) {
                        console.log(`status changed ${stepStatusName} => ${newStatusName}`);
                    }
                    stepStatus = newStatus;
                    stepStatusName = newStatusName;
                    result = {
                        taskId: this.taskId,
                        status: newStatusName
                    };

                    if (newStatus === Status.success && ret.result !== undefined && ret.result.originUrl !== undefined) {
                        if (downloadResult) {
                            await this.fetchResult();
                            result.origin = this.originFile;

                            const originResult = this.fetchOriginResult();
                            result.moduleList = originResult.moduleList;

                            if (fetchMeasure) {
                                result.counts = this.fetchMeasureResult();
                            } else {
                                result.measure = this.measureFile;
                            }
                        }
                        break;
                    } else if (newStatus === Status.failed) {
                        result = ret.reason;
                        break;
                    } else if (newStatus === Status.manual_terminate) {
                        break;
                    } else {
                        //go on loop
                    }
                } else {
                    if (newStatus === stepStatus) {
                        continue;
                    }

                    if (Settings.outputInfo) {
                        console.log(`status changed ${stepStatusName} => ${newStatusName}`);
                    }
                    stepStatus = newStatus;
                }
            } catch (ex) {
                if (ex instanceof ErrorBase) {
                    throw ex;
                } else {
                    throw new RuntimeError(ex.toString());
                }
            }
        }
        return result;
    }
}

enum Status {
    waiting,
    executing,
    success,
    failed,
    manual_terminate
}

class GenSTSReq {
    token: string;
}

class GenSTSRes {
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken: string;
    dest: string;
}

class CreateCircuitReq {
    token: string;
    dest: string;
    sdkVersion: string;
    source: string;
}

class CreateCircuitRes {
    circuitId: number;
}

class CreateTaskReq {
    token: string;
    circuitId: number;
    taskType: string;
    shots: number;
    sdkVersion: string;
    source: string;
    modules: [string, object][];
    qbits: number;
    backendParam?: string[];
    batchID: string;
    notes?: string;
    debug?: string;
}

class CreateTaskRes {
    taskId: number;
}

class GetTaskInfoReq {
    token: string;
    taskId: number;
}

class GetTaskInfoRes {
    result: GetTaskInfoResult;
}

class GetTaskInfoResult {
    originUrl: string;
    measureUrl: string;
    measureSize: number;
}

class CheckTaskReq {
    token: string;
    taskId: number;
}

class CheckTaskRes {
    status: string;
    result: CheckTaskResult;
    reason: string;
}

class CheckTaskResult {
    originUrl: string;
}

class OriginResult {
    moduleList: ModuleInfo[];
}

class ModuleInfo {
    module: string;
    arguments: object;
}

export class TaskResult {
    taskId: number;
    status?: string;
    origin?: string;
    moduleList?: ModuleInfo[];
    counts?: object;
    measure?: string;
}
