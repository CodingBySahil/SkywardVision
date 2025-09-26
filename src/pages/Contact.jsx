import React from 'react';
import SEOHead from '@/components/SEOHead';
import ContactForm from '@/components/sections/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Headphones
} from 'lucide-react';
import { CONTACT_INFO, SEO_META } from '@/utils/constants';

const Contact = () => {
  return (
    <>
      <SEOHead
        title={SEO_META.contact.title}
        description={SEO_META.contact.description}
        keywords={SEO_META.contact.keywords}
        url="/contact"
      />

      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-sky-400 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 border-white/30 text-white">
                Get In Touch
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Let's Discuss Your
                <span className="block text-yellow-300">Next Big Project</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Ready to elevate your business? Our team of experts is here to help you 
                achieve your goals. Get in touch today for a free consultation and 
                discover how we can transform your business.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* Phone */}
                <Card className="border-0 shadow-xl bg-white text-center hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-blackish">Call Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Speak directly with our team for immediate assistance.
                    </p>
                    <a 
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-primary font-semibold text-lg hover:underline"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="border-0 shadow-xl bg-white text-center hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-blackish">Email Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Send us a detailed message about your project needs.
                    </p>
                    <a 
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-primary font-semibold text-lg hover:underline"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </CardContent>
                </Card>

                {/* WhatsApp */}
                <Card className="border-0 shadow-xl bg-white text-center hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-blackish">WhatsApp</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Quick chat for instant responses and support.
                    </p>
                    <a 
                      href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hello%20SkywardVision%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-semibold text-lg hover:underline"
                    >
                      Chat Now
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Office Info */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Details */}
                <Card className="border-0 shadow-xl bg-white">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blackish flex items-center space-x-2">
                      <MapPin className="w-6 h-6 text-primary" />
                      <span>Visit Our Office</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-blackish mb-2">Address:</h4>
                      <p className="text-gray-600">
                        {CONTACT_INFO.address.full}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blackish mb-2 flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>Business Hours:</span>
                      </h4>
                      <div className="space-y-1 text-gray-600">
                        <p>{CONTACT_INFO.hours.weekdays}</p>
                        <p>{CONTACT_INFO.hours.saturday}</p>
                        <p className="text-red-600">{CONTACT_INFO.hours.sunday}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blackish mb-2 flex items-center space-x-2">
                        <Headphones className="w-5 h-5 text-primary" />
                        <span>24/7 Support:</span>
                      </h4>
                      <p className="text-gray-600">
                        Emergency support available via WhatsApp and email for existing clients.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Map */}
                <Card className="border-0 shadow-xl bg-white overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blackish">Find Us Here</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="aspect-w-16 aspect-h-12">
                      <iframe
                        src={import.meta.env.VITE_GOOGLE_MAP_EMBED_URL || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.8574509655897!2d67.0099646149678!3d24.860966584065833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM5LjUiTiA2N8KwMDAnNDMuOSJF!5e0!3m2!1sen!2s!4v1625000000000!5m2!1sen!2s"}
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
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

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">
                  Frequently Asked Questions
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-blackish mb-6">
                  Got Questions? We've Got Answers
                </h2>
              </div>

              <div className="space-y-8">
                {[
                  {
                    question: "What services does SkywardVision offer?",
                    answer: "We offer comprehensive services including outdoor advertising, digital marketing, real estate solutions, dairy farming consultancy, and transportation services. Our diversified approach allows us to serve multiple business sectors."
                  },
                  {
                    question: "How long does it take to complete a project?",
                    answer: "Project timelines vary depending on scope and complexity. Simple campaigns can be launched within 2-3 weeks, while comprehensive solutions may take 2-3 months. We provide detailed timelines during our initial consultation."
                  },
                  {
                    question: "Do you work with businesses of all sizes?",
                    answer: "Yes! We work with startups, SMEs, and large corporations. Our scalable solutions are designed to meet the unique needs and budgets of businesses at every stage of growth."
                  },
                  {
                    question: "What makes SkywardVision different from other agencies?",
                    answer: "Our unique diversified approach sets us apart. We're not just an advertising agency – we offer expertise across multiple sectors including real estate, dairy farming, and transportation, providing comprehensive business solutions under one roof."
                  },
                  {
                    question: "How do you measure success?",
                    answer: "We focus on measurable results including increased brand visibility, website traffic, lead generation, sales growth, and ROI. Each project includes detailed analytics and reporting to track performance."
                  },
                ].map((faq, index) => (
                  <Card key={index} className="border-0 shadow-lg bg-gray-50">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-lg text-blackish mb-3">
                        {faq.question}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;