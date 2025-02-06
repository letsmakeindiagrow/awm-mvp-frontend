"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Assets Under Management", value: "₹10B+" },
  { label: "Happy Clients", value: "5000+" },
  { label: "Years of Experience", value: "15+" },
  { label: "Return on Investment", value: "25%" },
];

export function Stats() {
  return (
    <div className="bg-[#08AFF1]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <dt className="text-base font-medium text-white">{stat.label}</dt>
              <dd className="mt-2 text-3xl font-extrabold text-white">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
