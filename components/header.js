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
                display: flex;
                justify-content: center;

            }

            .header-bottom-border-image{
            }

            .header-nav-image{
                max-height: 49px;
                margin-top: 10px;
            }
            .header-wrap > a{
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
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