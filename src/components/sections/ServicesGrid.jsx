import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MdOutdoorGrill,
  MdDevices,
  MdHome,
  MdLocalShipping
} from 'react-icons/md';
import { GiFarmTractor } from 'react-icons/gi';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/utils/constants';

const ServicesGrid = () => {
  const iconMap = {
    MdOutdoorGrill: MdOutdoorGrill,
    MdDevices: MdDevices,
    MdHome: MdHome,
    GiFarmTractor: GiFarmTractor,
    MdLocalShipping: MdLocalShipping,
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blackish mb-6">
            Comprehensive Solutions for
            <span className="text-primary block">Your Business Growth</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From outdoor advertising to digital marketing and beyond, we offer diversified 
            services to meet all your business needs under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon] || MdOutdoorGrill;
            
            return (
              <Card 
                key={service.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2 bg-white"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-blackish group-hover:text-primary transition-colors">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-blackish">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <Badge 
                          key={idx}
                          variant="secondary" 
                          className="text-xs bg-blue-50 text-primary border-primary/20"
                        >
                          {feature}
                        </Badge>
                      ))}
                      {service.features.length > 2 && (
                        <Badge 
                          variant="secondary" 
                          className="text-xs bg-gray-100 text-gray-600"
                        >
                          +{service.features.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    asChild 
                    variant="ghost" 
                    className="w-full justify-between group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    <Link to={`/services#${service.id}`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how our comprehensive services can help you achieve 
              your business goals and reach new heights of success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
              >
                <Link to="/contact">
                  Get Free Consultation
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Link to="/services">
                  Explore All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;