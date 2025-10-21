"use client";
import React from "react";

const EventsSection: React.FC = () => {
  const photos = [
    "https://images.unsplash.com/photo-1509223197845-458d87318791?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=1200&q=80&auto=format&fit=crop",
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-950 via-blue-900 to-black py-16 px-4 sm:px-8 lg:px-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-indigo-300 to-rose-300">
          Our Events & Gatherings
        </h2>
        <p className="text-white/70 mt-3 text-sm sm:text-base">
          Capturing the moments that connect us.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Row 1 — Two images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {photos.slice(0, 2).map((src, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={src}
                alt={`Event ${i + 1}`}
                className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20" />
              <span className="absolute inset-0 rounded-2xl border-[2px] border-transparent animate-borderGlow" />
            </div>
          ))}
        </div>

        {/* Row 2 — Single wide image */}
        <div className="grid grid-cols-1">
          <div className="relative group overflow-hidden rounded-2xl shadow-xl">
            <img
              src={photos[2]}
              alt="Main Event"
              className="w-full h-72 sm:h-96 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20" />
            <span className="absolute inset-0 rounded-2xl border-[2px] border-transparent animate-borderGlow" />
          </div>
        </div>

        {/* Row 3 — Two images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {photos.slice(3, 5).map((src, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={src}
                alt={`Event ${i + 4}`}
                className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20" />
              <span className="absolute inset-0 rounded-2xl border-[2px] border-transparent animate-borderGlow" />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes & Animation */}
      <style jsx>{`
        @keyframes borderGlow {
          0% {
            border-color: rgba(56, 189, 248, 0.3);
            box-shadow: 0 0 10px rgba(56, 189, 248, 0.2);
          }
          25% {
            border-color: rgba(147, 197, 253, 0.4);
            box-shadow: 0 0 15px rgba(147, 197, 253, 0.3);
          }
          50% {
            border-color: rgba(239, 68, 68, 0.3);
            box-shadow: 0 0 12px rgba(239, 68, 68, 0.3);
          }
          75% {
            border-color: rgba(251, 191, 36, 0.3);
            box-shadow: 0 0 10px rgba(251, 191, 36, 0.3);
          }
          100% {
            border-color: rgba(56, 189, 248, 0.3);
            box-shadow: 0 0 10px rgba(56, 189, 248, 0.2);
          }
        }

        .animate-borderGlow {
          animation: borderGlow 6s linear infinite;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default EventsSection;
