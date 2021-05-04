import { tracecap } from '../../tracecap-proto';

import { PerfDataSection, PerfDataSource, PerfDataTrack, PerfDataTrackType, PerfDataTimeRange, PerfDataSpanData, PerfDataTimeseries } from './PerfDataSource.js';
import { StackDataSource } from './StackDataSource';

export class BasePerfDataSource implements PerfDataSource {
    private data: tracecap.TraceFile;
    private threadIdToProcess: {[name: number]: tracecap.IProcess} = {};
    private startCollectionTime: (Long|null) = null;
    private processIdComponents: {[name: number]: string[]} = {};
    private componentColors: {[name: string]: number} = {};
    private componentColorIndex = 0;
    private objectSpaceSamples: {[name: number]: tracecap.IThreadSample[]} = {};

    private earliestTime: Long.Long | null;
    private latestTime: Long.Long | null;

    constructor(traceFile: tracecap.TraceFile) {
        this.data = traceFile;

        this.earliestTime = null;
        this.latestTime = null;

        this.data.processes?.forEach((process) => {
            process.threads?.forEach((thread) => {
                this.threadIdToProcess[thread.internalId!.toNumber()] = process;
            });
        });

        this.data.samples.forEach((sample) => {
            let processId = this.threadIdToProcess[sample.threadInternalId!.toNumber()].internalId?.toNumber();

            if (this.startCollectionTime == null || sample.collectionTime?.lessThan(this.startCollectionTime)) {
                this.startCollectionTime = sample.collectionTime!;
            }

            if (sample.span) {
                // remember the oldest/newest times
                let start = sample.span.startTime!;
                let end = sample.span.endTime!;

                this.earliestTime ||= start;
                this.latestTime ||= end;

                if (start.lt(this.earliestTime)) this.earliestTime = start;
                if (end.gt(this.latestTime)) this.latestTime = end;

                // collect a list components for each process
                let component = sample.span!.componentName;
                if (processId && component) {
                    this.processIdComponents[processId] ||= [];
                    if (!this.processIdComponents[processId].includes(component))
                        this.processIdComponents[processId].push(component);
                }

                if (component) {
                    if (!this.componentColors[component]) {
                        this.componentColors[component] = this.componentColorIndex;
                        this.componentColorIndex++;
                    }
                }
            }

            if (sample.objectSpace && processId) {
                this.objectSpaceSamples[processId] ||= [];
                this.objectSpaceSamples[processId].push(sample);
            }
        });
    }
    
    getTimeBounds(view: any): PerfDataTimeRange {
        return new PerfDataTimeRange(this.earliestTime!, this.latestTime!);
    }

    colorForComponent(component: string): (string|undefined) {
        if (this.componentColors[component]) {
            return `item-color-${this.componentColors[component] % 10}`;
        }
        return undefined;
    }

    getSections(view: any): PerfDataSection[] {
        let sections: PerfDataSection[] = [];
        sections.push({
            id: 'system',
            title: 'System',
        });
        
        let procSections = this.data.processes?.map((process): PerfDataSection => {
            return {
                id: `pid-${process.pid}`,
                title: `PID ${process.pid}: ${process.execName}`,
                context: process,
            };
        });

        return sections.concat(procSections || []);
    }

    getTracksForSection(view: any, section: PerfDataSection, under?: PerfDataTrack): PerfDataTrack[] {
        if (under) {
            let context: {[name: string]: any} = under.context;
            let children: PerfDataTrack[] = [];
            let process = section.context as tracecap.Process;
            let parentSpan: (tracecap.ThreadSample|null) = context.span;
            let parentSpanId = parentSpan?.span?.id;

            if (context.type == "timeline-tree" || context.type == "span-child") {
                this.data.samples?.forEach((sample) => {
                    let span = sample.span;
                    if (span && this.threadIdToProcess[sample.threadInternalId!.toNumber()] == process) {
                        if (context.type == "timeline-tree" && span.parentId) return;
                        if (context.type == "span-child" && span.parentId != parentSpanId) return;
                        children.push({
                            id: `timeline-tree-${span.id}`,
                            color: this.colorForComponent(span.componentName!),
                            name: span.componentName!,
                            description: span.description || undefined,
                            trackType: PerfDataTrackType.Span,
                            context: {
                                type: 'span-child',
                                span: sample,
                            },
                        });
                    }
                });
            } else if (context.type == "component") {
                this.data.samples?.forEach((sample) => {
                    let span = sample.span;
                    if (span && this.threadIdToProcess[sample.threadInternalId!.toNumber()] == process) {
                        if (context.component != span.componentName) return;

                        children.push({
                            id: `component-item-${span.id}`,
                            color: this.colorForComponent(span.componentName!),
                            name: span.componentName!,
                            description: span.description || undefined,
                            trackType: PerfDataTrackType.Span,
                            context: {
                                type: 'span',
                                span: sample,
                            },
                        });
                    }
                });
            }


            children = children.sort((a, b) => {
                let aSample = a.context?.span as tracecap.ThreadSample;
                let bSample = b.context?.span as tracecap.ThreadSample;
                if (!aSample || !bSample) return 0;
                let aTime = aSample.span?.startTime;
                let bTime = bSample.span?.startTime;
                if (!aTime || !bTime) return 0;
                return aTime.toSigned().sub(bTime).toNumber();
            });
            return children;
        }
        
        let tracks: PerfDataTrack[] = [];
        let process: tracecap.IProcess = section.context;
        let processId = process?.internalId?.toNumber();
        
        if (processId) {
            let objectSpaceSamples = this.objectSpaceSamples[processId];
            if (objectSpaceSamples) {
                tracks.push({
                    id: `process-${processId}-object-space`,
                    name: 'Objects (Used)',
                    trackType: PerfDataTrackType.Gauge,
                    context: {
                        type: 'object-space',
                        samples: objectSpaceSamples,
                    },
                });
            }

            let processComponents = this.processIdComponents[processId];
            processComponents?.forEach((component) => {
                tracks.push({
                    id: `process-${processId}-component-${component}`,
                    color: this.colorForComponent(component),
                    name: component,
                    trackType: PerfDataTrackType.SpanSummary,
                    context: {
                        type: 'component',
                        component: component,
                    },
                });
            });

            tracks.push({
                id: `process-${processId}-timeline-tree`,
                name: 'Timeline Tree',
                trackType: PerfDataTrackType.SpanSummary,
                context: {
                    type: 'timeline-tree',
                },
            });
        }

        return tracks;
    }

