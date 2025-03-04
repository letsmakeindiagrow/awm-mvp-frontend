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
  FileText,
  Shield,
  Info,
  Home,
  Briefcase,
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
        {/* Footer Navigation - Larger and Balanced */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-gray-800">
          {/* Column 1: Bigger Logo + CIN */}
          <div className="flex flex-col items-start">
            <div className="mb-6">
              <img
                src="/logo.png"
                alt="Aadyanvi Wealth"
                className="brightness-0 invert"
                style={{ width: 300, height: 180 }} // Increased logo size
              />
            </div>
            <div className="flex items-center gap-2 pl-7">
              <p className="text-gray-400 text-lg">  
                <span className="font-medium">CIN:</span> U65990UP2021PTC145944
              </p>
            </div>
          </div>

          {/* Column 2: Site Map with Icons */}
          <div className="pl-8"> {/* Added padding to shift content right */}
            <h4 className="text-xl font-medium text-white mb-4">Quick Links</h4>  
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Home className="h-5 w-5 text-[#08AFF1]" /> {/* Slightly larger icon */}
                <Link
                  to="/"
                  className="hover:text-[#08AFF1] transition-colors text-lg"  
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Info className="h-5 w-5 text-[#08AFF1]" />
                <Link
                  to="/about"
                  className="hover:text-[#08AFF1] transition-colors text-lg"
                >
                  About Us
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#08AFF1]" />
                <Link
                  to="/privacy"
                  className="hover:text-[#08AFF1] transition-colors text-lg"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#08AFF1]" />
                <Link
                  to="/terms"
                  className="hover:text-[#08AFF1] transition-colors text-lg"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-[#08AFF1]" />
                <Link
                  to="/disclaimer"
                  className="hover:text-[#08AFF1] transition-colors text-lg"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact + Socials */}
          <div className="pl-8"> {/* Added padding to shift content right */}
            <h4 className="text-xl font-medium text-white mb-4">Contact Us</h4>  
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#08AFF1]" /> {/* Slightly larger icon */}
                <a
                  href="mailto:namaste@aadyanvi.com"
                  className="hover:text-[#08AFF1] transition-colors text-lg"  
                >
                  namaste@aadyanvi.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#08AFF1]" />
                <a
                  href="tel:+918004218007 "
                  className="hover:text-[#08AFF1] transition-colors text-lg"
                >
                  +91 8004218007
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-[#08AFF1] mt-1" />
                <span className="text-lg">Mon-Sun: 9:15 AM - 8:00 PM</span>  
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[#08AFF1] mt-1" />
                <span className="text-lg">ALLAHABAD | NEW DELHI</span>  
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-xl font-medium text-white mb-4">  
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
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/aadyanviwealth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#08AFF1] transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Added Line */}
        <div className="text-xs text-gray-400 text-center mb-4">
  <p>
    <a
      href="https://www.nseindia.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#08AFF1] transition-colors"
    >
      NSE
    </a>
    {" | "}
    <a
      href="https://www.bseindia.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#08AFF1] transition-colors"
    >
      BSE
    </a>
    {" | "}
    <a
      href="https://www.mcxindia.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#08AFF1] transition-colors"
    >
      MCX
    </a>
    {" | "}
    <a
      href="https://www.sebi.gov.in"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#08AFF1] transition-colors"
    >
      SEBI
    </a>
    {" | "}
    <a
      href="https://www.amfiindia.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#08AFF1] transition-colors"
    >
      AMFI
    </a>
    {" | "}
    <a
      href="https://www.irdai.gov.in"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#08AFF1] transition-colors"
    >
      IRDAI
    </a>
    {" | "}
    <a
      href="https://www.cdslindia.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#08AFF1] transition-colors"
    >
      CDSL
    </a>
    {" | "}
    <a
      href="https://nsdl.co.in"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#08AFF1] transition-colors"
    >
      NSDL
    </a>
  </p>
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
            <Link
              to="/disclaimer"
              onClick={() => window.scrollTo(0, 0)}
              className="text-gray-400 hover:text-[#08AFF1] transition-colors"
            >
              Disclaimer
            </Link>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-[#08AFF1] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-[#08AFF1] transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;