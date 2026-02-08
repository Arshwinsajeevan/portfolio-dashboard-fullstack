function calculateStockMetrics(stock, cmp, totalInvestment) {
    const investment = stock.purchasePrice * stock.quantity;
    const presentValue = cmp * stock.quantity;
    const gainLoss = presentValue - investment;
    const portfolioPercent = totalInvestment
      ? (investment / totalInvestment) * 100
      : 0;
  
    return {
      investment,
      presentValue,
      gainLoss,
      portfolioPercent
    };
  }
  
  module.exports = { calculateStockMetrics };
  