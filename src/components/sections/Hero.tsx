import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Logo from "/assets/Logo/22.png";
import HeroImg from "/assets/mockups/1.jpg";

const Hero = () => {
  return (
    <section className="relative  flex items-center bg-gradient-to-r from-sky-400 to-blue-600 overflow-hidden pt-24">
      {/* Background Layer */}
      <div className="absolute inset-0">
        <img
          src={HeroImg}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
      </div>

      {/* Container */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-16 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white space-y-6 animate-fade-in-up text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Elevating Brands to{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              New Heights
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            SkywardVision is your trusted partner for comprehensive
            advertisement and marketing solutions. From outdoor advertising to
            digital marketing, we help businesses soar to success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
            <p className="text-blue-100 text-sm mb-6">
              Trusted by 500+ businesses across Pakistan
            </p>
            <div className="flex  justify-center lg:justify-start gap-8 opacity-80">
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

        {/* Right Image (Hidden on small/medium screens, only visible on large) */}
        <div className="relative justify-center lg:justify-end hidden lg:flex">
          <img
            src={Logo}
            alt="Advertising Illustration"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg drop-shadow-2xl animate-fade-in"
          />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
