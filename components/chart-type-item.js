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
                        <iframe id="iframe${obj.index}" scrolling="no" loading="lazy" src="${obj.exampleUrl}" style="display:none"></iframe>
                    </div>
                </div>
             </div>
          </div>
        `;
    }

    getObject() {
        const objectStr = this.getAttribute("data-object");
        const index = this.getAttribute("data-i");
        let object;
        try {object = JSON.parse(objectStr)}
        catch(e){/*swallow*/}
        if(!object) return {};
        object.index = index;
        return object;
      } 
}
customElements.define('chart-type-item-component', ChartTypeItem);