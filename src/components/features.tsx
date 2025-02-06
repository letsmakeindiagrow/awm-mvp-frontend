"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Shield,
  Target,
  Users,
  BarChart3,
  PieChart,
  Briefcase,
  Star,
  Phone,
} from "lucide-react";

const features1 = [
  {
    name: "Investment Philosophy",
    description:
      "A research-driven approach focusing on high-performing stocks to maximize long-term returns.",
    icon: LineChart,
  },
  {
    name: "Our Approach",
    description:
      "From initial consultation and risk profiling to ongoing portfolio reviews, ensuring strategic growth.",
    icon: BarChart3,
  },
  {
    name: "Services Offered",
    description:
      "Comprehensive investment management, financial planning, and wealth advisory services tailored to your needs.",
    icon: Briefcase,
  },
  {
    name: "Client Success Stories",
    description:
      "Real-life case studies showcasing how our expertise has helped clients achieve financial success.",
    icon: Star,
  },
];
const features2 = [
  {
    name: "Meet Our Team",
    description:
      "Get to know our senior advisors, their credentials, experience, and investment specializations.",
    icon: Users,
  },
  {
    name: "Market Insights",
    description:
      "Stay informed with regular market commentary, quarterly outlooks, and emerging financial trends.",
    icon: PieChart,
  },
  {
    name: "Call to Action",
    description:
      "Book a confidential consultation with our experts to start your wealth-building journey today.",
    icon: Phone,
  },
];
export function Features() {
  return (
    <div
      className="py-24 bg-gray-50 flex flex-col items-center justify-center"
      id="features"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold tracking-wide uppercase text-[#08AFF1]">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Smart Wealth Management
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Experience the future of wealth management with our comprehensive
            suite of features.
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {features1.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`flex items-center justify-center h-14 w-14 rounded-full 
                  ${
                    index % 2 === 0 ? "bg-[#08AFF1]" : "bg-[#AACF45]"
                  } text-white`}
                >
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-gray-500 max-w-xs">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Centering Last Row If Not Full */}
          {features2.length > 0 && (
            <div
              className={`mt-12 grid gap-12 lg:grid-cols-${
                features2.length % 4
              } justify-center`}
            >
              {features2
                .slice(-1 * (features2.length % 4))
                .map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div
                      className={`flex items-center justify-center h-14 w-14 rounded-full 
                    ${
                      index % 2 === 0 ? "bg-[#08AFF1]" : "bg-[#AACF45]"
                    } text-white`}
                    >
                      <feature.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-gray-500 max-w-xs">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
