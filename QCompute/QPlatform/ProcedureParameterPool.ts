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

// Procedure Parameter

import {StorageFunc} from "./Operation/QOperation";

type ProcedureParameterPoolFunc = StorageFunc<ProcedureParameterStorage>;

export interface IProcedureParameterPool extends ProcedureParameterPoolFunc {
    data: ProcedureParameterPool;
}

export class ProcedureParameterPool {
    public readonly parameterMap = new Map<number, ProcedureParameterStorage>();

    public static create(): IProcedureParameterPool {
        const data = new ProcedureParameterPool();
        const func = (index: number): ProcedureParameterStorage => {
            return data.get(index);
        };
        func.data = data;
        return func;
    }

    private get(index: number) {
        let value = this.parameterMap.get(index);
        if (!value) {
            value = new ProcedureParameterStorage(index);
            this.parameterMap.set(index, value);
        }
        return value;
    }
}

export class ProcedureParameterStorage {
    public readonly index: number;

    public constructor(index) {
        this.index = index;
    }
}