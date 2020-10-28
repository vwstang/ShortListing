import { SCRETCH_NOT_FOUND } from "../../../constants";

export default async (pptrPage) => {
  try {
    console.info("Scraping for list price");
    await pptrPage.waitForSelector(".price_listing");
    const listprice = await pptrPage.$eval(".price_listing", (el) =>
      parseInt(
        el.querySelector("span").innerHTML.split(" ")[1].replace(/,/g, ""),
        10
      )
    );
    console.log(`Found list price: ${listprice}`);
    return listprice;
  } catch (err) {
    console.error(err.message);
    return SCRETCH_NOT_FOUND;
  }
};
