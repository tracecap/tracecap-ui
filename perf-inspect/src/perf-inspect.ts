import '@spectrum-web-components/split-view/sp-split-view.js';
import '@spectrum-web-components/tabs/sp-tabs.js';
import '@spectrum-web-components/tabs/sp-tab.js';
import '@spectrum-web-components/picker/sync/sp-picker.js';
import '@spectrum-web-components/menu/sp-menu.js';
import '@spectrum-web-components/menu/sp-menu-group.js';
import '@spectrum-web-components/menu/sp-menu-item.js';
import '@spectrum-web-components/menu/sp-menu-divider.js';
import '@spectrum-web-components/progress-circle/sp-progress-circle.js';

import { TimelineView } from './timeline-ui/main/TimelineView.js';
import { TimelineItem } from './timeline-ui/main/TimelineItem.js';
import { TimelineScrubber } from './timeline-ui/main/TimelineScrubber.js';
import { TimelineGauge } from './timeline-ui/main/TimelineGauge.js';
import { TimelineEvents } from './timeline-ui/main/TimelineEvents.js';
import { TimelineGroup } from './timeline-ui/main/TimelineGroup.js';
import { TimelineSpans } from './timeline-ui/main/TimelineSpans.js';
import { TimelineSpan } from './timeline-ui/main/TimelineSpan.js';
import { TimelineSpanSummary } from './timeline-ui/main/TimelineSpanSummary.js';
import { TimelineHeading } from './timeline-ui/main/TimelineHeading.js';

customElements.define('timeline-scrubber', TimelineScrubber);
customElements.define('timeline-gauge', TimelineGauge);
customElements.define('timeline-events', TimelineEvents);
customElements.define('timeline-view', TimelineView);
customElements.define('timeline-item', TimelineItem);
customElements.define('timeline-group', TimelineGroup);
customElements.define('timeline-spans', TimelineSpans);
customElements.define('timeline-span', TimelineSpan);
customElements.define('timeline-span-summary', TimelineSpanSummary);
customElements.define('timeline-heading', TimelineHeading);

import './timeline-ui/inspector/TimelineDetailInspector.js';
import { SpanSummaryDetailTab } from './timeline-ui/inspector/SpanSummaryDetailTab.js';
import { SpanDetailTab } from './timeline-ui/inspector/SpanDetailTab.js';
import { StackProfileDetailTab } from './timeline-ui/inspector/StackProfileDetailTab.js';
import { PerfDataSection, PerfDataSource, PerfDataTrack, PerfDataTrackType } from './timeline-ui/data-source/PerfDataSource.js';
import { BasePerfDataSource } from './timeline-ui/data-source/BasePerfDataSource.js';
import { SlicedPerfDataSource } from './timeline-ui/data-source/SlicedPerfDataSource.js';

import { QueryPipeline, QueryPipelineItem } from './QueryPipeline.js';
customElements.define('query-pipeline', QueryPipeline);

import { tracecap } from './tracecap-proto';

import { RenderUtils } from './RenderUtils';
import { TimelineDetailInspector } from './timeline-ui/inspector/TimelineDetailInspector.js';
import pako from 'pako';

class PerfInspectApplication {
    private detailElement: TimelineDetailInspector;
    private viewElement: TimelineView;
    private dataSource: PerfDataSource | null = null;
    private queryPipeline: QueryPipeline;

    private dataCache: { [id: string]: tracecap.TraceFile } = {};

    placeElementsUnder(section: PerfDataSection, parent: HTMLElement, parentTrack?: PerfDataTrack, subItems?: PerfDataTrack[]) {
        if (!this.dataSource) return;

        subItems ||= this.dataSource.getTracksForSection(this, section, parentTrack);

        let timeBounds = this.dataSource.getTimeBounds(this);

        subItems.forEach((track) => {
            if (!this.dataSource) return;
            
            let trackItem = new TimelineItem(track.name);
            trackItem.data = {
                section: section,
                track: track,
            };
            trackItem.itemId = track.id;
            if (track.description) trackItem.description = track.description;

            if (track.color) trackItem.classList.add(track.color);

            switch (track.trackType) {
                case PerfDataTrackType.Span:
                    let spanData = this.dataSource.getSpanDataForTrack(this, section, track);
                    let span = new TimelineSpan();
                    span.start = RenderUtils.longAsMillisecond(spanData.timeRange.start.sub(timeBounds.start));
                    span.duration = RenderUtils.longAsMillisecond(spanData.timeRange.duration);
                    if (spanData.queueTime) {
                        span.queued = RenderUtils.longAsMillisecond(spanData.queueTime);
                    }
                    trackItem.append(span);
                    break;
                
                case PerfDataTrackType.SpanSummary:
                    let spanSummary = new TimelineSpanSummary();
                    spanSummary.spanGroupId = track.id;
                    trackItem.append(spanSummary);
                    trackItem.classList.add('item-nest-tight');
                    break;
                
                case PerfDataTrackType.Gauge:
                    let samples = this.dataSource.getTimeseriesDataForTrack(this, section, track);
                    let gauge = new TimelineGauge();
                    samples.data_points.forEach((sample) => {
                        sample.time = sample.time.sub(timeBounds.start).div(1_000_000);
                    });
                    gauge.samples = samples;
                    trackItem.append(gauge);
                    break;
            
                default:
                    break;
            }

            let subItems = this.dataSource.getTracksForSection(this, section, track);
            if (subItems.length > 0) {
                trackItem.subgroup = track.id;

                let trackGroup = new TimelineGroup();
                trackGroup.classList.add('item-nest-tight');
                trackGroup.classList.add('item-nest-borderless');
                trackGroup.id = track.id;

                parent.append(trackItem);
                parent.append(trackGroup);
                
                trackItem.setExpanded(false);

                this.placeElementsUnder(section, trackGroup, track, subItems);
            } else {
                parent.append(trackItem);
            }

            trackItem.recoverExpansion();
        });
    }

