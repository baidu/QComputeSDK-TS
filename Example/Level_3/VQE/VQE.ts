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
VQE
 */
import * as math from "mathjs"
import Define from "../../../QCompute/Define/Define";
import {matchSdkVersion} from "../../../QCompute/Define/Utils";
import {QEnv} from "../../../QCompute/QPlatform/QEnv";
import {CX, H} from "../../../QCompute/QPlatform/Operation/FixedGate";
import {RY, RZ} from "../../../QCompute/QPlatform/Operation/RotationGate";
import {BackendName} from "../../../QCompute/QPlatform/QPlatform";
import {MeasureZ} from "../../../QCompute/QPlatform/Operation/Measure";

matchSdkVersion('TypeScript 1.0.0');

// Your token:
Define.hubToken = '';

// Hyper-parameter setting
const pi = 3.141592653589793;
const shots = 1024;
const n = 4;  // n must be larger than or equal to 2; n is the size of our quantum system
console.assert(n >= 2);
const L = 2;  // L is the number of layers
const iteration_num = 4;
const learning_rate = 0.3;
const delta = pi / 2;  // Calculate analytical derivative
const K = 3;  // k is the number of local Hamiltonian in H
const N = 3 * n * L;  // N is the number of parameters needed for the circuit


var choice = {
    0: 'i',
    1: 'x',
    2: 'y',
    3: 'z'
};


function random_pauli_generator(l): string {
    /*
    The following functions are used to generate random Hamiltonian
     */

    let i = 0;
    let s: string = '';
    do {
        i++;
        let value_a = Math.random() * 4 + "";
        let value_b = parseInt(value_a);
        s = s + choice[value_b];
    } while (i < l);
    return s;
}


function random_H_generator(n, k) {
    /*
    n is the number of qubits, k is the number of local Hamiltonian in H
     */
    let H = [];
    for (let i = 0; i < k; i++) {
        H[i] = [Math.random(), random_pauli_generator(n)];
    }
    return H;
}


let Hamiltonian = random_H_generator(n, K); // Our Hamiltonian H



function calculate_l2_norm(M) {
    /*
    calculate l2 norm
    */

    let sum_magnitude = 0;
    for (let i = 0; i < M.length; i++)
        for (let j = 0; j < M.length; j++)
            sum_magnitude += Math.pow(M[i][j]['re'], 2) + Math.pow(M[i][j]['im'], 2);
    let l2_norm = Math.sqrt(sum_magnitude);
    return l2_norm;
}


function generator_A(M) {
    /*
    change spec with Frobenius norm : A = -M + l2_norm * I
    */

    let matrix_identity = math.identity(M.length);
    let l2_norm = calculate_l2_norm(M);
    let l2_norm_identity = math.multiply(matrix_identity, l2_norm)
    return [math.add(math.multiply(M, -1), l2_norm_identity)['_data'], l2_norm];
}


function compute_eig_max(A) {
    /*
    compute eigenvalue max
    */

    let vector_dim = A.length;
    let vector = new Array(vector_dim);
    for (let i = 0; i < vector_dim; i++) {
        let x = Math.random();
        let y = Math.random();
        vector[i] = math.complex(x, y);
    }

    let vector_norm: any = math.norm(vector);
    for (let i = 0; i < vector_dim; i++) {
        vector[i]['re'] /= vector_norm;
        vector[i]['im'] /= vector_norm;
    }

    let A_eig_max_new: any = 0;
    let A_eig_max_last: any = 0;
    do {
        A_eig_max_last = A_eig_max_new;
        vector = math.multiply(A, vector);
        A_eig_max_new = math.norm(vector);
        for (let i = 0; i < vector_dim; i++) {
            vector[i]['re'] /= A_eig_max_new;
            vector[i]['im'] /= A_eig_max_new;
        }
    } while (Math.abs(A_eig_max_new - A_eig_max_last) >= 1e-11);

    return A_eig_max_new;
}


