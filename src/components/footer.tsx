import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Twitter, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
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

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12 border-t border-gray-800">
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Who We Are</h4>
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
                  to="/values"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  Purpose and Values
                </Link>
              </li>
              <li>
                <Link
                  to="/leadership"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  to="/csr"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  Corporate Social Responsibility
                </Link>
              </li>
              <li>
                <Link
                  to="/newsroom"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  Newsroom
                </Link>
              </li>
            </ul>
            
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Who We Are</h4>
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
                  to="/values"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  Purpose and Values
                </Link>
              </li>
              <li>
                <Link
                  to="/leadership"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  to="/csr"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  Corporate Social Responsibility
                </Link>
              </li>
              <li>
                <Link
                  to="/newsroom"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  Newsroom
                </Link>
              </li>
            </ul>
            
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Who We Are</h4>
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
                  to="/values"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  Purpose and Values
                </Link>
              </li>
              <li>
                <Link
                  to="/leadership"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  to="/csr"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  Corporate Social Responsibility
                </Link>
              </li>
              <li>
                <Link
                  to="/newsroom"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  Newsroom
                </Link>
              </li>
            </ul>
            
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Who We Are</h4>
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
                  to="/values"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  Purpose and Values
                </Link>
              </li>
              <li>
                <Link
                  to="/leadership"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  to="/csr"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  Corporate Social Responsibility
                </Link>
              </li>
              <li>
                <Link
                  to="/newsroom"
                  className="hover:text-[#08AFF1] transition-colors"
                >
                  Newsroom
                </Link>
              </li>
            </ul>
            
          </div>

          {/* Similar changes for other sections, using Link instead of a */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="text-lg font-medium text-white mb-4">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#08AFF1] transition-colors"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#08AFF1] transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#08AFF1] transition-colors"
              >
                <Youtube className="h-6 w-6" />
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

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            Copyright © {new Date().getFullYear()} Aadyanvi Wealth. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              to="/terms"
              className="text-gray-400 hover:text-[#08AFF1] transition-colors"
            >
              Terms of use
            </Link>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-[#08AFF1] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;