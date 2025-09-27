// Site configuration
export const SITE_CONFIG = {
  name: "SkywardVision",
  tagline: "Elevating Brands to New Heights",
  description:
    "SkywardVision — diversified advertisement & marketing enterprise in Pakistan. Outdoor advertising, digital marketing, real estate, dairy farming, and transportation.",
  url: import.meta.env.VITE_SITE_URL || "https://skywardvision.example.com",
  logo: "/logo.png",
  author: "SkywardVision Team",
};

// Contact information
export const CONTACT_INFO = {
  phone: "+92 331 5484042",
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || "923315484042",
  email: "support@skywardvision.com.pk",
  address: {
    street: "123 Business District",
    city: "Karachi",
    state: "Sindh",
    country: "Pakistan",
    zipCode: "75000",
    full: "Ofc # 6, 4th Floor, Peshawar Mall Near Hayatabad Toll Plaza Ring Road Peshawar",
  },
  hours: {
    weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
    saturday: "Saturday: 10:00 AM - 4:00 PM",
    sunday: "Sunday: Closed",
  },
};

// Social media links
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/skywardvision",
  twitter: "https://twitter.com/skywardvision",
  instagram: "https://instagram.com/skywardvision",
  linkedin: "https://linkedin.com/company/skywardvision",
  youtube: "https://youtube.com/skywardvision",
};

// Navigation menu items
export const NAVIGATION = {
  main: [
    { name: "Home", href: "/", key: "home" },
    { name: "About", href: "/about", key: "about" },
    { name: "Services", href: "/services", key: "services" },
    { name: "Portfolio", href: "/portfolio", key: "portfolio" },
    { name: "Contact", href: "/contact", key: "contact" },
    { name: "SMD Screen", href: "/smd-screen", key: "smd-screen" },
  ],
  footer: {
    services: [
      { name: "Outdoor Advertising", href: "/services#outdoor" },
      { name: "Digital Marketing", href: "/services#digital" },
      { name: "Real Estate", href: "/services#real-estate" },
      { name: "Dairy Farming", href: "/services#dairy" },
      { name: "Transportation", href: "/services#transportation" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about#team" },
      { name: "Careers", href: "/careers" },
      { name: "News", href: "/news" },
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQ", href: "/faq" },
      { name: "Support Center", href: "/support" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  },
};

// Services data
export const SERVICES = [
  {
    id: "outdoor",
    name: "Outdoor Advertising",
    icon: "MdOutdoorGrill",
    description:
      "Strategic billboard and outdoor media placements to maximize brand visibility and reach your target audience effectively.",
    features: [
      "Billboard Design",
      "Strategic Placement",
      "Campaign Management",
      "ROI Tracking",
    ],
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "digital",
    name: "Digital Marketing",
    icon: "MdDevices",
    description:
      "Comprehensive digital marketing solutions including SEO, social media, PPC, and content marketing to grow your online presence.",
    features: [
      "SEO Optimization",
      "Social Media Management",
      "PPC Campaigns",
      "Content Strategy",
    ],
    image:
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: "MdHome",
    description:
      "Professional real estate marketing and development services to help you buy, sell, or develop properties efficiently.",
    features: [
      "Property Marketing",
      "Development Consulting",
      "Investment Analysis",
      "Market Research",
    ],
    image:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "dairy",
    name: "Dairy Farming",
    icon: "GiFarmTractor",
    description:
      "Modern dairy farming solutions and consultancy services to optimize milk production and farm management.",
    features: [
      "Farm Management",
      "Quality Control",
      "Equipment Supply",
      "Technical Support",
    ],
    image:
      "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "transportation",
    name: "Transportation",
    icon: "MdLocalShipping",
    description:
      "Reliable transportation and logistics services for efficient movement of goods and materials across the region.",
    features: [
      "Fleet Management",
      "Route Optimization",
      "Cargo Services",
      "Supply Chain",
    ],
    image:
      "https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

// Testimonials data
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ahmed Hassan",
    company: "Tech Solutions Ltd",
    role: "CEO",
    content:
      "SkywardVision transformed our brand visibility with their innovative outdoor advertising campaigns. Highly recommended!",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
  },
  {
    id: 2,
    name: "Fatima Ali",
    company: "Green Valley Farms",
    role: "Owner",
    content:
      "Their dairy farming consultancy helped us increase our milk production by 40%. Exceptional service and expertise.",
    avatar:
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
  },
  {
    id: 3,
    name: "Muhammad Khan",
    company: "Urban Properties",
    role: "Director",
    content:
      "Outstanding real estate marketing services. They helped us sell our properties 50% faster than our previous agency.",
    avatar:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
  },
];

// Contact form subjects
export const CONTACT_SUBJECTS = [
  { value: "general", label: "General Inquiry" },
  { value: "services", label: "Services Information" },
  { value: "quote", label: "Request Quote" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "support", label: "Technical Support" },
  { value: "other", label: "Other" },
];

// Portfolio categories
export const PORTFOLIO_CATEGORIES = [
  { id: "all", name: "All Projects" },
  { id: "outdoor", name: "Outdoor Advertising" },
  { id: "digital", name: "Digital Marketing" },
  { id: "real-estate", name: "Real Estate" },
  { id: "dairy", name: "Dairy Farming" },
  { id: "transportation", name: "Transportation" },
];

// SEO meta tags templates
export const SEO_META = {
  home: {
    title:
      "SkywardVision — Advertisement & Digital Marketing Agency in Pakistan",
    description:
      "SkywardVision — diversified advertisement & marketing enterprise in Pakistan. Outdoor advertising, digital marketing, real estate, dairy farming, and transportation.",
    keywords:
      "advertisement, marketing, outdoor advertising, digital marketing, real estate, dairy farming, transportation, Pakistan, Karachi",
  },
  about: {
    title: "About Us — SkywardVision Advertisement Agency",
    description:
      "Learn about SkywardVision, a leading advertisement and marketing agency in Pakistan offering comprehensive business solutions.",
    keywords:
      "about skywardvision, advertisement agency, marketing company, Pakistan business",
  },
  services: {
    title: "Our Services — SkywardVision Advertisement & Marketing",
    description:
      "Comprehensive advertisement and marketing services including outdoor advertising, digital marketing, real estate, dairy farming, and transportation.",
    keywords:
      "advertising services, marketing services, outdoor advertising, digital marketing, real estate marketing",
  },
  portfolio: {
    title: "Portfolio — SkywardVision Projects & Case Studies",
    description:
      "View our successful projects and case studies across outdoor advertising, digital marketing, real estate, and other business sectors.",
    keywords:
      "portfolio, case studies, advertising projects, marketing campaigns, success stories",
  },
  contact: {
    title: "Contact Us — SkywardVision Advertisement Agency",
    description:
      "Get in touch with SkywardVision for professional advertisement and marketing services in Pakistan. Call us today for a free consultation.",
    keywords:
      "contact skywardvision, advertisement agency contact, marketing services Pakistan, free consultation",
  },
  smdScreen: {
    title: "SMD Screen Solutions — SkywardVision Digital Displays",
    description:
      "Professional SMD screen and digital display solutions for outdoor advertising and marketing campaigns.",
    keywords:
      "SMD screen, digital displays, outdoor displays, LED screens, advertising screens",
  },
};

export default {
  SITE_CONFIG,
  CONTACT_INFO,
  SOCIAL_LINKS,
  NAVIGATION,
  SERVICES,
  TESTIMONIALS,
  CONTACT_SUBJECTS,
  PORTFOLIO_CATEGORIES,
  SEO_META,
};
