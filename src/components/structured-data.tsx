"use client";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Soundmind",
    "description": "AI-powered voice analysis platform for mental wellness tracking and emotional pattern discovery",
    "url": "https://getsoundmind.com",
    "logo": "https://getsoundmind.com/logo.png",
    "foundingDate": "2024",
    "sameAs": [
      "https://twitter.com/getsoundmind",
      "https://linkedin.com/company/soundmind"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hello@getsoundmind.com"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mental Wellness Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Voice Analysis",
            "description": "Advanced voice analysis for emotional pattern recognition and mental wellness tracking"
          }
        }
      ]
    },
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web-based"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}