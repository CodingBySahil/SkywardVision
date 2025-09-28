import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import { Eye, ExternalLink } from "lucide-react";

const PortfolioGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Highway Digital Billboard",
      client: "Tech Solutions Ltd",
      category: "Outdoor SMD Advertising",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1673534180223-3750145fc45a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGlnaHdheSUyMGRpZ2l0YWwlMjBiaWxsYm9hcmR8ZW58MHx8MHx8fDA%3D",
      tags: ["SMD Screen", "Billboard", "Brand Awareness"],
      description:
        "Installed a massive outdoor SMD digital billboard on a major highway, boosting client brand visibility by 250%.",
    },
    {
      id: 2,
      title: "Restaurant Indoor SMD Display",
      client: "Green Valley Restaurant",
      category: "Indoor SMD Screens",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1596649300028-340ad0ec6146?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEluZG9vciUyMFNNRCUyMERpc3BsYXl8ZW58MHx8MHx8fDA%3D",
      tags: ["Indoor SMD", "Menu Board", "Customer Engagement"],
      description:
        "Deployed indoor SMD menu boards and promotional screens that increased customer engagement by 400%.",
    },
    {
      id: 3,
      title: "Real Estate SMD Promotion",
      client: "Urban Properties",
      category: "Property Advertising SMD",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1616418625172-c607e16733ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWR2ZXJ0aXNpbmclMjBzY3JlZW58ZW58MHx8MHx8fDA%3D",
      tags: ["SMD Display", "Property Marketing", "Luxury"],
      description:
        "Designed high-resolution outdoor SMD campaigns for luxury property launches, achieving a 90% sales rate in 3 months.",
    },
    {
      id: 4,
      title: "Corporate LED Video Wall",
      client: "Modern Enterprises",
      category: "Corporate SMD Solutions",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1594808985790-98a065b97476?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFkdmVydGlzaW5nJTIwc2NyZWVufGVufDB8fDB8fHww",
      tags: ["SMD Video Wall", "Events", "Technology"],
      description:
        "Set up a full indoor SMD video wall for corporate presentations and events, enhancing visual impact and audience experience.",
    },
    {
      id: 5,
      title: "Transit Advertising Screens",
      client: "Swift Logistics",
      category: "Transportation SMD Advertising",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1746985106190-6c116edec9bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRyYW5zcG9ydCUyMGFkdmVydGlzaW5nfGVufDB8fDB8fHww",
      tags: ["Transit SMD", "Digital Ads", "Public Reach"],
      description:
        "Installed SMD screens on buses and terminals to run digital ads, reducing ad costs and expanding audience outreach.",
    },
    {
      id: 6,
      title: "Retail Branding SMD Display",
      client: "Innovative Startups",
      category: "Retail SMD Solutions",
      year: "2023",
      image:
        "https://plus.unsplash.com/premium_photo-1747810783159-3f8b3b5609dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fEJyYW5kaW5nJTIwU01EJTIwRGlzcGxheXxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["Retail SMD", "Branding", "Digital Display"],
      description:
        "Created customized retail SMD screens for startup brands, boosting store visibility and customer engagement.",
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-blue-950 via-blue-900 to-black overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-sky-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-blue-400 text-blue-300 bg-white/10 backdrop-blur-sm"
          >
            Our Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Success Stories That{" "}
            <span className="text-sky-400 block">Shine Bright on SMD</span>
          </h2>
          <p className="text-lg text-blue-100 leading-relaxed">
            Explore our portfolio of cutting-edge SMD advertising projects —
            from outdoor billboards to indoor video walls, each designed for
            maximum impact.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <Card
              key={item.id}
              className="group relative border-0 bg-gradient-to-b from-white to-blue-50/90 backdrop-blur-sm shadow-md hover:shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading={index < 3 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="w-full p-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-sky-400 to-blue-600 text-white hover:opacity-90 transition"
                          onClick={() => setSelectedProject(item)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold">
                            {item.title}
                          </DialogTitle>
                          <DialogDescription className="text-base text-gray-600">
                            {item.client} • {item.year}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="text-xs bg-sky-100 text-sky-700 border border-sky-200"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            {item.description}
                          </p>
                          <Button
                            asChild
                            className="w-full bg-gradient-to-r from-sky-400 to-blue-600 text-white hover:opacity-90"
                          >
                            <Link to="/contact">
                              Start Similar Project
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <Badge className="absolute top-4 left-4 bg-white/90 text-blue-900 shadow">
                  {item.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-blue-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {item.client} • {item.year}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.slice(0, 2).map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs border-sky-300 text-sky-600"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {item.tags.length > 2 && (
                    <Badge variant="outline" className="text-xs text-gray-500">
                      +{item.tags.length - 2}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-blue-100 mb-6">
            Want to see more of our work? Explore our complete portfolio.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-sky-400 to-blue-600 text-white hover:opacity-90"
          >
            <Link to="/portfolio">
              View Complete Portfolio
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
