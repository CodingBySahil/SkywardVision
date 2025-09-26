import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
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
import { Eye, ExternalLink, Filter } from 'lucide-react';
import { PORTFOLIO_CATEGORIES, SEO_META } from '@/utils/constants';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Digital Billboard Campaign',
      client: 'Tech Solutions Ltd',
      category: 'outdoor',
      year: '2024',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Billboard', 'Brand Awareness', 'Digital'],
      description: 'Large-scale digital billboard campaign that increased brand visibility by 250% in major city locations across Karachi and Lahore.',
      results: ['250% increase in brand visibility', '35% boost in website traffic', '15% increase in sales'],
      duration: '3 months',
      budget: 'PKR 500,000',
    },
    {
      id: 2,
      title: 'Social Media Marketing Campaign',
      client: 'Green Valley Restaurant',
      category: 'digital',
      year: '2024',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Social Media', 'Content Creation', 'Engagement'],
      description: 'Comprehensive social media strategy that boosted online engagement by 400% and increased foot traffic significantly.',
      results: ['400% increase in engagement', '60% growth in followers', '25% increase in foot traffic'],
      duration: '6 months',
      budget: 'PKR 150,000',
    },
    {
      id: 3,
      title: 'Luxury Property Marketing',
      client: 'Urban Properties',
      category: 'real-estate',
      year: '2024',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Property Marketing', 'Luxury', 'Sales'],
      description: 'Premium property marketing campaign that achieved 90% sales rate within 3 months of launch for a luxury development.',
      results: ['90% sales rate achieved', '3-month completion time', '20% above asking price'],
      duration: '3 months',
      budget: 'PKR 300,000',
    },
    {
      id: 4,
      title: 'Farm Management System',
      client: 'Modern Dairy Farms',
      category: 'dairy',
      year: '2023',
      image: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Farm Management', 'Technology', 'Efficiency'],
      description: 'Implemented modern farm management systems that increased milk production efficiency by 35% and reduced operational costs.',
      results: ['35% increase in efficiency', '20% cost reduction', 'Improved quality control'],
      duration: '4 months',
      budget: 'PKR 800,000',
    },
    {
      id: 5,
      title: 'Fleet Optimization Solution',
      client: 'Swift Logistics',
      category: 'transportation',
      year: '2023',
      image: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Fleet Management', 'Logistics', 'Optimization'],
      description: 'Transportation fleet optimization that reduced operational costs by 30% and improved delivery times across the supply chain.',
      results: ['30% cost reduction', '40% faster deliveries', 'Improved customer satisfaction'],
      duration: '5 months',
      budget: 'PKR 600,000',
    },
    {
      id: 6,
      title: 'Brand Identity Redesign',
      client: 'Innovative Startups',
      category: 'digital',
      year: '2023',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Branding', 'Design', 'Identity'],
      description: 'Complete brand identity overhaul for multiple startups, establishing strong market presence and recognition.',
      results: ['3x brand recognition', '150% increase in leads', 'Award-winning design'],
      duration: '2 months',
      budget: 'PKR 200,000',
    },
    {
      id: 7,
      title: 'Shopping Mall Advertising',
      client: 'Metro Shopping Center',
      category: 'outdoor',
      year: '2023',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Indoor Advertising', 'Retail', 'Foot Traffic'],
      description: 'Strategic indoor advertising placement that increased tenant sales by 45% and improved mall foot traffic.',
      results: ['45% increase in tenant sales', '30% more foot traffic', 'Extended visitor stay time'],
      duration: '12 months',
      budget: 'PKR 750,000',
    },
    {
      id: 8,
      title: 'E-commerce Growth Strategy',
      client: 'Fashion Forward',
      category: 'digital',
      year: '2023',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['E-commerce', 'Growth', 'Online Sales'],
      description: 'Comprehensive e-commerce strategy that transformed a local fashion brand into a leading online retailer.',
      results: ['500% increase in online sales', '200% growth in customer base', 'National market expansion'],
      duration: '8 months',
      budget: 'PKR 400,000',
    },
    {
      id: 9,
      title: 'Industrial Property Development',
      client: 'Prime Industrial Parks',
      category: 'real-estate',
      year: '2022',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Industrial', 'Development', 'B2B Marketing'],
      description: 'Industrial property development marketing that achieved full occupancy within 6 months of project completion.',
      results: ['100% occupancy achieved', '6-month leasing timeline', 'Premium rental rates'],
      duration: '6 months',
      budget: 'PKR 450,000',
    },
  ];

  const filteredPortfolio = portfolioItems.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <>
      <SEOHead
        title={SEO_META.portfolio.title}
        description={SEO_META.portfolio.description}
        keywords={SEO_META.portfolio.keywords}
        url="/portfolio"
      />

      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-sky-400 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 border-white/30 text-white">
                Our Portfolio
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Success Stories That
                <span className="block text-yellow-300">Drive Results</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Explore our diverse portfolio of successful projects across multiple industries. 
                Each case study demonstrates our commitment to excellence and measurable results 
                that have transformed businesses across Pakistan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Link to="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Stats */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-gray-600">Industries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">200%</div>
                <div className="text-gray-600">Average ROI Increase</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <Filter className="w-5 h-5" />
                <span className="font-medium">Filter by category:</span>
              </div>
              {PORTFOLIO_CATEGORIES.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? 
                    "bg-gradient-to-r from-sky-400 to-blue-600" : 
                    "hover:bg-primary hover:text-white"
                  }
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPortfolio.map((item, index) => (
                <Card 
                  key={item.id}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden bg-white hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading={index < 6 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              size="sm"
                              className="w-full bg-white/90 text-blackish hover:bg-white"
                              onClick={() => setSelectedProject(item)}
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              View Case Study
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-2xl">{item.title}</DialogTitle>
                              <DialogDescription className="text-base">
                                {item.client} • {item.year} • {item.duration} • {item.budget}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-6">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-64 object-cover rounded-lg"
                              />
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-semibold text-lg mb-3">Project Overview</h4>
                                  <p className="text-gray-600 leading-relaxed mb-4">
                                    {item.description}
                                  </p>
                                  
                                  <div className="space-y-2 mb-4">
                                    <div><strong>Client:</strong> {item.client}</div>
                                    <div><strong>Duration:</strong> {item.duration}</div>
                                    <div><strong>Budget:</strong> {item.budget}</div>
                                  </div>

                                  <div className="flex flex-wrap gap-2 mb-4">
                                    {item.tags.map((tag, idx) => (
                                      <Badge key={idx} variant="secondary" className="text-xs">
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                
                                <div>
                                  <h4 className="font-semibold text-lg mb-3">Key Results</h4>
                                  <div className="space-y-2 mb-6">
                                    {item.results?.map((result, idx) => (
                                      <div key={idx} className="flex items-start space-x-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-700">{result}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
                                <Button asChild className="flex-1">
                                  <Link to="/contact">
                                    Start Similar Project
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                  </Link>
                                </Button>
                                <Button asChild variant="outline" className="flex-1">
                                  <Link to="/services">
                                    View Our Services
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    <Badge 
                      className="absolute top-4 left-4 bg-white/90 text-blackish"
                      variant="secondary"
                    >
                      {PORTFOLIO_CATEGORIES.find(cat => cat.id === item.category)?.name || 'Project'}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-blackish mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {item.client} • {item.year}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {item.description.substring(0, 100)}...
                    </p>
                    
                    {/* Key Results Preview */}
                    {item.results && item.results.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm text-blackish mb-2">Key Result:</h4>
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{item.results[0]}</span>
                        </div>
                      </div>
                    )}
                    
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

            {/* Load More Button */}
            {filteredPortfolio.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No projects found in this category.</p>
                <Button 
                  onClick={() => setSelectedCategory('all')}
                  className="mt-4"
                  variant="outline"
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
                Join our portfolio of successful projects. Let's discuss how we can help 
                you achieve similar results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Link to="/about">Learn About Our Process</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;