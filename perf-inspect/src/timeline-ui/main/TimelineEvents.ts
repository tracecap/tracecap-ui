import { LitElement, html, svg, css, property } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';

import { TimelineBaseWidget } from './TimelineBaseWidget.js';

export class TimelineEvents extends TimelineBaseWidget {
    @property({ type: Number }) height = 40;
    eventTimes: number[] = [];

    constructor() {
        super();

        var timeSoFar = 0;
        /*
        for (var i in stackSample.raw_timestamp_deltas) {
            var delta = stackSample.raw_timestamp_deltas[i];

            this.eventTimes.push(timeSoFar / 1000.0); // milliseconds

            timeSoFar += delta;
        }*/
    }

    static styles = css`
        :host {
        }

        svg {
            display: block;
            background-color: #fff;
        }

        line {
            stroke: #000;
            stroke-width: 1;
            opacity: 0.2;
        }
    `

    render() {
        return svg`
        <svg height="${this.height}" width="100%">
        ${repeat(this.eventTimes, (time) => time, (time, index) => {
            return svg`<line x1="${time * this.widthPerMillisecond}" y1="0" x2="${time * this.widthPerMillisecond}" y2="${this.height}" />`;
        })}
        </svg>
        `
    }
}