import { LitElement, html, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./styles";

@customElement("image-slideshow")
export class ImageSlideshow extends LitElement {
  static styles = styles;

  private validatedcurrentSlide = 0;

  @property({ type: Number })
  currentSlide = 0;

  get totalSlides() {
    return this.childElementCount - 1;
  }

  hasValidIndex() {
    return this.currentSlide >= 0 && this.currentSlide <= this.totalSlides;
  }

  render() {
    if (this.hasValidIndex()) {
      this.validatedcurrentSlide = this.currentSlide;
    }

    return html`
      <div id="imageSlideshow" class="fade">
        <slot name="currentSlide"></slot>
        <a @click=${() => this.switchSlide(1)} class="slideshow-next"
          >&#10095;</a
        >
        <a @click=${() => this.switchSlide(-1)} class="slideshow-prev"
          >&#10094;</a
        >
      </div>
    `;
  }

  private previous = 0;
  protected updated(changedProperties: PropertyValues) {
    if (changedProperties.has("currentSlide") && this.hasValidIndex()) {
      this.updateSlots();
      this.previous = this.currentSlide;
    }
  }

  private updateSlots() {
    this.children[this.previous]?.removeAttribute("slot");
    this.children[this.currentSlide]?.setAttribute("slot", "currentSlide");
  }

  private switchSlide(value: number) {
    console.log(this.currentSlide);
    const i = (this.currentSlide += value);
    this.currentSlide = i > this.totalSlides ? 0 : i < 0 ? this.totalSlides : i;
  }
}
