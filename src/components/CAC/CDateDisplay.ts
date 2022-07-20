import { LitElement, html, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";

// Converted Date Display

@customElement("cdate-display")
export class CDateDisplay extends LitElement {
  @property({ attribute: false })
  date = new Date();

  // We add a HTML custom Attribute
  @property({ type: String, attribute: "date-str" })
  dateStr = "";

  // We reconcile the values when the attribute is changed with the WillUpdate method
  // This Works but it is not recommended in a project, instead use a custom attribute converter.
  willUpdate(changed: PropertyValues<this>) {
    if (changed.has("dateStr") && this.dateStr) {
      this.date = new Date(this.dateStr);
    }
  }

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
