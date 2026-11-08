import type { LegalSection } from "./types";

export const termsOfServiceSections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction and Acceptance of Terms",
    paragraphs: [
      'These Terms of Service ("Terms") govern access to the SHROTAM website and the custom software engineering, AI development, SaaS, automation, and related professional services offered by SHROTAM ("we", "us", or "our").',
      "By using this website, submitting an inquiry, or entering into a written project agreement that references these Terms, you agree to be bound by them. If you accept on behalf of an organization, you represent that you have authority to bind that organization.",
      "These Terms incorporate by reference our Privacy Policy, Acceptable Use Policy, Security Overview, and—where AI features are in scope—the AI Services Addendum. Where AI Voice Agents use a Communications Provider, that provider's Terms, Acceptable Use Policy, Privacy Policy, and AI Addendum (if any) also apply to traffic on their network as described in the CPaaS Flow-Down section. Signed Statements of Work, proposals, or master services agreements control over these Terms where they explicitly conflict on project-specific matters.",
    ],
  },
  {
    id: "definitions",
    title: "Definitions",
    paragraphs: ["In these Terms:"],
    bullets: [
      '"Client" means the individual or entity receiving services.',
      '"Deliverables" means custom software, documentation, configurations, and other work product defined in a project agreement.',
      '"Project Agreement" means a signed proposal, statement of work, order form, or master services agreement.',
      '"Services" means professional development, integration, consulting, support, and related services we provide.',
      '"Third-Party Services" means platforms, APIs, or tools not operated by SHROTAM but integrated at the Client\'s or project\'s direction.',
      '"Communications Provider" or "CPaaS Provider" means a third-party communications platform (for example telephony, SIP, SMS, or messaging providers such as Plivo or equivalents) used to place, receive, or route voice or messaging traffic for AI Voice Agents.',
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility and Authority",
    paragraphs: [
      "Services are offered to businesses and qualified individuals with legal capacity to contract. You must provide accurate registration and contact information.",
      "You may not use our Services if you are barred under applicable law or if your use would violate our Acceptable Use Policy.",
    ],
  },
  {
    id: "description-of-services",
    title: "Description of Services",
    paragraphs: [
      "SHROTAM provides bespoke technology services including custom SaaS applications, AI agents and chatbots, voice automation, workflow automation, web and mobile applications, and enterprise integrations.",
      "Unless expressly stated in a Project Agreement, we do not provide regulated legal, medical, financial, or compliance advice. We implement technology according to agreed specifications and Client instructions.",
    ],
  },
  {
    id: "project-agreements",
    title: "Service Agreements and Project Orders",
    paragraphs: [
      "Commercial engagements require a Project Agreement describing scope, milestones, fees, acceptance criteria, and support boundaries.",
      "Website content, demos, and informal discussions are illustrative and not binding offers until documented in a signed or mutually acknowledged Project Agreement.",
    ],
  },
  {
    id: "scope-deliverables",
    title: "Project Scope and Deliverables",
    paragraphs: [
      "Functional and technical requirements are defined in the Project Agreement or attached specifications. Assumptions not documented may require a change order.",
      "We may use pre-existing libraries, frameworks, and internal tooling; ownership of custom Deliverables is addressed in the intellectual property sections below and in the Project Agreement.",
    ],
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities",
    paragraphs: ["The Client agrees to:"],
    bullets: [
      "Provide timely feedback, approvals, and access to systems reasonably required for delivery.",
      "Supply accurate requirements and lawful data, content, and credentials.",
      "Maintain accounts and billing with Third-Party Services used in the solution.",
      "Obtain consents, licenses, and regulatory permissions required for the Client's use case (including telemarketing, recording, and messaging where applicable).",
      "Designate a primary point of contact for decisions affecting schedule and scope.",
    ],
  },
  {
    id: "voice-communications",
    title: "Voice Agents and Communications Compliance",
    paragraphs: [
      "When Services include AI voice agents, telephony, or messaging, the Client is responsible for lawful use of those channels in every jurisdiction where calls or messages are placed or received.",
      "AI Voice Agents that place or receive traffic through a Communications Provider are also subject to that provider's Terms of Service, Acceptable Use Policy, Privacy Policy, and AI Services Addendum (or equivalent documents) as published for the Client's or SHROTAM's provider account.",
    ],
    bullets: [
      "Obtaining and documenting consent for recording, monitoring, or automated calling where required.",
      "Complying with do-not-call, telemarketing, spam, and consumer-protection rules applicable to the Client's campaigns.",
      "Providing required disclosures to callers (for example that they may be speaking with an AI agent) where mandated, contractually agreed, or required by the Communications Provider.",
      "Configuring quiet hours, retry limits, and opt-out handling for outbound programs.",
      "Ensuring Customer Data submitted to voice or AI features does not include prohibited categories (such as unprotected health information) unless a separate agreement expressly allows it.",
      "Maintaining an active, good-standing account with the chosen Communications Provider and paying provider usage fees unless SHROTAM expressly bills them as pass-through costs.",
    ],
  },
  {
    id: "cpaas-flowdown",
    title: "Communications Provider (CPaaS) Flow-Down Terms",
    paragraphs: [
      "SHROTAM is not a telecommunications carrier. Voice and messaging traffic for AI Voice Agents typically runs on Third-Party Communications Providers selected for the engagement (examples include Plivo and other CPaaS platforms).",
      "By enabling live calling or messaging through a Communications Provider integrated into SHROTAM Deliverables, the Client agrees that:",
    ],
    bullets: [
      "The Client (and, where SHROTAM operates the provider account on the Client's behalf, SHROTAM as processor/operator of that account) must comply with the provider's then-current Terms of Service, Acceptable Use Policy, Privacy Policy, and AI Services Addendum or similar AI terms.",
      "Provider rules about prohibited content, unsolicited communications, fraud, impersonation, recording, AI disclosure, sensitive data, and geographic restrictions apply to campaigns run through SHROTAM voice agents.",
      "SHROTAM will design agent controls (disclosures, quiet hours, opt-out handling, logging, and escalation) so that product behaviour can support those provider requirements, but the Client remains responsible for campaign lawfulness and for keeping its own use within the provider's AUP.",
      "If a Communications Provider suspends, rate-limits, or terminates service because of Client campaigns or content, SHROTAM is not liable for resulting downtime beyond remedies available under the Project Agreement.",
      "Naming a provider as an example (including Plivo) does not create an affiliation, partnership, or endorsement, and does not mean SHROTAM inherits that provider's certifications (such as SOC 2) for SHROTAM itself.",
    ],
  },
  {
    id: "accounts-access",
    title: "Account and Access Responsibilities",
    paragraphs: [
      "Where we administer staging or shared environments, credentials must be rotated when personnel change. Clients must not share production secrets in unsecured channels.",
      "The Client is responsible for user provisioning and access policies in systems the Client operates after handover.",
    ],
  },
  {
    id: "pricing-payment",
    title: "Pricing and Payment Terms",
    paragraphs: [
      "Fees are stated in the Project Agreement, typically structured as deposits, milestone payments, or time-and-materials with caps as agreed.",
      "Invoices are due within the period stated on the invoice unless otherwise agreed. Late amounts may accrue interest or trigger suspension of work as specified in the Project Agreement.",
    ],
  },
  {
    id: "taxes",
    title: "Taxes and Additional Charges",
    paragraphs: [
      "Fees exclude applicable taxes, duties, and government charges unless stated otherwise. The Client is responsible for applicable indirect taxes where required by law.",
      "Third-Party Service usage, telecommunications, model inference, and cloud infrastructure costs are billed by those providers unless explicitly included in our fees.",
    ],
  },
  {
    id: "timelines",
    title: "Project Timelines",
    paragraphs: [
      "Schedules are estimates based on agreed scope and timely Client participation. Delays caused by change requests, third-party outages, or Client unavailability may extend timelines without penalty to SHROTAM.",
    ],
  },
  {
    id: "changes",
    title: "Changes and Additional Requirements",
    paragraphs: [
      "Work outside approved scope requires a written change request describing impact on cost and schedule. We are not obligated to perform out-of-scope work without mutual agreement.",
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    paragraphs: [
      "Each party may receive confidential information from the other. The receiving party will use it only to perform under the Project Agreement and will protect it with reasonable care.",
      "Confidentiality obligations survive termination as stated in the Project Agreement or, if silent, for a reasonable period customary for trade secrets.",
    ],
  },
  {
    id: "data-ownership",
    title: "Data Ownership",
    paragraphs: [
      "Your Business Data Belongs to You. Client-provided business data, documents, and content remain the Client's property.",
      "We process Client data only to deliver Services, maintain security, and meet legal obligations as described in our Privacy Policy.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Rights",
    paragraphs: [
      "The Client retains ownership of pre-existing materials, trademarks, and data supplied to SHROTAM.",
      "Unless the Project Agreement states otherwise, upon full payment of fees attributable to custom Deliverables, the Client receives ownership of bespoke application code and project-specific documentation created exclusively for the Client, subject to third-party license terms for embedded open-source or commercial components.",
    ],
  },
  {
    id: "source-code",
    title: "Source Code and Deliverable Ownership",
    paragraphs: [
      "Transfer of repositories, credentials, and deployment artifacts occurs as defined at handover. SHROTAM may retain anonymized know-how and non-Client-specific reusable components developed during the engagement unless restricted by the Project Agreement.",
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    paragraphs: [
      "Integrations with cloud hosts, AI model APIs, payment gateways, telephony providers, and other vendors are subject to those vendors' terms and availability.",
      "Third-Party AI and Infrastructure Providers Are Evaluated According to Project Requirements; the Client acknowledges dependency risks including rate limits, policy changes, and service interruptions.",
      "Where a Third-Party Service is a Communications Provider, the Communications Provider (CPaaS) Flow-Down Terms section also applies.",
    ],
  },
  {
    id: "ai-services",
    title: "AI Services and AI-Generated Outputs",
    paragraphs: [
      "Where projects include AI capabilities, the AI Services Addendum applies. AI outputs may be inaccurate or incomplete; human review is required for high-impact decisions.",
      "We do not guarantee that AI systems will meet every regulatory requirement for the Client's industry without Client-specific compliance design agreed in writing.",
    ],
  },
  {
    id: "availability",
    title: "Service Availability",
    paragraphs: [
      "Professional services are performed on a project basis unless a separate support agreement defines uptime commitments for operated environments.",
      "We do not warrant uninterrupted operation of Third-Party Services or the public internet.",
    ],
  },
  {
    id: "testing-acceptance",
    title: "Testing and Acceptance",
    paragraphs: [
      "Milestone acceptance procedures and defect reporting windows are defined in the Project Agreement. Absent specific terms, the Client has ten (10) business days after delivery notification to report material defects reproducible from agreed specifications.",
    ],
  },
  {
    id: "warranties",
    title: "Warranties and Disclaimers",
    paragraphs: [
      "We warrant that Services will be performed in a professional and workmanlike manner consistent with industry practice for custom development.",
      "Except as expressly stated in a Project Agreement, Services and Deliverables are provided 'as is' and 'as available' without implied warranties of merchantability, fitness for a particular purpose, or non-infringement beyond our direct work product.",
    ],
  },
  {
    id: "limitation-liability",
    title: "Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, neither party is liable for indirect, incidental, special, consequential, or punitive damages, or loss of profits, revenue, or data, arising from the Services.",
      "SHROTAM's aggregate liability arising from a Project Agreement shall not exceed the fees paid by the Client under that Project Agreement in the twelve (12) months preceding the claim, unless a higher cap is expressly agreed in writing.",
    ],
  },
  {
    id: "indemnification",
    title: "Indemnification",
    paragraphs: [
      "Each party will indemnify the other against third-party claims arising from its gross negligence, willful misconduct, or breach of the Acceptable Use Policy, to the extent permitted by law.",
      "The Client will indemnify SHROTAM for claims arising from Client-provided content, unlawful use of Deliverables, or failure to obtain required consents for communications or data processing.",
    ],
  },
  {
    id: "suspension",
    title: "Suspension of Services",
    paragraphs: [
      "We may suspend work or access if fees are materially overdue, if continued work would violate law or our Acceptable Use Policy, or if necessary to address a credible security incident, with notice when practicable.",
    ],
  },
  {
    id: "termination",
    title: "Cancellation and Termination",
    paragraphs: [
      "Termination rights, notice periods, and payment for work performed are defined in the Project Agreement. Either party may terminate for uncured material breach after written notice if not remedied within the cure period stated in the agreement.",
    ],
  },
  {
    id: "refunds",
    title: "Refund Policy",
    paragraphs: [
      "Custom development fees for completed and accepted milestones are generally non-refundable. Prepaid unused amounts may be handled as stated in the Project Agreement upon termination for convenience.",
    ],
  },
  {
    id: "amendments",
    title: "Amendments to Terms",
    paragraphs: [
      "We may update these Terms by posting a revised version with an updated 'Last updated' date. Material changes will be highlighted where practicable. Continued use of the website after changes constitutes acceptance; active Project Agreements remain governed by their signed terms for project-specific matters.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of India, without regard to conflict-of-law principles, except where mandatory consumer protection laws in another jurisdiction apply to you.",
      "References to India's Digital Personal Data Protection Act, 2023 and applicable Rules are informational and do not by themselves constitute a compliance certification.",
    ],
  },
  {
    id: "dispute-resolution",
    title: "Dispute Resolution",
    paragraphs: [
      "Parties will attempt good-faith executive negotiation for at least thirty (30) days before pursuing formal dispute resolution.",
      "Unless the Project Agreement specifies otherwise, disputes may be referred to arbitration or courts in India as agreed in writing. Nothing prevents either party from seeking injunctive relief for misuse of confidential information or intellectual property.",
    ],
  },
  {
    id: "contact",
    title: "Contact Information",
    paragraphs: [
      "Questions about these Terms may be directed to the contact details in our Legal Center and Project Agreements. Use the configured legal contact email once confirmed for your organization.",
    ],
  },
];
