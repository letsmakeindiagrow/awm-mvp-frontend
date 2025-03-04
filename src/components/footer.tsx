import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Phone,
  Clock,
  MapPin,
} from "lucide-react";

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
          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#08AFF1]" />
                <a
                  href="mailto:namaste@aadyanvi.com"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  namaste@aadyanvi.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#08AFF1]" />
                <a
                  href="tel:+918004218007 "
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  +91 8004218007
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-[#08AFF1] mt-1" />
                <span>Mon-Sun: 9:15 AM - 8:00 PM</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#08AFF1] mt-1" />
                <span>ALLAHABAD | NEW DELHI</span>
              </li>
            </ul>
          </div>

          {/* Indicator Algo */}
          <div className="pl-12">
            <h4 className=" text-lg font-medium text-white mb-4">
              Market Entities
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.sebi.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  SEBI India
                </a>
              </li>
              <li>
                <a
                  href="https://www.amfiindia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  AMFI India
                </a>
              </li>
              <li>
                <a
                  href="https://www.irdai.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  IRDAI India
                </a>
              </li>
              <li>
                <a
                  href="https://www.cdslindia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  CDSL India
                </a>
              </li>
              <li>
                <a
                  href="https://nsdl.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  NSDL India
                </a>
              </li>
            </ul>
          </div>

          {/* Discretionary & Community */}
          <div className="pl-10">
            <h4 className="text-lg font-medium text-white mb-4">Exchanges</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.nseindia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  NSE India
                </a>
              </li>
              <li>
                <a
                  href="https://www.bseindia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  BSE India
                </a>
              </li>
              <li>
                <a
                  href="https://www.mcxindia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  MCX India
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Company */}
          <div className="" >
            <h4 className="text-lg font-medium text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links & Logo */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="text-lg font-medium text-white mb-4">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/aadyanviwealth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#08AFF1] transition-colors"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.linkedin.com/company/aadyanviwealth/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#08AFF1] transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/aadyanviwealth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#08AFF1] transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </a>
              <a
                href="https://www.facebook.com/aadyanviwealth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#08AFF1] transition-colors"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
            <div className="mt-8">
              <img
                src="/logo.png"
                alt="Aadyanvi Wealth"
                className="brightness-0 invert"
                style={{ width: 150, height: 80 }}
              />
            </div>
          </div>
        </div>
        {/* Disclaimer Section */}
        <div className="text-xs text-gray-400 hover:text-[#08AFF1] transition-colors text-center mb-4">
          <p>
            Investment in the securities market are subject to market risks.
            Read all the related documents carefully before investing.
          </p>
          <p>
            Registration/Certification from NISM in no way guarantees
            performance of the intermediary or provides any assurance of returns
            to investors. The securities displayed are for illustration only and
            are not recommendatory.
          </p>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            Copyright © {new Date().getFullYear()} Aadyanvi Wealth. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/disclaimer" onClick={()=>window.scrollTo(0,0)} className="text-gray-400 hover:text-[#08AFF1] transition-colors">Disclaimer</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-[#08AFF1] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-[#08AFF1] transition-colors">Terms of Use</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-[#08AFF1] transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
