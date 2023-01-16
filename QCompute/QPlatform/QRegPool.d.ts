import { QProcedure } from "./Operation/QProcedure";
import { StorageFunc } from "./Operation/QOperation";
import { QEnv } from "./QEnv";
type QRegPoolFunc = StorageFunc<QRegStorage>;
export interface IQRegPool extends QRegPoolFunc {
    data: QRegPool;
    createList(num: number): QRegStorage[];
    toListPair(): [QRegStorage[], number[]];
}
export declare class QRegPool {
    env: QEnv | QProcedure;
    readonly registerMap: Map<number, QRegStorage>;
    static create(env: QEnv | QProcedure): IQRegPool;
    private constructor();
    private get;
    changeEnv(env: QEnv | QProcedure): void;
    private createList;
    private toListPair;
}
export declare class QRegStorage {
    readonly index: number;
    env: QEnv | QProcedure;
    constructor(index: number, env: QEnv | QProcedure);
}
export {};
