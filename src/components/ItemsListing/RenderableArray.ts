import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { TemplateResult } from "lit";

// Renderable Array
// You can find more info on Working With lists tutorial on Lit docs

@customElement("renderable-array")
export class RenderableArray extends LitElement {
  @state()
  friends = ["Harry", "Ron", "Hermione"];

  @state()
  pets = [
    { name: "Hedwig", species: "Owl" },
    { name: "Scabbers", species: "Rat" },
    { name: "Crookshanks", species: "Cat" },
  ];

  @state()
  includePets = true;

  // Make the logic a private method out of the render
  private showList() {
    const listItems: TemplateResult[] = [];

    this.friends.forEach((friend) => {
      listItems.push(html`<li>${friend}</li>`);
    });

    if (this.includePets) {
      this.pets.forEach((pet) => {
        listItems.push(html`<li>${pet.name} (${pet.species})</li>`);
      });
    }
    return listItems;
  }

  render() {
    return html`
      <button @click=${() => this._togglePetVisibility()}>
        ${this.includePets ? "Hide" : "Show"} pets
      </button>
      <p>My magical friends</p>
      <ul>
        ${this.showList()}
      </ul>
    `;
  }

  private _togglePetVisibility() {
    this.includePets = !this.includePets;
  }
}
