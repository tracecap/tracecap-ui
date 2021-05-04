import { LitElement, property } from 'lit-element';

export class TimelineBaseWidget extends LitElement {
    @property({ type: Number }) widthPerMillisecond = 400 / 1000; // 400px per 1000ms

    updated() {
        for (const child of Array.from(this.children)) {
            // propagate viewport properties down to children of the right type
            if (child instanceof TimelineBaseWidget) {
                let baseWidget = child as TimelineBaseWidget;
                baseWidget.widthPerMillisecond = this.widthPerMillisecond;
            }
        }
    }
}
