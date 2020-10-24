import { SCRETCH_NOT_FOUND } from "../../../constants";

export default async (pptrPage) => {
  try {
    console.info("Scraping for basement");
    await pptrPage.waitForSelector(".two_column_data");
    const basement = await pptrPage.evaluate(() => {
      const propDetails = document
        .querySelector(".two_column_data")
        .querySelectorAll(".item");
      for (const detail of propDetails) {
        if (detail.querySelector("label").innerHTML.includes("Basement")) {
          return detail.querySelector("span").innerHTML;
        }
      }
    });
    console.log(`Found basement: ${basement}`);
    return basement;
  } catch (err) {
    console.error(err.message);
    return SCRETCH_NOT_FOUND;
  }
};
