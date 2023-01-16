import { OperationFunc, QOperation } from "./QOperation";
export interface IFixedGate extends OperationFunc {
    data: FixedGateOP;
}
export declare class FixedGateOP extends QOperation {
    static create(gate: string, bits: number): IFixedGate;
}
export declare const ID: IFixedGate;
export declare const X: IFixedGate;
export declare const Y: IFixedGate;
export declare const Z: IFixedGate;
export declare const H: IFixedGate;
export declare const S: IFixedGate;
export declare const SDG: IFixedGate;
export declare const T: IFixedGate;
export declare const TDG: IFixedGate;
export declare const CX: IFixedGate;
export declare const CY: IFixedGate;
export declare const CZ: IFixedGate;
export declare const CH: IFixedGate;
export declare const SWAP: IFixedGate;
export declare const CCX: IFixedGate;
export declare const CSWAP: IFixedGate;
