#!/usr/bin/env node
const {
  hamroPatro,
  getRashifal,
  getGoldPrices,
  getExchangeRates,
} = require("./index");

const [, , command, arg] = process.argv;

(async () => {
  try {
    switch (command) {
      case "datetime": {
        const result = await hamroPatro();
        console.log("Nepali Date and Time:", JSON.stringify(result, null, 2));
        break;
      }

      case "rashifal": {
        const type = arg || "daily"; // default to daily
        const result = await getRashifal(type);
        console.log(
          `${type.charAt(0).toUpperCase() + type.slice(1)} Horoscope:`
        );
        console.log(JSON.stringify(result, null, 2));
        break;
      }

      case "gold": {
        const result = await getGoldPrices();
        console.log(JSON.stringify(result, null, 2));
        break;
      }

      case "forex": {
        const result = await getExchangeRates();
        console.log(JSON.stringify(result, null, 2));
        break;
      }

      default: {
        console.log("Usage:");
        console.log("  datetime              - Fetch Nepali date and time");
        console.log(
          "  rashifal [type]      - Fetch rashifal (daily | weekly | monthly | yearly)"
        );
        console.log("  gold                  - Fetch gold prices");
        console.log("  forex                 - Fetch exchange rates");
        break;
      }
    }
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
})();
