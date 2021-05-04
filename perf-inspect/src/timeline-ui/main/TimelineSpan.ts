import { LitElement, html, svg, css, property } from 'lit-element';

import { TimelineBaseWidget } from './TimelineBaseWidget.js';

export class TimelineSpan extends TimelineBaseWidget {
    @property({ type: Number }) start = 0;
    @property({ type: Number }) duration = 0;
    @property({ type: Number }) queued = 0;

    static styles = css`
        svg {
        }

        rect.queue {
            fill: #eee;
            rx: 0px;
        }

        rect.span {
            fill: var(--trace-span-color, #aaa);
            stroke: none;
            rx: 3px;
        }

        text {
            font-size: 11px;
            fill: var(--trace-span-color, #aaa);
        }
    `;
    
    render() {
        return svg`
            <svg width="100%" height="24">
                <rect x="${(this.start - this.queued) * this.widthPerMillisecond}" y="10" width="${Math.ceil(this.queued * this.widthPerMillisecond)}" height="4" class="queue" />
                <rect x="${this.start * this.widthPerMillisecond}" y="6" width="${Math.ceil(this.duration * this.widthPerMillisecond)}" height="12" class="span" />
                <text x="${(this.start + this.duration) * this.widthPerMillisecond + 5}" y="15">${this.duration.toFixed(2)} ms ${this.queued > 0 ? "(queued "+this.queued.toFixed(2)+" ms)" : ""}</text>
            </svg>
        `;
    }
}
