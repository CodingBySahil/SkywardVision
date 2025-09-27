import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
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

const Services = () => {
  const iconMap = {
    MdOutdoorGrill: MdOutdoorGrill,
    MdDevices: MdDevices,
    MdHome: MdHome,
    GiFarmTractor: GiFarmTractor,
    MdLocalShipping: MdLocalShipping,
  };

  const serviceDetails = {
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
      <SEOHead
        title={SEO_META.services.title}
        description={SEO_META.services.description}
        keywords={SEO_META.services.keywords}
        url="/services"
        structuredData={servicesSchema}
      />

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
                  <Link to="/contact">Get Free Consultation</Link>
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
        <section className="py-16 lg:py-24 bg-gray-50">
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
        </section>

        {/* Detailed Services */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-16">
              {SERVICES.map((service, index) => {
                const IconComponent = iconMap[service.icon] || MdOutdoorGrill;
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
                        className={`space-y-6 ${!isEven ? "lg:order-2" : ""}`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-blackish">
                              {service.name}
                            </h2>
                            <Badge variant="secondary" className="mt-2">
                              Professional Service
                            </Badge>
                          </div>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Key Features */}
                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold text-blackish">
                            Key Features:
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {service.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center space-x-2"
                              >
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Benefits */}
                        {details.benefits && (
                          <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-blackish">
                              Benefits:
                            </h3>
                            <div className="space-y-2">
                              {details.benefits.map((benefit, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center space-x-2"
                                >
                                  <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                                  <span className="text-gray-700">
                                    {benefit}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Pricing */}
                        {details.pricing && (
                          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <h4 className="font-semibold text-blackish mb-2">
                              Pricing:
                            </h4>
                            <p className="text-primary font-bold text-lg">
                              {details.pricing}
                            </p>
                          </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button
                            asChild
                            className="bg-gradient-to-r from-sky-400 to-blue-600"
                          >
                            <Link to="/contact" className="text-white">
                              Get Quote
                            </Link>
                          </Button>
                          <Button asChild variant="outline">
                            <Link to="/portfolio">
                              View Case Studies
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        </div>
                      </div>

                      {/* Service Image */}
                      <div className={`${!isEven ? "lg:order-1" : ""}`}>
                        <div className="relative">
                          <img
                            src={service.image}
                            alt={`${service.name} service by SkywardVision`}
                            className="w-full h-80 object-cover rounded-2xl shadow-xl"
                            loading={index < 2 ? "eager" : "lazy"}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
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
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">
                  Our Process
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-blackish mb-6">
                  How We Work With You
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our proven 4-step process ensures successful project delivery
                  from consultation to completion.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Consultation",
                    description:
                      "We understand your needs, goals, and challenges through detailed consultation.",
                  },
                  {
                    step: "02",
                    title: "Strategy",
                    description:
                      "We develop a customized strategy tailored to your specific requirements.",
                  },
                  {
                    step: "03",
                    title: "Execution",
                    description:
                      "Our expert team implements the solution with precision and attention to detail.",
                  },
                  {
                    step: "04",
                    title: "Results",
                    description:
                      "We deliver measurable results and provide ongoing support for continued success.",
                  },
                ].map((process, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg bg-white text-center hover:shadow-xl transition-shadow duration-300"
                  >
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">
                          {process.step}
                        </span>
                      </div>
                      <CardTitle className="text-xl text-blackish">
                        {process.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {process.description}
                      </p>
                    </CardContent>
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
                  <Link to="/contact">Get Free Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
