import { QProcedureOP } from "./QProcedure";
import { QRegStorage } from "../QRegPool";
import { ProcedureParameterStorage } from "../ProcedureParameterPool";
import { FixedGateOP } from "./FixedGate";
import { RotationGateOP } from "./RotationGate";
import { CompositeGateOP } from "./CompositeGate";
import { BarrierOp } from "./Barrier";
import { MeasureOP } from "./Measure";
export type StorageFunc<T> = (index: number) => T;
export type OperationFunc = (...qRegList: QRegStorage[]) => void;
export type MeasureFunc = (qRegList: QRegStorage[], cRegList: number[]) => void;
export type RotationArgument = number | ProcedureParameterStorage;
export declare class QOperation {
    readonly name: string;
    readonly bits: number;
    protected constructor(name?: string, bits?: number);
    protected op(qRegList: QRegStorage[]): void;
    protected opMeasure(qRegList: QRegStorage[], cRegList: number[]): void;
}
type Operation = FixedGateOP | RotationGateOP | CompositeGateOP | QProcedureOP | BarrierOp | MeasureOP;
interface IOperationData {
    data: Operation;
}
export declare class CircuitLine implements IOperationData {
    data: Operation;
    qRegIndexList: number[];
    cRegIndexList: number[];
}
export {};
