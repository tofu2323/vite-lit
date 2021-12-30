import { html, css, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-element")
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    :host > * {
      margin-top: 16px;
    }
    .wrapper {
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = "World";

  @state()
  protected localState = "Hello";

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <div class="wrapper">
        <h1>${this.localState}, ${this.name}!</h1>
        <button
          @click=${this._onClick}
          part="button"
          ?disabled=${this.count === 11}
        >
          Click Count: ${this.count}
        </button>
        <slot></slot>
      </div>
      <more-expressions></more-expressions>
      <todo-list></todo-list>
    `;
  }

  private _onClick() {
    this.count++;
    if (this._needsToChange()) {
      this.localState = "Hellooooooo!!!!";
    }
  }

  foo(): string {
    return "foo";
  }

  private _needsToChange(): boolean {
    return this.count === 10;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
