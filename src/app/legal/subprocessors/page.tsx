import React from "react";
import Link from "next/link";
import { getLegalDocument, subprocessorRegister } from "@/config/legal";
import { buildLegalMetadata, LegalDocumentLayout } from "@/components/legal/LegalDocumentLayout";
import type { LegalSection } from "@/content/legal/types";

const document = getLegalDocument("subprocessors")!;

export const metadata = buildLegalMetadata(document);

const subprocessorsSections: LegalSection[] = [
  {
    id: "what-is-subprocessor",
    title: "What Is a Subprocessor?",
    paragraphs: [
      "A subprocessor is a third-party service provider engaged by SHROTAM to process personal or business information on our behalf when delivering a project—for example hosting, AI inference, communications, or payments.",
      "Clients may also contract directly with providers; those relationships are governed by the Client's agreements with those vendors.",
    ],
  },
  {
    id: "why-used",
    title: "Why External Providers Are Used",
    paragraphs: [
      "Custom AI and SaaS solutions rely on specialized infrastructure and APIs. Using established providers helps deliver scalable, maintainable systems while meeting project requirements.",
    ],
  },
  {
    id: "categories",
    title: "Categories of Processing",
    paragraphs: ["Typical categories include:"],
    bullets: [
      "Cloud hosting, storage, and networking.",
      "AI model, speech, and embedding APIs.",
      "Email, SMS, voice telephony, and messaging gateways.",
      "Payment processing and invoicing tools.",
      "Collaboration, monitoring, and error reporting tools used during development.",
    ],
  },
  {
    id: "protection",
    title: "Data Protection Expectations",
    paragraphs: [
      "We select providers appropriate to the engagement and configure access and data flows according to the Project Agreement.",
      "We require confidentiality and security commitments from personnel and vendors under contract where applicable. Specific subprocessors are disclosed to Clients when they process Client data on our behalf.",
    ],
  },
  {
    id: "cpaas-providers",
    title: "Communications Providers (CPaaS)",
    paragraphs: [
      "When AI voice agents place or receive calls or messages, traffic may be processed by a Communications Provider such as Plivo or another CPaaS selected for the engagement.",
      "Use of that provider is also governed by the provider's own Terms of Service, Acceptable Use Policy, Privacy Policy, and AI Services Addendum (where published). SHROTAM's Terms include flow-down obligations so Client campaigns must stay within those rules.",
      "Naming a vendor as an example does not create an affiliation. Replace placeholder register entries with the verified provider name, region, and role before relying on this page for compliance disclosures.",
    ],
  },
  {
    id: "updates",
    title: "Updates to This Register",
    paragraphs: [
      "This register will be updated when verified subprocessors are engaged. Placeholder entries below must be replaced with confirmed provider names, regions, and roles before relying on this page for compliance disclosures.",
    ],
  },
];

export default function SubprocessorsPage() {
  return (
    <LegalDocumentLayout document={document} sections={subprocessorsSections}>
      <div className="mb-10 overflow-x-auto rounded-2xl border border-[#DDD4C4]">
        <table className="min-w-full text-left text-xs">
          <thead className="bg-[#FFFBF5] border-b border-[#DDD4C4]">
            <tr>
              <th className="px-4 py-3 font-bold text-[#141213]">Provider</th>
              <th className="px-4 py-3 font-bold text-[#141213]">Category</th>
              <th className="px-4 py-3 font-bold text-[#141213]">Role</th>
              <th className="px-4 py-3 font-bold text-[#141213]">Data processed</th>
              <th className="px-4 py-3 font-bold text-[#141213]">Location / notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DDD4C4]">
            {subprocessorRegister.map((row) => (
              <tr key={row.id} className={row.verified ? "bg-[#FFFBF5]" : "bg-[#FFFBF5]/80"}>
                <td className="px-4 py-3 text-[#2A2426] font-medium">
                  {row.name}
                  {!row.verified && (
                    <span className="block text-[10px] font-mono text-[#6B635C] mt-1">
                      Unverified placeholder
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-[#6B635C]">{row.category}</td>
                <td className="px-4 py-3 text-[#6B635C]">{row.role}</td>
                <td className="px-4 py-3 text-[#6B635C]">{row.dataProcessed}</td>
                <td className="px-4 py-3 text-[#6B635C]">{row.locationNote}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link
        href="/legal/privacy-policy"
        className="text-sm font-semibold text-[#141213] underline underline-offset-4"
      >
        Read our Privacy Policy
      </Link>
    </LegalDocumentLayout>
  );
}
