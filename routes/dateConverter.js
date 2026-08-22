"use strict";

// Calendar data supplied by the project. Epoch: 1975-01-01 BS = 1918-04-13 AD.
const MONTH_DATA = `
31 31 32 32 31 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
30 32 31 32 31 31 29 30 30 29 29 31
31 31 32 31 31 31 30 29 30 29 30 30
31 31 32 32 31 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
31 31 31 32 31 31 29 30 30 29 29 31
31 31 32 31 31 31 30 29 30 29 30 30
31 31 32 32 31 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
31 31 31 32 31 31 29 30 30 29 30 30
31 31 32 31 31 31 30 29 30 29 30 30
31 32 31 32 31 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
31 31 31 32 31 31 30 29 30 29 30 30
31 31 32 31 31 31 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 30
31 32 31 32 31 30 30 30 29 30 29 31
31 31 31 32 31 31 30 29 30 29 30 30
31 31 32 31 31 31 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 30
31 32 31 32 31 30 30 30 29 30 29 31
31 31 32 31 31 31 30 29 30 29 30 30
31 31 32 31 32 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
30 32 31 32 31 30 30 30 29 30 29 31
31 31 32 31 31 31 30 29 30 29 30 30
31 31 32 32 31 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
30 32 31 32 31 30 30 30 29 30 29 31
31 31 32 31 31 31 30 29 30 29 30 30
31 31 32 32 31 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
31 31 31 32 31 31 29 30 30 29 29 31
31 31 32 31 31 31 30 29 30 29 30 30
31 31 32 32 31 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
31 31 31 32 31 31 29 30 30 29 30 30
31 31 32 31 31 31 30 29 30 29 30 30
31 31 32 32 31 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
31 31 31 32 31 31 29 30 30 29 30 30
31 31 32 31 31 31 30 29 30 29 30 30
31 32 31 32 31 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 30 29 31
31 31 31 32 31 31 30 29 30 29 30 30
31 31 32 31 31 31 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 30
31 32 31 32 31 30 30 30 29 30 29 31
31 31 31 32 31 31 30 29 30 29 30 30
31 31 32 31 31 31 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
30 32 31 32 31 30 30 30 29 30 29 31
31 31 32 31 31 31 30 29 30 29 30 30
31 31 32 31 32 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
30 32 31 32 31 30 30 30 29 30 29 31
31 31 32 31 31 31 30 29 30 29 30 30
31 31 32 32 31 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
30 32 31 32 31 31 29 30 30 29 29 31
31 31 32 31 31 31 30 29 30 29 30 30
31 31 32 32 31 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
31 31 31 32 31 31 29 30 30 29 30 30
31 31 32 31 31 31 30 29 30 29 30 30
31 31 32 32 31 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
31 31 31 32 31 31 29 30 30 29 30 30
31 31 32 31 31 31 30 29 30 29 30 30
31 32 31 32 31 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
31 31 31 32 31 31 30 29 30 29 30 30
31 31 32 31 31 31 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 30
31 32 31 32 31 30 30 30 29 30 29 31
31 31 31 32 31 31 30 29 30 29 30 30
31 31 32 31 31 31 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 30
31 32 31 32 31 30 30 30 29 30 29 31
31 31 32 31 31 31 30 29 30 29 30 30
31 31 32 31 32 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
30 32 31 32 31 30 30 30 29 30 29 31
31 31 32 31 31 31 30 29 30 29 30 30
31 31 32 32 31 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
30 32 31 32 31 31 29 30 29 30 29 31
31 31 32 31 31 31 30 29 30 29 30 30
31 31 32 32 31 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
31 31 31 32 31 31 29 30 30 29 29 31
31 31 32 31 31 31 30 29 30 29 30 30
31 31 32 32 31 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
31 31 31 32 31 31 29 30 30 29 30 30
31 31 32 31 31 31 30 29 30 29 30 30
31 32 31 32 31 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
31 31 31 32 31 31 30 29 30 29 30 30
31 31 32 31 31 31 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 30
31 32 31 32 31 30 30 30 29 30 29 31
31 31 31 32 31 31 30 29 30 29 30 30
31 31 32 31 31 31 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 30
31 32 31 32 31 30 30 30 29 30 29 31
31 31 32 31 31 31 30 29 30 29 30 30
31 31 32 31 32 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
30 32 31 32 31 30 30 30 29 30 29 31
31 31 32 31 31 31 30 29 30 29 30 30
31 31 32 32 31 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
30 32 31 32 31 30 30 30 29 30 29 31
31 31 32 31 31 31 30 29 30 29 30 30
31 31 32 32 31 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
31 31 31 32 31 31 29 30 30 29 29 31
31 31 32 31 31 31 30 29 30 29 30 30
31 31 32 32 31 30 30 29 30 29 30 30
31 32 31 32 31 30 30 30 29 29 30 31
31 31 31 32 31 31 29 30 30 29 30 30
31 31 32 31 31 31 30 29 30 29 30 30
31 31 32 32 31 30 30 29 30 29 30 30`;

