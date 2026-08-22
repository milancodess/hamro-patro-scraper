const dateConverter = require("./routes/dateConverter");

// Load network/scraping dependencies only when a scraper is actually called.
const getNepaliDateAndTime = (...args) => require("./routes/date")(...args);
const getRashifal = (...args) => require("./routes/rashifal")(...args);
const getGoldPrices = (...args) => require("./routes/gold")(...args);
const getExchangeRates = (...args) => require("./routes/exchangeRates")(...args);

module.exports = {
  hamroPatro: getNepaliDateAndTime,
  getRashifal: getRashifal,
  getGoldPrices: getGoldPrices,
  getExchangeRates: getExchangeRates,
  adToBs: dateConverter.adToBs,
  bsToAd: dateConverter.bsToAd,
  dateConverter: dateConverter,
  getBsCalendar: dateConverter.getBsCalendar,
  formatBsCalendar: dateConverter.formatBsCalendar,
};
