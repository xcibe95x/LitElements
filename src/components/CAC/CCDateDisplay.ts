import { LitElement, html, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { dateConverter } from "./DateConverter";

// Custom Converter Date Display

@customElement("ccdate-display")
export class CCDateDisplay extends LitElement {
  @property({
    converter: dateConverter(navigator.language),
    reflect: true,
  })
  date = new Date();

  render() {
    const locale = "en-US";
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return html`
      <p>The given date is: ${this.date.toLocaleDateString(locale, options)}</p>
    `;
  }
}
