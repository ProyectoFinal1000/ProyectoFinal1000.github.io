import {
  cargaRoles
} from "../js/seguridad.js";
import {
  getAuth
} from "../lib/fabrica.js";
import {
  muestraError
} from "../lib/util.js";

class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ul>
        <li>
          <a href="index.html">
            SESION</a>
        </li>
      </ul>`;
    this.ul =
      this.querySelector("ul");
    getAuth().onAuthStateChanged(
      usuario => this.
        cambiaUsuario(usuario),
      muestraError);
  }
  
  async cambiaUsuario(usu) {
    if (usu && usu.email) {
      let html = "";
      const roles =
        await cargaRoles(
          usu.email);
    
      if (roles.has("Cliente")) {
        html += /* html */
          `<li>
            <a href=
              "chat.html">CHAT</a>
          </li>
          <li>
            <a href=
"registros.html">Operaciones</a>
          </li>
          `;
      }
     
      if (roles.has(
        "Administrador")) {
        html += /* html */
          `
          <li>
            <a href=
      "usuarios.html">CLIENTES</a>
          </li>`;
      }
      this.ul.innerHTML += html;
    }
  }
}

customElements.define(
  "mi-nav", MiNav);
