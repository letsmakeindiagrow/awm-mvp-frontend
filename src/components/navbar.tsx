import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
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
      className={`fixed top-0 w-full z-50 border-b border-gray-100 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent"
      }`}
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
            <Link to="/comingsoon" className="text-gray-700 hover:text-[#AACF45] transition-colors">Features</Link>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-gray-700 hover:text-[#AACF45] transition-colors">About</Link>
            <Link to="#testimonials" className="text-gray-700 hover:text-[#AACF45] transition-colors">Testimonials</Link>
            <Link to="#contact" className="text-gray-700 hover:text-[#AACF45] transition-colors">Contact</Link>
            <Link to="/login" onClick={() => window.scrollTo(0, 0)}>
              <button className="bg-[#08AFF1] text-white px-6 py-2 rounded-lg hover:bg-[#AACF45] transition-colors">Client Login</button>
            </Link>
            <Link to="/login" onClick={() => window.scrollTo(0, 0)}>
              <button className="bg-[#AACF45] text-white px-6 py-2 rounded-lg hover:bg-[#08AFF1] transition-colors">Investor Login</button>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-[#AACF45] transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="#features" className="block px-3 py-2 text-gray-700 hover:text-[#AACF45] transition-colors">Features</Link>
            <Link to="#about" className="block px-3 py-2 text-gray-700 hover:text-[#AACF45] transition-colors">About</Link>
            <Link to="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-[#AACF45] transition-colors">Testimonials</Link>
            <Link to="#contact" className="block px-3 py-2 text-gray-700 hover:text-[#AACF45] transition-colors">Contact</Link>
            <Link to="/login">
              <button className="w-full text-center bg-[#08AFF1] text-white px-6 py-2 rounded-lg hover:bg-[#AACF45] transition-colors">Client Login</button>
            </Link>
            <Link to="/login">
              <button className="w-full text-center bg-[#AACF45] text-white px-6 py-2 rounded-lg hover:bg-[#08AFF1] transition-colors">Investor Login</button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
