import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LogOutIcon, Menu, X } from "lucide-react";

export function Logo() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-transparent`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center ml-[-10px]">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src="/new logo png website.png"
                alt="Aadyanvi Wealth"
                className="h-13.5 w-auto cursor-pointer"
                style={{ height: "200px", width: "240px" }}
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to={"/login"}
              className="text-gray-700 hover:text-[#AACF45] transition-colors"
            >
              Log In
            </Link>
            <Link to="/signup">
              <button className="bg-[#AACF45] text-white px-6 py-2 rounded-lg hover:bg-[#08AFF1] transition-colors">
                Sign Up
              </button>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#AACF45] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-b border-gray-100"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/login"
              className="block px-3 py-2 text-gray-700 hover:text-[#AACF45] transition-colors"
            >
              Log In
            </Link>
            <Link to="/signup">
              <button className="w-full text-center bg-[#AACF45] text-white px-6 py-2 rounded-lg hover:bg-[#08AFF1] transition-colors">
                Sign Up
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Logo;