import React from "react";
import { generateSEO } from "@/components/SEOHead";
import { SEO_META } from "@/utils/constants";
import ConstructionSection from "./ConstructionSection";

export async function generateMetadata() {
  return generateSEO({
    title: SEO_META.construction.title,
    description: SEO_META.construction.description,
    url: "/construction",
    keywords: SEO_META.construction.keywords,
  });
}

function page() {
  return <ConstructionSection />;
}

export default page;
