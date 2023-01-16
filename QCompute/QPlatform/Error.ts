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

// Define Error

enum ErrorEnum {
    ArgumentError,
    NetworkError,
    RuntimeError,
    LogicError,
    TokenError,
}

export class ErrorBase extends Error {
    public readonly code: ErrorEnum;

    protected constructor(msg: string, err: ErrorEnum) {
        super(msg);
        this.name = ErrorEnum[err];
    }
}

export class ArgumentError extends ErrorBase {
    public constructor(msg: string) {
        super(msg, ErrorEnum.ArgumentError);
    }
}

export class NetworkError extends ErrorBase {
    public constructor(msg: string) {
        super(msg, ErrorEnum.NetworkError);
    }
}

export class RuntimeError extends ErrorBase {
    public constructor(msg: string) {
        super(msg, ErrorEnum.RuntimeError);
    }
}

export class LogicError extends ErrorBase {
    public constructor(msg: string) {
        super(msg, ErrorEnum.LogicError);
    }
}

export class TokenError extends ErrorBase {
    public constructor(msg: string) {
        super(msg, ErrorEnum.TokenError);
    }
}