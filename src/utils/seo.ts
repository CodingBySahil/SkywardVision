// SEO utility functions
export const generateMetaTags = (pageData) => {
  const {
    title,
    description,
    keywords,
    image,
    url,
    type = "website",
  } = pageData;

  return {
    title,
    meta: [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "SkywardVision" },

      // Open Graph tags
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:image", content: image || "/og-image.jpg" },
      { property: "og:site_name", content: "SkywardVision" },

      // Twitter Card tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image || "/twitter-image.jpg" },
      { name: "twitter:site", content: "@skywardvision" },

      // Additional meta tags
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0ea5e9" },
    ],
    link: [
      { rel: "canonical", href: url },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
  };
};

// Generate JSON-LD structured data
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SkywardVision",
    url: "https://skywardvision.example.com",
    logo: "https://skywardvision.example.com/logo.png",
    description:
      "SkywardVision — diversified advertisement & marketing enterprise in Pakistan. Outdoor advertising, digital marketing, real estate, dairy farming, and transportation.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Business District",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      postalCode: "75000",
      addressCountry: "Pakistan",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-300-1234567",
      contactType: "customer service",
      email: "support@skywardvision.com.pk",
      availableLanguage: ["English", "Urdu"],
    },
    sameAs: [
      "https://facebook.com/skywardvision",
      "https://twitter.com/skywardvision",
      "https://instagram.com/skywardvision",
      "https://linkedin.com/company/skywardvision",
    ],
    foundingDate: "2020-01-01",
    numberOfEmployees: "50-100",
    areaServed: "Pakistan",
    serviceType: [
      "Outdoor Advertising",
      "Digital Marketing",
      "Real Estate Services",
      "Dairy Farming Consultancy",
      "Transportation Services",
    ],
  };
};

// Generate breadcrumb schema
export const generateBreadcrumbSchema = (breadcrumbs: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index: number) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
};

// Generate service schema
export const generateServiceSchema = (service: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "SkywardVision",
      url: "https://skywardvision.example.com",
    },
    serviceType: service.name,
    areaServed: "Pakistan",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.name,
      itemListElement:
        service.features?.map((feature: any) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: feature,
          },
        })) || [],
    },
  };
};

export default {
  generateMetaTags,
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  generateServiceSchema,
};
