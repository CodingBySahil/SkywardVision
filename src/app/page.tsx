import React from "react";

import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import PortfolioGallery from "@/components/sections/PortfolioGallery";
import Testimonials from "@/components/sections/Testimonials";
import { SEO_META } from "@/utils/constants";
import { generateSEO } from "@/components/SEOHead";

export async function generateMetadata() {
  return generateSEO({
    title: SEO_META.home.title,
    description: SEO_META.home.description,
    url: "/",
    keywords: SEO_META.home.keywords,
  });
}

const HomePage = () => {
  return (
    <>
      <main id="main-content">
        <Hero />
        <ServicesGrid />
        <PortfolioGallery />
        <Testimonials />
        {/* <ContactForm /> */}
      </main>
    </>
  );
};

export default HomePage;
