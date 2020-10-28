export default async (pptrPage) => {
  console.info("Scraping for bedrooms");
  await pptrPage.waitForSelector(".rooms_count");
  const bedrooms = await pptrPage.evaluate(() => {
    const propDetails = document
      .querySelector(".rooms_count")
      .querySelectorAll(".item");
    for (const detail of propDetails) {
      if (
        detail.querySelector("span").innerText.toLowerCase().includes("bed")
      ) {
        const beds = detail.querySelector("span").innerText.split(" ")[0];
        return beds.includes("+")
          ? parseInt(beds.split("+")[0], 10)
          : parseInt(beds, 10);
      }
    }
  });
  console.log(`Found bedrooms: ${bedrooms}`);
  return bedrooms;
};
