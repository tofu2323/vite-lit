import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { ClockController } from "./clock";

@customElement("clock-element")
export class ClockElement extends LitElement {
  private readonly clock = new ClockController(this);

  render() {
    return html`
      <div>
        <h1>Hello, world!</h1>
        <h2>It is ${this.clock.date.toLocaleTimeString()}.</h2>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "clock-element": ClockElement;
  }
}
