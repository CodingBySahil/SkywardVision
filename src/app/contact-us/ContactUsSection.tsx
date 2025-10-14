import React from "react";
import ContactForm from "@/components/sections/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Headphones,
} from "lucide-react";
import { CONTACT_INFO, SEO_META } from "@/utils/constants";
import FaqsSection from "@/components/sections/Faqs";

const ContactUsSection = () => {
  return (
    <>
      <main id="main-content" className="">
        {/* Hero Section */}

        <section className="relative py-24 bg-gradient-to-r from-sky-400 to-blue-600 overflow-hidden">
          {/* Floating Shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 w-full max-w-7xl px-6 lg:px-12 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 text-white text-center lg:text-left animate-fade-in-up">
                <div className="space-y-4">
                  <h6 className="text-blue-100 text-base font-medium uppercase tracking-wide">
                    Get in Touch
                  </h6>
                  <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                    Let’s Build{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                      Success Together
                    </span>
                  </h2>
                  <p className="text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    At SkywardVision, we believe collaboration is the foundation
                    of growth. Whether it’s advertising, real estate, transport,
                    or digital marketing – our team is here to provide solutions
                    that elevate your business to new heights.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-500">
                    <h4 className="text-3xl font-bold">10+ Years</h4>
                    <p className="text-blue-200 text-sm">Industry Experience</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-500">
                    <h4 className="text-3xl font-bold">500+</h4>
                    <p className="text-blue-200 text-sm">Projects Delivered</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-500">
                    <h4 className="text-3xl font-bold">98%</h4>
                    <p className="text-blue-200 text-sm">Client Satisfaction</p>
                  </div>
                </div>

                {/* CTA */}
                <div>
                  <a
                    href="/contact-us"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-white text-blue-600 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Contact Us Today
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Images */}
              <div className="relative flex justify-center lg:justify-end animate-fade-in">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="relative mt-12">
                    <img
                      src="https://pagedone.io/asset/uploads/1717741205.png"
                      alt="Skyward Office"
                      className="rounded-2xl object-cover shadow-2xl"
                    />
                  </div>
                  <div className="relative mt-6 sm:mt-0">
                    <img
                      src="https://pagedone.io/asset/uploads/1717741215.png"
                      alt="Skyward Team"
                      className="rounded-2xl object-cover shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}

        <section className="relative py-24 bg-[#101727] overflow-hidden text-white">
          {/* Floating Gradient Backgrounds */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-sky-400 to-blue-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-52 h-52 bg-blue-600/20 rounded-full blur-2xl animate-pulse delay-700"></div>
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] bg-gradient-to-r from-blue-600 to-sky-400 opacity-10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              {/* Contact Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {/* Phone */}
                <Card className="border border-white/10 bg-white/5 backdrop-blur-md text-center rounded-2xl hover:scale-[1.03] transition-transform duration-500">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">
                      Call Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Speak directly with our team for immediate assistance.
                    </p>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-sky-400 font-semibold text-lg hover:underline"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="border border-white/10 bg-white/5 backdrop-blur-md text-center rounded-2xl hover:scale-[1.03] transition-transform duration-500">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">
                      Email Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Send us a detailed message about your project needs.
                    </p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-sky-400 font-semibold text-lg hover:underline"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </CardContent>
                </Card>

                {/* WhatsApp */}
                <Card className="border border-white/10 bg-white/5 backdrop-blur-md text-center rounded-2xl hover:scale-[1.03] transition-transform duration-500">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">
                      WhatsApp
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Quick chat for instant responses and support.
                    </p>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hello%20SkywardVision%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 font-semibold text-lg hover:underline"
                    >
                      Chat Now
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Office Info & Map */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Details */}
                <Card className="border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl hover:scale-[1.02] transition-transform duration-500">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white flex items-center space-x-2">
                      <MapPin className="w-6 h-6 text-sky-400" />
                      <span>Visit Our Office</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 text-gray-300">
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        Address:
                      </h4>
                      <p>{CONTACT_INFO.address.full}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-sky-400" />
                        <span>Business Hours:</span>
                      </h4>
                      <div className="space-y-1">
                        <p>{CONTACT_INFO.hours.weekdays}</p>
                        <p>{CONTACT_INFO.hours.saturday}</p>
                        <p className="text-red-400">
                          {CONTACT_INFO.hours.sunday}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center space-x-2">
                        <Headphones className="w-5 h-5 text-sky-400" />
                        <span>24/7 Support:</span>
                      </h4>
                      <p>
                        Emergency support available via WhatsApp and email for
                        existing clients.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Map */}
                <Card className="border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">
                      Find Us Here
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="aspect-w-16 aspect-h-12">
                      <iframe
                        src={
                          process.env.VITE_GOOGLE_MAP_EMBED_URL ||
                          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.8574509655897!2d67.0099646149678!3d24.860966584065833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM5LjUiTiA2N8KwMDAnNDMuOSJF!5e0!3m2!1sen!2s!4v1625000000000!5m2!1sen!2s"
                        }
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="SkywardVision Office Location"
                        className="w-full h-80 rounded-b-lg"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />

        {/* Faqs Section */}
        <FaqsSection />
      </main>
    </>
  );
};

export default ContactUsSection;
