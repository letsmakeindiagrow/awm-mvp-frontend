import { motion } from "framer-motion";

const testimonials = [
  {
    content:
      "Aadyanvi Wealth has transformed my investment strategy. Their expert guidance helped me achieve my financial goals.",
    author: "Investment Professional",
    role: "Senior Portfolio Manager",
  },
  {
    content:
      "The team's dedication to client success and their innovative approach to wealth management is outstanding.",
    author: "Finance Expert",
    role: "Wealth Advisor",
  },
  {
    content:
      "Their market insights and personalized service have made a significant impact on my portfolio performance.",
    author: "Business Leader",
    role: "CEO",
  },
];

export function Testimonials() {
  return (
    <div className="py-24 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            Discover what our clients say about their experience with Aadyanvi
            Wealth.
          </p>
        </motion.div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-1 p-6">
                  <blockquote className="mt-4 text-lg text-gray-500">
                    {`"${testimonial.content}"`}
                  </blockquote>
                </div>
                <div className="px-6 py-4 bg-gray-50">
                  <div className="font-medium text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
