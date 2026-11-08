export interface FaqItem {
  id: string;
  category: "General" | "Security & Data" | "Engineering & Delivery";
  question: string;
  answer: string;
}

export const faqsData: FaqItem[] = [
  {
    id: "services-overview",
    category: "General",
    question: "What services does your AI agency provide?",
    answer:
      "We provide end-to-end engineering across custom SaaS development, autonomous AI agent systems, AI voice agents, intelligent chatbots, business process automation, AI-powered web and mobile applications, enterprise AI integration, and technical AI consulting.",
  },
  {
    id: "custom-saas",
    category: "Engineering & Delivery",
    question: "Can you build a completely custom SaaS application?",
    answer:
      "Yes. We design and build end-to-end multi-tenant software platforms from scratch, including UI/UX design, database modeling, user authentication, subscription billing (Stripe), role-based permissions, admin control panels, and cloud infrastructure.",
  },
  {
    id: "ai-agents-tasks",
    category: "Engineering & Delivery",
    question: "Can you develop AI agents that perform actual business tasks?",
    answer:
      "Yes. Rather than passive text generators, our AI agents use validated tool schemas, API connectors, and deterministic state machines to query databases, file invoices, trigger automated messages, and execute operational workflows with human oversight controls.",
  },
  {
    id: "voice-calling-agents",
    category: "Engineering & Delivery",
    question: "Do you develop AI voice calling agents?",
    answer:
      "Yes. We build low-latency (sub-600ms) voice agents for both inbound reception and outbound follow-ups. They can converse naturally over standard phone lines, schedule appointments directly in calendars, and update CRM records in real time.",
  },
  {
    id: "website-integration",
    category: "Engineering & Delivery",
    question: "Can you integrate AI into our existing website?",
    answer:
      "Yes. We can integrate AI capabilities into existing websites and web apps, including custom chat widgets, semantic search bars, automated content workflows, and personalized user experiences through secure REST or GraphQL APIs.",
  },
  {
    id: "crm-connectivity",
    category: "Engineering & Delivery",
    question: "Can you connect AI agents to our CRM or internal software?",
    answer:
      "Yes. We regularly integrate with Salesforce, HubSpot, Zoho, NetSuite, Zendesk, Slack, Google Workspace, Microsoft 365, and proprietary internal databases using modern APIs and authenticated webhook pipelines.",
  },
  {
    id: "confidentiality-protection",
    category: "Security & Data",
    question: "How do you protect confidential business information?",
    answer:
      "We enforce strict confidentiality by contract and practice. Access to client code and credentials is restricted to authorized engineers on a need-to-know basis. We use encrypted transmission (TLS 1.3), encrypted storage, zero-data-retention AI enterprise agreements, and never expose client keys.",
  },
  {
    id: "selling-data",
    category: "Security & Data",
    question: "Do you share or sell client data?",
    answer:
      "No. We never sell, rent, or monetize client-provided personal data, business records, or confidential project materials. Your data is used exclusively to engineer and operate your requested systems.",
  },
  {
    id: "code-ownership",
    category: "Engineering & Delivery",
    question: "Who owns the source code and final product?",
    answer:
      "You do. Unless explicitly agreed otherwise in writing, our standard project agreements provide that all bespoke software code, database schemas, and project deliverables developed for you transfer 100% to your company upon final milestone payment.",
  },
  {
    id: "project-timeline",
    category: "Engineering & Delivery",
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on scope. A focused AI agent, voice assistant, or workflow automation project typically takes 3 to 6 weeks. A complete multi-tenant custom SaaS platform or comprehensive enterprise integration generally ranges between 8 and 16 weeks.",
  },
  {
    id: "maintenance-support",
    category: "Engineering & Delivery",
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes. Following deployment, we offer structured technical support, continuous system monitoring, security updates, model tuning, and feature expansion packages tailored to your operational requirements.",
  },
  {
    id: "startups-smes",
    category: "General",
    question: "Can you work with startups and small businesses?",
    answer:
      "Yes. We collaborate with high-growth startups, ambitious entrepreneurs, and mid-sized businesses to build production-grade MVPs, streamline bottlenecked operations, and launch differentiated technology platforms.",
  },
  {
    id: "custom-solution",
    category: "General",
    question: "Can we request a custom solution?",
    answer:
      "Yes. We specialize in custom engineering. We do not force businesses into rigid templates. We review your exact operational workflows and architect a solution tailored to your operational constraints and objectives.",
  },
  {
    id: "nda-signing",
    category: "Security & Data",
    question: "Do you sign NDAs?",
    answer:
      "Yes. We routinely execute mutual Non-Disclosure Agreements (NDAs) before discussing sensitive intellectual property, operational workflows, or proprietary company data.",
  },
  {
    id: "post-delivery",
    category: "Engineering & Delivery",
    question: "What happens after project delivery?",
    answer:
      "Upon completion, we conduct full code and infrastructure handovers, provide technical documentation, run training walkthroughs for your team, and transition to agreed warranty and ongoing maintenance support.",
  },
];

