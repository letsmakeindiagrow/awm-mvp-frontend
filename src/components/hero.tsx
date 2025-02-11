"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, BarChart3, Layers } from "lucide-react";

export function Hero() {
  return (
    <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Strategic Investments</span>
              <span className="block text-[#08AFF1]">Superior Returns</span>
            </h1>
            {/* <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              <span className="block">Strategic <span className="text-[#08AFF1]">Investments</span></span>
              <span className="block text-[#08AFF1]">Superior Returns</span>
            </h1>
 */}
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Achieving Your Financial Goals with Aadyanvi Wealth Management.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              {/*ml-[-43px] */}
              <button className=" inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#AACF45] hover:bg-[#08AFF1] transition-colors duration-300">
                Start Investing Now
              </button>
            </div>
          </motion.div>
          {/* <motion.div 
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-gradient-to-r from-[#AACF45] to-[#08AFF1] rounded-lg overflow-hidden">
                <div className="relative h-64 sm:h-72 bg-white/10 backdrop-blur-lg p-6">
                  <div className="h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <TrendingUp className="h-8 w-8 text-white" />
                      <div className="text-white text-right">
                        <div className="text-sm opacity-80">Portfolio Value</div>
                        <div className="text-2xl font-bold">₹1,234,567</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <BarChart2 className="h-6 w-6 text-white" />
                        <div className="text-white text-right">
                          <div className="text-sm opacity-80">Daily Return</div>
                          <div className="text-xl font-bold">+2.4%</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <PieChart className="h-6 w-6 text-white" />
                        <div className="text-white text-right">
                          <div className="text-sm opacity-80">Asset Allocation</div>
                          <div className="text-xl font-bold">Optimized</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div> */}
          <motion.div
            className="mt-12 sm:mx-auto lg:mt-0 lg:col-span-6 flex flex-col items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-2xl bg-gradient-to-r from-[#AACF45] to-[#08AFF1] shadow-xl rounded-xl p-8 text-white">
              <h2 className="text-3xl font-bold text-center mb-6">
                Our Market Impact
              </h2>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-center space-x-4">
                  <BarChart3 className="h-12 w-12 text-white" />
                  <div>
                    <p className="text-xl font-semibold">20M+</p>
                    <p className="text-sm opacity-90">Backtests Done</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <TrendingUp className="h-12 w-12 text-white" />
                  <div>
                    <p className="text-xl font-semibold">12.5M+</p>
                    <p className="text-sm opacity-90">Trades Taken</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Users className="h-12 w-12 text-white" />
                  <div>
                    <p className="text-xl font-semibold">13,000+</p>
                    <p className="text-sm opacity-90">Traders</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Layers className="h-12 w-12 text-white" />
                  <div>
                    <p className="text-xl font-semibold">10,000+</p>
                    <p className="text-sm opacity-90">Community Members</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Finance Feature Box
          <motion.div
            className="mt-12 sm:mx-auto lg:mt-0 lg:col-span-6 flex flex-col items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-lg bg-white shadow-xl rounded-lg p-6 ">
              <h2 className="text-xl font-semibold text-gray-900 text-center mb-4">Market Insights</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <TrendingUp className="h-10 w-10 text-[#08AFF1]" />
                  <div>
                    <p className="text-sm text-gray-500">Portfolio Growth</p>
                    <p className="text-lg font-bold text-gray-900">+12.5% Q1</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <DollarSign className="h-10 w-10 text-[#AACF45]" />
                  <div>
                    <p className="text-sm text-gray-500">Investment Returns</p>
                    <p className="text-lg font-bold text-gray-900">15.3% Annual</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <LineChart className="h-10 w-10 text-gray-700" />
                  <div>
                    <p className="text-sm text-gray-500">Market Trends</p>
                    <p className="text-lg font-bold text-gray-900">Optimized</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <PieChart className="h-10 w-10 text-[#08AFF1]" />
                  <div>
                    <p className="text-sm text-gray-500">Diversification</p>
                    <p className="text-lg font-bold text-gray-900">Balanced</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}
