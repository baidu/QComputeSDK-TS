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

// Customized Gate Operation

import {OperationFunc, QOperation} from "./QOperation";
import {QRegStorage} from "../QRegPool";

export interface ICustomizedGate extends OperationFunc {
    data: CustomizedGateOP;
}

export class CustomizedGateOP extends QOperation {
    public readonly matrix: unknown;

    public static create(matrix: unknown): ICustomizedGate {
        const data = new CustomizedGateOP(matrix);
        const func = (...qRegList: QRegStorage[]): void => {
            // todo
            // data.op(qRegList);
        };
        func.data = data;
        return func;
    }

    private constructor(matrix: unknown) {
        const bits = 0; // todo 计算矩阵，算出比特数
        super(null, bits);
        this.matrix = matrix;
    }
}
