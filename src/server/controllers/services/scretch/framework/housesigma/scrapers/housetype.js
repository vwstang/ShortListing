export default async (pptrPage) => {
  console.info("Scraping for house type");
  await pptrPage.waitForSelector(".house_type");
  const housetype = await pptrPage.$eval(".house_type", (el) => el.innerHTML);
  console.log(`Found house type: ${housetype}`);
  return housetype;
};
