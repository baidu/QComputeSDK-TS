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
import {BackendName} from "../../QCompute/QPlatform/QPlatform";
import {H} from "../../QCompute/QPlatform/Operation/FixedGate";
import {MeasureZ} from "../../QCompute/QPlatform/Operation/Measure";

matchSdkVersion('TypeScript 1.0.0');

// Your token:
Define.hubToken = '';

async function main() {
    // Create environment
    const env = new QEnv();
    // Choose backend Baidu Cloud Quantum Simulator-Sim2 Water
    env.backend(BackendName.CloudBaiduSim2Water);

    // We set the number of qubits in our quantum register as
    const TotalNumQReg = 8;

    // Initialize a quantum register firstly
    const q = env.Q.createList(TotalNumQReg);

    // We apply a Hadamard gate on each qubit in the register above,
    // and also other gates as you like such as an X gate.
    for (let index = 0; index < TotalNumQReg; index++) {
        H(q[index]);
        // X(q[index]);
    }

    // Measure with the computational basis
    MeasureZ(...env.Q.toListPair());

    // Commit the quest with 1000 shots to the cloud
    const taskResult = await env.commit(1000, true);
    console.log(taskResult);
}

main();
