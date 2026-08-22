"use strict";

const cheerio = require("cheerio");
const { cleanText, fetchPage } = require("./scraperUtils");

async function getNepaliDateAndTime() {
  try {
    const $ = cheerio.load(await fetchPage("/"));
    const todayLink = $("main a[href^='/date/']")
      .filter((_, element) => /^\/date\/\d+-\d+-\d+$/.test($(element).attr("href") || ""))
      .first();
    const nepaliDate = cleanText(todayLink.text());
    const englishDate = cleanText(todayLink.siblings("p").first().text());
    if (!nepaliDate || !englishDate) throw new Error("Current date markup was not found");

    const currentTime = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kathmandu",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    }).format(new Date());
    return { nepaliDate, currentTime, englishDate };
  } catch (error) {
    throw new Error(`Failed to scrape Nepali date and time: ${error.message}`);
  }
}

module.exports = getNepaliDateAndTime;
