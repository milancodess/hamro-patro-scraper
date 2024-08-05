#!/usr/bin/env node

const { hamroPatro, getHoroscope, getGoldPrices, getExchangeRates } = require('./index');

const [,, command] = process.argv;

(async () => {
  try {
    if (command === 'datetime') {
      const result = await hamroPatro();
      console.log('Nepali Date and Time:', JSON.stringify(result, null, 2));
    } else if (command === 'horoscope') {
      const result = await getHoroscope();
      console.log('Daily Horoscope:', JSON.stringify(result, null, 2));
    } else if (command === 'gold') {
      const result = await getGoldPrices();
      console.log(JSON.stringify(result, null, 2));
    } else if (command === 'forex') {
      const result = await getExchangeRates();
      console.log(JSON.stringify(result, null, 2));
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
