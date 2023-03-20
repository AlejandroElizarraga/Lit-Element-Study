import { LitElement, html, css } from 'lit-element';

class MyComponent  extends LitElement {
  static get is() {
    return 'my-component';
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
  static get properties() {
    return {/* Se declaran las propiedades que sean reactivas*/
      clicks: { type: Number }
    };  
  }
  constructor(){
    super();/* Se llama a los metodos de la clase padre(LitElement) */
    this.clicks=0;/* Se inicializan los valores de las props */
  }
  render() {
    return html`
        <p>Hola LitElement</p>
        <p>Clicks realizados: ${this.clicks}</p>
        <button @click="${this.incrementarclick}">Haz click aquí!</button>
    `;
  }
  incrementarclick(){
    this.clicks ++;
  }
}
customElements.define(MyComponent.is, MyComponent);