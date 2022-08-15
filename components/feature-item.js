class FeatureItem extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        const obj = this.getObject();
        this.innerHTML = `
          <div class="feature-item">
             <div class="feature-col">
                <div class="chart-type-details">
                    <h3>${obj.name}</h3>
                    <p>${obj.description}</p>  
                </div>
             </div>
             <div class="feature-col">
                <div class="media-container" style="background-color:${obj.backgroundColor}">
                    <video class="feature-media" muted loop playsinline autoplay preload="none" style="width:${obj.videoScale?.width}px;height:${obj.videoScale?.height}px">
                        <source src="${obj.videoUrl}" type="video/mp4">
                    </video>
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