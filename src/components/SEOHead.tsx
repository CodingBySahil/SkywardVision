// src/app/seo.ts
import { Metadata } from "next";
import { SITE_CONFIG } from "@/utils/constants";
import { generateMetaTags, generateOrganizationSchema } from "@/utils/seo";

type MetaTag = {
  name?: string;
  property?: string;
  content: string;
};

type MetaTagsResult = {
  title: string;
  meta: MetaTag[];
  link: { rel: string; href: string; type?: string }[];
};

export async function generateSEO({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  structuredData,
}: {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: Record<string, any>;
}): Promise<Metadata> {
  const fullUrl = url ? `${SITE_CONFIG.url}${url}` : SITE_CONFIG.url;

  // Explicitly type the return from generateMetaTags
  const metaTags: MetaTagsResult = generateMetaTags({
    title: title || SITE_CONFIG.name,
    description: description || SITE_CONFIG.description,
    keywords:
      keywords ||
      "advertisement, marketing, outdoor advertising, digital marketing, Pakistan",
    image: image || `${SITE_CONFIG.url}/og-image.jpg`,
    url: fullUrl,
    type,
  });

  const organizationSchema = generateOrganizationSchema();

  // Extract from metaTags safely
  const descriptionContent =
    metaTags.meta.find((m) => m.name === "description")?.content ||
    description ||
    SITE_CONFIG.description;

  const keywordsContent =
    metaTags.meta.find((m) => m.name === "keywords")?.content || keywords;

  return {
    title: metaTags.title,
    description: descriptionContent,
    keywords: keywordsContent,
    metadataBase: new URL(SITE_CONFIG.url),

    openGraph: {
      title: metaTags.title,
      description: descriptionContent,
      url: fullUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image || `${SITE_CONFIG.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: metaTags.title,
        },
      ],
      type: (type as "website") ?? "website",
    },

    twitter: {
      card: "summary_large_image",
      title: metaTags.title,
      description: descriptionContent,
      images: [image || `${SITE_CONFIG.url}/og-image.jpg`],
    },

    other: {
      "theme-color": "#0ea5e9",
    },

    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },

    manifest: "/manifest.json",

    alternates: {
      canonical: fullUrl,
    },

    // Add structured data safely
    ...(structuredData || organizationSchema
      ? {
          other: {
            "ld-json": JSON.stringify(structuredData ?? organizationSchema),
          },
        }
      : {}),
  };
}
