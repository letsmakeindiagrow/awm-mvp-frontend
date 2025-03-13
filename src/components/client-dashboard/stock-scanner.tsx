import { useState } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface StockData {
  name: string;
  price: string;
  change: number;
  recommendation: "Buy" | "Sell";
  timeFrame: "Day" | "Week" | "Month";
}

export function StockScanner() {
  const [activeTab, setActiveTab] = useState<"Day" | "Week" | "Month">("Day");

  const stockData: StockData[] = [
    {
      name: "HDFC Bank",
      price: "₹1,567.25",
      change: 2.5,
      recommendation: "Buy",
      timeFrame: "Day",
    },
    {
      name: "Reliance",
      price: "₹2,890.75",
      change: -1.2,
      recommendation: "Sell",
      timeFrame: "Day",
    },
    {
      name: "TCS",
      price: "₹3,456.80",
      change: 1.8,
      recommendation: "Buy",
      timeFrame: "Week",
    },
    {
      name: "Infosys",
      price: "₹1,234.90",
      change: 3.2,
      recommendation: "Buy",
      timeFrame: "Month",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Stock Scanner</h2>
      </div>

      <div className="flex gap-4 mb-6">
        {(["Day", "Week", "Month"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === tab
                ? "bg-gray-200"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Stock of the {tab}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Stock Name
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Current Price
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Change
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Recommendation
              </th>
            </tr>
          </thead>
          <tbody>
            {stockData
              .filter((stock) => stock.timeFrame === activeTab)
              .map((stock, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-4 px-4">
                    <div className="font-medium">{stock.name}</div>
                  </td>
                  <td className="py-4 px-4">{stock.price}</td>
                  <td className="py-4 px-4">
                    <div
                      className={`flex items-center ${
                        stock.change > 0 ? "text-brand-green" : "text-red-500"
                      }`}
                    >
                      {stock.change > 0 ? (
                        <ArrowUpRight className="w-4 h-4 mr-1" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 mr-1" />
                      )}
                      {Math.abs(stock.change)}%
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        stock.recommendation === "Buy"
                          ? "bg-brand-lightGreen text-brand-green"
                          : "bg-red-100 text-red-500"
                      }`}
                    >
                      {stock.recommendation}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
