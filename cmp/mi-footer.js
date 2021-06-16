class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Castro Hernandez Alan Daniel.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
