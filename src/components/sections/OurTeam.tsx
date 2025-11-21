"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";

type SocialLinks = {
  whatsapp?: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
};

interface TeamMember {
  image: string;
  name: string;
  position: string;
  about: string;
  social: SocialLinks;
}

const teamMembers: TeamMember[] = [
  {
    image: "/assets/team-member/CEO.jpeg",
    name: "Meer Ahmad",
    position: "Founder & CEO",
    about:
      "Providing strategic leadership and guiding Skyward Vision with a clear vision, strong decision-making, and a commitment to excellence in every project.",
    social: {
      whatsapp: "https://wa.me/923158271857",
      facebook: "https://www.facebook.com/share/1F3CHo43JG/",
    },
  },
  {
    image: "/assets/team-member/director.jpeg",
    name: "Muhammad Asad",
    position: "Director",
    about:
      "Overseeing core operations, ensuring project quality, and managing company workflows with a focus on growth, efficiency, and client satisfaction.",
    social: { whatsapp: "https://wa.me/923475861902" },
  },
  {
    image: "/assets/team-member/marketingdirector.jpeg",
    name: "Amjid Ali",
    position: "Marketing Director",
    about:
      "Driving brand visibility, leading marketing strategies, and building strong client relationships to expand Skyward Vision’s presence in the construction sector.",
    social: {},
  },
];

export default function OurTeam() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  // Responsive card count
  useEffect(() => {
    const update = () =>
      setPerView(
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1
      );
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Auto change one by one
  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % teamMembers.length),
      3500
    );
    return () => clearInterval(id);
  }, []);

  const next = () => setIndex((i) => (i + 1) % teamMembers.length);
  const prev = () =>
    setIndex((i) => (i - 1 + teamMembers.length) % teamMembers.length);

  const visible = Array.from(
    { length: perView },
    (_, i) => teamMembers[(index + i) % teamMembers.length]
  );

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#000814] to-[#001f3f] text-white overflow-hidden">
      {/* Title */}
      <div className="text-center mb-10 px-6">
        <h2 className="text-4xl font-extrabold">Meet Our Experts</h2>
        <div className="mt-3 w-28 h-[3px] bg-gradient-to-r from-blue-500 to-blue-400 mx-auto rounded-full" />
        <p className="mt-4 text-gray-300">
          The minds and hands behind every successful project.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ease-in-out">
          {visible.map((m, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:scale-[1.03] transition-transform"
            >
              {/* Profile */}
              <div className="flex items-center gap-4 mb-3">
                <div className="relative w-16 h-16 rounded-full overflow-hidden ring-1 ring-white/10">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{m.name}</h3>
                  <p className="text-blue-300 text-sm">{m.position}</p>
                </div>
              </div>

              {/* About */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {m.about}
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
                {m.social.whatsapp && (
                  <a
                    href={m.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-[#25D366] transition-transform hover:scale-110"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </a>
                )}
                {m.social.facebook && (
                  <a
                    href={m.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-[#1877F2] transition-transform hover:scale-110"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 transition border border-white/10 hover:scale-105"
          >
            &lArr;
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 transition border border-white/10 hover:scale-105"
          >
            &rArr;
          </button>
        </div>
      </div>
    </section>
  );
}
