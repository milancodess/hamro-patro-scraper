"use strict";

const cheerio = require("cheerio");
const { cleanText, fetchPage } = require("./scraperUtils");

const PATHS = {
  daily: "/rashifal",
  weekly: "/rashifal/weekly",
  monthly: "/rashifal/monthly",
  yearly: "/rashifal/yearly",
};

async function getRashifal(type = "daily") {
  if (!PATHS[type]) throw new Error("Invalid horoscope type. Use daily, weekly, monthly, or yearly.");
  try {
    const $ = cheerio.load(await fetchPage(PATHS[type]));
    const results = [];
    $("main a[href^='/rashifal/']")
      .filter((_, element) => $(element).find("p").length >= 2)
      .each((index, element) => {
        const card = $(element);
        const labels = card.find("div").first().children("span");
        const paragraphs = card.children("p");
        const imagePath = card.find("span[style*='mask-image']").attr("style")?.match(/url\(([^)]+)\)/)?.[1];
        results.push({
          rashi: index + 1,
          name: cleanText(labels.eq(1).text()),
          nameEn: cleanText(labels.eq(2).text()),
          syllables: cleanText(paragraphs.eq(0).text()),
          text: cleanText(paragraphs.eq(1).text()),
          image: imagePath ? new URL(imagePath, "https://www.hamropatro.com").href : "",
        });
      });
    if (results.length !== 12) throw new Error(`Expected 12 horoscope signs, found ${results.length}`);
    return results;
  } catch (error) {
    throw new Error(`Failed to retrieve the horoscope: ${error.message}`);
  }
}

module.exports = getRashifal;
