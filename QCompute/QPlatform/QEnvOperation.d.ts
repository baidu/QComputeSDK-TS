import { RotationArgument } from "./Operation/QOperation";
import { RotationGateOP } from "./Operation/RotationGate";
import { CustomizedGateOP, ICustomizedGate } from "./Operation/CustomizedGate";
import { CompositeGateOP } from "./Operation/CompositeGate";
import { IQProcedure, QProcedure, QProcedureOP } from "./Operation/QProcedure";
import { QEnv } from "./QEnv";
import { QRegStorage } from "./QRegPool";
export declare class QEnvOperation extends QEnv {
    ID(...qRegIndexList: number[]): this;
    X(...qRegIndexList: number[]): this;
    Y(...qRegIndexList: number[]): this;
    Z(...qRegIndexList: number[]): this;
    H(...qRegIndexList: number[]): this;
    S(...qRegIndexList: number[]): this;
    SDG(...qRegIndexList: number[]): this;
    T(...qRegIndexList: number[]): this;
    TDG(...qRegIndexList: number[]): this;
    CX(...qRegIndexList: number[]): this;
    CY(...qRegIndexList: number[]): this;
    CZ(...qRegIndexList: number[]): this;
    CH(...qRegIndexList: number[]): this;
    SWAP(...qRegIndexList: number[]): this;
    CCX(...qRegIndexList: number[]): this;
    CSWAP(...qRegIndexList: number[]): this;
    U(theta: RotationArgument, phi?: RotationArgument, lamda?: RotationArgument): IGateWrap<this>;
    RX(theta: RotationArgument): IGateWrap<this>;
    RY(theta: RotationArgument): IGateWrap<this>;
    RZ(lamda: RotationArgument): IGateWrap<this>;
    CU(theta: RotationArgument, phi: RotationArgument, lamda: RotationArgument): IGateWrap<this>;
    CRX(theta: RotationArgument): IGateWrap<this>;
    CRY(theta: RotationArgument): IGateWrap<this>;
    CRZ(lamda: RotationArgument): IGateWrap<this>;
    CustomizedGate(gate: ICustomizedGate): IGateWrap<this>;
    QProcedure(procedure: string | IQProcedure): IProcedureWrap<this>;
    Barrier(...qRegIndexList: number[]): this;
    MeasureZ(qRegIndexList?: (number | QRegStorage)[], cRegIndexList?: number[]): this;
    private gateWrap;
    private procedureWrap;
}
type IGateWrapFunc<T> = (...qRegIndexList: number[]) => T;
interface IGateWrap<T> extends IGateWrapFunc<T> {
    data: RotationGateOP | CustomizedGateOP | CompositeGateOP | QProcedureOP;
}
type IProcedureWrapFunc<T> = (...argumentList: RotationArgument[]) => IGateWrap<T>;
interface IProcedureWrap<T> extends IProcedureWrapFunc<T> {
    data: QProcedure;
}
export {};
