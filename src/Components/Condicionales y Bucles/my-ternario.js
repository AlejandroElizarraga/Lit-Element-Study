import { LitElement, html, css } from 'lit-element';

class MyElement extends LitElement {

  static get is() {
    return 'my-element';
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
    return {
        activo:{ typer:Boolean}
    };
  }

  constructor() {
    super();
    this.activo=true;
    this.hora='01:12';
    this.horaDescanso='12:01'
  }

/*   render() {
    return html`
      <div>
        ${this.activo?'Estoy Activo':'Estoy Inactivo'}
      </div>
    `;
  } *//* Es un ejemplo simple de condicional, donde se usa en la template una operacion ternaria */
  render(){
    return html`
    <div>
        ${this.activo
           ? html`<p>Estoy activo a las ${this.hora}</p>`
           : html`<p>Estoy inactivo desde las ${this.horaDescanso}</p>`   
        }
        <button @click="${this.changestate}" >Click aquí!</button>
    </div>
    `
  }
    changestate=()=>{this.activo=!this.activo}
}

customElements.define(MyElement.is, MyElement);