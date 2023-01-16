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
import {RX} from "../../QCompute/QPlatform/Operation/RotationGate";
import {MeasureZ} from "../../QCompute/QPlatform/Operation/Measure";

matchSdkVersion('TypeScript 1.0.0');

// Your token:
Define.hubToken = '';

async function main() {
    let uValue = 1;  // Flag of interactions
    for (let i = 0; i < 15; i++) {
        console.log('uValue is :', uValue);

        // Create environment
        const env = new QEnv();
        // Choose backend Baidu Cloud Quantum Simulator-Sim2 Water
        env.backend(BackendName.CloudBaiduSim2Water);

        // Apply gates and measurement operations to construct the circuit:
        const u = RX(uValue);
        u(env.Q(0));

        MeasureZ(...env.Q.toListPair());

        const taskResult = await env.commit(1024, true);// Submit the circuit, execute and get results

        // Interaction: change parameters of unitary in next experiment according to current result
        const CountsDict = taskResult['counts'];
        if (CountsDict['0'] && CountsDict['0'] > 5) {
            uValue = uValue * 2;
        } else {
            console.log(`When the parameter is ${uValue}, 0 is eliminated.`);
            break
        }
    }
}

main();
