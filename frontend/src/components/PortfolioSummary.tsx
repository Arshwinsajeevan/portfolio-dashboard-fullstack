export default function PortfolioSummary({ sectors }: any) {

    const totalInvestment = sectors.reduce(
      (acc: number, s: any) => acc + s.totalInvestment,
      0
    );
  
    const totalPresent = sectors.reduce(
      (acc: number, s: any) => acc + s.totalPresentValue,
      0
    );
  
    const totalGain = totalPresent - totalInvestment;
  
    return (
      <div className="grid grid-cols-3 gap-4 mb-6">
  
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Total Investment</p>
          <p className="text-xl font-bold">₹{totalInvestment.toFixed(2)}</p>
        </div>
  
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Current Value</p>
          <p className="text-xl font-bold">₹{totalPresent.toFixed(2)}</p>
        </div>
  
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Total Gain/Loss</p>
          <p className={`text-xl font-bold ${totalGain >= 0 ? "text-green-600" : "text-red-600"}`}>
            ₹{totalGain.toFixed(2)}
          </p>
        </div>
  
      </div>
    );
  }
  