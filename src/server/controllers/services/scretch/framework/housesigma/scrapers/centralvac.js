import { SCRETCH_NOT_FOUND } from "../../../constants";

export default async (pptrPage) => {
  try {
    console.info("Scraping for central vacuum");
    await pptrPage.waitForSelector(".property_details");
    const centralvac = await pptrPage.evaluate(() => {
      const propDetails = document
        .querySelector(".property_details")
        .querySelectorAll(".item");
      for (const detail of propDetails) {
        if (
          detail.querySelector("label").innerHTML.toLowerCase().includes("central vac")
        ) {
          return detail.querySelector("span").innerHTML;
        }
      }
      return "N";
    });
    console.log(`Found central vacuum: ${centralvac}`);
    return centralvac;
  } catch (err) {
    console.error(err.message);
    return SCRETCH_NOT_FOUND;
  }
};
