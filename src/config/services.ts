export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  heroHeadline: string;
  heroSubhead: string;
  problemsSolved: string[];
  capabilities: string[];
  realWorldUseCases: { title: string; description: string }[];
  howItWorks: { step: string; title: string; description: string }[];
  technologies: string[];
  securityConsiderations: string[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "saas-development",
    slug: "saas-development",
    title: "Custom SaaS Development",
    shortTitle: "SaaS Development",
    tagline: "Enterprise-grade multi-tenant software engineered for scale and intelligence.",
    description:
      "Transform your business idea into a fully functional SaaS platform with intelligent features, scalable architecture, and intuitive user experiences.",
    heroHeadline: "Architecting Resilient, Multi-Tenant SaaS Platforms Powered by AI.",
    heroSubhead:
      "We design, build, and deploy production-ready cloud software from scratch — engineered for rapid user adoption, seamless subscription billing, and enterprise security.",
    problemsSolved: [
      "Fragmented tech stacks that cannot handle exponential user concurrency.",
      "Complicated subscription billing, seat management, and recurring revenue logic.",
      "Difficulty embedding AI models securely into standard transactional workflows.",
      "Lack of granular tenant data isolation causing compliance risks.",
    ],
    capabilities: [
      "Multi-tenant SaaS architecture with strict tenant isolation",
      "Stripe and Lemon Squeezy subscription & usage-based billing",
      "Comprehensive admin back-office and customer analytics",
      "Multi-provider user authentication & Role-Based Access Control (RBAC)",
      "Real-time event streaming and low-latency database queries",
      "Production-ready REST and GraphQL API gateways",
      "Self-healing microservices and automated CI/CD deployment",
    ],
    realWorldUseCases: [
      {
        title: "B2B Workflow Orchestrator",
        description: "A collaborative workspace where distributed operations teams automate complex document reviews and approval chains.",
      },
      {
        title: "FinTech Compliance Portal",
        description: "Multi-jurisdiction financial analysis SaaS with automated transaction screening and audit trail generation.",
      },
      {
        title: "Legal Document Intelligence Hub",
        description: "Secure multi-tenant platform for legal firms to draft, cross-reference, and verify contract terms in seconds.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Domain Modeling & Architecture",
        description: "We map business entities, multi-tenant boundaries, permission graphs, and data flows before writing code.",
      },
      {
        step: "02",
        title: "Foundational Infrastructure",
        description: "Provisioning isolated databases, authentication layers, message brokers, and base API schemas.",
      },
      {
        step: "03",
        title: "Feature & Intelligence Engineering",
        description: "Developing core application screens, billing cycles, AI copilot integrations, and event pipelines.",
      },
      {
        step: "04",
        title: "Hardening & Production Launch",
        description: "Load testing, penetration assessment, tenant leak verification, and automated cloud provisioning.",
      },
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma / Drizzle", "Redis", "Docker", "Stripe API", "AWS / GCP"],
    securityConsiderations: [
      "Tenant schema isolation preventing cross-tenant data leaks",
      "Encrypted data storage at rest (AES-256) and TLS 1.3 in transit",
      "Strict least-privilege RBAC enforced on every API route",
      "Automated audit logging of all sensitive administrative changes",
    ],
    faqs: [
      {
        question: "Do we own the full source code and intellectual property?",
        answer: "Yes. All bespoke application code, database schemas, and documentation created for your project are 100% transferred to your organization upon project completion.",
      },
      {
        question: "Can the architecture handle thousands of concurrent tenants?",
        answer: "Yes. We engineer using horizontal stateless autoscaling, connection-pooled databases, and caching layers capable of scaling gracefully under heavy enterprise load.",
      },
    ],
  },
  {
    id: "ai-agents",
    slug: "ai-agents",
    title: "AI Agent Development",
    shortTitle: "AI Agents",
    tagline: "Autonomous reasoning agents that use tools, analyze data, and execute business goals.",
    description:
      "Build intelligent AI agents that understand instructions, use connected tools, retrieve relevant information, and execute multi-step business workflows autonomously.",
    heroHeadline: "Goal-Oriented AI Agents That Execute Complex Business Workflows.",
    heroSubhead:
      "Move beyond simple prompt-and-response. We build deterministic, tool-using autonomous agents that reason, plan, execute API calls, and deliver verified business outcomes.",
    problemsSolved: [
      "Manual multi-step repetitive processes draining team hours and causing human error.",
      "Unreliable LLM outputs failing in mission-critical production environments.",
      "Inability of legacy software to interpret ambiguous, unstructured customer inputs.",
      "Data silos that prevent automated cross-system actions.",
    ],
    capabilities: [
      "Custom multi-agent orchestration networks (Supervisor-Worker patterns)",
      "Strict tool execution with validated schema arguments",
      "Enterprise Retrieval-Augmented Generation (RAG) with hybrid search",
      "Deterministic state machines ensuring agents stay within policy bounds",
      "Human-in-the-loop escalation checkpoints for sensitive approvals",
      "Continuous session memory and vectorized knowledge recall",
      "Comprehensive telemetry tracking token consumption, latency, and reasoning traces",
    ],
    realWorldUseCases: [
      {
        title: "Autonomous Procurement Auditor",
        description: "An agent that reconciles vendor invoices against POs, flags anomalies, queries ERP databases, and drafts approvals.",
      },
      {
        title: "Technical Customer Support Specialist",
        description: "A Tier-2 support agent that inspects error logs, queries API endpoints, reproduces user steps, and resolves tickets.",
      },
      {
        title: "Market Intelligence Synthesizer",
        description: "An automated research agent that crawls industry filings, extracts competitive pricing shifts, and compiles executive briefs.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Workflow Deconstruction",
        description: "We break complex human operations into deterministic decision trees, tool interfaces, and verification loops.",
      },
      {
        step: "02",
        title: "Agent Architecture & Tools",
        description: "We define tool schemas, input validators, state graphs, and vector retrieval pipelines with strict boundary guardrails.",
      },
      {
        step: "03",
        title: "Benchmarking & Evaluation",
        description: "We run regression test suites across hundreds of edge-case scenarios to measure accuracy and eliminate hallucinations.",
      },
      {
        step: "04",
        title: "Enterprise Deployment",
        description: "Deploying containerized agents with real-time audit logging, human approval queues, and telemetry.",
      },
    ],
    technologies: ["LangChain / LangGraph", "LlamaIndex", "FastAPI", "Python", "TypeScript", "Pinecone / Qdrant", "OpenAI / Claude / Gemini APIs"],
    securityConsiderations: [
      "Strict input sanitization mitigating prompt injection vulnerabilities",
      "Read-only scopes and step-up confirmation for destructive actions",
      "Zero training clauses on proprietary organizational data",
      "Air-gapped execution options for highly regulated environments",
    ],
    faqs: [
      {
        question: "How do you prevent agents from hallucinating or going off-script?",
        answer: "We employ deterministic state machines, schema-enforced tool calling, grounded vector retrieval, and verification guardrails. The agent can only execute predefined, validated functions.",
      },
      {
        question: "Can agents be integrated with our proprietary internal APIs?",
        answer: "Yes. We wrap your existing REST or GraphQL endpoints with strict OpenAPI specifications, enabling the agent to execute actions securely under defined authorization scopes.",
      },
    ],
  },
  {
    id: "voice-ai",
    slug: "voice-ai",
    title: "AI Voice Agents",
    shortTitle: "Voice AI",
    tagline: "Natural, ultra-low-latency voice interfaces that handle phone calls and voice interactions.",
    description:
      "Create natural, intelligent voice experiences that can handle inbound customer conversations, make outbound calls, answer queries, and update business systems in real-time.",
    heroHeadline: "Conversational Voice Agents with Human-Grade Latency and Fluency.",
    heroSubhead:
      "Deliver lifelike phone conversations, appointment scheduling, and customer service 24/7 without hold queues or robotic IVR menus.",
    problemsSolved: [
      "High call drop-offs caused by frustrating multi-level touchtone menus.",
      "Missed business leads and unanswered customer calls outside standard working hours.",
      "Skyrocketing call center operational costs and agent burnout.",
      "Manual data entry errors when logging call summaries into CRM systems.",
    ],
    capabilities: [
      "Sub-600ms latency voice pipeline for realistic conversational pacing",
      "Full duplex audio processing with interruption handling",
      "Inbound receptionist and customer inquiry handling",
      "Automated outbound confirmation and re-engagement calls",
      "Real-time calendar checking and appointment scheduling",
      "Live sentiment analysis and intelligent human agent transfer",
      "Instant call summarization and CRM record updates",
    ],
    realWorldUseCases: [
      {
        title: "Medical Practice Receptionist",
        description: "Handles patient rescheduling, verifies insurance eligibility, and answers clinic queries without staff overhead.",
      },
      {
        title: "Inbound Real Estate Lead Qualifier",
        description: "Answers property inquiries immediately, qualifies buyer budget and timeline, and books property tours.",
      },
      {
        title: "After-Hours Field Service Dispatch",
        description: "Assesses urgency for emergency HVAC/plumbing requests, captures location details, and dispatches technicians.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Telephony & Audio Pipeline",
        description: "We configure SIP trunks, WebSockets, and low-latency audio codecs for speech-to-text streaming.",
      },
      {
        step: "02",
        title: "Dialogue & Context Engine",
        description: "Crafting structured conversation trees, objection handling logic, and tool bindings for live calendar checks.",
      },
      {
        step: "03",
        title: "Voice Model & Tone Calibration",
        description: "Custom voice synthesis calibration with conversational fillers, natural pauses, and brand-tailored cadence.",
      },
      {
        step: "04",
        title: "Compliance & Integration",
        description: "Configuring call disclosure announcements, opt-out mechanisms, CRM hooks, and call recording encryption.",
      },
    ],
    technologies: ["Twilio / Telnyx", "LiveKit", "Whisper / Deepgram", "ElevenLabs / Cartesia", "FastAPI", "WebSockets"],
    securityConsiderations: [
      "Mandatory call recording disclosure and regulatory consent capture",
      "Immediate redaction of payment credentials or sensitive personal identifiers from transcripts",
      "Encrypted audio streams (SRTP) and encrypted transcript storage",
      "Strict compliance with applicable telecommunications and calling regulations",
    ],
    faqs: [
      {
        question: "How fast is the response time during a voice call?",
        answer: "By combining streaming speech-to-text, speculative LLM generation, and ultra-low-latency voice synthesis, our voice agents achieve sub-600ms response times, creating a seamless human-like cadence.",
      },
      {
        question: "What happens if a caller asks to speak to a human?",
        answer: "The voice agent immediately initiates a warm transfer to your designated phone line or support queue, along with a real-time transcript of the conversation up to that point.",
      },
    ],
  },
  {
    id: "ai-chatbots",
    slug: "ai-chatbots",
    title: "AI Chatbots & Virtual Assistants",
    shortTitle: "AI Chatbots",
    tagline: "Multilingual conversational bots grounded in your documents and knowledge base.",
    description:
      "Deploy intelligent conversational assistants that help customers find answers, navigate services, and interact with your business across your website and messaging channels.",
    heroHeadline: "Context-Aware Chatbots Grounded Exclusively in Your Company Knowledge.",
    heroSubhead:
      "Eliminate generic, inaccurate chatbot answers. We engineer conversational assistants that query your actual documentation, honor brand guidelines, and resolve user requests instantly.",
    problemsSolved: [
      "Customer frustration from dumb rule-based bots that fail on slight phrasing variations.",
      "High volume of repetitive support tickets overwhelming support desks.",
      "Inaccurate or hallucinated answers damaging brand credibility.",
      "Disconnected chat logs that never update customer profiles in the CRM.",
    ],
    capabilities: [
      "Document ingestion from PDFs, Notion, Confluence, Zendesk, and live URLs",
      "Strict citation-grounded responses with reference links to source materials",
      "Zero-shot multilingual support across 50+ languages",
      "Lead capture and automatic qualification questionnaires",
      "Live chat agent handoff with full conversational history",
      "Custom UI widget matching your brand aesthetic seamlessly",
      "Negative sentiment detection with priority escalation",
    ],
    realWorldUseCases: [
      {
        title: "E-Commerce Shopping Assistant",
        description: "Guides shoppers to appropriate product variants, answers sizing questions, and queries live stock levels via API.",
      },
      {
        title: "SaaS Knowledge Companion",
        description: "Embeds directly inside web applications to answer technical questions and explain features using documentation.",
      },
      {
        title: "HR & Internal Employee Bot",
        description: "Instantly clarifies company policies, expense guidelines, and benefits documentation for global employees.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Knowledge Audit & Ingestion",
        description: "We clean, chunk, and embed your technical documents, policy guides, and product catalogs into a vector database.",
      },
      {
        step: "02",
        title: "Prompt Engineering & Guardrails",
        description: "Establishing strict persona boundaries, fallback rules, and preventing responses outside authorized source texts.",
      },
      {
        step: "03",
        title: "Widget & Channel Integration",
        description: "Deploying a lightweight, accessible web chat widget or integrating into Slack, Microsoft Teams, or WhatsApp.",
      },
      {
        step: "04",
        title: "Analytics & Continuous Tuning",
        description: "Tracking unhandled queries, user ratings, and updating documentation gaps to continuously improve resolution rates.",
      },
    ],
    technologies: ["React", "TypeScript", "Next.js", "OpenAI / Claude", "Pinecone", "LangChain", "Tailwind CSS"],
    securityConsiderations: [
      "Source citation grounding to prevent model hallucinations",
      "Role-based knowledge retrieval ensuring users only query documents they have clearance to view",
      "Data anonymization stripping PII from chat prompts before model evaluation",
      "No customer data used for foundational model retraining",
    ],
    faqs: [
      {
        question: "Can the chatbot answer questions from our internal PDFs and manuals?",
        answer: "Yes. We ingest your PDFs, spreadsheets, and manuals into a high-precision vector database. When a user asks a question, the bot retrieves only the verified excerpts to construct its answer.",
      },
      {
        question: "What if the chatbot doesn't know the answer?",
        answer: "Rather than guessing or hallucinating, it politely explains that it lacks the verified documentation and seamlessly offers to submit a ticket or route the user to a human specialist.",
      },
    ],
  },
  {
    id: "automation",
    slug: "automation",
    title: "Business Process Automation",
    shortTitle: "Automation",
    tagline: "Intelligent workflow automation that eliminates repetitive operations and links business tools.",
    description:
      "Eliminate repetitive tasks and connect your business systems through intelligent automated workflows that process data, trigger actions, and keep systems synchronized.",
    heroHeadline: "Transform Manual Operations into Seamless, Self-Driving Workflows.",
    heroSubhead:
      "Free your team from spreadsheet copying, manual data entry, and slow approval bottlenecks with enterprise workflow pipelines engineered for 99.9% reliability.",
    problemsSolved: [
      "Critical data trapped in disconnected SaaS tools requiring manual copy-pasting.",
      "Human data entry errors causing billing inaccuracies and delayed shipments.",
      "Slow multi-department approval processes holding up revenue generation.",
      "Lack of observability when background processes fail silently.",
    ],
    capabilities: [
      "Custom event-driven workflow automation pipelines",
      "Intelligent document processing (OCR + structured extraction)",
      "Bidirectional CRM, ERP, and accounting synchronization",
      "Automated email parsing and ticket classification",
      "Scheduled reporting and executive KPI dashboard generation",
      "Webhook listening with automatic retry mechanisms and error alerting",
      "Human authorization checkpoints via Slack or email buttons",
    ],
    realWorldUseCases: [
      {
        title: "Invoice & Expense Reconciliation",
        description: "Extracts vendor, amount, and line items from incoming invoice PDFs and automatically logs them in QuickBooks/NetSuite.",
      },
      {
        title: "Client Onboarding Orchestration",
        description: "Generates contracts upon deal signature, provisions accounts, invites users to Slack channels, and creates Asana projects.",
      },
      {
        title: "Inventory Sync Across Channels",
        description: "Monitors warehouse stock levels in real time and synchronizes quantities across Shopify, Amazon, and ERP systems.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Process Discovery & Mapping",
        description: "We map every trigger, data transformation, validation rule, and target system in your operational flow.",
      },
      {
        step: "02",
        title: "Integration & Pipeline Construction",
        description: "Building robust API connectors, transformation scripts, and error-handling dead-letter queues.",
      },
      {
        step: "03",
        title: "Stress Testing & Verification",
        description: "Simulating high volume bursts, malformed inputs, and API timeouts to ensure zero data loss.",
      },
      {
        step: "04",
        title: "Monitoring & Maintenance",
        description: "Deploying automated telemetry with instant notifications for failed events and regular performance health checks.",
      },
    ],
    technologies: ["Node.js", "Python", "Temporal / BullMQ", "Redis", "Docker", "REST / Webhooks", "Cloud Functions"],
    securityConsiderations: [
      "Encrypted credential storage in secure hardware security modules / secret managers",
      "Idempotent event processing preventing duplicate transactions",
      "Granular access tokens with restricted scope per automated action",
      "Detailed audit logs recording every automated record modification",
    ],
    faqs: [
      {
        question: "Can you automate workflows across legacy software without modern APIs?",
        answer: "Yes. For legacy software, we combine database-level connectors, SFTP file watchers, and headless automation techniques to safely extract and push data without human intervention.",
      },
      {
        question: "How do you handle API outages from third-party tools?",
        answer: "We build all automations with exponential backoff retries, persistent message queues, and dead-letter alert queues so no transaction or data event is ever lost.",
      },
    ],
  },
  {
    id: "web-development",
    slug: "web-development",
    title: "AI-Powered Web Applications",
    shortTitle: "Web Applications",
    tagline: "High-performance web applications combining modern UX with practical AI capabilities.",
    description:
      "Develop modern web applications that combine exceptional user experiences with practical AI capabilities, scalable cloud backends, and responsive design.",
    heroHeadline: "Bespoke Web Platforms Engineered for Lightning Speed and AI Capability.",
    heroSubhead:
      "We build responsive, accessible, and high-conversion web applications from the ground up using modern frameworks, server-rendered components, and clean design.",
    problemsSolved: [
      "Slow, bloated web applications with poor Core Web Vitals and poor SEO performance.",
      "Disjointed user experiences that struggle on mobile and tablet screens.",
      "Inflexible off-the-shelf templates that cannot support custom business logic.",
      "Difficulty streaming real-time AI responses into user interfaces smoothly.",
    ],
    capabilities: [
      "Server-side rendered (SSR) and statically generated (SSG) architectures",
      "Streaming UI components with real-time token rendering",
      "Comprehensive design systems built with Tailwind CSS and modern UI primitives",
      "Interactive data visualizations and executive dashboard graphs",
      "Full internationalization (i18n) and accessibility compliance (WCAG 2.1 AA)",
      "Optimized Core Web Vitals ensuring sub-second load times",
      "Progressive Web App (PWA) offline capabilities where needed",
    ],
    realWorldUseCases: [
      {
        title: "AI Financial Modeling Studio",
        description: "An interactive web app allowing analysts to upload spreadsheets and run automated scenario simulations in real time.",
      },
      {
        title: "Client Service Portal",
        description: "A secure branded portal where customers view deliverables, approve milestones, and query project documentation.",
      },
      {
        title: "Healthcare Patient Intake Suite",
        description: "A responsive, HIPAA-ready digital intake form with intelligent symptom clarification and automated physician notes.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "User Experience Architecture",
        description: "We design wireframes, user journeys, component libraries, and interactive prototypes tailored to your audience.",
      },
      {
        step: "02",
        title: "Component Engineering",
        description: "Building modular, type-safe React components with responsive Tailwind utility styling.",
      },
      {
        step: "03",
        title: "API & State Integration",
        description: "Connecting backend endpoints, server actions, optimistic UI updates, and real-time streaming buffers.",
      },
      {
        step: "04",
        title: "Performance & Cross-Browser Audit",
        description: "Benchmarking Lighthouse scores, responsiveness across 8 viewport sizes, and accessibility checks.",
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Vercel / AWS"],
    securityConsiderations: [
      "Strict Content Security Policy (CSP) and secure HTTP response headers",
      "Cross-Site Scripting (XSS) and CSRF protection on all user inputs",
      "Server-side validation for every form submission and query parameter",
      "Zero sensitive business secrets embedded in client bundles",
    ],
    faqs: [
      {
        question: "Is the website optimized for mobile and tablet devices?",
        answer: "Absolutely. We engineer responsive layouts tested across modern mobile viewports (360px up to 1920px+ desktop) to ensure flawless touch targets and layout fluidity.",
      },
      {
        question: "Can we integrate this with our existing backend or database?",
        answer: "Yes. Our web applications can connect to any existing REST API, GraphQL endpoint, Supabase, Firebase, PostgreSQL, or enterprise database.",
      },
    ],
  },
  {
    id: "mobile-development",
    slug: "mobile-development",
    title: "AI-Powered Mobile Applications",
    shortTitle: "Mobile Applications",
    tagline: "Native and cross-platform mobile apps with seamless AI features and cloud sync.",
    description:
      "Build powerful mobile experiences with intelligent features, seamless integrations, offline capabilities, and scalable backend systems.",
    heroHeadline: "Intelligent Mobile Experiences for iOS and Android.",
    heroSubhead:
      "We design and build high-performance mobile applications that bring AI capabilities, offline resilience, and intuitive gesture navigation to your customers' hands.",
    problemsSolved: [
      "Sluggish cross-platform apps that feel clunky compared to native software.",
      "Poor battery and memory optimization when running AI inferences on mobile devices.",
      "Complex App Store and Google Play approval rejections due to compliance oversights.",
      "Inconsistent synchronization when users move in and out of cellular connectivity.",
    ],
    capabilities: [
      "Cross-platform Flutter and React Native architectures",
      "On-device lightweight ML models for offline privacy-preserving inference",
      "Biometric authentication (Face ID / Fingerprint) integration",
      "Push notification systems with contextual user engagement logic",
      "Background sync with conflict-free offline data storage",
      "In-App Purchases (IAP) and subscription lifecycle management",
      "Seamless camera, microphone, and location hardware access",
    ],
    realWorldUseCases: [
      {
        title: "Field Technician Diagnostic Tool",
        description: "Enables field workers to photograph equipment, run on-device defect recognition, and listen to spoken instructions offline.",
      },
      {
        title: "Personalized Health Companion",
        description: "Analyzes daily nutrition photos, tracks biometric logs, and provides real-time coaching via conversational voice notes.",
      },
      {
        title: "On-the-Go Executive Dashboard",
        description: "Mobile app for founders and executives to review automated daily KPI briefings and approve high-value transactions.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Mobile UX & Flow Design",
        description: "Designing native ergonomics, thumb-friendly interaction zones, and dark/light system adaptation.",
      },
      {
        step: "02",
        title: "Application Architecture",
        description: "Setting up state management, local SQLite / realm caches, and secure credential storage.",
      },
      {
        step: "03",
        title: "AI Feature Integration",
        description: "Connecting edge models or streaming cloud API responses with smooth optimistic UI feedback.",
      },
      {
        step: "04",
        title: "Store Submission & Release",
        description: "Handling code signing, Apple TestFlight / Google Internal Testing, store metadata, and privacy declarations.",
      },
    ],
    technologies: ["React Native", "Flutter", "TypeScript", "Swift / Kotlin", "Firebase / Supabase", "Apple StoreKit"],
    securityConsiderations: [
      "Hardware-backed secure enclave storage for user authentication tokens",
      "Certificate pinning preventing man-in-the-middle network interception",
      "Data protection classes enabled for all local database files",
      "Full compliance with Apple App Store and Google Play privacy nutrition labels",
    ],
    faqs: [
      {
        question: "Do you publish the apps to the Apple App Store and Google Play Store?",
        answer: "Yes. We manage the entire build signing, provisioning, internal test distribution, and store submission process until your application is approved and live.",
      },
      {
        question: "Can the app function when the user has no internet connection?",
        answer: "Yes. We implement local SQLite/watermelondb caching and background synchronization so core features remain accessible even in offline environments.",
      },
    ],
  },
  {
    id: "enterprise-ai",
    slug: "enterprise-ai",
    title: "Enterprise AI Integration",
    shortTitle: "Enterprise AI",
    tagline: "Connecting intelligent models with existing enterprise infrastructure and workflows.",
    description:
      "Connect intelligent technology with your existing business infrastructure to improve productivity, operational visibility, and executive decision-making.",
    heroHeadline: "Bridging Legacy Enterprise Infrastructure with Frontier AI Models.",
    heroSubhead:
      "Integrate generative AI and automated decision systems into your existing SAP, Salesforce, Oracle, and proprietary architectures without compromising governance or security.",
    problemsSolved: [
      "Rigid enterprise legacy software that cannot adapt to natural language queries.",
      "Corporate security teams blocking AI adoption due to data governance and privacy fears.",
      "Information silos where corporate knowledge is scattered across decades of formats.",
      "Unpredictable cloud API costs and rate limiting on consumer-grade AI endpoints.",
    ],
    capabilities: [
      "Private VPC deployments of open-weight LLMs (Llama, Mistral) on AWS / Azure / GCP",
      "Enterprise connectors for Salesforce, SAP, Oracle, ServiceNow, and Microsoft 365",
      "Granular role-based knowledge filtering respecting existing Active Directory permissions",
      "Model governance layers with PII masking and automated output compliance filters",
      "Self-hosted semantic search clusters across millions of internal documents",
      "Cost-optimized hybrid routing between specialized small models and frontier models",
      "Real-time operational dashboards tracking model usage, drift, and latency",
    ],
    realWorldUseCases: [
      {
        title: "Global Supply Chain Optimizer",
        description: "Integrates with SAP ERP to forecast supplier delays, summarize customs paperwork, and generate alternative shipping routes.",
      },
      {
        title: "Enterprise Knowledge Brain",
        description: "Connects 10 years of Jira, Confluence, and email archives, allowing 5,000+ engineers to query institutional knowledge securely.",
      },
      {
        title: "Insurance Claim Processing Core",
        description: "Cross-checks policy terms, ingests adjuster reports, verifies fraud indicators, and pre-populates claim settlement packages.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Enterprise Architecture Review",
        description: "We review your data residency mandates, network topologies, identity providers, and compliance frameworks.",
      },
      {
        step: "02",
        title: "Secure Gateway & VPC Setup",
        description: "Configuring private AI inference gateways inside your cloud perimeter with PII redactors and audit logs.",
      },
      {
        step: "03",
        title: "Data Pipeline & Semantic Indexing",
        description: "Building automated sync connectors with existing databases, honoring user ACLs at the document level.",
      },
      {
        step: "04",
        title: "Staged Rollout & Training",
        description: "Conducting red-team security audits, user acceptance testing (UAT), and technical team knowledge handoff.",
      },
    ],
    technologies: ["vLLM / TensorRT-LLM", "AWS Bedrock / Azure OpenAI", "Kubernetes", "PostgreSQL pgvector", "Docker", "Apache Kafka"],
    securityConsiderations: [
      "Zero external data egress — models run in client-controlled private clouds",
      "Full compatibility with enterprise SSO (SAML 2.0 / Okta / Azure AD)",
      "Automated cryptographic redacting of customer PII before model ingestion",
      "Comprehensive compliance logging ready for external SOC 2 and ISO audits",
    ],
    faqs: [
      {
        question: "Can our confidential enterprise data be used to train external public models?",
        answer: "Never. We enforce zero-data-retention enterprise API contracts or deploy private, self-hosted open-weight models inside your own VPC, guaranteeing complete data sovereignty.",
      },
      {
        question: "How do you ensure employees cannot access confidential files above their pay grade?",
        answer: "Our retrieval architecture synchronizes with your Active Directory or Okta permission groups, filtering search results so users only retrieve information they have authorization to view.",
      },
    ],
  },
];

