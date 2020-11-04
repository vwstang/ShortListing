import { SCRETCH_NOT_FOUND } from "../../../constants/scretch";

export default async (pptrPage) => {
  try {
    console.info("Scraping for frontage");
    await pptrPage.waitForSelector(".two_column_data");
    const frontage = await pptrPage.evaluate(() => {
      const propDetails = document
        .querySelector(".two_column_data")
        .querySelectorAll(".item");
      for (const detail of propDetails) {
        if (
          detail
            .querySelector("label")
            .innerHTML.toLowerCase()
            .includes("lot size")
        ) {
          const dimensions = detail
            .querySelector("span")
            .innerHTML.toLowerCase();
          return parseFloat(dimensions.split("x")[0].trim());
        }
      }
    });
    console.log(`Found frontage: ${frontage}`);
    return frontage;
  } catch (err) {
    console.error(err.message);
    return SCRETCH_NOT_FOUND;
  }
};
