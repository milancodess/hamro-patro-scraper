# hamro-patro-scraper

`hamro-patro-scraper` is an npm package for scraping Nepali date, time, daily horoscope, gold prices, and exchange rates from [Hamro Patro](https://www.hamropatro.com/). It provides a simple API for retrieving this information programmatically or via a command-line interface.

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
  HamroPatro datetime
  ```

- **Fetch Daily Horoscope:**

  ```bash
  HamroPatro horoscope
  ```

- **Fetch Gold Prices:**

  ```bash
  HamroPatro gold
  ```

- **Fetch Exchange Rates:**

  ```bash
  HamroPatro forex
  ```

### Using in Node.js Code

You can also use `hamro-patro-scraper` in your Node.js applications. Here’s how:

1. **Require the Package:**

   ```javascript
   const { hamroPatro, getHoroscope, getGoldPrices, getExchangeRates } = require('hamro-patro-scraper');
   ```

2. **Fetch Nepali Date and Time:**

   ```javascript
   (async () => {
     try {
       const dateTime = await hamroPatro();
       console.log('Nepali Date and Time:', dateTime);
     } catch (error) {
       console.error('Error fetching Nepali date and time:', error.message);
     }
   })();
   ```

3. **Fetch Daily Horoscope:**

   ```javascript
   (async () => {
     try {
       const horoscope = await getHoroscope();
       console.log('Daily Horoscope:', horoscope);
     } catch (error) {
       console.error('Error fetching daily horoscope:', error.message);
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
       console.error('Error fetching gold prices:', error.message);
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
    console.error('Error fetching exchange rates:', error.message);
  }
})();
   ```

## API

### `hamroPatro()`

Returns an object with the following properties:

- `nepaliDate`: The current Nepali date.
- `currentTime`: The current time in Nepali time.
- `englishDate`: The current date in the Gregorian calendar.

### `getHoroscope()`

Returns an array of horoscope objects with the following properties for each rashi (zodiac sign):

- `rashi`: The index of the rashi (1-12).
- `name`: The Nepali name of the rashi.
- `text`: The horoscope description for the rashi.

### `getGoldPrices()`

Logs the gold and silver prices directly to the console.

### `getExchangeRates()`

Logs the exchange rates directly to the console.

## License

This package is licensed under the Apache License 2.0.

## Contributing

If you'd like to contribute to `hamro-patro-scraper`, please fork the repository and submit a pull request. Contributions, bug reports, and feature requests are welcome!

## Contact

For any questions or issues, please open an issue on the [GitHub repository](https://github.com/milancodess/hamro-patro-scraper).

---

**hamro-patro-scraper** is maintained by [Milan Bhandari](https://github.com/milancodess).
```
