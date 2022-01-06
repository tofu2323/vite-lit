import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { UpdateCounterEvent } from "./counter-button";

@customElement("my-counter")
export class MyCounter extends LitElement {
  @property({ type: Number }) count = 0;

  addToCounter(e: UpdateCounterEvent) {
    // Get step from detail of event or via @query
    this.count += e.detail.step;
  }

  render() {
    return html`
      <div @update-counter="${this.addToCounter}">
        <h3>&Sigma; ${this.count}</h3>
        <counter-button step="-1"></counter-button>
        <counter-button step="1"></counter-button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-counter": MyCounter;
  }
}
