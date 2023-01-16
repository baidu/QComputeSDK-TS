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

// Quantum Environment

import * as Fs from 'fs';
import {IQProcedure, QProcedure} from "./Operation/QProcedure";
import {destoryObject} from "./Utilities";
import {ArgumentError} from "./Error";
import Define from "../Define/Define";
import {QEnvToProtobuf} from "./CircuitTools";
import {Program as PBProgram} from "../QProtobuf/Library/QProtobuf";
import {QRegPool} from "./QRegPool";
import {ProcedureParameterPool} from "./ProcedureParameterPool";
import {CircuitLine} from "./Operation/QOperation";
import {tmpNameSync} from "tmp";
import Settings from "../Define/Settings";
import QTask, {TaskResult} from "./QTask";
import {BackendName, ServerModule} from './QPlatform';

export class QEnv {
    public readonly Q = QRegPool.create(this);
    public readonly Parameter = ProcedureParameterPool.create();

    public readonly measuredQRegSet = new Set<number>();
    public readonly measuredCRegSet = new Set<number>();
    public readonly circuit: CircuitLine[] = [];
    public readonly procedureMap = new Map<string, IQProcedure>();
    public program: PBProgram;

    public backendName: string;
    public backendArgument: any[];

    public usedServerModuleList: [string, object][] = [];

    public backend(backendName: BackendName, ...backendArgument): void {
        this.backendName = backendName;
        this.backendArgument = backendArgument;
    }

    public convertToProcedure(name: string, env: QEnv): IQProcedure {
        if (env.procedureMap.has(name)) {
            throw new ArgumentError(`Duplicate procedure name: ${name}!`);
        }
        const procedure = QProcedure.create(name, this.Q, this.Parameter, this.circuit);
        env.procedureMap.set(name, procedure);
        destoryObject(this);
        return procedure;
    }

    public publish(): void {
        const program = new PBProgram();
        this.program = program;
        program.sdkVersion = Define.sdkVersion;
        QEnvToProtobuf(this.program, this);
    }

    public async commit(shots: number, fetchMeasure = true, downloadResult = true,
                        notes: string | null = null, debug: string | null = null): Promise<TaskResult | string> {

        if (this.backendName.startsWith('local_')) {
            throw 'No local task in typescript edition.';
        } else if (this.backendName.startsWith('cloud_')) {
            this.publish();
            return await this._cloudCommit(shots, fetchMeasure, downloadResult, notes, debug);
        } else {
            throw `Invalid backendName => ${this.backendName}`;
        }
    }

    public async _cloudCommit(shots: number, fetchMeasure, downloadResult, notes: string | null, debug: string | null): Promise<TaskResult | string> {
        const programBuf = PBProgram.encode(this.program).finish();
        const circuitPackageFn = tmpNameSync({
            tmpdir: Define.outputPath,
            postfix: '.pb',
            prefix: 'circuit.',
        });
        Fs.writeFileSync(circuitPackageFn, programBuf);
        if (Settings.outputInfo) {
            console.log(`CircuitPackageFile: ${circuitPackageFn}`);
        }

        const task = new QTask();
        await task.uploadCircuit(circuitPackageFn);
        const backend = this.backendName.substring(6);
        await task.create(shots, backend, this.program.head.usingQRegList.length, this.backendArgument, this.usedServerModuleList, notes, debug);

        if (Settings.outputInfo) {
            console.log(`Circuit upload successful, circuitId => ${task.circuitId} taskId => ${task.taskId}`);
        }

        // skip waiting when the relevant variable exists
        if (Define.noWaitTask) {
            return {taskId: task.taskId};
        }

        const taskResult = await task.wait(fetchMeasure, downloadResult);
        if (typeof taskResult === 'string') {
            console.error(taskResult);
        } else if (taskResult.counts) {
            // cRegCount = max(self.program.head.usingCRegList) + 1
            // taskResult['counts'] = formatMeasure(taskResult['counts'], cRegCount)
        }
        return taskResult;
    }

    public serverModule(module: ServerModule, argument: object): void {
        this.usedServerModuleList.push([ServerModule[module] + 'Module', argument]);
    }
}
