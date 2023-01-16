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

// Circuit tools

import {
    Body as PBBody,
    CircuitLine as PBCircuitLine,
    CompositeGate as PBCompositeGate,
    FixedGate as PBFixedGate,
    Head as PBHead,
    Measure as PBMeasure,
    Procedure as PBProcedure,
    Program as PBProgram,
    RotationGate as PBRotationGate
} from "../QProtobuf/Library/QProtobuf";
import {FixedGateOP} from "./Operation/FixedGate";
import {CircuitLine} from "./Operation/QOperation";
import {RotationGateOP} from "./Operation/RotationGate";
import {CompositeGateOP} from "./Operation/CompositeGate";
import {QProcedureOP} from "./Operation/QProcedure";
import {MeasureOP} from "./Operation/Measure";
import {BarrierOp} from "./Operation/Barrier";
import {CustomizedGateOP} from "./Operation/CustomizedGate";
import {ArgumentError} from "./Error";
import {ProcedureParameterStorage} from "./ProcedureParameterPool";
import {QEnv} from "./QEnv";

export function QEnvToProtobuf(program: PBProgram, env: QEnv): void {
    const head = new PBHead();
    program.head = head;
    head.usingQRegList = [...env.Q.data.registerMap.keys()].sort();
    head.usingCRegList = [...env.measuredCRegSet.keys()].sort();

    const body = new PBBody();
    program.body = body;

    for (const circuitLine of env.circuit) {
        body.circuit.push(circuitLineToProtobuf(circuitLine));
    }

    for (const [name, procedure] of env.procedureMap) {
        const pbProcedure = new PBProcedure();
        body.procedureMap[name] = pbProcedure;
        pbProcedure.parameterCount = procedure.data.Parameter.data.parameterMap.size;
        pbProcedure.usingQRegList = [...procedure.data.Q.data.registerMap.keys()].sort();
        for (const circuitLine of procedure.data.circuit) {
            pbProcedure.circuit.push(circuitLineToProtobuf(circuitLine));
        }
    }
}

function circuitLineToProtobuf(circuitLine: CircuitLine): PBCircuitLine {
    const pbCircuitLine = new PBCircuitLine();
    if (circuitLine.data instanceof FixedGateOP) {
        pbCircuitLine.fixedGate = PBFixedGate[circuitLine.data.name];
    } else if (circuitLine.data instanceof RotationGateOP) {
        pbCircuitLine.rotationGate = PBRotationGate[circuitLine.data.name];
        [pbCircuitLine.argumentIdList, pbCircuitLine.argumentValueList] = getRotationArgumentList(circuitLine);
    } else if (circuitLine.data instanceof CustomizedGateOP) {
        throw new ArgumentError('CustomizedGate not implemented!');
    } else if (circuitLine.data instanceof CompositeGateOP) {
        pbCircuitLine.compositeGate = PBCompositeGate[circuitLine.data.name];
        [pbCircuitLine.argumentIdList, pbCircuitLine.argumentValueList] = getRotationArgumentList(circuitLine);
    } else if (circuitLine.data instanceof QProcedureOP) {
        pbCircuitLine.procedureName = circuitLine.data.name;
        [pbCircuitLine.argumentIdList, pbCircuitLine.argumentValueList] = getRotationArgumentList(circuitLine);
    } else if (circuitLine.data instanceof MeasureOP) {
        const measure = new PBMeasure();
        pbCircuitLine.measure = measure;
        measure.type = PBMeasure.Type[circuitLine.data.name];
        measure.cRegList = circuitLine.cRegIndexList;
    } else if (circuitLine.data instanceof BarrierOp) {
        pbCircuitLine.barrier = true;
    }
    pbCircuitLine.qRegList = circuitLine.qRegIndexList;
    return pbCircuitLine;
}

function getRotationArgumentList(circuitLine: CircuitLine): [number[], number[]] {
    if (!(circuitLine.data instanceof RotationGateOP ||
        circuitLine.data instanceof CompositeGateOP ||
        circuitLine.data instanceof QProcedureOP)) {
        throw new ArgumentError('Wrong opreation type!');
    }
    const argumentIdList: number[] = [];
    const argumentValueList: number[] = [];
    let validArgumentIdList = false;
    let validArgumentValueList = false;
    for (const argument of circuitLine.data.argumentList) {
        if (argument instanceof ProcedureParameterStorage) {
            argumentIdList.push(argument.index);
            argumentValueList.push(0);
            validArgumentIdList = true;
        } else {
            argumentIdList.push(-1);
            argumentValueList.push(argument);
            validArgumentValueList = true;
        }
    }
    if (!validArgumentIdList) {
        argumentIdList.length = 0;
    } else if (!validArgumentValueList) {
        argumentValueList.length = 0;
    }
    return [argumentIdList, argumentValueList];
}