class CallToAction extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          <style>
            .container{
                background: linear-gradient(79.94deg, #E73041 0.57%, #004179 101.3%);
                width:100%;
                height: 500px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            button{
                box-sizing: border-box;
                justify-content: center;
                align-items: center;
                padding: 6px 28px;
                border: 1px solid #FFFFFF;
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 24px;
                text-align: center;
                letter-spacing: -0.01em;
                color: #FFFFFF;
                background-color: transparent;
                cursor:pointer;
            }
            .btn-group{

            }
            .cta-h1{
                font-style: normal;
                font-weight: 700;
                font-size: 96px;
                line-height: 116px;
                text-align: center;
                letter-spacing: -0.03em;
                color: #FFFFFF;
                padding: 20px 28px;
            }

            .cta-p{
                color:white;
                font-size:28px;
            }

            .btn-primary{
                background: white;
                color: black;
            }
            .btn-icon{
                height:18px;
                margin-right:-3px;

            }
          </style>
          <div class="container">
            <p class="cta-p">Custom charts for Jira</p>
            <h1 class="cta-h1">Get charting.</h1>
            <div class="btn-group">
                <button onclick="window.location.href = 'features.html'">Browse features</button>
                <button class="btn-primary" onclick="window.location.href = 'https://marketplace.atlassian.com/apps/1220925/custom-charts-for-jira-reports?hosting=cloud&tab=overview'">
                    <svg class="btn-icon" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.82944 11.0688C7.46867 10.6719 6.92755 10.7079 6.67502 11.1769L0.8306 22.9017C0.614143 23.3707 0.938899 23.9119 1.44397 23.9119H9.59714C9.84967 23.9119 10.1022 23.7676 10.2104 23.515C11.9781 19.8713 10.8959 14.3517 7.82944 11.0688Z" fill="url(#paint0_linear_20_578)"/>
                        <path d="M12.123 0.426392C8.84006 5.62137 9.05652 11.3574 11.2211 15.6866C13.3857 20.0157 15.0452 23.2987 15.1535 23.5513C15.2617 23.8038 15.5142 23.948 15.7667 23.948H23.9199C24.425 23.948 24.7858 23.4069 24.5333 22.9379C24.5333 22.9379 13.566 1.00365 13.2774 0.462503C13.061 -0.0786396 12.4477 -0.0786748 12.123 0.426392Z" fill="black"/>
                        <defs>
                            <linearGradient id="paint0_linear_20_578" x1="11.0312" y1="12.8676" x2="4.85086" y2="23.5723" gradientUnits="userSpaceOnUse">
                            <stop stop-opacity="0.4"/>
                            <stop offset="0.9228"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    Install on Atlassian Marketplace
                </button>
            </div>
          </div>
        `;
    }
}
customElements.define('call-to-action-component', CallToAction);