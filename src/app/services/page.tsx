import React from "react";
import ServicesSection from "./ServicesSection";
import { SEO_META } from "@/utils/constants";
import { generateSEO } from "@/components/SEOHead";

export async function generateMetadata() {
  return generateSEO({
    title: SEO_META.services.title,
    description: SEO_META.services.description,
    url: "/services",
    keywords: SEO_META.services.keywords,
  });
}

function ServicesPage() {
  return <ServicesSection></ServicesSection>;
}

export default ServicesPage;
