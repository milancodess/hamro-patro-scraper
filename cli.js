#!/usr/bin/env node

const { hamroPatro, getHoroscope, getGoldPrices, getExchangeRates } = require('./index');

const [,, command] = process.argv;

(async () => {
  try {
    if (command === 'datetime') {
      const result = await hamroPatro();
      console.log('Nepali Date and Time:', result);
    } else if (command === 'horoscope') {
      const result = await getHoroscope();
      console.log('Daily Horoscope:', result);
    } else if (command === 'gold') {
      await getGoldPrices();
    } else if (command === 'forex') {
      await getExchangeRates();
    } else {
      console.log('Usage:');
      console.log('  datetime  - Fetch Nepali date and time');
      console.log('  horoscope - Fetch daily horoscope');
      console.log('  gold      - Fetch gold prices');
      console.log('  forex     - Fetch exchange rates');
    }
  } catch (error) {
    console.error(error.message);
  }
})();
