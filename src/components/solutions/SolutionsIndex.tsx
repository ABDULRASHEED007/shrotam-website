"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Icon, IconTile } from "@/components/ui/Icon";
import { useCases } from "@/config/use-cases";

const marquee = "Inbound  ·  Outbound  ·  Collections  ·  Loyalty  ·  Appointments  ·  IVR  ·  ";

export function SolutionsIndex() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".si-hero > *", { y: 40, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out" });

        gsap.to(".si-marquee", {
          xPercent: -35,
          ease: "none",
          scrollTrigger: { trigger: ".si-marquee-wrap", start: "top bottom", end: "bottom top", scrub: true },
        });

        gsap.utils.toArray<HTMLElement>(".si-row").forEach((row) => {
          gsap.from(row, {
            y: 70,
            opacity: 0,
            ease: "none",
            scrollTrigger: { trigger: row, start: "top 95%", end: "top 65%", scrub: true },
          });
          gsap.fromTo(
            row.querySelector(".si-icon"),
            { yPercent: 40 },
            {
              yPercent: -40,
              ease: "none",
              scrollTrigger: { trigger: row, start: "top bottom", end: "bottom top", scrub: true },
            }
          );
        });
      });
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <section className="relative overflow-hidden bg-[#F4EDE0] pb-8 pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="si-hero max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B5B]">Solutions</p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1] tracking-[-0.035em] text-[#141213] sm:text-7xl lg:text-8xl">
              Six jobs the phone can do by itself.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-[#6B635C]">
              Pick the call you want to automate. Each solution ships with its own conversation
              flow, guardrails, integrations and handoff rules.
            </p>
          </div>
        </div>
        <div className="si-marquee-wrap mt-16 overflow-hidden border-y border-[#141213]/15 py-5">
          <div className="si-marquee flex w-max gap-0 whitespace-nowrap font-display text-5xl font-semibold uppercase tracking-tight text-transparent [-webkit-text-stroke:1.5px_#141213] sm:text-7xl">
            {[0, 1, 2].map((i) => (
              <span key={i}>{marquee}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4EDE0] pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {useCases.map((uc, i) => (
            <Link
              key={uc.slug}
              href={`/solutions/${uc.slug}`}
              className="si-row group relative grid items-center gap-6 overflow-hidden border-b border-[#141213]/15 py-10 md:grid-cols-12 md:gap-8 md:py-14"
            >
              <span className="absolute inset-x-[-100vw] inset-y-0 -z-0 origin-bottom scale-y-0 bg-[#FF6B5B] transition-transform duration-500 ease-out group-hover:scale-y-100" />

              <span className="relative font-mono text-sm text-[#6B635C] transition-colors group-hover:text-[#141213] md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative md:col-span-6">
                <h2 className="font-display text-3xl font-semibold leading-[1.05] tracking-tight text-[#141213] sm:text-5xl">
                  {uc.shortTitle}
                </h2>
                <p className="mt-4 max-w-lg text-[#6B635C] transition-colors group-hover:text-[#141213]/80">
                  {uc.summary}
                </p>
              </div>

              <div className="relative flex flex-wrap gap-2 md:col-span-3">
                {uc.steps.map((s) => (
                  <span
                    key={s.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#141213]/20 px-3 py-1.5 text-xs font-medium text-[#141213]"
                  >
                    <Icon name={s.icon} size={14} />
                    {s.label}
                  </span>
                ))}
              </div>

              <div className="relative flex items-center justify-between md:col-span-2 md:justify-end md:gap-6">
                <span className="si-icon hidden md:block">
                  <IconTile name={uc.icon} size={56} />
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#141213]/25 text-[#141213] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#141213] group-hover:bg-[#141213] group-hover:text-[#F4EDE0]">
                  <Icon name="arrow-up-right" size={20} weight="bold" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#FF6B5B] py-20 text-[#141213]"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <p className="max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight">
            Have a call that isn&apos;t on this list? We scope custom agents too.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#141213] px-7 py-3.5 text-sm font-semibold text-[#F4EDE0] hover:bg-[#2A2426]"
          >
            Describe your use case
            <Icon name="arrow-right" size={16} weight="bold" />
          </Link>
        </div>
      </section>
    </div>
  );
}
