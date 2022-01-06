import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("lit-clock")
export class LitClock extends LitElement {
  @state()
  private date = new Date();
  private timerId = -1;

  connectedCallback(): void {
    super.connectedCallback();
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.date = new Date();
  }

  render() {
    return html`<div>
      <h1>Hello, World!</h1>
      <h2>It is ${this.date.toLocaleTimeString()}</h2>
    </div> `;
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    clearInterval(this.timerId);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-clock": LitClock;
  }
}
