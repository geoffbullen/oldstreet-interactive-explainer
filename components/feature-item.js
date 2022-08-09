class FeatureItem extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          <style>
            .feature-media{
                background-repeat: no-repeat;
                background-size: auto;
                height:220px;
                width:330px;
            }
            .feature-item{
                display: flex;
                align-items: center;
                gap: 150px;
                max-width: 800px;
                margin-top:100px;
            }
            .media-container{
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #FFF1DB;
                width: 500px;
                margin-left: auto;
                height: 300px;
            }
          </style>
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