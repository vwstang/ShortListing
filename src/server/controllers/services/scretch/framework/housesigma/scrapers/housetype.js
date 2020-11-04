import { SCRETCH_NOT_FOUND } from "../../../constants/scretch";

export default async (pptrPage) => {
  try {
    console.info("Scraping for house type");
    await pptrPage.waitForSelector(".house_type");
    const housetype = await pptrPage.$eval(".house_type", (el) => el.innerHTML);
    console.log(`Found house type: ${housetype}`);
    return housetype;
  } catch (err) {
    console.error(err.message);
    return SCRETCH_NOT_FOUND;
  }
};
