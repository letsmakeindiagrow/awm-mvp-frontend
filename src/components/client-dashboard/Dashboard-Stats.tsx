import { BarChart2, Wallet } from "lucide-react";

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="card-stats">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Position</h3>
            <p className="text-2xl font-bold text-brand-green">₹25,000</p>
            <div className="text-xs text-gray-500 mt-1">
              Current market value
            </div>
          </div>
          <div className="p-2 rounded-full bg-brand-lightGreen bg-opacity-30">
            <BarChart2 className="w-5 h-5 text-brand-green" />
          </div>
        </div>
      </div>

      <div className="card-stats">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Holding</h3>
            <p className="text-2xl font-bold text-brand-blue">₹100,000</p>
            <div className="text-xs text-gray-500 mt-1">
              Total portfolio value
            </div>
          </div>
          <div className="p-2 rounded-full bg-brand-lightBlue bg-opacity-30">
            <Wallet className="w-5 h-5 text-brand-blue" />
          </div>
        </div>
      </div>
    </div>
  );
}
