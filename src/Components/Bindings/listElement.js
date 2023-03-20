import { LitElement, html, css } from 'lit';

class ListElement extends LitElement {
  static get properties() {
    return {
      items: { type: Array }    
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
  
  render() {
    return html`
      <ul>
        ${this.items.map(item => html`<li>${item}</li>`)}
      </ul>
    `;
  }
}

customElements.define('list-element', ListElement);