import { LitElement, html, svg, css, property } from 'lit-element';
import { TimelineGroup } from './TimelineGroup.js';

import { TimelineItem } from './TimelineItem.js';
import { TimelineScrubber } from './TimelineScrubber.js';

export class TimelineView extends LitElement {
    @property({ type: Number }) widthPerMillisecond = 300 / 1000; // 2000px per 1000ms
    @property({ type: String }) title = 'My app';
    @property({ type: Boolean }) loading = true;
  
    static styles = css`
        :host {
        }
    
        main {
            position: relative;
            background-color: #fff;
            border-top: 1px solid #555;
            height: 100%;
        }

        main.loading #loader {
            display: block;
            text-align: center;
            width: 100%;
            height: 400px;
        }

        main.loading #loader sp-progress-circle {
            margin: 100px auto;
        }

        main.loading #marker {
            display: none;
        }

        main.loaded #loader {
            display: none;
        }

        main.loading #scroll-container {
            display: none;
        }

        main.loaded #scroll-container {
        }
    
        .scrollable {
            height: 100%;
            overflow: scroll;
        }
    
        .row-header {
            position: -webkit-sticky;
            position: sticky;
            top: 0px;
            z-index: 20;
        }
    
        .sidebar-header {
            position: -webkit-sticky;
            position: sticky;
            left: 0px;
            width: var(--topic-width, 200px);
            height: 20px;
            background-color: #fff;
            border-bottom: 1px solid #888;
            border-right: 1px solid #888;
            z-index: 20;
        }
    
        .visual-header {
            position: absolute;
            top: 0px;
            margin-left: var(--topic-width, 200px);
            background-color: #fff;
            width: 20000px;
            height: 20px;
            border-bottom: 1px solid #888;
        }
    
        #marker {
            position: absolute;
            width: 1px;
            height: 100%;
            background-color: #000;
            opacity: 0.3;
            z-index: 10;
        }
    `;
  
    updated() {
        for (const child of Array.from(this.children)) {
            // propagate viewport properties down to children of the right type
            if (child instanceof TimelineItem) {
            let timelineItem = child as TimelineItem;
            timelineItem.widthPerMillisecond = this.widthPerMillisecond;
            } else if (child instanceof TimelineGroup) {
            let timelineItem = child as TimelineGroup;
            timelineItem.widthPerMillisecond = this.widthPerMillisecond;
            }
        }
    
        var scrubber = this.shadowRoot?.getElementById('scrubber') as TimelineScrubber;
        if (scrubber) {
            scrubber.widthPerMillisecond = this.widthPerMillisecond;
        }
    }
  
    itemHighlightChanged(item: TimelineItem) {
        this.querySelectorAll('timeline-item').forEach(el => {
            let anotherItem = (el as TimelineItem);
            if (anotherItem != item) {
            anotherItem.highlighted = false;
            }
        });
    
        let event = new CustomEvent('highlight-changed', {
            detail: {
            highlightedItem: item
            }
        });
        this.dispatchEvent(event);
    }
  
    get marker() {
        return this.shadowRoot?.getElementById('marker');
    }
  
    get sidebarWidth() {
        return this.shadowRoot?.getElementById('sidebar-header')?.clientWidth || 200;
    }
  
    get containerElement() {
        return this.shadowRoot?.getElementById('main-container');
    }
  
    _mouseMove(e: MouseEvent) {
        var m = this.marker;
        if (!m) return;
    
        var cr = this.shadowRoot?.getElementById('scroll-container')?.getBoundingClientRect();
        if (!cr) return;
    
        var x = (e.clientX - cr.x);
    
        var leftEdge = this.shadowRoot?.getElementById('sidebar-header')?.clientWidth;
        if (leftEdge) x -= leftEdge;
    
        if (x < 0) x = 0;
    
        // FIXME: work out how to stop the marker from stealing scroll, then remove this.
        x++;
    
        m.style.top = "0px";
        m.style.left = ((leftEdge || 0) + x) + "px";
    }
  
    render() {
        return html`
            <main id="main-container" @mousemove="${this._mouseMove}" class="${this.loading ? "loading" : "loaded"}">
            <div id="loader">
                <sp-progress-circle
                    label="A large representation of an unclear amount of work"
                    indeterminate
                    size="large"
                ></sp-progress-circle>
            </div>
            <div id="scroll-container" class="scrollable">
                <div class="row-header">
                <div class="sidebar-header" id="sidebar-header"></div>
                <div class="visual-header">
                    <timeline-scrubber id="scrubber"></timeline-scrubber>
                </div>
                </div>
    
                <slot></slot>
    
                <!-- spacer -->
                <div style="height: 30px;"></div>
            </div>
            <div id="marker"></div>
            </main>
        `;
    }
  
    get viewDisplayWidth(): number {
        if (!this.containerElement) return 1000;
        
        return this.containerElement?.clientWidth - this.sidebarWidth;
    }
  }