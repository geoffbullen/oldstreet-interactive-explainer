class Header extends HTMLElement {

    constructor() {
        super();
    }

    get data() {
        return fetch('components/header-nav-links-data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status)
                }
                return response.json();
            })
            .then(json => {
                return json
            })
            .catch((err) => {
                console.log('error', err)
            })
    }

    connectedCallback() {
        this.data.then((navLinks) => {
            let navStr = '';
            navLinks.forEach(nav => {
                const str = `
                <a href="${nav.link}">
                    <div>${nav.name}</div>
                </a>
                `
                navStr += str;
            })
            this.innerHTML = `
          <style>
            .header-container{
                position: relative;
                margin:0 auto;
                min-height: 76px;
                max-width: 1200px;
                width: 100%;
                display: flex;  
            }
            .header-wrap {
                border-bottom-width: 7px;
                border-bottom-style:solid;
                border-image:
                    linear-gradient(
                        to right,
                        #EED83E 0%,
                        #E84247 25%,
                        #9D297B 50%,
                        #0F5487 75%,
                        #5BB682 100%
                    ) 0 0 1 0;
            }
            .header-nav-image{
                max-height: 100px;
                margin-top: -20px;
                margin-bottom:-25px;
                width:200px;
            }
            .header-container > a{
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
            }
            .header-nav-links {
                display:flex;
                flex:1;
                align-items:flex-end;
                justify-content:flex-end;
                margin:0 12px;
            }
            .header-nav-links > a {
                color: #000000;
                font-family: AvenirMedium, Inter;
                font-weight: 600;
                font-size: 16px;
                margin-bottom: 4px;
            }
            .header-nav-links > a > div{
                padding: 4px 12px;
            }
            .header-nav-links > a > div:hover{
                background:#064789;
                color:white;
            }
          </style>
          <header>
            <div class="header-wrap">
                <div class="header-container">
                    <a href="https://www.oldstreetsolutions.com/">
                        <img class="header-nav-image" src="assets/old-street-header-logo.svg" />
                    </a>
                    <div class="header-nav-links">
                        ${navStr}
                    </div>
                </div>
            </div>
          </header>
        `;
        })
    }
}
customElements.define('header-component', Header);