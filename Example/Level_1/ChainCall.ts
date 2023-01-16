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

import Define from "../../QCompute/Define/Define";
import {matchSdkVersion} from "../../QCompute/Define/Utils";
import {QEnv} from "../../QCompute/QPlatform/QEnv";
import {QEnvOperation} from "../../QCompute/QPlatform/QEnvOperation";
import {BackendName} from "../../QCompute/QPlatform/QPlatform";

matchSdkVersion('TypeScript 1.0.0');

// Your token:
Define.hubToken = '';

// avoid error
const voidEnv = new QEnv();

async function main() {
    // Create environment
    const env = new QEnvOperation();
    // Choose backend Baidu Cloud Quantum Simulator-Sim2
    env.backend(BackendName.CloudBaiduSim2Water);

    // Apply a Hadamard gate on the 0th qubit
    // Apply some CX gates where the 0th qubit controls flipping each other qubit
    // Measure with the computational basis
    env
        .H(0)
        .CX(0, 1)
        .CX(0, 2)
        .MeasureZ();

    // Commit the quest with 1024 shots to the cloud
    const taskResult = await env.commit(1024, true);
    console.log(taskResult);
}

main();
