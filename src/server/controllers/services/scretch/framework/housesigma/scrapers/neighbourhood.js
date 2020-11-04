import { SCRETCH_NOT_FOUND } from "../../../constants/scretch";

export default async (pptrPage) => {
  try {
    console.info("Scraping for neighbourhood");
    await pptrPage.waitForSelector(".city_name");
    const city = await pptrPage.$eval(".city_name", (el) => el.innerHTML);
    const neighbourhood = city.split(" - ")[0].trim();
    console.log(`Found neighbourhood: ${neighbourhood}`);
    return neighbourhood;
  } catch (err) {
    console.error(err.message);
    return SCRETCH_NOT_FOUND;
  }
};
