import { SCRETCH_NOT_FOUND } from "../../../constants/scretch";

export default async (pptrPage) => {
  try {
    console.info("Scraping for garage style");
    await pptrPage.waitForSelector(".property_details");
    const garagestyle = await pptrPage.evaluate(() => {
      const propDetails = document
        .querySelector(".property_details")
        .querySelectorAll(".item");
      for (const detail of propDetails) {
        if (
          detail
            .querySelector("label")
            .innerText.toLowerCase()
            .includes("garage")
        ) {
          return detail.querySelector("span").innerText.split(" ")[1];
        }
      }
    });
    if (garagestyle) {
      console.log(`Found garage style: ${garagestyle}`);
      return garagestyle;
    } else {
      console.info("No garage found");
      return SCRETCH_NOT_FOUND;
    }
  } catch (err) {
    console.error(err.message);
    return SCRETCH_NOT_FOUND;
  }
};
