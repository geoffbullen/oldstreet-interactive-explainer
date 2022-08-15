class CallToActionButtonStack extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const showCaseOrFeatures = this.getAttribute('secondary-button');
        let secondButton = '';
        switch (showCaseOrFeatures) {
            case 'showcase':
                secondButton += `<button class="blue-btn-secondary" onclick="window.location.href = 'index.html'">View showcase</button>`
                break;
            case 'features':
                secondButton += `<button class="blue-btn-secondary" onclick="window.location.href = 'features.html'">Browse features</button>`
                break;
        }
        this.innerHTML = `
        <button class="blue-btn-primary"
                            onclick="window.open('https://marketplace.atlassian.com/apps/1220925/custom-charts-for-jira-reports?hosting=cloud&tab=overview','_blank')">
                        <svg class="btn-icon"
                             width="25"
                             height="24"
                             viewBox="0 0 25 24"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.82944 11.0688C7.46867 10.6719 6.92755 10.7079 6.67502 11.1769L0.8306 22.9017C0.614143 23.3707 0.938899 23.9119 1.44397 23.9119H9.59714C9.84967 23.9119 10.1022 23.7676 10.2104 23.515C11.9781 19.8713 10.8959 14.3517 7.82944 11.0688Z"
                                  fill="url(#paint0_linear_56_715)" />
                            <path d="M12.123 0.426392C8.84006 5.62137 9.05652 11.3574 11.2211 15.6866C13.3857 20.0157 15.0452 23.2987 15.1535 23.5513C15.2617 23.8038 15.5142 23.948 15.7667 23.948H23.9199C24.425 23.948 24.7858 23.4069 24.5333 22.9379C24.5333 22.9379 13.566 1.00365 13.2774 0.462503C13.061 -0.0786396 12.4477 -0.0786748 12.123 0.426392Z"
                                  fill="white" />
                            <defs>
                                <linearGradient id="paint0_linear_56_715"
                                                x1="10.2687"
                                                y1="2.86758"
                                                x2="4.08841"
                                                y2="13.5723"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white"
                                          stop-opacity="0.4" />
                                    <stop offset="0.9228"
                                          stop-color="white" />
                                </linearGradient>
                            </defs>
                        </svg>
                        Install on Atlassian Marketplace
                    </button>
                    ${secondButton}`
    }
}
customElements.define('call-to-action-btn-stack', CallToActionButtonStack)