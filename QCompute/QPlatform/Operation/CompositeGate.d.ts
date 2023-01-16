import { OperationFunc, QOperation, RotationArgument } from "./QOperation";
export interface ICompositeGate extends OperationFunc {
    data: CompositeGateOP;
}
export declare class CompositeGateOP extends QOperation {
    readonly argumentList: RotationArgument[];
    static create(gate: string, bits: number, angleList: RotationArgument[]): ICompositeGate;
    private constructor();
}
