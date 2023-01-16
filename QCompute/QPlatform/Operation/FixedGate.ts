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

// Fixed Gate Operation

import {OperationFunc, QOperation} from "./QOperation";
import {QRegStorage} from "../QRegPool";

export interface IFixedGate extends OperationFunc {
    data: FixedGateOP;
}

export class FixedGateOP extends QOperation {
    public static create(gate: string, bits: number): IFixedGate {
        const data = new FixedGateOP(gate, bits);
        const func = (...qRegList: QRegStorage[]): void => {
            data.op(qRegList);
        };
        func.data = data;
        return func;
    }
}

export const ID = FixedGateOP.create('ID', 1);
export const X = FixedGateOP.create('X', 1);
export const Y = FixedGateOP.create('Y', 1);
export const Z = FixedGateOP.create('Z', 1);
export const H = FixedGateOP.create('H', 1);
export const S = FixedGateOP.create('S', 1);
export const SDG = FixedGateOP.create('SDG', 1);
export const T = FixedGateOP.create('T', 1);
export const TDG = FixedGateOP.create('TDG', 1);
export const CX = FixedGateOP.create('CX', 2);
export const CY = FixedGateOP.create('CY', 2);
export const CZ = FixedGateOP.create('CZ', 2);
export const CH = FixedGateOP.create('CH', 2);
export const SWAP = FixedGateOP.create('SWAP', 2);
export const CCX = FixedGateOP.create('CCX', 3);
export const CSWAP = FixedGateOP.create('CSWAP', 3);