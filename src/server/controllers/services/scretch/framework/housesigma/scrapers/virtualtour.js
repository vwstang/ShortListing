import { SCRETCH_NOT_FOUND, SCRETCH_UNKNOWN } from "../../../constants";

export default async (pptrPage) => {
  try {
    console.info("Scraping for virtual tour link");
    await pptrPage.waitForSelector(".address");
    const vtour = await pptrPage.evaluate(() => {
      const vtourbutton = document.querySelector(".vtour_button");
      if (vtourbutton) {
        return vtourbutton.getAttribute("href");
      } else {
        return null;
      }
    });
    if (vtour) {
      console.log(`Found virtual tour link: ${vtour}`);
      return vtour;
    } else {
      console.log(`Virtual tour not available`);
      return SCRETCH_UNKNOWN;
    }
  } catch (err) {
    console.error(err.message);
    return SCRETCH_NOT_FOUND;
  }
};
