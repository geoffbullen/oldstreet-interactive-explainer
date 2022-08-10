class ChartTypeItem extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        const obj = this.getObject();
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
          </style>
          <div class="feature-item">
             <div class="feature-col">
                <h3>${obj.name}</h3>
                <p>${obj.description}</p>
             </div>
             <div class="feature-col">
               <div class="media-container">
                    <div class="iframe-container">
                        <iframe src="${obj.url}"
                            scrolling="no"
                            frameborder="0">
                        </iframe>
                    </div>
                </div>
             </div>
          </div>
        `;
    }

    getObject() {
        const objectStr = this.getAttribute("data-object");
        let object;
        try {object = JSON.parse(objectStr)}
        catch(e){/**/}
        // console.log({object,objectStr});
        if(!object) return {};
        object.url = '/display/CCD/' + object.name.replaceAll(' ', '+'); 
        return object;
      } 
}
customElements.define('chart-type-item-component', ChartTypeItem);