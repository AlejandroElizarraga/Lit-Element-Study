import { LitElement, html, css } from 'lit-element';

class RandomLink extends LitElement {
  static get properties() {
    return {
      url: { type: String }
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
    this.url = (Math.round(Math.random())) ? 'https://desarrolloweb.com' : 'https://escuela.it';
  }
  render() {
    return html`
      <a href="${this.url}">Enlace aleatorio</a>
    `;
  }
}

customElements.define('random-link', RandomLink);