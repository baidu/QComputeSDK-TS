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
Grover's Algorithm Test
 */
import Define from "../../../QCompute/Define/Define";
import {matchSdkVersion} from "../../../QCompute/Define/Utils";
import {QEnv} from "../../../QCompute/QPlatform/QEnv";
import {BackendName} from "../../../QCompute/QPlatform/QPlatform";
import {X, H, CCX} from "../../../QCompute/QPlatform/Operation/FixedGate";
import {MeasureZ} from "../../../QCompute/QPlatform/Operation/Measure";

matchSdkVersion('TypeScript 1.0.0');

// Your token:
Define.hubToken = '';

// In this example we use 3 qubits in total
const qubit_num = 3;
// and set the shot number for each request
const shots = 1000;


async function main()
{
    /*
    main
    */
    // Create environment
    const env = new QEnv();
    // Choose backend Baidu Cloud Quantum Simulator-Sim2 Water
    env.backend(BackendName.CloudBaiduSim2Water);

    // Initialize the three-qubit circuit
    const q = env.Q.createList(qubit_num);

    // The first step of Grover's search algorithm, superposition
    H(q[0]);
    H(q[1]);
    H(q[2]);

    // Enter the first Grover iteration, the oracle Uf for |101>
    X(q[1]);
    H(q[2]);
    CCX(q[0], q[1], q[2]);
    X(q[1]);
    H(q[2]);

    // The first layer of Hadamard gates in the first Grover iteration
    H(q[0]);
    H(q[1]);
    H(q[2]);

    // The reflection gate 2|0><0| - I in the first Grover iteration, which is divided to three parts:
    // two layer of X gates and a decomposition for the gate CCZ between the above two
    X(q[0]);
    X(q[1]);
    X(q[2]);

    H(q[2]);
    CCX(q[0], q[1], q[2]);
    H(q[2]);

    X(q[0]);
    X(q[1]);
    X(q[2]);

    // The second layer of Hadamard gates in the first Grover iteration
    H(q[0]);
    H(q[1]);
    H(q[2]);

    // Measure with the computational basis;
    // if the user you want to increase the number of Grover iteration,
    // please repeat the code from the comment “Enter the first Grover iteration” to here,
    // and then measure
    MeasureZ(...env.Q.toListPair());
    // Commit the quest
    const taskResult = await env.commit(shots, true);
    console.log(taskResult['counts']);
}


main();
