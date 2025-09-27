import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { CONTACT_INFO } from '@/utils/constants';

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=Hello%20SkywardVision%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 animate-pulse-slow focus-visible:outline-2 focus-visible:outline-green-500"
      aria-label="Open WhatsApp chat with SkywardVision"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7 text-white" />
      
      {/* Ripple effect */}
      <span className="absolute -inset-1 rounded-full bg-green-500 opacity-30 animate-ping"></span>
    </a>
  );
};

export default WhatsAppButton;