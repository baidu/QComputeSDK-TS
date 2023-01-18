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
import {CX} from "../../../QCompute/QPlatform/Operation/FixedGate";
import {RX, RY, RZ} from "../../../QCompute/QPlatform/Operation/RotationGate";
import {BackendName} from "../../../QCompute/QPlatform/QPlatform";
import {MeasureZ} from "../../../QCompute/QPlatform/Operation/Measure";
import {QRegStorage} from "../../../QCompute/QPlatform/QRegPool";

matchSdkVersion('TypeScript 1.0.2');

// Your token:
Define.hubToken = '';

const pi = 3.141592653589793;
const shots = 100000;
const n = 2;  // n-qubit
const delta = pi / 2;  // calculate derivative
const learning_rate = 0.5;  // learning rate
const N = 15;  // number of parameters
var para: number[] = new Array(N);
for (let i = 0; i < N; i++)  // initial parameters
{
    para[i] = Math.random();
    para[i] *= 2 * pi;
}


function state_prepare(q: QRegStorage[], i: number) {
    /*
    This function is used to prepare state
     */
    RX(0.1)(q[i]);
    RZ(0.4)(q[i + 1]);
    CX(q[i], q[i + 1]);
    RY(0.8)(q[i]);
    RZ(1.2)(q[i]);
}


function universal_cir(q: QRegStorage[], i: number, para: number[]) {
    /*
    This function builds a 15-parameterized circuit, which is
    enough to simulate any 2-qubit Unitaries
     */
    RZ(para[0])(q[i]);
    RY(para[1])(q[i]);
    RZ(para[2])(q[i]);

    RZ(para[3])(q[i + 1]);
    RY(para[4])(q[i + 1]);
    RZ(para[5])(q[i + 1]);

    CX(q[i + 1], q[i]);

    RZ(para[6])(q[i]);
    RY(para[7])(q[i + 1]);

    CX(q[i], q[i + 1]);

    RY(para[8])(q[i + 1]);

    CX(q[i + 1], q[i]);

    RZ(para[9])(q[i]);
    RY(para[10])(q[i]);
    RZ(para[11])(q[i]);

    RZ(para[12])(q[i + 1]);
    RY(para[13])(q[i + 1]);
    RZ(para[14])(q[i + 1]);
}


async function my_cir(para: number[]) {
    /*
    This function returns the measurement result
     */
    const env = new QEnv();
    env.backend(BackendName.CloudBaiduSim2Water);
    const q = env.Q.createList(2 * n);

    // Prepare a state
    for (let i = 0; i < 2; i++)
        state_prepare(q, 2 * i);

    // Add parameterized circuit
    for (let i = 0; i < 2; i++)
        universal_cir(q, 2 * i, para);

    // DIP test
    for (let i = 0; i < 2; i++)
        CX(q[i], q[i + n]);

    MeasureZ(...env.Q.toListPair());
    return await env.commit(shots, true);
}


function data_processing(data_dic): number {
    /*
    This function returns the frequency of getting 00xx
     */
    let sum_0 = 0;
    for (let k in data_dic) {
        if (k[0] == '0' && k[1] == '0')
            sum_0 += data_dic[k];
    }
    return sum_0 / shots;
}


async function loss_fun(para: number[]) {
    /*
    This is the loss function
     */
    let tr = await my_cir(para);

    return -1 * data_processing(tr)
}


async function diff_fun(f, para) {
    /*
    It returns a updated parameter set
     */
    let para_length = para.length;
    let gradient: number[] = new Array(para_length);

    for (let i = 0; i < para_length; i++) {
        let para_copy_plus: number[] = para.concat();
        let para_copy_minus: number[] = para.concat();
        para_copy_plus[i] += delta;
        para_copy_minus[i] -= delta;

        gradient[i] = (await f(para_copy_plus) - await f(para_copy_minus)) / 2;
    }

    let new_para: number[] = para.concat();
    let res: number[] = [];
    for (let i = 0; i < para_length; i++) {
        res = res.concat(new_para[i] - learning_rate * gradient[i]);
    }
    return res;
}


async function main() {
    /*
    Now we perform eigenvalues readout
     */
    let para_list = [para];
    let loss_list: number[] = [];

    for (let i = 0; i < 5; i++) {
        // @ts-ignore
        para_list[i + 1] = await diff_fun(loss_fun, para_list[i]);
        // @ts-ignore
        loss_list = loss_list.concat(await loss_fun(para_list[i]));
    }

    const env = new QEnv();
    env.backend(BackendName.CloudBaiduSim2Earth);

    const q = env.Q.createList(n);

    state_prepare(q, 0);
    console.log(para_list.length);
    universal_cir(q, 0, para_list[para_list.length - 1]);

    MeasureZ(...env.Q.toListPair());
    const taskResult = await env.commit(shots, true);
    console.log(taskResult['counts']);
}


main();
