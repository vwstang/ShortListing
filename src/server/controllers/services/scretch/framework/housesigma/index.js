import puppeteer from "puppeteer";
import scrapers from "./scrapers";

const scretchFor = async (dataPoints, targetUrl, debugMode) => {
  const scretchItems = Object.entries(dataPoints).reduce(
    (promises, [dataPoint, dataFetch]) => {
      if (dataFetch) promises.push(dataPoint);
      return promises;
    },
    []
  );
  const fetched = {};
  const browser = await puppeteer.launch({ devtools: debugMode });
  try {
    const page = await browser.newPage();
    // page.on("console", (msg) => {
    //   for (let i = 0; i < msg.args().length; i++) {
    //     console.log(msg.args()[i]);
    //   }
    // });
    // page.on("console", (log) => console[log._type](log._text));
    await page.goto(targetUrl);
    for (const item of scretchItems) {
      fetched[item] = await scrapers[item](page);
    }
  } catch (err) {
    console.error(err.message);
  } finally {
    console.log("waiting to close");
    debugMode && (await browser.waitForTarget(() => false));
    await browser.close();
    console.log("browser closed");
    return fetched;
  }
};

export default { scretchFor };
