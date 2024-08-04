const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.hamropatro.com/gold';

const getGoldPrices = async () => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const articleTitle = $('h2.articleTitle span').text();
    const updatedAt = $('p > b').text();
    const desText = $('p.des_text').text();

    console.log('Title:', articleTitle);
    console.log('\nUpdated At:\n', updatedAt);
    console.log('\nDescription Text:\n', desText);

    const goldSilverTexts = [];
    $('ul.gold-silver > li').each((i, elem) => {
      goldSilverTexts.push($(elem).text().trim());
    });

    console.log('\nGold and Silver Price:');
    for (let i = 0; i < goldSilverTexts.length; i += 2) {
      if (i + 1 < goldSilverTexts.length) {
        console.log(`${(i / 2) + 1}. ${goldSilverTexts[i]} - ${goldSilverTexts[i + 1]}`);
      } else {
        console.log(`${(i / 2) + 1}. ${goldSilverTexts[i]}`);
      }
    }
  } catch (error) {
    console.error('Error fetching the page:', error);
  }
};

module.exports = getGoldPrices;
