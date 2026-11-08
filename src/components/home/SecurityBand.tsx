"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Icon, type IconName } from "@/components/ui/Icon";

const rows: { icon: IconName; title: string; body: string }[] = [
  { icon: "lock", title: "Encrypted in transit and at rest", body: "TLS 1.2 or higher for traffic. AES-256 for stored recordings, transcripts and configuration." },
  { icon: "stack", title: "Tenant isolation by design", body: "Every client workspace has its own data boundary, credentials and access policy." },
  { icon: "eye", title: "AI that stays in its lane", body: "Agents answer from approved sources, call only approved tools, and escalate when unsure." },
  { icon: "clock", title: "Retention you control", body: "Choose how long recordings and transcripts are kept, and request deletion on demand." },
];

export function SecurityBand() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".sb-row").forEach((row) => {
          const line = row.querySelector(".sb-line");
          const content = row.querySelectorAll(".sb-in");
          gsap.from(line, {
            scaleX: 0,
            transformOrigin: "left center",
            ease: "none",
            scrollTrigger: { trigger: row, start: "top 90%", end: "top 60%", scrub: true },
          });
          gsap.from(content, {
            y: 40,
            opacity: 0,
            stagger: 0.08,
            ease: "none",
            scrollTrigger: { trigger: row, start: "top 90%", end: "top 55%", scrub: true },
          });
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="bg-[#141213] py-28 text-[#F4EDE0] lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B5B]">Trust</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Built for calls you can&apos;t afford to get wrong.
            </h2>
            <Link
              href="/security"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B5B]"
            >
              Read the security overview
              <Icon name="arrow-right" size={16} weight="bold" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="lg:col-span-7">
            {rows.map((r) => (
              <div key={r.title} className="sb-row relative py-8">
                <div className="sb-line absolute inset-x-0 top-0 h-px bg-white/20" />
                <div className="flex items-start gap-5">
                  <span className="sb-in mt-1 text-[#FF6B5B]">
                    <Icon name={r.icon} size={30} />
                  </span>
                  <div>
                    <h3 className="sb-in font-display text-2xl font-semibold tracking-tight">{r.title}</h3>
                    <p className="sb-in mt-2 max-w-lg text-[#F4EDE0]/65">{r.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
