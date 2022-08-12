class ChartTypeList extends HTMLElement {

    constructor() {
        super();
    }

    get data() {
        return fetch('data/chart-types-data.json')
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
        this.data.then((charts) => {
            let htmlStr = '';
            charts.forEach(c => {
                let object = JSON.stringify(c);
                const str = `<chart-type-item-component data-name="${c.name}" data-object='${object}'></chart-type-item-component>`;
                htmlStr += str;
            });
            this.innerHTML = htmlStr;
        });
    }
}
customElements.define('chart-type-list-component', ChartTypeList);