import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { AlertCircle, ArrowLeft, FileText } from "lucide-react";
import { legalDocuments, type LegalDocumentMeta } from "@/config/legal";
import { siteConfig } from "@/config/site";
import type { LegalSection } from "@/content/legal/types";
import { LegalSectionBody } from "./LegalSectionBody";
import { LegalTableOfContents } from "./LegalTableOfContents";

interface LegalDocumentLayoutProps {
  document: LegalDocumentMeta;
  sections: LegalSection[];
  children?: React.ReactNode;
}

export function LegalDocumentLayout({
  document,
  sections,
  children,
}: LegalDocumentLayoutProps) {
  const related = legalDocuments.filter((d) => d.slug !== document.slug);

  return (
    <div className="pt-32 pb-24 bg-[#F4EDE0] font-sans text-[#2A2426]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/legal"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#6B635C] hover:text-[#141213] mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Legal Center
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <aside className="lg:col-span-3 lg:sticky lg:top-28 lg:self-start order-2 lg:order-1">
            <LegalTableOfContents sections={sections} />
            <div className="mt-8 p-4 rounded-2xl border border-[#DDD4C4] bg-[#FFFBF5] text-xs text-[#6B635C] space-y-2">
              <p className="font-bold text-[#141213]">Related documents</p>
              <ul className="space-y-1.5">
                {related.slice(0, 5).map((doc) => (
                  <li key={doc.slug}>
                    <Link href={doc.href} className="hover:text-[#141213] underline underline-offset-2">
                      {doc.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <article className="lg:col-span-9 order-1 lg:order-2">
            <header className="mb-10 space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE3D6] border border-[#DDD4C4] text-xs font-mono font-semibold text-[#141213]">
                <FileText className="w-3.5 h-3.5 text-[#141213]" />
                <span>{siteConfig.name} LEGAL</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#141213] leading-tight">
                {document.title}
              </h1>
              <p className="text-sm text-[#6B635C] leading-relaxed">{document.description}</p>
              <p className="text-xs font-mono text-[#6B635C]">
                Last updated: {document.lastUpdated}
              </p>
            </header>

            <div className="mb-10 p-5 rounded-2xl bg-[#FFFBF5] border border-[#DDD4C4] flex items-start gap-3.5">
              <AlertCircle className="w-5 h-5 text-[#141213] flex-shrink-0 mt-0.5" />
              <p className="text-xs text-[#6B635C] leading-relaxed">
                <strong className="text-[#141213] font-semibold">Legal review required:</strong>{" "}
                These documents are provided for transparency and operational clarity. They do not
                constitute legal advice. Engagements are governed by executed project agreements.
                Have qualified counsel review before publication. SHROTAM is not affiliated with
                Plivo or any third-party platform referenced in client integrations.
              </p>
            </div>

            {children}

            <div className="space-y-10 mt-6">
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 p-6 sm:p-8 rounded-2xl border border-[#DDD4C4] bg-[#FFFBF5] shadow-subtle"
                >
                  <p className="text-xs font-mono font-bold text-[#9A9088] mb-2">
                    SECTION {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="text-lg sm:text-xl font-bold text-[#141213] mb-4">
                    {section.title}
                  </h2>
                  <LegalSectionBody section={section} />
                </section>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export function buildLegalMetadata(document: LegalDocumentMeta): Metadata {
  return {
    title: document.title,
    description: document.description,
    openGraph: {
      title: `${document.title} | ${siteConfig.name}`,
      description: document.description,
      url: `${siteConfig.url}${document.href}`,
      siteName: siteConfig.name,
    },
  };
}
