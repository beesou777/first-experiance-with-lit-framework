import { html, LitElement,css } from "lit";
import "./component/card"; 

class MainApp extends LitElement {
  render() {
    return html`
      <h1>Developer Articles</h1>
      <dev-card></dev-card>
    `;
  }
  static get styles(){
      return css`
        h1{
          text-align:center;
          font-family:arial;
        }
      `
  }
}


customElements.define("my-element", MainApp);
