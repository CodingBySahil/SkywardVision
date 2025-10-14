import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MdOutdoorGrill,
  MdDevices,
  MdHome,
  MdLocalShipping,
} from "react-icons/md";
import { GiFarmTractor } from "react-icons/gi";
import {
  ArrowRight,
  CircleCheck as CheckCircle,
  Star,
  TrendingUp,
  Users,
  Target,
} from "lucide-react";
import { SERVICES, SEO_META } from "@/utils/constants";
import { generateServiceSchema } from "@/utils/seo";

const ServicesSection = () => {
  const iconMap: any = {
    MdOutdoorGrill: MdOutdoorGrill,
    MdDevices: MdDevices,
    MdHome: MdHome,
    GiFarmTractor: GiFarmTractor,
    MdLocalShipping: MdLocalShipping,
  };

  const serviceDetails:any = {
    outdoor: {
      benefits: [
        "High visibility locations",
        "Targeted audience reach",
        "Cost-effective advertising",
        "24/7 brand exposure",
      ],
      process: [
        "Location analysis",
        "Design creation",
        "Installation",
        "Performance tracking",
      ],
      pricing: "Starting from PKR 50,000/month",
    },
    digital: {
      benefits: [
        "Increased online presence",
        "Higher conversion rates",
        "Measurable ROI",
        "Global reach potential",
      ],
      process: [
        "Strategy development",
        "Campaign creation",
        "Implementation",
        "Optimization",
      ],
      pricing: "Starting from PKR 25,000/month",
    },
    "real-estate": {
      benefits: [
        "Faster property sales",
        "Premium positioning",
        "Professional presentation",
        "Market expertise",
      ],
      process: [
        "Property evaluation",
        "Marketing strategy",
        "Campaign execution",
        "Sales support",
      ],
      pricing: "Custom pricing based on property value",
    },
    dairy: {
      benefits: [
        "Increased milk production",
        "Improved farm efficiency",
        "Quality assurance",
        "Cost optimization",
      ],
      process: [
        "Farm assessment",
        "Solution design",
        "Implementation",
        "Ongoing support",
      ],
      pricing: "Starting from PKR 100,000 per project",
    },
    transportation: {
      benefits: [
        "Route optimization",
        "Cost reduction",
        "Improved efficiency",
        "Fleet management",
      ],
      process: [
        "Fleet analysis",
        "System setup",
        "Driver training",
        "Performance monitoring",
      ],
      pricing: "Starting from PKR 75,000 per fleet",
    },
  };

  // Generate structured data for services
  const servicesSchema = SERVICES.map((service) =>
    generateServiceSchema(service)
  );

  return (
    <>
      <main id="main-content" className="">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-r from-sky-400 to-blue-600 overflow-hidden">
          {/* Background Layer */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/20"></div>
          </div>

          {/* Container */}
          <div className="relative z-10 container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              {/* Section Badge */}
              <Badge
                variant="outline"
                className="mb-4 border-white/30 text-white backdrop-blur-sm"
              >
                Our Services
              </Badge>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                Comprehensive Solutions
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  For Every Business Need
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                At{" "}
                <span className="font-semibold text-white">SkywardVision</span>,
                we specialize in delivering a complete suite of services — from{" "}
                <span className="text-yellow-300">outdoor advertising</span> and{" "}
                <span className="text-yellow-300">digital marketing</span> to{" "}
                <span className="text-yellow-300">real estate</span>,{" "}
                <span className="text-yellow-300">dairy farming</span>, and{" "}
                <span className="text-yellow-300">
                  transportation solutions
                </span>
                . Our goal is to empower your business with strategies that
                drive growth and long-term success.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  <Link href="/contact-us">Get Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-12 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-12 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        </section>

        {/* Services Overview */}
        {/* <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-blackish mb-6">
                  Why Choose Our Services?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blackish mb-2">
                      Results-Driven
                    </h3>
                    <p className="text-gray-600">
                      We focus on delivering measurable results that impact your
                      bottom line.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blackish mb-2">
                      Expert Team
                    </h3>
                    <p className="text-gray-600">
                      Our experienced professionals bring decades of industry
                      expertise.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blackish mb-2">
                      Proven Growth
                    </h3>
                    <p className="text-gray-600">
                      Track record of helping businesses achieve sustainable
                      growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Why Choose Us Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-sky-50 to-blue-50 relative overflow-hidden">
          {/* Floating Gradient Shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-sky-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>

          <div className="relative container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto text-center space-y-16">
              {/* Section Header */}
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#101727] mb-6">
                  Why Choose{" "}
                  <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                    SkywardVision?
                  </span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We combine cutting-edge{" "}
                  <span className="text-sky-600 font-semibold">
                    SMD advertising
                  </span>{" "}
                  technology with strategic expertise to ensure your brand
                  shines brighter than ever.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Item 1 */}
                <div className="group text-center p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#101727] mb-2">
                    Results-Driven
                  </h3>
                  <p className="text-gray-600">
                    We deliver measurable outcomes that maximize visibility and
                    boost brand growth.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="group text-center p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#101727] mb-2">
                    Expert Team
                  </h3>
                  <p className="text-gray-600">
                    Our professionals bring deep expertise in digital displays,
                    outdoor media, and strategic campaigns.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="group text-center p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#101727] mb-2">
                    Proven Growth
                  </h3>
                  <p className="text-gray-600">
                    We’ve helped businesses scale with innovative advertising
                    that captures attention day & night.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-20 lg:py-28 bg-[#101727] relative overflow-hidden">
          {/* Floating Gradient Shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-sky-400 to-blue-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-16 right-16 w-56 h-56 bg-blue-600/30 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto space-y-24">
              {SERVICES.map((service, index) => {
                const IconComponent =
                  iconMap[service.icon] || MdOutdoorGrill;
                const details = serviceDetails[service.id] || {};
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="scroll-mt-24"
                  >
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                        !isEven ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Service Content */}
                      <div
                        className={`space-y-6 transform transition-all duration-700 ease-out hover:scale-[1.02] ${
                          !isEven ? "lg:order-2" : ""
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 animate-bounce-slow">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                              {service.name}
                            </h2>
                            <Badge
                              variant="secondary"
                              className="mt-2 bg-white/10 text-sky-300 border border-sky-400/50"
                            >
                              Professional Service
                            </Badge>
                          </div>
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Key Features */}
                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold text-white">
                            Key Features:
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {service.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center space-x-2"
                              >
                                <CheckCircle className="w-5 h-5 text-sky-400 flex-shrink-0" />
                                <span className="text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Benefits */}
                        {details.benefits && (
                          <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white">
                              Benefits:
                            </h3>
                            <div className="space-y-2">
                              {details.benefits.map((benefit, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center space-x-2"
                                >
                                  <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                  <span className="text-gray-300">
                                    {benefit}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Pricing */}
                        {details.pricing && (
                          <div className="bg-gradient-to-r from-sky-400/10 to-blue-600/10 p-4 rounded-lg border border-sky-400/20">
                            <h4 className="font-semibold text-white mb-2">
                              Pricing:
                            </h4>
                            <p className="text-sky-400 font-bold text-lg">
                              {details.pricing}
                            </p>
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button
                            asChild
                            className="bg-gradient-to-r from-sky-400 to-blue-600 shadow-lg shadow-sky-500/30 hover:scale-105 transition-transform duration-300"
                          >
                            <Link href="/contact-us" className="text-white">
                              Get Quote
                            </Link>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="border-sky-400 text-sky-300 hover:bg-sky-400/10"
                          >
                            <Link
                              href="/portfolio"
                              className="flex items-center"
                            >
                              View Case Studies
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        </div>
                      </div>

                      {/* Service Image */}
                      <div className={`${!isEven ? "lg:order-1" : ""}`}>
                        <div className="relative group">
                          <img
                            src={service.image}
                            alt={`${service.name} service by SkywardVision`}
                            className="w-full h-80 object-cover rounded-2xl shadow-2xl transform transition-transform duration-700 group-hover:scale-105"
                            loading={index < 2 ? "eager" : "lazy"}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-sky-50 to-blue-50 relative overflow-hidden">
          {/* Decorative Gradient Shapes */}
          <div className="absolute inset-0">
            <div className="absolute -top-10 left-10 w-40 h-40 bg-sky-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-20 w-56 h-56 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Section Heading */}
              <div className="text-center mb-20">
                <Badge
                  variant="outline"
                  className="mb-4 border-sky-400 text-sky-600 bg-white/50 backdrop-blur-sm"
                >
                  Our Process
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#101727] mb-6">
                  How We Work With You
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our proven 4-step process ensures successful project delivery
                  — from consultation to illuminated results.
                </p>
              </div>

              {/* Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {[
                  {
                    step: "01",
                    title: "Consultation",
                    description:
                      "We understand your brand’s vision, goals, and challenges through a detailed consultation.",
                  },
                  {
                    step: "02",
                    title: "Strategy",
                    description:
                      "We craft a tailored advertising strategy to maximize your visibility on SMD screens.",
                  },
                  {
                    step: "03",
                    title: "Execution",
                    description:
                      "Our team delivers stunning visuals with precision and vibrant SMD display technology.",
                  },
                  {
                    step: "04",
                    title: "Results",
                    description:
                      "We illuminate your brand, ensuring measurable impact and long-lasting impressions.",
                  },
                ].map((process, index) => (
                  <Card
                    key={index}
                    className="relative border-0 shadow-lg bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* Step Number Badge */}
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md shadow-sky-500/30 animate-bounce-slow">
                        <span className="text-white font-bold text-xl">
                          {process.step}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-bold text-[#101727]">
                        {process.title}
                      </CardTitle>
                    </CardHeader>

                    {/* Step Content */}
                    <CardContent>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {process.description}
                      </p>
                    </CardContent>

                    {/* Bottom Glow Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600"></div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-sky-400 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Get started with a free consultation and discover how our
                comprehensive services can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  <Link href="/contact-us">Get Free Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicesSection;
