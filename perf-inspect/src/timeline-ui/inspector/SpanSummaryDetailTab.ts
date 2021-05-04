import { LitElement, html, svg, css, property, customElement } from 'lit-element';
import {repeat} from 'lit-html/directives/repeat.js';

import { PerfDataTrack, PerfDataSpanData } from '../data-source/PerfDataSource.js';

import { RenderUtils } from '../../RenderUtils';

interface TrackAndSpan {
  track: PerfDataTrack
  spanData: PerfDataSpanData
}

@customElement('span-summary-detail')
export class SpanSummaryDetailTab extends LitElement {
  private data: TrackAndSpan[];
  constructor(spanData: TrackAndSpan[]) {
    super();

    this.data = spanData;
  }
  static styles = css`
    div {
      padding: 20px;
    }
  `;
  
  render() {
    return html`
      <div>
      <table border="1" cellpadding="5">
      ${repeat(this.data, (piece) => {
        return html`<tr><td>${piece.track.name}</td><td>${piece.track.description}</td><td>${RenderUtils.longAsMillisecond(piece.spanData.timeRange.duration)} ms</td><td><button @click="${this._doTimeslice}}" span-id="${piece.track.context?.span?.span?.id}">timeslice</button></td></tr>`;
      })}
      </table>
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
