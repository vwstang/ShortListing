import { SCRETCH_NOT_FOUND, SCRETCH_UNKNOWN } from "../../../constants";

export default async (pptrPage) => {
  try {
    console.info("Scraping for taxes");
    await pptrPage.waitForSelector(".two_column_data");
    const taxes = await pptrPage.evaluate(() => {
      const propDetails = document
        .querySelector(".two_column_data")
        .querySelectorAll(".item");
      for (const detail of propDetails) {
        if (
          detail.querySelector("label").innerHTML.toLowerCase().includes("tax")
        ) {
          if (detail.querySelector("span").innerHTML.includes("$ -")) {
            return -1;
          } else {
            return parseInt(
              detail
                .querySelector("span")
                .innerHTML.replace("$", "")
                .replace(/,/g, "")
                .trim(),
              10
            );
          }
        }
      }
    });
    if (taxes < 0) {
      console.log("Found taxes but no data available");
      return SCRETCH_UNKNOWN;
    } else if (taxes) {
      console.log(`Found taxes: ${taxes}`);
      return taxes;
    } else {
      console.log(`Taxes not found`);
      return SCRETCH_NOT_FOUND;
    }
  } catch (err) {
    console.error(err.message);
    return SCRETCH_NOT_FOUND;
  }
};
