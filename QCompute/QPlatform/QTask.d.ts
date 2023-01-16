export default class QTask {
    circuitId: number;
    taskId: number;
    private originFile;
    private measureFile;
    uploadCircuit(file: string): Promise<void>;
    create(shots: number, backend: string, qbits: number, backendParam: (string | object)[], modules: [string, object][], notes: string | null, debug: string | null): Promise<void>;
    private fetchResult;
    private fetchOriginResult;
    private fetchMeasureResult;
    wait(fetchMeasure: any, downloadResult: any): Promise<TaskResult | string>;
}
declare class ModuleInfo {
    module: string;
    arguments: object;
}
export declare class TaskResult {
    taskId: number;
    status?: string;
    origin?: string;
    moduleList?: ModuleInfo[];
    counts?: object;
    measure?: string;
}
export {};
