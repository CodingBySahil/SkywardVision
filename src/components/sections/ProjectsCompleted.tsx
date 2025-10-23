"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Project {
  image: string;
  title: string;
  text: string;
  category: string;
  buttonLabel: string;
  visitLabel: string;
  link: string;
}

const projects: Project[] = [
  {
    image: "/assets/construction/runningprojects/tower.jpg",
    title: "Skyline Tower Construction",
    text: "A 50-story commercial hub redefining the city skyline.",
    category: "Commercial",
    buttonLabel: "View Details",
    visitLabel: "Visit Project",
    link: "#",
  },
  {
    image: "/assets/construction/runningprojects/residentail.jpg",
    title: "BlueWave Residential Complex",
    text: "Luxury apartments built with sustainable architecture.",
    category: "Residential",
    buttonLabel: "Learn More",
    visitLabel: "Explore",
    link: "#",
  },
  {
    image: "/assets/construction/runningprojects/urban.jpg",
    title: "Urban Bridge Expansion",
    text: "A modern bridge connecting key city districts.",
    category: "Infrastructure",
    buttonLabel: "Explore Project",
    visitLabel: "Details",
    link: "#",
  },
  {
    image: "/assets/construction/runningprojects/urban.jpg",
    title: "EcoTech Industrial Park",
    text: "Smart industrial zone powered by renewable energy.",
    category: "Industrial",
    buttonLabel: "Discover",
    visitLabel: "More Info",
    link: "#",
  },
  {
    image: "/assets/construction/runningprojects/residentail.jpg",
    title: "Harbor Marina Renovation",
    text: "Transforming the coastal area into a modern marina.",
    category: "Renovation",
    buttonLabel: "Read More",
    visitLabel: "Explore",
    link: "#",
  },
  {
    image: "/assets/construction/runningprojects/tower.jpg",
    title: "Central Metro Line",
    text: "Fast, efficient, and eco-friendly urban transport network.",
    category: "Transport",
    buttonLabel: "View Details",
    visitLabel: "Learn More",
    link: "#",
  },
];

const ProjectsCompleted: React.FC = () => {
  const router = useRouter();

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-blue-950 via-black to-blue-950 text-white overflow-hidden">
      {/* ✨ Embedded Animations CSS */}
      <style jsx global>{`
        @layer utilities {
          @keyframes fadeSlide {
            0% {
              opacity: 0;
              transform: translateY(15px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeSlide {
            animation: fadeSlide 1s ease-out forwards;
          }

          @keyframes gradientFlow {
            0%,
            100% {
              transform: scaleX(1);
              opacity: 0.7;
            }
            50% {
              transform: scaleX(1.3);
              opacity: 1;
            }
          }
          .animate-gradientFlow {
            animation: gradientFlow 3s ease-in-out infinite;
          }

          @keyframes glowLine {
            0%,
            100% {
              opacity: 0.4;
            }
            50% {
              opacity: 0.9;
            }
          }
          .animate-glowLine {
            animation: glowLine 4s ease-in-out infinite;
          }
        }
      `}</style>

      {/* Section Header */}
      <div className="relative text-center mb-16 px-6 z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight animate-fadeSlide">
          Completed Projects
        </h2>
        <div className="mt-3 w-28 h-[3px] bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full animate-gradientFlow" />
        <p className="mt-6 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          The landmarks of our expertise and dedication.
        </p>
        <p className="mt-2 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Discover our portfolio of successfully completed projects that reflect
          our passion for precision, quality, and architectural innovation.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-10 lg:px-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-b from-black/70 via-blue-900/50 to-blue-950/80 border border-white/10 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:border-blue-600/30"
          >
            {/* Project Image */}
            <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden z-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

              {/* Category Badge */}
              <span className="absolute top-4 left-4 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-blue-600/80 backdrop-blur-md text-white px-3 py-1 rounded-full border border-blue-400/40 z-10">
                {project.category}
              </span>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col justify-between h-full bg-gradient-to-b from-blue-950/0 to-blue-950/20 backdrop-blur-[1px]">
              <div className="transition-all duration-500 group-hover:translate-y-[-4px]">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {project.text}
                </p>
              </div>

              {/* Buttons */}
              {/* <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => router.push(project.link)}
                  className="px-5 py-2 rounded-full text-sm sm:text-base font-medium text-white border border-blue-500 bg-gradient-to-r from-blue-600/90 to-blue-800/90 hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-md hover:shadow-blue-900/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {project.buttonLabel}
                </button>
                <button
                  onClick={() => router.push(project.link)}
                  className="px-5 py-2 rounded-full text-sm sm:text-base font-medium text-blue-400 border border-blue-400/40 bg-transparent hover:bg-blue-900/40 hover:text-blue-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                >
                  {project.visitLabel}
                </button>
              </div> */}
            </div>

            {/* Border Glow Animation */}
            <div className="absolute inset-0 border border-transparent group-hover:border-blue-500/30 rounded-2xl transition-all duration-500 z-0"></div>
          </div>
        ))}
      </div>

      {/* Decorative Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-400/10 blur-[120px] rounded-full z-0 pointer-events-none" />

      {/* Floating Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-glowLine" />
    </section>
  );
};

export default ProjectsCompleted;
