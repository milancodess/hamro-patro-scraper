"use strict";

const axios = require("axios");

const client = axios.create({
  baseURL: "https://www.hamropatro.com",
  timeout: 15_000,
  headers: {
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  },
});

const cleanText = (value) => String(value || "").replace(/\s+/g, " ").trim();

async function fetchPage(path) {
  const response = await client.get(path);
  if (typeof response.data !== "string" || !response.data.includes("<html")) {
    throw new Error(`Hamro Patro returned an unexpected response for ${path}`);
  }
  return response.data;
}

module.exports = { cleanText, fetchPage };
