"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Maximize,
  Volume2,
  VolumeX,
} from "lucide-react";

const SmdScreenSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const slides = [
    {
      id: 1,
      title: "SkywardVision",
      subtitle: "Illuminating Brands with SMD Brilliance",
      description:
        "Premium SMD screen advertising solutions that make your brand shine day and night.",
      background:
        "https://images.unsplash.com/photo-1722072326019-689bcd610abc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fFByZW1pdW0lMjBTTUQlMjBzY3JlZW4lMjBhZHZlcnRpc2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      cta: "Discover Our Services",
    },
    {
      id: 2,
      title: "Outdoor SMD Billboards",
      subtitle: "Maximum Visibility, Maximum Impact",
      description:
        "Strategic placements of high-resolution outdoor LED billboards across Pakistan.",
      background:
        "https://images.unsplash.com/photo-1620926410022-8f9349b38b3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWR2ZXJ0aXNpbmclMjBzY3JlZW5zfGVufDB8fDB8fHww",
      cta: "View Billboard Locations",
    },
    {
      id: 3,
      title: "Indoor LED Displays",
      subtitle: "Engage Audiences Anywhere",
      description:
        "Crystal-clear indoor SMD screens for malls, events, retail outlets, and exhibitions.",
      background:
        "https://plus.unsplash.com/premium_photo-1747710899354-e17a0fd00d49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFkdmVydGlzaW5nJTIwc2NyZWVuc3xlbnwwfHwwfHx8MA%3D%3D",
      cta: "Explore Indoor Solutions",
    },
    {
      id: 4,
      title: "Digital Signage Networks",
      subtitle: "Smart Advertising, Smarter Results",
      description:
        "Deliver dynamic content through synchronized SMD networks for maximum brand recall.",
      background:
        "https://plus.unsplash.com/premium_photo-1747743180865-ee65a42dd0e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGFkdmVydGlzaW5nJTIwc2NyZWVuc3xlbnwwfHwwfHx8MA%3D%3D",
      cta: "Launch a Campaign",
    },
    {
      id: 5,
      title: "Event Branding",
      subtitle: "Turn Events into Experiences",
      description:
        "From concerts to corporate launches, our vibrant LED screens create unforgettable moments.",
      background:
        "https://images.unsplash.com/photo-1591292000784-ea887a6b6696?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFkdmVydGlzaW5nJTIwc2NyZWVuc3xlbnwwfHwwfHx8MA%3D%3D",
      cta: "Book for Your Event",
    },
    {
      id: 6,
      title: "Interactive LED Walls",
      subtitle: "Innovation Meets Engagement",
      description:
        "Immersive and customizable LED walls that captivate audiences and elevate brand storytelling.",
      background:
        "https://images.unsplash.com/photo-1599723352663-d84307d89a8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGFkdmVydGlzaW5nJTIwc2NyZWVuc3xlbnwwfHwwfHx8MA%3D%3D",
      cta: "See Interactive Demos",
    },
    {
      id: 7,
      title: "Nationwide Coverage",
      subtitle: "From Karachi to Islamabad",
      description:
        "With strategic locations nationwide, SkywardVision ensures your message travels everywhere.",
      background:
        "https://images.unsplash.com/photo-1667150794375-bcbe9af19dea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGFkdmVydGlzaW5nJTIwc2NyZWVuc3xlbnwwfHwwfHx8MA%3D%3D",
      cta: "Find Locations",
    },
    {
      id: 8,
      title: "Trusted by 500+ Brands",
      subtitle: "Proven Results, Lasting Impact",
      description:
        "98% client satisfaction with measurable visibility and unmatched audience reach.",
      background:
        "https://plus.unsplash.com/premium_photo-1747810779729-a9f134e710d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGFkdmVydGlzaW5nJTIwc2NyZWVuc3xlbnwwfHwwfHx8MA%3D%3D",
      cta: "View Success Stories",
    },
  ];

  // Auto-advance
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case " ":
          event.preventDefault();
          setIsPlaying((p) => !p);
          break;
        case "ArrowLeft":
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
          break;
        case "ArrowRight":
          setCurrentSlide((prev) => (prev + 1) % slides.length);
          break;
        case "f":
        case "F":
          toggleFullscreen();
          break;
        case "m":
        case "M":
          setIsMuted((m) => !m);
          break;
        case "Escape":
          exitFullscreen();
          break;
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

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

  const currentSlideData = slides[currentSlide];

  return (
    <>
      <main
        id="main-content"
        className={`${isFullscreen ? "h-screen" : ""} overflow-hidden`}
      >
        {!isFullscreen && (
          <div className="bg-blackish text-white py-2 px-4 text-center text-xs sm:text-sm">
            <p>
              <strong>Controls:</strong> Space (Play/Pause) • Arrows (Navigate)
              • F (Fullscreen) • M (Mute) • ESC (Exit)
            </p>
          </div>
        )}

        <div
          className={`relative ${
            isFullscreen ? "h-full" : "h-screen"
          } overflow-hidden bg-black`}
        >
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={currentSlideData.background}
              alt={currentSlideData.title}
              className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-start">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-12">
              <div className="max-w-3xl sm:max-w-4xl space-y-4 sm:space-y-6 animate-fade-in-up">
                <Badge
                  variant="outline"
                  className="border-white/30 text-white bg-white/10 backdrop-blur-sm text-xs sm:text-sm md:text-base px-3 py-1 sm:px-4 sm:py-2"
                >
                  Slide {currentSlide + 1} of {slides.length}
                </Badge>

                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
                  {currentSlideData.title}
                </h1>

                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-yellow-300 font-semibold">
                  {currentSlideData.subtitle}
                </h2>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  {currentSlideData.description}
                </p>

                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-full transform hover:scale-105 transition-all duration-300"
                >
                  {currentSlideData.cta}
                </Button>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
            <div
              className="h-full bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-100 ease-linear"
              style={{
                width: isPlaying
                  ? `${((currentSlide + 1) / slides.length) * 100}%`
                  : "0%",
              }}
            />
          </div>

          {/* Controls */}
          <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 flex items-center space-x-3 sm:space-x-4 z-50">
            {/* Nav */}
            <div className="bg-black/50 backdrop-blur-sm rounded-full p-1 sm:p-2 flex items-center space-x-1 sm:space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  setCurrentSlide(
                    (prev) => (prev - 1 + slides.length) % slides.length
                  )
                }
                className="text-white hover:bg-white/20 rounded-full p-2"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-white hover:bg-white/20 rounded-full p-2"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  setCurrentSlide((prev) => (prev + 1) % slides.length)
                }
                className="text-white hover:bg-white/20 rounded-full p-2"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>

            {/* Extra */}
            <div className="bg-black/50 backdrop-blur-sm rounded-full p-1 sm:p-2 flex items-center space-x-1 sm:space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMuted(!isMuted)}
                className="text-white hover:bg-white/20 rounded-full p-2"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={toggleFullscreen}
                className="text-white hover:bg-white/20 rounded-full p-2"
              >
                <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-50">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Auto-play Status */}
          <div className="absolute top-4 sm:top-8 right-4 sm:right-8">
            <div
              className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                isPlaying
                  ? "bg-green-500/20 text-green-300"
                  : "bg-red-500/20 text-red-300"
              } backdrop-blur-sm`}
            >
              {isPlaying ? "AUTO-PLAY ON" : "AUTO-PLAY PAUSED"}
            </div>
          </div>

          {/* Logo */}
          <div className="absolute top-4 sm:top-8 left-4 sm:left-8 flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-sky-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-base sm:text-xl">
                S
              </span>
            </div>
            <div className="text-white">
              <div className="font-bold text-sm sm:text-lg">SkywardVision</div>
              <div className="text-[10px] sm:text-xs text-blue-200">
                SMD Screen Display
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SmdScreenSection;
