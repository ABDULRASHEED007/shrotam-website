export interface IndustryItem {
  id: string;
  name: string;
  badge: string;
  description: string;
  capabilities: string[];
  impactSummary: string;
  complianceNote?: string;
}

export const industriesData: IndustryItem[] = [
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    badge: "Clinical & Practice Operations",
    description:
      "Automate administrative overhead, triage routine patient communications, and streamline clinical documentation without compromising patient trust.",
    capabilities: [
      "Automated appointment scheduling & rescheduling",
      "Routine patient pre-visit intake & reminder workflows",
      "Secure administrative document processing and EHR data bridging",
      "After-hours triage voice assistance with escalation to clinical staff",
    ],
    impactSummary: "Reduces clinical administrative backlog while keeping human providers in control of all medical decisions.",
    complianceNote: "Healthcare implementations require dedicated business associate agreements (BAA), HIPAA compliance verification, and clinical review.",
  },
  {
    id: "real-estate",
    name: "Real Estate & Property Management",
    badge: "Lead & Resident Operations",
    description:
      "Engage prospective buyers the second they inquire, qualify intent and budget, and automate tenant maintenance dispatch 24/7.",
    capabilities: [
      "Sub-second AI lead qualification for inbound property inquiries",
      "Interactive property detail & availability conversational bots",
      "Automated agent tour calendar booking & SMS confirmations",
      "Tenant maintenance triage and emergency contractor dispatching",
    ],
    impactSummary: "Eliminates response lag for high-value buyer leads and streamlines day-to-day property management.",
  },
  {
    id: "ecommerce",
    name: "E-Commerce & Retail",
    badge: "Customer & Order Intelligence",
    description:
      "Turn customer support from a cost center into a personalized sales engine with intelligent product recommendations and instant order tracking.",
    capabilities: [
      "Conversational shopping assistants providing personalized recommendations",
      "Instant order tracking, return requests, and exchange automation",
      "Catalog-wide semantic search understanding intent beyond exact keywords",
      "Automated inventory alert routing across multi-channel marketplaces",
    ],
    impactSummary: "Drives higher cart conversion while drastically reducing support ticket volume during seasonal spikes.",
  },
  {
    id: "education",
    name: "Education & EdTech",
    badge: "Learning & Student Experience",
    description:
      "Empower students with personalized AI learning companions while liberating faculty from repetitive grading queries and administrative tasks.",
    capabilities: [
      "Curriculum-grounded AI tutors that guide students through problem-solving",
      "24/7 student support for admissions, financial aid, and campus services",
      "Automated syllabus and document indexing for instant academic search",
      "Administrative workflow automation for enrollment and transcript processing",
    ],
    impactSummary: "Provides individual academic guidance at scale while reducing university administrative overhead.",
  },
  {
    id: "finance",
    name: "Finance & Professional Services",
    badge: "Document & Workflow Automation",
    description:
      "Accelerate contract reviews, financial statement synthesis, and compliance audits with high-precision, audit-logged intelligent pipelines.",
    capabilities: [
      "Automated extraction and reconciliation from structured and unstructured financial records",
      "Internal institutional knowledge query engines respecting document permissions",
      "Automated executive reporting, memo generation, and audit trail creation",
      "Sanitized client intake workflows with encrypted credential exchange",
    ],
    impactSummary: "Enables analysts and legal teams to focus on strategic advisory rather than tedious document parsing.",
    complianceNote: "Financial implementations require verification against applicable regulatory frameworks and institutional risk policies.",
  },
  {
    id: "startups",
    name: "Startups & High-Growth Tech",
    badge: "MVP & AI Product Acceleration",
    description:
      "Go from business concept to fully deployed, venture-ready AI software in weeks with production-grade engineering from day one.",
    capabilities: [
      "Rapid AI MVP engineering with scalable multi-tenant foundations",
      "Integration of frontier reasoning models and tool-calling architectures",
      "Billing, authentication, analytics, and admin dashboards out of the box",
      "Architectural consulting to prevent technical debt and runaway LLM costs",
    ],
    impactSummary: "Enables ambitious founders to launch differentiated, scalable products with world-class engineering quality.",
  },
];

