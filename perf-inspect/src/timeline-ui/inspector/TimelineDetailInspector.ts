import { LitElement, html, svg, css, property, customElement } from 'lit-element';
import { Tab, Tabs } from '@spectrum-web-components/tabs';

@customElement('timeline-detail-inspector')
export class TimelineDetailInspector extends LitElement {
    private currentValue = 0;

    constructor() {
        super();
    }
    static styles = css`
        div {
            
        }

        sp-tabs {
            background-color: #fff;
            position: sticky;
            top: 0;
        }
    `;

    private get tabContainer(): Tabs {
        return this.shadowRoot!.querySelector('sp-tabs')!;
    }

    clearTabs() {
        while (this.firstChild)
            this.removeChild(this.firstChild);
        while (this.tabContainer.firstChild)
            this.tabContainer.removeChild(this.tabContainer.firstChild);
        this.currentValue = 0;
    }

    addTab(label:string, content: HTMLElement) {
        let t = new Tab();
        t.label = label;
        t.value = this.currentValue.toString();
        this.tabContainer.append(t);

        // add the element inside the main element, aka in the slot
        content.setAttribute('tab-value', t.value);
        content.style.display = 'none';
        this.append(content);

        if (this.currentValue == 0) {
            // first tab: select it, too
            this.tabContainer.selected = t.value;
            this.tabChanged(null);
        }

        this.currentValue++;
    }

    tabChanged(e: (Event | null)) {
        let selectedValue = this.tabContainer.selected;

        this.childNodes.forEach(element => {
            let el = (element as HTMLElement);
            let visible = (selectedValue == el.getAttribute('tab-value'));
            el.style.display = visible ? 'block' : 'none';
        });
    }
    
    render() {
        return html`
        <div style="height: 100%; overflow: hidden;">
        <sp-tabs selected="0" compact @change="${this.tabChanged}">
        </sp-tabs>
        <div style="height: 100%; overflow: hidden; box-sizing: border-box; padding-bottom: 30px;">
        <slot></slot>
        </div>
        </div>
        `;
    }
}
