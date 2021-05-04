import { LitElement, html, svg, css, property } from 'lit-element';

import { TimelineBaseWidget } from './TimelineBaseWidget.js';

export class TimelineSpans extends TimelineBaseWidget {
    static styles = css`
        div {
        }
    `;
    
    render() {
        return html`
            <div>
            <slot></slot>
            </div>
        `;
    }
}
