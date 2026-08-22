"use strict";

const cheerio = require("cheerio");
const { cleanText, fetchPage } = require("./scraperUtils");

async function getGoldPrices() {
  try {
    const $ = cheerio.load(await fetchPage("/gold"));
    const goldPrices = [];
    $("main li:has(canvas[aria-label$=' trend'])").each((index, element) => {
      const content = $(element).children("div").first();
      const header = content.children("div").first();
      const labels = header.children("div").first().children("span").eq(1).children("span");
      const paragraphs = content.children("p");
      goldPrices.push({
        id: index + 1,
        item: cleanText(labels.eq(0).text()),
        unit: cleanText(labels.eq(1).text()),
        changePercent: cleanText(header.children("span").last().text()),
        price: cleanText(paragraphs.eq(0).text()),
        change: cleanText(paragraphs.eq(1).text()),
      });
    });
    if (!goldPrices.length) throw new Error("Gold and silver price cards were not found");

    const heading = $("h2").filter((_, element) => cleanText($(element).text()) === "Nepali Gold & Silver Price").first();
    const mainText = cleanText($("main").text());
    return {
      title: cleanText($("main h1").first().text()),
      updatedAt: mainText.match(/Last updated:\s*(.+?)Gold \(Hallmark\)/)?.[1]?.trim() || "",
      description: cleanText(heading.parent().find("p").first().text()),
      goldPrices,
    };
  } catch (error) {
    throw new Error(`Failed to scrape gold and silver prices: ${error.message}`);
  }
}

module.exports = getGoldPrices;
