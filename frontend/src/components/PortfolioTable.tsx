import { Stock } from "@/src/types/portfolio";

export default function PortfolioTable({ stocks }: { stocks: Stock[] }) {
  return (
    <table className="mt-5 w-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg text-md">
      <thead className="bg-red-50 text-gray-700 text-md uppercase">
        <tr>
          <th className="p-2">Stock</th>
          <th className="p-2">CMP</th>
          <th className="p-2">Qty</th>
          <th className="p-2">Investment</th>
          <th className="p-2">Present Value</th>
          <th className="p-2">Gain/Loss</th>
        </tr>
      </thead>

      <tbody>
        {stocks.map((stock) => (
          <tr key={stock.symbol} className="border-t hover:bg-gray-50 text-center transition">
            <td className="p-5">{stock.name}</td>
            <td className="p-5">₹{stock.cmp}</td>
            <td className="p-5">{stock.quantity}</td>
            <td className="p-5">₹{stock.investment.toFixed(2)}</td>
            <td className="p-5">₹{stock.presentValue.toFixed(2)}</td>
            <td
              className={
                stock.gainLoss >= 0
                  ? "text-green-600 p-2"
                  : "text-red-600 p-2"
              }
            >
              ₹{stock.gainLoss.toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
