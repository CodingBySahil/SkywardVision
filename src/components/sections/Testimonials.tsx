import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/utils/constants';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleManualNavigation = (action) => {
    setIsAutoPlaying(false);
    action();
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Client Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blackish mb-6">
            What Our Clients
            <span className="text-primary block">Say About Us</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about working with SkywardVision.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              role="region"
              aria-live="polite"
              aria-label="Client testimonials"
            >
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white shadow-xl border-0 relative overflow-hidden">
                    {/* Quote Icon */}
                    <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                    
                    <CardContent className="pt-20 pb-8 px-8">
                      {/* Stars */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-5 h-5 text-yellow-400 fill-current" 
                            aria-hidden="true"
                          />
                        ))}
                      </div>

                      {/* Testimonial Content */}
                      <blockquote className="text-lg md:text-xl text-gray-700 text-center leading-relaxed mb-8 font-medium">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Client Info */}
                      <div className="flex items-center justify-center space-x-4">
                        <img
                          src={testimonial.avatar}
                          alt={`${testimonial.name} profile picture`}
                          className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                          loading="lazy"
                        />
                        <div className="text-center">
                          <h4 className="font-bold text-lg text-blackish">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleManualNavigation(prevTestimonial)}
              className="rounded-full border-2 hover:bg-primary hover:text-white hover:border-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2" role="tablist">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleManualNavigation(() => setCurrentIndex(index));
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  role="tab"
                  aria-selected={index === currentIndex}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => handleManualNavigation(nextTestimonial)}
              className="rounded-full border-2 hover:bg-primary hover:text-white hover:border-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Auto-play Status */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              {isAutoPlaying ? 'Auto-playing testimonials' : 'Auto-play paused'}
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">1000+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;