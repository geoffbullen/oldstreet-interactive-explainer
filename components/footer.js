class Footer extends HTMLElement {

    constructor() {
        super();
    }

    get data() {
        return fetch('data/footer-nav-links-data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                return response.json()
            })
            .then(json => {
                return json
            })
            .catch((err) => {
                console.log('error', err)
            })
    }

    connectedCallback() {
        this.data.then((navData) => {
            let quickLinksStr = '';
            navData.quickLinks.forEach(quickLink => {
                const str = `
                    <li>
                        <a href=${quickLink.link}>${quickLink.name}</a>
                    </li>
                `
                quickLinksStr += str
            })
            let importantLinksStr = '';
            navData.importantLinks.forEach(importantLinks => {
                const str = `
                    <li>
                        <a href=${importantLinks.link}>${importantLinks.name}</a>
                    </li>
                `
                importantLinksStr += str
            })
            let socialsStr = '';
            navData.socials.forEach(social => {
                const str = `
                    <li>
                        <a href=${social.link}>
                            ${social.svg}
                        </a>
                    </li>
                `
                socialsStr += str
            })
            this.innerHTML = `
          <style>
            footer{
                padding:80px 0;
            }
            .footer-container {
                position:relative;
                max-width:1350px;
                margin: 0 auto;
                display:flex;
            }
            .footer-element {
                padding-right: 40px;
                padding-bottom: 20px;
            }
            .footer-element > h3{
                font-family: Bebas Neue;
                font-size: 25px;
                text-transform: uppercase;
                margin-bottom: 30px;
            }
            .stack-horizontal > ul,
            .footer-element > ul {
                list-style:none;
            }
            .footer-element > ul > li {
                margin: 0 0 9.5px;
            }
            .footer-element > ul > li >  a,
            .footer-element > p {
                font-family: AvenirMedium, Inter;
                font-size: 19px;
            }
            .footer-element > ul > li > a {
                text-decoration:none;
                color:black;
                cursor:pointer;
                margin: 0 0 9.5px;
            }
            .stack {
                display:flex;
                flex-direction:column;
            }
            .stack-horizontal > ul {
                display:flex;
                flex-dirction:row;
                flex-wrap: wrap;
                gap: 18px;
            }
            .stack-horizontal > ul > li {
                background-color: #f8323b!important;
                border-radius: 5px;
            }
            .stack-horizontal > ul > li > a {
                display: flex;
                align-items: center;
                padding: 8px;
            }
            .stack-horizontal > ul > li > a > svg {
                color: white;
                fill: white;
                width: 36px;
                height:36px;
            }
            .stack,
            .footer-element {
                flex:1;
            }
            .footer-small-text,
            .footer-small-text > a{
                text-decoration:none;
                color:black;
                font-size:14px !important;
                margin-bottom: 21px;
            }
          </style>
          <footer>
            <div class="footer-container">
                <div class="footer-element">
                    <h3>About Old Street Solutions</h3>
                    <p>We’re a global Atlassian Platinum Solution Partner that makes software to simplify Atlassian’s powerful platforms. Our flagship app, Custom Charts for Jira, continues to be one of the fastest growing paid apps in the Atlassian Marketplace.</p>
                </div>
                <div class="stack">
                    <div class="footer-element">
                        <h3>Get in touch</h3>
                        <p class='footer-small-text'>
                            <span><img width='10' height='15' src='https://www.oldstreetsolutions.com/wp-content/uploads/2022/03/Footer-icons_Geotag.svg'/></span>
                            128 City Road, London, EC1V 2NX
                        </p>
                        <p class='footer-small-text'>
                            <span><img width='10' height='8' src="https://www.oldstreetsolutions.com/wp-content/uploads/2022/03/Footer-icons_email-icon.svg"/></span>
                            <a href='mailto:morgan.folsom@oldstreetsolutions.com'>morgan.folsom@oldstreetsolutions.com</a>
                        </p>
                    </div>
                    <div class="footer-element">
                        <h3>Be social with us!</h3>
                        <div class="stack-horizontal">
                            <ul>
                                ${socialsStr}
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-element">
                    <h3>Quick links</h3>
                    <ul>
                        ${quickLinksStr}
                    <ul>
                </div>
                <div class="footer-element">
                    <h3>Important links</h3>
                    <ul>
                        ${importantLinksStr}
                    <ul>
                </div>
            </div>
          </footer>
        `;
        })
    }
}
customElements.define('footer-component', Footer);