import { LitElement, html, svg, css, property } from 'lit-element';

import { TimelineBaseWidget } from './TimelineBaseWidget.js';

export class TimelineHeading extends LitElement {
    @property({ type: String }) heading = "";

    constructor(heading: string = "") {
        super();
        if (heading != "")
            this.heading = heading;
    }

    static styles = css`
        div {
            width: 100%;
            background-color: #fff;
            border-bottom: 1px solid #666;

            font-weight: bold;
            font-size: 80%;
            color: #666;
            padding: 30px 5px 5px 5px;

            position: -webkit-sticky;
            position: sticky;
            left: 0px;
        }
    `;
    
    render() {
        return html`
            <div>
            ${this.heading}
            </div>
        `;
    }
}
