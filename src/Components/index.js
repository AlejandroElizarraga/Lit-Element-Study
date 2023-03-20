import { LitElement, html, css } from 'lit-element';
// local components
import "./my-component"
import "./Condicionales y Bucles/my-ternario"
import "./Condicionales y Bucles/my-condicional"
import "./Condicionales y Bucles/my-bucle"
import "./Condicionales y Bucles/my-contactlist"
import "./Bindings/bind-totext"
import "./Bindings/bind-toattribute"
import "./Bindings/bind-tobool"
import "./Bindings/listElement"
import "./Bindings/bind-toevent"

class Index  extends LitElement {
  static get is() {
    return 'index-component';
  }
  render() {
    return html`
      <my-component></my-component>
      <my-element></my-element>
      <my-contact nombre="Alejandro" email="AlejandroElizarraga1302@gmail.com"></my-contact>
      <my-bucle></my-bucle>
      <my-contact-list></my-contact-list>
      <my-msg text="Aprendo LitElement en DesarrolloWeb"></my-msg>
      <random-link></random-link>
      <si-no></si-no>
      <bind-toevent></bind-toevent>
      <color-list></color-list>
    `;
  }
}
customElements.define(Index.is, Index);