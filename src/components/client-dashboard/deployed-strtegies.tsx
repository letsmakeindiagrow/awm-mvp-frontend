import { Filter } from "lucide-react";

export function DeployedStrategies() {
  // Sample data - in a real app, this would come from an API
  const strategies = [
    {
      name: "Moving Average Crossover",
      type: "Automated",
      status: "Active",
      pnl: "+₹2,500",
    },
    {
      name: "Bollinger Bands Strategy",
      type: "Automated",
      status: "Active",
      pnl: "+₹1,200",
    },
    {
      name: "MACD Divergence",
      type: "Automated",
      status: "Paused",
      pnl: "-₹300",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Deployed Strategies</h2>

        <div className="flex items-center gap-3">
          <select className="border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent">
            <option>All Strategies</option>
            <option>Active</option>
            <option>Paused</option>
          </select>

          <button className="bg-gradient-primary text-white px-4 py-2 rounded-md flex items-center hover:opacity-90 transition-opacity">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Strategy Name
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Type
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                Status
              </th>
              <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">
                P&L
              </th>
            </tr>
          </thead>
          <tbody>
            {strategies.map((strategy, index) => (
              <tr key={index} className="border-b">
                <td className="py-4 px-4 font-medium">{strategy.name}</td>
                <td className="py-4 px-4">{strategy.type}</td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      strategy.status === "Active"
                        ? "bg-brand-lightGreen text-brand-green"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {strategy.status}
                  </span>
                </td>
                <td
                  className={`py-4 px-4 text-right ${
                    strategy.pnl.startsWith("+")
                      ? "text-brand-green"
                      : "text-red-500"
                  }`}
                >
                  {strategy.pnl}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
