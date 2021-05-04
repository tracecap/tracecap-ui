import * as $protobuf from "protobufjs";
/** Namespace tracecap. */
export namespace tracecap {

    /** SampleScope enum. */
    enum SampleScope {
        UNKNOWN = 0,
        KERNEL = 1,
        USERSPACE = 2,
        VM_RUBY = 3
    }

    /** SamplePurpose enum. */
    enum SamplePurpose {
        MISC = 0,
        TRACE = 1,
        PROFILE = 2
    }

    /** Properties of a Thread. */
    interface IThread {

        /** Thread internalId */
        internalId?: (Long|null);

        /** Thread startTime */
        startTime?: (Long|null);

        /** Thread endTime */
        endTime?: (Long|null);

        /** Thread tid */
        tid?: (number|null);
    }

    /** Represents a Thread. */
    class Thread implements IThread {

        /**
         * Constructs a new Thread.
         * @param [properties] Properties to set
         */
        constructor(properties?: tracecap.IThread);

        /** Thread internalId. */
        public internalId: Long;

        /** Thread startTime. */
        public startTime: Long;

        /** Thread endTime. */
        public endTime: Long;

        /** Thread tid. */
        public tid: number;

        /**
         * Creates a new Thread instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Thread instance
         */
        public static create(properties?: tracecap.IThread): tracecap.Thread;

        /**
         * Encodes the specified Thread message. Does not implicitly {@link tracecap.Thread.verify|verify} messages.
         * @param message Thread message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tracecap.IThread, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Thread message, length delimited. Does not implicitly {@link tracecap.Thread.verify|verify} messages.
         * @param message Thread message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tracecap.IThread, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Thread message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Thread
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tracecap.Thread;

        /**
         * Decodes a Thread message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Thread
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tracecap.Thread;

        /**
         * Verifies a Thread message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Thread message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Thread
         */
        public static fromObject(object: { [k: string]: any }): tracecap.Thread;

        /**
         * Creates a plain object from a Thread message. Also converts values to other types if specified.
         * @param message Thread
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tracecap.Thread, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Thread to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Process. */
    interface IProcess {

        /** Process internalId */
        internalId?: (Long|null);

        /** Process startTime */
        startTime?: (Long|null);

        /** Process endTime */
        endTime?: (Long|null);

        /** Process pid */
        pid?: (number|null);

        /** Process execName */
        execName?: (string|null);

        /** Process threads */
        threads?: (tracecap.IThread[]|null);
    }

    /** Represents a Process. */
    class Process implements IProcess {

        /**
         * Constructs a new Process.
         * @param [properties] Properties to set
         */
        constructor(properties?: tracecap.IProcess);

        /** Process internalId. */
        public internalId: Long;

        /** Process startTime. */
        public startTime: Long;

        /** Process endTime. */
        public endTime: Long;

        /** Process pid. */
        public pid: number;

        /** Process execName. */
        public execName: string;

        /** Process threads. */
        public threads: tracecap.IThread[];

        /**
         * Creates a new Process instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Process instance
         */
        public static create(properties?: tracecap.IProcess): tracecap.Process;

        /**
         * Encodes the specified Process message. Does not implicitly {@link tracecap.Process.verify|verify} messages.
         * @param message Process message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tracecap.IProcess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Process message, length delimited. Does not implicitly {@link tracecap.Process.verify|verify} messages.
         * @param message Process message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tracecap.IProcess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Process message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Process
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tracecap.Process;

        /**
         * Decodes a Process message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Process
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tracecap.Process;

        /**
         * Verifies a Process message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Process message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Process
         */
        public static fromObject(object: { [k: string]: any }): tracecap.Process;

        /**
         * Creates a plain object from a Process message. Also converts values to other types if specified.
         * @param message Process
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tracecap.Process, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Process to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ObjectSpaceSample. */
    interface IObjectSpaceSample {

        /** ObjectSpaceSample total */
        total?: (Long|null);

        /** ObjectSpaceSample free */
        free?: (Long|null);
    }

    /** Represents an ObjectSpaceSample. */
    class ObjectSpaceSample implements IObjectSpaceSample {

