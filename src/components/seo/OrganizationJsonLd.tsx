import { siteConfig } from "@/config/site";
import { siteContact, telLink } from "@/config/contact";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url.startsWith("[") ? undefined : siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.contact.email.startsWith("[") ? undefined : siteConfig.contact.email,
    telephone: [telLink(siteContact.phone1), telLink(siteContact.phone2)],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: telLink(siteContact.phone1),
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        telephone: telLink(siteContact.phone2),
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
