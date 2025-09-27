import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import officeImg from "/assets/mockups/2.jpg";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  CircleCheck as CheckCircle,
} from "lucide-react";
import { SEO_META } from "@/utils/constants";

const About = () => {
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
      <SEOHead
        title={SEO_META.about.title}
        description={SEO_META.about.description}
        keywords={SEO_META.about.keywords}
        url="/about"
      />

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
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                    src={officeImg}
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
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="mb-4">
                    Our Story
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-blackish">
                    From Vision to
                    <span className="text-primary block">
                      Industry Leadership
                    </span>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Founded in 2020 with a simple yet ambitious vision: to
                    revolutionize how businesses communicate with their
                    audiences. What started as a small advertisement agency has
                    evolved into a comprehensive marketing enterprise serving
                    diverse sectors across Pakistan.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our unique approach combines traditional advertising
                    expertise with modern digital strategies, backed by deep
                    industry knowledge in real estate, dairy farming, and
                    transportation sectors.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-sky-400 to-blue-600"
                  >
                    <Link to="/contact">Partner With Us</Link>
                  </Button>
                </div>
                <div className="space-y-6">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="SkywardVision team working on creative projects"
                    className="rounded-2xl shadow-xl w-full object-cover h-80"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Values */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">
                  Our Foundation
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-blackish mb-6">
                  Mission, Vision & Values
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Mission */}
                <Card className="border-0 shadow-xl bg-white">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-blackish">
                      Our Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center leading-relaxed">
                      To empower businesses with innovative advertising and
                      marketing solutions that drive growth, enhance brand
                      visibility, and create lasting connections with their
                      target audiences across multiple industry sectors.
                    </p>
                  </CardContent>
                </Card>

                {/* Vision */}
                <Card className="border-0 shadow-xl bg-white">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-blackish">
                      Our Vision
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center leading-relaxed">
                      To become Pakistan's most trusted and comprehensive
                      marketing enterprise, setting industry standards through
                      innovation, excellence, and sustainable business practices
                      that benefit our clients and communities.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Values */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <Card
                      key={index}
                      className="border-0 shadow-lg bg-white text-center hover:shadow-xl transition-shadow duration-300"
                    >
                      <CardHeader>
                        <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-lg text-blackish">
                          {value.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm leading-relaxed">
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
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">
                  Our Achievements
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-blackish mb-6">
                  Numbers That Speak
                  <span className="text-primary block">Our Success</span>
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
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
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">
                  Our Team
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-blackish mb-6">
                  Meet the Visionaries
                  <span className="text-primary block">
                    Behind SkywardVision
                  </span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Our diverse team of experts brings together decades of
                  experience in advertising, marketing, and business development
                  to serve our clients.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-xl bg-white text-center hover:shadow-2xl transition-shadow duration-300"
                  >
                    <CardContent className="pt-8">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-blue-100"
                        loading="lazy"
                      />
                      <h3 className="text-xl font-bold text-blackish mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary font-semibold mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
