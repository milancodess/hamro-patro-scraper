const axios = require('axios');
const cheerio = require('cheerio');

const hamroPatro = async () => {
  try {
    const { data } = await axios.get('https://www.hamropatro.com/');
    const $ = cheerio.load(data);

    const nepaliDate = $('#top .container12 .column4 .date .nep').text().trim().replace('Nepali Date:', '');
    const currentTime = $('#top .container12 .column4 .time span').text().trim().replace('Current time:', '');
    const englishDate = $('#top .container12 .column4 .time .eng').text().trim().replace('English date:', '');

    return {
      nepaliDate: nepaliDate || 'Nepali Date not found',
      currentTime: currentTime || 'Current time not found',
      englishDate: englishDate || 'English date not found'
    };
  } catch (error) {
    throw new Error('Failed to scrape Nepali date and time');
  }
};

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

module.exports = { hamroPatro, getHoroscope };
