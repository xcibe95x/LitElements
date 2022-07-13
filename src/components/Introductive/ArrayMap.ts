import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";

// This example shows how you can use the Built In Map directive
// It let you transform the items in an interable, it works with arrays, sets and maps

@customElement("array-map")
export class ArrayMap extends LitElement {
  @state()
  items = new Set(["Apple", "Banana", "Grape", "Orange", "Lime"]);

  render() {
    return html`
      <p>My unique fruits</p>
      <ul>
        ${map(this.items, (item) => html`<li>${item}</li>`)}
      </ul>
    `;
  }
}
