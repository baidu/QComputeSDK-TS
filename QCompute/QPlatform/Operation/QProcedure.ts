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

// Quantum Procedure

import {IQRegPool, QRegStorage} from "../QRegPool";
import {IProcedureParameterPool} from "../ProcedureParameterPool";
import {CircuitLine, OperationFunc, QOperation, RotationArgument} from "./QOperation";
import {MeasureOP} from "./Measure";
import {ArgumentError} from "../Error";

export type ProcedureFunc = (...argumentList: RotationArgument[]) => IQProcedureOP;

export interface IQProcedure extends ProcedureFunc {
    data: QProcedure;
}

export class QProcedure {
    public readonly name: string;
    public readonly parameterCount: number;

    public readonly Q: IQRegPool;
    public readonly Parameter: IProcedureParameterPool;

    public readonly circuit: CircuitLine[] = [];

    public static create(name: string,
                         Q: IQRegPool,
                         Parameter: IProcedureParameterPool,
                         circuit: CircuitLine[]): IQProcedure {
        let parameterCount: number;
        if (Parameter.data.parameterMap.size === 0) {
            parameterCount = 0;
        } else {
            parameterCount = [...Parameter.data.parameterMap.keys()].reduce((previousValue: number, currentValue: number, currentIndex: number, array: number[]): number => {
                return previousValue > currentValue ? previousValue : currentValue;
            }) + 1;
        }
        const data = new QProcedure(name, parameterCount, Q, Parameter, circuit);
        const func = (...argumentList: RotationArgument[]): IQProcedureOP => {
            if (argumentList.length < parameterCount) {
                throw new ArgumentError('Not enough QProcedure argument!');
            }
            return QProcedureOP.create(name, data, argumentList);
        };
        func.data = data;
        return func;
    }

    private constructor(name: string, parameterCount: number, Q: IQRegPool, Parameter: IProcedureParameterPool, circuit: CircuitLine[]) {
        for (const circuitLine of circuit) {
            if (circuitLine.data instanceof MeasureOP) {
                throw new ArgumentError('QProcedure must not measure!');
            }
        }

        this.name = name;
        this.parameterCount = parameterCount;
        this.Q = Q;
        this.Parameter = Parameter;
        this.circuit = circuit;

        Q.data.changeEnv(this);
    }
}

export interface IQProcedureOP extends OperationFunc {
    data: QProcedureOP;
}

export class QProcedureOP extends QOperation {
    public readonly argumentList: RotationArgument[];
    public readonly procedureData: QProcedure;

    public static create(name: string, procedureData: QProcedure, argumentList: RotationArgument[]): IQProcedureOP {
        const data = new QProcedureOP(name, procedureData, argumentList);
        const func = (...qRegList: QRegStorage[]): void => {
            data.op(qRegList);
        };
        func.data = data;
        return func;
    }

    private constructor(name: string, procedureData: QProcedure, argumentList: RotationArgument[]) {
        super(name);
        this.procedureData = procedureData;
        this.argumentList = argumentList;
    }
}