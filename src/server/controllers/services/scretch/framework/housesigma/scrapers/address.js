import { SCRETCH_NOT_FOUND } from "../../../constants/scretch";

export default async (pptrPage) => {
  try {
    console.info("Scraping for address");
    await pptrPage.waitForSelector(".address");
    const address = await pptrPage.$eval(".address", (el) => el.innerHTML);
    console.log(`Found address: ${address}`);
    return address;
  } catch (err) {
    console.error(err.message);
    return SCRETCH_NOT_FOUND;
  }
};
