import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HiMenu } from "react-icons/hi";
import { HiPhone, HiMail } from "react-icons/hi";
import { NAVIGATION, CONTACT_INFO, SITE_CONFIG } from "@/utils/constants";
import { cn } from "@/lib/utils";
import Logo from "../base/Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (href) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden md:block bg-blackish text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <HiPhone className="w-4 h-4" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <HiMail className="w-4 h-4" />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>
            <span>{CONTACT_INFO.hours.weekdays}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-all duration-300",
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Logo></Logo>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {NAVIGATION.main.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isActiveLink(item.href)
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-700"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 text-white"
              >
                <Link to="/contact">Get Quote</Link>
              </Button>
            </nav>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-primary"
              >
                <HiMenu className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-2 border-t pt-4 pb-6 space-y-4">
              {NAVIGATION.main.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block text-base font-medium hover:text-primary",
                    isActiveLink(item.href) ? "text-primary" : "text-gray-700"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-gradient-to-r from-sky-400 to-blue-600 text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
