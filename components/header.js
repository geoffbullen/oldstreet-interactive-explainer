class Header extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          <style>
            .header-wrap {
                position: relative;
                min-height: 80px;
                width: 100%;

            }

            .header-bottom-border-image{
                position: absolute;
                bottom: 0;
                left:0;
            }

            .header-nav-image{
                height: 49px;
                margin-left: 50px !important;
                margin-top: 10px;
            }
          </style>
          <header>
            <div class="header-wrap">
                <a href="https://www.oldstreetsolutions.com/">
                    <img class="header-nav-image" src="assets/title_bar.jpg" />
                    <img class="header-bottom-border-image" src="assets/oldstreet_border_bottom.svg" />
                </a>
            </div>
          </header>
        `;
    }
}
customElements.define('header-component', Header);