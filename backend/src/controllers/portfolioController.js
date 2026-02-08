const portfolioData = require("../data/portfolio.json");
const { getCMP } = require("../services/yahooService");
const { getGoogleFinanceData } = require("../services/googleFinanceService");
const { calculateStockMetrics } = require("../utils/calculations");

async function getDashboard(req, res) {
  try {
    let totalPortfolioInvestment = 0;

    // First pass: calculate total investment
    portfolioData.forEach(sector => {
      sector.stocks.forEach(stock => {
        totalPortfolioInvestment +=
          stock.purchasePrice * stock.quantity;
      });
    });

    const sectorResults = [];

    for (const sector of portfolioData) {
      let sectorInvestment = 0;
      let sectorPresentValue = 0;

      const stockResults = [];

      for (const stock of sector.stocks) {
        const cmp = await getCMP(stock.symbol, stock.exchange);
        const googleData = await getGoogleFinanceData(stock.symbol);

        const calc = calculateStockMetrics(
          stock,
          cmp,
          totalPortfolioInvestment
        );

        sectorInvestment += calc.investment;
        sectorPresentValue += calc.presentValue;

        stockResults.push({
          ...stock,
          cmp,
          peRatio: googleData.peRatio,
          latestEarnings: googleData.latestEarnings,
          ...calc
        });
      }

      sectorResults.push({
        sectorName: sector.sector,
        totalInvestment: sectorInvestment,
        totalPresentValue: sectorPresentValue,
        totalGainLoss: sectorPresentValue - sectorInvestment,
        stocks: stockResults
      });
    }

    res.json({
      sectors: sectorResults,
      totalInvestment: totalPortfolioInvestment
    });
  } catch (error) {
    res.status(500).json({ error: "Dashboard fetch failed" });
  }
}

module.exports = { getDashboard };
