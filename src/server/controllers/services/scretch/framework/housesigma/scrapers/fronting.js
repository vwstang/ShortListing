import { SCRETCH_NOT_FOUND } from "../../../constants/scretch";

export default async (pptrPage) => {
  try {
    console.info("Scraping for fronting on");
    await pptrPage.waitForSelector(".address");
    const fronting = await pptrPage.evaluate(() => {
      const propDetails = document
        .querySelector(".property_details")
        .querySelectorAll(".item");
      for (const detail of propDetails) {
        if (detail.querySelector("label").innerHTML.includes("Fronting")) {
          return detail.querySelector("span").innerHTML;
        }
      }
    });
    console.log(`Found fronting on: ${fronting}`);
    return fronting;
  } catch (err) {
    console.error(err.message);
    return SCRETCH_NOT_FOUND;
  }
};
