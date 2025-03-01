"use client";

import { motion } from "framer-motion";
import { Quotes } from "./Quotes";

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
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Achieving Your Financial Goals with Aadyanvi Wealth Management.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <button className=" inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#AACF45] hover:bg-[#08AFF1] transition-colors duration-300">
                Start Investing Now
              </button>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-12 sm:mx-auto lg:mt-0 lg:col-span-6 flex flex-col items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-[400px] h-[200px] bg-gradient-to-r from-[#AACF45] to-[#08AFF1] shadow-xl rounded-xl p-8 text-white flex items-center justify-center">
              <Quotes />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
