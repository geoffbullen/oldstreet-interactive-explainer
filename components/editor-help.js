class EditorHelpComponent extends HTMLElement {

    index = 0;
    featuresData = [];
    isMinimized = false;

    constructor() {
        super()
    }

    connectedCallback() {
        this.data.then(async (features) => {
            this.featuresData = features;
            this.render();
        })
    }

    render() {
        if (this.isMinimized) {
            this.innerHTML = `
                <div class="editor-help-minimized">
                    <div id='editor-help-maximize' class="editor-help-maximize">
                        <button>&#x2922;</button>
                    </div>
                    <h3>${this.featuresData[this.index].name}</h3>
                    <div class="editor-help-nav-mini">
                        <button id='editor-help-nav-prev' class="editor-help-nav-button-mini">&larr;</button>
                        <div class="editor-help-nav-page-mini">
                            ${this.index + 1}/${this.featuresData.length}
                        </div>
                        <button id='editor-help-nav-next' class="editor-help-nav-button-mini">&rarr;</button>
                    </div>
                </div>
            `
        } else {
            this.innerHTML = `
                <div class="editor-help-container">
                    <div id='editor-help-minimize' class="editor-help-minimize">
                        <button>&#x2212;</button>
                    </div>
                    <div class="editor-help-tab-container">
                        ${this.tab}
                    </div> 
                    <div class="editor-help-nav">
                        <button id='editor-help-nav-prev' class="editor-help-nav-button">&larr;</button>
                        <div class="editor-help-nav-page">
                            ${this.index + 1}/${this.featuresData.length}
                        </div>
                        <button id='editor-help-nav-next' class="editor-help-nav-button">&rarr;</button>
                    </div>
                </div>
            `
        }
        this.addListeners()
    }

    addListeners() {
        const decrement = () => {
            // console.log('prev:', this.index, this.featuresData)
            if (this.index === 0) this.index = this.featuresData.length - 1
            else this.index--
            this.render()
        }
        const increment = () => {
            // console.log('next:', this.index, this.featuresData)
            if (this.index === this.featuresData.length - 1) this.index = 0
            else this.index++;
            this.render()
        }
        document.getElementById('editor-help-nav-prev').addEventListener('click', decrement)
        document.getElementById('editor-help-nav-next').addEventListener('click', increment)
        if (!this.isMinimized) {
            const minimize = () => {
                this.isMinimized = true;
                this.render()
            }
            document.getElementById('editor-help-minimize').addEventListener('click', minimize)
        } else {
            const maximize = () => {
                this.isMinimized = false;
                this.render();
            }
            document.getElementById('editor-help-maximize').addEventListener('click', maximize)
        }
    }


    get data() {
        return fetch('data/features-data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('HTTP error' + response.status)
                }
                return response.json();
            })
            .then(json => {
                return json
            })
    }

    get tab() {
        return `<editor-help-tab data-object='${JSON.stringify(this.featuresData[this.index])}'></editor-help-tab>`
    }

    static get observedAttributes() {

    }
}
customElements.define('editor-help', EditorHelpComponent)