const getNepaliDateAndTime = require("./routes/date");
const getRashifal = require("./routes/rashifal");
const getGoldPrices = require("./routes/gold");
const getExchangeRates = require("./routes/exchangeRates");

module.exports = {
  hamroPatro: getNepaliDateAndTime,
  getRashifal: getRashifal,
  getGoldPrices: getGoldPrices,
  getExchangeRates: getExchangeRates,
};
