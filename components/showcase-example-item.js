

class ShowcaseExampleItem extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
          <style>
            .dashboard-example-h2{
              color:black;
              font-size:38px;
            }

            .dashboard-example-h3{
                color:black;
                font-size:28px;
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
            <a href="/showcase">

              <h2 class="dashboard-example-h2">
                <svg width="22" height="22" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.292893 8.70711C-0.097631 8.31658 -0.0976311 7.68342 0.292893 7.29289L6.65685 0.928933C7.04738 0.538409 7.68054 0.538409 8.07107 0.928933C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292893 8.70711ZM16 9L1 9L1 7L16 7L16 9Z" fill="#192B80"/>
                </svg>
                Sprint Health Dashboard
              </h2>
            </a>
            <div class="chart-container">
            <iframe src="https://custom-charts-confluence.oss-playground.com/jira/secure/Dashboard.jspa"
                class="scaled-iframe"
                style="height:2400px;width:3000px"
                frameborder="0">
            </iframe>
            </div>
      
            <h3 class="dashboard-example-h3">Features used</h3>
          </div>
        `;
  }

}
customElements.define('showcase-example-item-component', ShowcaseExampleItem);