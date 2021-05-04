import { LitElement, html, svg, css, property, customElement } from 'lit-element';
import {repeat} from 'lit-html/directives/repeat.js';

import { PerfDataTrack, PerfDataSpanData } from '../data-source/PerfDataSource.js';

import { RenderUtils } from '../../RenderUtils';
import { tracecap } from '../../tracecap-proto.js';

@customElement('span-detail')
export class SpanDetailTab extends LitElement {
	private track: PerfDataTrack;
	private spanData: PerfDataSpanData;

    private metadata: tracecap.IMetadata[];
	private backtrace: tracecap.IStackFrame[];
	
	constructor(track: PerfDataTrack, spanData: PerfDataSpanData) {
        super();

        this.track = track;
        this.spanData = spanData;

        // FIXME: this is gross
        let context: {[name: string]: any} = track.context;
        let sample = context.span as tracecap.ThreadSample;
        this.metadata = sample.metadata.sort((a, b) => { return a.name!.localeCompare(b.name!) });
		
		this.backtrace = [];
		if (sample.stack?.stack)
			this.backtrace = sample.stack.stack;
	}
	static styles = css`
	#main {
		padding: 20px;
        overflow: scroll;
        height: 258px;
        box-sizing: border-box;
	}

    #trace td {
        margin: 0;
        white-space: pre-wrap;
		font-family: monospace;
    }
	#trace td.package {
		color: #666;
		padding-right: 10px;
		text-align: right;
	}
	`;
	
	render() {
	return html`
		<div id="main">
		<table border="1" cellpadding="5">
		<tr>
		<td>${this.track.name}</td>
		<td>${this.track.description}</td>
		<td>${RenderUtils.longAsMillisecond(this.spanData.timeRange.duration)} ms</td>
		<td><button @click="${this._doTimeslice}}" span-id="${this.track.context?.span?.span?.id}">timeslice</button></td>
		</tr>
		</table>

        Detail:
        <table border="1" cellpadding="5">
        ${repeat(this.metadata, (m) => m.name, (m, index) => {
            return html`
                <tr>
                <td>${m.name}</td>
                <td><pre>${m.metaString}</pre></td>
                </tr>
            `;
        })}
		</table>

		Backtrace:
		<div id="trace">
		<table border="0" cellpadding="0" cellspacing="0">
		${repeat(this.backtrace, (f) => `${f.package}:${f.file}:${f.line} in ${f.method}`, (f, index) => {
			return html`<tr><td class="package">${f.package || ""}</td><td>${f.file}:${f.line} in ${f.method}</td></tr>`;
		})}
		</table>
		</div>
		</div>
	`;
	}

	private _doTimeslice(e: Event) {
	let event = new CustomEvent('request-timeslice', {
		detail: {
		span: (e.currentTarget as HTMLElement).getAttribute('span-id')
		}
	});
	this.dispatchEvent(event);
	}
}
