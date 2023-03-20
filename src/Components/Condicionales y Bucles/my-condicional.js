import { LitElement, html, css, nothing } from 'lit-element';

class MyContact  extends LitElement {
  static get is() {
    return 'my-contact';
  }
  static get styles() {
    return css`
      :host {
        display: block;
        border: black solid 2px;
        padding:6px;
        margin-bottom:2px;
      }
      div {
        border: 1px solid #ddd;
        padding: 10px;
        border-radius: 5px;
        display: inline-block;
      }
      h1 {
        font-size: 1.2em;
        font-weight: normal;
      }
      a{
        text-decoration:none;
        color:#11b2a9;
      }
    `;
  }
  static get properties() {
    return {/* Se declaran las propiedades que sean reactivas*/
      nombre: { type: String },
      email: { type: String },
      verMas: { type: Boolean }
    };  
  }
  constructor(){
    super();/* Se llama a los metodos de la clase padre(LitElement) */
    this.verMas = false;/* Se inicializan los valores de las props que lo requeran*/
  }
  render() {
    return html`
        <div>
          <h1>${this.nombre}</h1>
          <p><a href="#" @click="${this.togglechange}">Ver más</a></p>
          ${this.verMas?
            html`Email :${this.email}`:nothing
          }
        </div>
        `;
  }
  togglechange(e){
    e.preventDefault();
    this.verMas=!this.verMas;
  }
}
customElements.define(MyContact.is, MyContact);