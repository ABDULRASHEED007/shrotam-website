import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Scale, ArrowRight } from "lucide-react";
import { legalDocuments } from "@/config/legal";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Legal Center",
  description:
    "SHROTAM legal documentation including Terms of Service, Privacy Policy, Acceptable Use, AI Addendum, security, and disclosure policies.",
};

export default function LegalCenterPage() {
  return (
    <div className="pt-32 pb-24 bg-[#F4EDE0] font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE3D6] border border-[#DDD4C4] text-xs font-mono font-semibold text-[#141213]">
            <Scale className="w-3.5 h-3.5" />
            <span>{siteConfig.name} LEGAL CENTER</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#141213] leading-tight">
            Legal Documentation
          </h1>
          <p className="text-lg text-[#6B635C] leading-relaxed max-w-2xl">
            Transparent policies governing our AI development, software engineering, and automation
            services. Select a document to read the full text and section navigation.
          </p>
        </div>

        <ul className="space-y-4">
          {legalDocuments.map((doc) => (
            <li key={doc.slug}>
              <Link
                href={doc.href}
                className="group block p-6 sm:p-8 rounded-2xl border border-[#DDD4C4] bg-[#FFFBF5] shadow-subtle hover:border-[#9A9088] transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h2 className="text-lg font-bold text-[#141213] group-hover:underline underline-offset-4">
                      {doc.title}
                    </h2>
                    <p className="text-sm text-[#6B635C] leading-relaxed">{doc.description}</p>
                    <p className="text-xs font-mono text-[#6B635C]">
                      Last updated: {doc.lastUpdated}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#9A9088] group-hover:text-[#141213] flex-shrink-0 mt-1 transition-colors" />
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-xs text-[#6B635C] leading-relaxed">
          Documents require review by qualified legal counsel before publication. Entity registration
          details and official contact emails are configured centrally and must be confirmed for your
          organization.
        </p>
      </div>
    </div>
  );
}
