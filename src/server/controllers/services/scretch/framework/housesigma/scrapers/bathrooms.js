import { SCRETCH_NOT_FOUND } from "../../../constants/scretch";

export default async (pptrPage) => {
  try {
    console.info("Scraping for bathrooms");
    await pptrPage.waitForSelector(".address");
    const bathrooms = await pptrPage.evaluate(() => {
      const propDetails = document
        .querySelector(".rooms_count")
        .querySelectorAll(".item");
      for (const detail of propDetails) {
        if (
          detail.querySelector("span").innerText.toLowerCase().includes("bath")
        ) {
          return parseInt(
            detail.querySelector("span").innerText.split(" ")[0],
            10
          );
        }
      }
    });
    console.log(`Found bathrooms: ${bathrooms}`);
    return bathrooms;
  } catch (err) {
    console.error(err.message);
    return SCRETCH_NOT_FOUND;
  }
};
