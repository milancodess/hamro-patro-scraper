# hamro-patro-scraper

`hamro-patro-scraper` scrapes Nepali date/time, horoscope, gold prices, and exchange rates from [Hamro Patro](https://www.hamropatro.com/). It also includes an offline Gregorian (AD) and Bikram Sambat (BS) date converter and a terminal-friendly Nepali monthly calendar.

## Features

- Current Nepali date and Kathmandu time
- Daily, weekly, monthly, and yearly Rashifal
- Gold and silver prices
- Foreign exchange rates
- Offline AD ↔ BS date conversion
- BS monthly calendar grids with Nepali digits

## Installation

You can install `hamro-patro-scraper` globally to use the CLI or as a dependency in your Node.js project.

### Install Globally

To install `hamro-patro-scraper` globally, use:

```bash
npm install -g hamro-patro-scraper
```

### Install as a Dependency

To add `hamro-patro-scraper` to your project, run:

```bash
npm install hamro-patro-scraper
```

## Usage

### Command-Line Interface (CLI)

Once installed globally, you can use the CLI to fetch Nepali date/time, daily horoscope, gold prices, and exchange rates.

- **Fetch Nepali Date and Time:**

  ```bash
  hamropatro datetime
  ```

- **Fetch Daily, Weekly, Monthly, Yearly Rashifal:**

  ```bash
  hamropatro rashifal (daily | weekly | monthly | yearly)
  ```

- **Fetch Gold Prices:**

  ```bash
  hamropatro gold
  ```

- **Fetch Exchange Rates:**

  ```bash
  hamropatro forex
  ```

- **Convert Dates:**

  ```bash
  hamropatro convert ad-bs 2023-04-14
  hamropatro convert bs-ad 2080-01-01
  hamropatro convert bs-ad २०८०/०१/०१
  ```

- **Print a Nepali Calendar:**

  ```bash
  # Current BS month with today's date in the heading
  hamropatro calendar

  # A specific BS year and month: calendar YEAR MONTH
  hamropatro calendar 2076 12

  # Include a selected date in the heading: calendar YEAR MONTH DAY
  hamropatro calendar 2076 12 11

  # Nepali digit arguments also work
  hamropatro calendar २०७६ १२ ११
  ```

  When running directly from the cloned repository, replace `hamropatro` with `node cli.js`:

  ```bash
  node cli.js calendar 2076 12 11
  ```

  BS months are numbered `1` through `12`, from Baisakh through Chaitra.

### Using in Node.js Code

You can also use `hamro-patro-scraper` in your Node.js applications. Here’s how:

1. **Require the Package:**

   ```javascript
   const {
     hamroPatro,
     getRashifal,
     getGoldPrices,
     getExchangeRates,
     adToBs,
     bsToAd,
     getBsCalendar,
     formatBsCalendar,
   } = require("hamro-patro-scraper");
   ```

2. **Fetch Nepali Date and Time:**

   ```javascript
   (async () => {
     try {
       const dateTime = await hamroPatro();
       console.log("Nepali Date and Time:", dateTime);
     } catch (error) {
       console.error("Error fetching Nepali date and time:", error.message);
     }
   })();
   ```

3. **Fetch Daily Horoscope:**

   ```javascript
   const types = ["daily", "weekly", "monthly", "yearly"];
   const fetchHoroscope = async (type = "daily") => {
     try {
       const horoscope = await getRashifal(type);
       console.log(
         `${type.charAt(0).toUpperCase() + type.slice(1)} Horoscope:`
       );
       console.log(JSON.stringify(horoscope, null, 2));
       console.log("-----------------------");
     } catch (error) {
       console.error(`Error fetching ${type} horoscope:`, error.message);
     }
   };

   // Example: fetch daily horoscope (default)
   fetchHoroscope();

   // Or fetch all types:
   (async () => {
     for (const type of types) {
       await fetchHoroscope(type);
     }
   })();
   ```

4. **Fetch Gold Prices:**

```javascript
(async () => {
  try {
    const data = await getGoldPrices();
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error fetching gold prices:", error.message);
  }
})();
```

5. **Fetch Exchange Rates:**

```javascript
(async () => {
  try {
    const data = await getExchangeRates();
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error fetching exchange rates:", error.message);
  }
})();
```

6. **Convert AD and BS Dates:**

```javascript
const { adToBs, bsToAd } = require("hamro-patro-scraper");

console.log(adToBs("2023-04-14"));
// { year: 2080, month: 1, day: 1, formatted: "2080-01-01", ... }

console.log(bsToAd("२०८०/०१/०१"));
// { year: 2023, month: 4, day: 14, formatted: "2023-04-14", ... }
```

7. **Build or Format a BS Monthly Calendar:**

```javascript
const { getBsCalendar, formatBsCalendar } = require("hamro-patro-scraper");

const calendar = getBsCalendar(2076, 12, 11);
console.log(calendar.weeks); // Seven-column weeks containing dates or nulls
console.log(formatBsCalendar(2076, 12, 11));
```

```text
चैत ११, २०७६
Su Mo Tu We Th Fr Sa
                   १
 २  ३  ४  ५  ६  ७  ८
 ९ १० ११ १२ १३ १४ १५
१६ १७ १८ १९ २० २१ २२
२३ २४ २५ २६ २७ २८ २९
३०
```

## API

### `hamroPatro()`

Returns an object with the following properties:

- `nepaliDate`: The current Nepali date.
- `currentTime`: The current time in Nepali time.
- `englishDate`: The current date in the Gregorian calendar.

### `getRashifal()`

Returns an array of horoscope objects with the following properties for each rashi (zodiac sign):

- `rashi`: The index of the rashi (1-12).
- `name`: The Nepali name of the rashi.
- `text`: The horoscope description for the rashi.

### `getGoldPrices()`

Returns the page title, update time, description, and a `goldPrices` array. Each price contains `item`, `unit`, `price`, `change`, and `changePercent`.

### `getExchangeRates()`

Returns an `exchangeRates` array containing `code`, Nepali `currency` name, `buyRate`, and `sellRate` for each currency.

### `adToBs(date)` / `bsToAd(date)`

Converts a `YYYY-MM-DD` string and returns numeric `year`, `month`, `day`, and `weekday` values plus `formatted`, English/Nepali weekday names, and BS month names where applicable. You can also pass separate numeric arguments, such as `adToBs(2023, 4, 14)`. BS strings accept Nepali digits and separators such as `/`, `.`, commas, and spaces.

The embedded calendar supports BS `1975-01-01` through `2099-12-30`, starting at AD `1918-04-13`. The exact final AD date is available as `dateConverter.maxAd`. Invalid or unsupported dates throw a descriptive error. Conversion is offline and uses UTC arithmetic, so results are timezone-safe.

### `getBsCalendar(year, month, selectedDay?)`

Returns structured details for a BS month, including its Nepali/English name, number of days, starting weekday, and `weeks`. Each week contains seven Sunday-to-Saturday values; blank positions are represented by `null`.

### `formatBsCalendar(year, month, selectedDay?)`

Returns the terminal-friendly calendar grid as a string with Nepali digits. The optional day is included in the heading. Both calendar functions accept English or Nepali numeric input.

## License

This package is licensed under the Apache License 2.0.

## Contributing

If you'd like to contribute to `hamro-patro-scraper`, please fork the repository and submit a pull request. Contributions, bug reports, and feature requests are welcome!

## Contact

For any questions or issues, please open an issue on the [GitHub repository](https://github.com/milancodess/hamro-patro-scraper).

---

**hamro-patro-scraper** is maintained by [Milan Bhandari](https://github.com/milancodess).
