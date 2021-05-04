import { LitElement, html, svg, css, property } from 'lit-element';

import { PerfDataTimeseries } from '../data-source/PerfDataSource.js';
import { TimelineBaseWidget } from './TimelineBaseWidget.js';

export class TimelineGauge extends TimelineBaseWidget {
    @property({ type: Number }) height = 40;
    arr: number[][] = [];

    constructor() {
        super();

        var arr = [];
        for (var i = 0; i < 1000; i++) {
            arr.push([i * 100, 0.5 + Math.sin(i / 10) / 3]);
        }
        this.arr = arr;
    }

    static styles = css`
        :host {
        }

        svg {
            display: block;
        }

        polygon {
            fill: #bbf;
        }

        polyline {
            fill:none;
            stroke: #88a;
            stroke-width: 2;
        }
    `

    get points() {
        return this.arr;
    }

    get pointsStrings() {
        return this.points.map((value) => {
            return Math.round(value[0] * this.widthPerMillisecond).toString() + "," + Math.round((1 - value[1]) * this.height).toString()
        });
    }

    set samples(samples: PerfDataTimeseries) {
        this.arr = [];

        let values = samples.data_points.map(sample => { return sample.value.toNumber() });
        let max = Math.max(...values);
        let min = Math.min(...values);
        let delta = max - min;

        // pad out by 10% on either side
        min -= delta * 0.1;
        max += delta * 0.1;
        delta = max - min;

        this.arr = samples.data_points.map(sample => {
            return [sample.time.toNumber(), (sample.value.toNumber() - min) / delta];
        });

        this.arr.sort((a, b) => { return a[0] - b[0]; })
    }

    render() {
        return svg`
        <svg height="${this.height}" width="100%">
        <polyline points="${this.pointsStrings.join(' ')}" />
        <polygon points="0,${this.height} ${this.pointsStrings.join(' ')} ${this.pointsStrings[this.pointsStrings.length - 1].split(',')[0]},${this.height}" />
        </svg>
        `
    }
}