const BS_MIN_YEAR = 1975;
const BS_MAX_YEAR = 2099;
const DAY_MS = 86_400_000;
const EPOCH_AD_UTC = Date.UTC(1918, 3, 13);
const NEPALI_DIGITS = "०१२३४५६७८९";
const BS_MONTHS = [
  "Baisakh",
  "Jestha",
  "Ashadh",
  "Shrawan",
  "Bhadra",
  "Ashwin",
  "Kartik",
  "Mangsir",
  "Poush",
  "Magh",
  "Falgun",
  "Chaitra",
];
const BS_MONTHS_NP = [
  "बैशाख",
  "जेठ",
  "असार",
  "साउन",
  "भदौ",
  "असोज",
  "कात्तिक",
  "मंसिर",
  "पुस",
  "माघ",
  "फागुन",
  "चैत",
];
const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const WEEKDAYS_NP = [
  "आइतबार",
  "सोमबार",
  "मंगलबार",
  "बुधबार",
  "बिहीबार",
  "शुक्रबार",
  "शनिबार",
];

const MONTHS = MONTH_DATA.trim()
  .split("\n")
  .map((row) => row.trim().split(/\s+/).map(Number));
if (MONTHS.length !== BS_MAX_YEAR - BS_MIN_YEAR + 1)
  throw new Error("Invalid BS calendar data");

// Precompute cumulative day offsets once, making each conversion O(log years + months).
const YEAR_OFFSETS = [0];
for (const months of MONTHS)
  YEAR_OFFSETS.push(
    YEAR_OFFSETS.at(-1) + months.reduce((sum, days) => sum + days, 0),
  );
const MAX_OFFSET = YEAR_OFFSETS.at(-1) - 1;
const MAX_AD_UTC = EPOCH_AD_UTC + MAX_OFFSET * DAY_MS;

const pad = (value) => String(value).padStart(2, "0");
const toNepaliDigits = (value) =>
  String(value).replace(/\d/g, (digit) => NEPALI_DIGITS[Number(digit)]);
const normalizeDigits = (value) =>
  String(value).replace(/[०-९]/g, (digit) =>
    String(NEPALI_DIGITS.indexOf(digit)),
  );
const formatDate = ({ year, month, day }) =>
  `${year}-${pad(month)}-${pad(day)}`;

function parseDate(value, calendar) {
  if (typeof value !== "string")
    throw new TypeError(`${calendar} date must be a string.`);
  const normalized = normalizeDigits(value.trim()).replace(/[/.|,\s]+/g, "-");
  const match = normalized.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (!match) throw new Error(`Enter ${calendar} as YYYY-MM-DD.`);
  return {
    year: Number(match[1]),
    month: Number(match[2]),
    day: Number(match[3]),
  };
}

function validateBs({ year, month, day }) {
  if (![year, month, day].every(Number.isInteger)) throw new TypeError("BS year, month, and day must be integers.");
  if (year < BS_MIN_YEAR || year > BS_MAX_YEAR)
    throw new RangeError(
      `Supported BS years are ${BS_MIN_YEAR}-${BS_MAX_YEAR}.`,
    );
  if (month < 1 || month > 12)
    throw new RangeError("BS month must be between 1 and 12.");
  const maxDay = MONTHS[year - BS_MIN_YEAR][month - 1];
  if (day < 1 || day > maxDay)
    throw new RangeError(`${BS_MONTHS[month - 1]} ${year} has ${maxDay} days.`);
}

function validateAd({ year, month, day }) {
  if (![year, month, day].every(Number.isInteger)) throw new TypeError("AD year, month, and day must be integers.");
  const ms = Date.UTC(year, month - 1, day);
  const date = new Date(ms);
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() + 1 !== month ||
    date.getUTCDate() !== day
  )
    throw new RangeError("That Gregorian date does not exist.");
  if (ms < EPOCH_AD_UTC || ms > MAX_AD_UTC)
    throw new RangeError(
      `Supported AD range is 1918-04-13 to ${formatDate(utcParts(MAX_AD_UTC))}.`,
    );
  return ms;
}

