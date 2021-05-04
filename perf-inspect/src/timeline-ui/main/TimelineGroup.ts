import { LitElement, html, svg, css, property } from 'lit-element';

import { TimelineBaseWidget } from './TimelineBaseWidget.js';
import { TimelineItem } from './TimelineItem.js';

export class TimelineGroup extends LitElement {
    @property({ type: Number }) widthPerMillisecond = 800 / 1000;
    @property({ type: Boolean }) collapsed = false;
    @property({ type: Number }) groupIndent = 0;
    @property({ type: Number }) indent = 1;

    static styles = css`
        .expanded ::slotted(timeline-item) {

        }

        .collapsed {
            display: none;
        }

        div {
            border-bottom: var(--below-group-bottom-border, 0px) solid #555;
        }
    `;

    updated() {
        for (const child of Array.from(this.children)) {
            // propagate viewport properties down to children of the right type
            if (child instanceof TimelineItem) {
                let timelineItem = child as TimelineItem;
                timelineItem.widthPerMillisecond = this.widthPerMillisecond;
                timelineItem.groupIndent = this.groupIndent + this.indent;
            } else if (child instanceof TimelineGroup) {
                let timelineItem = child as TimelineGroup;
                timelineItem.widthPerMillisecond = this.widthPerMillisecond;
                timelineItem.groupIndent = this.groupIndent + this.indent;
            }
        }
    }
    
    render() {
        return html`
            <div class="${this.collapsed ? 'collapsed' : 'expanded'}">
            <slot></slot>
            </div>
        `;
    }
}