        /**
         * Constructs a new ObjectSpaceSample.
         * @param [properties] Properties to set
         */
        constructor(properties?: tracecap.IObjectSpaceSample);

        /** ObjectSpaceSample total. */
        public total: Long;

        /** ObjectSpaceSample free. */
        public free: Long;

        /**
         * Creates a new ObjectSpaceSample instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectSpaceSample instance
         */
        public static create(properties?: tracecap.IObjectSpaceSample): tracecap.ObjectSpaceSample;

        /**
         * Encodes the specified ObjectSpaceSample message. Does not implicitly {@link tracecap.ObjectSpaceSample.verify|verify} messages.
         * @param message ObjectSpaceSample message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tracecap.IObjectSpaceSample, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ObjectSpaceSample message, length delimited. Does not implicitly {@link tracecap.ObjectSpaceSample.verify|verify} messages.
         * @param message ObjectSpaceSample message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tracecap.IObjectSpaceSample, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ObjectSpaceSample message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectSpaceSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tracecap.ObjectSpaceSample;

        /**
         * Decodes an ObjectSpaceSample message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectSpaceSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tracecap.ObjectSpaceSample;

        /**
         * Verifies an ObjectSpaceSample message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ObjectSpaceSample message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ObjectSpaceSample
         */
        public static fromObject(object: { [k: string]: any }): tracecap.ObjectSpaceSample;

        /**
         * Creates a plain object from an ObjectSpaceSample message. Also converts values to other types if specified.
         * @param message ObjectSpaceSample
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tracecap.ObjectSpaceSample, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ObjectSpaceSample to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StackFrame. */
    interface IStackFrame {

        /** StackFrame file */
        file?: (string|null);

        /** StackFrame line */
        line?: (number|null);

        /** StackFrame method */
        method?: (string|null);

        /** StackFrame package */
        "package"?: (string|null);
    }

    /** Represents a StackFrame. */
    class StackFrame implements IStackFrame {

        /**
         * Constructs a new StackFrame.
         * @param [properties] Properties to set
         */
        constructor(properties?: tracecap.IStackFrame);

        /** StackFrame file. */
        public file: string;

        /** StackFrame line. */
        public line: number;

        /** StackFrame method. */
        public method: string;

        /** StackFrame package. */
        public package: string;

        /**
         * Creates a new StackFrame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StackFrame instance
         */
        public static create(properties?: tracecap.IStackFrame): tracecap.StackFrame;

        /**
         * Encodes the specified StackFrame message. Does not implicitly {@link tracecap.StackFrame.verify|verify} messages.
         * @param message StackFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tracecap.IStackFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StackFrame message, length delimited. Does not implicitly {@link tracecap.StackFrame.verify|verify} messages.
         * @param message StackFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tracecap.IStackFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StackFrame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StackFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tracecap.StackFrame;

        /**
         * Decodes a StackFrame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StackFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tracecap.StackFrame;

        /**
         * Verifies a StackFrame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StackFrame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StackFrame
         */
        public static fromObject(object: { [k: string]: any }): tracecap.StackFrame;

        /**
         * Creates a plain object from a StackFrame message. Also converts values to other types if specified.
         * @param message StackFrame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tracecap.StackFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StackFrame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StackSample. */
    interface IStackSample {

        /** StackSample stack */
        stack?: (tracecap.IStackFrame[]|null);
    }

    /** Represents a StackSample. */
    class StackSample implements IStackSample {

        /**
         * Constructs a new StackSample.
         * @param [properties] Properties to set
         */
        constructor(properties?: tracecap.IStackSample);

        /** StackSample stack. */
        public stack: tracecap.IStackFrame[];

        /**
         * Creates a new StackSample instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StackSample instance
         */
        public static create(properties?: tracecap.IStackSample): tracecap.StackSample;

