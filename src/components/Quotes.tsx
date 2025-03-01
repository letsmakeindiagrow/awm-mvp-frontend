"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { quotes } from "../utils/quotes";

const TYPING_SPEED = 50;
const ERASE_SPEED = 30;
const DELAY = 2000;

export function Quotes() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentQuote = `"${quotes[quoteIndex].text}" — ${quotes[quoteIndex].author}`;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText === "") {
          setIsDeleting(false);
          setQuoteIndex((prev) => (prev + 1) % quotes.length);
        }
      }, ERASE_SPEED);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) => currentQuote.slice(0, prev.length + 1));
        if (displayText === currentQuote) {
          setTimeout(() => setIsDeleting(true), DELAY);
        }
      }, TYPING_SPEED);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, quoteIndex]);

  return (
    <motion.div
      className="mt-5 text-left"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      style={{ maxWidth: "42rem" }} // Compact width
    >
      <blockquote className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed">
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-1 h-5 bg-gray-500 ml-1"
        />
      </blockquote>
    </motion.div>
  );
}
