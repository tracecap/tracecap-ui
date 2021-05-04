import { LitElement, html, svg, css, property } from 'lit-element';

import { TimelineBaseWidget } from './TimelineBaseWidget.js';
import { TimelineView } from './TimelineView.js';

export class TimelineItem extends TimelineBaseWidget {
    @property({ type: String }) name = 'My app';
    @property({ type: String }) itemId = '';
    @property({ type: String }) description = '';
    @property({ type: String }) subgroup = '';
    @property({ type: Number }) groupIndent = 0;
    @property({ type: Boolean }) highlighted = false;
    public data: any;
  
    constructor(name: string = "") {
        super();
        this.name = name;
    }
  
    connectedCallback() {
        super.connectedCallback();
  
        this.requestUpdate();
    }
  
    recoverExpansion() {
        // see if we can restore this expand state
        if (this.itemId != "") {
            let expanded = window.sessionStorage.getItem('timeline-item-expanded-' + this.itemId) == "expanded";
            this.setExpanded(expanded);
        }
    }
  
    _handleExpandClick() {
        if (this.subgroup == '') return;
      
        this.setExpanded(!this.expanded);
        this.saveExpanded();
    }
  
    _handleSelectClick() {
        this.highlighted = !this.highlighted;
  
        this.timelineView.itemHighlightChanged(this);
    }
  
    get timelineView():TimelineView {
        let tlv = this.closest('timeline-view')!;
        return (tlv as TimelineView);
    }
  
    get expanded() {
        var target = document.getElementById(this.subgroup);
        if (target) {
            return !target.hasAttribute('collapsed');
        }
    
        return false;
    }
  
    saveExpanded() {
        if (this.itemId != "") {
            window.sessionStorage.setItem('timeline-item-expanded-' + this.itemId, this.expanded ? "expanded" : "collapsed");
        }
    }
  
    setExpanded(expanded: boolean) {
        var target = document.getElementById(this.subgroup);
        if (!target) return;
    
        if (expanded) {
            target.removeAttribute('collapsed');
        } else {
            target.setAttribute('collapsed', 'true');
        }
    
        this.requestUpdate();
    }
  
    static styles = css`
      :host {
      }
  
      .row {
        display: grid;
        border-bottom: var(--below-item-bottom-border, 1px) solid #555;
        grid-template-columns: var(--topic-width, 200px) auto;
        width: 20000px;
      }
      
      .row.highlighted .sidebar {
        background-color: #eaf0ff;
      }
      .row.highlighted .visual {
        background-color: #e5f0ff;
      }
  
      .sidebar {
        position: -webkit-sticky;
        position: sticky;
        grid-column: 1;
        left: 0px;
        width: var(--topic-width, 200px);
        height: 100%;
        background-color: #fff;
        border-bottom: var(--below-item-bottom-border, 1px) solid #888;
        border-right: 1px solid #888;
        z-index: 1;
      }
  
      .sidebar.expandable {
        cursor: pointer;
      }
  
      .sidebar.expandable span.expand {
        
      }
  
      .sidebar span.expand {
        display: inline-block;
        width: 10px;
        font-size: 16px;
        color: #666;
      }
      
      .sidebar span.colorbar {
        display: inline-block;
        width: 4px;
        height: 15px;
  
        background-color: var(--trace-span-color, #aaa);
        border-radius: 3px;
        position: relative;
        top: 2px;
        margin: 0 1px;
      }
  
      .sidebar div.label {
        padding: var(--sidebar-label-top-padding, 12px) 6px 0px 6px;
        font-size: 14px;
        color: #333;
        white-space: nowrap;
        overflow: hidden;
      }
  
      .sidebar span.description {
        color: #888;
        font-size: 12px;
        margin-left: 5px;
      }
  
      .visual {
        grid-column: 2;
        background-color: #fff;
        width: 20000px;
        line-height: 0px;
      }
    `;
  
    render() {
        return html`
            <div class="row ${this.highlighted ? 'highlighted' : ''}" @click="${this._handleSelectClick}">
            <div class="sidebar ${this.subgroup == '' ? '' : 'expandable'}">
                <div class="label" style="margin-left: ${this.groupIndent * 20}px;">
                <span class="expand" @click="${this._handleExpandClick}">${this.subgroup == '' ? '' : (this.expanded ? html`&blacktriangledown;` : html`&blacktriangleright;`)}</span>
                <span class="colorbar"></span>
                ${this.name}
                <span class="description" title="${this.description}">${this.description}</span>
                </div>
            </div>
    
            <div class="visual"><slot></slot></div>
            </div>
        `;
    }
}
