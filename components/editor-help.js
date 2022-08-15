class EditorHelpComponent extends HTMLElement {

    constructor() {
        super()
    }

    connectedCallback() {
        this.data.then((features) => {
            this.innerHTML = `
                <div class="editor-help-container">
                </div>
            `
        })
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
}
customElements.define('editor-help', EditorHelpComponent)