import { LitElement, html, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("computing-values")
export class ComputingValues extends LitElement {
  @property() forward = "";
  @property() backward = "";

  onInput(e: Event) {
    const inputEl = e.target as HTMLInputElement;
    if (inputEl.id === "forward") {
      this.forward = inputEl.value;
    } else {
      this.backward = inputEl.value;
    }
  }

  willUpdate(changedProperties: PropertyValues<this>) {
    if (changedProperties.has("forward")) {
      this.backward = this.forward.split("").reverse().join("");
    }

    if (changedProperties.has("backward")) {
      this.forward = this.backward.split("").reverse().join("");
    }
  }

  render() {
    return html`
      <label
        >Forward:
        <input id="forward" @input=${this.onInput} .value=${this.forward}
      /></label>
      <label
        >Backward:
        <input id="backward" @input=${this.onInput} .value=${this.backward}
      /></label>
      <div>Forward text: ${this.forward}</div>
      <div>Backward text: ${this.backward}</div>
    `;
  }
}