function ground_energy(Ha) {
    /*
     It returns the ground energy of Hamiltonian Ha,
    which looks like [[12, 'xyiz'], [21, 'zzxz'], [10, 'iixy']].
     */

    // It is a local function
    function my_f(s: string) {
        s = s.toLowerCase();

        let I = [[math.complex(1, 0), math.complex(0, 0)], [math.complex(0, 0), math.complex(1, 0)]];
        let X = [[math.complex(0, 0), math.complex(1, 0)], [math.complex(1, 0), math.complex(0, 0)]];
        let Y = [[math.complex(0, 0), math.complex(0, -1)], [math.complex(0, 1), math.complex(0, 0)]];
        let Z = [[math.complex(1, 0), math.complex(0, 0)], [math.complex(0, 0), math.complex(-1, 0)]];

        if (s == 'x')
            return X;
        else if (s == 'y')
            return Y;
        else if (s == 'z')
            return Z;
        else
            return I;
    }

    // It is a local function
    function my_g(s_string) {
        let H = [];
        let i = 0;
        for (let ele of s_string) {
            H[i++] = my_f(ele);
        }
        let Kron = math.kron(H[0], H[1]);
        for (let i = 2; i < H.length; i++)
            Kron = math.kron(Kron, H[i]);

        return Kron;
    }

    let sum = math.add(math.multiply(Ha[0][0], my_g(Ha[0][1])), math.multiply(Ha[1][0], my_g(Ha[1][1])));
    for (let i = 2; i < Ha.length; i++) {
        sum = math.add(sum, math.multiply(Ha[i][0], my_g(Ha[i][1])));
    }

    let ret = generator_A(sum);
    let A = ret[0];
    let l2_norm = ret[1];
    do {
        var eig_max1 = compute_eig_max(A);
        var eig_max2 = compute_eig_max(A);
    } while (Math.abs(eig_max1 - eig_max2) >= 1e-5);

    // return min eigenvalue
    return l2_norm - eig_max1;
}


function prob_calc(data_dic) {
    /*
    Measure the first (ancillary) qubit. Return the value
    of 'the probability of getting 0' minus 'the probability of getting 1'.
     */

    let sum_0 = 0;
    let sum_1 = 0;
    for (let k in data_dic) {
        if (k[k.length - 1] == '0')
            sum_0 += data_dic[k];
        else
            sum_1 += data_dic[k];
    }
    return (sum_0 - sum_1) / shots;
}


function add_block(q, loc, para) {
    /*
    Add a RzRyRz gate block. Each block has 3 parameters.
     */

    RZ(para[0])(q[loc]);
    RY(para[1])(q[loc]);
    RZ(para[2])(q[loc]);
}


function add_layer(para, q) {
    /*
    Add a layer, which has 3*n parameters. para is a 2-D numpy array
     */

    for (let i = 1; i < n + 1; i++)
        add_block(q, i, para[i - 1]);
    for (let i = 1; i < n; i++)
        CX(q[i], q[i + 1]);
    CX(q[n], q[1]);
}


async function self_defined_circuit(para, hamiltonian) {
    /*
    H is a list, for example, if H = 12*X*Y*I*Z + 21*Z*Z*X*Z + 10* I*I*X*Y,
    then Hamiltonian is [[12, 'xyiz'], [21, 'zzxz'], [10, 'iixy']](upper case or lower case are all fine).
    It returns the expectation value of H.
     */

    const env = new QEnv();
    env.backend(BackendName.CloudBaiduSim2Water);

    const q = env.Q.createList(n + 1);

    hamiltonian = hamiltonian.toLowerCase();
    let high_D_para = math.reshape(para, [L, n, 3]);

    for (let i = 1; i < n + 1; i++)
        H(q[i]);

    for (let i = 0; i < L; i++)
        add_layer(high_D_para[i], q);

    for (let i = 0; i < n; i++) {
        if (hamiltonian[i] == 'x') {
            H(q[i + 1]);
            CX(q[i + 1], q[0]);
        } else if (hamiltonian[i] == 'z')
            CX(q[i + 1], q[0]);

        else if (hamiltonian[i] == 'y') {
            RZ(-pi / 2)(q[i + 1]);
            H(q[i + 1]);
            CX(q[i + 1], q[0]);
        }
    }
    // Measurement result
    MeasureZ(...env.Q.toListPair());
    const taskResult = await env.commit(shots, true);
    return prob_calc(taskResult['counts']);
}


async function diff_fun(f, para: number[]) {
    /*
    It calculates the gradient of f on para,
    update parameters according to the gradient, and return the updated parameters.
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


async function loss_fun(para: number[]) {
    /*
    This is the loss function.
    */

    let res = 0;
    for (let ele of Hamiltonian) {
        // @ts-ignore
        res += ele[0] * await self_defined_circuit(para, ele[1]);
    }

    return res;
}


async function process_fun() {
    var para: number[] = new Array(N);
    for (let i = 0; i < N; i++) {
        para[i] = math.random();
        para[i] *= pi;
    }
    let para_list = [para];

    for (let i = 0; i < iteration_num; i++)
        // @ts-ignore
        para_list[i + 1] = await diff_fun(loss_fun, para_list[i]);


    return para_list;
}


async function main() {
    /*
    main
     */

    let actual_loss = [];
    let new_para_list = await process_fun();

    for (let j = 0; j < iteration_num; j++)
        actual_loss = actual_loss.concat(await loss_fun(new_para_list[j]));

    console.log(ground_energy(Hamiltonian));
    console.log(actual_loss);
}


main();
