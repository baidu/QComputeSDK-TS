declare enum ErrorEnum {
    ArgumentError = 0,
    NetworkError = 1,
    RuntimeError = 2,
    LogicError = 3,
    TokenError = 4
}
export declare class ErrorBase extends Error {
    readonly code: ErrorEnum;
    protected constructor(msg: string, err: ErrorEnum);
}
export declare class ArgumentError extends ErrorBase {
    constructor(msg: string);
}
export declare class NetworkError extends ErrorBase {
    constructor(msg: string);
}
export declare class RuntimeError extends ErrorBase {
    constructor(msg: string);
}
export declare class LogicError extends ErrorBase {
    constructor(msg: string);
}
export declare class TokenError extends ErrorBase {
    constructor(msg: string);
}
export {};
