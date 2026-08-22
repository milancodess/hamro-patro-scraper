"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { adToBs, bsToAd, getBsCalendar, formatBsCalendar } = require("../index");

test("converts the epoch in both directions", () => {
  assert.equal(adToBs("1918-04-13").formatted, "1975-01-01");
  assert.equal(bsToAd("1975-01-01").formatted, "1918-04-13");
});

test("converts a modern date and round-trips it", () => {
  const bs = adToBs("2023-04-14");
  assert.equal(bs.formatted, "2080-01-01");
  assert.equal(bsToAd(bs.formatted).formatted, "2023-04-14");
});

test("accepts Nepali digits and common BS separators", () => {
  assert.equal(bsToAd("२०८०/०१/०१").formatted, "2023-04-14");
  assert.equal(adToBs(2023, 4, 14).formatted, "2080-01-01");
  assert.equal(bsToAd(2080, 1, 1).formatted, "2023-04-14");
});

test("rejects invalid and out-of-range dates", () => {
  assert.throws(() => adToBs("2023-02-29"), /does not exist/);
  assert.throws(() => bsToAd("2080-01-32"), /has 31 days/);
  assert.throws(() => adToBs("1918-04-12"), /Supported AD range/);
});

test("round-trips the final supported date", () => {
  const lastAd = bsToAd("2099-12-30");
  assert.equal(adToBs(lastAd.formatted).formatted, "2099-12-30");
});

test("builds a correctly aligned BS monthly calendar", () => {
  const calendar = getBsCalendar(2076, 12, 11);
  assert.equal(calendar.monthNameNp, "चैत");
  assert.equal(calendar.daysInMonth, 30);
  assert.equal(calendar.firstWeekdayName, "Saturday");
  assert.deepEqual(calendar.weeks[0], [null, null, null, null, null, null, 1]);
  assert.equal(calendar.weeks.at(-1).filter(Boolean).at(-1), 30);

  const output = formatBsCalendar("२०७६", "१२", "११");
  assert.match(output, /^चैत ११, २०७६\nSu Mo Tu We Th Fr Sa/m);
  assert.match(output, /                 १/);
});
