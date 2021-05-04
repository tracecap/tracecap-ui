// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const tracecap = $root.tracecap = (() => {

    /**
     * Namespace tracecap.
     * @exports tracecap
     * @namespace
     */
    const tracecap = {};

    /**
     * SampleScope enum.
     * @name tracecap.SampleScope
     * @enum {number}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} KERNEL=1 KERNEL value
     * @property {number} USERSPACE=2 USERSPACE value
     * @property {number} VM_RUBY=3 VM_RUBY value
     */
    tracecap.SampleScope = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[1] = "KERNEL"] = 1;
        values[valuesById[2] = "USERSPACE"] = 2;
        values[valuesById[3] = "VM_RUBY"] = 3;
        return values;
    })();

    /**
     * SamplePurpose enum.
     * @name tracecap.SamplePurpose
     * @enum {number}
     * @property {number} MISC=0 MISC value
     * @property {number} TRACE=1 TRACE value
     * @property {number} PROFILE=2 PROFILE value
     */
    tracecap.SamplePurpose = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MISC"] = 0;
        values[valuesById[1] = "TRACE"] = 1;
        values[valuesById[2] = "PROFILE"] = 2;
        return values;
    })();

    tracecap.Thread = (function() {

        /**
         * Properties of a Thread.
         * @memberof tracecap
         * @interface IThread
         * @property {Long|null} [internalId] Thread internalId
         * @property {Long|null} [startTime] Thread startTime
         * @property {Long|null} [endTime] Thread endTime
         * @property {number|null} [tid] Thread tid
         */

        /**
         * Constructs a new Thread.
         * @memberof tracecap
         * @classdesc Represents a Thread.
         * @implements IThread
         * @constructor
         * @param {tracecap.IThread=} [properties] Properties to set
         */
        function Thread(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Thread internalId.
         * @member {Long} internalId
         * @memberof tracecap.Thread
         * @instance
         */
        Thread.prototype.internalId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Thread startTime.
         * @member {Long} startTime
         * @memberof tracecap.Thread
         * @instance
         */
        Thread.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Thread endTime.
         * @member {Long} endTime
         * @memberof tracecap.Thread
         * @instance
         */
        Thread.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Thread tid.
         * @member {number} tid
         * @memberof tracecap.Thread
         * @instance
         */
        Thread.prototype.tid = 0;

        /**
         * Creates a new Thread instance using the specified properties.
         * @function create
         * @memberof tracecap.Thread
         * @static
         * @param {tracecap.IThread=} [properties] Properties to set
         * @returns {tracecap.Thread} Thread instance
         */
        Thread.create = function create(properties) {
            return new Thread(properties);
        };

        /**
         * Encodes the specified Thread message. Does not implicitly {@link tracecap.Thread.verify|verify} messages.
         * @function encode
         * @memberof tracecap.Thread
         * @static
         * @param {tracecap.IThread} message Thread message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Thread.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.internalId != null && Object.hasOwnProperty.call(message, "internalId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.internalId);
            if (message.startTime != null && Object.hasOwnProperty.call(message, "startTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.startTime);
            if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.endTime);
            if (message.tid != null && Object.hasOwnProperty.call(message, "tid"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.tid);
            return writer;
        };

        /**
         * Encodes the specified Thread message, length delimited. Does not implicitly {@link tracecap.Thread.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tracecap.Thread
         * @static
         * @param {tracecap.IThread} message Thread message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Thread.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Thread message from the specified reader or buffer.
         * @function decode
         * @memberof tracecap.Thread
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tracecap.Thread} Thread
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Thread.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tracecap.Thread();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.internalId = reader.uint64();
                    break;
                case 2:
                    message.startTime = reader.uint64();
                    break;
                case 3:
                    message.endTime = reader.uint64();
                    break;
                case 4:
                    message.tid = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Thread message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tracecap.Thread
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tracecap.Thread} Thread
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Thread.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Thread message.
         * @function verify
         * @memberof tracecap.Thread
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Thread.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.internalId != null && message.hasOwnProperty("internalId"))
                if (!$util.isInteger(message.internalId) && !(message.internalId && $util.isInteger(message.internalId.low) && $util.isInteger(message.internalId.high)))
                    return "internalId: integer|Long expected";
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                if (!$util.isInteger(message.startTime) && !(message.startTime && $util.isInteger(message.startTime.low) && $util.isInteger(message.startTime.high)))
                    return "startTime: integer|Long expected";
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                if (!$util.isInteger(message.endTime) && !(message.endTime && $util.isInteger(message.endTime.low) && $util.isInteger(message.endTime.high)))
                    return "endTime: integer|Long expected";
            if (message.tid != null && message.hasOwnProperty("tid"))
                if (!$util.isInteger(message.tid))
                    return "tid: integer expected";
            return null;
        };

        /**
         * Creates a Thread message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tracecap.Thread
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tracecap.Thread} Thread
         */
        Thread.fromObject = function fromObject(object) {
            if (object instanceof $root.tracecap.Thread)
                return object;
            let message = new $root.tracecap.Thread();
            if (object.internalId != null)
                if ($util.Long)
                    (message.internalId = $util.Long.fromValue(object.internalId)).unsigned = true;
                else if (typeof object.internalId === "string")
                    message.internalId = parseInt(object.internalId, 10);
                else if (typeof object.internalId === "number")
                    message.internalId = object.internalId;
                else if (typeof object.internalId === "object")
                    message.internalId = new $util.LongBits(object.internalId.low >>> 0, object.internalId.high >>> 0).toNumber(true);
            if (object.startTime != null)
                if ($util.Long)
                    (message.startTime = $util.Long.fromValue(object.startTime)).unsigned = true;
                else if (typeof object.startTime === "string")
                    message.startTime = parseInt(object.startTime, 10);
                else if (typeof object.startTime === "number")
                    message.startTime = object.startTime;
                else if (typeof object.startTime === "object")
                    message.startTime = new $util.LongBits(object.startTime.low >>> 0, object.startTime.high >>> 0).toNumber(true);
            if (object.endTime != null)
                if ($util.Long)
                    (message.endTime = $util.Long.fromValue(object.endTime)).unsigned = true;
                else if (typeof object.endTime === "string")
                    message.endTime = parseInt(object.endTime, 10);
                else if (typeof object.endTime === "number")
                    message.endTime = object.endTime;
                else if (typeof object.endTime === "object")
                    message.endTime = new $util.LongBits(object.endTime.low >>> 0, object.endTime.high >>> 0).toNumber(true);
            if (object.tid != null)
                message.tid = object.tid >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Thread message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tracecap.Thread
         * @static
         * @param {tracecap.Thread} message Thread
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Thread.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.internalId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.internalId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.startTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.endTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.endTime = options.longs === String ? "0" : 0;
                object.tid = 0;
            }
            if (message.internalId != null && message.hasOwnProperty("internalId"))
                if (typeof message.internalId === "number")
                    object.internalId = options.longs === String ? String(message.internalId) : message.internalId;
                else
                    object.internalId = options.longs === String ? $util.Long.prototype.toString.call(message.internalId) : options.longs === Number ? new $util.LongBits(message.internalId.low >>> 0, message.internalId.high >>> 0).toNumber(true) : message.internalId;
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                if (typeof message.startTime === "number")
                    object.startTime = options.longs === String ? String(message.startTime) : message.startTime;
                else
                    object.startTime = options.longs === String ? $util.Long.prototype.toString.call(message.startTime) : options.longs === Number ? new $util.LongBits(message.startTime.low >>> 0, message.startTime.high >>> 0).toNumber(true) : message.startTime;
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                if (typeof message.endTime === "number")
                    object.endTime = options.longs === String ? String(message.endTime) : message.endTime;
                else
                    object.endTime = options.longs === String ? $util.Long.prototype.toString.call(message.endTime) : options.longs === Number ? new $util.LongBits(message.endTime.low >>> 0, message.endTime.high >>> 0).toNumber(true) : message.endTime;
            if (message.tid != null && message.hasOwnProperty("tid"))
                object.tid = message.tid;
            return object;
        };

        /**
         * Converts this Thread to JSON.
         * @function toJSON
         * @memberof tracecap.Thread
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Thread.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Thread;
    })();

    tracecap.Process = (function() {

        /**
         * Properties of a Process.
         * @memberof tracecap
         * @interface IProcess
         * @property {Long|null} [internalId] Process internalId
         * @property {Long|null} [startTime] Process startTime
         * @property {Long|null} [endTime] Process endTime
         * @property {number|null} [pid] Process pid
         * @property {string|null} [execName] Process execName
         * @property {Array.<tracecap.IThread>|null} [threads] Process threads
         */

        /**
         * Constructs a new Process.
         * @memberof tracecap
         * @classdesc Represents a Process.
         * @implements IProcess
         * @constructor
         * @param {tracecap.IProcess=} [properties] Properties to set
         */
        function Process(properties) {
            this.threads = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Process internalId.
         * @member {Long} internalId
         * @memberof tracecap.Process
         * @instance
         */
        Process.prototype.internalId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Process startTime.
         * @member {Long} startTime
         * @memberof tracecap.Process
         * @instance
         */
        Process.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Process endTime.
         * @member {Long} endTime
         * @memberof tracecap.Process
         * @instance
         */
        Process.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Process pid.
         * @member {number} pid
         * @memberof tracecap.Process
         * @instance
         */
        Process.prototype.pid = 0;

        /**
         * Process execName.
         * @member {string} execName
         * @memberof tracecap.Process
         * @instance
         */
        Process.prototype.execName = "";

        /**
         * Process threads.
         * @member {Array.<tracecap.IThread>} threads
         * @memberof tracecap.Process
         * @instance
         */
        Process.prototype.threads = $util.emptyArray;

        /**
         * Creates a new Process instance using the specified properties.
         * @function create
         * @memberof tracecap.Process
         * @static
         * @param {tracecap.IProcess=} [properties] Properties to set
         * @returns {tracecap.Process} Process instance
         */
        Process.create = function create(properties) {
            return new Process(properties);
        };

        /**
         * Encodes the specified Process message. Does not implicitly {@link tracecap.Process.verify|verify} messages.
         * @function encode
         * @memberof tracecap.Process
         * @static
         * @param {tracecap.IProcess} message Process message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Process.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.internalId != null && Object.hasOwnProperty.call(message, "internalId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.internalId);
            if (message.startTime != null && Object.hasOwnProperty.call(message, "startTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.startTime);
            if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.endTime);
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.pid);
            if (message.execName != null && Object.hasOwnProperty.call(message, "execName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.execName);
            if (message.threads != null && message.threads.length)
                for (let i = 0; i < message.threads.length; ++i)
                    $root.tracecap.Thread.encode(message.threads[i], writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Process message, length delimited. Does not implicitly {@link tracecap.Process.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tracecap.Process
         * @static
         * @param {tracecap.IProcess} message Process message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Process.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Process message from the specified reader or buffer.
         * @function decode
         * @memberof tracecap.Process
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tracecap.Process} Process
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Process.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tracecap.Process();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.internalId = reader.uint64();
                    break;
                case 2:
                    message.startTime = reader.uint64();
                    break;
                case 3:
                    message.endTime = reader.uint64();
                    break;
                case 4:
                    message.pid = reader.uint32();
                    break;
                case 5:
                    message.execName = reader.string();
                    break;
                case 16:
                    if (!(message.threads && message.threads.length))
                        message.threads = [];
                    message.threads.push($root.tracecap.Thread.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Process message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tracecap.Process
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tracecap.Process} Process
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Process.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Process message.
         * @function verify
         * @memberof tracecap.Process
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Process.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.internalId != null && message.hasOwnProperty("internalId"))
                if (!$util.isInteger(message.internalId) && !(message.internalId && $util.isInteger(message.internalId.low) && $util.isInteger(message.internalId.high)))
                    return "internalId: integer|Long expected";
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                if (!$util.isInteger(message.startTime) && !(message.startTime && $util.isInteger(message.startTime.low) && $util.isInteger(message.startTime.high)))
                    return "startTime: integer|Long expected";
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                if (!$util.isInteger(message.endTime) && !(message.endTime && $util.isInteger(message.endTime.low) && $util.isInteger(message.endTime.high)))
                    return "endTime: integer|Long expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isInteger(message.pid))
                    return "pid: integer expected";
            if (message.execName != null && message.hasOwnProperty("execName"))
                if (!$util.isString(message.execName))
                    return "execName: string expected";
            if (message.threads != null && message.hasOwnProperty("threads")) {
                if (!Array.isArray(message.threads))
                    return "threads: array expected";
                for (let i = 0; i < message.threads.length; ++i) {
                    let error = $root.tracecap.Thread.verify(message.threads[i]);
                    if (error)
                        return "threads." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Process message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tracecap.Process
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tracecap.Process} Process
         */
        Process.fromObject = function fromObject(object) {
            if (object instanceof $root.tracecap.Process)
                return object;
            let message = new $root.tracecap.Process();
            if (object.internalId != null)
                if ($util.Long)
                    (message.internalId = $util.Long.fromValue(object.internalId)).unsigned = true;
                else if (typeof object.internalId === "string")
                    message.internalId = parseInt(object.internalId, 10);
                else if (typeof object.internalId === "number")
                    message.internalId = object.internalId;
                else if (typeof object.internalId === "object")
                    message.internalId = new $util.LongBits(object.internalId.low >>> 0, object.internalId.high >>> 0).toNumber(true);
            if (object.startTime != null)
                if ($util.Long)
                    (message.startTime = $util.Long.fromValue(object.startTime)).unsigned = true;
                else if (typeof object.startTime === "string")
                    message.startTime = parseInt(object.startTime, 10);
                else if (typeof object.startTime === "number")
                    message.startTime = object.startTime;
                else if (typeof object.startTime === "object")
                    message.startTime = new $util.LongBits(object.startTime.low >>> 0, object.startTime.high >>> 0).toNumber(true);
            if (object.endTime != null)
                if ($util.Long)
                    (message.endTime = $util.Long.fromValue(object.endTime)).unsigned = true;
                else if (typeof object.endTime === "string")
                    message.endTime = parseInt(object.endTime, 10);
                else if (typeof object.endTime === "number")
                    message.endTime = object.endTime;
                else if (typeof object.endTime === "object")
                    message.endTime = new $util.LongBits(object.endTime.low >>> 0, object.endTime.high >>> 0).toNumber(true);
            if (object.pid != null)
                message.pid = object.pid >>> 0;
            if (object.execName != null)
                message.execName = String(object.execName);
            if (object.threads) {
                if (!Array.isArray(object.threads))
                    throw TypeError(".tracecap.Process.threads: array expected");
                message.threads = [];
                for (let i = 0; i < object.threads.length; ++i) {
                    if (typeof object.threads[i] !== "object")
                        throw TypeError(".tracecap.Process.threads: object expected");
                    message.threads[i] = $root.tracecap.Thread.fromObject(object.threads[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Process message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tracecap.Process
         * @static
         * @param {tracecap.Process} message Process
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Process.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.threads = [];
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.internalId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.internalId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.startTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.endTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.endTime = options.longs === String ? "0" : 0;
                object.pid = 0;
                object.execName = "";
            }
            if (message.internalId != null && message.hasOwnProperty("internalId"))
                if (typeof message.internalId === "number")
                    object.internalId = options.longs === String ? String(message.internalId) : message.internalId;
                else
                    object.internalId = options.longs === String ? $util.Long.prototype.toString.call(message.internalId) : options.longs === Number ? new $util.LongBits(message.internalId.low >>> 0, message.internalId.high >>> 0).toNumber(true) : message.internalId;
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                if (typeof message.startTime === "number")
                    object.startTime = options.longs === String ? String(message.startTime) : message.startTime;
                else
                    object.startTime = options.longs === String ? $util.Long.prototype.toString.call(message.startTime) : options.longs === Number ? new $util.LongBits(message.startTime.low >>> 0, message.startTime.high >>> 0).toNumber(true) : message.startTime;
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                if (typeof message.endTime === "number")
                    object.endTime = options.longs === String ? String(message.endTime) : message.endTime;
                else
                    object.endTime = options.longs === String ? $util.Long.prototype.toString.call(message.endTime) : options.longs === Number ? new $util.LongBits(message.endTime.low >>> 0, message.endTime.high >>> 0).toNumber(true) : message.endTime;
            if (message.pid != null && message.hasOwnProperty("pid"))
                object.pid = message.pid;
            if (message.execName != null && message.hasOwnProperty("execName"))
                object.execName = message.execName;
            if (message.threads && message.threads.length) {
                object.threads = [];
                for (let j = 0; j < message.threads.length; ++j)
                    object.threads[j] = $root.tracecap.Thread.toObject(message.threads[j], options);
            }
            return object;
        };

        /**
         * Converts this Process to JSON.
         * @function toJSON
         * @memberof tracecap.Process
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Process.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Process;
    })();

    tracecap.ObjectSpaceSample = (function() {

        /**
         * Properties of an ObjectSpaceSample.
         * @memberof tracecap
         * @interface IObjectSpaceSample
         * @property {Long|null} [total] ObjectSpaceSample total
         * @property {Long|null} [free] ObjectSpaceSample free
         */

        /**
         * Constructs a new ObjectSpaceSample.
         * @memberof tracecap
         * @classdesc Represents an ObjectSpaceSample.
         * @implements IObjectSpaceSample
         * @constructor
         * @param {tracecap.IObjectSpaceSample=} [properties] Properties to set
         */
        function ObjectSpaceSample(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObjectSpaceSample total.
         * @member {Long} total
         * @memberof tracecap.ObjectSpaceSample
         * @instance
         */
        ObjectSpaceSample.prototype.total = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ObjectSpaceSample free.
         * @member {Long} free
         * @memberof tracecap.ObjectSpaceSample
         * @instance
         */
        ObjectSpaceSample.prototype.free = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new ObjectSpaceSample instance using the specified properties.
         * @function create
         * @memberof tracecap.ObjectSpaceSample
         * @static
         * @param {tracecap.IObjectSpaceSample=} [properties] Properties to set
         * @returns {tracecap.ObjectSpaceSample} ObjectSpaceSample instance
         */
        ObjectSpaceSample.create = function create(properties) {
            return new ObjectSpaceSample(properties);
        };

        /**
         * Encodes the specified ObjectSpaceSample message. Does not implicitly {@link tracecap.ObjectSpaceSample.verify|verify} messages.
         * @function encode
         * @memberof tracecap.ObjectSpaceSample
         * @static
         * @param {tracecap.IObjectSpaceSample} message ObjectSpaceSample message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectSpaceSample.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.total);
            if (message.free != null && Object.hasOwnProperty.call(message, "free"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.free);
            return writer;
        };

        /**
         * Encodes the specified ObjectSpaceSample message, length delimited. Does not implicitly {@link tracecap.ObjectSpaceSample.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tracecap.ObjectSpaceSample
         * @static
         * @param {tracecap.IObjectSpaceSample} message ObjectSpaceSample message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObjectSpaceSample.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ObjectSpaceSample message from the specified reader or buffer.
         * @function decode
         * @memberof tracecap.ObjectSpaceSample
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tracecap.ObjectSpaceSample} ObjectSpaceSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectSpaceSample.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tracecap.ObjectSpaceSample();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.total = reader.uint64();
                    break;
                case 2:
                    message.free = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ObjectSpaceSample message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tracecap.ObjectSpaceSample
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tracecap.ObjectSpaceSample} ObjectSpaceSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObjectSpaceSample.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ObjectSpaceSample message.
         * @function verify
         * @memberof tracecap.ObjectSpaceSample
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ObjectSpaceSample.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                    return "total: integer|Long expected";
            if (message.free != null && message.hasOwnProperty("free"))
                if (!$util.isInteger(message.free) && !(message.free && $util.isInteger(message.free.low) && $util.isInteger(message.free.high)))
                    return "free: integer|Long expected";
            return null;
        };

        /**
         * Creates an ObjectSpaceSample message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tracecap.ObjectSpaceSample
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tracecap.ObjectSpaceSample} ObjectSpaceSample
         */
        ObjectSpaceSample.fromObject = function fromObject(object) {
            if (object instanceof $root.tracecap.ObjectSpaceSample)
                return object;
            let message = new $root.tracecap.ObjectSpaceSample();
            if (object.total != null)
                if ($util.Long)
                    (message.total = $util.Long.fromValue(object.total)).unsigned = true;
                else if (typeof object.total === "string")
                    message.total = parseInt(object.total, 10);
                else if (typeof object.total === "number")
                    message.total = object.total;
                else if (typeof object.total === "object")
                    message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber(true);
            if (object.free != null)
                if ($util.Long)
                    (message.free = $util.Long.fromValue(object.free)).unsigned = true;
                else if (typeof object.free === "string")
                    message.free = parseInt(object.free, 10);
                else if (typeof object.free === "number")
                    message.free = object.free;
                else if (typeof object.free === "object")
                    message.free = new $util.LongBits(object.free.low >>> 0, object.free.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from an ObjectSpaceSample message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tracecap.ObjectSpaceSample
         * @static
         * @param {tracecap.ObjectSpaceSample} message ObjectSpaceSample
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ObjectSpaceSample.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.total = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.free = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.free = options.longs === String ? "0" : 0;
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber(true) : message.total;
            if (message.free != null && message.hasOwnProperty("free"))
                if (typeof message.free === "number")
                    object.free = options.longs === String ? String(message.free) : message.free;
                else
                    object.free = options.longs === String ? $util.Long.prototype.toString.call(message.free) : options.longs === Number ? new $util.LongBits(message.free.low >>> 0, message.free.high >>> 0).toNumber(true) : message.free;
            return object;
        };

        /**
         * Converts this ObjectSpaceSample to JSON.
         * @function toJSON
         * @memberof tracecap.ObjectSpaceSample
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ObjectSpaceSample.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ObjectSpaceSample;
    })();

    tracecap.StackFrame = (function() {

        /**
         * Properties of a StackFrame.
         * @memberof tracecap
         * @interface IStackFrame
         * @property {string|null} [file] StackFrame file
         * @property {number|null} [line] StackFrame line
         * @property {string|null} [method] StackFrame method
         * @property {string|null} ["package"] StackFrame package
         */

        /**
         * Constructs a new StackFrame.
         * @memberof tracecap
         * @classdesc Represents a StackFrame.
         * @implements IStackFrame
         * @constructor
         * @param {tracecap.IStackFrame=} [properties] Properties to set
         */
        function StackFrame(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StackFrame file.
         * @member {string} file
         * @memberof tracecap.StackFrame
         * @instance
         */
        StackFrame.prototype.file = "";

        /**
         * StackFrame line.
         * @member {number} line
         * @memberof tracecap.StackFrame
         * @instance
         */
        StackFrame.prototype.line = 0;

        /**
         * StackFrame method.
         * @member {string} method
         * @memberof tracecap.StackFrame
         * @instance
         */
        StackFrame.prototype.method = "";

        /**
         * StackFrame package.
         * @member {string} package
         * @memberof tracecap.StackFrame
         * @instance
         */
        StackFrame.prototype["package"] = "";

        /**
         * Creates a new StackFrame instance using the specified properties.
         * @function create
         * @memberof tracecap.StackFrame
         * @static
         * @param {tracecap.IStackFrame=} [properties] Properties to set
         * @returns {tracecap.StackFrame} StackFrame instance
         */
        StackFrame.create = function create(properties) {
            return new StackFrame(properties);
        };

        /**
         * Encodes the specified StackFrame message. Does not implicitly {@link tracecap.StackFrame.verify|verify} messages.
         * @function encode
         * @memberof tracecap.StackFrame
         * @static
         * @param {tracecap.IStackFrame} message StackFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StackFrame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.file != null && Object.hasOwnProperty.call(message, "file"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.file);
            if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.line);
            if (message.method != null && Object.hasOwnProperty.call(message, "method"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.method);
            if (message["package"] != null && Object.hasOwnProperty.call(message, "package"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message["package"]);
            return writer;
        };

        /**
         * Encodes the specified StackFrame message, length delimited. Does not implicitly {@link tracecap.StackFrame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tracecap.StackFrame
         * @static
         * @param {tracecap.IStackFrame} message StackFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StackFrame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StackFrame message from the specified reader or buffer.
         * @function decode
         * @memberof tracecap.StackFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tracecap.StackFrame} StackFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StackFrame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tracecap.StackFrame();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.file = reader.string();
                    break;
                case 2:
                    message.line = reader.uint32();
                    break;
                case 3:
                    message.method = reader.string();
                    break;
                case 4:
                    message["package"] = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StackFrame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tracecap.StackFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tracecap.StackFrame} StackFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StackFrame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StackFrame message.
         * @function verify
         * @memberof tracecap.StackFrame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StackFrame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.file != null && message.hasOwnProperty("file"))
                if (!$util.isString(message.file))
                    return "file: string expected";
            if (message.line != null && message.hasOwnProperty("line"))
                if (!$util.isInteger(message.line))
                    return "line: integer expected";
            if (message.method != null && message.hasOwnProperty("method"))
                if (!$util.isString(message.method))
                    return "method: string expected";
            if (message["package"] != null && message.hasOwnProperty("package"))
                if (!$util.isString(message["package"]))
                    return "package: string expected";
            return null;
        };

        /**
         * Creates a StackFrame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tracecap.StackFrame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tracecap.StackFrame} StackFrame
         */
        StackFrame.fromObject = function fromObject(object) {
            if (object instanceof $root.tracecap.StackFrame)
                return object;
            let message = new $root.tracecap.StackFrame();
            if (object.file != null)
                message.file = String(object.file);
            if (object.line != null)
                message.line = object.line >>> 0;
            if (object.method != null)
                message.method = String(object.method);
            if (object["package"] != null)
                message["package"] = String(object["package"]);
            return message;
        };

        /**
         * Creates a plain object from a StackFrame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tracecap.StackFrame
         * @static
         * @param {tracecap.StackFrame} message StackFrame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StackFrame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.file = "";
                object.line = 0;
                object.method = "";
                object["package"] = "";
            }
            if (message.file != null && message.hasOwnProperty("file"))
                object.file = message.file;
            if (message.line != null && message.hasOwnProperty("line"))
                object.line = message.line;
            if (message.method != null && message.hasOwnProperty("method"))
                object.method = message.method;
            if (message["package"] != null && message.hasOwnProperty("package"))
                object["package"] = message["package"];
            return object;
        };

        /**
         * Converts this StackFrame to JSON.
         * @function toJSON
         * @memberof tracecap.StackFrame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StackFrame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StackFrame;
    })();

    tracecap.StackSample = (function() {

        /**
         * Properties of a StackSample.
         * @memberof tracecap
         * @interface IStackSample
         * @property {Array.<tracecap.IStackFrame>|null} [stack] StackSample stack
         */

        /**
         * Constructs a new StackSample.
         * @memberof tracecap
         * @classdesc Represents a StackSample.
         * @implements IStackSample
         * @constructor
         * @param {tracecap.IStackSample=} [properties] Properties to set
         */
        function StackSample(properties) {
            this.stack = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StackSample stack.
         * @member {Array.<tracecap.IStackFrame>} stack
         * @memberof tracecap.StackSample
         * @instance
         */
        StackSample.prototype.stack = $util.emptyArray;

        /**
         * Creates a new StackSample instance using the specified properties.
         * @function create
         * @memberof tracecap.StackSample
         * @static
         * @param {tracecap.IStackSample=} [properties] Properties to set
         * @returns {tracecap.StackSample} StackSample instance
         */
        StackSample.create = function create(properties) {
            return new StackSample(properties);
        };

        /**
         * Encodes the specified StackSample message. Does not implicitly {@link tracecap.StackSample.verify|verify} messages.
         * @function encode
         * @memberof tracecap.StackSample
         * @static
         * @param {tracecap.IStackSample} message StackSample message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StackSample.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.stack != null && message.stack.length)
                for (let i = 0; i < message.stack.length; ++i)
                    $root.tracecap.StackFrame.encode(message.stack[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StackSample message, length delimited. Does not implicitly {@link tracecap.StackSample.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tracecap.StackSample
         * @static
         * @param {tracecap.IStackSample} message StackSample message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StackSample.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StackSample message from the specified reader or buffer.
         * @function decode
         * @memberof tracecap.StackSample
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tracecap.StackSample} StackSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StackSample.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tracecap.StackSample();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.stack && message.stack.length))
                        message.stack = [];
                    message.stack.push($root.tracecap.StackFrame.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StackSample message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tracecap.StackSample
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tracecap.StackSample} StackSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StackSample.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StackSample message.
         * @function verify
         * @memberof tracecap.StackSample
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StackSample.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.stack != null && message.hasOwnProperty("stack")) {
                if (!Array.isArray(message.stack))
                    return "stack: array expected";
                for (let i = 0; i < message.stack.length; ++i) {
                    let error = $root.tracecap.StackFrame.verify(message.stack[i]);
                    if (error)
                        return "stack." + error;
                }
            }
            return null;
        };

        /**
         * Creates a StackSample message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tracecap.StackSample
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tracecap.StackSample} StackSample
         */
        StackSample.fromObject = function fromObject(object) {
            if (object instanceof $root.tracecap.StackSample)
                return object;
            let message = new $root.tracecap.StackSample();
            if (object.stack) {
                if (!Array.isArray(object.stack))
                    throw TypeError(".tracecap.StackSample.stack: array expected");
                message.stack = [];
                for (let i = 0; i < object.stack.length; ++i) {
                    if (typeof object.stack[i] !== "object")
                        throw TypeError(".tracecap.StackSample.stack: object expected");
                    message.stack[i] = $root.tracecap.StackFrame.fromObject(object.stack[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a StackSample message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tracecap.StackSample
         * @static
         * @param {tracecap.StackSample} message StackSample
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StackSample.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.stack = [];
            if (message.stack && message.stack.length) {
                object.stack = [];
                for (let j = 0; j < message.stack.length; ++j)
                    object.stack[j] = $root.tracecap.StackFrame.toObject(message.stack[j], options);
            }
            return object;
        };

        /**
         * Converts this StackSample to JSON.
         * @function toJSON
         * @memberof tracecap.StackSample
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StackSample.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StackSample;
    })();

    tracecap.SpanSample = (function() {

        /**
         * Properties of a SpanSample.
         * @memberof tracecap
         * @interface ISpanSample
         * @property {Long|null} [startTime] SpanSample startTime
         * @property {Long|null} [endTime] SpanSample endTime
         * @property {string|null} [id] SpanSample id
         * @property {string|null} [parentId] SpanSample parentId
         * @property {string|null} [componentName] SpanSample componentName
         * @property {string|null} [description] SpanSample description
         * @property {Long|null} [queueTime] SpanSample queueTime
         */

        /**
         * Constructs a new SpanSample.
         * @memberof tracecap
         * @classdesc Represents a SpanSample.
         * @implements ISpanSample
         * @constructor
         * @param {tracecap.ISpanSample=} [properties] Properties to set
         */
        function SpanSample(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpanSample startTime.
         * @member {Long} startTime
         * @memberof tracecap.SpanSample
         * @instance
         */
        SpanSample.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SpanSample endTime.
         * @member {Long} endTime
         * @memberof tracecap.SpanSample
         * @instance
         */
        SpanSample.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SpanSample id.
         * @member {string} id
         * @memberof tracecap.SpanSample
         * @instance
         */
        SpanSample.prototype.id = "";

        /**
         * SpanSample parentId.
         * @member {string} parentId
         * @memberof tracecap.SpanSample
         * @instance
         */
        SpanSample.prototype.parentId = "";

        /**
         * SpanSample componentName.
         * @member {string} componentName
         * @memberof tracecap.SpanSample
         * @instance
         */
        SpanSample.prototype.componentName = "";

        /**
         * SpanSample description.
         * @member {string} description
         * @memberof tracecap.SpanSample
         * @instance
         */
        SpanSample.prototype.description = "";

        /**
         * SpanSample queueTime.
         * @member {Long} queueTime
         * @memberof tracecap.SpanSample
         * @instance
         */
        SpanSample.prototype.queueTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new SpanSample instance using the specified properties.
         * @function create
         * @memberof tracecap.SpanSample
         * @static
         * @param {tracecap.ISpanSample=} [properties] Properties to set
         * @returns {tracecap.SpanSample} SpanSample instance
         */
        SpanSample.create = function create(properties) {
            return new SpanSample(properties);
        };

        /**
         * Encodes the specified SpanSample message. Does not implicitly {@link tracecap.SpanSample.verify|verify} messages.
         * @function encode
         * @memberof tracecap.SpanSample
         * @static
         * @param {tracecap.ISpanSample} message SpanSample message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpanSample.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.startTime != null && Object.hasOwnProperty.call(message, "startTime"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.startTime);
            if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.endTime);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
            if (message.parentId != null && Object.hasOwnProperty.call(message, "parentId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.parentId);
            if (message.componentName != null && Object.hasOwnProperty.call(message, "componentName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.componentName);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.description);
            if (message.queueTime != null && Object.hasOwnProperty.call(message, "queueTime"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.queueTime);
            return writer;
        };

        /**
         * Encodes the specified SpanSample message, length delimited. Does not implicitly {@link tracecap.SpanSample.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tracecap.SpanSample
         * @static
         * @param {tracecap.ISpanSample} message SpanSample message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpanSample.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SpanSample message from the specified reader or buffer.
         * @function decode
         * @memberof tracecap.SpanSample
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tracecap.SpanSample} SpanSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpanSample.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tracecap.SpanSample();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.startTime = reader.uint64();
                    break;
                case 2:
                    message.endTime = reader.uint64();
                    break;
                case 3:
                    message.id = reader.string();
                    break;
                case 4:
                    message.parentId = reader.string();
                    break;
                case 5:
                    message.componentName = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    message.queueTime = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SpanSample message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tracecap.SpanSample
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tracecap.SpanSample} SpanSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpanSample.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SpanSample message.
         * @function verify
         * @memberof tracecap.SpanSample
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SpanSample.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                if (!$util.isInteger(message.startTime) && !(message.startTime && $util.isInteger(message.startTime.low) && $util.isInteger(message.startTime.high)))
                    return "startTime: integer|Long expected";
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                if (!$util.isInteger(message.endTime) && !(message.endTime && $util.isInteger(message.endTime.low) && $util.isInteger(message.endTime.high)))
                    return "endTime: integer|Long expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                if (!$util.isString(message.parentId))
                    return "parentId: string expected";
            if (message.componentName != null && message.hasOwnProperty("componentName"))
                if (!$util.isString(message.componentName))
                    return "componentName: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.queueTime != null && message.hasOwnProperty("queueTime"))
                if (!$util.isInteger(message.queueTime) && !(message.queueTime && $util.isInteger(message.queueTime.low) && $util.isInteger(message.queueTime.high)))
                    return "queueTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a SpanSample message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tracecap.SpanSample
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tracecap.SpanSample} SpanSample
         */
        SpanSample.fromObject = function fromObject(object) {
            if (object instanceof $root.tracecap.SpanSample)
                return object;
            let message = new $root.tracecap.SpanSample();
            if (object.startTime != null)
                if ($util.Long)
                    (message.startTime = $util.Long.fromValue(object.startTime)).unsigned = true;
                else if (typeof object.startTime === "string")
                    message.startTime = parseInt(object.startTime, 10);
                else if (typeof object.startTime === "number")
                    message.startTime = object.startTime;
                else if (typeof object.startTime === "object")
                    message.startTime = new $util.LongBits(object.startTime.low >>> 0, object.startTime.high >>> 0).toNumber(true);
            if (object.endTime != null)
                if ($util.Long)
                    (message.endTime = $util.Long.fromValue(object.endTime)).unsigned = true;
                else if (typeof object.endTime === "string")
                    message.endTime = parseInt(object.endTime, 10);
                else if (typeof object.endTime === "number")
                    message.endTime = object.endTime;
                else if (typeof object.endTime === "object")
                    message.endTime = new $util.LongBits(object.endTime.low >>> 0, object.endTime.high >>> 0).toNumber(true);
            if (object.id != null)
                message.id = String(object.id);
            if (object.parentId != null)
                message.parentId = String(object.parentId);
            if (object.componentName != null)
                message.componentName = String(object.componentName);
            if (object.description != null)
                message.description = String(object.description);
            if (object.queueTime != null)
                if ($util.Long)
                    (message.queueTime = $util.Long.fromValue(object.queueTime)).unsigned = true;
                else if (typeof object.queueTime === "string")
                    message.queueTime = parseInt(object.queueTime, 10);
                else if (typeof object.queueTime === "number")
                    message.queueTime = object.queueTime;
                else if (typeof object.queueTime === "object")
                    message.queueTime = new $util.LongBits(object.queueTime.low >>> 0, object.queueTime.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a SpanSample message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tracecap.SpanSample
         * @static
         * @param {tracecap.SpanSample} message SpanSample
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpanSample.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.startTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.endTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.endTime = options.longs === String ? "0" : 0;
                object.id = "";
                object.parentId = "";
                object.componentName = "";
                object.description = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.queueTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.queueTime = options.longs === String ? "0" : 0;
            }
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                if (typeof message.startTime === "number")
                    object.startTime = options.longs === String ? String(message.startTime) : message.startTime;
                else
                    object.startTime = options.longs === String ? $util.Long.prototype.toString.call(message.startTime) : options.longs === Number ? new $util.LongBits(message.startTime.low >>> 0, message.startTime.high >>> 0).toNumber(true) : message.startTime;
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                if (typeof message.endTime === "number")
                    object.endTime = options.longs === String ? String(message.endTime) : message.endTime;
                else
                    object.endTime = options.longs === String ? $util.Long.prototype.toString.call(message.endTime) : options.longs === Number ? new $util.LongBits(message.endTime.low >>> 0, message.endTime.high >>> 0).toNumber(true) : message.endTime;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                object.parentId = message.parentId;
            if (message.componentName != null && message.hasOwnProperty("componentName"))
                object.componentName = message.componentName;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.queueTime != null && message.hasOwnProperty("queueTime"))
                if (typeof message.queueTime === "number")
                    object.queueTime = options.longs === String ? String(message.queueTime) : message.queueTime;
                else
                    object.queueTime = options.longs === String ? $util.Long.prototype.toString.call(message.queueTime) : options.longs === Number ? new $util.LongBits(message.queueTime.low >>> 0, message.queueTime.high >>> 0).toNumber(true) : message.queueTime;
            return object;
        };

        /**
         * Converts this SpanSample to JSON.
         * @function toJSON
         * @memberof tracecap.SpanSample
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpanSample.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SpanSample;
    })();

    tracecap.Metadata = (function() {

        /**
         * Properties of a Metadata.
         * @memberof tracecap
         * @interface IMetadata
         * @property {string|null} [name] Metadata name
         * @property {string|null} [metaString] Metadata metaString
         */

        /**
         * Constructs a new Metadata.
         * @memberof tracecap
         * @classdesc Represents a Metadata.
         * @implements IMetadata
         * @constructor
         * @param {tracecap.IMetadata=} [properties] Properties to set
         */
        function Metadata(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Metadata name.
         * @member {string} name
         * @memberof tracecap.Metadata
         * @instance
         */
        Metadata.prototype.name = "";

        /**
         * Metadata metaString.
         * @member {string} metaString
         * @memberof tracecap.Metadata
         * @instance
         */
        Metadata.prototype.metaString = "";

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Metadata value.
         * @member {"metaString"|undefined} value
         * @memberof tracecap.Metadata
         * @instance
         */
        Object.defineProperty(Metadata.prototype, "value", {
            get: $util.oneOfGetter($oneOfFields = ["metaString"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Metadata instance using the specified properties.
         * @function create
         * @memberof tracecap.Metadata
         * @static
         * @param {tracecap.IMetadata=} [properties] Properties to set
         * @returns {tracecap.Metadata} Metadata instance
         */
        Metadata.create = function create(properties) {
            return new Metadata(properties);
        };

        /**
         * Encodes the specified Metadata message. Does not implicitly {@link tracecap.Metadata.verify|verify} messages.
         * @function encode
         * @memberof tracecap.Metadata
         * @static
         * @param {tracecap.IMetadata} message Metadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Metadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.metaString != null && Object.hasOwnProperty.call(message, "metaString"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.metaString);
            return writer;
        };

        /**
         * Encodes the specified Metadata message, length delimited. Does not implicitly {@link tracecap.Metadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tracecap.Metadata
         * @static
         * @param {tracecap.IMetadata} message Metadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Metadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Metadata message from the specified reader or buffer.
         * @function decode
         * @memberof tracecap.Metadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tracecap.Metadata} Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Metadata.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tracecap.Metadata();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.metaString = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Metadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tracecap.Metadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tracecap.Metadata} Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Metadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Metadata message.
         * @function verify
         * @memberof tracecap.Metadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Metadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.metaString != null && message.hasOwnProperty("metaString")) {
                properties.value = 1;
                if (!$util.isString(message.metaString))
                    return "metaString: string expected";
            }
            return null;
        };

        /**
         * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tracecap.Metadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tracecap.Metadata} Metadata
         */
        Metadata.fromObject = function fromObject(object) {
            if (object instanceof $root.tracecap.Metadata)
                return object;
            let message = new $root.tracecap.Metadata();
            if (object.name != null)
                message.name = String(object.name);
            if (object.metaString != null)
                message.metaString = String(object.metaString);
            return message;
        };

        /**
         * Creates a plain object from a Metadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tracecap.Metadata
         * @static
         * @param {tracecap.Metadata} message Metadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Metadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.metaString != null && message.hasOwnProperty("metaString")) {
                object.metaString = message.metaString;
                if (options.oneofs)
                    object.value = "metaString";
            }
            return object;
        };

        /**
         * Converts this Metadata to JSON.
         * @function toJSON
         * @memberof tracecap.Metadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Metadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Metadata;
    })();

    tracecap.ThreadSample = (function() {

        /**
         * Properties of a ThreadSample.
         * @memberof tracecap
         * @interface IThreadSample
         * @property {Long|null} [collectionTime] ThreadSample collectionTime
         * @property {Long|null} [threadInternalId] ThreadSample threadInternalId
         * @property {tracecap.SampleScope|null} [scope] ThreadSample scope
         * @property {tracecap.SamplePurpose|null} [purpose] ThreadSample purpose
         * @property {Array.<tracecap.IMetadata>|null} [metadata] ThreadSample metadata
         * @property {tracecap.IObjectSpaceSample|null} [objectSpace] ThreadSample objectSpace
         * @property {tracecap.IStackSample|null} [stack] ThreadSample stack
         * @property {tracecap.ISpanSample|null} [span] ThreadSample span
         */

        /**
         * Constructs a new ThreadSample.
         * @memberof tracecap
         * @classdesc Represents a ThreadSample.
         * @implements IThreadSample
         * @constructor
         * @param {tracecap.IThreadSample=} [properties] Properties to set
         */
        function ThreadSample(properties) {
            this.metadata = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ThreadSample collectionTime.
         * @member {Long} collectionTime
         * @memberof tracecap.ThreadSample
         * @instance
         */
        ThreadSample.prototype.collectionTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ThreadSample threadInternalId.
         * @member {Long} threadInternalId
         * @memberof tracecap.ThreadSample
         * @instance
         */
        ThreadSample.prototype.threadInternalId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ThreadSample scope.
         * @member {tracecap.SampleScope} scope
         * @memberof tracecap.ThreadSample
         * @instance
         */
        ThreadSample.prototype.scope = 0;

        /**
         * ThreadSample purpose.
         * @member {tracecap.SamplePurpose} purpose
         * @memberof tracecap.ThreadSample
         * @instance
         */
        ThreadSample.prototype.purpose = 0;

        /**
         * ThreadSample metadata.
         * @member {Array.<tracecap.IMetadata>} metadata
         * @memberof tracecap.ThreadSample
         * @instance
         */
        ThreadSample.prototype.metadata = $util.emptyArray;

        /**
         * ThreadSample objectSpace.
         * @member {tracecap.IObjectSpaceSample|null|undefined} objectSpace
         * @memberof tracecap.ThreadSample
         * @instance
         */
        ThreadSample.prototype.objectSpace = null;

        /**
         * ThreadSample stack.
         * @member {tracecap.IStackSample|null|undefined} stack
         * @memberof tracecap.ThreadSample
         * @instance
         */
        ThreadSample.prototype.stack = null;

        /**
         * ThreadSample span.
         * @member {tracecap.ISpanSample|null|undefined} span
         * @memberof tracecap.ThreadSample
         * @instance
         */
        ThreadSample.prototype.span = null;

        /**
         * Creates a new ThreadSample instance using the specified properties.
         * @function create
         * @memberof tracecap.ThreadSample
         * @static
         * @param {tracecap.IThreadSample=} [properties] Properties to set
         * @returns {tracecap.ThreadSample} ThreadSample instance
         */
        ThreadSample.create = function create(properties) {
            return new ThreadSample(properties);
        };

        /**
         * Encodes the specified ThreadSample message. Does not implicitly {@link tracecap.ThreadSample.verify|verify} messages.
         * @function encode
         * @memberof tracecap.ThreadSample
         * @static
         * @param {tracecap.IThreadSample} message ThreadSample message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ThreadSample.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.collectionTime != null && Object.hasOwnProperty.call(message, "collectionTime"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.collectionTime);
            if (message.threadInternalId != null && Object.hasOwnProperty.call(message, "threadInternalId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.threadInternalId);
            if (message.scope != null && Object.hasOwnProperty.call(message, "scope"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.scope);
            if (message.purpose != null && Object.hasOwnProperty.call(message, "purpose"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.purpose);
            if (message.metadata != null && message.metadata.length)
                for (let i = 0; i < message.metadata.length; ++i)
                    $root.tracecap.Metadata.encode(message.metadata[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.objectSpace != null && Object.hasOwnProperty.call(message, "objectSpace"))
                $root.tracecap.ObjectSpaceSample.encode(message.objectSpace, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.stack != null && Object.hasOwnProperty.call(message, "stack"))
                $root.tracecap.StackSample.encode(message.stack, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.span != null && Object.hasOwnProperty.call(message, "span"))
                $root.tracecap.SpanSample.encode(message.span, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ThreadSample message, length delimited. Does not implicitly {@link tracecap.ThreadSample.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tracecap.ThreadSample
         * @static
         * @param {tracecap.IThreadSample} message ThreadSample message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ThreadSample.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ThreadSample message from the specified reader or buffer.
         * @function decode
         * @memberof tracecap.ThreadSample
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tracecap.ThreadSample} ThreadSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ThreadSample.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tracecap.ThreadSample();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.collectionTime = reader.uint64();
                    break;
                case 2:
                    message.threadInternalId = reader.uint64();
                    break;
                case 3:
                    message.scope = reader.int32();
                    break;
                case 4:
                    message.purpose = reader.int32();
                    break;
                case 10:
                    if (!(message.metadata && message.metadata.length))
                        message.metadata = [];
                    message.metadata.push($root.tracecap.Metadata.decode(reader, reader.uint32()));
                    break;
                case 16:
                    message.objectSpace = $root.tracecap.ObjectSpaceSample.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.stack = $root.tracecap.StackSample.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.span = $root.tracecap.SpanSample.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ThreadSample message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tracecap.ThreadSample
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tracecap.ThreadSample} ThreadSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ThreadSample.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ThreadSample message.
         * @function verify
         * @memberof tracecap.ThreadSample
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ThreadSample.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.collectionTime != null && message.hasOwnProperty("collectionTime"))
                if (!$util.isInteger(message.collectionTime) && !(message.collectionTime && $util.isInteger(message.collectionTime.low) && $util.isInteger(message.collectionTime.high)))
                    return "collectionTime: integer|Long expected";
            if (message.threadInternalId != null && message.hasOwnProperty("threadInternalId"))
                if (!$util.isInteger(message.threadInternalId) && !(message.threadInternalId && $util.isInteger(message.threadInternalId.low) && $util.isInteger(message.threadInternalId.high)))
                    return "threadInternalId: integer|Long expected";
            if (message.scope != null && message.hasOwnProperty("scope"))
                switch (message.scope) {
                default:
                    return "scope: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.purpose != null && message.hasOwnProperty("purpose"))
                switch (message.purpose) {
                default:
                    return "purpose: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                if (!Array.isArray(message.metadata))
                    return "metadata: array expected";
                for (let i = 0; i < message.metadata.length; ++i) {
                    let error = $root.tracecap.Metadata.verify(message.metadata[i]);
                    if (error)
                        return "metadata." + error;
                }
            }
            if (message.objectSpace != null && message.hasOwnProperty("objectSpace")) {
                let error = $root.tracecap.ObjectSpaceSample.verify(message.objectSpace);
                if (error)
                    return "objectSpace." + error;
            }
            if (message.stack != null && message.hasOwnProperty("stack")) {
                let error = $root.tracecap.StackSample.verify(message.stack);
                if (error)
                    return "stack." + error;
            }
            if (message.span != null && message.hasOwnProperty("span")) {
                let error = $root.tracecap.SpanSample.verify(message.span);
                if (error)
                    return "span." + error;
            }
            return null;
        };

        /**
         * Creates a ThreadSample message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tracecap.ThreadSample
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tracecap.ThreadSample} ThreadSample
         */
        ThreadSample.fromObject = function fromObject(object) {
            if (object instanceof $root.tracecap.ThreadSample)
                return object;
            let message = new $root.tracecap.ThreadSample();
            if (object.collectionTime != null)
                if ($util.Long)
                    (message.collectionTime = $util.Long.fromValue(object.collectionTime)).unsigned = true;
                else if (typeof object.collectionTime === "string")
                    message.collectionTime = parseInt(object.collectionTime, 10);
                else if (typeof object.collectionTime === "number")
                    message.collectionTime = object.collectionTime;
                else if (typeof object.collectionTime === "object")
                    message.collectionTime = new $util.LongBits(object.collectionTime.low >>> 0, object.collectionTime.high >>> 0).toNumber(true);
            if (object.threadInternalId != null)
                if ($util.Long)
                    (message.threadInternalId = $util.Long.fromValue(object.threadInternalId)).unsigned = true;
                else if (typeof object.threadInternalId === "string")
                    message.threadInternalId = parseInt(object.threadInternalId, 10);
                else if (typeof object.threadInternalId === "number")
                    message.threadInternalId = object.threadInternalId;
                else if (typeof object.threadInternalId === "object")
                    message.threadInternalId = new $util.LongBits(object.threadInternalId.low >>> 0, object.threadInternalId.high >>> 0).toNumber(true);
            switch (object.scope) {
            case "UNKNOWN":
            case 0:
                message.scope = 0;
                break;
            case "KERNEL":
            case 1:
                message.scope = 1;
                break;
            case "USERSPACE":
            case 2:
                message.scope = 2;
                break;
            case "VM_RUBY":
            case 3:
                message.scope = 3;
                break;
            }
            switch (object.purpose) {
            case "MISC":
            case 0:
                message.purpose = 0;
                break;
            case "TRACE":
            case 1:
                message.purpose = 1;
                break;
            case "PROFILE":
            case 2:
                message.purpose = 2;
                break;
            }
            if (object.metadata) {
                if (!Array.isArray(object.metadata))
                    throw TypeError(".tracecap.ThreadSample.metadata: array expected");
                message.metadata = [];
                for (let i = 0; i < object.metadata.length; ++i) {
                    if (typeof object.metadata[i] !== "object")
                        throw TypeError(".tracecap.ThreadSample.metadata: object expected");
                    message.metadata[i] = $root.tracecap.Metadata.fromObject(object.metadata[i]);
                }
            }
            if (object.objectSpace != null) {
                if (typeof object.objectSpace !== "object")
                    throw TypeError(".tracecap.ThreadSample.objectSpace: object expected");
                message.objectSpace = $root.tracecap.ObjectSpaceSample.fromObject(object.objectSpace);
            }
            if (object.stack != null) {
                if (typeof object.stack !== "object")
                    throw TypeError(".tracecap.ThreadSample.stack: object expected");
                message.stack = $root.tracecap.StackSample.fromObject(object.stack);
            }
            if (object.span != null) {
                if (typeof object.span !== "object")
                    throw TypeError(".tracecap.ThreadSample.span: object expected");
                message.span = $root.tracecap.SpanSample.fromObject(object.span);
            }
            return message;
        };

        /**
         * Creates a plain object from a ThreadSample message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tracecap.ThreadSample
         * @static
         * @param {tracecap.ThreadSample} message ThreadSample
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ThreadSample.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.metadata = [];
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.collectionTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.collectionTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.threadInternalId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.threadInternalId = options.longs === String ? "0" : 0;
                object.scope = options.enums === String ? "UNKNOWN" : 0;
                object.purpose = options.enums === String ? "MISC" : 0;
                object.objectSpace = null;
                object.stack = null;
                object.span = null;
            }
            if (message.collectionTime != null && message.hasOwnProperty("collectionTime"))
                if (typeof message.collectionTime === "number")
                    object.collectionTime = options.longs === String ? String(message.collectionTime) : message.collectionTime;
                else
                    object.collectionTime = options.longs === String ? $util.Long.prototype.toString.call(message.collectionTime) : options.longs === Number ? new $util.LongBits(message.collectionTime.low >>> 0, message.collectionTime.high >>> 0).toNumber(true) : message.collectionTime;
            if (message.threadInternalId != null && message.hasOwnProperty("threadInternalId"))
                if (typeof message.threadInternalId === "number")
                    object.threadInternalId = options.longs === String ? String(message.threadInternalId) : message.threadInternalId;
                else
                    object.threadInternalId = options.longs === String ? $util.Long.prototype.toString.call(message.threadInternalId) : options.longs === Number ? new $util.LongBits(message.threadInternalId.low >>> 0, message.threadInternalId.high >>> 0).toNumber(true) : message.threadInternalId;
            if (message.scope != null && message.hasOwnProperty("scope"))
                object.scope = options.enums === String ? $root.tracecap.SampleScope[message.scope] : message.scope;
            if (message.purpose != null && message.hasOwnProperty("purpose"))
                object.purpose = options.enums === String ? $root.tracecap.SamplePurpose[message.purpose] : message.purpose;
            if (message.metadata && message.metadata.length) {
                object.metadata = [];
                for (let j = 0; j < message.metadata.length; ++j)
                    object.metadata[j] = $root.tracecap.Metadata.toObject(message.metadata[j], options);
            }
            if (message.objectSpace != null && message.hasOwnProperty("objectSpace"))
                object.objectSpace = $root.tracecap.ObjectSpaceSample.toObject(message.objectSpace, options);
            if (message.stack != null && message.hasOwnProperty("stack"))
                object.stack = $root.tracecap.StackSample.toObject(message.stack, options);
            if (message.span != null && message.hasOwnProperty("span"))
                object.span = $root.tracecap.SpanSample.toObject(message.span, options);
            return object;
        };

        /**
         * Converts this ThreadSample to JSON.
         * @function toJSON
         * @memberof tracecap.ThreadSample
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ThreadSample.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ThreadSample;
    })();

    tracecap.TraceFile = (function() {

        /**
         * Properties of a TraceFile.
         * @memberof tracecap
         * @interface ITraceFile
         * @property {Array.<tracecap.IProcess>|null} [processes] TraceFile processes
         * @property {Array.<tracecap.IThreadSample>|null} [samples] TraceFile samples
         */

        /**
         * Constructs a new TraceFile.
         * @memberof tracecap
         * @classdesc Represents a TraceFile.
         * @implements ITraceFile
         * @constructor
         * @param {tracecap.ITraceFile=} [properties] Properties to set
         */
        function TraceFile(properties) {
            this.processes = [];
            this.samples = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TraceFile processes.
         * @member {Array.<tracecap.IProcess>} processes
         * @memberof tracecap.TraceFile
         * @instance
         */
        TraceFile.prototype.processes = $util.emptyArray;

        /**
         * TraceFile samples.
         * @member {Array.<tracecap.IThreadSample>} samples
         * @memberof tracecap.TraceFile
         * @instance
         */
        TraceFile.prototype.samples = $util.emptyArray;

        /**
         * Creates a new TraceFile instance using the specified properties.
         * @function create
         * @memberof tracecap.TraceFile
         * @static
         * @param {tracecap.ITraceFile=} [properties] Properties to set
         * @returns {tracecap.TraceFile} TraceFile instance
         */
        TraceFile.create = function create(properties) {
            return new TraceFile(properties);
        };

        /**
         * Encodes the specified TraceFile message. Does not implicitly {@link tracecap.TraceFile.verify|verify} messages.
         * @function encode
         * @memberof tracecap.TraceFile
         * @static
         * @param {tracecap.ITraceFile} message TraceFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TraceFile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.processes != null && message.processes.length)
                for (let i = 0; i < message.processes.length; ++i)
                    $root.tracecap.Process.encode(message.processes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.samples != null && message.samples.length)
                for (let i = 0; i < message.samples.length; ++i)
                    $root.tracecap.ThreadSample.encode(message.samples[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TraceFile message, length delimited. Does not implicitly {@link tracecap.TraceFile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tracecap.TraceFile
         * @static
         * @param {tracecap.ITraceFile} message TraceFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TraceFile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TraceFile message from the specified reader or buffer.
         * @function decode
         * @memberof tracecap.TraceFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tracecap.TraceFile} TraceFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TraceFile.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tracecap.TraceFile();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.processes && message.processes.length))
                        message.processes = [];
                    message.processes.push($root.tracecap.Process.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.samples && message.samples.length))
                        message.samples = [];
                    message.samples.push($root.tracecap.ThreadSample.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TraceFile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tracecap.TraceFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tracecap.TraceFile} TraceFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TraceFile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TraceFile message.
         * @function verify
         * @memberof tracecap.TraceFile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TraceFile.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.processes != null && message.hasOwnProperty("processes")) {
                if (!Array.isArray(message.processes))
                    return "processes: array expected";
                for (let i = 0; i < message.processes.length; ++i) {
                    let error = $root.tracecap.Process.verify(message.processes[i]);
                    if (error)
                        return "processes." + error;
                }
            }
            if (message.samples != null && message.hasOwnProperty("samples")) {
                if (!Array.isArray(message.samples))
                    return "samples: array expected";
                for (let i = 0; i < message.samples.length; ++i) {
                    let error = $root.tracecap.ThreadSample.verify(message.samples[i]);
                    if (error)
                        return "samples." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TraceFile message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tracecap.TraceFile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tracecap.TraceFile} TraceFile
         */
        TraceFile.fromObject = function fromObject(object) {
            if (object instanceof $root.tracecap.TraceFile)
                return object;
            let message = new $root.tracecap.TraceFile();
            if (object.processes) {
                if (!Array.isArray(object.processes))
                    throw TypeError(".tracecap.TraceFile.processes: array expected");
                message.processes = [];
                for (let i = 0; i < object.processes.length; ++i) {
                    if (typeof object.processes[i] !== "object")
                        throw TypeError(".tracecap.TraceFile.processes: object expected");
                    message.processes[i] = $root.tracecap.Process.fromObject(object.processes[i]);
                }
            }
            if (object.samples) {
                if (!Array.isArray(object.samples))
                    throw TypeError(".tracecap.TraceFile.samples: array expected");
                message.samples = [];
                for (let i = 0; i < object.samples.length; ++i) {
                    if (typeof object.samples[i] !== "object")
                        throw TypeError(".tracecap.TraceFile.samples: object expected");
                    message.samples[i] = $root.tracecap.ThreadSample.fromObject(object.samples[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TraceFile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tracecap.TraceFile
         * @static
         * @param {tracecap.TraceFile} message TraceFile
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TraceFile.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.processes = [];
                object.samples = [];
            }
            if (message.processes && message.processes.length) {
                object.processes = [];
                for (let j = 0; j < message.processes.length; ++j)
                    object.processes[j] = $root.tracecap.Process.toObject(message.processes[j], options);
            }
            if (message.samples && message.samples.length) {
                object.samples = [];
                for (let j = 0; j < message.samples.length; ++j)
                    object.samples[j] = $root.tracecap.ThreadSample.toObject(message.samples[j], options);
            }
            return object;
        };

        /**
         * Converts this TraceFile to JSON.
         * @function toJSON
         * @memberof tracecap.TraceFile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TraceFile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TraceFile;
    })();

    return tracecap;
})();