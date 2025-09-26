import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  HiMenu, 
  HiX, 
  HiPhone, 
  HiMail 
} from 'react-icons/hi';
import { NAVIGATION, CONTACT_INFO, SITE_CONFIG } from '@/utils/constants';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (href) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a 
        href="#main-content" 
        className="skip-link"
        aria-label="Skip to main content"
      >
        Skip to content
      </a>

      {/* Top Contact Bar */}
      <div className="hidden md:block bg-blackish text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center space-x-2 hover:text-primary transition-colors"
                aria-label={`Call us at ${CONTACT_INFO.phone}`}
              >
                <HiPhone className="w-4 h-4" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center space-x-2 hover:text-primary transition-colors"
                aria-label={`Email us at ${CONTACT_INFO.email}`}
              >
                <HiMail className="w-4 h-4" />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>
            <div className="text-sm">
              <span>{CONTACT_INFO.hours.weekdays}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-all duration-300",
          isScrolled 
            ? "bg-white/95 backdrop-blur-sm shadow-sm" 
            : "bg-white"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 focus-visible:outline-2 focus-visible:outline-primary"
              aria-label={`${SITE_CONFIG.name} - Home`}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-sky-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-blackish">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-xs text-gray-500 hidden sm:block">
                  {SITE_CONFIG.tagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8" role="navigation">
              {NAVIGATION.main.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary rounded px-2 py-1",
                    isActiveLink(item.href)
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-700 hover:text-primary"
                  )}
                  aria-current={isActiveLink(item.href) ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button asChild className="bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 ">
                <Link to="/contact" className='text-white'>
                  Get Quote
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="focus-visible:outline-2 focus-visible:outline-primary"
                  aria-label="Open mobile menu"
                >
                  <HiMenu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">S</span>
                    </div>
                    <span className="font-bold text-lg">{SITE_CONFIG.name}</span>
                  </div>
                  
                  <nav className="flex flex-col space-y-4" role="navigation">
                    {NAVIGATION.main.map((item) => (
                      <Link
                        key={item.key}
                        to={item.href}
                        onClick={handleMobileMenuClose}
                        className={cn(
                          "text-lg font-medium transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary rounded px-2 py-1",
                          isActiveLink(item.href)
                            ? "text-primary"
                            : "text-gray-700"
                        )}
                        aria-current={isActiveLink(item.href) ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="border-t pt-6 space-y-4">
                    <div className="space-y-2">
                      <a 
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                      >
                        <HiPhone className="w-5 h-5" />
                        <span>{CONTACT_INFO.phone}</span>
                      </a>
                      <a 
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                      >
                        <HiMail className="w-5 h-5" />
                        <span>{CONTACT_INFO.email}</span>
                      </a>
                    </div>
                    <Button 
                      asChild 
                      className="w-full bg-gradient-to-r from-sky-400 to-blue-600 text-white"
                      onClick={handleMobileMenuClose}
                    >
                      <Link to="/contact" className='text-white'>Get Quote</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;