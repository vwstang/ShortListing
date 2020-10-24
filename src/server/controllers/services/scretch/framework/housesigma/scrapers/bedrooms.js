export default async (pptrPage) => {
  console.info("Scraping for bedrooms");
  await pptrPage.waitForSelector(".address");
  const bedrooms = await pptrPage.evaluate(() => {
    const propDetails = document
      .querySelector(".rooms_count")
      .querySelectorAll(".item");
    for (const detail of propDetails) {
      if (
        detail.querySelector("span").innerText.toLowerCase().includes("bed")
      ) {
        return detail.querySelector("span").innerText.split(" ")[0];
      }
    }
  });
  console.log(`Found bedrooms: ${bedrooms}`);
  return bedrooms;
};
