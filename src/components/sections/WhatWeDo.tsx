"use client";

import React from "react";
import Link from "next/link";
import { MdDevices, MdHome, MdLocalShipping } from "react-icons/md";

type Service = {
  id: number;
  title: string;
  Icon: React.ElementType;
  image: string;
  description: string;
  features: string[];
};

const SERVICES: Service[] = [
  {
    id: 1,
    title: "Brand Development",
    Icon: MdDevices,
    image: "/assets/mockups/1.jpeg",
    description:
      "Your brand deserves to be seen, recognized, and remembered. We help you build strong visibility through advanced digital advertising screens placed in prime city locations — turning your brand into a lasting impression.",
    features: [
      "Digital Screens",
      "Brand Visibility",
      "Advertising",
      "Identity Design",
    ],
  },
  {
    id: 2,
    title: "Construction Projects",
    Icon: MdHome,
    image: "/assets/mockups/2.jpeg",
    description:
      "We take pride in every project we deliver — built with strength, style, and precision. From homes to landmarks, our work stands tall as a symbol of quality and innovation.",
    features: [
      "Architecture",
      "Engineering",
      "Urban Projects",
      "Premium Builds",
    ],
  },
  {
    id: 3,
    title: "Digital Marketing Experts",
    Icon: MdLocalShipping,
    image: "/assets/mockups/3.jpeg",
    description:
      "Your brand deserves to be seen everywhere! Promote your business on our latest LED digital screens on easy monthly plans — bright, dynamic, and result-driven.",
    features: [
      "LED Advertising",
      "24/7 Marketing",
      "Targeted Campaigns",
      "Dynamic Reach",
    ],
  },
];

const WhatWeDo: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-blue-950/5 to-transparent overflow-hidden">
      {/* Decorative gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 opacity-30 blur-3xl transform-gpu animate-blob"
        style={{ mixBlendMode: "screen" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-20 w-96 h-96 rounded-full bg-gradient-to-bl from-blue-600 to-indigo-700 opacity-20 blur-3xl transform-gpu animate-blob animation-delay-2000"
        style={{ mixBlendMode: "screen" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 mr-2 inline-block" />
            What We Do
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Empowering Growth Beyond Limits
          </h2>

          <p className="mt-4 text-lg md:text-xl text-white/80">
            At Skyward Vision, we combine creativity, innovation, and technology
            to build powerful brands, construct enduring landmarks, and deliver
            digital marketing solutions that truly stand out.
          </p>
        </header>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:gap-10 sm:grid-cols-1 md:grid-cols-3 items-stretch">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className="group relative flex flex-col rounded-2xl overflow-hidden shadow-lg transform-gpu transition duration-500 hover:scale-[1.02] hover:shadow-2xl bg-gradient-to-br from-white/5 to-white/3 ring-1 ring-white/10"
            >
              {/* Image */}
              <div className="relative h-44 sm:h-56 md:h-48 lg:h-56 w-full overflow-hidden">
                <img
                  src={s.image}
                  alt={`${s.title} visual`}
                  className="object-cover w-full h-full transition-transform duration-700 transform-gpu group-hover:scale-105"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {/* Icon badge */}
                <div className="absolute -bottom-6 left-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 shadow-lg ring-1 ring-white/30 transform-gpu transition-all duration-500 group-hover:-translate-y-2">
                    <s.Icon size={26} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 pt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    {s.title}
                  </h3>
                  <span className="text-sm px-2 py-1 rounded-full bg-white/10 text-white/90 font-medium">
                    Service
                  </span>
                </div>

                <p className="mt-4 text-white/80 text-sm leading-relaxed">
                  {s.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/85 border border-white/10"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer CTA */}
              <div className="p-6 pt-0">
                <div className="flex items-center justify-between gap-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white/95 text-sm font-medium ring-1 ring-white/10 transition-transform hover:-translate-y-0.5"
                  >
                    Learn More
                  </Link>

                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 text-white text-sm font-semibold shadow-md transition-transform hover:scale-105"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>

              {/* Decorative pulse glow */}
              <div
                className="absolute -top-12 -right-12 w-28 h-28 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(56,189,248,0.28), transparent 40%)",
                }}
              />
            </article>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-16">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-sky-400 to-blue-600 p-1 shadow-2xl">
            <div className="bg-blue-950/90 backdrop-blur px-6 py-8 md:py-10 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-2xl text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                  Ready to Elevate Your Brand with Skyward Vision?
                </h3>
                <p className="mt-2 text-white/90">
                  Let’s bring your brand to life through powerful visuals,
                  strategic marketing, and world-class construction.
                </p>
              </div>

              <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-blue-700 font-semibold shadow hover:-translate-y-0.5 transition-transform"
                >
                  Get Free Consultation
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/20 text-white/95 font-medium bg-white/10 hover:bg-white/20 transition-colors"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Local animation keyframes */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate3d(0px, 0px, 0) scale(1);
          }
          33% {
            transform: translate3d(12px, -8px, 0) scale(1.05);
          }
          66% {
            transform: translate3d(-8px, 12px, 0) scale(0.95);
          }
          100% {
            transform: translate3d(0px, 0px, 0) scale(1);
          }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default WhatWeDo;
