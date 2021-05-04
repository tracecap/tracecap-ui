import { tracecap } from "../../tracecap-proto";
import { StackDataSource } from "./StackDataSource";

export interface PerfDataSection {
    id: string
    title: string
    
    context?: any
}

export enum PerfDataTrackType {
    Gauge,
    Span,
    SpanSummary,
}

export interface PerfDataTrack {
    id: string
    color?: string
    name: string
    description?: string
    trackType: PerfDataTrackType

    context?: any
}

export interface PerfDataSpanData {
    timeRange: PerfDataTimeRange
    queueTime?: Long.Long
}

export interface PerfDataTimeseriesPoint {
    time: Long.Long
    value: Long.Long
}

export interface PerfDataTimeseries {
    data_points: PerfDataTimeseriesPoint[]
}

export class PerfDataTimeRange {
    public start: Long.Long;
    public end: Long.Long;

    constructor(start: Long.Long, end: Long.Long) {
        this.start = start;
        this.end = end;
    }

    contains(time: Long.Long): boolean {
        return (this.start.lte(time) && this.end.gte(time));
    }

    overlaps(other: (PerfDataTimeRange | null)): boolean {
        if (!other) return false;

        return this.contains(other.start) ||
            this.contains(other.end) ||
            other.contains(this.start) ||
            other.contains(this.end);
    }

    get duration(): Long.Long {
        return this.end.sub(this.start);
    }
}

export interface PerfDataSource {
    getTimeBounds(view: any): PerfDataTimeRange;

    getSections(view: any): PerfDataSection[];
    getTracksForSection(view: any, section: PerfDataSection, under?: PerfDataTrack): PerfDataTrack[];

    getSpanDataForTrack(view: any, section: PerfDataSection, track: PerfDataTrack): PerfDataSpanData;
    getTimeseriesDataForTrack(view: any, section: PerfDataSection, track: PerfDataTrack): PerfDataTimeseries;

    getStackDataForTrack(view: any, section: PerfDataSection, track: PerfDataTrack): StackDataSource;
}
