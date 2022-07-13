// Default Imports to get Lit to Work
import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

// Decorator that the define the custom tag of the component
@customElement("simple-greeting")
export class SimpleGreeting extends LitElement {
  // This is how we can style our components
  static styles = css`
    p {
      color: blue;
    }
  `;

  // We can set properties that can be used with the this keyword
  @property()
  name = "World";

  // With the rendor Method we inject our html in the page
  // As you can see we can do interpolations and use the properties we set
  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
