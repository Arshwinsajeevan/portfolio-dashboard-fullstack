const axios = require("axios");
const retryFetch = require("../utils/retryFetch");

// In-memory cache
const cache = {};
const CACHE_TIME = 30000; // 30 seconds

async function getCMP(symbol, exchange = "NSE") {
  try {
    const cacheKey = symbol + exchange;

    // ✅ Return cached value if fresh
    if (
      cache[cacheKey] &&
      Date.now() - cache[cacheKey].time < CACHE_TIME
    ) {
      return cache[cacheKey].value;
    }

    const suffix = exchange === "BSE" ? ".BO" : ".NS";
    const ticker = symbol + suffix;

    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1d`;

    // ✅ Retry-safe request
    const response = await retryFetch(() => axios.get(url));

    const price =
      response.data.chart.result[0].meta.regularMarketPrice;

    // ✅ Store in cache
    cache[cacheKey] = {
      value: price,
      time: Date.now()
    };

    return price || 0;

  } catch (error) {
    console.log("Yahoo CMP Error:", symbol);

    // ✅ Fallback to last cached value
    return cache[symbol]?.value || 0;
  }
}

module.exports = { getCMP };
