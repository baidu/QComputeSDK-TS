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

// Quantum Register

import {QProcedure} from "./Operation/QProcedure";
import {StorageFunc} from "./Operation/QOperation";
import {QEnv} from "./QEnv";
import {ArgumentError} from "./Error";

type QRegPoolFunc = StorageFunc<QRegStorage>;

export interface IQRegPool extends QRegPoolFunc {
    data: QRegPool;

    createList(num: number): QRegStorage[];

    toListPair(): [QRegStorage[], number[]];
}

export class QRegPool {
    public env: QEnv | QProcedure;
    public readonly registerMap = new Map<number, QRegStorage>();

    public static create(env: QEnv | QProcedure): IQRegPool {
        const data = new QRegPool(env);
        const func = (index: number): QRegStorage => {
            return data.get(index);
        };
        func.data = data;
        func.createList = (num: number): QRegStorage[] => {
            return data.createList(num);
        }
        func.toListPair = (): [QRegStorage[], number[]] => {
            return data.toListPair();
        }
        return func;
    }

    private constructor(env: QEnv | QProcedure) {
        this.env = env;
    }

    private get(index: number) {
        let value = this.registerMap.get(index);
        if (!value) {
            value = new QRegStorage(index, this.env);
            this.registerMap.set(index, value);
        }
        return value;
    }

    public changeEnv(env: QEnv | QProcedure): void {
        this.env = env;
        for (const qReg of this.registerMap.values()) {
            qReg.env = env;
        }
    }

    private createList(num: number): QRegStorage[] {
        if (this.registerMap.size > 0) {
            throw new ArgumentError('createList is called when self.registerMap is not empty!');
        }
        for (let i = 0; i < num; i++) {
            this.get(i);
        }
        const ret: QRegStorage[] = [];
        for (const qReg of this.registerMap.values()) {
            ret.push(qReg);
        }
        return ret;
    }

    private toListPair(): [QRegStorage[], number[]] {
        const qRegList: QRegStorage[] = [];
        const indexList: number[] = [];
        let i = 0;
        for (const qReg of this.registerMap.values()) {
            qRegList.push(qReg);
            indexList.push(i);
            i++;
        }
        return [qRegList, indexList];
    }
}

export class QRegStorage {
    public readonly index: number;
    public env: QEnv | QProcedure;

    public constructor(index: number, env: QEnv | QProcedure) {
        this.index = index;
        this.env = env;
    }
}