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
            charts.forEach((c, idx) => {
                let object = JSON.stringify(c);
                const str = `<chart-type-item-component data-i="${idx}" data-name="${c.name}" data-object='${object}'></chart-type-item-component>`;
                htmlStr += str;
                this.attachIframeListener(idx,charts);
            });
            this.innerHTML = htmlStr;
        });
    }

    attachIframeListener(idx) {
        const id = `iframe${idx}`;
        setTimeout(()=>{

            const el = document.getElementById(id);
            const nextEl = document.getElementById(`iframe${idx + 1}`);
            if(idx === 0){
                el.style.display = 'block';
            }
            console.log('attach iframe listener ' + idx);
            el.onload = () => {
                setTimeout(()=>{
                    console.log('iframe ' + id +  ' loaded ',el.src);
                    if(nextEl) {
                        console.log('display next iframe ' + `iframe${idx + 1}`);
                        nextEl.style.display = 'block';
                        
                    }
                },2000)
            };
        },250)

    }
}
customElements.define('chart-type-list-component', ChartTypeList);