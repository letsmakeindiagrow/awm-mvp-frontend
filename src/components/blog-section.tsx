import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  ArrowRight,
  Clock,
  TrendingUp,
  Briefcase,
  PieChart,
} from "lucide-react";

const blogs = [
  {
    title: "Top Mutual Fund Mistakes to Avoid",
    description:
      "Avoid common mutual fund mistakes to maximize returns and minimize risks.",
    image: "/blog1.jpg",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "Market Analysis",
    icon: TrendingUp,
    link: "https://1finance.co.in/blog/top-mutual-fund-mistakes-to-avoid/",
  },
  {
    title: "The Future of Investment Banking in 2025",
    description:
      "Explore emerging trends and technological innovations shaping the investment banking landscape.",
    image: "/blog2.jpg",
    date: "January 20, 2025",
    readTime: "7 min read",
    category: "Industry Insights",
    icon: Briefcase,
    link: "https://bostoninstituteofanalytics.org/blog/top-7-trends-shaping-the-future-of-investment-banking-in-2024/",
  },
  {
    title: "Portfolio Diversification Strategies",
    description:
      "Discover effective ways to diversify your investment portfolio and minimize risk while maximizing returns.",
    image: "/blog3.jpeg",
    date: "February 01, 2025",
    readTime: "6 min read",
    category: "Investment Strategy",
    icon: PieChart,
    link: "https://www.gripinvest.in/blog/role-of-diversification",
  },
];

export function BlogSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest Insights
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Stay informed with our latest research and market analysis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-6">
                  <div className="flex items-center gap-2 text-sm text-[#08AFF1] mb-3">
                    <blog.icon className="h-4 w-4" />
                    {blog.category}
                  </div>
                  <CardTitle className="text-xl font-bold mb-2">
                    {blog.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {blog.description}
                  </CardDescription>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {blog.readTime}
                    </div>
                    <div>{blog.date}</div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    variant="ghost"
                    className="w-full text-[#08AFF1] hover:text-[#AACF45] hover:bg-transparent transition-colors duration-300"
                  >
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="outline"
            className="text-[#08AFF1] border-[#08AFF1] hover:bg-[#08AFF1] hover:text-white"
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default BlogSection;
