

class ShowcaseGroup extends HTMLElement {

  constructor() {
    super();
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
    let htmlStr = '<div class="showcase-example-group">';
    if (examples) examples.forEach(e => {
      // console.log({ e })
      htmlStr += `
      <a href="https://www.google.com">
          <div class="showcase-card">
            <img src="${e.thumbnail}" />
            <p>${e.name}</p>
          </div>
      </a>
      `
    })
    // console.log({htmlStr});
    return htmlStr += '</div>'

  }


  connectedCallback() {
    const obj = this.object;
    console.log('ShowcaseGroup', this.exampleListHtml);

    this.innerHTML = `
          <div>
            <h2>${obj.name}</h2>
            ${this.exampleListHtml}
          </div>
        `;
  }


}
customElements.define('showcase-group-component', ShowcaseGroup);