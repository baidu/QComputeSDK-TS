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

// Quantum Operation

import {ArgumentError} from "../Error";
import {QProcedure, QProcedureOP} from "./QProcedure";
import {QRegStorage} from "../QRegPool";
import {ProcedureParameterStorage} from "../ProcedureParameterPool";
import {FixedGateOP} from "./FixedGate";
import {RotationGateOP} from "./RotationGate";
import {CompositeGateOP} from "./CompositeGate";
import {BarrierOp} from "./Barrier";
import {MeasureOP} from "./Measure";

export type StorageFunc<T> = (index: number) => T;
export type OperationFunc = (...qRegList: QRegStorage[]) => void;
export type MeasureFunc = (qRegList: QRegStorage[], cRegList: number[]) => void;
export type RotationArgument = number | ProcedureParameterStorage;

export class QOperation {
    public readonly name: string;
    public readonly bits: number;

    protected constructor(name?: string, bits?: number) {
        this.name = name;
        this.bits = bits;
    }

    protected op(qRegList: QRegStorage[]): void {
        const env = qRegList[0].env
        for (const qReg of qRegList) {
            if (qReg.env !== env) {
                throw new ArgumentError('QReg must belong to the same env!');
            }
        }

        if (env instanceof QProcedure) {
            throw new ArgumentError('QProcedure should not be operated!');
        }

        if (this.bits != null && this.bits !== qRegList.length) {// Barrier and QProcedure does not match bits configuration
            throw new ArgumentError('The number of QReg must match the setting!');
        }

        if (qRegList.length !== new Set(qRegList).size) {
            throw new ArgumentError('QReg of operators in circuit are not repeatable!');
        }

        const circuitLine = new CircuitLine();
        circuitLine.data = this;
        circuitLine.qRegIndexList = qRegList.map(qReg => qReg.index);
        env.circuit.push(circuitLine);
    }

    protected opMeasure(qRegList: QRegStorage[], cRegList: number[]): void {
        if (qRegList.length !== cRegList.length) {
            throw new ArgumentError('QReg and CReg in measure must have same count!');
        }

        const env = qRegList[0].env
        for (const qReg of qRegList) {
            if (qReg.env !== env) {
                throw new ArgumentError('QReg must belong to the same env!');
            }
        }

        if (env instanceof QProcedure) {
            throw new ArgumentError('QProcedure must not be measured!');
        }

        if (qRegList.length <= 0) {
            throw new ArgumentError('Must have QReg in measure!');
        }

        if (qRegList.length !== new Set(qRegList).size) {
            throw new ArgumentError('QReg of measure in circuit are not repeatable!');
        }

        for (const qReg of qRegList) {// Only in QEnv
            if (env.measuredQRegSet.has(qReg.index)) {
                throw new ArgumentError('Measure must be once on a QReg!');
            }
            env.measuredQRegSet.add(qReg.index);
        }

        if (cRegList.length <= 0) {
            throw new ArgumentError('Must have CReg in measure!');
        }

        if (cRegList.length !== new Set(cRegList).size) {
            throw new ArgumentError('CReg of measure in circuit are not repeatable!');
        }

        for (const cReg of cRegList) {// Only in QEnv
            if (env.measuredCRegSet.has(cReg)) {
                throw new ArgumentError('Measure must be once on a CReg!');
            }
            env.measuredCRegSet.add(cReg);
        }

        const circuitLine = new CircuitLine();
        circuitLine.data = this;
        circuitLine.qRegIndexList = qRegList.map(qReg => qReg.index);
        circuitLine.cRegIndexList = cRegList;
        env.circuit.push(circuitLine);
    }
}

type Operation = FixedGateOP | RotationGateOP | CompositeGateOP | QProcedureOP | BarrierOp | MeasureOP;

interface IOperationData {
    data: Operation;
}

export class CircuitLine implements IOperationData {
    public data: Operation;
    public qRegIndexList: number[];
    public cRegIndexList: number[];
}
