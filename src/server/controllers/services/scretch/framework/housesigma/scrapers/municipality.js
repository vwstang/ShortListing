import { SCRETCH_NOT_FOUND } from "../../../constants/scretch";

export default async (pptrPage) => {
  try {
    console.info("Scraping for municipality");
    await pptrPage.waitForSelector(".city_name");
    const city = await pptrPage.$eval(".city_name", (el) => el.innerHTML);
    const municipality = city.split(" - ")[1].trim();
    console.log(`Found municipality: ${municipality}`);
    return municipality;
  } catch (err) {
    console.error(err.message);
    return SCRETCH_NOT_FOUND;
  }
};
