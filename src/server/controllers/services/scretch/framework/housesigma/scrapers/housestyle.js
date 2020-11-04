import { SCRETCH_NOT_FOUND } from "../../../constants/scretch";

export default async (pptrPage) => {
  try {
    console.info("Scraping for house style");
    await pptrPage.waitForSelector(".address");
    const housestyle = await pptrPage.evaluate(() => {
      const propDetails = document
        .querySelector(".property_details")
        .querySelectorAll(".item");
      for (const detail of propDetails) {
        if (detail.querySelector("label").innerHTML.includes("Style")) {
          return detail.querySelector("span").innerHTML;
        }
      }
    });
    console.log(`Found house style: ${housestyle}`);
    return housestyle;
  } catch (err) {
    console.error(err.message);
    return SCRETCH_NOT_FOUND;
  }
};
