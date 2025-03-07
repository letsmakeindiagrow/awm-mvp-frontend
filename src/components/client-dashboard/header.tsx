"use client";

import { useState } from "react";
import { Bell, Settings, User, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { StrategyModal } from "./strategy-modal";

// Strategy data
const algoStrategies = [
  {
    id: "equity-trading",
    name: "Equity Trading",
    description:
      "A strategy focused on equity markets using technical indicators for entry and exit points.",
    minCapital: "₹5,000",
    returnRate: "12-15% p.a.",
    riskLevel: "Medium" as const,
    price: "₹999/month",
  },
  {
    id: "index-option",
    name: "Index Option Trading",
    description:
      "Options trading strategy focused on index options with defined risk parameters.",
    minCapital: "₹50,000",
    returnRate: "18-22% p.a.",
    riskLevel: "High" as const,
    price: "₹1,999/month",
  },
  {
    id: "index-future",
    name: "Index Future Trading",
    description:
      "Strategy for trading index futures with trend following approach.",
    minCapital: "₹250,000",
    returnRate: "15-20% p.a.",
    riskLevel: "High" as const,
    price: "₹2,999/month",
  },
  {
    id: "stock-option",
    name: "Stock Option Trading",
    description:
      "Options strategy focused on individual stocks with momentum indicators.",
    minCapital: "₹500,000",
    returnRate: "20-25% p.a.",
    riskLevel: "High" as const,
    price: "₹3,999/month",
  },
  {
    id: "stock-future",
    name: "Stock Future Trading",
    description:
      "Future contracts strategy for individual stocks with swing trading approach.",
    minCapital: "₹1,000,000",
    returnRate: "18-24% p.a.",
    riskLevel: "High" as const,
    price: "₹4,999/month",
  },
];

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState<
    (typeof algoStrategies)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStrategyClick = (strategy: (typeof algoStrategies)[0]) => {
    setSelectedStrategy(strategy);
    setIsModalOpen(true);
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-brand-green to-brand-blue bg-clip-text text-transparent mr-8">
            Trading Dashboard
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="#" className="text-gray-700 hover:text-brand-blue">
              Dashboard
            </Link>
            <Link to="#" className="text-gray-700 hover:text-brand-blue">
              Create
            </Link>
            <Link to="#" className="text-gray-700 hover:text-brand-blue">
              Strategies
            </Link>

            {/* Algo Trading Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-brand-blue"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Algo Trading
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 py-1 border border-gray-200">
                  {algoStrategies.map((strategy) => (
                    <button
                      key={strategy.id}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => handleStrategyClick(strategy)}
                    >
                      {strategy.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link to="#" className="text-gray-700 hover:text-brand-blue">
              Reports
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-1 rounded-full border border-gray-300">
            <User className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Strategy Modal */}
      {selectedStrategy && (
        <StrategyModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          strategy={selectedStrategy}
        />
      )}
    </header>
  );
}
