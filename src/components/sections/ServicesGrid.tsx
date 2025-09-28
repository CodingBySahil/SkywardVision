import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MdOutdoorGrill,
  MdDevices,
  MdHome,
  MdLocalShipping,
} from "react-icons/md";
import { GiFarmTractor } from "react-icons/gi";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/utils/constants";

const ServicesGrid = () => {
  const iconMap = {
    MdOutdoorGrill: MdOutdoorGrill,
    MdDevices: MdDevices,
    MdHome: MdHome,
    GiFarmTractor: GiFarmTractor,
    MdLocalShipping: MdLocalShipping,
  };

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-blue-950 via-blue-900 to-black overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-sky-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-blue-400 text-blue-300 bg-white/10 backdrop-blur-sm"
          >
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Comprehensive <span className="text-sky-400">SMD Solutions</span>{" "}
            for Your Brand
          </h2>
          <p className="text-lg text-blue-100 leading-relaxed">
            We specialize in vibrant SMD screen advertising solutions that make
            your brand shine — from outdoor billboards to digital LED displays,
            delivering maximum visibility.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || MdOutdoorGrill;

            return (
              <Card
                key={service.id}
                className="group relative border-0 bg-gradient-to-b from-white to-blue-50/90 backdrop-blur-sm shadow-md hover:shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              >
                {/* Top image */}
                <div className="overflow-hidden h-40">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <CardHeader className="text-center pb-4 pt-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-blue-900 group-hover:text-sky-600 transition-colors">
                    {service.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 px-6 pb-6">
                  <CardDescription className="text-gray-700 leading-relaxed">
                    {service.description}
                  </CardDescription>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-blue-900">
                      Key Features:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs bg-sky-100 text-sky-700 border border-sky-200"
                        >
                          {feature}
                        </Badge>
                      ))}
                      {service.features.length > 2 && (
                        <Badge
                          variant="secondary"
                          className="text-xs bg-gray-100 text-gray-600 border border-gray-300"
                        >
                          +{service.features.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-between bg-blue-50 text-blue-900 hover:bg-gradient-to-r hover:from-sky-400 hover:to-blue-600 hover:text-white transition-all duration-300"
                  >
                    <Link
                      to={`/services#${service.id}`}
                      className="flex w-full justify-between items-center"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Illuminate Your Brand?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let’s craft stunning SMD advertising campaigns that captivate
              audiences and grow your business with powerful visibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-md"
              >
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Link to="/services">Explore All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
