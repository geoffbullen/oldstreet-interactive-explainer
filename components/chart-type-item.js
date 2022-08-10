class ChartTypeItem extends HTMLElement {

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
                    <div class="iframe-container">
                        <iframe src="${obj.url}" scrolling="no" frameborder="0"></iframe>
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
        if(!object) return {};
        object.url = '/display/CCD/' + object.name.replaceAll(' ', '+'); 
        return object;
      } 
}
customElements.define('chart-type-item-component', ChartTypeItem);