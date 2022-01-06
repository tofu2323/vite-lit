import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

const ORANGE = css`orange`;

@customElement("lit-style")
export class LitStyle extends LitElement {
  static styles = [
    css`
      #orange {
        color: ${ORANGE};
      }

      #purple {
        color: rebeccapurple;
      }
    `,
  ];

  render() {
    return html`
      <div>
        <h1 id="orange">This text is orange</h1>
        <h1 id="purple">This text is rebeccapurple</h1>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-style": LitStyle;
  }
}
