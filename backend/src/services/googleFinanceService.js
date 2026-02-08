async function getGoogleFinanceData(symbol) {
    try {
      // TEMP MOCK DATA
      return {
        peRatio: (Math.random() * 40).toFixed(2),
        latestEarnings: (Math.random() * 1000).toFixed(2)
      };
    } catch (error) {
      return {
        peRatio: 0,
        latestEarnings: 0
      };
    }
  }
  
  module.exports = { getGoogleFinanceData };
  