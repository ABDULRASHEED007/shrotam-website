import type { LegalSection } from "./types";

export const acceptableUseSections: LegalSection[] = [
  {
    id: "purpose",
    title: "Purpose and Scope",
    paragraphs: [
      "This Acceptable Use Policy ('AUP') describes permitted and prohibited uses of SHROTAM Services, Deliverables, and demo environments.",
      "It applies to Clients, their end users, and anyone accessing systems we build or operate under contract. It is incorporated into our Terms of Service.",
    ],
  },
  {
    id: "permitted",
    title: "Permitted Use",
    paragraphs: [
      "Use Services and Deliverables only for lawful business purposes described in your Project Agreement and applicable regulations.",
    ],
  },
  {
    id: "prohibited-general",
    title: "Prohibited Conduct",
    paragraphs: ["You must not use our Services or Deliverables to:"],
    bullets: [
      "Violate applicable law or regulatory requirements.",
      "Engage in fraud, phishing, identity theft, or deceptive practices.",
      "Distribute malware, exploit vulnerabilities, or attempt unauthorized access to systems.",
      "Harass, threaten, or discriminate against individuals.",
      "Impersonate others or misrepresent affiliation with SHROTAM or third parties.",
      "Send spam or unsolicited marketing in violation of anti-spam laws.",
      "Collect or process personal data without proper notice and lawful basis.",
      "Infringe intellectual property, publicity, or privacy rights.",
      "Generate or disseminate harmful, illegal, or violently extremist content using AI features.",
      "Circumvent technical restrictions of third-party platforms integrated into a solution.",
    ],
  },
  {
    id: "voice-messaging",
    title: "Voice AI and Communication Compliance",
    paragraphs: [
      "Because SHROTAM develops voice agents, chatbots, and messaging automation, Clients are responsible for campaign-specific compliance, including:",
    ],
    bullets: [
      "Obtaining required consents for outbound calls, SMS, and promotional messages.",
      "Honoring Do Not Disturb registries and opt-out requests applicable to their jurisdiction and industry.",
      "Providing clear identification when users interact with AI rather than a human, where required.",
      "Disclosing call recording or transcription when recording is enabled.",
      "Preventing fraudulent, misleading, or impersonation calls.",
      "Complying with telecommunications, TRAI, and sector-specific rules applicable to the Client's use case.",
      "Following the Terms of Service, Acceptable Use Policy, Privacy Policy, and AI Services Addendum (or equivalent) of every Communications Provider (CPaaS) used to carry traffic — for example Plivo or another selected vendor.",
      "Not using SHROTAM voice agents to evade provider spam, fraud, or content filters, or to place traffic the provider prohibits.",
    ],
  },
  {
    id: "cpaas-aup",
    title: "Communications Provider Acceptable Use",
    paragraphs: [
      "SHROTAM may suspend or refuse to run campaigns that we reasonably believe would violate a Communications Provider's AUP or that risk suspension of shared or Client provider accounts.",
      "Clients must keep provider accounts in good standing and promptly remediate notices from the provider about abusive or non-compliant traffic.",
    ],
  },
  {
    id: "client-responsibility",
    title: "Client Responsibility",
    paragraphs: [
      "SHROTAM implements technology according to agreed specifications. Clients must obtain permissions, consents, and registrations required for their campaigns and industries.",
      "We may suspend or refuse work that we reasonably believe would violate this AUP or applicable law.",
    ],
  },
  {
    id: "monitoring",
    title: "Investigation and Enforcement",
    paragraphs: [
      "We may investigate credible reports of abuse. Violations may result in termination, removal of access, or cooperation with lawful requests.",
    ],
  },
  {
    id: "reporting",
    title: "Reporting Abuse",
    paragraphs: [
      "Report suspected violations using our official contact channels listed on the Contact page and Legal Center.",
    ],
  },
];
