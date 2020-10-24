export default async (pptrPage) => {
  console.info("Scraping for neighbourhood");
  await pptrPage.waitForSelector(".city_name");
  const city = await pptrPage.$eval(".city_name", (el) => el.innerHTML);
  const neighbourhood = city.split(" - ")[0].trim();
  console.log(`Found neighbourhood: ${neighbourhood}`);
  return neighbourhood;
};
