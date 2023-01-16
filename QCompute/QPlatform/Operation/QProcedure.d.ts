import { IQRegPool } from "../QRegPool";
import { IProcedureParameterPool } from "../ProcedureParameterPool";
import { CircuitLine, OperationFunc, QOperation, RotationArgument } from "./QOperation";
export type ProcedureFunc = (...argumentList: RotationArgument[]) => IQProcedureOP;
export interface IQProcedure extends ProcedureFunc {
    data: QProcedure;
}
export declare class QProcedure {
    readonly name: string;
    readonly parameterCount: number;
    readonly Q: IQRegPool;
    readonly Parameter: IProcedureParameterPool;
    readonly circuit: CircuitLine[];
    static create(name: string, Q: IQRegPool, Parameter: IProcedureParameterPool, circuit: CircuitLine[]): IQProcedure;
    private constructor();
}
export interface IQProcedureOP extends OperationFunc {
    data: QProcedureOP;
}
export declare class QProcedureOP extends QOperation {
    readonly argumentList: RotationArgument[];
    readonly procedureData: QProcedure;
    static create(name: string, procedureData: QProcedure, argumentList: RotationArgument[]): IQProcedureOP;
    private constructor();
}
