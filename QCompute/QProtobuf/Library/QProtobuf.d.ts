// @ts-nocheck

import * as $protobuf from "protobufjs";
/** Properties of a Complex. */
export interface IComplex {

    /** Complex real */
    real?: (number|null);

    /** Complex imag */
    imag?: (number|null);
}

/** Represents a Complex. */
export class Complex implements IComplex {

    /**
     * Constructs a new Complex.
     * @param [properties] Properties to set
     */
    constructor(properties?: IComplex);

    /** Complex real. */
    public real: number;

    /** Complex imag. */
    public imag?: (number|null);

    /** Complex _imag. */
    public _imag?: "imag";

    /**
     * Creates a new Complex instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Complex instance
     */
    public static create(properties?: IComplex): Complex;

    /**
     * Encodes the specified Complex message. Does not implicitly {@link Complex.verify|verify} messages.
     * @param message Complex message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IComplex, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Complex message, length delimited. Does not implicitly {@link Complex.verify|verify} messages.
     * @param message Complex message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IComplex, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Complex message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Complex
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Complex;

    /**
     * Decodes a Complex message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Complex
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Complex;

    /**
     * Verifies a Complex message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Complex message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Complex
     */
    public static fromObject(object: { [k: string]: any }): Complex;

    /**
     * Creates a plain object from a Complex message. Also converts values to other types if specified.
     * @param message Complex
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Complex, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Complex to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Matrix. */
export interface IMatrix {

    /** Matrix shape */
    shape?: (number[]|null);

    /** Matrix array */
    array?: (IComplex[]|null);
}

/** Represents a Matrix. */
export class Matrix implements IMatrix {

    /**
     * Constructs a new Matrix.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMatrix);

    /** Matrix shape. */
    public shape: number[];

    /** Matrix array. */
    public array: IComplex[];

    /**
     * Creates a new Matrix instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Matrix instance
     */
    public static create(properties?: IMatrix): Matrix;

    /**
     * Encodes the specified Matrix message. Does not implicitly {@link Matrix.verify|verify} messages.
     * @param message Matrix message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMatrix, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Matrix message, length delimited. Does not implicitly {@link Matrix.verify|verify} messages.
     * @param message Matrix message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMatrix, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Matrix message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Matrix
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Matrix;

    /**
     * Decodes a Matrix message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Matrix
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Matrix;

    /**
     * Verifies a Matrix message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Matrix message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Matrix
     */
    public static fromObject(object: { [k: string]: any }): Matrix;

    /**
     * Creates a plain object from a Matrix message. Also converts values to other types if specified.
     * @param message Matrix
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Matrix, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Matrix to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** FixedGate enum. */
export enum FixedGate {
    ID = 0,
    X = 1,
    Y = 2,
    Z = 3,
    H = 4,
    S = 5,
    SDG = 6,
    T = 7,
    TDG = 8,
    CX = 9,
    CY = 10,
    CZ = 11,
    CH = 12,
    SWAP = 13,
    CCX = 14,
    CSWAP = 15
}

/** RotationGate enum. */
export enum RotationGate {
    U = 0,
    RX = 1,
    RY = 2,
    RZ = 3,
    CU = 4,
    CRX = 5,
    CRY = 6,
    CRZ = 7
}

/** Represents a CustomizedGate. */
export class CustomizedGate implements ICustomizedGate {

    /**
     * Constructs a new CustomizedGate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICustomizedGate);

    /** CustomizedGate matrix. */
    public matrix?: (IMatrix|null);

    /**
     * Creates a new CustomizedGate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CustomizedGate instance
     */
    public static create(properties?: ICustomizedGate): CustomizedGate;

    /**
     * Encodes the specified CustomizedGate message. Does not implicitly {@link CustomizedGate.verify|verify} messages.
     * @param message CustomizedGate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICustomizedGate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CustomizedGate message, length delimited. Does not implicitly {@link CustomizedGate.verify|verify} messages.
     * @param message CustomizedGate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICustomizedGate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CustomizedGate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CustomizedGate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CustomizedGate;

    /**
     * Decodes a CustomizedGate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CustomizedGate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CustomizedGate;

    /**
     * Verifies a CustomizedGate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CustomizedGate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CustomizedGate
     */
    public static fromObject(object: { [k: string]: any }): CustomizedGate;

