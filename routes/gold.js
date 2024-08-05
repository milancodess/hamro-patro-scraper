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

    const goldSilverTexts = [];
    $('ul.gold-silver > li').each((i, elem) => {
      goldSilverTexts.push($(elem).text().trim());
    });

    const goldPrices = [];
    for (let i = 0; i < goldSilverTexts.length; i += 2) {
      if (i + 1 < goldSilverTexts.length) {
        goldPrices.push({
          id: (i / 2) + 1,
          price: `${goldSilverTexts[i]} - ${goldSilverTexts[i + 1]}`
        });
      } else {
        goldPrices.push({
          id: (i / 2) + 1,
          price: goldSilverTexts[i]
        });
      }
    }

    const result = {
      title: articleTitle,
      updatedAt: updatedAt,
      description: desText,
      goldPrices: goldPrices
    };

    return result; 
  } catch (error) {
    console.error('Error fetching the page:', error);
    throw error;
  }
};

module.exports = getGoldPrices;
