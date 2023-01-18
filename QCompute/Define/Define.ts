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

// Global Definitions

import * as path from 'path';
import * as fs from 'fs';
import {RuntimeError} from "../QPlatform/Error";

export default class Define {
    static hubToken: string;

    static env = 'prod';
    static quantumHubAddr: string;
    static quantumBucket: string;
    static sdkVersion = 'TypeScript 1.0.2';
    static taskSource = 'TsSDK';
    static noWaitTask: string;
    static pollInterval = 5;
    static waitTaskRetryTimes = 10;
    static outputPath = path.resolve('./Output')
}

if (process.env.HUBTOKEN !== undefined) {
    Define.hubToken = process.env.HUBTOKEN;
}



if (Define.env === 'prod') {
    // service address for production
    Define.quantumHubAddr = 'https://quantum-hub.baidu.com/api';
    Define.quantumBucket = 'quantum-task';
} else {
    throw new RuntimeError("Not implemented");
}

if (process.env.SOURCE !== undefined) {
    Define.taskSource = process.env.SOURCE;
}

if (process.env.NOWAITTASK !== undefined) {
    Define.noWaitTask = process.env.NOWAITTASK;
}

fs.mkdirSync(Define.outputPath, {
    recursive: true
});
