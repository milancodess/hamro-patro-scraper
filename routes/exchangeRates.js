"use strict";

const cheerio = require("cheerio");
const { cleanText, fetchPage } = require("./scraperUtils");

async function getExchangeRates() {
  try {
    const $ = cheerio.load(await fetchPage("/forex"));
    const exchangeRates = [];
    $("main table tbody tr").each((index, row) => {
      const cells = $(row).children("td");
      if (cells.length < 3) return;
      const labels = cells.eq(0).find("div").filter((_, element) => $(element).children().length === 0);
      exchangeRates.push({
        id: index + 1,
        code: cleanText(labels.eq(0).text()),
        currency: cleanText(labels.eq(1).text()),
        buyRate: cleanText(cells.eq(1).text()),
        sellRate: cleanText(cells.eq(2).text()),
      });
    });
    if (!exchangeRates.length) throw new Error("Exchange-rate table was not found");
    return { exchangeRates };
  } catch (error) {
    throw new Error(`Failed to scrape exchange rates: ${error.message}`);
  }
}

module.exports = getExchangeRates;
