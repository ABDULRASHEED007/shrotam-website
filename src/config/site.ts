import { siteContact, telLink, whatsAppLink } from "./contact";

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  contact: {
    email: string;
    phone: string;
    phone2: string;
    phoneTel: string;
    phone2Tel: string;
    whatsapp: string;
    whatsappUrl: string;
    whatsapp2Url: string;
    address: string;
    consultationUrl: string;
  };
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "SHROTAM",
  shortName: "SHROTAM",
  tagline: "AI Voice Agents for Business",
  description:
    "SHROTAM builds and deploys intelligent voice agents for inbound support, outbound sales, collections, loyalty, appointments, and IVR replacement — with knowledge grounding, human handoff, and production security controls.",
  url: "[CONFIGURE: https://your-official-domain.com]",
  contact: {
    email: siteContact.email,
    phone: siteContact.phone1.display,
    phone2: siteContact.phone2.display,
    phoneTel: telLink(siteContact.phone1),
    phone2Tel: telLink(siteContact.phone2),
    whatsapp: siteContact.phone1.display,
    whatsappUrl: whatsAppLink(siteContact.phone1),
    whatsapp2Url: whatsAppLink(siteContact.phone2),
    address: "[CONFIGURE: Registered or principal business address]",
    consultationUrl: "/contact",
  },
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
  navigation: [
    { label: "Solutions", href: "/solutions" },
    { label: "How we work", href: "/process" },
    { label: "Security", href: "/security" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export { siteContact };
