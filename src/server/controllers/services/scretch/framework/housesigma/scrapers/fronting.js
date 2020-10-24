export default async (pptrPage) => {
  console.info("Scraping for fronting on");
  await pptrPage.waitForSelector(".address");
  const fronting = await pptrPage.evaluate(() => {
    const propDetails = document
      .querySelector(".property_details")
      .querySelectorAll(".item");
    for (const detail of propDetails) {
      if (detail.querySelector("label").innerHTML.includes("Fronting")) {
        return detail.querySelector("span").innerHTML;
      }
    }
  });
  console.log(`Found fronting on: ${fronting}`);
  return fronting;
};
