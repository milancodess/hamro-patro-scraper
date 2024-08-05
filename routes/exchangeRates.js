const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.hamropatro.com/forex';

const getExchangeRates = async () => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const forexTexts = [];
    $('ul.forex > li').each((i, elem) => {
      forexTexts.push($(elem).text().trim());
    });

    forexTexts.splice(0, 3); // Removing the first set of titles

    const exchangeRates = [];
    for (let i = 0; i < forexTexts.length; i += 3) {
      const currency = forexTexts[i];
      const buyRate = forexTexts[i + 1];
      const sellRate = forexTexts[i + 2];
      exchangeRates.push({
        id: (i / 3) + 1,
        currency: currency,
        buyRate: buyRate,
        sellRate: sellRate
      });
    }

    const result = {
      exchangeRates: exchangeRates
    };

    return result;
  } catch (error) {
    console.error('Error fetching the page:', error);
    throw error;
  }
};

module.exports = getExchangeRates;
