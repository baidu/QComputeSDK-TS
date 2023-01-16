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

import Define from "../../../QCompute/Define/Define";
import {matchSdkVersion} from "../../../QCompute/Define/Utils";
import {QEnv} from "../../../QCompute/QPlatform/QEnv";
import {X, SWAP, H} from "../../../QCompute/QPlatform/Operation/FixedGate";
import {CU} from "../../../QCompute/QPlatform/Operation/RotationGate";
import {BackendName} from "../../../QCompute/QPlatform/QPlatform";
import {MeasureZ} from "../../../QCompute/QPlatform/Operation/Measure";

matchSdkVersion('TypeScript 1.0.0');

// Your token:
Define.hubToken = '';

const pi = 3.141592653589793;
const qubit_num = 4;
const shots = 1000;
const phase = 2 * pi / 5;

async function main() {
    /*
    main
     */
    // Create environment
    const env = new QEnv();
    // Choose backend Baidu Cloud Quantum Simulator-Sim2
    env.backend(BackendName.CloudBaiduSim2Water);

    // Initialize qubits
    const q = env.Q.createList(qubit_num);

    // Prepare eigenstate |1> = X|0> on the ancillary qubit
    X(q[3]);

    // Superposition
    H(q[0]);
    H(q[1]);
    H(q[2]);

    // Control-U gates
    CU(0, 0, phase)(q[0], q[3]);

    CU(0, 0, phase)(q[1], q[3]);
    CU(0, 0, phase)(q[1], q[3]);

    CU(0, 0, phase)(q[2], q[3]);
    CU(0, 0, phase)(q[2], q[3]);
    CU(0, 0, phase)(q[2], q[3]);
    CU(0, 0, phase)(q[2], q[3]);

    // 3-qubit inverse QFT
    SWAP(q[0], q[2]);
    H(q[0]);
    CU(0, 0, -pi / 2)(q[0], q[1]);
    H(q[1]);
    CU(0, 0, -pi / 4)(q[0], q[2]);
    CU(0, 0, -pi / 2)(q[1], q[2]);
    H(q[2]);

    // Commit the quest with 1024 shots to the cloud
    MeasureZ(...env.Q.toListPair());
    const taskResult = await env.commit(shots, true);
    console.log(taskResult['counts']);
}

main();
