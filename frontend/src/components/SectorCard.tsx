import { Sector } from "@/src/types/portfolio";

export default function SectorCard({ sector }: { sector: Sector }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4">
  
      <h2 className="text-lg font-semibold mb-3">
        {sector.sectorName}
      </h2>
  
      <div className="flex flex-wrap gap-6 text-sm">
        <p className="text-gray-600">
          Investment: <span className="font-medium text-black">₹{sector.totalInvestment.toFixed(2)}</span>
        </p>
  
        <p className="text-gray-600">
          Present Value: <span className="font-medium text-black">₹{sector.totalPresentValue.toFixed(2)}</span>
        </p>
  
        <p className={`${sector.totalGainLoss >= 0 ? "text-green-600" : "text-red-600"} font-medium`}>
          Gain/Loss: ₹{sector.totalGainLoss.toFixed(2)}
        </p>
      </div>
  
    </div>
  );  
}
