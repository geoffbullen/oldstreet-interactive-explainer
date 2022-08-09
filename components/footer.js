class Footer extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          <style>
            .footer-img{
                height: 300px;
                background-image: url(assets/footer_placeholder.png);
                background-size: cover;
                max-width: 1000px;
            }
          </style>
          <footer>
             <div class="footer-img"></div>
          </footer>
        `;
    }
}
customElements.define('footer-component', Footer);