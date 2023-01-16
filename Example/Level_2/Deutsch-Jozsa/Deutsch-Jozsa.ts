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

/*
Deutsch-Jozsa Algorithm.
*/
import Define from "../../../QCompute/Define/Define";
import {matchSdkVersion} from "../../../QCompute/Define/Utils";
import {QEnv} from "../../../QCompute/QPlatform/QEnv";
import {BackendName} from "../../../QCompute/QPlatform/QPlatform";
import {X, CX, H} from "../../../QCompute/QPlatform/Operation/FixedGate";
import {MeasureZ} from "../../../QCompute/QPlatform/Operation/Measure";

matchSdkVersion('TypeScript 1.0.0');

// In this example we use 10 qubits as the main register,
// and also an ancillary qubit else
const MainReg_num = 10;

// Your token:
Define.hubToken = '';


async function main() {
    /*
    main
     */
    // Create two environment separately, and choose backend
    // We will execute D-J algorithm for f1 and f2 simultaneously
    const env1 = new QEnv();
    env1.backend(BackendName.CloudBaiduSim2Water);
    const env2 = new QEnv();
    env2.backend(BackendName.CloudBaiduSim2Water);

    // Initialize two registers on 11 qubits respectively,
    // where the last qubit in each register refers to the ancillary qubit,
    // and q1 and q2 correspond to f1 and f2 respectively.
    const q1 = env1.Q.createList(MainReg_num + 1);
    const q2 = env2.Q.createList(MainReg_num + 1);

    // As a preparation for D-J algorithm, we flip the ancillary qubit from |0> to |1>
    X(q1[MainReg_num]);
    X(q2[MainReg_num]);

    // In D-J algorithm, we apply a Hadamard gate on each qubit
    // in main register and the ancillary qubit
    for (let i = 0; i < MainReg_num + 1; i++) {
        H(q1[i]);
        H(q2[i]);
    }

    // Then apply U_f:
    // for f1 = 0, we need to do nothing on q1;
    // for f2 = the value of first qubit,so if f2 = 0 do nothing,
    // else to flip the ancillary qubit in q2, which is exactly a CX gate
    CX(q2[0], q2[MainReg_num]);

    // Then we apply a Hadamard gate on each qubit in main register again
    for (let i = 0; i < MainReg_num; i++) {
        H(q1[i]);
        H(q2[i]);
    }

    // Measure the main registers with the computational basis
    MeasureZ([q1[0], q1[1], q1[2], q1[3], q1[4], q1[5], q1[6], q1[7], q1[8], q1[9]], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    MeasureZ([q2[0], q2[1], q2[2], q2[3], q2[4], q2[5], q2[6], q2[7], q2[8], q2[9]], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    // Commit the quest, where we need only 1 shot to distinguish that
    // f1 is constant for the measurement result |0>,
    // and f2 is balanced for the measurement result unequal to |0>
    const taskResult1 = await env1.commit(1, true, false);
    const taskResult2 = await env2.commit(1, true, false);
}


main();
