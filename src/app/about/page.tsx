import { generateSEO } from "@/components/SEOHead";
import { SEO_META } from "@/utils/constants";
import React from "react";
import AboutSection from "./AboutSection";

export async function generateMetadata() {
  return generateSEO({
    title: SEO_META.about.title,
    description: SEO_META.about.description,
    url: "/about",
    keywords: SEO_META.about.keywords,
  });
}
function page() {
  return <AboutSection />;
}

export default page;
