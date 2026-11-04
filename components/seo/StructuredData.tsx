import { siteUrl } from "@/lib/seo";

export default function StructuredData() {
  if (!siteUrl) {
    return null;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "JustRestore",
        url: siteUrl,
        founder: {
          "@id": `${siteUrl}/#artist`,
        },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#artist`,
        name: "Sabah Bardhan",
        jobTitle: "Furniture Artist",
        worksFor: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "JustRestore",
        url: siteUrl,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
