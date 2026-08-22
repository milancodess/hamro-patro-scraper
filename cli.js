#!/usr/bin/env node
const {
  hamroPatro,
  getRashifal,
  getGoldPrices,
  getExchangeRates,
  adToBs,
  bsToAd,
  formatBsCalendar,
} = require("./index");

const [, , command, ...args] = process.argv;
const arg = args[0];

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

      case "convert": {
        const [direction, date] = args;
        if (!date || !["ad-bs", "bs-ad"].includes(direction)) {
          throw new Error("Usage: hamropatro convert <ad-bs|bs-ad> <YYYY-MM-DD>");
        }
        const result = direction === "ad-bs" ? adToBs(date) : bsToAd(date);
        console.log(JSON.stringify(result, null, 2));
        break;
      }

      case "calendar": {
        let [year, month, selectedDay] = args;
        if (year == null && month == null) {
          const today = new Date();
          const currentBs = adToBs(today.getFullYear(), today.getMonth() + 1, today.getDate());
          year = currentBs.year;
          month = currentBs.month;
          selectedDay = currentBs.day;
        } else if (year == null || month == null) {
          throw new Error("Usage: hamropatro calendar <BS_YEAR> <BS_MONTH> [DAY]");
        }
        console.log(formatBsCalendar(year, month, selectedDay));
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
        console.log("  convert ad-bs DATE    - Convert Gregorian AD to Nepali BS");
        console.log("  convert bs-ad DATE    - Convert Nepali BS to Gregorian AD");
        console.log("  calendar YEAR MONTH [DAY] - Print a Nepali BS monthly calendar");
        break;
      }
    }
  } catch (error) {
    console.error("Error:", error.message);
    process.exitCode = 1;
  }
})();
