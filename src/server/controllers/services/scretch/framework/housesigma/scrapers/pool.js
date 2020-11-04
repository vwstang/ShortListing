import { SCRETCH_NOT_FOUND } from "../../../constants/scretch";

export default async (pptrPage) => {
  try {
    console.info("Scraping for swimming pool");
    await pptrPage.waitForSelector(".property_details");
    const pool = await pptrPage.evaluate(() => {
      const propDetails = document
        .querySelector(".property_details")
        .querySelectorAll(".item");
      for (const detail of propDetails) {
        if (
          detail.querySelector("label").innerHTML.toLowerCase().includes("pool")
        ) {
          return detail.querySelector("span").innerHTML;
        }
      }
      return "None";
    });
    console.log(`Found swimming pool: ${pool}`);
    return pool;
  } catch (err) {
    console.error(err.message);
    return SCRETCH_NOT_FOUND;
  }
};
