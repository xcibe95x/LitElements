import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("call-back")
export class CallBack extends LitElement {
  @property()
  event = {};

  internalEvent() {
    // @ts-ignore
    window[this.event]();
  }

  render() {
    return html`<button @click=${this.internalEvent}>Call my Function</button>`;
  }
}
