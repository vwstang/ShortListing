import { SCRETCH_NOT_FOUND } from "../../../constants";

export default async (pptrPage) => {
  try {
    console.info("Scraping for parking");
    await pptrPage.waitForSelector(".property_details");
    const parking = await pptrPage.evaluate(() => {
      const propDetails = document
        .querySelector(".property_details")
        .querySelectorAll(".item");
      for (const detail of propDetails) {
        if (
          detail
            .querySelector("label")
            .innerHTML.toLowerCase()
            .includes("parking")
        ) {
          return parseInt(detail.querySelector("span").innerHTML, 10);
        }
      }
      return 0;
    });
    console.log(`Found parking: ${parking}`);
    return parking;
  } catch (err) {
    console.error(err.message);
    return SCRETCH_NOT_FOUND;
  }
};
