import { LitElement, html, svg, css, property, customElement, TemplateResult } from 'lit-element';
import {repeat} from 'lit-html/directives/repeat.js';

import { PerfDataTrack, PerfDataSpanData } from '../data-source/PerfDataSource.js';

import { RenderUtils } from '../../RenderUtils';
import { StackDataSource } from '../data-source/StackDataSource.js';
import { tracecap } from '../../tracecap-proto.js';

interface FlameStackNode {
	name: string
	count: number
	children: Map<string, FlameStackNode>
}

@customElement('stack-profile-detail-tab')
export class StackProfileDetailTab extends LitElement {
	private track: PerfDataTrack;
	private spanData: PerfDataSpanData;
	private stackDataSource: StackDataSource;
	private stackScope: tracecap.SampleScope;
	private stackTraces: tracecap.IThreadSample[];

	private inStackCounts: Map<string, number> = new Map<string, number>();
	private topOfStackCounts: Map<string, number> = new Map<string, number>();

	private sortByColumn: string = "self";
	private sortAscending: boolean = false;

	private flameStack: FlameStackNode = { name: "root", count: 0, children: new Map<string, FlameStackNode>() };
	
	constructor(track: PerfDataTrack, spanData: PerfDataSpanData, stackDataSource: StackDataSource, stackScope: tracecap.SampleScope) {
        super();

        this.track = track;
        this.spanData = spanData;
		this.stackDataSource = stackDataSource;
		this.stackScope = stackScope;

		this.stackTraces = stackDataSource.getStackSamplesForScope(stackScope);

		this.stackTraces.forEach((sample) => {
			if (!sample.stack?.stack) return;
			let stack = sample.stack?.stack;

			this.parseStackToFlame(stack);

			let seen: { [id: string]: boolean } = {};
			stack.forEach((frame, i) => {
				if (!frame.method) return;
				if (seen[frame.method]) return;
				seen[frame.method] = true;

				let v = this.inStackCounts.get(frame.method);
				if (v === undefined) v = 0;
				this.inStackCounts.set(frame.method, v + 1);
			});

			let topOfStack = stack[0];
			if (topOfStack && topOfStack.method) {
				let v = this.topOfStackCounts.get(topOfStack.method);
				if (v === undefined) v = 0;
				this.topOfStackCounts.set(topOfStack.method, v + 1);
			}
		});
	}

	private parseStackToFlame(stack: tracecap.IStackFrame[]) {
		let curr = this.flameStack;
		// reduceRight used like this is essentially like forEach, but reverse through the array
		stack.reduceRight((_, frame) => {
			let key = frame.method || 'unknown method';

			if (!curr.children.has(key)) {
				curr.children.set(key, { name: key, count: 0, children: new Map<string, FlameStackNode>() });
			}

			curr = curr.children.get(key)!;
			curr.count++;

			return {};
		}, {});
	}

	private get flameSharedBase(): FlameStackNode {
		let curr = this.flameStack;
		while (curr.children.size == 1) {
			curr = curr.children.values().next().value;
		}
		return curr;
	}

	private get allMethods(): string[] {
		return Array.from(this.inStackCounts.keys());
	}

	private getWeights(method: string) {
		let total = this.inStackCounts.get(method)!;
		let self = this.topOfStackCounts.has(method) ? this.topOfStackCounts.get(method)! : 0;
		return {
			total: total * 1.0 / this.stackTraces.length,
			self: self * 1.0 / this.stackTraces.length,
		}
	}

	private get sortedMethods(): string[] {
		let direction = this.sortAscending ? 1 : -1;
		return this.allMethods.sort((a, b) => {
			let w_a = this.getWeights(a);
			let w_b = this.getWeights(b);
			if (this.sortByColumn == "total") {
				return (w_a.total - w_b.total) * direction;
			} else {
				return (w_a.self - w_b.self) * direction;
			}
		});
	}

	private sortIcon(field: string): TemplateResult {
		if (this.sortByColumn != field) return html``;
		
		if (this.sortAscending) {
			return html`&uarr;`;
		} else {
			return html`&darr;`;
		}
	}

	private toggleSort(field: string, e: Event) {
		if (this.sortByColumn == field) {
			this.sortAscending = !this.sortAscending;
		} else {
			this.sortByColumn = field;
			this.sortAscending = false;
		}
		this.requestUpdate();
	}

	static styles = css`
	div#main-detail {
		padding: 0px;
		height: 100%;
		--spectrum-table-cell-padding-y: 5px;
	}

	.flame-container {
		float: left;
		box-sizing: border-box;
	}

	.flame-item {
		box-sizing: border-box;
		width: 100%;
		height: 20px;
		background-color: rgba(112, 194, 133, 0.5);
		border-right: 1px solid #fff;
		border-bottom: 1px solid #fff;

		padding: 5px;
		font-size: 10px;
		font-family: monospace;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	`;
	
	render() {
	return html`
	<div id="main-detail">
		<link rel="stylesheet" href="/static/dist-perf-inspect/tracecap-viewer.css">

		<sp-split-view horizontal primary-min="600" primary-size="600" style="height: 100%;">
			<div style="overflow: scroll; height: 258px;">
				<table class="spectrum-Table" width="100%">
				<thead class="spectrum-Table-head">
					<tr>
						<th class="spectrum-Table-headCell is-sortable" nowrap="nowrap" @click="${this.toggleSort.bind(this, 'total')}">Total ${this.sortIcon('total')}</th>
						<th class="spectrum-Table-headCell is-sortable" nowrap="nowrap" @click="${this.toggleSort.bind(this, 'self')}">Self ${this.sortIcon('self')}</th>
						<th class="spectrum-Table-headCell" width="80%">Symbol</th>
					</tr>
				</thead>
				<tbody class="spectrum-Table-body">
					${repeat(this.sortedMethods, (t) => t, (t, index) => {
						let w = this.getWeights(t);
						return html`
						<tr class="spectrum-Table-row">
							<td class="spectrum-Table-cell" tabindex="0">${(w.total * 100.0).toFixed(1)}%</td>
							<td class="spectrum-Table-cell" tabindex="0">${(w.self * 100.0).toFixed(1)}%</td>
							<td class="spectrum-Table-cell" tabindex="0">${t}</td>
						</tr>
						`;
					})}
				</tbody>
				</table>
			</div>

			<div style="overflow: scroll; height: 258px;" id="flame">
				${this.renderFlameTemplate(this.flameSharedBase, 1)}
			</div>
		</sp-split-view>
	</div>
	`;
	}
	
	renderFlameTemplate(node: FlameStackNode, weight: number): TemplateResult {
		return html`<div class="flame-container" style="width: ${(weight * 100).toFixed(4)}%;">
			<div class="flame-item">${node.name}</div>
			${repeat(node.children.keys(), (c) => c, (c, index) => {
				let childNode = node.children.get(c)!;
				return this.renderFlameTemplate(childNode, childNode.count / node.count);
			})}
		</div>`
	}
}