    async loadFile(name: string) {
        if (!this.dataCache[name]) {
            let uri = window.location.pathname.split('/');
            this.viewElement.loading = true;
            const resp = await fetch("/" + uri[1] + "/" + uri[2] + "/ui/data-load/" + name + ".tcap");
            const blobData = await resp.arrayBuffer();
            const dat = new Uint8Array(blobData);
            const output = pako.inflate(dat);
            this.dataCache[name] = tracecap.TraceFile.decode(output);
            this.viewElement.loading = false;
        }

        return this.dataCache[name];
    }

    async loadDataForQuery(query: QueryPipelineItem[]) {
        let loaders = query.map(command => {
            if (command.command == 'load') {
                return this.loadFile(command.args[0]);
            }
        });

        return Promise.all(loaders);
    }

    async runQuery(query: QueryPipelineItem[]) {
        await this.loadDataForQuery(query);

        let dataSource: PerfDataSource | null = null;
        let loadedFile: tracecap.TraceFile | null = null;
        query.forEach(command => {
            if (command.command == 'load') {
                loadedFile = this.dataCache[command.args[0]];
                dataSource = new BasePerfDataSource(loadedFile);
            } else if (dataSource && loadedFile && command.command == 'timeslice') {
                dataSource = new SlicedPerfDataSource(dataSource, loadedFile, command);
            }
        });

        if (dataSource) {
            this.dataSource = dataSource;

            this.reloadData();
            this.zoomToDataTimeRange();
        }
    }

    constructor(viewElementId: string, detailElementId: string, pipelineInputId: string) {
        this.detailElement = document.getElementById(detailElementId)! as TimelineDetailInspector;
        this.viewElement = document.getElementById(viewElementId)! as TimelineView;
        this.queryPipeline = document.getElementById(pipelineInputId)! as QueryPipeline;

        this.viewElement.loading = false;

        this.queryPipeline.addEventListener('run-query', (event) => {
            let customEvent = event as CustomEvent;
            let parsedQuery = customEvent?.detail.parsedQuery as QueryPipelineItem[];

            this.runQuery(parsedQuery);
        });

        this.viewElement.addEventListener('highlight-changed', (event) => {
            if (!this.dataSource) return;

            let customEvent = event as CustomEvent;
            let newItem = customEvent?.detail.highlightedItem as TimelineItem;
            this.detailElement.clearTabs();
            if (newItem) {
                let section = newItem.data.section as PerfDataSection;
                let track = newItem.data.track as PerfDataTrack;
                switch (track.trackType) {
                    case PerfDataTrackType.SpanSummary:
                        let subItems = this.dataSource.getTracksForSection(this, section, track);
                        let spanData = subItems.map((track) => {
                            return {
                                track: track,
                                spanData: this.dataSource!.getSpanDataForTrack(this, section, track),
                            };
                        });
                        let el = new SpanSummaryDetailTab(spanData);
                        el.addEventListener('request-timeslice', (e) => {
                            let ce = e as CustomEvent;
                            let spanId = ce.detail.span;
                            this.queryPipeline.appendQueryPipe('timeslice span.id=' + spanId);
                        });
                        this.detailElement.addTab('Child Span Overview', el);
                        break;
                    case PerfDataTrackType.Span:
                        let oneSpanData = this.dataSource.getSpanDataForTrack(this, section, track);
                        let sd = new SpanDetailTab(track, oneSpanData);
                        sd.addEventListener('request-timeslice', (e) => {
                            let ce = e as CustomEvent;
                            let spanId = ce.detail.span;
                            this.queryPipeline.appendQueryPipe('timeslice span.id=' + spanId);
                        });
                        this.detailElement.addTab('Span Detail', sd);

                        let stackDataSource = this.dataSource.getStackDataForTrack(this, section, track);
                        let stackScopes = stackDataSource.getStackScopes();
                        if (stackScopes.includes(tracecap.SampleScope.VM_RUBY)) {
                            let prof = new StackProfileDetailTab(track, oneSpanData, stackDataSource, tracecap.SampleScope.VM_RUBY);
                            this.detailElement.addTab('Ruby Profile', prof);
                        }

                        break;
                }
            }
        });

        this.reloadData();
    }

    reloadData() {
        if (!this.dataSource) return;

        this.viewElement.innerHTML = '';

        this.dataSource.getSections(this).forEach((section) => {
            this.viewElement.append(new TimelineHeading(section.title));

            this.placeElementsUnder(section, this.viewElement);
        });

        (this.viewElement as TimelineView).updated();
    }

    zoomToDataTimeRange() {
        if (!this.dataSource) return;

        let timeRange = this.dataSource.getTimeBounds(this);

        let viewWidth = this.viewElement.viewDisplayWidth;

        let displayedBounds = RenderUtils.longAsMillisecond(timeRange.duration);

        this.viewElement.widthPerMillisecond = viewWidth / displayedBounds;
    }
}

var app = new PerfInspectApplication('main-app-view', 'timeline-detail', 'main-pipeline-input');
