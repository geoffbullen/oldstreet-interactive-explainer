class FeatureList extends HTMLElement {

    constructor() {
        super();
    }

    get data() {
        return fetch('data/features-data.json')
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
        this.data.then((features) => {
            let htmlStr = '';
            features.forEach((f, idx) => {
                let object = JSON.stringify(f);
                const str = `<feature-item-component data-object='${object}'></feature-item-component>`;
                htmlStr += str;
            });
            this.innerHTML = htmlStr;
        });
    }
}
customElements.define('feature-list-component', FeatureList);