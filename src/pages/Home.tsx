import React from "react";
import SEOHead from "@/components/SEOHead";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import PortfolioGallery from "@/components/sections/PortfolioGallery";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";
import { SEO_META } from "@/utils/constants";

const Home = () => {
  return (
    <>
      <SEOHead
        title={SEO_META.home.title}
        description={SEO_META.home.description}
        keywords={SEO_META.home.keywords}
        url="/"
      />

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

export default Home;