        /**
         * Encodes the specified StackSample message. Does not implicitly {@link tracecap.StackSample.verify|verify} messages.
         * @param message StackSample message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tracecap.IStackSample, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StackSample message, length delimited. Does not implicitly {@link tracecap.StackSample.verify|verify} messages.
         * @param message StackSample message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tracecap.IStackSample, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StackSample message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StackSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tracecap.StackSample;

        /**
         * Decodes a StackSample message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StackSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tracecap.StackSample;

        /**
         * Verifies a StackSample message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StackSample message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StackSample
         */
        public static fromObject(object: { [k: string]: any }): tracecap.StackSample;

        /**
         * Creates a plain object from a StackSample message. Also converts values to other types if specified.
         * @param message StackSample
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tracecap.StackSample, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StackSample to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SpanSample. */
    interface ISpanSample {

        /** SpanSample startTime */
        startTime?: (Long|null);

        /** SpanSample endTime */
        endTime?: (Long|null);

        /** SpanSample id */
        id?: (string|null);

        /** SpanSample parentId */
        parentId?: (string|null);

        /** SpanSample componentName */
        componentName?: (string|null);

        /** SpanSample description */
        description?: (string|null);

        /** SpanSample queueTime */
        queueTime?: (Long|null);
    }

    /** Represents a SpanSample. */
    class SpanSample implements ISpanSample {

        /**
         * Constructs a new SpanSample.
         * @param [properties] Properties to set
         */
        constructor(properties?: tracecap.ISpanSample);

        /** SpanSample startTime. */
        public startTime: Long;

        /** SpanSample endTime. */
        public endTime: Long;

        /** SpanSample id. */
        public id: string;

        /** SpanSample parentId. */
        public parentId: string;

        /** SpanSample componentName. */
        public componentName: string;

        /** SpanSample description. */
        public description: string;

        /** SpanSample queueTime. */
        public queueTime: Long;

        /**
         * Creates a new SpanSample instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SpanSample instance
         */
        public static create(properties?: tracecap.ISpanSample): tracecap.SpanSample;

        /**
         * Encodes the specified SpanSample message. Does not implicitly {@link tracecap.SpanSample.verify|verify} messages.
         * @param message SpanSample message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tracecap.ISpanSample, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SpanSample message, length delimited. Does not implicitly {@link tracecap.SpanSample.verify|verify} messages.
         * @param message SpanSample message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tracecap.ISpanSample, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpanSample message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SpanSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tracecap.SpanSample;

        /**
         * Decodes a SpanSample message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SpanSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tracecap.SpanSample;

        /**
         * Verifies a SpanSample message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SpanSample message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpanSample
         */
        public static fromObject(object: { [k: string]: any }): tracecap.SpanSample;

        /**
         * Creates a plain object from a SpanSample message. Also converts values to other types if specified.
         * @param message SpanSample
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tracecap.SpanSample, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpanSample to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Metadata. */
    interface IMetadata {

        /** Metadata name */
        name?: (string|null);

        /** Metadata metaString */
        metaString?: (string|null);
    }

    /** Represents a Metadata. */
    class Metadata implements IMetadata {

        /**
         * Constructs a new Metadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: tracecap.IMetadata);

        /** Metadata name. */
        public name: string;

        /** Metadata metaString. */
        public metaString: string;

        /** Metadata value. */
        public value?: "metaString";

        /**
         * Creates a new Metadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Metadata instance
         */
        public static create(properties?: tracecap.IMetadata): tracecap.Metadata;

        /**
         * Encodes the specified Metadata message. Does not implicitly {@link tracecap.Metadata.verify|verify} messages.
         * @param message Metadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tracecap.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Metadata message, length delimited. Does not implicitly {@link tracecap.Metadata.verify|verify} messages.
         * @param message Metadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tracecap.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Metadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tracecap.Metadata;

        /**
         * Decodes a Metadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tracecap.Metadata;

        /**
         * Verifies a Metadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Metadata
         */
        public static fromObject(object: { [k: string]: any }): tracecap.Metadata;

        /**
         * Creates a plain object from a Metadata message. Also converts values to other types if specified.
         * @param message Metadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tracecap.Metadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Metadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ThreadSample. */
    interface IThreadSample {

        /** ThreadSample collectionTime */
        collectionTime?: (Long|null);

        /** ThreadSample threadInternalId */
        threadInternalId?: (Long|null);

