import React from "react";
import type { LegalSection } from "@/content/legal/types";

export function LegalSectionBody({ section }: { section: LegalSection }) {
  return (
    <div className="space-y-4 text-sm text-[#4A4345] leading-relaxed">
      {section.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {section.bullets && section.bullets.length > 0 && (
        <ul className="list-disc pl-5 space-y-2 text-sm text-[#4A4345]">
          {section.bullets.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
