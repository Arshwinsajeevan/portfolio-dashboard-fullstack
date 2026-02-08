export interface Stock {
    symbol: string;
    name: string;
    purchasePrice: number;
    quantity: number;
    cmp: number;
    peRatio: number;
    latestEarnings: number;
    investment: number;
    presentValue: number;
    gainLoss: number;
    portfolioPercent: number;
  }
  
  export interface Sector {
    sectorName: string;
    totalInvestment: number;
    totalPresentValue: number;
    totalGainLoss: number;
    stocks: Stock[];
  }
  
  export interface DashboardResponse {
    sectors: Sector[];
    totalInvestment: number;
  }
  