import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Eye, ExternalLink } from 'lucide-react';

const PortfolioGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Digital Billboard Campaign',
      client: 'Tech Solutions Ltd',
      category: 'Outdoor Advertising',
      year: '2024',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Billboard', 'Brand Awareness', 'Digital'],
      description: 'Large-scale digital billboard campaign that increased brand visibility by 250% in major city locations.',
    },
    {
      id: 2,
      title: 'Social Media Marketing',
      client: 'Green Valley Restaurant',
      category: 'Digital Marketing',
      year: '2024',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Social Media', 'Content Creation', 'Engagement'],
      description: 'Comprehensive social media strategy that boosted online engagement by 400% and increased foot traffic.',
    },
    {
      id: 3,
      title: 'Luxury Property Marketing',
      client: 'Urban Properties',
      category: 'Real Estate',
      year: '2024',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Property Marketing', 'Luxury', 'Sales'],
      description: 'Premium property marketing campaign that achieved 90% sales rate within 3 months of launch.',
    },
    {
      id: 4,
      title: 'Farm Management System',
      client: 'Modern Dairy Farms',
      category: 'Dairy Farming',
      year: '2023',
      image: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Farm Management', 'Technology', 'Efficiency'],
      description: 'Implemented modern farm management systems that increased milk production efficiency by 35%.',
    },
    {
      id: 5,
      title: 'Fleet Optimization',
      client: 'Swift Logistics',
      category: 'Transportation',
      year: '2023',
      image: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Fleet Management', 'Logistics', 'Optimization'],
      description: 'Transportation fleet optimization that reduced operational costs by 30% and improved delivery times.',
    },
    {
      id: 6,
      title: 'Brand Identity Design',
      client: 'Innovative Startups',
      category: 'Digital Marketing',
      year: '2023',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Branding', 'Design', 'Identity'],
      description: 'Complete brand identity overhaul for multiple startups, establishing strong market presence.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Our Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blackish mb-6">
            Success Stories That
            <span className="text-primary block">Speak for Themselves</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Explore our diverse portfolio of successful projects across multiple industries. 
            Each project represents our commitment to excellence and results.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <Card 
              key={item.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden bg-white hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading={index < 3 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          size="sm"
                          className="w-full bg-white/90 text-blackish hover:bg-white"
                          onClick={() => setSelectedProject(item)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{item.title}</DialogTitle>
                          <DialogDescription className="text-base">
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
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                          <Button asChild className="w-full">
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
                <Badge 
                  className="absolute top-4 left-4 bg-white/90 text-blackish"
                  variant="secondary"
                >
                  {item.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-blackish mb-2 group-hover:text-primary transition-colors">
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
                      className="text-xs border-primary/20 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {item.tags.length > 2 && (
                    <Badge variant="outline" className="text-xs">
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
          <p className="text-gray-600 mb-6">
            Want to see more of our work? Explore our complete portfolio.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-sky-400 to-blue-600">
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