function utcParts(ms) {
  const date = new Date(ms);
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
    weekday: date.getUTCDay(),
  };
}

function getInput(value, month, day, calendar) {
  if (typeof value === "string") return parseDate(value, calendar);
  if (typeof value === "number") return { year: value, month, day };
  if (value && typeof value === "object") return value;
  throw new TypeError(`${calendar} date must be a YYYY-MM-DD string, date object, or year, month, day arguments.`);
}

function bsToAd(value, month, day) {
  const bs = getInput(value, month, day, "BS");
  validateBs(bs);
  const months = MONTHS[bs.year - BS_MIN_YEAR];
  const offset =
    YEAR_OFFSETS[bs.year - BS_MIN_YEAR] +
    months.slice(0, bs.month - 1).reduce((sum, days) => sum + days, 0) +
    bs.day -
    1;
  const ad = utcParts(EPOCH_AD_UTC + offset * DAY_MS);
  return enrich(ad, "AD");
}

function adToBs(value, month, day) {
  const ad = getInput(value, month, day, "AD");
  const ms = validateAd(ad);
  const offset = Math.round((ms - EPOCH_AD_UTC) / DAY_MS);
  let low = 0,
    high = MONTHS.length;
  while (low < high) {
    const middle = Math.floor((low + high + 1) / 2);
    if (YEAR_OFFSETS[middle] <= offset) low = middle;
    else high = middle - 1;
  }
  const yearIndex = Math.min(low, MONTHS.length - 1);
  let remaining = offset - YEAR_OFFSETS[yearIndex];
  let monthIndex = 0;
  while (remaining >= MONTHS[yearIndex][monthIndex])
    remaining -= MONTHS[yearIndex][monthIndex++];
  return enrich(
    {
      year: BS_MIN_YEAR + yearIndex,
      month: monthIndex + 1,
      day: remaining + 1,
      weekday: new Date(ms).getUTCDay(),
    },
    "BS",
  );
}

function enrich(date, calendar) {
  const result = {
    ...date,
    formatted: formatDate(date),
    weekdayName: WEEKDAYS[date.weekday],
    weekdayNameNp: WEEKDAYS_NP[date.weekday],
  };
  if (calendar === "BS") {
    result.monthName = BS_MONTHS[date.month - 1];
    result.monthNameNp = BS_MONTHS_NP[date.month - 1];
    result.formattedNp = toNepaliDigits(result.formatted);
  }
  return result;
}

function getBsCalendar(year, month, selectedDay) {
  year = Number(normalizeDigits(year));
  month = Number(normalizeDigits(month));
  selectedDay = selectedDay == null ? undefined : Number(normalizeDigits(selectedDay));
  validateBs({ year, month, day: selectedDay ?? 1 });

  const daysInMonth = MONTHS[year - BS_MIN_YEAR][month - 1];
  const firstWeekday = bsToAd(year, month, 1).weekday;
  const cells = Array(firstWeekday).fill(null);
  for (let day = 1; day <= daysInMonth; day++) cells.push(day);
  while (cells.length % 7) cells.push(null);

  const weeks = [];
  for (let index = 0; index < cells.length; index += 7) {
    weeks.push(cells.slice(index, index + 7));
  }

  return {
    year,
    month,
    monthName: BS_MONTHS[month - 1],
    monthNameNp: BS_MONTHS_NP[month - 1],
    daysInMonth,
    firstWeekday,
    firstWeekdayName: WEEKDAYS[firstWeekday],
    selectedDay,
    weeks,
  };
}

function formatBsCalendar(year, month, selectedDay) {
  const calendar = getBsCalendar(year, month, selectedDay);
  const titleDay = calendar.selectedDay == null ? "" : ` ${toNepaliDigits(calendar.selectedDay)},`;
  const lines = [
    `${calendar.monthNameNp}${titleDay} ${toNepaliDigits(calendar.year)}`,
    "Su Mo Tu We Th Fr Sa",
  ];

  for (const week of calendar.weeks) {
    lines.push(
      week
        .map((day) => (day == null ? "  " : toNepaliDigits(day).padStart(2, " ")))
        .join(" ")
        .trimEnd(),
    );
  }
  return lines.join("\n");
}

module.exports = {
  adToBs,
  bsToAd,
  toNepaliDigits,
  normalizeDigits,
  getBsCalendar,
  formatBsCalendar,
  BS_MIN_YEAR,
  BS_MAX_YEAR,
  minAd: "1918-04-13",
  maxAd: formatDate(utcParts(MAX_AD_UTC)),
};