        /** ThreadSample scope */
        scope?: (tracecap.SampleScope|null);

        /** ThreadSample purpose */
        purpose?: (tracecap.SamplePurpose|null);

        /** ThreadSample metadata */
        metadata?: (tracecap.IMetadata[]|null);

        /** ThreadSample objectSpace */
        objectSpace?: (tracecap.IObjectSpaceSample|null);

        /** ThreadSample stack */
        stack?: (tracecap.IStackSample|null);

        /** ThreadSample span */
        span?: (tracecap.ISpanSample|null);
    }

    /** Represents a ThreadSample. */
    class ThreadSample implements IThreadSample {

        /**
         * Constructs a new ThreadSample.
         * @param [properties] Properties to set
         */
        constructor(properties?: tracecap.IThreadSample);

        /** ThreadSample collectionTime. */
        public collectionTime: Long;

        /** ThreadSample threadInternalId. */
        public threadInternalId: Long;

        /** ThreadSample scope. */
        public scope: tracecap.SampleScope;

        /** ThreadSample purpose. */
        public purpose: tracecap.SamplePurpose;

        /** ThreadSample metadata. */
        public metadata: tracecap.IMetadata[];

        /** ThreadSample objectSpace. */
        public objectSpace?: (tracecap.IObjectSpaceSample|null);

        /** ThreadSample stack. */
        public stack?: (tracecap.IStackSample|null);

        /** ThreadSample span. */
        public span?: (tracecap.ISpanSample|null);

        /**
         * Creates a new ThreadSample instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ThreadSample instance
         */
        public static create(properties?: tracecap.IThreadSample): tracecap.ThreadSample;

        /**
         * Encodes the specified ThreadSample message. Does not implicitly {@link tracecap.ThreadSample.verify|verify} messages.
         * @param message ThreadSample message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tracecap.IThreadSample, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ThreadSample message, length delimited. Does not implicitly {@link tracecap.ThreadSample.verify|verify} messages.
         * @param message ThreadSample message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tracecap.IThreadSample, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ThreadSample message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ThreadSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tracecap.ThreadSample;

        /**
         * Decodes a ThreadSample message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ThreadSample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tracecap.ThreadSample;

        /**
         * Verifies a ThreadSample message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ThreadSample message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ThreadSample
         */
        public static fromObject(object: { [k: string]: any }): tracecap.ThreadSample;

        /**
         * Creates a plain object from a ThreadSample message. Also converts values to other types if specified.
         * @param message ThreadSample
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tracecap.ThreadSample, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ThreadSample to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TraceFile. */
    interface ITraceFile {

        /** TraceFile processes */
        processes?: (tracecap.IProcess[]|null);

        /** TraceFile samples */
        samples?: (tracecap.IThreadSample[]|null);
    }

    /** Represents a TraceFile. */
    class TraceFile implements ITraceFile {

        /**
         * Constructs a new TraceFile.
         * @param [properties] Properties to set
         */
        constructor(properties?: tracecap.ITraceFile);

        /** TraceFile processes. */
        public processes: tracecap.IProcess[];

        /** TraceFile samples. */
        public samples: tracecap.IThreadSample[];

        /**
         * Creates a new TraceFile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TraceFile instance
         */
        public static create(properties?: tracecap.ITraceFile): tracecap.TraceFile;

        /**
         * Encodes the specified TraceFile message. Does not implicitly {@link tracecap.TraceFile.verify|verify} messages.
         * @param message TraceFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tracecap.ITraceFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TraceFile message, length delimited. Does not implicitly {@link tracecap.TraceFile.verify|verify} messages.
         * @param message TraceFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tracecap.ITraceFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TraceFile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TraceFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tracecap.TraceFile;

        /**
         * Decodes a TraceFile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TraceFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tracecap.TraceFile;

        /**
         * Verifies a TraceFile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TraceFile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TraceFile
         */
        public static fromObject(object: { [k: string]: any }): tracecap.TraceFile;

        /**
         * Creates a plain object from a TraceFile message. Also converts values to other types if specified.
         * @param message TraceFile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tracecap.TraceFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TraceFile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
