import { SCRETCH_NOT_FOUND } from "../../../constants";

export default async (pptrPage) => {
  try {
    console.info("Scraping for garage");
    await pptrPage.waitForSelector(".rooms_count");
    const garage = await pptrPage.evaluate(() => {
      const propDetails = document
        .querySelector(".rooms_count")
        .querySelectorAll(".item");
      for (const detail of propDetails) {
        if (
          detail
            .querySelector("span")
            .innerText.toLowerCase()
            .includes("garage")
        ) {
          return detail.querySelector("span").innerText.split(" ")[0];
        }
      }
    });
    if (garage) {
      console.log(`Found garage: ${garage}`);
      return garage;
    } else {
      console.info("No garage found");
      return SCRETCH_NOT_FOUND;
    }
  } catch (err) {
    console.error(err.message);
    return SCRETCH_NOT_FOUND;
  }
};