    /**
     * Creates a plain object from a CustomizedGate message. Also converts values to other types if specified.
     * @param message CustomizedGate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CustomizedGate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CustomizedGate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** CompositeGate enum. */
export enum CompositeGate {
    RZZ = 0
}

/** Represents a Measure. */
export class Measure implements IMeasure {

    /**
     * Constructs a new Measure.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMeasure);

    /** Measure type. */
    public type: Measure.Type;

    /** Measure cRegList. */
    public cRegList: number[];

    /**
     * Creates a new Measure instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Measure instance
     */
    public static create(properties?: IMeasure): Measure;

    /**
     * Encodes the specified Measure message. Does not implicitly {@link Measure.verify|verify} messages.
     * @param message Measure message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMeasure, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Measure message, length delimited. Does not implicitly {@link Measure.verify|verify} messages.
     * @param message Measure message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMeasure, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Measure message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Measure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Measure;

    /**
     * Decodes a Measure message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Measure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Measure;

    /**
     * Verifies a Measure message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Measure message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Measure
     */
    public static fromObject(object: { [k: string]: any }): Measure;

    /**
     * Creates a plain object from a Measure message. Also converts values to other types if specified.
     * @param message Measure
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Measure, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Measure to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Measure {

    /** Type enum. */
    enum Type {
        X = 0,
        Y = 1,
        Z = 2,
        PauliX = 3,
        PauliY = 4,
        PauliZ = 5
    }
}

/** Represents a Program. */
export class Program implements IProgram {

    /**
     * Constructs a new Program.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProgram);

    /** Program sdkVersion. */
    public sdkVersion: string;

    /** Program head. */
    public head?: (IHead|null);

    /** Program body. */
    public body?: (IBody|null);

    /** Program source. */
    public source?: (ISource|null);

    /**
     * Creates a new Program instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Program instance
     */
    public static create(properties?: IProgram): Program;

    /**
     * Encodes the specified Program message. Does not implicitly {@link Program.verify|verify} messages.
     * @param message Program message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProgram, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Program message, length delimited. Does not implicitly {@link Program.verify|verify} messages.
     * @param message Program message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProgram, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Program message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Program
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Program;

    /**
     * Decodes a Program message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Program
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Program;

    /**
     * Verifies a Program message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Program message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Program
     */
    public static fromObject(object: { [k: string]: any }): Program;

    /**
     * Creates a plain object from a Program message. Also converts values to other types if specified.
     * @param message Program
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Program, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Program to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a Head. */
export class Head implements IHead {

    /**
     * Constructs a new Head.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHead);

    /** Head usingQRegList. */
    public usingQRegList: number[];

    /** Head usingCRegList. */
    public usingCRegList: number[];

    /**
     * Creates a new Head instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Head instance
     */
    public static create(properties?: IHead): Head;

    /**
     * Encodes the specified Head message. Does not implicitly {@link Head.verify|verify} messages.
     * @param message Head message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHead, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Head message, length delimited. Does not implicitly {@link Head.verify|verify} messages.
     * @param message Head message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHead, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Head message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Head
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Head;

    /**
     * Decodes a Head message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Head
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Head;

    /**
     * Verifies a Head message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Head message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Head
     */
    public static fromObject(object: { [k: string]: any }): Head;

    /**
     * Creates a plain object from a Head message. Also converts values to other types if specified.
     * @param message Head
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Head, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Head to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a Body. */
export class Body implements IBody {

    /**
     * Constructs a new Body.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBody);

    /** Body circuit. */
    public circuit: ICircuitLine[];

    /** Body procedureMap. */
    public procedureMap: { [k: string]: IProcedure };

    /**
     * Creates a new Body instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Body instance
     */
    public static create(properties?: IBody): Body;

    /**
     * Encodes the specified Body message. Does not implicitly {@link Body.verify|verify} messages.
     * @param message Body message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Body message, length delimited. Does not implicitly {@link Body.verify|verify} messages.
     * @param message Body message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Body message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Body
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Body;

    /**
     * Decodes a Body message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Body
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Body;

    /**
     * Verifies a Body message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Body message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Body
     */
    public static fromObject(object: { [k: string]: any }): Body;

