const getNepaliDateAndTime = require('./routes/date');
const getHoroscope = require('./routes/rashifal');
const getGoldPrices = require('./routes/gold');
const getExchangeRates = require('./routes/exchangeRates');

module.exports = {
  hamroPatro: getNepaliDateAndTime,
  getHoroscope: getHoroscope,
  getGoldPrices: getGoldPrices,
  getExchangeRates: getExchangeRates
};
