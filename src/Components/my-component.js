import { LitElement, html, css } from 'lit-element';

class MyComponent  extends LitElement {

  static get is() {
    return 'my-component';
  }


  render() {
    return html`
      
    `;
  }
}
customElements.define(my-component.is, My-Component);