    /**
     * Creates a plain object from a Body message. Also converts values to other types if specified.
     * @param message Body
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Body, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Body to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a Source. */
export class Source implements ISource {

    /**
     * Constructs a new Source.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISource);

    /** Source Qasm. */
    public Qasm: string;

    /**
     * Creates a new Source instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Source instance
     */
    public static create(properties?: ISource): Source;

    /**
     * Encodes the specified Source message. Does not implicitly {@link Source.verify|verify} messages.
     * @param message Source message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISource, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Source message, length delimited. Does not implicitly {@link Source.verify|verify} messages.
     * @param message Source message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISource, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Source message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Source
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Source;

    /**
     * Decodes a Source message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Source
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Source;

    /**
     * Verifies a Source message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Source message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Source
     */
    public static fromObject(object: { [k: string]: any }): Source;

    /**
     * Creates a plain object from a Source message. Also converts values to other types if specified.
     * @param message Source
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Source, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Source to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a CircuitLine. */
export class CircuitLine implements ICircuitLine {

    /**
     * Constructs a new CircuitLine.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICircuitLine);

    /** CircuitLine fixedGate. */
    public fixedGate?: (FixedGate|null);

    /** CircuitLine rotationGate. */
    public rotationGate?: (RotationGate|null);

    /** CircuitLine customizedGate. */
    public customizedGate?: (ICustomizedGate|null);

    /** CircuitLine compositeGate. */
    public compositeGate?: (CompositeGate|null);

    /** CircuitLine procedureName. */
    public procedureName?: (string|null);

    /** CircuitLine measure. */
    public measure?: (IMeasure|null);

    /** CircuitLine barrier. */
    public barrier?: (boolean|null);

    /** CircuitLine qRegList. */
    public qRegList: number[];

    /** CircuitLine argumentValueList. */
    public argumentValueList: number[];

    /** CircuitLine argumentIdList. */
    public argumentIdList: number[];

    /** CircuitLine op. */
    public op?: ("fixedGate"|"rotationGate"|"customizedGate"|"compositeGate"|"procedureName"|"measure"|"barrier");

    /**
     * Creates a new CircuitLine instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CircuitLine instance
     */
    public static create(properties?: ICircuitLine): CircuitLine;

    /**
     * Encodes the specified CircuitLine message. Does not implicitly {@link CircuitLine.verify|verify} messages.
     * @param message CircuitLine message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICircuitLine, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CircuitLine message, length delimited. Does not implicitly {@link CircuitLine.verify|verify} messages.
     * @param message CircuitLine message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICircuitLine, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CircuitLine message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CircuitLine
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CircuitLine;

    /**
     * Decodes a CircuitLine message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CircuitLine
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CircuitLine;

    /**
     * Verifies a CircuitLine message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CircuitLine message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CircuitLine
     */
    public static fromObject(object: { [k: string]: any }): CircuitLine;

    /**
     * Creates a plain object from a CircuitLine message. Also converts values to other types if specified.
     * @param message CircuitLine
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CircuitLine, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CircuitLine to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a Procedure. */
export class Procedure implements IProcedure {

    /**
     * Constructs a new Procedure.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProcedure);

    /** Procedure parameterCount. */
    public parameterCount: number;

    /** Procedure usingQRegList. */
    public usingQRegList: number[];

    /** Procedure circuit. */
    public circuit: ICircuitLine[];

    /**
     * Creates a new Procedure instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Procedure instance
     */
    public static create(properties?: IProcedure): Procedure;

    /**
     * Encodes the specified Procedure message. Does not implicitly {@link Procedure.verify|verify} messages.
     * @param message Procedure message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProcedure, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Procedure message, length delimited. Does not implicitly {@link Procedure.verify|verify} messages.
     * @param message Procedure message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProcedure, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Procedure message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Procedure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Procedure;

    /**
     * Decodes a Procedure message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Procedure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Procedure;

    /**
     * Verifies a Procedure message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Procedure message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Procedure
     */
    public static fromObject(object: { [k: string]: any }): Procedure;

    /**
     * Creates a plain object from a Procedure message. Also converts values to other types if specified.
     * @param message Procedure
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Procedure, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Procedure to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a QObject. */
export class QObject implements IQObject {

