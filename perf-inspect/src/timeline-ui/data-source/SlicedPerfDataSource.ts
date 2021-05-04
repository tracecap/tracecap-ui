import { tracecap } from '../../tracecap-proto';

import { QueryPipelineItem } from '../../QueryPipeline.js';

import { PerfDataSection, PerfDataSource, PerfDataTrack, PerfDataTrackType, PerfDataTimeRange, PerfDataSpanData, PerfDataTimeseries } from './PerfDataSource.js';
import { StackDataSource } from './StackDataSource';

export class SlicedPerfDataSource implements PerfDataSource {
    private base: PerfDataSource;

    private timeRange: PerfDataTimeRange | null;

    constructor(base: PerfDataSource, traceFile: tracecap.TraceFile, command: QueryPipelineItem) {
        this.base = base;

        this.timeRange = null;

        if (command.args[0].startsWith('span.id=')) {
            let args = command.args[0].split('=', 2);
            traceFile.samples.forEach((sample) => {
                if (sample.span) {
                    let span = sample.span;

                    if (span.id == args[1]) {
                        this.timeRange = new PerfDataTimeRange(span.startTime!, span.endTime!);
                    }
                }
            });
        }
    }

    getTimeBounds(view: any): PerfDataTimeRange {
        if (this.timeRange) {
            return this.timeRange;
        }
        return this.base.getTimeBounds(view);
    }

    getSections(view: any): PerfDataSection[] {
        return this.base.getSections(view);
    }

    getTracksForSection(view: any, section: PerfDataSection, under?: PerfDataTrack): PerfDataTrack[] {
        let tracks = this.base.getTracksForSection(view, section, under);
        
        if (this.timeRange && tracks) {
            tracks = tracks.filter(track => {
                if (track.trackType == PerfDataTrackType.Span) {
                    let spanData = this.getSpanDataForTrack(view, section, track);
                    return spanData.timeRange.overlaps(this.timeRange);
                }
                return true;
            });
        }

        return tracks;
    }

    getSpanDataForTrack(view: any, section: PerfDataSection, track: PerfDataTrack): PerfDataSpanData {
        return this.base.getSpanDataForTrack(view, section, track);
    }

    getTimeseriesDataForTrack(view: any, section: PerfDataSection, track: PerfDataTrack): PerfDataTimeseries {
        let ts = this.base.getTimeseriesDataForTrack(view, section, track);

        // if (this.earliestTime && this.latestTime) {
        //     ts.data_points = ts.data_points.filter(value => {
        //         return value.time.gte(this.earliestTime!) && value.time.lte(this.latestTime!)
        //     });
        // }

        return ts;
    }

    getStackDataForTrack(view: any, section: PerfDataSection, track: PerfDataTrack): StackDataSource {
        return this.base.getStackDataForTrack(view, section, track);
    }
}
