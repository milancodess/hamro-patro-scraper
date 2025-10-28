const axios = require("axios");
const cheerio = require("cheerio");

const getNepaliDateAndTime = async () => {
  try {
    const { data } = await axios.get("https://www.hamropatro.com/");
    const $ = cheerio.load(data);

    const nepaliDate = $("#top .container12 .column4 .date .nep").text().trim();
    const englishDate = $("#top .container12 .column4 .time .eng")
      .text()
      .trim();

    let currentTime = $("#top .container12 .column4 .time").clone();
    currentTime.find(".eng").remove();
    currentTime = currentTime.text().trim();

    return {
      nepaliDate: nepaliDate || "Nepali Date not found",
      currentTime: currentTime || "Current time not found",
      englishDate: englishDate || "English date not found",
    };
  } catch (error) {
    throw new Error("Failed to scrape Nepali date and time");
  }
};

module.exports = getNepaliDateAndTime;
