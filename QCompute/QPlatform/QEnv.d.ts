import { IQProcedure } from "./Operation/QProcedure";
import { Program as PBProgram } from "../QProtobuf/Library/QProtobuf";
import { CircuitLine } from "./Operation/QOperation";
import { TaskResult } from "./QTask";
import { BackendName, ServerModule } from './QPlatform';
export declare class QEnv {
    readonly Q: import("./QRegPool").IQRegPool;
    readonly Parameter: import("./ProcedureParameterPool").IProcedureParameterPool;
    readonly measuredQRegSet: Set<number>;
    readonly measuredCRegSet: Set<number>;
    readonly circuit: CircuitLine[];
    readonly procedureMap: Map<string, IQProcedure>;
    program: PBProgram;
    backendName: string;
    backendArgument: any[];
    usedServerModuleList: [string, object][];
    backend(backendName: BackendName, ...backendArgument: any[]): void;
    convertToProcedure(name: string, env: QEnv): IQProcedure;
    publish(): void;
    commit(shots: number, fetchMeasure?: boolean, downloadResult?: boolean, notes?: string | null, debug?: string | null): Promise<TaskResult | string>;
    _cloudCommit(shots: number, fetchMeasure: any, downloadResult: any, notes: string | null, debug: string | null): Promise<TaskResult | string>;
    serverModule(module: ServerModule, argument: object): void;
}
