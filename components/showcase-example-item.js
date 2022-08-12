/** An example dashboard page */
class ShowcaseExampleItem extends HTMLElement {

  constructor() {
    super();
  }

  async connectedCallback() {
    const params = await this.getItemParams();
    console.log('item parameters', params);
    this.innerHTML = `
          <style>
            .dashboard-example-h2{
              color:black;
              font-size:38px;
            }
            .dashboard-example-h3{
                color:black;
                font-size:28px;
                margin-top:50px;
            }

            .chart-container {
              display:flex;
              height: 1350px;
            }
            .scaled-iframe{
              zoom: 0.75;
              -moz-transform: scale(0.75);
              -moz-transform-origin: 0 0;
              -o-transform: scale(0.75);
              -o-transform-origin: 0 0;
              -webkit-transform: scale(0.75);
              -webkit-transform-origin: 0 0;
            }
          </style>
          <div>
            <a href="index.html">
              <h2 class="dashboard-example-h2">
                <svg width="22" height="22" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.292893 8.70711C-0.097631 8.31658 -0.0976311 7.68342 0.292893 7.29289L6.65685 0.928933C7.04738 0.538409 7.68054 0.538409 8.07107 0.928933C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292893 8.70711ZM16 9L1 9L1 7L16 7L16 9Z" fill="#192B80"/>
                </svg>
                Sprint Health Dashboard
              </h2>
            </a>
            <div class="chart-container">
              <iframe src="https://custom-charts-confluence.oss-playground.com/${params.dashboardUrl}"
                  class="scaled-iframe"
                  scrolling="no"
                  style="width:100%;height:2400px"
                  frameborder="0">
              </iframe>
            </div>
            ${this.buildFeaturesSection(params)}
          </div>
        `;
  }

  /** build the links to the list of fgeatures */
  buildFeaturesSection(params) {
    if (!params.featuresUsed || params.featuresUsed.length === 0) return '';
    let htmlStr = `<h3 class="dashboard-example-h3">Features used</h3><div class="features-used-link-container">`;
    params.featuresUsed.forEach(fu => htmlStr += getFeatureMarkup(fu));
    return htmlStr += '</div>';

    function getFeatureMarkup(name) {
      let iconPath = `assets/chart-type-icons/`;
      let docUrl = `https://ossapps.atlassian.net/wiki/spaces/CCFJ/pages/451707148/`;
      docUrl += name.replaceAll(' ', '+');
      iconPath += name.replaceAll(' ', '_') + '.svg';
      return `<a  class="feature-link" href="${docUrl}" target="_blank"><img src="${iconPath}" /><div>${name}</div>
                <svg width="15" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.7071 8.20711C16.0976 7.81658 16.0976 7.18342 15.7071 6.79289L9.34315 0.428933C8.95262 0.0384087 8.31946 0.0384086 7.92893 0.428933C7.53841 0.819457 7.53841 1.45262 7.92893 1.84315L13.5858 7.5L7.92893 13.1569C7.53841 13.5474 7.53841 14.1805 7.92893 14.5711C8.31946 14.9616 8.95262 14.9616 9.34315 14.5711L15.7071 8.20711ZM-8.74228e-08 8.5L15 8.5L15 6.5L8.74228e-08 6.5L-8.74228e-08 8.5Z" fill="#192B80"/>
                </svg>
            </a>`
    }
  }


  /**
   * use the params in the url to get the right params to display this 
   * dashboard
  */
  async getItemParams() {
    const data = await loadData();
    const { group, name } = getKeysFromUrl();
    const g = data[group];
    const obj = g.examples.find(a => a.name === name);
    return obj;

    /** get the group and name key from the url */
    function getKeysFromUrl() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const group = urlParams.get('group');
      const name = urlParams.get('name');
      return { group, name };
    }

    /** load the JSON file data */
    async function loadData() {
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
  }

}
customElements.define('showcase-example-item-component', ShowcaseExampleItem);