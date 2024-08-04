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

    forexTexts.splice(0, 3);

    console.log('Forex Texts:');
    for (let i = 0; i < forexTexts.length; i += 3) {
      const currency = forexTexts[i];
      const buyRate = forexTexts[i + 1];
      const sellRate = forexTexts[i + 2];
      console.log(`${(i / 3) + 1}. ${currency} - Buy: ${buyRate} - Sell: ${sellRate}`);
    }
  } catch (error) {
    console.error('Error fetching the page:', error);
  }
};

module.exports = getExchangeRates;
