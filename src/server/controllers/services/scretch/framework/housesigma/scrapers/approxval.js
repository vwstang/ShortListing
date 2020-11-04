import { SCRETCH_NOT_FOUND } from "../../../constants/scretch";

export default async (pptrPage) => {
  try {
    console.info("Scraping for approximate value");
    await pptrPage.waitForSelector(".estimate_other");
    const approxval = await pptrPage.evaluate(() => {
      const homeValDetails = document
        .querySelector(".estimate_other")
        .querySelectorAll(".sub_item");
      for (const detail of homeValDetails) {
        if (
          detail
            .querySelector(".favor_name")
            .innerHTML.includes("SigmaEstimate")
        ) {
          return parseInt(
            detail
              .querySelector("p")
              .innerHTML.replace("$", "")
              .replace(/,/g, "")
              .trim(),
            10
          );
        }
      }
    });
    console.log(`Found approximate value: ${approxval}`);
    return approxval;
  } catch (err) {
    console.error(err.message);
    return SCRETCH_NOT_FOUND;
  }
};
