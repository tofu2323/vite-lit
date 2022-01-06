import "./my-element";
import "./more-expressions";
import "./todo-list";
import "./welcome-banner";
import "./lit-clock";
import "./clock-element";
import "./counter-button";
import "./my-counter";
import "./lit-style";

import { html, render } from "lit";

const element = html`<lit-style></lit-style>`;

render(element, document.getElementById("root"));
