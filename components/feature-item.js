class FeatureItem extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          <div class="feature-item">
             <div class="feature-col">
                <h3>Choose segment colors</h3>
                <p>Blah blah blah</p>
             </div>
             <div class="feature-col">
                <div class="media-container">
                    <div class="feature-media" style="background-image:url(assets/feature-assets/Choose_segment_colors.png)"></div>
                </div>
             </div>
          </div>
        `;
    }
}
customElements.define('feature-item-component', FeatureItem);