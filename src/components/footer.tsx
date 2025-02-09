import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Twitter, Linkedin, Youtube } from "lucide-react";



export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Subscription Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-medium text-white">
              Stay updated with the latest
            </h3>
            <p className="mt-2 text-gray-400">at Aadyanvi Wealth</p>
          </div>
          <div className="lg:col-span-2">
            <div className="flex gap-4 max-w-md">
              <Input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="bg-[#AACF45] text-gray-900 hover:bg-[#08AFF1] hover:text-white transition-colors">
                SIGN UP
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12 border-t border-gray-800">
          {/* Algo Trading */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Algo Trading</h4>
            <ul className="space-y-3">
              <li><Link to="/backtest" className="hover:text-[#08AFF1] transition-colors">Backtest</Link></li>
              <li><Link to="/forward-test" className="hover:text-[#08AFF1] transition-colors">Forward Test</Link></li>
              <li><Link to="/live-trade" className="hover:text-[#08AFF1] transition-colors">Live Trade</Link></li>
            </ul>
          </div>

          {/* Indicator Algo */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Indicator Algo</h4>
            <ul className="space-y-3">
              <li><Link to="/tradingview" className="hover:text-[#08AFF1] transition-colors">TradingView</Link></li>
              <li><Link to="/chartink" className="hover:text-[#08AFF1] transition-colors">ChartInk</Link></li>
              <li><Link to="/pine-scripts" className="hover:text-[#08AFF1] transition-colors">Pine Scripts</Link></li>
            </ul>
          </div>

          {/* Discretionary & Community */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Discretionary</h4>
            <ul className="space-y-3">
              <li><Link to="/simulator" className="hover:text-[#08AFF1] transition-colors">Simulator</Link></li>
              <li><Link to="/strategy-builder" className="hover:text-[#08AFF1] transition-colors">Strategy Builder</Link></li>
            </ul>
          </div>

          {/* Resources & Company */}
          <div>


            <h4 className="text-lg font-medium text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-[#08AFF1] transition-colors">About Us</Link></li>
              <li><Link to="/terms" className="hover:text-[#08AFF1] transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#08AFF1] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#08AFF1] transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Social Links & Logo */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="text-lg font-medium text-white mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#08AFF1] transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#08AFF1] transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#08AFF1] transition-colors">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
            <div className="mt-8">
              <img src="/logo.png" alt="Aadyanvi Wealth" className="brightness-0 invert" style={{ width: 150, height: 80 }} />
            </div>
          </div>
          
        </div>
        {/* Disclaimer Section */}
        <div className="text-xs text-gray-400 hover:text-[#08AFF1] transition-colors text-center mb-4">
          <p>Investment in the securities market are subject to market risks. Read all the related documents carefully before investing.</p>
          <p>Registration/Certification from NISM in no way guarantees performance of the intermediary or provides any assurance of returns to investors. The securities displayed are for illustration only and are not recommendatory.</p>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            Copyright © {new Date().getFullYear()} Aadyanvi Wealth. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/disclaimer" onClick={()=>window.scrollTo(0,0)} className="text-gray-400 hover:text-[#08AFF1] transition-colors">Disclaimer</Link>
            <Link to="/terms" className="text-gray-400 hover:text-[#08AFF1] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-[#08AFF1] transition-colors">Terms of Use</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-[#08AFF1] transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
