"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const ConstructionCarousel = () => {
  const slides = [
  {
    src: "/assets/construction/project1.jpg",
    headline: "Building the Future, Brick by Brick",
    subtitle: "Delivering excellence in every structure we create.",
  },
  {
    src: "/assets/construction/project2.jpg",
    headline: "Engineering Strength and Reliability",
    subtitle: "From foundations to finish — quality you can trust.",
  },
  {
    src: "/assets/construction/project3.jpg",
    headline: "Innovative Construction Solutions",
    subtitle: "Modern designs built to stand the test of time.",
  },
  {
    src: "/assets/construction/project4.jpg",
    headline: "Crafting Landmarks That Last",
    subtitle: "Turning architectural visions into reality.",
  },
  {
    src: "/assets/construction/project5.jpg",
    headline: "Precision in Every Detail",
    subtitle: "Ensuring accuracy from blueprint to completion.",
  },
  {
    src: "/assets/construction/project6.jpg",
    headline: "Sustainable Building Practices",
    subtitle: "Eco-friendly solutions for a greener tomorrow.",
  },
  {
    src: "/assets/construction/project7.jpg",
    headline: "Timely Project Delivery",
    subtitle: "Meeting deadlines without compromising quality.",
  },
  {
    src: "/assets/construction/project8.jpg",
    headline: "Safety First, Always",
    subtitle: "Protecting our team and your investment.",
  },
  {
    src: "/assets/construction/project9.jpg",
    headline: "Modern Architecture, Timeless Design",
    subtitle: "Creating spaces that inspire and endure.",
  },
  {
    src: "/assets/construction/project10.jpg",
    headline: "Collaborating for Excellence",
    subtitle: "Working closely with clients every step of the way.",
  },
  {
    src: "/assets/construction/project11.jpg",
    headline: "Innovation Meets Expertise",
    subtitle: "Combining creativity and experience in every project.",
  },
  {
    src: "/assets/construction/project12.jpg",
    headline: "Your Vision, Our Mission",
    subtitle: "Transforming ideas into tangible structures.",
  },
];


  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const delay = 3500; // autoplay delay
  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Autoplay
  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(nextSlide, delay);
    }
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [current, isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [nextSlide, prevSlide]);

  return (
    <section
      className="relative w-full h-[60vh] sm:h-[75vh] lg:h-screen overflow-hidden flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.headline}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
                {slide.headline}
              </h1>
              <p className="mt-3 text-sm sm:text-lg md:text-xl text-gray-200 max-w-2xl">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-white/20 z-40">
        <div
          className={`h-full bg-white transition-all duration-[5000ms] ${
            isPaused ? "w-0" : "w-full"
          }`}
          key={current}
        />
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-3 sm:px-6 z-40">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="p-3 sm:p-4 rounded-full bg-black/30 hover:bg-black/60 text-white transition backdrop-blur-md border border-white/20 shadow-lg"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="p-3 sm:p-4 rounded-full bg-black/30 hover:bg-black/60 text-white transition backdrop-blur-md border border-white/20 shadow-lg"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Pause / Play Toggle */}
      <button
        onClick={() => setIsPaused((p) => !p)}
        aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
        className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition backdrop-blur-md border border-white/20 shadow-lg"
      >
        {isPaused ? (
          <Play className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <Pause className="w-5 h-5 sm:w-6 sm:h-6" />
        )}
      </button>

      {/* Dot Indicators */}
      {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-white scale-110"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div> */}

      {/* Cinematic Ambient Glows */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000 z-0" />
      <div className="absolute top-1/3 left-1/2 w-96 h-96 -translate-x-1/2 bg-white/10 rounded-full blur-3xl z-0" />
    </section>
  );
};

export default ConstructionCarousel;
