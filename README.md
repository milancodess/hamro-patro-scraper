# HamroPatro

HamroPatro is an npm package for scraping Nepali date, time, and daily horoscope data from [Hamro Patro](https://www.hamropatro.com/). It provides a simple API for retrieving this information programmatically or via a command-line interface.

## Installation

You can install HamroPatro globally to use the CLI or as a dependency in your Node.js project.

### Install Globally

To install HamroPatro globally, use:

```bash
npm install -g hamro-patro-scraper
```

### Install as a Dependency

To add HamroPatro to your project, run:

```bash
npm install hamro-patro-scraper
```

## Usage

### Command-Line Interface (CLI)

Once installed globally, you can use the CLI to fetch Nepali date/time and daily horoscope information.

- **Fetch Nepali Date and Time:**

  ```bash
  HamroPatro datetime
  ```

- **Fetch Daily Horoscope:**

  ```bash
  HamroPatro horoscope
  ```

### Using in Node.js Code

You can also use HamroPatro in your Node.js applications. Here’s how:

1. **Require the Package:**

   ```javascript
   const { hamroPatro, getHoroscope } = require('hamro-patro-scraper');
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

## API

### `hamroPatro()`

Returns an object with the following properties:

- `nepaliDate`: The current Nepali date.
- `day`: The day of the week in Nepali.
- `panchang`: The Panchang (Hindu calendar details).
- `currentTime`: The current time in Nepali time.
- `englishDate`: The current date in the Gregorian calendar.

### `getHoroscope()`

Returns an array of horoscope objects with the following properties for each rashi (zodiac sign):

- `rashi`: The index of the rashi (1-12).
- `name`: The Nepali name of the rashi.
- `text`: The horoscope description for the rashi.

## License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing

If you'd like to contribute to HamroPatro, please fork the repository and submit a pull request. Contributions, bug reports, and feature requests are welcome!

## Contact

For any questions or issues, please open an issue on the [GitHub repository](https://github.com/milancodess/HamroPatro).

---

**HamroPatro** is maintained by [Milan Bhandari](https://github.com/milancodess).
