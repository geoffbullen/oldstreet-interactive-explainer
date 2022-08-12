class ShowcaseGroup extends HTMLElement {

    constructor() {
        super();
    }


    get group() {
        const group = this.getAttribute("data-group");
        return group;
    }

    get object() {
        let obj = {};
        const item = this.getAttribute("data-object");
        try {
            obj = JSON.parse(item);
            return obj;
        }
        catch (e) {
            console.error(e)
        }
    }

    get exampleListHtml() {
        const examples = this.object.examples;
        console.log(this.object)
        let htmlStr = '<div class="showcase-example-group">';
        if (examples) examples.forEach(e => {
            htmlStr += `
      <a href="dashboard-example-page.html?group=${this.group}&name=${e.name}">
          <div class="showcase-card">
            <img src="${e.thumbnail}" />
            <span class="thumbnail-name">${e.name}</span>
            <svg width="10" height="10" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.7071 8.20711C16.0976 7.81658 16.0976 7.18342 15.7071 6.79289L9.34315 0.428933C8.95262 0.0384087 8.31946 0.0384086 7.92893 0.428933C7.53841 0.819457 7.53841 1.45262 7.92893 1.84315L13.5858 7.5L7.92893 13.1569C7.53841 13.5474 7.53841 14.1805 7.92893 14.5711C8.31946 14.9616 8.95262 14.9616 9.34315 14.5711L15.7071 8.20711ZM-8.74228e-08 8.5L15 8.5L15 6.5L8.74228e-08 6.5L-8.74228e-08 8.5Z" fill="#192B80"/>
            </svg>
          </div>
      </a>
      `
        })
        return htmlStr += '</div>'

    }


    connectedCallback() {
        const obj = this.object;
        // console.log('ShowcaseGroup', this.exampleListHtml);
        this.innerHTML = `
          <div class='showcase-example-group-container'>
            <h2>${obj.name}</h2>
            ${this.exampleListHtml}
          </div>
        `;
    }

}
customElements.define('showcase-group-component', ShowcaseGroup);