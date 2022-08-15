class FeatureItem extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        const obj = this.getObject();
        this.innerHTML = `
          <div class="feature-item">
             <div class="feature-col">
             <h3>${obj.name}</h3>
             <p>${obj.description}</p>  
             </div>
             <div class="feature-col">
                <div class="media-container">
                    <div class="feature-media" style="background-image:url(assets/feature-assets/Choose_segment_colors.png)"></div>
                </div>
             </div>
          </div>
        `;
    }

    getObject() {
        const objectStr = this.getAttribute("data-object");
        let object;
        try { object = JSON.parse(objectStr) }
        catch (e) {/*swallow*/ }
        if (!object) return {};
        return object;
    }
}
customElements.define('feature-item-component', FeatureItem);