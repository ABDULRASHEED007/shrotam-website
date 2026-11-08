"use client";

import React, { useEffect, useState } from "react";
import type { LegalSection } from "@/content/legal/types";

export function LegalTableOfContents({ sections }: { sections: LegalSection[] }) {
  const [activeId, setActiveId] = useState<string | null>(sections[0]?.id ?? null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(section.id);
        },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  return (
    <nav aria-label="Table of contents" className="rounded-2xl border border-[#DDD4C4] p-4 bg-[#FFFBF5]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#141213] mb-3">
        On this page
      </p>
      <ul className="space-y-2 text-xs">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`block py-1 border-l-2 pl-3 transition-colors ${
                activeId === section.id
                  ? "border-[#141213] text-[#141213] font-semibold"
                  : "border-transparent text-[#6B635C] hover:text-[#141213] hover:border-[#DDD4C4]"
              }`}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
