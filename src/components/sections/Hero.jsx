import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-sky-400 to-blue-600">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            Elevating Brands to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              New Heights
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            SkywardVision is your trusted partner for comprehensive advertisement and marketing solutions. 
            From outdoor advertising to digital marketing, we help businesses soar to success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-3 rounded-full transition-all duration-300"
            >
              <Link to="/portfolio" className="flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>View Our Work</span>
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-blue-100 text-sm mb-4">Trusted by 500+ businesses across Pakistan</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-blue-200">Happy Clients</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-blue-200">Projects Completed</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-blue-200">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;