import { OperationFunc, QOperation } from "./QOperation";
export interface ICustomizedGate extends OperationFunc {
    data: CustomizedGateOP;
}
export declare class CustomizedGateOP extends QOperation {
    readonly matrix: unknown;
    static create(matrix: unknown): ICustomizedGate;
    private constructor();
}
