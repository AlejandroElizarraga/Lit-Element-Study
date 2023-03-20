import { LitElement, html, css } from 'lit-element';
import './my-condicional.js';

class MyContactList extends LitElement {
  
  static get styles() {
    return css`
      div {
        border:#1a2e solid 4px
      }
    `;
  }

  static get properties() {
    return {
      contactos: {
        type: Array
      }
    };
  }

  constructor() {
    super();  
    this.contactos = [
      {
        nombre: 'Miguel Angel Alvarez',
        email: 'miguel@desarrolloweb.com'
      },
      {
        nombre: 'Alvaro Martínez',
        email: 'contacto@escuela.it'
      },
      {
        nombre: 'Jhon Doe',
        email: 'jhon@example.com'
      },
    ]
  }
  render() {
    return html`
      <div>
        ${this.contactos.map(contacto => html`
            <my-contact 
                nombre="${contacto.nombre}" 
                email="${contacto.email}"
            ></my-contact>`)}
      </div>
    `;
  }

}

customElements.define('my-contact-list', MyContactList);