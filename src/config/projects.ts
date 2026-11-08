export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: string;
  isConceptual: boolean;
  tagline: string;
  problem: string;
  proposedSolution: string;
  technologyApproach: string[];
  keyCapabilities: string[];
  architectureOverview: string;
  deliveryHighlights: string[];
}

export const projectsData: ProjectCaseStudy[] = [
  {
    id: "intelligent-saas-platform",
    title: "Intelligent SaaS Management Platform",
    category: "Custom SaaS Engineering",
    isConceptual: true,
    tagline: "A scalable, multi-tenant B2B operations platform with embedded AI copilot.",
    problem:
      "Enterprise teams were juggling disjointed spreadsheets, fragmented task boards, and unlinked email chains, resulting in lost client deliverables, communication bottlenecks, and no unified visibility for executive leadership.",
    proposedSolution:
      "Engineered an enterprise-grade multi-tenant web application featuring centralized project workspaces, automated milestone tracking, automated document summarization, and Stripe-powered tiered subscription billing.",
    technologyApproach: [
      "Next.js App Router with React Server Components for sub-second page loads",
      "PostgreSQL with strict row-level security ensuring total tenant isolation",
      "LangGraph-orchestrated AI copilot capable of summarizing cross-department updates",
      "Dockerized microservices deployed on AWS with automated CI/CD pipelines",
    ],
    keyCapabilities: [
      "Dynamic multi-tenant organization provisioning with custom subdomains",
      "Role-Based Access Control (Admin, Manager, Contributor, Read-Only)",
      "Autonomous project health monitor identifying delayed dependencies",
      "Instant export of formatted executive PDF summaries and audit logs",
    ],
    architectureOverview:
      "Stateless microservices architecture with Redis caching, PostgreSQL transaction pooling, and an isolated AI inference worker queue to keep user interfaces responsive.",
    deliveryHighlights: [
      "Zero cross-tenant data leakage by design",
      "Sub-200ms API response latency on standard database queries",
      "Full WCAG 2.1 AA accessibility compliance across all administrative interfaces",
    ],
  },
  {
    id: "ai-customer-support-system",
    title: "AI-Powered Customer Support System",
    category: "AI Agent & Knowledge Retrieval",
    isConceptual: true,
    tagline: "Context-grounded resolution engine handling Tier-1 and Tier-2 customer inquiries.",
    problem:
      "A fast-growing online service was overwhelmed by thousands of repetitive technical support requests. The legacy rule-based chatbot frequently failed on nuanced questions, causing customer churn and overburdening senior support engineers.",
    proposedSolution:
      "Designed and deployed an intelligent RAG-driven support agent that ingests API documentation, release notes, and troubleshooting manuals to answer questions with verified source citations and execute account diagnostic actions.",
    technologyApproach: [
      "Vector embeddings using hybrid search (dense + sparse keyword) via Pinecone",
      "Strict citation guardrails prohibiting answers outside verified documentation",
      "Human-in-the-loop escalation pipeline connecting with Zendesk and Slack",
      "Real-time token streaming chat interface built with Tailwind and WebSockets",
    ],
    keyCapabilities: [
      "Instant query resolution with clickable references to source documentation",
      "Automatic token usage and latency monitoring dashboard",
      "Sensitive credential redactor scrubbing PII and API keys from chat logs",
      "Automated ticket classification, priority tagging, and sentiment analysis",
    ],
    architectureOverview:
      "High-throughput vector indexing pipeline running on serverless cloud workers, with streaming edge proxies delivering immediate character-by-character feedback to end users.",
    deliveryHighlights: [
      "99.4% citation accuracy with strict zero-hallucination guardrails",
      "Seamless warm transfer to human engineers with full conversational context",
      "Zero customer chat records used for public LLM training",
    ],
  },
  {
    id: "voice-booking-assistant",
    title: "Automated Voice-Based Booking Assistant",
    category: "Voice AI & Telephony",
    isConceptual: true,
    tagline: "Ultra-low-latency conversational voice agent for appointment scheduling and calendar sync.",
    problem:
      "Multi-location service clinics were losing thousands of dollars in potential revenue every week due to missed phone calls during peak hours and outside operating times. Front-desk staff spent over 4 hours daily simply rescheduling appointments.",
    proposedSolution:
      "Built an autonomous inbound voice receptionist powered by streaming speech-to-text, low-latency LLM reasoning, and natural voice synthesis, capable of handling complex booking workflows over standard telephone lines.",
    technologyApproach: [
      "WebSockets-based full duplex audio streaming via Twilio SIP trunking",
      "Sub-600ms speech-to-speech round-trip latency using streaming Whisper and ElevenLabs",
      "Direct bidirectional synchronization with Google Calendar and Outlook APIs",
      "Automated SMS booking confirmation and reminder dispatch",
    ],
    keyCapabilities: [
      "Natural conversational cadence with dynamic interruption detection",
      "Real-time calendar slot verification and conflict resolution",
      "Automatic call recording consent disclosure and encrypted storage",
      "Instant call summarization and structured booking payload logging",
    ],
    architectureOverview:
      "Event-driven telephony bridge orchestrating raw audio buffers over secure WebSockets, backed by an asynchronous calendar worker that locks appointment slots atomically.",
    deliveryHighlights: [
      "Natural conversation flow that callers can interrupt at any point",
      "Automated phone number validation and SMS calendar invites",
      "Instant fall-through to human receptionist on complex medical or billing inquiries",
    ],
  },
];

