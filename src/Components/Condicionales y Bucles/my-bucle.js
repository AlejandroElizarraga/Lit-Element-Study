import { LitElement, html, css } from 'lit-element';

class MyBucle  extends LitElement {

  static get is() {
    return 'my-bucle';
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
        frutas:{type: Array}
    };
  }

  constructor() {
    super();
    this.frutas=['Manzana','Pera','Durazno','Naranja','Uva']
  }

  render() {
    return html`
        <ul>
        ${this.frutas.map((fruta,index) => html`<li>${index+1} - ${fruta}</li>`)}
        </ul>
    `;
  }
}

customElements.define(MyBucle.is, MyBucle);