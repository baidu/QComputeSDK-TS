import { OperationFunc, QOperation } from "./QOperation";
export interface IBarrierOp extends OperationFunc {
    data: BarrierOp;
}
export declare class BarrierOp extends QOperation {
    static create(): IBarrierOp;
}
export declare const Barrier: IBarrierOp;
