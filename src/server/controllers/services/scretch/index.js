import { URL } from "url";

class Scretch {
  constructor() {
    this.scrapeFor = {
      address: true,
      municipality: true,
      neighbourhood: true,
      housetype: true,
      housestyle: true,
      fronting: true,
      frontage: true,
      lotdepth: true,
      bedrooms: true,
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
    } else if (hostname.includes("zolo")) {
      throw new Error(`Scraping of zolo.ca is under development.`);
    } else {
      throw new Error(`Scraping of ${hostname} is not currently supported.`);
    }
  }
}

export default Scretch;
