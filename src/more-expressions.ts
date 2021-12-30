import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("more-expressions")
export class MoreExpressions extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #999;
    }
  `;

  @property({ type: Boolean })
  checked: boolean = false;

  @state()
  inputValue = "";

  render() {
    return html`
      <div>
        <input
          type="text"
          .value=${this.inputValue}
          ?disabled=${!this.checked}
          @input=${this._onInputChange}
        />
      </div>
      <label
        ><input type="checkbox" @change=${this.setChecked} /> Enable
        editing</label
      >
      <p>inputValue: ${this.inputValue}</p>
    `;
  }

  setChecked(event: Event) {
    this.checked = (event.target as HTMLInputElement).checked;
  }

  private _onInputChange(event: { target: HTMLInputElement }) {
    this.inputValue = event.target.value;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "more-expressions": MoreExpressions;
  }
}
