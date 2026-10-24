import { certifications, servicesDetailed, site } from "@/lib/site-data"

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      jobTitle: site.role,
      email: `mailto:${site.email}`,
      url: site.url,
      description: site.description,
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Malakand",
      },
      sameAs: [site.github, site.linkedin],
      knowsLanguage: ["Pashto", "Urdu", "English"],
      knowsAbout: [
        "Web application security",
        "API security",
        "Penetration testing",
        "Next.js",
        "React",
        "TypeScript",
      ],
      hasCredential: certifications.map((certification) => ({
        "@type": "EducationalOccupationalCredential",
        name: certification.name,
        credentialCategory: "certificate",
        recognizedBy: {
          "@type": "Organization",
          name: certification.issuer,
        },
      })),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#service`,
      name: `${site.name} — Web Security & Development`,
      url: site.url,
      description:
        "Web application penetration testing, API security assessments, secure full-stack development, and fix verification.",
      provider: { "@id": `${site.url}/#person` },
      email: `mailto:${site.email}`,
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Security & development services",
        itemListElement: servicesDetailed.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.summary,
          },
        })),
      },
    },
  ],
}
