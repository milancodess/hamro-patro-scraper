const axios = require("axios");
const cheerio = require("cheerio");

const rashiNames = [
  "मेष",
  "वृष",
  "मिथुन",
  "कर्कट",
  "सिंह",
  "कन्या",
  "तुला",
  "वृश्चिक",
  "धनु",
  "मकर",
  "कुम्भ",
  "मीन",
];

const getHoroscope = async (type = "daily") => {
  let url;

  if (type === "daily") {
    url = "https://www.hamropatro.com/rashifal";
  } else if (type === "weekly") {
    url = "https://www.hamropatro.com/rashifal/weekly";
  } else if (type === "monthly") {
    url = "https://www.hamropatro.com/rashifal/monthly";
  } else if (type === "yearly") {
    url = "https://www.hamropatro.com/rashifal/yearly";
  } else {
    throw new Error(
      "Invalid horoscope type. Use daily, weekly, monthly, or yearly."
    );
  }

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const descElements = $(".desc p");
    const results = [];

    descElements.each((index, element) => {
      if (index < rashiNames.length) {
        results.push({
          rashi: index + 1,
          name: rashiNames[index],
          text: $(element).text().trim(),
          image: `https://www.hamropatro.com/images/dummy/ic_sodiac_${
            index + 1
          }.png`,
        });
      }
    });

    return results;
  } catch (error) {
    throw new Error(
      `Failed to retrieve the horoscope. Error: ${error.message}`
    );
  }
};

module.exports = getHoroscope;
