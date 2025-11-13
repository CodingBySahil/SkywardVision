"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const Hero = () => {
  const images = [
    "/assets/mockups/1.jpeg",
    "/assets/mockups/2.jpeg",
    "/assets/mockups/3.jpeg",
    "/assets/mockups/4.jpeg",
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const delay = 4000; // autoplay delay (ms)
  const totalSlides = images.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Autoplay logic
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
      className="relative w-full h-[35vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-sky-400 to-blue-600"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Image Slides */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              // className="object-contain md:object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Gradient Overlay for readability */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" /> */}
          </div>
        ))}
      </div>

      {/* Progress Bar (top indicator) */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-white/20 z-30">
        <div
          className={`h-full bg-white transition-all duration-[4000ms] ${
            isPaused ? "w-0" : "w-full"
          }`}
          key={current}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-3 sm:px-6 z-20">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="p-2 sm:p-3 md:p-4 rounded-full bg-black/25 hover:bg-black/50 text-white transition backdrop-blur-md border border-white/20 shadow-md"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="p-2 sm:p-3 md:p-4 rounded-full bg-black/25 hover:bg-black/50 text-white transition backdrop-blur-md border border-white/20 shadow-md"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Pause / Play Button */}
      <button
        onClick={() => setIsPaused((p) => !p)}
        aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
        className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 p-2 sm:p-3 rounded-full bg-black/30 hover:bg-black/50 text-white transition backdrop-blur-md border border-white/20 shadow-md"
      >
        {isPaused ? (
          <Play className="w-4 h-4 sm:w-5 sm:h-5" />
        ) : (
          <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
        )}
      </button>

      {/* Dots Indicators */}
      {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-white scale-110"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}

      {/* Decorative Floating Elements */}
      <div className="absolute top-10 left-8 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse z-10" />
      <div className="absolute bottom-16 right-10 w-28 h-28 bg-yellow-400/20 rounded-full blur-2xl animate-pulse delay-1000 z-10" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 -translate-x-1/2 -translate-y-1/2 bg-white/5 rounded-full blur-3xl z-10" />
    </section>
  );
};

export default Hero;
