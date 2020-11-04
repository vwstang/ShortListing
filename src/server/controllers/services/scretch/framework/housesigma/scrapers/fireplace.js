import { SCRETCH_NOT_FOUND } from "../../../constants/scretch";

export default async (pptrPage) => {
  try {
    console.info("Scraping for fireplace");
    await pptrPage.waitForSelector(".property_details");
    const fireplace = await pptrPage.evaluate(() => {
      const propDetails = document
        .querySelector(".property_details")
        .querySelectorAll(".item");
      for (const detail of propDetails) {
        if (
          detail
            .querySelector("label")
            .innerText.toLowerCase()
            .includes("fire place")
        ) {
          return detail.querySelector("span").innerText;
        }
      }
    });
    if (fireplace) {
      console.log(`Found fireplace: ${fireplace}`);
      return fireplace;
    } else {
      console.info("No fireplace found");
      return SCRETCH_NOT_FOUND;
    }
  } catch (err) {
    console.error(err.message);
    return SCRETCH_NOT_FOUND;
  }
};
