import { LitElement, html, css } from 'lit-element';

class SiNo extends LitElement {
  static get properties() {
    return {
      activo: { type: Boolean }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        border: black solid 2px;
        padding:6px;
        margin-bottom:2px;
      }
    `;
  }

  constructor() {
    super();
    this.activo = true;
  }
  render() {
    return html`
      <p>
        <input type="checkbox" ?checked="${this.activo}">
      </p>
    `;
  }
}

customElements.define('si-no', SiNo);