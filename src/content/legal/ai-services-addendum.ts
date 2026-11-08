import type { LegalSection } from "./types";

export const aiServicesAddendumSections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      "This AI Services Addendum supplements the SHROTAM Terms of Service when a Project Agreement includes artificial intelligence features such as agents, chatbots, voice assistants, retrieval systems, or automated workflows.",
      "If there is a conflict on AI-specific topics, this Addendum controls over the general Terms unless the Project Agreement states otherwise.",
    ],
  },
  {
    id: "definitions",
    title: "AI Definitions",
    paragraphs: ["For purposes of this Addendum:"],
    bullets: [
      '"AI Services" means design, development, integration, configuration, or support of AI-enabled capabilities.',
      '"AI Agents" means software that plans or executes multi-step tasks using models, tools, or APIs.',
      '"AI Voice Agents" means spoken-language interfaces using speech recognition, synthesis, or telephony.',
      '"AI Chatbots" means text conversational interfaces across web, messaging, or in-app channels.',
      '"AI Models" means machine learning or large language models from SHROTAM or Third-Party Providers.',
      '"AI Inputs" means prompts, documents, audio, metadata, and instructions submitted to AI Services.',
      '"AI Outputs" means text, audio, code, classifications, or actions produced by AI Services.',
      '"Third-Party AI Providers" means external model, speech, or embedding vendors.',
      '"Communications Provider" means a third-party CPaaS or telephony/messaging platform used to carry AI Voice Agent traffic (for example Plivo or an equivalent).',
      '"Integrations" means connections to CRMs, databases, telephony, or other Connected Applications.',
      '"Connected Applications" means Client or third-party systems authorized to exchange data with AI Services.',
    ],
  },
  {
    id: "functionality",
    title: "AI Agent Functionality",
    paragraphs: [
      "AI agents perform tasks according to Client configuration, prompts, permissions, and connected systems. Behavior may change when models, tools, or upstream APIs change.",
      "Clients are responsible for defining allowed actions, approval steps, and data access boundaries appropriate to their risk profile.",
    ],
  },
  {
    id: "ownership",
    title: "Input and Output Ownership",
    paragraphs: [
      "Client-provided AI Inputs and underlying business data remain the Client's property, subject to third-party license terms.",
      "Ownership of custom workflows, prompts libraries, and bespoke orchestration code is governed by the Project Agreement.",
      "AI Outputs may be similar to outputs generated for other customers when using general-purpose models; exclusive ownership of generic model behavior is not guaranteed.",
      "Pre-existing SHROTAM tools, templates, and non-Client-specific components remain SHROTAM's property unless assigned in writing.",
    ],
  },
  {
    id: "accuracy",
    title: "AI Accuracy and Limitations",
    paragraphs: [
      "AI Outputs may be incorrect, incomplete, biased, or unexpected. Models may hallucinate facts or misinterpret instructions.",
      "AI agents may fail to execute tasks correctly, especially when tools return errors or context is insufficient.",
      "Human verification is necessary before relying on AI Outputs for legal, medical, financial, safety-critical, or high-impact decisions.",
      "SHROTAM does not warrant factual accuracy of model-generated content beyond agreed testing and guardrails documented in the Project Agreement.",
    ],
  },
  {
    id: "third-party-providers",
    title: "Third-Party AI Providers",
    paragraphs: [
      "AI Services may rely on Third-Party AI Providers for inference, speech, or embeddings. Their terms, pricing, logging, and retention apply.",
      "Data sent to providers is configured per project. Do not assume providers never retain or train on data unless their applicable enterprise terms and settings confirm that for your deployment.",
    ],
  },
  {
    id: "cpaas-ai-flowdown",
    title: "Communications Provider Terms for AI Voice Agents",
    paragraphs: [
      "When AI Voice Agents send or receive calls or messages through a Communications Provider, that provider's Terms of Service, Acceptable Use Policy, Privacy Policy, and AI Services Addendum (or equivalent) apply to the traffic and related content.",
      "SHROTAM designs voice-agent product controls so that production deployments can meet typical provider AI requirements, including disclosure, consent, recording notices, restricted content, and human oversight. The Client must configure campaigns and content so that actual use stays within the selected provider's rules and applicable law.",
      "Examples of provider expectations SHROTAM voice agents are built to support (wording varies by provider): clear notice that the end user is interacting with AI; recording/monitoring disclosures; Client responsibility for outbound consent and TCPA- or TRAI-style rules; prohibition on unprotected sensitive or health data unless a separate written arrangement and designated features allow it; and Client validation of AI Outputs before high-impact reliance.",
      "Reference to a specific vendor such as Plivo is illustrative. SHROTAM is not affiliated with Plivo or any other Communications Provider unless a separate partnership agreement says otherwise.",
    ],
  },
  {
    id: "sensitive-data",
    title: "Sensitive Information",
    paragraphs: [
      "Unless explicitly scoped and secured, do not submit highly sensitive personal data, payment card data, protected health information, or classified materials through general-purpose AI features.",
      "Projects handling regulated data require additional architecture, agreements, and provider configurations agreed in writing — including any Business Associate Agreement or equivalent required by a Communications Provider or AI vendor.",
    ],
  },
  {
    id: "voice-disclosure",
    title: "Voice AI Disclosure and Consent",
    paragraphs: [
      "Where required by law, industry standards, or a Communications Provider's AI terms, Clients must disclose that users are interacting with AI and obtain consent for recording, transcription, or outbound outreach.",
      "SHROTAM will implement disclosure and consent flows agreed in specifications and supported by the voice-agent product, but does not guarantee regulatory compliance without Client-specific legal review.",
    ],
  },
  {
    id: "human-oversight",
    title: "Human Oversight",
    paragraphs: [
      "Clients must maintain qualified human review for workflows affecting rights, finances, safety, or contractual commitments unless explicitly designed as fully automated with accepted risk documented in the Project Agreement.",
    ],
  },
  {
    id: "security",
    title: "Security and Acceptable Use",
    paragraphs: [
      "AI Services must be used in accordance with the Acceptable Use Policy. Prompt injection, model abuse, and unauthorized data exfiltration through agents are prohibited.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "Questions about this Addendum may be directed through SHROTAM's official contact channels and configured legal email once confirmed.",
    ],
  },
];
