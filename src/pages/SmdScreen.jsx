import React, { useState, useEffect } from 'react';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  Maximize,
  Volume2,
  VolumeX
} from 'lucide-react';
import { SEO_META } from '@/utils/constants';

const SmdScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const slides = [
    {
      id: 1,
      title: 'SkywardVision',
      subtitle: 'Elevating Brands to New Heights',
      description: 'Comprehensive advertisement and marketing solutions for modern businesses',
      background: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920',
      cta: 'Discover Our Services',
    },
    {
      id: 2,
      title: 'Outdoor Advertising',
      subtitle: 'Maximum Visibility, Maximum Impact',
      description: 'Strategic billboard and outdoor media placements across Pakistan',
      background: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920',
      cta: 'View Our Locations',
    },
    {
      id: 3,
      title: 'Digital Marketing',
      subtitle: 'Grow Your Online Presence',
      description: 'SEO, social media, PPC, and content marketing solutions',
      background: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1920',
      cta: 'Start Digital Campaign',
    },
    {
      id: 4,
      title: 'Real Estate Excellence',
      subtitle: 'Property Marketing Specialists',
      description: 'Premium property marketing and development services',
      background: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1920',
      cta: 'Explore Properties',
    },
    {
      id: 5,
      title: 'Success Stories',
      subtitle: '500+ Happy Clients Nationwide',
      description: '98% client satisfaction rate with measurable results',
      background: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
      cta: 'View Portfolio',
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case ' ':
          event.preventDefault();
          setIsPlaying(!isPlaying);
          break;
        case 'ArrowLeft':
          event.preventDefault();
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
          break;
        case 'ArrowRight':
          event.preventDefault();
          setCurrentSlide((prev) => (prev + 1) % slides.length);
          break;
        case 'f':
        case 'F':
          event.preventDefault();
          toggleFullscreen();
          break;
        case 'm':
        case 'M':
          event.preventDefault();
          setIsMuted(!isMuted);
          break;
        case 'Escape':
          if (isFullscreen) {
            exitFullscreen();
          }
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying, isFullscreen, isMuted]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <>
      <SEOHead
        title={SEO_META.smdScreen.title}
        description={SEO_META.smdScreen.description}
        keywords={SEO_META.smdScreen.keywords}
        url="/smd-screen"
      />

      <main id="main-content" className={`${isFullscreen ? 'h-screen' : ''} overflow-hidden`}>
        {/* Instructions Banner (only show when not fullscreen) */}
        {!isFullscreen && (
          <div className="bg-blackish text-white py-2 px-4 text-center">
            <p className="text-sm">
              <strong>Keyboard Controls:</strong> Space (Play/Pause) • Arrow Keys (Navigate) • F (Fullscreen) • M (Mute) • ESC (Exit Fullscreen)
            </p>
          </div>
        )}

        {/* SMD Screen Display */}
        <div className={`relative ${isFullscreen ? 'h-full' : 'h-screen'} overflow-hidden bg-black`}>
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={currentSlideData.background}
              alt={currentSlideData.title}
              className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-start">
            <div className="container mx-auto px-8 lg:px-16">
              <div className="max-w-4xl">
                <div className="space-y-6 animate-fade-in-up">
                  <Badge 
                    variant="outline" 
                    className="border-white/30 text-white bg-white/10 backdrop-blur-sm text-lg px-4 py-2"
                  >
                    Slide {currentSlide + 1} of {slides.length}
                  </Badge>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight">
                    {currentSlideData.title}
                  </h1>
                  
                  <h2 className="text-2xl md:text-3xl lg:text-4xl text-yellow-300 font-semibold">
                    {currentSlideData.subtitle}
                  </h2>
                  
                  <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                    {currentSlideData.description}
                  </p>
                  
                  <Button 
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
                  >
                    {currentSlideData.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
            <div 
              className="h-full bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-100 ease-linear"
              style={{ 
                width: isPlaying ? `${((currentSlide + 1) / slides.length) * 100}%` : '0%' 
              }}
            ></div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-8 right-8 flex items-center space-x-4">
            {/* Navigation Controls */}
            <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="text-white hover:bg-white/20 rounded-full p-2"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-white hover:bg-white/20 rounded-full p-2"
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="text-white hover:bg-white/20 rounded-full p-2"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Additional Controls */}
            <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMuted(!isMuted)}
                className="text-white hover:bg-white/20 rounded-full p-2"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleFullscreen}
                className="text-white hover:bg-white/20 rounded-full p-2"
                aria-label="Toggle fullscreen"
              >
                <Maximize className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Status */}
          <div className="absolute top-8 right-8">
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${
              isPlaying 
                ? 'bg-green-500/20 text-green-300' 
                : 'bg-red-500/20 text-red-300'
            } backdrop-blur-sm`}>
              {isPlaying ? 'AUTO-PLAY ON' : 'AUTO-PLAY PAUSED'}
            </div>
          </div>

          {/* Company Logo */}
          <div className="absolute top-8 left-8 flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div className="text-white">
              <div className="font-bold text-lg">SkywardVision</div>
              <div className="text-xs text-blue-200">SMD Screen Display</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SmdScreen;