    /**
     * Constructs a new QObject.
     * @param [properties] Properties to set
     */
    constructor(properties?: IQObject);

    /** QObject type. */
    public type: string;

    /** QObject schema_version. */
    public schema_version: string;

    /** QObject qobj_id. */
    public qobj_id: string;

    /** QObject experiments. */
    public experiments: IExperiment[];

    /**
     * Creates a new QObject instance using the specified properties.
     * @param [properties] Properties to set
     * @returns QObject instance
     */
    public static create(properties?: IQObject): QObject;

    /**
     * Encodes the specified QObject message. Does not implicitly {@link QObject.verify|verify} messages.
     * @param message QObject message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IQObject, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified QObject message, length delimited. Does not implicitly {@link QObject.verify|verify} messages.
     * @param message QObject message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IQObject, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a QObject message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns QObject
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QObject;

    /**
     * Decodes a QObject message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns QObject
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): QObject;

    /**
     * Verifies a QObject message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a QObject message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns QObject
     */
    public static fromObject(object: { [k: string]: any }): QObject;

    /**
     * Creates a plain object from a QObject message. Also converts values to other types if specified.
     * @param message QObject
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: QObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this QObject to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an Experiment. */
export class Experiment implements IExperiment {

    /**
     * Constructs a new Experiment.
     * @param [properties] Properties to set
     */
    constructor(properties?: IExperiment);

    /** Experiment config. */
    public config?: (IConfig|null);

    /** Experiment instructions. */
    public instructions: IInstruction[];

    /**
     * Creates a new Experiment instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Experiment instance
     */
    public static create(properties?: IExperiment): Experiment;

    /**
     * Encodes the specified Experiment message. Does not implicitly {@link Experiment.verify|verify} messages.
     * @param message Experiment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IExperiment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Experiment message, length delimited. Does not implicitly {@link Experiment.verify|verify} messages.
     * @param message Experiment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IExperiment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Experiment message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Experiment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Experiment;

    /**
     * Decodes an Experiment message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Experiment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Experiment;

    /**
     * Verifies an Experiment message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Experiment message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Experiment
     */
    public static fromObject(object: { [k: string]: any }): Experiment;

    /**
     * Creates a plain object from an Experiment message. Also converts values to other types if specified.
     * @param message Experiment
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Experiment, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Experiment to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a Config. */
export class Config implements IConfig {

    /**
     * Constructs a new Config.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConfig);

    /** Config n_qubits. */
    public n_qubits: number;

    /** Config memory_slots. */
    public memory_slots: number;

    /** Config shots. */
    public shots: number;

    /**
     * Creates a new Config instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Config instance
     */
    public static create(properties?: IConfig): Config;

    /**
     * Encodes the specified Config message. Does not implicitly {@link Config.verify|verify} messages.
     * @param message Config message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Config message, length delimited. Does not implicitly {@link Config.verify|verify} messages.
     * @param message Config message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Config message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Config
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Config;

    /**
     * Decodes a Config message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Config
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Config;

    /**
     * Verifies a Config message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Config message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Config
     */
    public static fromObject(object: { [k: string]: any }): Config;

    /**
     * Creates a plain object from a Config message. Also converts values to other types if specified.
     * @param message Config
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Config to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an Instruction. */
export class Instruction implements IInstruction {

    /**
     * Constructs a new Instruction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInstruction);

    /** Instruction name. */
    public name: string;

    /** Instruction qubits. */
    public qubits: number[];

    /** Instruction params. */
    public params: number[];

    /** Instruction memory. */
    public memory: number[];

    /**
     * Creates a new Instruction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Instruction instance
     */
    public static create(properties?: IInstruction): Instruction;

    /**
     * Encodes the specified Instruction message. Does not implicitly {@link Instruction.verify|verify} messages.
     * @param message Instruction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Instruction message, length delimited. Does not implicitly {@link Instruction.verify|verify} messages.
     * @param message Instruction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Instruction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Instruction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Instruction;

    /**
     * Decodes an Instruction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Instruction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Instruction;

    /**
     * Verifies an Instruction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Instruction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Instruction
     */
    public static fromObject(object: { [k: string]: any }): Instruction;

    /**
     * Creates a plain object from an Instruction message. Also converts values to other types if specified.
     * @param message Instruction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Instruction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Instruction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
