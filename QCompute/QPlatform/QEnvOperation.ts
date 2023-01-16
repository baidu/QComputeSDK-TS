// Copyright (c) 2020 Baidu, Inc. All Rights Reserved.
//
//     Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//     You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//     Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//     See the License for the specific language governing permissions and
// limitations under the License.

// Quantum Environment Operation

import {RotationArgument} from "./Operation/QOperation";
import {
    ID, X, Y, Z, H, S, SDG, T, TDG, // 1 bit
    CX, CY, CZ, CH, SWAP, // 2 bit
    CCX, CSWAP // 3 bit
} from "./Operation/FixedGate";
import {
    IRotationGate, RotationGateOP,
    U, RX, RY, RZ, // 1 bit
    CU, CRX, CRY, CRZ, // 2 bit
} from "./Operation/RotationGate";
import {CustomizedGateOP, ICustomizedGate} from "./Operation/CustomizedGate";
import {
    ICompositeGate, CompositeGateOP,
} from "./Operation/CompositeGate";
import {IQProcedure, IQProcedureOP, QProcedure, QProcedureOP} from "./Operation/QProcedure";
import {Barrier} from "./Operation/Barrier";
import {MeasureZ} from "./Operation/Measure";
import {QEnv} from "./QEnv";
import {QRegStorage} from "./QRegPool";
import {ArgumentError} from "./Error";

export class QEnvOperation extends QEnv {
    // Fixed Gate
    public ID(...qRegIndexList: number[]): this {
        ID(...qRegIndexList.map(qRegIndex => this.Q(qRegIndex)));
        return this;
    }

    public X(...qRegIndexList: number[]): this {
        X(...qRegIndexList.map(qRegIndex => this.Q(qRegIndex)));
        return this;
    }

    public Y(...qRegIndexList: number[]): this {
        Y(...qRegIndexList.map(qRegIndex => this.Q(qRegIndex)));
        return this;
    }

    public Z(...qRegIndexList: number[]): this {
        Z(...qRegIndexList.map(qRegIndex => this.Q(qRegIndex)));
        return this;
    }

    public H(...qRegIndexList: number[]): this {
        H(...qRegIndexList.map(qRegIndex => this.Q(qRegIndex)));
        return this;
    }

    public S(...qRegIndexList: number[]): this {
        S(...qRegIndexList.map(qRegIndex => this.Q(qRegIndex)));
        return this;
    }

    public SDG(...qRegIndexList: number[]): this {
        SDG(...qRegIndexList.map(qRegIndex => this.Q(qRegIndex)));
        return this;
    }

    public T(...qRegIndexList: number[]): this {
        T(...qRegIndexList.map(qRegIndex => this.Q(qRegIndex)));
        return this;
    }

    public TDG(...qRegIndexList: number[]): this {
        TDG(...qRegIndexList.map(qRegIndex => this.Q(qRegIndex)));
        return this;
    }

    public CX(...qRegIndexList: number[]): this {
        CX(...qRegIndexList.map(qRegIndex => this.Q(qRegIndex)));
        return this;
    }

    public CY(...qRegIndexList: number[]): this {
        CY(...qRegIndexList.map(qRegIndex => this.Q(qRegIndex)));
        return this;
    }

    public CZ(...qRegIndexList: number[]): this {
        CZ(...qRegIndexList.map(qRegIndex => this.Q(qRegIndex)));
        return this;
    }

    public CH(...qRegIndexList: number[]): this {
        CH(...qRegIndexList.map(qRegIndex => this.Q(qRegIndex)));
        return this;
    }

    public SWAP(...qRegIndexList: number[]): this {
        SWAP(...qRegIndexList.map(qRegIndex => this.Q(qRegIndex)));
        return this;
    }

    public CCX(...qRegIndexList: number[]): this {
        CCX(...qRegIndexList.map(qRegIndex => this.Q(qRegIndex)));
        return this;
    }

    public CSWAP(...qRegIndexList: number[]): this {
        CSWAP(...qRegIndexList.map(qRegIndex => this.Q(qRegIndex)));
        return this;
    }

