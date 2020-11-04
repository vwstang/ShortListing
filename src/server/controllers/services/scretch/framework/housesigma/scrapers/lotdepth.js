import { SCRETCH_NOT_FOUND } from "../../../constants/scretch";

export default async (pptrPage) => {
  try {
    console.info("Scraping for lot depth");
    await pptrPage.waitForSelector(".two_column_data");
    const lotdepth = await pptrPage.evaluate(() => {
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
          return parseFloat(dimensions.split("x")[1].trim().split(" ")[0]);
        }
      }
    });
    console.log(`Found lot depth: ${lotdepth}`);
    return lotdepth;
  } catch (err) {
    console.error(err.message);
    return SCRETCH_NOT_FOUND;
  }
};
