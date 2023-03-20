import { LitElement, html, css } from 'lit';
import './listElement';

class ColorList extends LitElement {
  static get properties() {
    return {
      colors: { type: Array }
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
    this.colors = ['Rojo', 'Verde', 'Amarillo', 'Azul'];
  }
  render() {
    return html`
      <list-element items="${this.colors}"></list-element>
    `;
  }
}

customElements.define('color-list', ColorList);