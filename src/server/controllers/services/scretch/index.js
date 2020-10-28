import { URL } from "url";

class Scretch {
  constructor(settings = {}) {
    this.debugMode = settings.debugMode || false;
    this.framework = null;
    this.dataPoints = {
      address: true,
      municipality: true,
      neighbourhood: true,
      housetype: true,
      housestyle: true,
      fronting: true,
      frontage: true,
      lotdepth: true,
      bedrooms: true,
      dens: true,
      bathrooms: true,
      basement: true,
      kitchens: true,
      fireplace: true,
      centralvac: true,
      pool: true,
      garage: true,
      parking: true,
      taxes: true,
      taxyear: true,
      camfees: true,
      addlfees: true,
      virtualtour: true,
      liststatus: true,
      listprice: true,
      approxval: true
    };
  }

  loadPage(targetUrl) {
    const hostname = new URL(targetUrl).hostname;
    if (hostname.includes("housesigma")) {
      this.framework = require("./framework/housesigma").default;
      this.target = targetUrl;
    } else if (hostname.includes("zolo")) {
      throw new Error(`Scraping of zolo.ca is under development.`);
    } else {
      throw new Error(`Scraping of ${hostname} is not currently supported.`);
    }
  }

  async get(options) {
    if (!this.framework) {
      throw new Error(
        "Scretch did not load URL successfully. Please try again with a supported URL."
      );
    }

    let items = { ...this.dataPoints };

    if (options) {
      items = { ...items, ...options };
    }

    return await this.framework.scretchFor(items, this.target, this.debugMode);
  }
}

export default Scretch;
