"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Icon } from "@/components/ui/Icon";
import { siteContact, telLink, whatsAppLink, WHATSAPP_PREFILL_MESSAGE } from "@/config/contact";

export function CtaSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".cta-card",
          { scale: 0.88, borderRadius: "4rem" },
          {
            scale: 1,
            borderRadius: "2rem",
            ease: "none",
            scrollTrigger: { trigger: root.current, start: "top 95%", end: "top 25%", scrub: true },
          }
        );
        gsap.to(".cta-blob", {
          yPercent: -40,
          xPercent: 15,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="bg-[#F4EDE0] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="cta-card relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#FF6B5B] px-6 py-20 text-[#141213] sm:px-14 lg:py-28">
        <div className="cta-blob absolute -bottom-40 -left-24 h-[420px] w-[420px] rounded-full bg-[#F4EDE0]/40 blur-3xl" />
        <div className="relative grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display text-5xl font-semibold leading-[1] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Hear your own calls handled.
            </h2>
            <p className="mt-6 max-w-lg text-lg text-[#141213]/75">
              Tell us the call you want automated. We&apos;ll walk you through a working demo using
              your scenario.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#141213] px-7 py-3.5 text-sm font-semibold text-[#F4EDE0] transition-transform hover:scale-[1.03]"
              >
                Request a demo
                <Icon name="arrow-right" size={16} weight="bold" className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center rounded-full border border-[#141213]/40 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-[#141213]/10"
              >
                Browse solutions
              </Link>
            </div>
          </div>

          <div className="space-y-3 lg:col-span-5">
            {[siteContact.phone1, siteContact.phone2].map((p) => (
              <div
                key={p.e164Digits}
                className="flex items-center justify-between gap-4 rounded-2xl bg-[#141213]/90 px-5 py-4 text-[#F4EDE0]"
              >
                <a href={telLink(p)} className="flex items-center gap-3 font-mono text-base sm:text-lg">
                  <Icon name="phone-call" size={22} className="text-[#FF6B5B]" />
                  {p.display}
                </a>
                <a
                  href={whatsAppLink(p, WHATSAPP_PREFILL_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp ${p.display}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#FF6B5B] hover:text-[#141213]"
                >
                  <Icon name="whatsapp" size={20} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