    getSpanDataForTrack(view: any, section: PerfDataSection, track: PerfDataTrack): PerfDataSpanData {
        let context: {[name: string]: any} = track.context;
        let sample = context.span as tracecap.ThreadSample;
        if (sample) {
            let span = sample.span!;
            let ret:PerfDataSpanData = {
                timeRange: new PerfDataTimeRange(span.startTime!, span.endTime!),
            };
            if (span.queueTime) {
                ret.queueTime = span.queueTime;
            }
            return ret;
        }
        return {
            timeRange: new PerfDataTimeRange(Long.fromNumber(0), Long.fromNumber(0)),
        };
    }

    getTimeseriesDataForTrack(view: any, section: PerfDataSection, track: PerfDataTrack): PerfDataTimeseries {
        let timeseries: PerfDataTimeseries = {
            data_points: [],
        };

        let context: {[name: string]: any} = track.context;
        let samples = context.samples as tracecap.IThreadSample[];
        if (samples) {
            samples.forEach((sample) => {
                let objectSpaceSample = sample.objectSpace!;
                let total = objectSpaceSample.total || Long.fromNumber(0);
                let free = objectSpaceSample.free || Long.fromNumber(0);
                let used = total.sub(free);
                timeseries.data_points.push({
                    time: sample.collectionTime!,
                    value: used,
                });
            });
        }

        return timeseries;
    }

    private getSamplesForTimeRange(threadInternalId: Long.Long, timeRange: PerfDataTimeRange): tracecap.IThreadSample[] {
        return this.data.samples?.filter(sample => {
            if (!sample.collectionTime) return false;
            if (!threadInternalId.eq(sample.threadInternalId!)) return false;

            return timeRange.contains(sample.collectionTime);
        });
    }

    getStackDataForTrack(view: any, section: PerfDataSection, track: PerfDataTrack): StackDataSource {
        let process = section.context as tracecap.Process;
        let context: {[name: string]: any} = track.context;
        let sample = context.span as tracecap.ThreadSample;
        if (!sample) {
            return new class implements StackDataSource {
                getStackScopes(): tracecap.SampleScope[] {
                    return [];
                }
                getStackSamplesForScope(scope: tracecap.SampleScope): tracecap.IThreadSample[] {
                    throw new Error('Method not implemented.');
                }
            };
        }

        let spanData = this.getSpanDataForTrack(view, section, track);
        let timeRange = spanData.timeRange;
        let samples = this.getSamplesForTimeRange(sample.threadInternalId!, timeRange);
        
        var groupedSamples = new Map<tracecap.SampleScope, tracecap.IThreadSample[]>();
        samples.forEach(sample => {
            if (!sample.scope) return;
            if (sample.purpose != tracecap.SamplePurpose.PROFILE) return;
            if (!sample.stack) return;

            if (!groupedSamples.has(sample.scope)) {
                groupedSamples.set(sample.scope, []);
            }
            
            groupedSamples.get(sample.scope)?.push(sample);
        });

        return new class implements StackDataSource {
            getStackScopes(): tracecap.SampleScope[] {
                return Array.from(groupedSamples.keys());
            }
            getStackSamplesForScope(scope: tracecap.SampleScope): tracecap.IThreadSample[] {
                return groupedSamples.get(scope)!; // we know this key existed from the call above
            }
        };
    }
}
