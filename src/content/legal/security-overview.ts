import type { LegalSection } from "./types";

export const securityOverviewSections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      "This Security Overview describes practices SHROTAM applies to custom development engagements. It supplements our Privacy Policy and project agreements.",
      "Confidentiality Is Built Into Our Development Process. We design projects with least-privilege access and contractual confidentiality obligations.",
      "We do not claim absolute security, zero risk, or guaranteed prevention of every breach.",
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    paragraphs: [
      "Client materials are used only for agreed purposes. NDAs and project contracts define additional confidentiality duties.",
    ],
  },
  {
    id: "access-control",
    title: "Access Control and Authentication",
    paragraphs: [
      "Project repositories and environments are limited to assigned personnel. Where supported, multi-factor authentication is used for internal and shared admin access.",
      "Clients should enforce MFA and role-based access in production systems after handover.",
    ],
  },
  {
    id: "encryption",
    title: "Encryption",
    paragraphs: [
      "Data in transit between customer applications, consoles, and SHROTAM-operated endpoints is protected with TLS (TLS 1.2 or greater where supported by providers).",
      "Encryption at rest (for example AES-256 via cloud provider controls) depends on the infrastructure selected for each project and is documented in the engagement design.",
      "We do not represent unverified end-to-end encryption of call audio unless explicitly architected and documented for a specific solution.",
    ],
  },
  {
    id: "voice-ai-security",
    title: "AI Voice Agent Security Controls",
    paragraphs: [
      "For AI voice deployments, SHROTAM applies controls aligned with communications-platform expectations and AI-specific risk:",
    ],
    bullets: [
      "Logical tenant / workspace isolation so one Client's agents, knowledge, and call data are not accessible to another Client workspace.",
      "Least-privilege tool and API permissions for what an agent may read or write in CRM, calendars, and ticketing systems.",
      "Human handoff and escalation paths for high-risk intents instead of unsupervised irreversible actions.",
      "Logging of agent actions, model/tool calls, and dispositions for operational and security review.",
      "Configurable retention for call recordings and transcripts; Clients should define retention to match legal and business needs.",
      "Provider selection and contractual restrictions so Client content is not used to train public foundation models unless the Client expressly opts into a provider feature that requires it.",
      "Authentication for admin consoles and MFA where supported for personnel who access production voice environments.",
      "Product controls that support Communications Provider (CPaaS) requirements: AI and recording disclosures, quiet hours, opt-out / DNC suppression, sensitive-data gates, human handoff, and call-level audit logs.",
    ],
  },
  {
    id: "cpaas-security",
    title: "Communications Provider Security and Terms",
    paragraphs: [
      "Live voice and messaging traffic is typically carried by a Third-Party Communications Provider. Security, uptime, and certifications published by that provider (for example TLS, encryption at rest, or SOC 2 attestations) apply to the provider's own platform — not automatically to SHROTAM as an entity.",
      "Before production dialing, the engagement must identify the provider account, confirm that the Client has accepted the provider's ToS, AUP, privacy policy, and AI addendum (if any), and enable the voice-agent compliance controls required for that provider.",
      "SHROTAM may refuse to route traffic that would reasonably violate provider AUP or that the Client has not authorized under those terms.",
    ],
  },
  {
    id: "network-application",
    title: "Network and Application Security",
    paragraphs: [
      "Administrative access to production environments is limited to authorized personnel who need it for delivery or support.",
      "API and console access should use unique credentials or tokens; Clients must protect secrets and rotate them after personnel changes.",
      "Backups, where enabled by the chosen provider, should be encrypted and access-restricted according to that provider's capabilities and the Project Agreement.",
    ],
  },
  {
    id: "secure-development",
    title: "Secure Software Development",
    paragraphs: [
      "We apply input validation, dependency review, and code review practices appropriate to project scope. Specific controls are listed in proposals when security requirements are material.",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure Security",
    paragraphs: [
      "Infrastructure hardening follows provider best practices and project requirements, including network segmentation or private endpoints when agreed.",
    ],
  },
  {
    id: "secrets",
    title: "Secrets Management",
    paragraphs: [
      "Credentials should be stored in environment variables, secret managers, or vaults—not committed to source control. Clients rotate secrets after personnel changes.",
    ],
  },
  {
    id: "minimization",
    title: "Data Minimization",
    paragraphs: [
      "We request data fields and access scopes necessary for delivery. Staging datasets should be anonymized or synthetic when feasible.",
    ],
  },
  {
    id: "vulnerability",
    title: "Vulnerability Management",
    paragraphs: [
      "Dependencies may be scanned during development. Production monitoring and patch cadence for operated systems require a separate support agreement unless included in scope.",
    ],
  },
  {
    id: "testing",
    title: "Security Testing",
    paragraphs: [
      "Penetration testing and formal audits are available when scoped. Marketing pages do not imply completed certifications unless explicitly stated with evidence.",
    ],
  },
  {
    id: "monitoring",
    title: "Monitoring and Logging",
    paragraphs: [
      "Applications may emit operational logs for debugging and security review. Log retention and access controls should be configured per environment.",
    ],
  },
  {
    id: "incident-response",
    title: "Incident Response",
    paragraphs: [
      "If we become aware of a security incident affecting Client data in our control, we will notify the Client without undue delay according to the Project Agreement and applicable law, and cooperate on reasonable remediation steps.",
    ],
  },
  {
    id: "retention-deletion",
    title: "Data Retention and Deletion",
    paragraphs: [
      "Staging artifacts and temporary credentials should be removed after milestones. Backup retention follows provider and contract settings.",
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Security",
    paragraphs: [
      "Third-Party AI and Infrastructure Providers Are Evaluated According to Project Requirements. Clients inherit residual risk from vendor outages and policy changes.",
    ],
  },
  {
    id: "contact",
    title: "Security Contact",
    paragraphs: [
      "Report security concerns via the configured security contact email in the Responsible Disclosure Policy once confirmed.",
    ],
  },
];
