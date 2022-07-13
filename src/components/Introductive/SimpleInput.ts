import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

// In this example we can see a Simple Input
// The input has a Declarative Event Listener @input

// We can also add more expressions
// For example there is a checkbox that will disable the input box
// I added a boolean property
// And in the input box i added ?disabled=${!this.checked} that will check if the input is disabled

@customElement("simple-input")
export class NameTag extends LitElement {
  // I wrote this boolean this way as a warning would popup if wrote the way it was on the docs
  @property({ type: Boolean }) checked = false;
  @property() name: string = "Your name here";

  render() {
    return html`
      <p>Hello, ${this.name}</p>
      <input
        ?disabled=${!this.checked}
        @input=${this.changeName}
        placeholder="Enter your name"
      />
      <label
        ><input type="checkbox" @change=${this.setChecked} /> Enable
        editing</label
      >
    `;
  }

  // The input is listening to this method
  // Which will detect any input change and show it on screen
  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name = input.value;
  }

  // This even will now check if our target is checked or not
  setChecked(event: Event) {
    this.checked = (event.target as HTMLInputElement).checked;
  }
}
