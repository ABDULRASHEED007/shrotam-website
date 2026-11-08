import type { IconName } from "@/components/ui/Icon";

export interface CallLine {
  who: "agent" | "caller" | "system";
  text: string;
}

export interface UseCaseStep {
  icon: IconName;
  label: string;
  title: string;
  detail: string;
  tool: string;
  lines: CallLine[];
}

export interface UseCase {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  problem: string;
  solution: string;
  outcomes: string[];
  icon: IconName;
  accent: "coral" | "cream" | "ink" | "sand";
  steps: UseCaseStep[];
  integrations: string[];
  guardrails: string[];
}

export const useCases: UseCase[] = [
  {
    slug: "inbound-support",
    title: "Inbound customer support",
    shortTitle: "Inbound support",
    tagline: "Every call answered. Routine requests closed.",
    summary:
      "Answer every inbound call instantly, resolve the routine ones from live data, and pass the rest to your team with full context.",
    problem:
      "Queues grow at peak hours, callers repeat themselves at every transfer, and agents spend most of the day on questions that have a known answer.",
    solution:
      "A voice agent grounded in your knowledge base and connected to your order, billing and ticketing systems. It resolves what it safely can and hands off warm, with a transcript and detected intent attached.",
    outcomes: [
      "No hold queue for routine requests",
      "Warm transfers that carry context",
      "Every call transcribed, tagged and searchable",
    ],
    icon: "headset",
    accent: "coral",
    steps: [
      {
        icon: "phone-incoming",
        label: "Answer",
        title: "Pick up and listen",
        detail:
          "The agent answers immediately, plays any required disclosure, and asks a single open question instead of a menu.",
        tool: "call.answer(disclosure=true)",
        lines: [
          { who: "agent", text: "Thanks for calling. What can I help you with today?" },
          { who: "caller", text: "Where's my order? It was meant to arrive Tuesday." },
        ],
      },
      {
        icon: "user-check",
        label: "Verify",
        title: "Confirm who is calling",
        detail:
          "Caller number is matched and, when the request touches account data, a lightweight check runs before anything is shared.",
        tool: "identity.verify(phone, otp)",
        lines: [
          { who: "system", text: "Number matched. Account found." },
          { who: "agent", text: "To confirm it's you, could you read the code I just texted?" },
        ],
      },
      {
        icon: "database",
        label: "Retrieve",
        title: "Pull live context",
        detail:
          "Order, shipment and policy data are read from your systems during the call, not from a stale copy.",
        tool: "orders.get(id) -> shipments.track(id)",
        lines: [
          { who: "system", text: "Carrier scan: out for delivery." },
          { who: "agent", text: "It's out for delivery and should reach you by 6 pm today." },
        ],
      },
      {
        icon: "headset",
        label: "Resolve",
        title: "Close it, or hand off cleanly",
        detail:
          "Routine requests are completed and logged. Anything sensitive or unresolved is transferred with the transcript, intent and order attached.",
        tool: "handoff.warm(queue='billing', context)",
        lines: [
          { who: "caller", text: "Can I talk to someone about a refund?" },
          { who: "agent", text: "Of course. I'm passing you over with the details, so you won't need to repeat anything." },
        ],
      },
    ],
    integrations: ["Zendesk", "Freshdesk", "Salesforce", "HubSpot", "Shopify", "Custom REST APIs"],
    guardrails: [
      "Answers only from approved knowledge sources",
      "Identity check before account details are shared",
      "Configurable escalation on sentiment, intent or repeated failure",
      "Recording disclosure played where required",
    ],
  },
  {
    slug: "outbound-sales",
    title: "Outbound sales and lead qualification",
    shortTitle: "Outbound sales",
    tagline: "Speed to lead, without the dialer fatigue.",
    summary:
      "Call new leads within minutes, qualify them in a natural conversation, and book the meeting straight into a rep's calendar.",
    problem:
      "Leads go cold while they wait for a callback, and reps burn their day on dials that never connect.",
    solution:
      "An outbound agent that respects calling windows and consent, holds a real conversation about need and timing, and only passes along qualified prospects with notes.",
    outcomes: [
      "Leads contacted while intent is fresh",
      "Reps meet only qualified prospects",
      "Notes and dispositions written to the CRM automatically",
    ],
    icon: "phone-outgoing",
    accent: "ink",
    steps: [
      {
        icon: "phone-outgoing",
        label: "Dial",
        title: "Call inside the rules",
        detail:
          "Campaigns honour calling windows, retry limits and do-not-call lists before every dial.",
        tool: "campaign.next_lead(window='10:00-18:00')",
        lines: [
          { who: "system", text: "Consent confirmed. Within local calling hours." },
          { who: "agent", text: "Hi Priya, this is an assistant calling for Alder Health about your enquiry. Is now a good time?" },
        ],
      },
      {
        icon: "waveform",
        label: "Qualify",
        title: "Have a real conversation",
        detail:
          "The agent asks about need, timeline and ownership in plain language and adapts when the answer isn't what it expected.",
        tool: "lead.score(need, timeline, authority)",
        lines: [
          { who: "caller", text: "We're looking to switch before the end of the quarter." },
          { who: "agent", text: "That's helpful. Who else would be involved in that decision?" },
        ],
      },
      {
        icon: "calendar",
        label: "Book",
        title: "Offer real slots",
        detail:
          "Available times are read from the rep's calendar so the meeting is booked before the call ends.",
        tool: "calendar.book(rep, slot)",
        lines: [
          { who: "agent", text: "I have Thursday at 11 or Friday at 3. Which suits you?" },
          { who: "caller", text: "Thursday at 11 works." },
        ],
      },
      {
        icon: "database",
        label: "Sync",
        title: "Update the CRM",
        detail:
          "Outcome, notes, objections and next step are written back so reps start prepared.",
        tool: "crm.update(lead, disposition, notes)",
        lines: [
          { who: "system", text: "Disposition: meeting booked. Notes attached." },
        ],
      },
    ],
    integrations: ["Salesforce", "HubSpot", "Zoho CRM", "Google Calendar", "Outlook", "Custom REST APIs"],
    guardrails: [
      "Consent and do-not-call checks before every dial",
      "Call windows enforced per region",
      "Clear AI disclosure and easy opt-out",
      "Human takeover on request at any point",
    ],
  },
  {
    slug: "collections",
    title: "Payment reminders and collections",
    shortTitle: "Collections",
    tagline: "Firm on the facts. Courteous on the phone.",
    summary:
      "Remind customers about due payments, explain options calmly, and capture a payment promise or route to your team.",
    problem:
      "Manual follow-up is slow and inconsistent, and tone varies from one agent to the next.",
    solution:
      "A calm, consistent agent that works from approved scripts, offers the plans you define, records promises to pay, and never goes beyond the compliance rules you set.",
    outcomes: [
      "Consistent, compliant tone on every call",
      "Promises to pay captured with dates",
      "Hardship and dispute cases routed to people",
    ],
    icon: "receipt",
    accent: "sand",
    steps: [
      {
        icon: "receipt",
        label: "Remind",
        title: "Open with the facts",
        detail:
          "The agent states the balance and due date clearly and neutrally after confirming it's speaking to the right person.",
        tool: "account.balance(id)",
        lines: [
          { who: "agent", text: "I'm calling about a payment of 4,200 rupees that was due on the 5th." },
          { who: "caller", text: "Right, I got delayed this month." },
        ],
      },
      {
        icon: "fingerprint",
        label: "Verify",
        title: "Check before disclosing",
        detail:
          "Details are shared only once identity is confirmed, so account information stays with the account holder.",
        tool: "identity.verify(dob_last4)",
        lines: [
          { who: "system", text: "Verification passed." },
        ],
      },
      {
        icon: "card",
        label: "Options",
        title: "Offer approved choices",
        detail:
          "Pay now by link, split across dates, or request a callback. Only options you've configured are offered.",
        tool: "plans.eligible(account)",
        lines: [
          { who: "agent", text: "I can send a payment link now, or split it across two dates. Which would help?" },
        ],
      },
      {
        icon: "handshake",
        label: "Commit",
        title: "Record the promise",
        detail:
          "A promise-to-pay date is logged and a confirmation sent. Disputes and hardship are transferred to a person.",
        tool: "promise.create(date, amount) / handoff.warm()",
        lines: [
          { who: "caller", text: "I can pay half on the 12th and the rest on the 20th." },
          { who: "agent", text: "Noted. I'll text you a summary and a reminder before each date." },
        ],
      },
    ],
    integrations: ["Billing systems", "Payment links", "SMS", "WhatsApp", "CRM", "Custom REST APIs"],
    guardrails: [
      "Scripts reviewed against your applicable collection rules",
      "No threats, no pressure, no third-party disclosure",
      "Dispute and hardship phrases trigger human handoff",
      "Calling hours and contact-frequency caps",
    ],
  },
  {
    slug: "loyalty-support",
    title: "Loyalty and membership support",
    shortTitle: "Loyalty support",
    tagline: "Members get answers, not menus.",
    summary:
      "Handle balance checks, reward redemption, plan changes and account questions by voice, around the clock.",
    problem:
      "Member questions are simple but constant, and tiered programmes make the rules hard to explain through an IVR.",
    solution:
      "A voice agent that knows your programme rules, reads each member's real balance and tier, and completes common actions within your limits.",
    outcomes: [
      "Instant balance and tier answers",
      "Self-serve redemption by voice",
      "Human help reserved for exceptions",
    ],
    icon: "gift",
    accent: "cream",
    steps: [
      {
        icon: "phone-incoming",
        label: "Greet",
        title: "Recognise the member",
        detail:
          "The agent greets the member by name when the number is recognised and gets to the point.",
        tool: "member.lookup(phone)",
        lines: [
          { who: "agent", text: "Hello Arjun, how can I help with your membership today?" },
          { who: "caller", text: "How many points do I have, and can I use them for a flight?" },
        ],
      },
      {
        icon: "fingerprint",
        label: "Verify",
        title: "Protect the account",
        detail:
          "Redemptions and changes require a stronger check than simple balance questions.",
        tool: "identity.verify(level='redeem')",
        lines: [
          { who: "system", text: "Step-up verification passed." },
        ],
      },
      {
        icon: "gift",
        label: "Answer",
        title: "Apply programme rules",
        detail:
          "Balance, tier benefits and redemption options are read live and explained in plain language.",
        tool: "points.balance(member) + rules.redeem()",
        lines: [
          { who: "agent", text: "You have 18,400 points. That covers a domestic flight with 2,000 to spare." },
        ],
      },
      {
        icon: "headset",
        label: "Escalate",
        title: "Pass exceptions on",
        detail:
          "Disputed points, fraud concerns and special requests move to a specialist with the conversation attached.",
        tool: "handoff.warm(queue='membership')",
        lines: [
          { who: "caller", text: "A purchase from March never earned points." },
          { who: "agent", text: "I'll connect you to a specialist who can review that and share what we've covered." },
        ],
      },
    ],
    integrations: ["Loyalty platforms", "CRM", "E-commerce", "Payments", "SMS", "Custom REST APIs"],
    guardrails: [
      "Step-up verification for redemptions",
      "Hard limits on what the agent can change",
      "Fraud signals routed to a person",
      "Full audit trail of every change",
    ],
  },
  {
    slug: "appointment-booking",
    title: "Appointment booking and reminders",
    shortTitle: "Appointments",
    tagline: "Fewer missed slots. Fuller calendars.",
    summary:
      "Book, move and cancel appointments by phone and reduce no-shows with confirmation and reminder calls.",
    problem:
      "Front desks juggle phones and walk-ins, and no-shows leave expensive gaps in the schedule.",
    solution:
      "An agent that reads live availability, handles rescheduling in natural language, and confirms every booking by call or message.",
    outcomes: [
      "Bookings taken after hours",
      "Rescheduling without a human",
      "Fewer no-shows from timely reminders",
    ],
    icon: "calendar",
    accent: "coral",
    steps: [
      {
        icon: "phone-incoming",
        label: "Request",
        title: "Understand the need",
        detail:
          "The agent captures service, preferred time and any constraints without making the caller step through a menu.",
        tool: "intent.detect('book')",
        lines: [
          { who: "caller", text: "I need to see the dentist, ideally after work next week." },
        ],
      },
      {
        icon: "calendar",
        label: "Availability",
        title: "Read the live calendar",
        detail:
          "Open slots are pulled in real time, filtered by provider, service type and duration.",
        tool: "slots.search(service, range)",
        lines: [
          { who: "agent", text: "I have Tuesday at 5:30 or Wednesday at 6. Which is better?" },
        ],
      },
      {
        icon: "chat",
        label: "Confirm",
        title: "Book and confirm",
        detail:
          "The slot is held, written to the calendar, and confirmed by SMS or WhatsApp before the call ends.",
        tool: "calendar.book() + message.send()",
        lines: [
          { who: "caller", text: "Tuesday works." },
          { who: "agent", text: "Booked for Tuesday at 5:30. I've sent the details to your phone." },
        ],
      },
      {
        icon: "clock",
        label: "Remind",
        title: "Reduce no-shows",
        detail:
          "A reminder call goes out ahead of the visit with one-step options to confirm, move or cancel.",
        tool: "reminder.schedule(-24h)",
        lines: [
          { who: "agent", text: "Reminder for tomorrow at 5:30. Say confirm, reschedule or cancel." },
        ],
      },
    ],
    integrations: ["Google Calendar", "Outlook", "Practice management", "SMS", "WhatsApp", "Custom REST APIs"],
    guardrails: [
      "Double-booking prevented at the calendar layer",
      "Health and personal data minimised on the call",
      "Cancellation windows applied per your policy",
      "Reminders only to numbers with consent",
    ],
  },
  {
    slug: "ivr-replacement",
    title: "Intelligent IVR replacement",
    shortTitle: "IVR replacement",
    tagline: "Say what you need. Skip the menu.",
    summary:
      "Replace press-1-for-sales menus with a voice front door that understands intent and routes or resolves right away.",
    problem:
      "Menu trees frustrate callers, misroute calls, and hide the data you need about why people actually phone.",
    solution:
      "A conversational front door that classifies intent from natural speech, answers simple questions itself, and routes the rest to the right queue with the reason attached.",
    outcomes: [
      "Fewer misrouted calls",
      "Shorter time to the right person",
      "Clear analytics on why customers call",
    ],
    icon: "tree",
    accent: "ink",
    steps: [
      {
        icon: "microphone",
        label: "Listen",
        title: "Take a natural sentence",
        detail:
          "Callers say what they need in their own words, in the language they prefer.",
        tool: "stt.stream(lang='auto')",
        lines: [
          { who: "agent", text: "Welcome. Tell me what you're calling about." },
          { who: "caller", text: "I think I've been charged twice this month." },
        ],
      },
      {
        icon: "tree",
        label: "Classify",
        title: "Detect intent and urgency",
        detail:
          "Intent, sentiment and priority are read from the sentence, not inferred from a keypad press.",
        tool: "intent.classify() -> billing.duplicate_charge",
        lines: [
          { who: "system", text: "Intent: billing dispute. Priority: high." },
        ],
      },
      {
        icon: "flow",
        label: "Route",
        title: "Answer or send it on",
        detail:
          "Simple questions are answered immediately. Everything else goes to the correct queue with the reason attached.",
        tool: "route.queue('billing-disputes', context)",
        lines: [
          { who: "agent", text: "Let me connect you with our billing team. I've shared what you told me." },
        ],
      },
      {
        icon: "chart",
        label: "Measure",
        title: "Learn from every call",
        detail:
          "Intent trends, containment and transfer reasons feed a dashboard that shows where to improve.",
        tool: "analytics.record(call)",
        lines: [
          { who: "system", text: "Call logged. Intent trend updated." },
        ],
      },
    ],
    integrations: ["Contact-centre platforms", "SIP trunks", "CRM", "Ticketing", "Custom REST APIs"],
    guardrails: [
      "DTMF fallback always available",
      "Low-confidence results route to a person",
      "Language and accessibility options",
      "Routing rules versioned and auditable",
    ],
  },
];

export function getUseCase(slug: string): UseCase | undefined {
  return useCases.find((u) => u.slug === slug);
}
