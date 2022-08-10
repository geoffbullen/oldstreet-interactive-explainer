

class ShowcaseGroupList extends HTMLElement {

  constructor() {
    super();
  }


  get data() {
    return fetch('data/showcase-data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then(json => {
        return json
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  connectedCallback() {
    this.data.then((groups) => {
      let htmlStr = '';
      for (const g in groups) {
        const group = groups[g];
        console.log('render group with key: ' + g, group);
        let object = JSON.stringify(group);
        const str = `<showcase-group-component data-group='${g}' data-object='${object}'></showcase-group-component>`;
        htmlStr += str;        
      }
      this.innerHTML = htmlStr;
    })
  }
}
customElements.define('showcase-group-list-component', ShowcaseGroupList);