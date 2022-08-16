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
                    <div class="chart-type-details-learnmore">
                    <a href="editor.html?helptab=${obj.index}">Try it out</a>
                    <svg width="15" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7071 8.20711C16.0976 7.81658 16.0976 7.18342 15.7071 6.79289L9.34315 0.428933C8.95262 0.0384087 8.31946 0.0384086 7.92893 0.428933C7.53841 0.819457 7.53841 1.45262 7.92893 1.84315L13.5858 7.5L7.92893 13.1569C7.53841 13.5474 7.53841 14.1805 7.92893 14.5711C8.31946 14.9616 8.95262 14.9616 9.34315 14.5711L15.7071 8.20711ZM-8.74228e-08 8.5L15 8.5L15 6.5L8.74228e-08 6.5L-8.74228e-08 8.5Z" fill="#192B80"/>
                    </svg>
                </div>
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
        const index = this.getAttribute("data-index");
        let object;
        try { object = JSON.parse(objectStr) }
        catch (e) {/*swallow*/ }
        if (!object) return {};
        object.index = index;
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