import { LitElement, html, css } from 'lit-element';

class BindToevent  extends LitElement {
  static get is() {
    return 'bind-toevent';
  }

  static get properties() {
    return {
        activo:{type: Boolean}
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
    this.activo=true;
  }

  render() {
    return html`
     <p>
        ${this.activo? 'Activo' : 'Inactivo'}
        <input type="checkbox" ?checked="${this.activo}" @change="${this.doChange}">
     </p>
    `;
  }
  doChange(e) {
    this.activo = e.target.checked;
  }
}

customElements.define(BindToevent.is, BindToevent);