    // Rotation Gate
    public U(theta: RotationArgument,
             phi: RotationArgument = undefined,
             lamda: RotationArgument = undefined): IGateWrap<this> {
        const gate = U(theta, phi, lamda);
        return this.gateWrap(gate);
    }

    public RX(theta: RotationArgument): IGateWrap<this> {
        const gate = RX(theta);
        return this.gateWrap(gate);
    }

    public RY(theta: RotationArgument): IGateWrap<this> {
        const gate = RY(theta);
        return this.gateWrap(gate);
    }

    public RZ(lamda: RotationArgument): IGateWrap<this> {
        const gate = RZ(lamda);
        return this.gateWrap(gate);
    }

    public CU(theta: RotationArgument,
              phi: RotationArgument,
              lamda: RotationArgument): IGateWrap<this> {
        const gate = CU(theta, phi, lamda);
        return this.gateWrap(gate);
    }

    public CRX(theta: RotationArgument): IGateWrap<this> {
        const gate = CRX(theta);
        return this.gateWrap(gate);
    }

    public CRY(theta: RotationArgument): IGateWrap<this> {
        const gate = CRY(theta);
        return this.gateWrap(gate);
    }

    public CRZ(lamda: RotationArgument): IGateWrap<this> {
        const gate = CRZ(lamda);
        return this.gateWrap(gate);
    }

    // Customized Gate
    public CustomizedGate(gate: ICustomizedGate): IGateWrap<this> {
        return this.gateWrap(gate);
    }

    // Composite Gate
    // public RZZ(theta: RotationArgument,
    //            phi: RotationArgument = undefined,
    //            lamda: RotationArgument = undefined): IGateWrap<this> {
    //     const gate = RZZ(theta, phi, lamda);
    //     return this.gateWrap(gate);
    // }

    // QProcedure
    public QProcedure(procedure: string | IQProcedure): IProcedureWrap<this> {
        if (typeof procedure === 'string') {
            procedure = this.procedureMap.get(procedure);
        }
        return this.procedureWrap(procedure);
    }

    // Barrier
    public Barrier(...qRegIndexList: number[]): this {
        Barrier(...qRegIndexList.map(qRegIndex => this.Q(qRegIndex)));
        return this;
    }

    // Measure
    public MeasureZ(qRegIndexList: (number | QRegStorage)[] = null, cRegIndexList: number[] = null): this {
        if (qRegIndexList === null && cRegIndexList === null) {
            [qRegIndexList, cRegIndexList] = this.Q.toListPair();
        } else if (qRegIndexList === null || cRegIndexList === null) {
            throw new ArgumentError('Mismatched qRegIndexList and cRegIndexList');
        }
        MeasureZ(qRegIndexList.map(qRegIndex => typeof qRegIndex === 'number' ? this.Q(qRegIndex) : qRegIndex), cRegIndexList);
        return this;
    }

    private gateWrap(gate: IRotationGate | ICustomizedGate | ICompositeGate | IQProcedureOP): IGateWrap<this> {
        const func = (...qRegIndexList: number[]): this => {
            gate(...qRegIndexList.map(qRegIndex => this.Q(qRegIndex)));
            return this;
        };
        func.data = gate.data;
        return func;
    }

    private procedureWrap(procedure: IQProcedure): IProcedureWrap<this> {
        const func = (...argumentList: RotationArgument[]): IGateWrap<this> => {
            const procedureOP = procedure(...argumentList);
            return this.gateWrap(procedureOP);
        };
        func.data = procedure.data;
        return func;
    }
}

type IGateWrapFunc<T> = (...qRegIndexList: number[]) => T;

interface IGateWrap<T> extends IGateWrapFunc<T> {
    data: RotationGateOP | CustomizedGateOP | CompositeGateOP | QProcedureOP;
}

type IProcedureWrapFunc<T> = (...argumentList: RotationArgument[]) => IGateWrap<T>;

interface IProcedureWrap<T> extends IProcedureWrapFunc<T> {
    data: QProcedure;
}
