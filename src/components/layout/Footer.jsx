import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock
} from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  NAVIGATION, 
  CONTACT_INFO, 
  SOCIAL_LINKS, 
  SITE_CONFIG 
} from '@/utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription');
  };

  return (
    <footer className="bg-blackish text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-sky-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">{SITE_CONFIG.name}</h3>
                <p className="text-sm text-gray-400">{SITE_CONFIG.tagline}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Diversified advertisement & marketing enterprise providing comprehensive 
              business solutions across multiple sectors in Pakistan.
            </p>
            <div className="flex space-x-4">
              <a 
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Follow us on Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a 
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Follow us on Twitter"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a 
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a 
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {NAVIGATION.main.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Our Services</h4>
            <nav className="flex flex-col space-y-2">
              {NAVIGATION.footer.services.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  {CONTACT_INFO.address.full}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <FaClock className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>{CONTACT_INFO.hours.weekdays}</p>
                  <p>{CONTACT_INFO.hours.saturday}</p>
                  <p>{CONTACT_INFO.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-semibold text-lg mb-2">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-primary"
                required
              />
              <Button 
                type="submit"
                className="bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 px-6"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="mt-8">
          <h4 className="font-semibold text-lg mb-4 text-center">Our Location</h4>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <iframe
              src={import.meta.env.VITE_GOOGLE_MAP_EMBED_URL || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.8574509655897!2d67.0099646149678!3d24.860966584065833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM5LjUiTiA2N8KwMDAnNDMuOSJF!5e0!3m2!1sen!2s!4v1625000000000!5m2!1sen!2s"}
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SkywardVision Office Location"
              className="w-full h-64 rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {NAVIGATION.footer.legal.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;