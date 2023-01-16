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

// Rotation Gate Operation

import {OperationFunc, QOperation, RotationArgument} from "./QOperation";
import {QRegStorage} from "../QRegPool";

export interface IRotationGate extends OperationFunc {
    data: RotationGateOP;
}

export class RotationGateOP extends QOperation {
    public readonly argumentList: RotationArgument[];
    public readonly uGateArgumentList: RotationArgument[];

    public static create(gate: string, bits: number, angleList: RotationArgument[], uGateArgumentList: RotationArgument[]): IRotationGate {
        const data = new RotationGateOP(gate, bits, angleList, uGateArgumentList);
        const func = (...qRegList: QRegStorage[]): void => {
            data.op(qRegList);
        };
        func.data = data;
        return func;
    }

    private constructor(name: string, bits: number, angleList: RotationArgument[], uGateArgumentList: RotationArgument[]) {
        super(name, bits);
        this.argumentList = angleList;
        this.uGateArgumentList = uGateArgumentList;
    }
}

export function U(theta: RotationArgument,
                  phi: RotationArgument = undefined,
                  lamda: RotationArgument = undefined): IRotationGate {
    const angleList = [theta, phi, lamda].filter((value) => value !== undefined);
    return RotationGateOP.create('U', 1, angleList, angleList);
}

export function RX(theta: RotationArgument): IRotationGate {
    return RotationGateOP.create('RX', 1, [theta], [theta, -Math.PI / 2, Math.PI / 2]);
}

export function RY(theta: RotationArgument): IRotationGate {
    return RotationGateOP.create('RY', 1, [theta], [theta, 0, 0]);
}

export function RZ(lamda: RotationArgument): IRotationGate {
    return RotationGateOP.create('RZ', 1, [lamda], [0, 0, lamda]);
}

export function CU(theta: RotationArgument,
                   phi: RotationArgument,
                   lamda: RotationArgument): IRotationGate {
    const angleList = [theta, phi, lamda].filter((value) => value !== undefined);
    return RotationGateOP.create('CU', 2, angleList, angleList);
}

export function CRX(theta: RotationArgument): IRotationGate {
    return RotationGateOP.create('CRX', 2, [theta], [theta, -Math.PI / 2, Math.PI / 2]);
}

export function CRY(theta: RotationArgument): IRotationGate {
    return RotationGateOP.create('CRY', 2, [theta], [theta, 0, 0]);
}

export function CRZ(lamda: RotationArgument): IRotationGate {
    return RotationGateOP.create('CRZ', 2, [lamda], [0, 0, lamda]);
}