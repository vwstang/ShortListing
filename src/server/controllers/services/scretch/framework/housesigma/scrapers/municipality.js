export default async (pptrPage) => {
  console.info("Scraping for municipality");
  await pptrPage.waitForSelector(".city_name");
  const city = await pptrPage.$eval(".city_name", (el) => el.innerHTML);
  const municipality = city.split(" - ")[1].trim();
  console.log(`Found municipality: ${municipality}`);
  return municipality;
};
