import { SCRETCH_NOT_FOUND } from "../../../constants/scretch";

export default async (pptrPage) => {
  try {
    console.info("Scraping for common area maintenance fees");
    await pptrPage.waitForSelector(".two_column_data");
    const camfees = await pptrPage.evaluate(() => {
      const propDetails = document
        .querySelector(".two_column_data")
        .querySelectorAll(".item");
      for (const detail of propDetails) {
        if (
          detail
            .querySelector("label")
            .innerHTML.toLowerCase()
            .includes("maintenance")
        ) {
          return parseInt(
            detail
              .querySelector("span")
              .innerHTML.replace(/(\$|,|\/month)/gi, "")
              .trim(),
            10
          );
        }
      }
    });
    if (camfees) {
      console.log(`Found common area maintenance fees: ${camfees}`);
      return camfees;
    } else {
      console.log("Common area maintenance fees not found");
      return SCRETCH_NOT_FOUND;
    }
  } catch (err) {
    console.error(err.message);
    return SCRETCH_NOT_FOUND;
  }
};
