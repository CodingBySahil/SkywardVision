import React from "react";
import ContactUsSection from "./ContactUsSection";
import { SEO_META } from "@/utils/constants";
import { generateSEO } from "@/components/SEOHead";

export async function generateMetadata() {
  return generateSEO({
    title: SEO_META.contact.title,
    description: SEO_META.contact.description,
    url: "/contact-us",
    keywords: SEO_META.contact.keywords,
  });
}

function ContactUSpage() {
  return <ContactUsSection></ContactUsSection>;
}

export default ContactUSpage;
