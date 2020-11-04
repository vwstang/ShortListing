import { SCRETCH_NOT_FOUND } from "../../../constants/scretch";
import {
  FOR_SALE,
  SOLD,
  SOLD_CONDITIONAL,
  TERMINATED,
  UNHANDLED_STATUS
} from "../constants/listingStatus";

export default async (pptrPage) => {
  try {
    console.info("Scraping for list status");
    await pptrPage.waitForSelector(".list_days");
    const statusExists = await pptrPage.$(".list_status", (el) => el.innerHTML);
    if (statusExists) {
      const liststatus = await pptrPage.$eval(".list_status", (el) =>
        el.innerHTML.toLowerCase()
      );
      console.log(`Found list status: ${liststatus}`);
      switch (liststatus) {
        case SOLD_CONDITIONAL:
        case FOR_SALE:
          return liststatus;
        default:
          return UNHANDLED_STATUS;
      }
    } else {
      const liststatus = await pptrPage.$eval(
        ".list_days",
        (el) => el.innerHTML
      );
      const statusText = liststatus.split(" ")[0].toLowerCase();
      console.log(`Found list status: ${statusText}`);
      switch (statusText) {
        case SOLD:
        case TERMINATED:
          return statusText;
        default:
          return UNHANDLED_STATUS;
      }
    }
  } catch (err) {
    console.error(err.message);
    return SCRETCH_NOT_FOUND;
  }
};
