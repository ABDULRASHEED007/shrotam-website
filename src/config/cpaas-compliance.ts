/**
 * CPaaS / communications-provider compliance for SHROTAM voice agents.
 *
 * When a voice agent uses Plivo, Twilio, Exotel, or any other CPaaS, that
 * provider's Terms of Service, Acceptable Use Policy, Privacy Policy, and
 * (where published) AI Services Addendum apply to traffic that runs on their
 * network. SHROTAM agents must be configured so Client campaigns stay inside
 * those rules and applicable law.
 *
 * This module is the product checklist. Wire each requirement into the agent
 * runtime before going live on a provider.
 */

export type CpaasProviderId = "plivo" | "twilio" | "exotel" | "generic";

export interface CpaasProviderProfile {
  id: CpaasProviderId;
  displayName: string;
  /** Official legal URLs — verify before publication; providers update them. */
  termsUrl: string;
  aupUrl?: string;
  privacyUrl: string;
  aiAddendumUrl?: string;
  securityUrl?: string;
}

/** Known provider legal entry points. Prefer Client-selected account docs when they differ. */
export const cpaasProviders: Record<CpaasProviderId, CpaasProviderProfile> = {
  plivo: {
    id: "plivo",
    displayName: "Plivo",
    termsUrl: "https://www.plivo.com/legal/tos/",
    privacyUrl: "https://www.plivo.com/legal/privacy/",
    aiAddendumUrl: "https://www.plivo.com/legal/ai-addendum/",
    securityUrl: "https://www.plivo.com/security/",
  },
  twilio: {
    id: "twilio",
    displayName: "Twilio",
    termsUrl: "https://www.twilio.com/legal/tos",
    aupUrl: "https://www.twilio.com/legal/aup",
    privacyUrl: "https://www.twilio.com/legal/privacy",
  },
  exotel: {
    id: "exotel",
    displayName: "Exotel",
    termsUrl: "https://exotel.com/terms-of-service/",
    privacyUrl: "https://exotel.com/privacy-policy/",
  },
  generic: {
    id: "generic",
    displayName: "Communications provider",
    termsUrl: "[CONFIGURE: provider Terms of Service URL]",
    aupUrl: "[CONFIGURE: provider Acceptable Use Policy URL]",
    privacyUrl: "[CONFIGURE: provider Privacy Policy URL]",
    aiAddendumUrl: "[CONFIGURE: provider AI Addendum URL if any]",
  },
};

export type ComplianceControlId =
  | "provider-terms-acknowledged"
  | "ai-disclosure"
  | "recording-disclosure"
  | "outbound-consent"
  | "dnc-and-opt-out"
  | "quiet-hours"
  | "sensitive-data-gate"
  | "human-handoff"
  | "output-validation"
  | "retention-configured"
  | "audit-logging"
  | "tenant-isolation";

export interface VoiceAgentComplianceControl {
  id: ComplianceControlId;
  title: string;
  /** What the voice-agent product must do at runtime or in config. */
  productRequirement: string;
  /** Who is accountable for the business decision. */
  accountable: "shrotam" | "client" | "shared";
  /** Required before production traffic on a CPaaS. */
  requiredForProduction: boolean;
}

/**
 * Controls every SHROTAM voice agent must support so usage stays compatible
 * with typical CPaaS ToS / AUP / AI addenda (including Plivo-style rules).
 */
export const voiceAgentComplianceControls: VoiceAgentComplianceControl[] = [
  {
    id: "provider-terms-acknowledged",
    title: "Provider terms acknowledgement",
    productRequirement:
      "Store which CPaaS account powers the workspace and record that the Client accepted that provider's current ToS, AUP, privacy policy, and AI addendum (if any) before enabling live dialing.",
    accountable: "shared",
    requiredForProduction: true,
  },
  {
    id: "ai-disclosure",
    title: "AI interaction disclosure",
    productRequirement:
      "Play or display a clear notice that the caller is interacting with an AI agent when required by law, the Project Agreement, or the communications provider's AI terms.",
    accountable: "shared",
    requiredForProduction: true,
  },
  {
    id: "recording-disclosure",
    title: "Recording and monitoring disclosure",
    productRequirement:
      "When recording or transcription is enabled, play the disclosure configured for the jurisdiction and store that it was played on the call record.",
    accountable: "shared",
    requiredForProduction: true,
  },
  {
    id: "outbound-consent",
    title: "Outbound consent gate",
    productRequirement:
      "Block outbound campaigns unless a consent basis (or equivalent lawful basis) is recorded per destination number or list segment, as required by applicable law and provider AUP.",
    accountable: "client",
    requiredForProduction: true,
  },
  {
    id: "dnc-and-opt-out",
    title: "Do-not-call and opt-out",
    productRequirement:
      "Suppress numbers on DNC / opt-out lists before dial or SMS, honor in-call opt-out phrases, and write suppressions back to the Client list store.",
    accountable: "shared",
    requiredForProduction: true,
  },
  {
    id: "quiet-hours",
    title: "Calling windows / quiet hours",
    productRequirement:
      "Enforce local calling windows and retry caps configured per campaign; never dial outside the approved window.",
    accountable: "shared",
    requiredForProduction: true,
  },
  {
    id: "sensitive-data-gate",
    title: "Sensitive data gate",
    productRequirement:
      "Refuse or redact categories marked prohibited (for example unprotected PHI or payment card data) unless a written agreement and provider-approved configuration allow them.",
    accountable: "shared",
    requiredForProduction: true,
  },
  {
    id: "human-handoff",
    title: "Human handoff",
    productRequirement:
      "Provide an always-available path to a human for request, low confidence, sensitive intent, or provider-mandated escalation cases, with transcript and context attached.",
    accountable: "shared",
    requiredForProduction: true,
  },
  {
    id: "output-validation",
    title: "AI output validation",
    productRequirement:
      "Do not treat model output as ground truth for irreversible actions; require tool confirmation or human approval for high-impact steps defined in the agent policy.",
    accountable: "shared",
    requiredForProduction: true,
  },
  {
    id: "retention-configured",
    title: "Recording retention",
    productRequirement:
      "Apply the Client-configured retention window for audio and transcripts, and support deletion requests within that design.",
    accountable: "shared",
    requiredForProduction: true,
  },
  {
    id: "audit-logging",
    title: "Audit logging",
    productRequirement:
      "Log disclosures played, consent checks, tool calls, dispositions, handoffs, and provider call SIDs for operational and compliance review.",
    accountable: "shrotam",
    requiredForProduction: true,
  },
  {
    id: "tenant-isolation",
    title: "Workspace isolation",
    productRequirement:
      "Keep agent config, knowledge, recordings, and credentials scoped to a single Client workspace with no cross-tenant access.",
    accountable: "shrotam",
    requiredForProduction: true,
  },
];

export function productionComplianceChecklist(
  providerId: CpaasProviderId = "generic"
): {
  provider: CpaasProviderProfile;
  controls: VoiceAgentComplianceControl[];
} {
  return {
    provider: cpaasProviders[providerId],
    controls: voiceAgentComplianceControls.filter((c) => c.requiredForProduction),
  };
}
