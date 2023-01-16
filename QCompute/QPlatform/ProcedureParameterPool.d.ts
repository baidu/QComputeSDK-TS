import { StorageFunc } from "./Operation/QOperation";
type ProcedureParameterPoolFunc = StorageFunc<ProcedureParameterStorage>;
export interface IProcedureParameterPool extends ProcedureParameterPoolFunc {
    data: ProcedureParameterPool;
}
export declare class ProcedureParameterPool {
    readonly parameterMap: Map<number, ProcedureParameterStorage>;
    static create(): IProcedureParameterPool;
    private get;
}
export declare class ProcedureParameterStorage {
    readonly index: number;
    constructor(index: any);
}
export {};
