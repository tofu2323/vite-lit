import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("welcome-banner")
export class WelcomeBanner extends LitElement {
  @property({ type: String })
  name = "";

  render() {
    return html`<h1>Hello, ${this.name}</h1>`;
  }
  protected firstUpdated(
    _changedProperties: Map<string | number | symbol, unknown>
  ): void {
    console.log("firstUpdated");
    console.log(_changedProperties);
  }

  willUpdate(_changedProperties: Map<string | number | symbol, unknown>): void {
    console.log("willUpdate");
  }
  connectedCallback(): void {
    super.connectedCallback();
    console.log("connectedCallback");
  }
  protected updated(
    _changedProperties: Map<string | number | symbol, unknown>
  ): void {
    console.log("updated");
    console.log(_changedProperties);
  }
  disconnectedCallback(): void {
    super.disconnectedCallback();
    console.log("disconnectedCallback");
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "welcome-banner": WelcomeBanner;
  }
}
