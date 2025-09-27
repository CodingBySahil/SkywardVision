import React from "react";
import { Helmet } from "react-helmet-async";
import { generateMetaTags, generateOrganizationSchema } from "@/utils/seo";
import { SITE_CONFIG } from "@/utils/constants";

const SEOHead = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  structuredData = null,
}:any) => {
  const fullUrl = url ? `${SITE_CONFIG.url}${url}` : SITE_CONFIG.url;
  const metaTags = generateMetaTags({
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

  return (
    <Helmet>
      <title>{metaTags.title}</title>

      {/* Meta Tags */}
      {metaTags.meta.map((meta, index) => {
        if (meta.name) {
          return <meta key={index} name={meta.name} content={meta.content} />;
        } else if (meta.property) {
          return (
            <meta key={index} property={meta.property} content={meta.content} />
          );
        }
        return null;
      })}

      {/* Link Tags */}
      {metaTags.link.map((link, index) => (
        <link key={index} {...link} />
      ))}

      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Additional Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />

      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />

      {/* Theme Color */}
      <meta name="theme-color" content="#0ea5e9" />
    </Helmet>
  );
};

export default SEOHead;
