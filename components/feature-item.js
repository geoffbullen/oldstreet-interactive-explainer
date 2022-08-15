class FeatureItem extends HTMLElement {

    constructor() {
        super();
    }

    async connectedCallback() {
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
                    ${this.getMediaMarkup(obj)}
                </div>
             </div>
          </div>
        `;

        setTimeout(() => {
            let videos = [...document.getElementsByClassName('feature-media')]
            for (let video of videos) {
                video.playbackRate = 0.5
            }
        }, 1000)
    }

    getObject() {
        const objectStr = this.getAttribute("data-object");
        let object;
        try { object = JSON.parse(objectStr) }
        catch (e) {/*swallow*/ }
        if (!object) return {};
        return object;
    }

    getMediaMarkup(obj) {
        if (obj.videoUrl && obj.videoUrl.length > 8) {
            return `<video class="feature-media" muted loop playsinline autoplay preload="none" style="width:${obj.mediaDimensions?.width ?? 600}px;height:${obj.mediaDimensions?.height ?? 300}px">
                        <source src="${obj.videoUrl}" type="video/mp4">
                    </video>`
        }
        else return `
            <img src="${obj.imageUrl}" style="width:${obj.mediaDimensions?.width ?? 600}px;height:${obj.mediaDimensions?.height ?? 300}px"></img>
            `


    }
}
customElements.define('feature-item-component', FeatureItem);