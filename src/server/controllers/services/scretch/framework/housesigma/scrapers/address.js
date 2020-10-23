export default async (pptrPage) => {
  console.info("Scraping for address");
  await pptrPage.waitForSelector(".address");
  const address = await pptrPage.$eval(".address", (el) => el.innerHTML);
  console.log(`Found address: ${address}`);
  return address;
};
