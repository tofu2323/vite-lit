---
to: src/<%= fileName %>.ts
---
<%
 tagName = fileName
 ClassName = h.changeCase.pascal(fileName)
%>import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("<%= tagName %>")
export class <%= ClassName %> extends LitElement {
  render() {
    return html`<p>TODO: <%= fileName %></p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "<%= tagName %>": <%= ClassName %>;
  }
}
