import type { LegalSection } from "./types";

export const responsibleDisclosureSections: LegalSection[] = [
  {
    id: "purpose",
    title: "Purpose",
    paragraphs: [
      "SHROTAM welcomes responsible reports of security vulnerabilities in website properties and systems we operate for ourselves (not Client production environments unless explicitly authorized in writing).",
      "This policy does not constitute a bug bounty program and does not promise monetary rewards.",
    ],
  },
  {
    id: "how-to-report",
    title: "How to Report",
    paragraphs: [
      "Send reports to the configured security contact email listed in our Legal Center configuration once confirmed.",
      "Include a description of the issue, steps to reproduce, affected URLs or components, and your contact information for follow-up.",
    ],
  },
  {
    id: "safe-harbor",
    title: "Responsible Testing",
    paragraphs: [
      "Test only against systems you are authorized to assess. Do not access, modify, or exfiltrate data belonging to other users or clients.",
      "Provide us reasonable time to investigate and remediate before public disclosure. We aim to acknowledge reports within a commercially reasonable period.",
    ],
  },
  {
    id: "prohibited",
    title: "Prohibited Testing Activities",
    paragraphs: ["The following are not permitted:"],
    bullets: [
      "Denial-of-service attacks or load testing without written approval.",
      "Social engineering of SHROTAM or Client staff.",
      "Physical intrusion or testing third-party providers without authorization.",
      "Exploiting vulnerabilities beyond minimal proof necessary to demonstrate impact.",
    ],
  },
  {
    id: "client-systems",
    title: "Client Systems",
    paragraphs: [
      "Vulnerabilities in Client-operated production environments should be reported to the Client unless we have a written authorization to receive reports on their behalf.",
    ],
  },
  {
    id: "review",
    title: "Our Review Process",
    paragraphs: [
      "We will triage reports, validate findings, and coordinate fixes where appropriate. We may request additional information and will not retaliate against good-faith research complying with this policy.",
    ],
  },
];
