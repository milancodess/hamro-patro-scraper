const axios = require('axios');
const cheerio = require('cheerio');

const getHoroscope = async () => {
  const url = 'https://www.hamropatro.com/rashifal';

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const descElements = $('.desc p');

    const rashiNames = [
      "मेष", "वृष", "मिथुन", "कर्कट",
      "सिंह", "कन्या", "तुला", "वृश्चिक",
      "धनु", "मकर", "कुम्भ", "मीन"
    ];

    const results = [];
    descElements.each((index, element) => {
      if (index < rashiNames.length) {
        const rashi = index + 1;
        const name = rashiNames[index];
        const text = $(element).text();
        results.push({ rashi, name, text });
      }
    });

    return results;
  } catch (error) {
    throw new Error(`Failed to retrieve the horoscope. Error: ${error.message}`);
  }
};

module.exports = getHoroscope;
