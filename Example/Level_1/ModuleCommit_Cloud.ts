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
import {BackendName, ServerModule} from "../../QCompute/QPlatform/QPlatform";
import {CX, ID} from "../../QCompute/QPlatform/Operation/FixedGate";
import {MeasureZ} from "../../QCompute/QPlatform/Operation/Measure";
import {CRX, CU, RX, U} from "../../QCompute/QPlatform/Operation/RotationGate";

matchSdkVersion('TypeScript 1.0.0');

// Your token:
Define.hubToken = '';

async function main() {
    // Create environment
    const env = new QEnv();
    // Choose backend Baidu Cloud Quantum Simulator-Sim2 Water
    env.backend(BackendName.CloudBaiduSim2Water);

    // Initialize the three-qubit circuit
    const q = env.Q.createList(3);

    //test serverModule
    ID(q[0]);
    CX(q[0], q[1]);
    U(1.2)(q[2]);
    U(2.3, 3.4)(q[2]);
    U(2.3, 3.4, 4.5)(q[2]);
    RX(1.2)(q[2]);
    CU(1.2, 3.4, 5.6)(q[2], q[0]);
    CRX(1.2)(q[2], q[0]);

    // Measure with the computational basis
    MeasureZ(...env.Q.toListPair());

    //test serverModule
    env.serverModule(ServerModule.CompressGate, {disable: true});
    env.serverModule(ServerModule.CompositeGate, {disable: true});
    // env.serverModule(ServerModule.UnrollCircuit, {disable: true});

    // Commit the quest with 1024 shots to the cloud
    const taskResult = await env.commit(1024);
    console.log(taskResult);
}

main();
