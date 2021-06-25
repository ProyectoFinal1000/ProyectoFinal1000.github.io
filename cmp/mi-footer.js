class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Alan Daniel Castro Hernandez.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
