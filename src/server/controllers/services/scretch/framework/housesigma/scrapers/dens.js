import { SCRETCH_NOT_FOUND } from "../../../constants/scretch";

export default async (pptrPage) => {
  try {
    console.info("Scraping for dens");
    await pptrPage.waitForSelector(".rooms_count");
    const dens = await pptrPage.evaluate(() => {
      const propDetails = document
        .querySelector(".rooms_count")
        .querySelectorAll(".item");
      for (const detail of propDetails) {
        if (
          detail.querySelector("span").innerText.toLowerCase().includes("bed")
        ) {
          const beds = detail.querySelector("span").innerText.split(" ")[0];
          return beds.includes("+") ? parseInt(beds.split("+")[1], 10) : 0;
        }
      }
    });
    console.log(`Found dens: ${dens}`);
    return dens;
  } catch (err) {
    console.error(err.message);
    return SCRETCH_NOT_FOUND;
  }
};
