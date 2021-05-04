import { svg, css, property } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';

import { TimelineBaseWidget } from './TimelineBaseWidget.js';

export class TimelineScrubber extends TimelineBaseWidget {
    @property({ type: Number }) keyframeWidth = 200;
    @property({ type: Number }) notchPerFrame = 10;

    static styles = css`
        :host {
        }

        text {
            font-size: 11px;
            fill: #888;
        }

        line {
            stroke: #888;
            stroke-width: 1;
        }
    `

    pad(n: number, size: number) {
        var fmt = Math.floor(n).toString();
        while (fmt.length < size) {
            fmt = "0" + fmt;
        }
        return fmt;
    }

    millisecondToTimeString(time: number) {
        var ms = time % 1000;
        var seconds = Math.floor(time / 1000);
        var minutes = Math.floor(seconds / 60);
        seconds %= 60;

        return `${this.pad(minutes, 2)}:${this.pad(seconds, 2)}.${this.pad(ms, 3)}`;
    }

    get tickMarks() {
        var keyframeMilliseconds = this.keyframeWidth / this.widthPerMillisecond;
        var ticks = [];
        for (var i = 0; i < 100; i++) {
            ticks.push(this.millisecondToTimeString(i * keyframeMilliseconds));
        }
        return ticks;
    }

    render() {
        return svg`
        <svg height="20" width="${this.tickMarks.length * this.keyframeWidth}">
            ${repeat(this.tickMarks, (tick) => tick, (tick, index) => {
                const tickStart = index * this.keyframeWidth;
                return svg`
                    <text x="${tickStart + 2}" y="10">${tick}</text>
                    <line x1="${tickStart + this.keyframeWidth}" y1="0" x2="${tickStart + this.keyframeWidth}" y2="20" />

                    ${repeat(Array(this.notchPerFrame).keys(), (mark) => mark, (mark, index) => {
                        const tickX = tickStart + (this.keyframeWidth * mark / this.notchPerFrame);
                        return svg`
                            <line x1="${tickX}" y1="15" x2="${tickX}" y2="20" />
                        `;
                    })}
                `;
            })}
        </svg>
        `
    }
}
