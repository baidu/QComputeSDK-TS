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

// Measure Operation

import {MeasureFunc, QOperation} from "./QOperation";
import {QRegStorage} from "../QRegPool";

export interface IMeasure extends MeasureFunc {
    data: MeasureOP;
}

export class MeasureOP extends QOperation {
    public static create(gate: string): IMeasure {
        const data = new MeasureOP(gate);
        const func = (qRegList: QRegStorage[], cRegList: number[]): void => {
            data.opMeasure(qRegList, cRegList);
        };
        func.data = data;
        return func;
    }
}

export const MeasureZ = MeasureOP.create('Z');