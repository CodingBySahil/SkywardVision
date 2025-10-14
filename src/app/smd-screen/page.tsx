import React from "react";
import SmdScreenSection from "./SmdSection";
import { generateSEO } from "@/components/SEOHead";
import { SEO_META } from "@/utils/constants";

export async function generateMetadata() {
  return generateSEO({
    title: SEO_META.smdScreen.title,
    description: SEO_META.smdScreen.description,
    url: "/about",
    keywords: SEO_META.smdScreen.keywords,
  });
}

function SmdScreenPage() {
  return <SmdScreenSection></SmdScreenSection>;
}

export default SmdScreenPage;
