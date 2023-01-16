/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.Complex = (function() {
    
        /**
         * Properties of a Complex.
         * @exports IComplex
         * @interface IComplex
         * @property {number|null} [real] Complex real
         * @property {number|null} [imag] Complex imag
         */
    
        /**
         * Constructs a new Complex.
         * @exports Complex
         * @classdesc Represents a Complex.
         * @implements IComplex
         * @constructor
         * @param {IComplex=} [properties] Properties to set
         */
        function Complex(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Complex real.
         * @member {number} real
         * @memberof Complex
         * @instance
         */
        Complex.prototype.real = 0;
    
        /**
         * Complex imag.
         * @member {number|null|undefined} imag
         * @memberof Complex
         * @instance
         */
        Complex.prototype.imag = null;
    
        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;
    
        /**
         * Complex _imag.
         * @member {"imag"|undefined} _imag
         * @memberof Complex
         * @instance
         */
        Object.defineProperty(Complex.prototype, "_imag", {
            get: $util.oneOfGetter($oneOfFields = ["imag"]),
            set: $util.oneOfSetter($oneOfFields)
        });
    
        /**
         * Creates a new Complex instance using the specified properties.
         * @function create
         * @memberof Complex
         * @static
         * @param {IComplex=} [properties] Properties to set
         * @returns {Complex} Complex instance
         */
        Complex.create = function create(properties) {
            return new Complex(properties);
        };
    
        /**
         * Encodes the specified Complex message. Does not implicitly {@link Complex.verify|verify} messages.
         * @function encode
         * @memberof Complex
         * @static
         * @param {IComplex} message Complex message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Complex.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.real != null && Object.hasOwnProperty.call(message, "real"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.real);
            if (message.imag != null && Object.hasOwnProperty.call(message, "imag"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.imag);
            return writer;
        };
    
        /**
         * Encodes the specified Complex message, length delimited. Does not implicitly {@link Complex.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Complex
         * @static
         * @param {IComplex} message Complex message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Complex.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Complex message from the specified reader or buffer.
         * @function decode
         * @memberof Complex
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Complex} Complex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Complex.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Complex();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.real = reader.double();
                    break;
                case 2:
                    message.imag = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Complex message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Complex
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Complex} Complex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Complex.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Complex message.
         * @function verify
         * @memberof Complex
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Complex.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.real != null && message.hasOwnProperty("real"))
                if (typeof message.real !== "number")
                    return "real: number expected";
            if (message.imag != null && message.hasOwnProperty("imag")) {
                properties._imag = 1;
                if (typeof message.imag !== "number")
                    return "imag: number expected";
            }
            return null;
        };
    
        /**
         * Creates a Complex message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Complex
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Complex} Complex
         */
        Complex.fromObject = function fromObject(object) {
            if (object instanceof $root.Complex)
                return object;
            var message = new $root.Complex();
            if (object.real != null)
                message.real = Number(object.real);
            if (object.imag != null)
                message.imag = Number(object.imag);
            return message;
        };
    
        /**
         * Creates a plain object from a Complex message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Complex
         * @static
         * @param {Complex} message Complex
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Complex.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.real = 0;
            if (message.real != null && message.hasOwnProperty("real"))
                object.real = options.json && !isFinite(message.real) ? String(message.real) : message.real;
            if (message.imag != null && message.hasOwnProperty("imag")) {
                object.imag = options.json && !isFinite(message.imag) ? String(message.imag) : message.imag;
                if (options.oneofs)
                    object._imag = "imag";
            }
            return object;
        };
    
        /**
         * Converts this Complex to JSON.
         * @function toJSON
         * @memberof Complex
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Complex.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Complex;
    })();
    
    $root.Matrix = (function() {
    
        /**
         * Properties of a Matrix.
         * @exports IMatrix
         * @interface IMatrix
         * @property {Array.<number>|null} [shape] Matrix shape
         * @property {Array.<IComplex>|null} [array] Matrix array
         */
    
        /**
         * Constructs a new Matrix.
         * @exports Matrix
         * @classdesc Represents a Matrix.
         * @implements IMatrix
         * @constructor
         * @param {IMatrix=} [properties] Properties to set
         */
        function Matrix(properties) {
            this.shape = [];
            this.array = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Matrix shape.
         * @member {Array.<number>} shape
         * @memberof Matrix
         * @instance
         */
        Matrix.prototype.shape = $util.emptyArray;
    
        /**
         * Matrix array.
         * @member {Array.<IComplex>} array
         * @memberof Matrix
         * @instance
         */
        Matrix.prototype.array = $util.emptyArray;
    
        /**
         * Creates a new Matrix instance using the specified properties.
         * @function create
         * @memberof Matrix
         * @static
         * @param {IMatrix=} [properties] Properties to set
         * @returns {Matrix} Matrix instance
         */
        Matrix.create = function create(properties) {
            return new Matrix(properties);
        };
    
        /**
         * Encodes the specified Matrix message. Does not implicitly {@link Matrix.verify|verify} messages.
         * @function encode
         * @memberof Matrix
         * @static
         * @param {IMatrix} message Matrix message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Matrix.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.shape != null && message.shape.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.shape.length; ++i)
                    writer.uint32(message.shape[i]);
                writer.ldelim();
            }
            if (message.array != null && message.array.length)
                for (var i = 0; i < message.array.length; ++i)
                    $root.Complex.encode(message.array[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified Matrix message, length delimited. Does not implicitly {@link Matrix.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Matrix
         * @static
         * @param {IMatrix} message Matrix message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Matrix.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Matrix message from the specified reader or buffer.
         * @function decode
         * @memberof Matrix
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Matrix} Matrix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Matrix.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Matrix();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.shape && message.shape.length))
                        message.shape = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.shape.push(reader.uint32());
                    } else
                        message.shape.push(reader.uint32());
                    break;
                case 2:
                    if (!(message.array && message.array.length))
                        message.array = [];
                    message.array.push($root.Complex.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Matrix message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Matrix
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Matrix} Matrix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Matrix.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Matrix message.
         * @function verify
         * @memberof Matrix
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Matrix.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.shape != null && message.hasOwnProperty("shape")) {
                if (!Array.isArray(message.shape))
                    return "shape: array expected";
                for (var i = 0; i < message.shape.length; ++i)
                    if (!$util.isInteger(message.shape[i]))
                        return "shape: integer[] expected";
            }
            if (message.array != null && message.hasOwnProperty("array")) {
                if (!Array.isArray(message.array))
                    return "array: array expected";
                for (var i = 0; i < message.array.length; ++i) {
                    var error = $root.Complex.verify(message.array[i]);
                    if (error)
                        return "array." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a Matrix message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Matrix
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Matrix} Matrix
         */
        Matrix.fromObject = function fromObject(object) {
            if (object instanceof $root.Matrix)
                return object;
            var message = new $root.Matrix();
            if (object.shape) {
                if (!Array.isArray(object.shape))
                    throw TypeError(".Matrix.shape: array expected");
                message.shape = [];
                for (var i = 0; i < object.shape.length; ++i)
                    message.shape[i] = object.shape[i] >>> 0;
            }
            if (object.array) {
                if (!Array.isArray(object.array))
                    throw TypeError(".Matrix.array: array expected");
                message.array = [];
                for (var i = 0; i < object.array.length; ++i) {
                    if (typeof object.array[i] !== "object")
                        throw TypeError(".Matrix.array: object expected");
                    message.array[i] = $root.Complex.fromObject(object.array[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a Matrix message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Matrix
         * @static
         * @param {Matrix} message Matrix
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Matrix.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.shape = [];
                object.array = [];
            }
            if (message.shape && message.shape.length) {
                object.shape = [];
                for (var j = 0; j < message.shape.length; ++j)
                    object.shape[j] = message.shape[j];
            }
            if (message.array && message.array.length) {
                object.array = [];
                for (var j = 0; j < message.array.length; ++j)
                    object.array[j] = $root.Complex.toObject(message.array[j], options);
            }
            return object;
        };
    
        /**
         * Converts this Matrix to JSON.
         * @function toJSON
         * @memberof Matrix
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Matrix.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Matrix;
    })();
    
    /**
     * FixedGate enum.
     * @exports FixedGate
     * @enum {number}
     * @property {number} ID=0 ID value
     * @property {number} X=1 X value
     * @property {number} Y=2 Y value
     * @property {number} Z=3 Z value
     * @property {number} H=4 H value
     * @property {number} S=5 S value
     * @property {number} SDG=6 SDG value
     * @property {number} T=7 T value
     * @property {number} TDG=8 TDG value
     * @property {number} CX=9 CX value
     * @property {number} CY=10 CY value
     * @property {number} CZ=11 CZ value
     * @property {number} CH=12 CH value
     * @property {number} SWAP=13 SWAP value
     * @property {number} CCX=14 CCX value
     * @property {number} CSWAP=15 CSWAP value
     */
    $root.FixedGate = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ID"] = 0;
        values[valuesById[1] = "X"] = 1;
        values[valuesById[2] = "Y"] = 2;
        values[valuesById[3] = "Z"] = 3;
        values[valuesById[4] = "H"] = 4;
        values[valuesById[5] = "S"] = 5;
        values[valuesById[6] = "SDG"] = 6;
        values[valuesById[7] = "T"] = 7;
        values[valuesById[8] = "TDG"] = 8;
        values[valuesById[9] = "CX"] = 9;
        values[valuesById[10] = "CY"] = 10;
        values[valuesById[11] = "CZ"] = 11;
        values[valuesById[12] = "CH"] = 12;
        values[valuesById[13] = "SWAP"] = 13;
        values[valuesById[14] = "CCX"] = 14;
        values[valuesById[15] = "CSWAP"] = 15;
        return values;
    })();
    
    /**
     * RotationGate enum.
     * @exports RotationGate
     * @enum {number}
     * @property {number} U=0 U value
     * @property {number} RX=1 RX value
     * @property {number} RY=2 RY value
     * @property {number} RZ=3 RZ value
     * @property {number} CU=4 CU value
     * @property {number} CRX=5 CRX value
     * @property {number} CRY=6 CRY value
     * @property {number} CRZ=7 CRZ value
     */
    $root.RotationGate = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "U"] = 0;
        values[valuesById[1] = "RX"] = 1;
        values[valuesById[2] = "RY"] = 2;
        values[valuesById[3] = "RZ"] = 3;
        values[valuesById[4] = "CU"] = 4;
        values[valuesById[5] = "CRX"] = 5;
        values[valuesById[6] = "CRY"] = 6;
        values[valuesById[7] = "CRZ"] = 7;
        return values;
    })();
    
    $root.CustomizedGate = (function() {
    
        /**
         * Properties of a CustomizedGate.
         * @exports ICustomizedGate
         * @interface ICustomizedGate
         * @property {IMatrix|null} [matrix] CustomizedGate matrix
         */
    
        /**
         * Constructs a new CustomizedGate.
         * @exports CustomizedGate
         * @classdesc Represents a CustomizedGate.
         * @implements ICustomizedGate
         * @constructor
         * @param {ICustomizedGate=} [properties] Properties to set
         */
        function CustomizedGate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CustomizedGate matrix.
         * @member {IMatrix|null|undefined} matrix
         * @memberof CustomizedGate
         * @instance
         */
        CustomizedGate.prototype.matrix = null;
    
        /**
         * Creates a new CustomizedGate instance using the specified properties.
         * @function create
         * @memberof CustomizedGate
         * @static
         * @param {ICustomizedGate=} [properties] Properties to set
         * @returns {CustomizedGate} CustomizedGate instance
         */
        CustomizedGate.create = function create(properties) {
            return new CustomizedGate(properties);
        };
    
        /**
         * Encodes the specified CustomizedGate message. Does not implicitly {@link CustomizedGate.verify|verify} messages.
         * @function encode
         * @memberof CustomizedGate
         * @static
         * @param {ICustomizedGate} message CustomizedGate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CustomizedGate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.matrix != null && Object.hasOwnProperty.call(message, "matrix"))
                $root.Matrix.encode(message.matrix, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CustomizedGate message, length delimited. Does not implicitly {@link CustomizedGate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CustomizedGate
         * @static
         * @param {ICustomizedGate} message CustomizedGate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CustomizedGate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CustomizedGate message from the specified reader or buffer.
         * @function decode
         * @memberof CustomizedGate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CustomizedGate} CustomizedGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CustomizedGate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CustomizedGate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.matrix = $root.Matrix.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CustomizedGate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CustomizedGate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CustomizedGate} CustomizedGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CustomizedGate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CustomizedGate message.
         * @function verify
         * @memberof CustomizedGate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CustomizedGate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.matrix != null && message.hasOwnProperty("matrix")) {
                var error = $root.Matrix.verify(message.matrix);
                if (error)
                    return "matrix." + error;
            }
            return null;
        };
    
        /**
         * Creates a CustomizedGate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CustomizedGate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CustomizedGate} CustomizedGate
         */
        CustomizedGate.fromObject = function fromObject(object) {
            if (object instanceof $root.CustomizedGate)
                return object;
            var message = new $root.CustomizedGate();
            if (object.matrix != null) {
                if (typeof object.matrix !== "object")
                    throw TypeError(".CustomizedGate.matrix: object expected");
                message.matrix = $root.Matrix.fromObject(object.matrix);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CustomizedGate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CustomizedGate
         * @static
         * @param {CustomizedGate} message CustomizedGate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CustomizedGate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.matrix = null;
            if (message.matrix != null && message.hasOwnProperty("matrix"))
                object.matrix = $root.Matrix.toObject(message.matrix, options);
            return object;
        };
    
        /**
         * Converts this CustomizedGate to JSON.
         * @function toJSON
         * @memberof CustomizedGate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CustomizedGate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CustomizedGate;
    })();
    
    /**
     * CompositeGate enum.
     * @exports CompositeGate
     * @enum {number}
     * @property {number} RZZ=0 RZZ value
     */
    $root.CompositeGate = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "RZZ"] = 0;
        return values;
    })();
    
    $root.Measure = (function() {
    
        /**
         * Properties of a Measure.
         * @exports IMeasure
         * @interface IMeasure
         * @property {Measure.Type|null} [type] Measure type
         * @property {Array.<number>|null} [cRegList] Measure cRegList
         */
    
        /**
         * Constructs a new Measure.
         * @exports Measure
         * @classdesc Represents a Measure.
         * @implements IMeasure
         * @constructor
         * @param {IMeasure=} [properties] Properties to set
         */
        function Measure(properties) {
            this.cRegList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Measure type.
         * @member {Measure.Type} type
         * @memberof Measure
         * @instance
         */
        Measure.prototype.type = 0;
    
        /**
         * Measure cRegList.
         * @member {Array.<number>} cRegList
         * @memberof Measure
         * @instance
         */
        Measure.prototype.cRegList = $util.emptyArray;
    
        /**
         * Creates a new Measure instance using the specified properties.
         * @function create
         * @memberof Measure
         * @static
         * @param {IMeasure=} [properties] Properties to set
         * @returns {Measure} Measure instance
         */
        Measure.create = function create(properties) {
            return new Measure(properties);
        };
    
        /**
         * Encodes the specified Measure message. Does not implicitly {@link Measure.verify|verify} messages.
         * @function encode
         * @memberof Measure
         * @static
         * @param {IMeasure} message Measure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Measure.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.cRegList != null && message.cRegList.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.cRegList.length; ++i)
                    writer.uint32(message.cRegList[i]);
                writer.ldelim();
            }
            return writer;
        };
    
        /**
         * Encodes the specified Measure message, length delimited. Does not implicitly {@link Measure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Measure
         * @static
         * @param {IMeasure} message Measure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Measure.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Measure message from the specified reader or buffer.
         * @function decode
         * @memberof Measure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Measure} Measure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Measure.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Measure();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    if (!(message.cRegList && message.cRegList.length))
                        message.cRegList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cRegList.push(reader.uint32());
                    } else
                        message.cRegList.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Measure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Measure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Measure} Measure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Measure.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Measure message.
         * @function verify
         * @memberof Measure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Measure.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.cRegList != null && message.hasOwnProperty("cRegList")) {
                if (!Array.isArray(message.cRegList))
                    return "cRegList: array expected";
                for (var i = 0; i < message.cRegList.length; ++i)
                    if (!$util.isInteger(message.cRegList[i]))
                        return "cRegList: integer[] expected";
            }
            return null;
        };
    
        /**
         * Creates a Measure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Measure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Measure} Measure
         */
        Measure.fromObject = function fromObject(object) {
            if (object instanceof $root.Measure)
                return object;
            var message = new $root.Measure();
            switch (object.type) {
            case "X":
            case 0:
                message.type = 0;
                break;
            case "Y":
            case 1:
                message.type = 1;
                break;
            case "Z":
            case 2:
                message.type = 2;
                break;
            case "PauliX":
            case 3:
                message.type = 3;
                break;
            case "PauliY":
            case 4:
                message.type = 4;
                break;
            case "PauliZ":
            case 5:
                message.type = 5;
                break;
            }
            if (object.cRegList) {
                if (!Array.isArray(object.cRegList))
                    throw TypeError(".Measure.cRegList: array expected");
                message.cRegList = [];
                for (var i = 0; i < object.cRegList.length; ++i)
                    message.cRegList[i] = object.cRegList[i] >>> 0;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a Measure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Measure
         * @static
         * @param {Measure} message Measure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Measure.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cRegList = [];
            if (options.defaults)
                object.type = options.enums === String ? "X" : 0;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.Measure.Type[message.type] : message.type;
            if (message.cRegList && message.cRegList.length) {
                object.cRegList = [];
                for (var j = 0; j < message.cRegList.length; ++j)
                    object.cRegList[j] = message.cRegList[j];
            }
            return object;
        };
    
        /**
         * Converts this Measure to JSON.
         * @function toJSON
         * @memberof Measure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Measure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Type enum.
         * @name Measure.Type
         * @enum {number}
         * @property {number} X=0 X value
         * @property {number} Y=1 Y value
         * @property {number} Z=2 Z value
         * @property {number} PauliX=3 PauliX value
         * @property {number} PauliY=4 PauliY value
         * @property {number} PauliZ=5 PauliZ value
         */
        Measure.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "X"] = 0;
            values[valuesById[1] = "Y"] = 1;
            values[valuesById[2] = "Z"] = 2;
            values[valuesById[3] = "PauliX"] = 3;
            values[valuesById[4] = "PauliY"] = 4;
            values[valuesById[5] = "PauliZ"] = 5;
            return values;
        })();
    
        return Measure;
    })();
    
    $root.Program = (function() {
    
        /**
         * Properties of a Program.
         * @exports IProgram
         * @interface IProgram
         * @property {string|null} [sdkVersion] Program sdkVersion
         * @property {IHead|null} [head] Program head
         * @property {IBody|null} [body] Program body
         * @property {ISource|null} [source] Program source
         */
    
        /**
         * Constructs a new Program.
         * @exports Program
         * @classdesc Represents a Program.
         * @implements IProgram
         * @constructor
         * @param {IProgram=} [properties] Properties to set
         */
        function Program(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Program sdkVersion.
         * @member {string} sdkVersion
         * @memberof Program
         * @instance
         */
        Program.prototype.sdkVersion = "";
    
        /**
         * Program head.
         * @member {IHead|null|undefined} head
         * @memberof Program
         * @instance
         */
        Program.prototype.head = null;
    
        /**
         * Program body.
         * @member {IBody|null|undefined} body
         * @memberof Program
         * @instance
         */
        Program.prototype.body = null;
    
        /**
         * Program source.
         * @member {ISource|null|undefined} source
         * @memberof Program
         * @instance
         */
        Program.prototype.source = null;
    
        /**
         * Creates a new Program instance using the specified properties.
         * @function create
         * @memberof Program
         * @static
         * @param {IProgram=} [properties] Properties to set
         * @returns {Program} Program instance
         */
        Program.create = function create(properties) {
            return new Program(properties);
        };
    
        /**
         * Encodes the specified Program message. Does not implicitly {@link Program.verify|verify} messages.
         * @function encode
         * @memberof Program
         * @static
         * @param {IProgram} message Program message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Program.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sdkVersion != null && Object.hasOwnProperty.call(message, "sdkVersion"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sdkVersion);
            if (message.head != null && Object.hasOwnProperty.call(message, "head"))
                $root.Head.encode(message.head, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                $root.Body.encode(message.body, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                $root.Source.encode(message.source, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified Program message, length delimited. Does not implicitly {@link Program.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Program
         * @static
         * @param {IProgram} message Program message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Program.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Program message from the specified reader or buffer.
         * @function decode
         * @memberof Program
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Program} Program
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Program.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Program();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sdkVersion = reader.string();
                    break;
                case 2:
                    message.head = $root.Head.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.body = $root.Body.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.source = $root.Source.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Program message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Program
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Program} Program
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Program.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Program message.
         * @function verify
         * @memberof Program
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Program.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sdkVersion != null && message.hasOwnProperty("sdkVersion"))
                if (!$util.isString(message.sdkVersion))
                    return "sdkVersion: string expected";
            if (message.head != null && message.hasOwnProperty("head")) {
                var error = $root.Head.verify(message.head);
                if (error)
                    return "head." + error;
            }
            if (message.body != null && message.hasOwnProperty("body")) {
                var error = $root.Body.verify(message.body);
                if (error)
                    return "body." + error;
            }
            if (message.source != null && message.hasOwnProperty("source")) {
                var error = $root.Source.verify(message.source);
                if (error)
                    return "source." + error;
            }
            return null;
        };
    
        /**
         * Creates a Program message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Program
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Program} Program
         */
        Program.fromObject = function fromObject(object) {
            if (object instanceof $root.Program)
                return object;
            var message = new $root.Program();
            if (object.sdkVersion != null)
                message.sdkVersion = String(object.sdkVersion);
            if (object.head != null) {
                if (typeof object.head !== "object")
                    throw TypeError(".Program.head: object expected");
                message.head = $root.Head.fromObject(object.head);
            }
            if (object.body != null) {
                if (typeof object.body !== "object")
                    throw TypeError(".Program.body: object expected");
                message.body = $root.Body.fromObject(object.body);
            }
            if (object.source != null) {
                if (typeof object.source !== "object")
                    throw TypeError(".Program.source: object expected");
                message.source = $root.Source.fromObject(object.source);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a Program message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Program
         * @static
         * @param {Program} message Program
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Program.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sdkVersion = "";
                object.head = null;
                object.body = null;
                object.source = null;
            }
            if (message.sdkVersion != null && message.hasOwnProperty("sdkVersion"))
                object.sdkVersion = message.sdkVersion;
            if (message.head != null && message.hasOwnProperty("head"))
                object.head = $root.Head.toObject(message.head, options);
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = $root.Body.toObject(message.body, options);
            if (message.source != null && message.hasOwnProperty("source"))
                object.source = $root.Source.toObject(message.source, options);
            return object;
        };
    
        /**
         * Converts this Program to JSON.
         * @function toJSON
         * @memberof Program
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Program.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Program;
    })();
    
    $root.Head = (function() {
    
        /**
         * Properties of a Head.
         * @exports IHead
         * @interface IHead
         * @property {Array.<number>|null} [usingQRegList] Head usingQRegList
         * @property {Array.<number>|null} [usingCRegList] Head usingCRegList
         */
    
        /**
         * Constructs a new Head.
         * @exports Head
         * @classdesc Represents a Head.
         * @implements IHead
         * @constructor
         * @param {IHead=} [properties] Properties to set
         */
        function Head(properties) {
            this.usingQRegList = [];
            this.usingCRegList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Head usingQRegList.
         * @member {Array.<number>} usingQRegList
         * @memberof Head
         * @instance
         */
        Head.prototype.usingQRegList = $util.emptyArray;
    
        /**
         * Head usingCRegList.
         * @member {Array.<number>} usingCRegList
         * @memberof Head
         * @instance
         */
        Head.prototype.usingCRegList = $util.emptyArray;
    
        /**
         * Creates a new Head instance using the specified properties.
         * @function create
         * @memberof Head
         * @static
         * @param {IHead=} [properties] Properties to set
         * @returns {Head} Head instance
         */
        Head.create = function create(properties) {
            return new Head(properties);
        };
    
        /**
         * Encodes the specified Head message. Does not implicitly {@link Head.verify|verify} messages.
         * @function encode
         * @memberof Head
         * @static
         * @param {IHead} message Head message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Head.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.usingQRegList != null && message.usingQRegList.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.usingQRegList.length; ++i)
                    writer.uint32(message.usingQRegList[i]);
                writer.ldelim();
            }
            if (message.usingCRegList != null && message.usingCRegList.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.usingCRegList.length; ++i)
                    writer.uint32(message.usingCRegList[i]);
                writer.ldelim();
            }
            return writer;
        };
    
        /**
         * Encodes the specified Head message, length delimited. Does not implicitly {@link Head.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Head
         * @static
         * @param {IHead} message Head message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Head.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Head message from the specified reader or buffer.
         * @function decode
         * @memberof Head
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Head} Head
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Head.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Head();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.usingQRegList && message.usingQRegList.length))
                        message.usingQRegList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.usingQRegList.push(reader.uint32());
                    } else
                        message.usingQRegList.push(reader.uint32());
                    break;
                case 2:
                    if (!(message.usingCRegList && message.usingCRegList.length))
                        message.usingCRegList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.usingCRegList.push(reader.uint32());
                    } else
                        message.usingCRegList.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Head message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Head
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Head} Head
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Head.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Head message.
         * @function verify
         * @memberof Head
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Head.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.usingQRegList != null && message.hasOwnProperty("usingQRegList")) {
                if (!Array.isArray(message.usingQRegList))
                    return "usingQRegList: array expected";
                for (var i = 0; i < message.usingQRegList.length; ++i)
                    if (!$util.isInteger(message.usingQRegList[i]))
                        return "usingQRegList: integer[] expected";
            }
            if (message.usingCRegList != null && message.hasOwnProperty("usingCRegList")) {
                if (!Array.isArray(message.usingCRegList))
                    return "usingCRegList: array expected";
                for (var i = 0; i < message.usingCRegList.length; ++i)
                    if (!$util.isInteger(message.usingCRegList[i]))
                        return "usingCRegList: integer[] expected";
            }
            return null;
        };
    
        /**
         * Creates a Head message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Head
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Head} Head
         */
        Head.fromObject = function fromObject(object) {
            if (object instanceof $root.Head)
                return object;
            var message = new $root.Head();
            if (object.usingQRegList) {
                if (!Array.isArray(object.usingQRegList))
                    throw TypeError(".Head.usingQRegList: array expected");
                message.usingQRegList = [];
                for (var i = 0; i < object.usingQRegList.length; ++i)
                    message.usingQRegList[i] = object.usingQRegList[i] >>> 0;
            }
            if (object.usingCRegList) {
                if (!Array.isArray(object.usingCRegList))
                    throw TypeError(".Head.usingCRegList: array expected");
                message.usingCRegList = [];
                for (var i = 0; i < object.usingCRegList.length; ++i)
                    message.usingCRegList[i] = object.usingCRegList[i] >>> 0;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a Head message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Head
         * @static
         * @param {Head} message Head
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Head.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.usingQRegList = [];
                object.usingCRegList = [];
            }
            if (message.usingQRegList && message.usingQRegList.length) {
                object.usingQRegList = [];
                for (var j = 0; j < message.usingQRegList.length; ++j)
                    object.usingQRegList[j] = message.usingQRegList[j];
            }
            if (message.usingCRegList && message.usingCRegList.length) {
                object.usingCRegList = [];
                for (var j = 0; j < message.usingCRegList.length; ++j)
                    object.usingCRegList[j] = message.usingCRegList[j];
            }
            return object;
        };
    
        /**
         * Converts this Head to JSON.
         * @function toJSON
         * @memberof Head
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Head.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Head;
    })();
    
    $root.Body = (function() {
    
        /**
         * Properties of a Body.
         * @exports IBody
         * @interface IBody
         * @property {Array.<ICircuitLine>|null} [circuit] Body circuit
         * @property {Object.<string,IProcedure>|null} [procedureMap] Body procedureMap
         */
    
        /**
         * Constructs a new Body.
         * @exports Body
         * @classdesc Represents a Body.
         * @implements IBody
         * @constructor
         * @param {IBody=} [properties] Properties to set
         */
        function Body(properties) {
            this.circuit = [];
            this.procedureMap = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Body circuit.
         * @member {Array.<ICircuitLine>} circuit
         * @memberof Body
         * @instance
         */
        Body.prototype.circuit = $util.emptyArray;
    
        /**
         * Body procedureMap.
         * @member {Object.<string,IProcedure>} procedureMap
         * @memberof Body
         * @instance
         */
        Body.prototype.procedureMap = $util.emptyObject;
    
        /**
         * Creates a new Body instance using the specified properties.
         * @function create
         * @memberof Body
         * @static
         * @param {IBody=} [properties] Properties to set
         * @returns {Body} Body instance
         */
        Body.create = function create(properties) {
            return new Body(properties);
        };
    
        /**
         * Encodes the specified Body message. Does not implicitly {@link Body.verify|verify} messages.
         * @function encode
         * @memberof Body
         * @static
         * @param {IBody} message Body message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Body.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.circuit != null && message.circuit.length)
                for (var i = 0; i < message.circuit.length; ++i)
                    $root.CircuitLine.encode(message.circuit[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.procedureMap != null && Object.hasOwnProperty.call(message, "procedureMap"))
                for (var keys = Object.keys(message.procedureMap), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.Procedure.encode(message.procedureMap[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };
    
        /**
         * Encodes the specified Body message, length delimited. Does not implicitly {@link Body.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Body
         * @static
         * @param {IBody} message Body message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Body.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Body message from the specified reader or buffer.
         * @function decode
         * @memberof Body
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Body} Body
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Body.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Body(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.circuit && message.circuit.length))
                        message.circuit = [];
                    message.circuit.push($root.CircuitLine.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (message.procedureMap === $util.emptyObject)
                        message.procedureMap = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = $root.Procedure.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.procedureMap[key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Body message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Body
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Body} Body
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Body.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Body message.
         * @function verify
         * @memberof Body
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Body.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.circuit != null && message.hasOwnProperty("circuit")) {
                if (!Array.isArray(message.circuit))
                    return "circuit: array expected";
                for (var i = 0; i < message.circuit.length; ++i) {
                    var error = $root.CircuitLine.verify(message.circuit[i]);
                    if (error)
                        return "circuit." + error;
                }
            }
            if (message.procedureMap != null && message.hasOwnProperty("procedureMap")) {
                if (!$util.isObject(message.procedureMap))
                    return "procedureMap: object expected";
                var key = Object.keys(message.procedureMap);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.Procedure.verify(message.procedureMap[key[i]]);
                    if (error)
                        return "procedureMap." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a Body message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Body
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Body} Body
         */
        Body.fromObject = function fromObject(object) {
            if (object instanceof $root.Body)
                return object;
            var message = new $root.Body();
            if (object.circuit) {
                if (!Array.isArray(object.circuit))
                    throw TypeError(".Body.circuit: array expected");
                message.circuit = [];
                for (var i = 0; i < object.circuit.length; ++i) {
                    if (typeof object.circuit[i] !== "object")
                        throw TypeError(".Body.circuit: object expected");
                    message.circuit[i] = $root.CircuitLine.fromObject(object.circuit[i]);
                }
            }
            if (object.procedureMap) {
                if (typeof object.procedureMap !== "object")
                    throw TypeError(".Body.procedureMap: object expected");
                message.procedureMap = {};
                for (var keys = Object.keys(object.procedureMap), i = 0; i < keys.length; ++i) {
                    if (typeof object.procedureMap[keys[i]] !== "object")
                        throw TypeError(".Body.procedureMap: object expected");
                    message.procedureMap[keys[i]] = $root.Procedure.fromObject(object.procedureMap[keys[i]]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a Body message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Body
         * @static
         * @param {Body} message Body
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Body.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.circuit = [];
            if (options.objects || options.defaults)
                object.procedureMap = {};
            if (message.circuit && message.circuit.length) {
                object.circuit = [];
                for (var j = 0; j < message.circuit.length; ++j)
                    object.circuit[j] = $root.CircuitLine.toObject(message.circuit[j], options);
            }
            var keys2;
            if (message.procedureMap && (keys2 = Object.keys(message.procedureMap)).length) {
                object.procedureMap = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.procedureMap[keys2[j]] = $root.Procedure.toObject(message.procedureMap[keys2[j]], options);
            }
            return object;
        };
    
        /**
         * Converts this Body to JSON.
         * @function toJSON
         * @memberof Body
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Body.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Body;
    })();
    
    $root.Source = (function() {
    
        /**
         * Properties of a Source.
         * @exports ISource
         * @interface ISource
         * @property {string|null} [Qasm] Source Qasm
         */
    
        /**
         * Constructs a new Source.
         * @exports Source
         * @classdesc Represents a Source.
         * @implements ISource
         * @constructor
         * @param {ISource=} [properties] Properties to set
         */
        function Source(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Source Qasm.
         * @member {string} Qasm
         * @memberof Source
         * @instance
         */
        Source.prototype.Qasm = "";
    
        /**
         * Creates a new Source instance using the specified properties.
         * @function create
         * @memberof Source
         * @static
         * @param {ISource=} [properties] Properties to set
         * @returns {Source} Source instance
         */
        Source.create = function create(properties) {
            return new Source(properties);
        };
    
        /**
         * Encodes the specified Source message. Does not implicitly {@link Source.verify|verify} messages.
         * @function encode
         * @memberof Source
         * @static
         * @param {ISource} message Source message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Source.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Qasm != null && Object.hasOwnProperty.call(message, "Qasm"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Qasm);
            return writer;
        };
    
        /**
         * Encodes the specified Source message, length delimited. Does not implicitly {@link Source.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Source
         * @static
         * @param {ISource} message Source message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Source.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Source message from the specified reader or buffer.
         * @function decode
         * @memberof Source
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Source} Source
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Source.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Source();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Qasm = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Source message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Source
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Source} Source
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Source.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Source message.
         * @function verify
         * @memberof Source
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Source.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Qasm != null && message.hasOwnProperty("Qasm"))
                if (!$util.isString(message.Qasm))
                    return "Qasm: string expected";
            return null;
        };
    
        /**
         * Creates a Source message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Source
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Source} Source
         */
        Source.fromObject = function fromObject(object) {
            if (object instanceof $root.Source)
                return object;
            var message = new $root.Source();
            if (object.Qasm != null)
                message.Qasm = String(object.Qasm);
            return message;
        };
    
        /**
         * Creates a plain object from a Source message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Source
         * @static
         * @param {Source} message Source
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Source.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Qasm = "";
            if (message.Qasm != null && message.hasOwnProperty("Qasm"))
                object.Qasm = message.Qasm;
            return object;
        };
    
        /**
         * Converts this Source to JSON.
         * @function toJSON
         * @memberof Source
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Source.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Source;
    })();
    
    $root.CircuitLine = (function() {
    
        /**
         * Properties of a CircuitLine.
         * @exports ICircuitLine
         * @interface ICircuitLine
         * @property {FixedGate|null} [fixedGate] CircuitLine fixedGate
         * @property {RotationGate|null} [rotationGate] CircuitLine rotationGate
         * @property {ICustomizedGate|null} [customizedGate] CircuitLine customizedGate
         * @property {CompositeGate|null} [compositeGate] CircuitLine compositeGate
         * @property {string|null} [procedureName] CircuitLine procedureName
         * @property {IMeasure|null} [measure] CircuitLine measure
         * @property {boolean|null} [barrier] CircuitLine barrier
         * @property {Array.<number>|null} [qRegList] CircuitLine qRegList
         * @property {Array.<number>|null} [argumentValueList] CircuitLine argumentValueList
         * @property {Array.<number>|null} [argumentIdList] CircuitLine argumentIdList
         */
    
        /**
         * Constructs a new CircuitLine.
         * @exports CircuitLine
         * @classdesc Represents a CircuitLine.
         * @implements ICircuitLine
         * @constructor
         * @param {ICircuitLine=} [properties] Properties to set
         */
        function CircuitLine(properties) {
            this.qRegList = [];
            this.argumentValueList = [];
            this.argumentIdList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CircuitLine fixedGate.
         * @member {FixedGate|null|undefined} fixedGate
         * @memberof CircuitLine
         * @instance
         */
        CircuitLine.prototype.fixedGate = null;
    
        /**
         * CircuitLine rotationGate.
         * @member {RotationGate|null|undefined} rotationGate
         * @memberof CircuitLine
         * @instance
         */
        CircuitLine.prototype.rotationGate = null;
    
        /**
         * CircuitLine customizedGate.
         * @member {ICustomizedGate|null|undefined} customizedGate
         * @memberof CircuitLine
         * @instance
         */
        CircuitLine.prototype.customizedGate = null;
    
        /**
         * CircuitLine compositeGate.
         * @member {CompositeGate|null|undefined} compositeGate
         * @memberof CircuitLine
         * @instance
         */
        CircuitLine.prototype.compositeGate = null;
    
        /**
         * CircuitLine procedureName.
         * @member {string|null|undefined} procedureName
         * @memberof CircuitLine
         * @instance
         */
        CircuitLine.prototype.procedureName = null;
    
        /**
         * CircuitLine measure.
         * @member {IMeasure|null|undefined} measure
         * @memberof CircuitLine
         * @instance
         */
        CircuitLine.prototype.measure = null;
    
        /**
         * CircuitLine barrier.
         * @member {boolean|null|undefined} barrier
         * @memberof CircuitLine
         * @instance
         */
        CircuitLine.prototype.barrier = null;
    
        /**
         * CircuitLine qRegList.
         * @member {Array.<number>} qRegList
         * @memberof CircuitLine
         * @instance
         */
        CircuitLine.prototype.qRegList = $util.emptyArray;
    
        /**
         * CircuitLine argumentValueList.
         * @member {Array.<number>} argumentValueList
         * @memberof CircuitLine
         * @instance
         */
        CircuitLine.prototype.argumentValueList = $util.emptyArray;
    
        /**
         * CircuitLine argumentIdList.
         * @member {Array.<number>} argumentIdList
         * @memberof CircuitLine
         * @instance
         */
        CircuitLine.prototype.argumentIdList = $util.emptyArray;
    
        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;
    
        /**
         * CircuitLine op.
         * @member {"fixedGate"|"rotationGate"|"customizedGate"|"compositeGate"|"procedureName"|"measure"|"barrier"|undefined} op
         * @memberof CircuitLine
         * @instance
         */
        Object.defineProperty(CircuitLine.prototype, "op", {
            get: $util.oneOfGetter($oneOfFields = ["fixedGate", "rotationGate", "customizedGate", "compositeGate", "procedureName", "measure", "barrier"]),
            set: $util.oneOfSetter($oneOfFields)
        });
    
        /**
         * Creates a new CircuitLine instance using the specified properties.
         * @function create
         * @memberof CircuitLine
         * @static
         * @param {ICircuitLine=} [properties] Properties to set
         * @returns {CircuitLine} CircuitLine instance
         */
        CircuitLine.create = function create(properties) {
            return new CircuitLine(properties);
        };
    
        /**
         * Encodes the specified CircuitLine message. Does not implicitly {@link CircuitLine.verify|verify} messages.
         * @function encode
         * @memberof CircuitLine
         * @static
         * @param {ICircuitLine} message CircuitLine message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CircuitLine.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fixedGate != null && Object.hasOwnProperty.call(message, "fixedGate"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.fixedGate);
            if (message.rotationGate != null && Object.hasOwnProperty.call(message, "rotationGate"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.rotationGate);
            if (message.customizedGate != null && Object.hasOwnProperty.call(message, "customizedGate"))
                $root.CustomizedGate.encode(message.customizedGate, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.compositeGate != null && Object.hasOwnProperty.call(message, "compositeGate"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.compositeGate);
            if (message.procedureName != null && Object.hasOwnProperty.call(message, "procedureName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.procedureName);
            if (message.measure != null && Object.hasOwnProperty.call(message, "measure"))
                $root.Measure.encode(message.measure, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.barrier != null && Object.hasOwnProperty.call(message, "barrier"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.barrier);
            if (message.qRegList != null && message.qRegList.length) {
                writer.uint32(/* id 8, wireType 2 =*/66).fork();
                for (var i = 0; i < message.qRegList.length; ++i)
                    writer.uint32(message.qRegList[i]);
                writer.ldelim();
            }
            if (message.argumentValueList != null && message.argumentValueList.length) {
                writer.uint32(/* id 9, wireType 2 =*/74).fork();
                for (var i = 0; i < message.argumentValueList.length; ++i)
                    writer.double(message.argumentValueList[i]);
                writer.ldelim();
            }
            if (message.argumentIdList != null && message.argumentIdList.length) {
                writer.uint32(/* id 10, wireType 2 =*/82).fork();
                for (var i = 0; i < message.argumentIdList.length; ++i)
                    writer.int32(message.argumentIdList[i]);
                writer.ldelim();
            }
            return writer;
        };
    
        /**
         * Encodes the specified CircuitLine message, length delimited. Does not implicitly {@link CircuitLine.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CircuitLine
         * @static
         * @param {ICircuitLine} message CircuitLine message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CircuitLine.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CircuitLine message from the specified reader or buffer.
         * @function decode
         * @memberof CircuitLine
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CircuitLine} CircuitLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CircuitLine.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CircuitLine();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.fixedGate = reader.int32();
                    break;
                case 2:
                    message.rotationGate = reader.int32();
                    break;
                case 3:
                    message.customizedGate = $root.CustomizedGate.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.compositeGate = reader.int32();
                    break;
                case 5:
                    message.procedureName = reader.string();
                    break;
                case 6:
                    message.measure = $root.Measure.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.barrier = reader.bool();
                    break;
                case 8:
                    if (!(message.qRegList && message.qRegList.length))
                        message.qRegList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.qRegList.push(reader.uint32());
                    } else
                        message.qRegList.push(reader.uint32());
                    break;
                case 9:
                    if (!(message.argumentValueList && message.argumentValueList.length))
                        message.argumentValueList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.argumentValueList.push(reader.double());
                    } else
                        message.argumentValueList.push(reader.double());
                    break;
                case 10:
                    if (!(message.argumentIdList && message.argumentIdList.length))
                        message.argumentIdList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.argumentIdList.push(reader.int32());
                    } else
                        message.argumentIdList.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CircuitLine message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CircuitLine
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CircuitLine} CircuitLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CircuitLine.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CircuitLine message.
         * @function verify
         * @memberof CircuitLine
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CircuitLine.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.fixedGate != null && message.hasOwnProperty("fixedGate")) {
                properties.op = 1;
                switch (message.fixedGate) {
                default:
                    return "fixedGate: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                    break;
                }
            }
            if (message.rotationGate != null && message.hasOwnProperty("rotationGate")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                switch (message.rotationGate) {
                default:
                    return "rotationGate: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            }
            if (message.customizedGate != null && message.hasOwnProperty("customizedGate")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.CustomizedGate.verify(message.customizedGate);
                    if (error)
                        return "customizedGate." + error;
                }
            }
            if (message.compositeGate != null && message.hasOwnProperty("compositeGate")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                switch (message.compositeGate) {
                default:
                    return "compositeGate: enum value expected";
                case 0:
                    break;
                }
            }
            if (message.procedureName != null && message.hasOwnProperty("procedureName")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                if (!$util.isString(message.procedureName))
                    return "procedureName: string expected";
            }
            if (message.measure != null && message.hasOwnProperty("measure")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    var error = $root.Measure.verify(message.measure);
                    if (error)
                        return "measure." + error;
                }
            }
            if (message.barrier != null && message.hasOwnProperty("barrier")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                if (typeof message.barrier !== "boolean")
                    return "barrier: boolean expected";
            }
            if (message.qRegList != null && message.hasOwnProperty("qRegList")) {
                if (!Array.isArray(message.qRegList))
                    return "qRegList: array expected";
                for (var i = 0; i < message.qRegList.length; ++i)
                    if (!$util.isInteger(message.qRegList[i]))
                        return "qRegList: integer[] expected";
            }
            if (message.argumentValueList != null && message.hasOwnProperty("argumentValueList")) {
                if (!Array.isArray(message.argumentValueList))
                    return "argumentValueList: array expected";
                for (var i = 0; i < message.argumentValueList.length; ++i)
                    if (typeof message.argumentValueList[i] !== "number")
                        return "argumentValueList: number[] expected";
            }
            if (message.argumentIdList != null && message.hasOwnProperty("argumentIdList")) {
                if (!Array.isArray(message.argumentIdList))
                    return "argumentIdList: array expected";
                for (var i = 0; i < message.argumentIdList.length; ++i)
                    if (!$util.isInteger(message.argumentIdList[i]))
                        return "argumentIdList: integer[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CircuitLine message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CircuitLine
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CircuitLine} CircuitLine
         */
        CircuitLine.fromObject = function fromObject(object) {
            if (object instanceof $root.CircuitLine)
                return object;
            var message = new $root.CircuitLine();
            switch (object.fixedGate) {
            case "ID":
            case 0:
                message.fixedGate = 0;
                break;
            case "X":
            case 1:
                message.fixedGate = 1;
                break;
            case "Y":
            case 2:
                message.fixedGate = 2;
                break;
            case "Z":
            case 3:
                message.fixedGate = 3;
                break;
            case "H":
            case 4:
                message.fixedGate = 4;
                break;
            case "S":
            case 5:
                message.fixedGate = 5;
                break;
            case "SDG":
            case 6:
                message.fixedGate = 6;
                break;
            case "T":
            case 7:
                message.fixedGate = 7;
                break;
            case "TDG":
            case 8:
                message.fixedGate = 8;
                break;
            case "CX":
            case 9:
                message.fixedGate = 9;
                break;
            case "CY":
            case 10:
                message.fixedGate = 10;
                break;
            case "CZ":
            case 11:
                message.fixedGate = 11;
                break;
            case "CH":
            case 12:
                message.fixedGate = 12;
                break;
            case "SWAP":
            case 13:
                message.fixedGate = 13;
                break;
            case "CCX":
            case 14:
                message.fixedGate = 14;
                break;
            case "CSWAP":
            case 15:
                message.fixedGate = 15;
                break;
            }
            switch (object.rotationGate) {
            case "U":
            case 0:
                message.rotationGate = 0;
                break;
            case "RX":
            case 1:
                message.rotationGate = 1;
                break;
            case "RY":
            case 2:
                message.rotationGate = 2;
                break;
            case "RZ":
            case 3:
                message.rotationGate = 3;
                break;
            case "CU":
            case 4:
                message.rotationGate = 4;
                break;
            case "CRX":
            case 5:
                message.rotationGate = 5;
                break;
            case "CRY":
            case 6:
                message.rotationGate = 6;
                break;
            case "CRZ":
            case 7:
                message.rotationGate = 7;
                break;
            }
            if (object.customizedGate != null) {
                if (typeof object.customizedGate !== "object")
                    throw TypeError(".CircuitLine.customizedGate: object expected");
                message.customizedGate = $root.CustomizedGate.fromObject(object.customizedGate);
            }
            switch (object.compositeGate) {
            case "RZZ":
            case 0:
                message.compositeGate = 0;
                break;
            }
            if (object.procedureName != null)
                message.procedureName = String(object.procedureName);
            if (object.measure != null) {
                if (typeof object.measure !== "object")
                    throw TypeError(".CircuitLine.measure: object expected");
                message.measure = $root.Measure.fromObject(object.measure);
            }
            if (object.barrier != null)
                message.barrier = Boolean(object.barrier);
            if (object.qRegList) {
                if (!Array.isArray(object.qRegList))
                    throw TypeError(".CircuitLine.qRegList: array expected");
                message.qRegList = [];
                for (var i = 0; i < object.qRegList.length; ++i)
                    message.qRegList[i] = object.qRegList[i] >>> 0;
            }
            if (object.argumentValueList) {
                if (!Array.isArray(object.argumentValueList))
                    throw TypeError(".CircuitLine.argumentValueList: array expected");
                message.argumentValueList = [];
                for (var i = 0; i < object.argumentValueList.length; ++i)
                    message.argumentValueList[i] = Number(object.argumentValueList[i]);
            }
            if (object.argumentIdList) {
                if (!Array.isArray(object.argumentIdList))
                    throw TypeError(".CircuitLine.argumentIdList: array expected");
                message.argumentIdList = [];
                for (var i = 0; i < object.argumentIdList.length; ++i)
                    message.argumentIdList[i] = object.argumentIdList[i] | 0;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CircuitLine message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CircuitLine
         * @static
         * @param {CircuitLine} message CircuitLine
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CircuitLine.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.qRegList = [];
                object.argumentValueList = [];
                object.argumentIdList = [];
            }
            if (message.fixedGate != null && message.hasOwnProperty("fixedGate")) {
                object.fixedGate = options.enums === String ? $root.FixedGate[message.fixedGate] : message.fixedGate;
                if (options.oneofs)
                    object.op = "fixedGate";
            }
            if (message.rotationGate != null && message.hasOwnProperty("rotationGate")) {
                object.rotationGate = options.enums === String ? $root.RotationGate[message.rotationGate] : message.rotationGate;
                if (options.oneofs)
                    object.op = "rotationGate";
            }
            if (message.customizedGate != null && message.hasOwnProperty("customizedGate")) {
                object.customizedGate = $root.CustomizedGate.toObject(message.customizedGate, options);
                if (options.oneofs)
                    object.op = "customizedGate";
            }
            if (message.compositeGate != null && message.hasOwnProperty("compositeGate")) {
                object.compositeGate = options.enums === String ? $root.CompositeGate[message.compositeGate] : message.compositeGate;
                if (options.oneofs)
                    object.op = "compositeGate";
            }
            if (message.procedureName != null && message.hasOwnProperty("procedureName")) {
                object.procedureName = message.procedureName;
                if (options.oneofs)
                    object.op = "procedureName";
            }
            if (message.measure != null && message.hasOwnProperty("measure")) {
                object.measure = $root.Measure.toObject(message.measure, options);
                if (options.oneofs)
                    object.op = "measure";
            }
            if (message.barrier != null && message.hasOwnProperty("barrier")) {
                object.barrier = message.barrier;
                if (options.oneofs)
                    object.op = "barrier";
            }
            if (message.qRegList && message.qRegList.length) {
                object.qRegList = [];
                for (var j = 0; j < message.qRegList.length; ++j)
                    object.qRegList[j] = message.qRegList[j];
            }
            if (message.argumentValueList && message.argumentValueList.length) {
                object.argumentValueList = [];
                for (var j = 0; j < message.argumentValueList.length; ++j)
                    object.argumentValueList[j] = options.json && !isFinite(message.argumentValueList[j]) ? String(message.argumentValueList[j]) : message.argumentValueList[j];
            }
            if (message.argumentIdList && message.argumentIdList.length) {
                object.argumentIdList = [];
                for (var j = 0; j < message.argumentIdList.length; ++j)
                    object.argumentIdList[j] = message.argumentIdList[j];
            }
            return object;
        };
    
        /**
         * Converts this CircuitLine to JSON.
         * @function toJSON
         * @memberof CircuitLine
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CircuitLine.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CircuitLine;
    })();
    
    $root.Procedure = (function() {
    
        /**
         * Properties of a Procedure.
         * @exports IProcedure
         * @interface IProcedure
         * @property {number|null} [parameterCount] Procedure parameterCount
         * @property {Array.<number>|null} [usingQRegList] Procedure usingQRegList
         * @property {Array.<ICircuitLine>|null} [circuit] Procedure circuit
         */
    
        /**
         * Constructs a new Procedure.
         * @exports Procedure
         * @classdesc Represents a Procedure.
         * @implements IProcedure
         * @constructor
         * @param {IProcedure=} [properties] Properties to set
         */
        function Procedure(properties) {
            this.usingQRegList = [];
            this.circuit = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Procedure parameterCount.
         * @member {number} parameterCount
         * @memberof Procedure
         * @instance
         */
        Procedure.prototype.parameterCount = 0;
    
        /**
         * Procedure usingQRegList.
         * @member {Array.<number>} usingQRegList
         * @memberof Procedure
         * @instance
         */
        Procedure.prototype.usingQRegList = $util.emptyArray;
    
        /**
         * Procedure circuit.
         * @member {Array.<ICircuitLine>} circuit
         * @memberof Procedure
         * @instance
         */
        Procedure.prototype.circuit = $util.emptyArray;
    
        /**
         * Creates a new Procedure instance using the specified properties.
         * @function create
         * @memberof Procedure
         * @static
         * @param {IProcedure=} [properties] Properties to set
         * @returns {Procedure} Procedure instance
         */
        Procedure.create = function create(properties) {
            return new Procedure(properties);
        };
    
        /**
         * Encodes the specified Procedure message. Does not implicitly {@link Procedure.verify|verify} messages.
         * @function encode
         * @memberof Procedure
         * @static
         * @param {IProcedure} message Procedure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Procedure.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.parameterCount != null && Object.hasOwnProperty.call(message, "parameterCount"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.parameterCount);
            if (message.usingQRegList != null && message.usingQRegList.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.usingQRegList.length; ++i)
                    writer.uint32(message.usingQRegList[i]);
                writer.ldelim();
            }
            if (message.circuit != null && message.circuit.length)
                for (var i = 0; i < message.circuit.length; ++i)
                    $root.CircuitLine.encode(message.circuit[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified Procedure message, length delimited. Does not implicitly {@link Procedure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Procedure
         * @static
         * @param {IProcedure} message Procedure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Procedure.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Procedure message from the specified reader or buffer.
         * @function decode
         * @memberof Procedure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Procedure} Procedure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Procedure.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Procedure();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.parameterCount = reader.uint32();
                    break;
                case 2:
                    if (!(message.usingQRegList && message.usingQRegList.length))
                        message.usingQRegList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.usingQRegList.push(reader.uint32());
                    } else
                        message.usingQRegList.push(reader.uint32());
                    break;
                case 3:
                    if (!(message.circuit && message.circuit.length))
                        message.circuit = [];
                    message.circuit.push($root.CircuitLine.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Procedure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Procedure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Procedure} Procedure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Procedure.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Procedure message.
         * @function verify
         * @memberof Procedure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Procedure.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.parameterCount != null && message.hasOwnProperty("parameterCount"))
                if (!$util.isInteger(message.parameterCount))
                    return "parameterCount: integer expected";
            if (message.usingQRegList != null && message.hasOwnProperty("usingQRegList")) {
                if (!Array.isArray(message.usingQRegList))
                    return "usingQRegList: array expected";
                for (var i = 0; i < message.usingQRegList.length; ++i)
                    if (!$util.isInteger(message.usingQRegList[i]))
                        return "usingQRegList: integer[] expected";
            }
            if (message.circuit != null && message.hasOwnProperty("circuit")) {
                if (!Array.isArray(message.circuit))
                    return "circuit: array expected";
                for (var i = 0; i < message.circuit.length; ++i) {
                    var error = $root.CircuitLine.verify(message.circuit[i]);
                    if (error)
                        return "circuit." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a Procedure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Procedure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Procedure} Procedure
         */
        Procedure.fromObject = function fromObject(object) {
            if (object instanceof $root.Procedure)
                return object;
            var message = new $root.Procedure();
            if (object.parameterCount != null)
                message.parameterCount = object.parameterCount >>> 0;
            if (object.usingQRegList) {
                if (!Array.isArray(object.usingQRegList))
                    throw TypeError(".Procedure.usingQRegList: array expected");
                message.usingQRegList = [];
                for (var i = 0; i < object.usingQRegList.length; ++i)
                    message.usingQRegList[i] = object.usingQRegList[i] >>> 0;
            }
            if (object.circuit) {
                if (!Array.isArray(object.circuit))
                    throw TypeError(".Procedure.circuit: array expected");
                message.circuit = [];
                for (var i = 0; i < object.circuit.length; ++i) {
                    if (typeof object.circuit[i] !== "object")
                        throw TypeError(".Procedure.circuit: object expected");
                    message.circuit[i] = $root.CircuitLine.fromObject(object.circuit[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a Procedure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Procedure
         * @static
         * @param {Procedure} message Procedure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Procedure.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.usingQRegList = [];
                object.circuit = [];
            }
            if (options.defaults)
                object.parameterCount = 0;
            if (message.parameterCount != null && message.hasOwnProperty("parameterCount"))
                object.parameterCount = message.parameterCount;
            if (message.usingQRegList && message.usingQRegList.length) {
                object.usingQRegList = [];
                for (var j = 0; j < message.usingQRegList.length; ++j)
                    object.usingQRegList[j] = message.usingQRegList[j];
            }
            if (message.circuit && message.circuit.length) {
                object.circuit = [];
                for (var j = 0; j < message.circuit.length; ++j)
                    object.circuit[j] = $root.CircuitLine.toObject(message.circuit[j], options);
            }
            return object;
        };
    
        /**
         * Converts this Procedure to JSON.
         * @function toJSON
         * @memberof Procedure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Procedure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Procedure;
    })();
    
    $root.QObject = (function() {
    
        /**
         * Properties of a QObject.
         * @exports IQObject
         * @interface IQObject
         * @property {string|null} [type] QObject type
         * @property {string|null} [schema_version] QObject schema_version
         * @property {string|null} [qobj_id] QObject qobj_id
         * @property {Array.<IExperiment>|null} [experiments] QObject experiments
         */
    
        /**
         * Constructs a new QObject.
         * @exports QObject
         * @classdesc Represents a QObject.
         * @implements IQObject
         * @constructor
         * @param {IQObject=} [properties] Properties to set
         */
        function QObject(properties) {
            this.experiments = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * QObject type.
         * @member {string} type
         * @memberof QObject
         * @instance
         */
        QObject.prototype.type = "";
    
        /**
         * QObject schema_version.
         * @member {string} schema_version
         * @memberof QObject
         * @instance
         */
        QObject.prototype.schema_version = "";
    
        /**
         * QObject qobj_id.
         * @member {string} qobj_id
         * @memberof QObject
         * @instance
         */
        QObject.prototype.qobj_id = "";
    
        /**
         * QObject experiments.
         * @member {Array.<IExperiment>} experiments
         * @memberof QObject
         * @instance
         */
        QObject.prototype.experiments = $util.emptyArray;
    
        /**
         * Creates a new QObject instance using the specified properties.
         * @function create
         * @memberof QObject
         * @static
         * @param {IQObject=} [properties] Properties to set
         * @returns {QObject} QObject instance
         */
        QObject.create = function create(properties) {
            return new QObject(properties);
        };
    
        /**
         * Encodes the specified QObject message. Does not implicitly {@link QObject.verify|verify} messages.
         * @function encode
         * @memberof QObject
         * @static
         * @param {IQObject} message QObject message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QObject.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.schema_version != null && Object.hasOwnProperty.call(message, "schema_version"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.schema_version);
            if (message.qobj_id != null && Object.hasOwnProperty.call(message, "qobj_id"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.qobj_id);
            if (message.experiments != null && message.experiments.length)
                for (var i = 0; i < message.experiments.length; ++i)
                    $root.Experiment.encode(message.experiments[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified QObject message, length delimited. Does not implicitly {@link QObject.verify|verify} messages.
         * @function encodeDelimited
         * @memberof QObject
         * @static
         * @param {IQObject} message QObject message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QObject.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a QObject message from the specified reader or buffer.
         * @function decode
         * @memberof QObject
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {QObject} QObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QObject.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.QObject();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.schema_version = reader.string();
                    break;
                case 3:
                    message.qobj_id = reader.string();
                    break;
                case 4:
                    if (!(message.experiments && message.experiments.length))
                        message.experiments = [];
                    message.experiments.push($root.Experiment.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a QObject message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof QObject
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {QObject} QObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QObject.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a QObject message.
         * @function verify
         * @memberof QObject
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QObject.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.schema_version != null && message.hasOwnProperty("schema_version"))
                if (!$util.isString(message.schema_version))
                    return "schema_version: string expected";
            if (message.qobj_id != null && message.hasOwnProperty("qobj_id"))
                if (!$util.isString(message.qobj_id))
                    return "qobj_id: string expected";
            if (message.experiments != null && message.hasOwnProperty("experiments")) {
                if (!Array.isArray(message.experiments))
                    return "experiments: array expected";
                for (var i = 0; i < message.experiments.length; ++i) {
                    var error = $root.Experiment.verify(message.experiments[i]);
                    if (error)
                        return "experiments." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a QObject message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof QObject
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {QObject} QObject
         */
        QObject.fromObject = function fromObject(object) {
            if (object instanceof $root.QObject)
                return object;
            var message = new $root.QObject();
            if (object.type != null)
                message.type = String(object.type);
            if (object.schema_version != null)
                message.schema_version = String(object.schema_version);
            if (object.qobj_id != null)
                message.qobj_id = String(object.qobj_id);
            if (object.experiments) {
                if (!Array.isArray(object.experiments))
                    throw TypeError(".QObject.experiments: array expected");
                message.experiments = [];
                for (var i = 0; i < object.experiments.length; ++i) {
                    if (typeof object.experiments[i] !== "object")
                        throw TypeError(".QObject.experiments: object expected");
                    message.experiments[i] = $root.Experiment.fromObject(object.experiments[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a QObject message. Also converts values to other types if specified.
         * @function toObject
         * @memberof QObject
         * @static
         * @param {QObject} message QObject
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QObject.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.experiments = [];
            if (options.defaults) {
                object.type = "";
                object.schema_version = "";
                object.qobj_id = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.schema_version != null && message.hasOwnProperty("schema_version"))
                object.schema_version = message.schema_version;
            if (message.qobj_id != null && message.hasOwnProperty("qobj_id"))
                object.qobj_id = message.qobj_id;
            if (message.experiments && message.experiments.length) {
                object.experiments = [];
                for (var j = 0; j < message.experiments.length; ++j)
                    object.experiments[j] = $root.Experiment.toObject(message.experiments[j], options);
            }
            return object;
        };
    
        /**
         * Converts this QObject to JSON.
         * @function toJSON
         * @memberof QObject
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QObject.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return QObject;
    })();
    
    $root.Experiment = (function() {
    
        /**
         * Properties of an Experiment.
         * @exports IExperiment
         * @interface IExperiment
         * @property {IConfig|null} [config] Experiment config
         * @property {Array.<IInstruction>|null} [instructions] Experiment instructions
         */
    
        /**
         * Constructs a new Experiment.
         * @exports Experiment
         * @classdesc Represents an Experiment.
         * @implements IExperiment
         * @constructor
         * @param {IExperiment=} [properties] Properties to set
         */
        function Experiment(properties) {
            this.instructions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Experiment config.
         * @member {IConfig|null|undefined} config
         * @memberof Experiment
         * @instance
         */
        Experiment.prototype.config = null;
    
        /**
         * Experiment instructions.
         * @member {Array.<IInstruction>} instructions
         * @memberof Experiment
         * @instance
         */
        Experiment.prototype.instructions = $util.emptyArray;
    
        /**
         * Creates a new Experiment instance using the specified properties.
         * @function create
         * @memberof Experiment
         * @static
         * @param {IExperiment=} [properties] Properties to set
         * @returns {Experiment} Experiment instance
         */
        Experiment.create = function create(properties) {
            return new Experiment(properties);
        };
    
        /**
         * Encodes the specified Experiment message. Does not implicitly {@link Experiment.verify|verify} messages.
         * @function encode
         * @memberof Experiment
         * @static
         * @param {IExperiment} message Experiment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Experiment.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.config != null && Object.hasOwnProperty.call(message, "config"))
                $root.Config.encode(message.config, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.instructions != null && message.instructions.length)
                for (var i = 0; i < message.instructions.length; ++i)
                    $root.Instruction.encode(message.instructions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified Experiment message, length delimited. Does not implicitly {@link Experiment.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Experiment
         * @static
         * @param {IExperiment} message Experiment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Experiment.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an Experiment message from the specified reader or buffer.
         * @function decode
         * @memberof Experiment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Experiment} Experiment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Experiment.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Experiment();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.config = $root.Config.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.instructions && message.instructions.length))
                        message.instructions = [];
                    message.instructions.push($root.Instruction.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an Experiment message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Experiment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Experiment} Experiment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Experiment.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an Experiment message.
         * @function verify
         * @memberof Experiment
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Experiment.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.config != null && message.hasOwnProperty("config")) {
                var error = $root.Config.verify(message.config);
                if (error)
                    return "config." + error;
            }
            if (message.instructions != null && message.hasOwnProperty("instructions")) {
                if (!Array.isArray(message.instructions))
                    return "instructions: array expected";
                for (var i = 0; i < message.instructions.length; ++i) {
                    var error = $root.Instruction.verify(message.instructions[i]);
                    if (error)
                        return "instructions." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates an Experiment message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Experiment
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Experiment} Experiment
         */
        Experiment.fromObject = function fromObject(object) {
            if (object instanceof $root.Experiment)
                return object;
            var message = new $root.Experiment();
            if (object.config != null) {
                if (typeof object.config !== "object")
                    throw TypeError(".Experiment.config: object expected");
                message.config = $root.Config.fromObject(object.config);
            }
            if (object.instructions) {
                if (!Array.isArray(object.instructions))
                    throw TypeError(".Experiment.instructions: array expected");
                message.instructions = [];
                for (var i = 0; i < object.instructions.length; ++i) {
                    if (typeof object.instructions[i] !== "object")
                        throw TypeError(".Experiment.instructions: object expected");
                    message.instructions[i] = $root.Instruction.fromObject(object.instructions[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from an Experiment message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Experiment
         * @static
         * @param {Experiment} message Experiment
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Experiment.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.instructions = [];
            if (options.defaults)
                object.config = null;
            if (message.config != null && message.hasOwnProperty("config"))
                object.config = $root.Config.toObject(message.config, options);
            if (message.instructions && message.instructions.length) {
                object.instructions = [];
                for (var j = 0; j < message.instructions.length; ++j)
                    object.instructions[j] = $root.Instruction.toObject(message.instructions[j], options);
            }
            return object;
        };
    
        /**
         * Converts this Experiment to JSON.
         * @function toJSON
         * @memberof Experiment
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Experiment.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Experiment;
    })();
    
    $root.Config = (function() {
    
        /**
         * Properties of a Config.
         * @exports IConfig
         * @interface IConfig
         * @property {number|null} [n_qubits] Config n_qubits
         * @property {number|null} [memory_slots] Config memory_slots
         * @property {number|null} [shots] Config shots
         */
    
        /**
         * Constructs a new Config.
         * @exports Config
         * @classdesc Represents a Config.
         * @implements IConfig
         * @constructor
         * @param {IConfig=} [properties] Properties to set
         */
        function Config(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Config n_qubits.
         * @member {number} n_qubits
         * @memberof Config
         * @instance
         */
        Config.prototype.n_qubits = 0;
    
        /**
         * Config memory_slots.
         * @member {number} memory_slots
         * @memberof Config
         * @instance
         */
        Config.prototype.memory_slots = 0;
    
        /**
         * Config shots.
         * @member {number} shots
         * @memberof Config
         * @instance
         */
        Config.prototype.shots = 0;
    
        /**
         * Creates a new Config instance using the specified properties.
         * @function create
         * @memberof Config
         * @static
         * @param {IConfig=} [properties] Properties to set
         * @returns {Config} Config instance
         */
        Config.create = function create(properties) {
            return new Config(properties);
        };
    
        /**
         * Encodes the specified Config message. Does not implicitly {@link Config.verify|verify} messages.
         * @function encode
         * @memberof Config
         * @static
         * @param {IConfig} message Config message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Config.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.n_qubits != null && Object.hasOwnProperty.call(message, "n_qubits"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.n_qubits);
            if (message.memory_slots != null && Object.hasOwnProperty.call(message, "memory_slots"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.memory_slots);
            if (message.shots != null && Object.hasOwnProperty.call(message, "shots"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.shots);
            return writer;
        };
    
        /**
         * Encodes the specified Config message, length delimited. Does not implicitly {@link Config.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Config
         * @static
         * @param {IConfig} message Config message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Config.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Config message from the specified reader or buffer.
         * @function decode
         * @memberof Config
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Config} Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Config.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Config();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.n_qubits = reader.uint32();
                    break;
                case 2:
                    message.memory_slots = reader.uint32();
                    break;
                case 3:
                    message.shots = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Config message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Config
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Config} Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Config.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Config message.
         * @function verify
         * @memberof Config
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Config.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.n_qubits != null && message.hasOwnProperty("n_qubits"))
                if (!$util.isInteger(message.n_qubits))
                    return "n_qubits: integer expected";
            if (message.memory_slots != null && message.hasOwnProperty("memory_slots"))
                if (!$util.isInteger(message.memory_slots))
                    return "memory_slots: integer expected";
            if (message.shots != null && message.hasOwnProperty("shots"))
                if (!$util.isInteger(message.shots))
                    return "shots: integer expected";
            return null;
        };
    
        /**
         * Creates a Config message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Config
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Config} Config
         */
        Config.fromObject = function fromObject(object) {
            if (object instanceof $root.Config)
                return object;
            var message = new $root.Config();
            if (object.n_qubits != null)
                message.n_qubits = object.n_qubits >>> 0;
            if (object.memory_slots != null)
                message.memory_slots = object.memory_slots >>> 0;
            if (object.shots != null)
                message.shots = object.shots >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a Config message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Config
         * @static
         * @param {Config} message Config
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Config.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.n_qubits = 0;
                object.memory_slots = 0;
                object.shots = 0;
            }
            if (message.n_qubits != null && message.hasOwnProperty("n_qubits"))
                object.n_qubits = message.n_qubits;
            if (message.memory_slots != null && message.hasOwnProperty("memory_slots"))
                object.memory_slots = message.memory_slots;
            if (message.shots != null && message.hasOwnProperty("shots"))
                object.shots = message.shots;
            return object;
        };
    
        /**
         * Converts this Config to JSON.
         * @function toJSON
         * @memberof Config
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Config.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Config;
    })();
    
    $root.Instruction = (function() {
    
        /**
         * Properties of an Instruction.
         * @exports IInstruction
         * @interface IInstruction
         * @property {string|null} [name] Instruction name
         * @property {Array.<number>|null} [qubits] Instruction qubits
         * @property {Array.<number>|null} [params] Instruction params
         * @property {Array.<number>|null} [memory] Instruction memory
         */
    
        /**
         * Constructs a new Instruction.
         * @exports Instruction
         * @classdesc Represents an Instruction.
         * @implements IInstruction
         * @constructor
         * @param {IInstruction=} [properties] Properties to set
         */
        function Instruction(properties) {
            this.qubits = [];
            this.params = [];
            this.memory = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Instruction name.
         * @member {string} name
         * @memberof Instruction
         * @instance
         */
        Instruction.prototype.name = "";
    
        /**
         * Instruction qubits.
         * @member {Array.<number>} qubits
         * @memberof Instruction
         * @instance
         */
        Instruction.prototype.qubits = $util.emptyArray;
    
        /**
         * Instruction params.
         * @member {Array.<number>} params
         * @memberof Instruction
         * @instance
         */
        Instruction.prototype.params = $util.emptyArray;
    
        /**
         * Instruction memory.
         * @member {Array.<number>} memory
         * @memberof Instruction
         * @instance
         */
        Instruction.prototype.memory = $util.emptyArray;
    
        /**
         * Creates a new Instruction instance using the specified properties.
         * @function create
         * @memberof Instruction
         * @static
         * @param {IInstruction=} [properties] Properties to set
         * @returns {Instruction} Instruction instance
         */
        Instruction.create = function create(properties) {
            return new Instruction(properties);
        };
    
        /**
         * Encodes the specified Instruction message. Does not implicitly {@link Instruction.verify|verify} messages.
         * @function encode
         * @memberof Instruction
         * @static
         * @param {IInstruction} message Instruction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Instruction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.qubits != null && message.qubits.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.qubits.length; ++i)
                    writer.uint32(message.qubits[i]);
                writer.ldelim();
            }
            if (message.params != null && message.params.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.params.length; ++i)
                    writer.double(message.params[i]);
                writer.ldelim();
            }
            if (message.memory != null && message.memory.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.memory.length; ++i)
                    writer.uint32(message.memory[i]);
                writer.ldelim();
            }
            return writer;
        };
    
        /**
         * Encodes the specified Instruction message, length delimited. Does not implicitly {@link Instruction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Instruction
         * @static
         * @param {IInstruction} message Instruction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Instruction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an Instruction message from the specified reader or buffer.
         * @function decode
         * @memberof Instruction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Instruction} Instruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Instruction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Instruction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    if (!(message.qubits && message.qubits.length))
                        message.qubits = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.qubits.push(reader.uint32());
                    } else
                        message.qubits.push(reader.uint32());
                    break;
                case 3:
                    if (!(message.params && message.params.length))
                        message.params = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.params.push(reader.double());
                    } else
                        message.params.push(reader.double());
                    break;
                case 4:
                    if (!(message.memory && message.memory.length))
                        message.memory = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.memory.push(reader.uint32());
                    } else
                        message.memory.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an Instruction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Instruction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Instruction} Instruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Instruction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an Instruction message.
         * @function verify
         * @memberof Instruction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Instruction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.qubits != null && message.hasOwnProperty("qubits")) {
                if (!Array.isArray(message.qubits))
                    return "qubits: array expected";
                for (var i = 0; i < message.qubits.length; ++i)
                    if (!$util.isInteger(message.qubits[i]))
                        return "qubits: integer[] expected";
            }
            if (message.params != null && message.hasOwnProperty("params")) {
                if (!Array.isArray(message.params))
                    return "params: array expected";
                for (var i = 0; i < message.params.length; ++i)
                    if (typeof message.params[i] !== "number")
                        return "params: number[] expected";
            }
            if (message.memory != null && message.hasOwnProperty("memory")) {
                if (!Array.isArray(message.memory))
                    return "memory: array expected";
                for (var i = 0; i < message.memory.length; ++i)
                    if (!$util.isInteger(message.memory[i]))
                        return "memory: integer[] expected";
            }
            return null;
        };
    
        /**
         * Creates an Instruction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Instruction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Instruction} Instruction
         */
        Instruction.fromObject = function fromObject(object) {
            if (object instanceof $root.Instruction)
                return object;
            var message = new $root.Instruction();
            if (object.name != null)
                message.name = String(object.name);
            if (object.qubits) {
                if (!Array.isArray(object.qubits))
                    throw TypeError(".Instruction.qubits: array expected");
                message.qubits = [];
                for (var i = 0; i < object.qubits.length; ++i)
                    message.qubits[i] = object.qubits[i] >>> 0;
            }
            if (object.params) {
                if (!Array.isArray(object.params))
                    throw TypeError(".Instruction.params: array expected");
                message.params = [];
                for (var i = 0; i < object.params.length; ++i)
                    message.params[i] = Number(object.params[i]);
            }
            if (object.memory) {
                if (!Array.isArray(object.memory))
                    throw TypeError(".Instruction.memory: array expected");
                message.memory = [];
                for (var i = 0; i < object.memory.length; ++i)
                    message.memory[i] = object.memory[i] >>> 0;
            }
            return message;
        };
    
        /**
         * Creates a plain object from an Instruction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Instruction
         * @static
         * @param {Instruction} message Instruction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Instruction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.qubits = [];
                object.params = [];
                object.memory = [];
            }
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.qubits && message.qubits.length) {
                object.qubits = [];
                for (var j = 0; j < message.qubits.length; ++j)
                    object.qubits[j] = message.qubits[j];
            }
            if (message.params && message.params.length) {
                object.params = [];
                for (var j = 0; j < message.params.length; ++j)
                    object.params[j] = options.json && !isFinite(message.params[j]) ? String(message.params[j]) : message.params[j];
            }
            if (message.memory && message.memory.length) {
                object.memory = [];
                for (var j = 0; j < message.memory.length; ++j)
                    object.memory[j] = message.memory[j];
            }
            return object;
        };
    
        /**
         * Converts this Instruction to JSON.
         * @function toJSON
         * @memberof Instruction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Instruction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Instruction;
    })();

    return $root;
});
