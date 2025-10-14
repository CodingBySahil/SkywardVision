"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  CircleCheck as CheckCircle,
} from "lucide-react";
import Link from "next/link";

const AboutSection = () => {
  const teamMembers = [
    {
      name: "Ahmed Hassan",
      role: "CEO & Founder",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Visionary leader with 10+ years in advertising and business development.",
    },
    {
      name: "Sarah Khan",
      role: "Creative Director",
      image:
        "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Award-winning creative professional specializing in brand identity and campaigns.",
    },
    {
      name: "Muhammad Ali",
      role: "Operations Manager",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Operations expert ensuring seamless project delivery and client satisfaction.",
    },
  ];

  const achievements = [
    { icon: Users, number: "500+", text: "Happy Clients" },
    { icon: Award, number: "1000+", text: "Projects Completed" },
    { icon: TrendingUp, number: "98%", text: "Success Rate" },
    { icon: CheckCircle, number: "5+", text: "Years Experience" },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, delivering exceptional results that exceed expectations.",
    },
    {
      icon: Eye,
      title: "Innovation",
      description:
        "We embrace innovation and creativity to develop cutting-edge solutions for our clients.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "We conduct business with the highest level of integrity, transparency, and ethical standards.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of collaboration, working closely with clients to achieve shared success.",
    },
  ];

  return (
    <>
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-sky-400 to-blue-600 overflow-hidden">
          {/* <!-- Floating Shapes --> */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 w-full max-w-7xl px-6 lg:px-12 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* <!-- Left Content --> */}
              <div className="space-y-8 text-white text-center lg:text-left animate-fade-in-up">
                <div className="space-y-4">
                  <h6 className="text-blue-100 text-base font-medium uppercase tracking-wide">
                    About SkywardVision
                  </h6>
                  <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                    The{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                      Journey of Success
                    </span>
                  </h2>
                  <p className="text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    SkywardVision’s story is built on innovation, teamwork, and
                    resilience. From humble beginnings to becoming a trusted
                    partner in marketing and advertising, we’ve empowered
                    countless businesses to rise above challenges and achieve
                    remarkable growth.
                  </p>
                </div>

                {/* <!-- Stats --> */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-500">
                    <h4 className="text-3xl font-bold">10+ Years</h4>
                    <p className="text-blue-200 text-sm">
                      Transforming the digital landscape
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-500">
                    <h4 className="text-3xl font-bold">500+ Projects</h4>
                    <p className="text-blue-200 text-sm">
                      Delivering excellence consistently
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-500">
                    <h4 className="text-3xl font-bold">50+ Awards</h4>
                    <p className="text-blue-200 text-sm">
                      Recognized for creativity & impact
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-500">
                    <h4 className="text-3xl font-bold">98% Happy Clients</h4>
                    <p className="text-blue-200 text-sm">
                      Our clients’ trust fuels our vision
                    </p>
                  </div>
                </div>

                {/* <!-- CTA Button --> */}
                <div>
                  <a
                    href="/about"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-white text-blue-600 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Learn More
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* <!-- Right Image --> */}
              <div className="relative flex justify-center lg:justify-end animate-fade-in">
                <div className="relative w-full max-w-md lg:max-w-lg rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={"/assets/mockups/2.jpg"}
                    alt="About SkywardVision"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-8">
                  <div>
                    <span className="inline-block px-4 py-1 text-sm font-medium border border-primary/30 text-primary rounded-full mb-4">
                      Our Story
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-blackish leading-tight">
                      The Journey of
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                        Skyward Vision
                      </span>
                    </h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Skyward Vision was founded in 2020 with a mission to
                    redefine how businesses connect with their audiences. What
                    began as a passionate advertising startup has grown into a
                    dynamic marketing and creative agency, delivering innovative
                    strategies that help brands thrive in a fast-changing
                    digital world.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    From real estate to transportation and dairy industries, we
                    have partnered with diverse sectors across Pakistan —
                    offering tailored solutions that merge creativity with
                    technology. Our strength lies in combining traditional
                    advertising expertise with modern digital innovations,
                    ensuring every client’s message soars above the noise.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    At Skyward Vision, our goal is simple: empower businesses
                    with the tools, ideas, and strategies they need to achieve
                    lasting impact and industry leadership.
                  </p>
                  <div>
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 shadow-lg"
                    >
                      <Link href="/contact-us">Partner With Us</Link>
                    </Button>
                  </div>
                </div>

                {/* Image */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-sky-400/30 to-blue-600/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Skyward Vision creative team at work"
                    className="rounded-3xl shadow-2xl w-full object-cover h-96 relative z-10"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Values */}
        <section className="relative py-24 bg-[#101727] overflow-hidden">
          {/* Floating Gradient Backgrounds */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-sky-400 to-blue-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-52 h-52 bg-blue-600/20 rounded-full blur-2xl animate-pulse delay-700"></div>
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] bg-gradient-to-r from-blue-600 to-sky-400 opacity-10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-20">
                <Badge
                  variant="outline"
                  className="mb-4 border-sky-400/40 text-sky-300 bg-white/5 backdrop-blur-sm"
                >
                  Our Foundation
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                  Mission, Vision & Values
                </h2>
                <p className="text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed">
                  The core principles driving SkywardVision’s journey in
                  redefining SMD screen advertising and brand visibility.
                </p>
              </div>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                {/* Mission */}
                <Card className="border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-500">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white">
                      Our Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100 text-center leading-relaxed">
                      To empower brands with impactful SMD advertising solutions
                      that enhance visibility, captivate audiences, and inspire
                      engagement across diverse industries.
                    </p>
                  </CardContent>
                </Card>

                {/* Vision */}
                <Card className="border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-500">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white">
                      Our Vision
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100 text-center leading-relaxed">
                      To lead Pakistan’s SMD advertising industry with
                      innovation and creativity — setting benchmarks for
                      excellence and delivering unforgettable brand experiences.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <Card
                      key={index}
                      className="border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg text-center hover:scale-[1.05] transition-transform duration-500"
                    >
                      <CardHeader>
                        <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-lg text-white">
                          {value.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-blue-100 text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
          {/* Subtle Gradient Orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 left-10 w-32 h-32 bg-sky-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-16 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>

          <div className="relative container mx-auto px-6 lg:px-12">
            {/* Section Heading */}
            <div className="text-center mb-16">
              <Badge
                variant="outline"
                className="mb-4 border-blue-500/30 text-blue-600 bg-blue-50/50"
              >
                Our Achievements
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#101727] leading-tight">
                Numbers That Speak
                <span className="block bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                  Our Success
                </span>
              </h2>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="text-center group">
                    {/* Icon with Glow */}
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-r from-sky-400 to-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>

                    {/* Number with animation */}
                    <div className="text-3xl md:text-4xl font-extrabold text-[#101727] mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {achievement.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {achievement.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section
          id="team"
          className="py-20 lg:py-28 bg-[#101727] relative overflow-hidden"
        >
          {/* Floating Gradient Background Shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-sky-400 to-blue-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-52 h-52 bg-gradient-to-r from-blue-600 to-sky-400 opacity-20 rounded-full blur-2xl animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-gradient-to-r from-sky-400 to-blue-600 opacity-10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative container mx-auto px-6 lg:px-12">
            {/* Section Heading */}
            <div className="text-center mb-16 space-y-4">
              <Badge
                variant="outline"
                className="border-sky-400/50 text-sky-300 bg-white/5 backdrop-blur-sm"
              >
                Our Team
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Meet the Visionaries
                <span className="block bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                  Behind SkywardVision
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Our diverse team of experts combines creativity, innovation, and
                strategy to deliver impactful advertising campaigns with SMD
                screen excellence.
              </p>
            </div>

            {/* Team Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-500"
                >
                  <div className="p-8 text-center">
                    <div className="relative w-28 h-28 mx-auto mb-6">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        className="w-28 h-28 rounded-full object-cover border-4 border-sky-400/50 shadow-lg group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Gradient Ring Animation */}
                      <div className="absolute inset-0 rounded-full border-2 border-sky-400/30 animate-ping"></div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sky-400 font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-sky-400 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Elevate Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Join hundreds of satisfied clients who have transformed their
                businesses with SkywardVision. Let's create something
                extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  <Link href="/contact-us">Start Your Project</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutSection;
