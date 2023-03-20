import { LitElement, html, css } from 'lit-element';

class MyMsg extends LitElement {
  static get properties() {
    return {
      text: { type: String }
    };
  }
  static get styles() {
    return css`
      :host {
        display: block;
        border: black solid 2px;
        padding:6px;
        margin-bottom:2px;
        margin-top:2px;
      }
    `;
  }
  render() {
    return html`
      <p>${this.text}</p>
    `;
  }
}

customElements.define('my-msg', MyMsg);