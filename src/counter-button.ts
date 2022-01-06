import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

export interface UpdateCounterEvent extends CustomEvent<{ step: number }> {}

@customElement("counter-button")
export class CounterButton extends LitElement {
  @property({ type: Number }) step: number = 0;

  onClick() {
    this.dispatchEvent(
      new CustomEvent("update-counter", {
        bubbles: true,
        detail: {
          step: this.step,
        },
      }) as UpdateCounterEvent
    );
  }

  render() {
    const label = this.step < 0 ? `- ${-1 * this.step}` : `+ ${this.step}`;
    return html`<button @click=${this.onClick}>${label}</button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "counter-button": CounterButton;
  }
}
