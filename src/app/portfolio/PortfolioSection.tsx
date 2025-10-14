"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye, ExternalLink, Filter } from "lucide-react";
import { PORTFOLIO_CATEGORIES } from "@/utils/constants";

import Link from "next/link";

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const portfolioItems = [
    {
      id: 1,
      title: "Citywide SMD Screen Campaign",
      client: "MegaMart",
      category: "outdoor",
      year: "2024",
      image:
        "https://plus.unsplash.com/premium_photo-1747810785255-bdce35e7d69f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2l0eSUyMHdpZGUlMjBzY3JlZW58ZW58MHx8MHx8fDA%3D",
      tags: ["SMD Screens", "Outdoor Advertising", "Retail Growth"],
      description:
        "High-impact SMD screen campaign across prime city spots, boosting MegaMart’s seasonal sales with real-time product highlights and brand recall.",
      results: [
        "300% increase in store footfall",
        "2.5M+ daily impressions",
        "40% sales boost during campaign",
      ],
      duration: "2 months",
      budget: "PKR 700,000",
    },
    {
      id: 2,
      title: "Shopping Mall Digital Ads",
      client: "Star Mall",
      category: "indoor",
      year: "2024",
      image:
        "https://plus.unsplash.com/premium_photo-1679690708684-97aa10d30a80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFyZ2UlMjBzY3JlZW58ZW58MHx8MHx8fDA%3D",
      tags: ["Indoor Advertising", "Digital Screens", "Retail"],
      description:
        "Strategically placed SMD screens across mall corridors that promoted top tenants, boosting both retail sales and visitor engagement.",
      results: [
        "50% increase in tenant sales",
        "35% rise in foot traffic",
        "Longer average stay duration",
      ],
      duration: "6 months",
      budget: "PKR 550,000",
    },
    {
      id: 3,
      title: "Luxury Brand Billboard Launch",
      client: "Aura Perfumes",
      category: "outdoor",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1635834241720-12d908471b0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4YXJ5JTIwYnJhbmQlMjBzY3JlZW58ZW58MHx8MHx8fDA%3D",
      tags: ["Billboards", "Luxury Advertising", "Brand Awareness"],
      description:
        "Premium billboard and SMD screen launch campaign across high-end areas, positioning Aura Perfumes as a luxury lifestyle brand.",
      results: [
        "Brand recall increased by 220%",
        "90% product sell-out in first 3 months",
        "Expanded into 3 new cities",
      ],
      duration: "3 months",
      budget: "PKR 400,000",
    },
    {
      id: 4,
      title: "Food Chain Promotion",
      client: "Burger X",
      category: "outdoor",
      year: "2023",
      image:
        "https://images.pexels.com/photos/279218/pexels-photo-279218.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Restaurant Ads", "SMD Screens", "Engagement"],
      description:
        "Vibrant outdoor digital screen promotions showcasing new product launches and real-time offers for a fast-food chain.",
      results: [
        "70% growth in customer traffic",
        "150% increase in social mentions",
        "20% higher upsell conversions",
      ],
      duration: "4 months",
      budget: "PKR 300,000",
    },
    {
      id: 5,
      title: "Corporate Awareness Drive",
      client: "SkyTech Solutions",
      category: "digital",
      year: "2023",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Corporate Branding", "Digital Campaigns", "SMD Screens"],
      description:
        "A large-scale awareness campaign combining outdoor screens and indoor displays to showcase SkyTech’s digital solutions portfolio.",
      results: [
        "4x growth in brand inquiries",
        "200% more B2B leads",
        "Improved corporate credibility",
      ],
      duration: "5 months",
      budget: "PKR 650,000",
    },
    {
      id: 6,
      title: "Fashion Brand Launch",
      client: "Urban Wear",
      category: "outdoor",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1740377016309-ec06ae233f7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEZhc2hpb24lMjBCcmFuZCUyMExhdW5jaCUyMHNjcmVlbnxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["Fashion Ads", "Billboards", "Youth Marketing"],
      description:
        "Billboards and mall displays featuring Urban Wear’s new collection, driving buzz among younger audiences.",
      results: [
        "400% increase in social engagement",
        "National-level brand visibility",
        "Sold out flagship items in 2 weeks",
      ],
      duration: "2 months",
      budget: "PKR 350,000",
    },
  ];

  const filteredPortfolio = portfolioItems.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  return (
    <>
      <main id="main-content" className="">
        {/* Hero Section */}

        <section className="relative py-24 bg-gradient-to-r from-sky-400 to-blue-600 overflow-hidden">
          {/* Floating Shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 w-full max-w-7xl px-6 lg:px-12 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 text-white text-center lg:text-left animate-fade-in-up">
                <div className="space-y-4">
                  <h6 className="text-blue-100 text-base font-medium uppercase tracking-wide">
                    Our Portfolio
                  </h6>
                  <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                    Success Stories That{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                      Drive Results
                    </span>
                  </h2>
                  <p className="text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Explore our diverse portfolio of successful projects across
                    multiple industries. Each case study demonstrates our
                    commitment to excellence and measurable results that have
                    transformed businesses across Pakistan.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="/contact-us"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-white text-blue-600 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Start Your Project
                  </a>
                  <a
                    href="/services"
                    className="inline-flex items-center px-6 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300"
                  >
                    View Our Services
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative flex justify-center lg:justify-end animate-fade-in">
                <div className="relative w-full max-w-md lg:max-w-lg rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={"/assets/mockups/3.jpg"}
                    alt="SkywardVision Portfolio"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Stats */}
        <section className="py-20 bg-gradient-to-b from-sky-50 to-white relative overflow-hidden">
          {/* Decorative Blobs */}
          <div className="absolute inset-0">
            <div className="absolute top-8 left-10 w-40 h-40 bg-sky-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-12 right-10 w-56 h-56 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 lg:px-12">
            {/* Intro Section */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#101727] mb-4">
                Proven Results, Measurable Impact
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At{" "}
                <span className="font-semibold text-blue-600">
                  SkywardVision
                </span>
                , our SMD advertising solutions don’t just shine — they deliver
                real outcomes. From boosting visibility to increasing ROI, our
                results speak louder than words.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-4xl font-extrabold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-gray-700 font-medium">
                  Projects Completed
                </div>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-4xl font-extrabold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  5
                </div>
                <div className="text-gray-700 font-medium">
                  Industries Served
                </div>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-4xl font-extrabold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <div className="text-gray-700 font-medium">
                  Client Satisfaction
                </div>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-4xl font-extrabold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  200%
                </div>
                <div className="text-gray-700 font-medium">
                  Average ROI Increase
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-10 bg-[#101727] border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Filter className="w-5 h-5 text-sky-400" />
                <span className="font-medium">Filter by category:</span>
              </div>
              {PORTFOLIO_CATEGORIES.map((category) => (
                <Button
                  key={category.id}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`transition-all duration-300 rounded-full ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-sky-400 to-blue-600 text-white shadow-lg scale-105"
                      : "border border-sky-400/40 text-sky-300 hover:bg-gradient-to-r hover:from-sky-400 hover:to-blue-600 hover:text-white"
                  }`}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 lg:py-24 bg-[#101727]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredPortfolio.map((item, index) => (
                <Card
                  key={item.id}
                  className="group relative border-0 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading={index < 6 ? "eager" : "lazy"}
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-5 left-5 right-5">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              size="sm"
                              className="w-full bg-gradient-to-r from-sky-400 to-blue-600 text-white font-medium hover:opacity-90"
                              onClick={() => setSelectedProject(item)}
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              View Case Study
                            </Button>
                          </DialogTrigger>

                          {/* Dialog Content */}
                          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#101727] text-white rounded-2xl">
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-bold text-sky-400">
                                {item.title}
                              </DialogTitle>
                              <DialogDescription className="text-gray-300">
                                {item.client} • {item.year} • {item.duration} •{" "}
                                {item.budget}
                              </DialogDescription>
                            </DialogHeader>

                            <div className="space-y-6">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-64 object-cover rounded-xl"
                              />

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                  <h4 className="font-semibold text-xl mb-3 text-sky-300">
                                    Project Overview
                                  </h4>
                                  <p className="text-gray-400 leading-relaxed mb-4">
                                    {item.description}
                                  </p>

                                  <div className="space-y-2 mb-4 text-gray-300">
                                    <div>
                                      <strong>Client:</strong> {item.client}
                                    </div>
                                    <div>
                                      <strong>Duration:</strong> {item.duration}
                                    </div>
                                    <div>
                                      <strong>Budget:</strong> {item.budget}
                                    </div>
                                  </div>

                                  <div className="flex flex-wrap gap-2 mb-4">
                                    {item.tags.map((tag, idx) => (
                                      <Badge
                                        key={idx}
                                        variant="secondary"
                                        className="bg-sky-400/20 text-sky-300 border border-sky-400/40 text-xs"
                                      >
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-semibold text-xl mb-3 text-sky-300">
                                    Key Results
                                  </h4>
                                  <div className="space-y-3">
                                    {item.results?.map((result, idx) => (
                                      <div
                                        key={idx}
                                        className="flex items-start space-x-2"
                                      >
                                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                                        <span className="text-gray-300">
                                          {result}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10">
                                <Button
                                  asChild
                                  className="flex-1 bg-gradient-to-r from-sky-400 to-blue-600 text-white"
                                >
                                  <Link href="/contact-us">
                                    Start Similar Project
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                  </Link>
                                </Button>
                                <Button
                                  asChild
                                  variant="outline"
                                  className="flex-1 border-sky-400/40 text-sky-300 hover:bg-sky-400/20"
                                >
                                  <Link href="/services">
                                    View Our Services
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <Badge className="absolute top-4 left-4 bg-sky-400/90 text-white shadow-lg">
                      {PORTFOLIO_CATEGORIES.find(
                        (cat) => cat.id === item.category
                      )?.name || "Project"}
                    </Badge>
                  </div>

                  {/* Card Content */}
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-white mb-2 group-hover:text-sky-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {item.client} • {item.year}
                    </p>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {item.description.substring(0, 100)}...
                    </p>

                    {/* Key Result Preview */}
                    {item.results && item.results.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm text-sky-300 mb-2">
                          Key Result:
                        </h4>
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-1.5"></div>
                          <span className="text-sm text-gray-300">
                            {item.results[0]}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.slice(0, 2).map((tag, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs border-sky-400/40 text-sky-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {item.tags.length > 2 && (
                        <Badge
                          variant="outline"
                          className="text-xs text-gray-400 border-gray-600"
                        >
                          +{item.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* No Projects */}
            {filteredPortfolio.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
                  No projects found in this category.
                </p>
                <Button
                  onClick={() => setSelectedCategory("all")}
                  className="mt-4 bg-gradient-to-r from-sky-400 to-blue-600 text-white"
                >
                  View All Projects
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-sky-400 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Join our portfolio of successful projects. Let's discuss how we
                can help you achieve similar results for your business.
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
                  <Link href="/about">Learn About Our Process</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PortfolioSection;
