import { LitElement, html, svg, css, property } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';

import { TimelineBaseWidget } from './TimelineBaseWidget.js';
import { TimelineGroup } from './TimelineGroup.js';
import { TimelineSpan } from './TimelineSpan.js';
import { TimelineItem } from './TimelineItem.js';

export class TimelineSpanSummary extends TimelineBaseWidget {
    @property({ type: String }) spanGroupId = "";

    static styles = css`
        svg {
        }

        rect {
            fill: var(--trace-span-color, #aaa);
            stroke: none;
            rx: 0px;
        }

        text {
            font-size: 11px;
            fill: var(--trace-span-color, #aaa);
        }
    `;

    get spanGroup(): TimelineGroup {
        return document.getElementById(this.spanGroupId!) as TimelineGroup;
    }

    get allSpans(): TimelineSpan[] {
        let group: TimelineGroup = this.spanGroup!;
        if (!group) return [];
        let spans: TimelineSpan[] = [];
        for (const child of Array.from(group.children)) {
            if (child instanceof TimelineItem) {
                let span = child.children[0];
                if (span instanceof TimelineSpan) {
                    spans.push(span);
                }
            }
        }
        return spans;
    }
    
    render() {
        return svg`
            <svg width="100%" height="24">
            ${repeat(this.allSpans, (span) => span, (span, index) => {
                return svg`<rect x="${span.start * this.widthPerMillisecond}" y="6" width="${Math.ceil(span.duration * this.widthPerMillisecond)}" height="12" />`
            })}
            </svg>
        `;
    }
}
