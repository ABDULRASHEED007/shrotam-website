import type { LegalSection } from "./types";

export const privacyPolicySections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    paragraphs: [
      "SHROTAM respects your privacy. This Privacy Policy explains how we collect, use, disclose, retain, and protect information when you visit our website, contact us, or engage our development services.",
      "Client Information Is Not Sold for Advertising or Marketing. We do not sell personal information to data brokers for their independent marketing purposes.",
      "This policy should be read with our Terms of Service, Security Overview, and Subprocessor disclosures.",
    ],
  },
  {
    id: "information-collected",
    title: "Information We Collect",
    paragraphs: ["Depending on your interaction with us, we may collect:"],
    bullets: [
      "Name, email address, phone number, and company information.",
      "Project requirements, budgets, timelines, and messages you submit via forms, email, or WhatsApp.",
      "Business documents and files you provide for scoping, onboarding, or delivery.",
      "Technical information such as IP address, browser type, device identifiers, and referral URLs when you use our website.",
      "Usage information from analytics or error monitoring if enabled on our properties.",
      "Payment-related information processed by payment providers (we typically receive confirmation metadata, not full card numbers).",
    ],
  },
  {
    id: "how-collected",
    title: "How Information Is Collected",
    paragraphs: ["We collect information through:"],
    bullets: [
      "Website contact and inquiry forms.",
      "Direct email, telephone, and WhatsApp communication.",
      "Project onboarding questionnaires and shared workspaces.",
      "Client-provided repositories, exports, and credentials (handled under project security rules).",
      "Cookies and similar technologies where implemented (see website notices).",
    ],
  },
  {
    id: "how-used",
    title: "How We Use Information",
    paragraphs: ["We use information to:"],
    bullets: [
      "Respond to enquiries and schedule consultations.",
      "Prepare proposals, statements of work, and project plans.",
      "Deliver, test, and support custom software and AI solutions.",
      "Manage client relationships, billing, and account administration.",
      "Maintain security, prevent fraud, and investigate incidents.",
      "Comply with legal obligations and enforce our agreements.",
    ],
  },
  {
    id: "legal-bases",
    title: "Legal Bases (Where Applicable)",
    paragraphs: [
      "Where India's Digital Personal Data Protection Act, 2023 or other laws require a lawful basis, we rely on consent, contractual necessity, legitimate interests in operating and securing our business, or legal obligation as appropriate to the context.",
    ],
  },
  {
    id: "sharing",
    title: "Data Sharing",
    paragraphs: [
      "Access to Client Information Is Restricted to Authorized Personnel and contractors bound by confidentiality obligations.",
      "We may share information with:",
    ],
    bullets: [
      "Employees and contractors who need access to perform Services.",
      "Cloud infrastructure and hosting providers selected for a project.",
      "AI model or speech API providers when integrated features require inference.",
      "Communications providers for voice, SMS, or messaging features.",
      "Payment processors for invoicing and collections.",
      "Professional advisers under confidentiality where reasonably necessary.",
      "Regulators, courts, or law enforcement when required by applicable law or to protect rights and safety.",
    ],
  },
  {
    id: "voice-ai-data",
    title: "Voice, Telephony, and AI Processing Data",
    paragraphs: [
      "When SHROTAM designs or operates AI voice agents for a Client, additional categories of information may be processed subject to the Project Agreement and AI Services Addendum:",
    ],
    bullets: [
      "Call audio, recordings, and speech-to-text transcripts.",
      "Call metadata such as timestamps, durations, caller or called numbers (as configured), and disposition codes.",
      "Conversation context used for knowledge retrieval, tool calls, CRM updates, and human handoff packets.",
      "Prompts, model inputs/outputs, and configuration artifacts required to run the agent.",
      "Retention and deletion windows for recordings and transcripts agreed per engagement — defaults are documented in the Security Overview and may be shortened on request where technically feasible.",
    ],
  },
  {
    id: "ai-model-providers",
    title: "AI Model and Communications Providers",
    paragraphs: [
      "Voice agents may rely on Third-Party AI Providers (speech recognition, synthesis, large language models) and Communications Providers / CPaaS platforms (telephony, SMS, messaging) such as Plivo or equivalents selected for the engagement.",
      "Client content sent to those providers is processed under their Terms of Service, Privacy Policy, Acceptable Use Policy, and AI Services Addendum (where published), and under the subprocessors disclosed for the engagement.",
      "Unless a Project Agreement states otherwise, SHROTAM does not authorize providers to use Client call content to train public foundation models.",
      "Clients remain responsible for lawful calling, consent, recording disclosure, AI disclosure to end users, and do-not-call obligations in their jurisdictions, including obligations imposed by the Communications Provider's terms.",
      "Naming example providers does not create an affiliation with those vendors.",
    ],
  },
  {
    id: "security",
    title: "Data Security",
    paragraphs: [
      "We implement administrative, technical, and organizational measures appropriate to custom development and AI voice work, as described in our Security Overview — including encryption in transit (TLS), access controls, and logical separation of Client workspaces where architected.",
      "No method of transmission or storage is completely secure. We cannot guarantee absolute security or zero risk of unauthorized access.",
    ],
  },
  {
    id: "retention",
    title: "Data Retention and Deletion",
    paragraphs: [
      "We retain information for as long as needed to fulfill the purposes in this policy, perform contracts, resolve disputes, and meet legal retention requirements.",
      "Upon project completion or request, we may delete or return Client materials according to the Project Agreement. Residual copies in backups may persist for a limited period before rotation. Deletion from Third-Party Services depends on those providers' tools and contractual terms—we do not guarantee instantaneous erasure from all third-party systems unless verified for a specific configuration.",
    ],
  },
  {
    id: "rights",
    title: "Privacy Rights",
    paragraphs: [
      "Depending on applicable law, you may request access, correction, deletion, withdrawal of consent, or restriction of certain processing.",
      "Submit requests using the privacy contact email configured in our Legal Center once confirmed. We may verify identity before responding. Rights may be limited where we must retain data for legal or contractual reasons.",
    ],
  },
  {
    id: "international",
    title: "International Data Transfers",
    paragraphs: [
      "When projects use global cloud or AI providers, information may be processed in countries other than your own. We address transfers through contractual safeguards and provider terms where required by applicable law.",
      "We do not represent that all data is stored exclusively in India unless explicitly agreed and implemented for a specific engagement.",
    ],
  },
  {
    id: "children",
    title: "Children's Information",
    paragraphs: [
      "Our business services are directed to organizations and adults. We do not knowingly collect personal information from children without appropriate authorization.",
    ],
  },
  {
    id: "updates",
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. The 'Last updated' date indicates the current version.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "Privacy questions and rights requests should be sent to the configured privacy contact email in our Legal Center. Entity registration details will be published once confirmed.",
    ],
  },
];
