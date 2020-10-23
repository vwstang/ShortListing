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
