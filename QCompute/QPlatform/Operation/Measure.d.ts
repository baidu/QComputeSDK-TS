import { MeasureFunc, QOperation } from "./QOperation";
export interface IMeasure extends MeasureFunc {
    data: MeasureOP;
}
export declare class MeasureOP extends QOperation {
    static create(gate: string): IMeasure;
}
export declare const MeasureZ: IMeasure;
