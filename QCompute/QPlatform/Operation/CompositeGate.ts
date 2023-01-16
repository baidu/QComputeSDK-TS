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

// Composite Gate Operation

import {OperationFunc, QOperation, RotationArgument} from "./QOperation";
import {QRegStorage} from "../QRegPool";

export interface ICompositeGate extends OperationFunc {
    data: CompositeGateOP;
}

export class CompositeGateOP extends QOperation {
    public readonly argumentList: RotationArgument[];

    public static create(gate: string, bits: number, angleList: RotationArgument[]): ICompositeGate {
        const data = new CompositeGateOP(gate, bits, angleList);
        const func = (...qRegList: QRegStorage[]): void => {
            data.op(qRegList);
        };
        func.data = data;
        return func;
    }

    private constructor(name: string, bits: number, angleList: RotationArgument[]) {
        super(name, bits);
        this.argumentList = angleList;
    }
}

// export function RZZ(theta: RotationArgument,
//                     phi: RotationArgument = undefined,
//                     lamda: RotationArgument = undefined): ICompositeGate {
//     const angleList = [theta, phi, lamda].filter((value) => value !== undefined);
//     return CompositeGateOP.create('RZZ', 2, angleList);
// }
