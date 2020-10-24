export default async (pptrPage) => {
  console.info("Scraping for bathrooms");
  await pptrPage.waitForSelector(".address");
  const bathrooms = await pptrPage.evaluate(() => {
    const propDetails = document
      .querySelector(".rooms_count")
      .querySelectorAll(".item");
    for (const detail of propDetails) {
      if (
        detail.querySelector("span").innerText.toLowerCase().includes("bath")
      ) {
        return detail.querySelector("span").innerText.split(" ")[0];
      }
    }
  });
  console.log(`Found bathrooms: ${bathrooms}`);
  return bathrooms;
};
