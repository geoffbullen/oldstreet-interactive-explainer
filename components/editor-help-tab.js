class EditorHelpTabComponent extends HTMLElement {

    constructor() {
        super()
    }

    async connectedCallback() {
        let data = JSON.parse(this.getAttribute('data-object'))
        this.innerHTML = `
            <div class="editor-help-tab-details">
                <h3>${data.name}</h3>
                <p>${data.description}</p>
                <div>
                    <video class="feature-media fit-to-element" muted loop playsinline autoplay preload="none">
                        <source src="${data.videoUrl}" type="video/mp4">
                    </video>
                </div>
            </div>
        `
    }
}
customElements.define('editor-help-tab', EditorHelpTabComponent)