import { OperationFunc, QOperation, RotationArgument } from "./QOperation";
export interface IRotationGate extends OperationFunc {
    data: RotationGateOP;
}
export declare class RotationGateOP extends QOperation {
    readonly argumentList: RotationArgument[];
    readonly uGateArgumentList: RotationArgument[];
    static create(gate: string, bits: number, angleList: RotationArgument[], uGateArgumentList: RotationArgument[]): IRotationGate;
    private constructor();
}
export declare function U(theta: RotationArgument, phi?: RotationArgument, lamda?: RotationArgument): IRotationGate;
export declare function RX(theta: RotationArgument): IRotationGate;
export declare function RY(theta: RotationArgument): IRotationGate;
export declare function RZ(lamda: RotationArgument): IRotationGate;
export declare function CU(theta: RotationArgument, phi: RotationArgument, lamda: RotationArgument): IRotationGate;
export declare function CRX(theta: RotationArgument): IRotationGate;
export declare function CRY(theta: RotationArgument): IRotationGate;
export declare function CRZ(lamda: RotationArgument): IRotationGate;
