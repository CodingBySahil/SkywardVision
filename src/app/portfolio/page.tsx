import React from "react";
import PortfolioSection from "./PortfolioSection";
import { generateSEO } from "@/components/SEOHead";
import { SEO_META } from "@/utils/constants";

export async function generateMetadata() {
  return generateSEO({
    title: SEO_META.portfolio.title,
    description: SEO_META.portfolio.description,
    url: "/portfolio",
    keywords: SEO_META.portfolio.keywords,
  });
}

function portfolioPage() {
  return <PortfolioSection />;
}

export default portfolioPage;
