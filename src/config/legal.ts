import type { SiteConfig } from "./site";

/** Last-updated dates for legal documents (ISO date strings, display as-is). */
export const legalLastUpdated = {
  termsOfService: "2026-11-06",
  privacyPolicy: "2026-11-06",
  acceptableUse: "2026-11-06",
  aiServicesAddendum: "2026-11-06",
  subprocessors: "2026-11-06",
  securityOverview: "2026-11-06",
  responsibleDisclosure: "2026-11-01",
} as const;

/**
 * Entity and contact placeholders — replace with verified details before publication.
 * Documents must be reviewed by qualified legal counsel.
 */
export const legalEntity = {
  brandName: "SHROTAM",
  registeredLegalName: "[CONFIGURE: Registered legal entity name]",
  registrationNumber: "[CONFIGURE: Company registration number, if applicable]",
  registeredAddress: "[CONFIGURE: Registered office address]",
  gstin: "[CONFIGURE: GSTIN, if applicable]",
  governingLawRegion: "India",
  legalContactEmail: "[CONFIGURE: legal@your-official-domain.com]",
  privacyContactEmail: "[CONFIGURE: privacy@your-official-domain.com]",
  securityContactEmail: "[CONFIGURE: security@your-official-domain.com]",
  generalContactEmail: "[CONFIGURE: contact@your-official-domain.com]",
} as const;

export interface LegalDocumentMeta {
  slug: string;
  href: string;
  title: string;
  description: string;
  lastUpdated: string;
}

export const legalDocuments: LegalDocumentMeta[] = [
  {
    slug: "terms-of-service",
    href: "/legal/terms-of-service",
    title: "Terms of Service",
    description:
      "Master terms governing SHROTAM development engagements, deliverables, payments, intellectual property, and liability.",
    lastUpdated: legalLastUpdated.termsOfService,
  },
  {
    slug: "privacy-policy",
    href: "/legal/privacy-policy",
    title: "Privacy Policy",
    description:
      "How SHROTAM collects, uses, shares, retains, and protects personal and business information.",
    lastUpdated: legalLastUpdated.privacyPolicy,
  },
  {
    slug: "acceptable-use",
    href: "/legal/acceptable-use",
    title: "Acceptable Use Policy",
    description:
      "Permitted and prohibited uses of SHROTAM services and client-deployed solutions, including voice and messaging compliance.",
    lastUpdated: legalLastUpdated.acceptableUse,
  },
  {
    slug: "ai-services-addendum",
    href: "/legal/ai-services-addendum",
    title: "AI Services Addendum",
    description:
      "Supplemental terms for AI agents, models, inputs, outputs, voice AI disclosure, and human oversight.",
    lastUpdated: legalLastUpdated.aiServicesAddendum,
  },
  {
    slug: "subprocessors",
    href: "/legal/subprocessors",
    title: "Subprocessors & Third-Party Providers",
    description:
      "Categories of external providers that may process data when delivering SHROTAM services, and how they are disclosed.",
    lastUpdated: legalLastUpdated.subprocessors,
  },
  {
    slug: "security-overview",
    href: "/legal/security-overview",
    title: "Security Overview",
    description:
      "Security practices for custom development engagements — controls implemented, limitations, and incident response.",
    lastUpdated: legalLastUpdated.securityOverview,
  },
  {
    slug: "responsible-disclosure",
    href: "/legal/responsible-disclosure",
    title: "Responsible Disclosure Policy",
    description:
      "How security researchers may report vulnerabilities in SHROTAM-operated systems and responsible testing expectations.",
    lastUpdated: legalLastUpdated.responsibleDisclosure,
  },
];

/** Configurable subprocessor register — add verified providers only. */
export interface SubprocessorEntry {
  id: string;
  name: string;
  category: string;
  role: string;
  dataProcessed: string;
  locationNote: string;
  verified: boolean;
}

export const subprocessorRegister: SubprocessorEntry[] = [
  {
    id: "placeholder-cloud",
    name: "[CONFIGURE: Cloud infrastructure provider name]",
    category: "Cloud infrastructure & hosting",
    role: "Application hosting, storage, and networking for client projects when selected in scope.",
    dataProcessed: "Project assets, application logs, and configuration data as defined per engagement.",
    locationNote: "[CONFIGURE: Primary processing region(s)]",
    verified: false,
  },
  {
    id: "placeholder-ai",
    name: "[CONFIGURE: AI model / API provider name]",
    category: "AI model & API services",
    role: "Inference, embeddings, or speech services integrated at client direction.",
    dataProcessed: "Prompts, transcripts, or business content submitted through integrated features.",
    locationNote: "Subject to provider terms and project-specific configuration.",
    verified: false,
  },
  {
    id: "placeholder-comms",
    name: "[CONFIGURE: Voice/SMS/messaging provider name — e.g. Plivo]",
    category: "Communications platform (CPaaS)",
    role: "Telephony, SMS, or messaging for AI voice agents. Traffic is also subject to the provider's ToS, AUP, Privacy Policy, and AI Addendum.",
    dataProcessed: "Call metadata, audio/recordings where enabled, message content, and routing data as configured.",
    locationNote: "[CONFIGURE: Provider region and retention settings]",
    verified: false,
  },
  {
    id: "placeholder-payments",
    name: "[CONFIGURE: Payment processor name]",
    category: "Payment processing",
    role: "Processing client invoices or subscription payments where applicable.",
    dataProcessed: "Billing contact details and payment instrument tokens handled by the processor.",
    locationNote: "Governed by processor agreements.",
    verified: false,
  },
];

export function getLegalDocument(slug: string): LegalDocumentMeta | undefined {
  return legalDocuments.find((d) => d.slug === slug);
}

export function brandLegalName(site: SiteConfig): string {
  return site.name;
}
