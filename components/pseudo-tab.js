class PseudoTab extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let activeTab = this.getAttribute('active')

        const isActive = (tabName) => {
            if (activeTab === tabName) {
                return 'pseudo-tab-active'
            } else {
                return ''
            }
        }

        const addOnClickListener = (tabName) => {
            if (activeTab === tabName) {
                return ''
            } else {
                return `onclick="window.location.href=\'${tabName}.html\'"`
            }
        }

        this.innerHTML = `
            <div class="pseudo-tabs-container">
                <button class="pseudo-tab-button ${isActive('chart-types')}"
                    ${addOnClickListener('chart-types')}>Chart types</button>
                <button class="pseudo-tab-button ${isActive('features')}"
                    ${addOnClickListener('features')}>Other features</button>
                <button class="pseudo-tab-button ${isActive('editor')}"
                    ${addOnClickListener('editor')}>Editor</button>
            </div>
        `;
    }
}
customElements.define('tabs-component', PseudoTab)