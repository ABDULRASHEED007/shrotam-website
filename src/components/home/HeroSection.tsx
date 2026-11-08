"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Icon } from "@/components/ui/Icon";
import { siteContact, telLink } from "@/config/contact";

const headline = ["Voice agents that", "answer, resolve,", "and hand off."];
const bars = Array.from({ length: 36 }, (_, i) => 18 + ((i * 37) % 62));

export function HeroSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        tl.from(".h-line > span", { yPercent: 115, duration: 1.1, stagger: 0.12 })
          .from(".h-fade", { y: 24, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.7")
          .from(".h-console", { y: 70, opacity: 0, duration: 1.1 }, "-=1")
          .from(
            ".h-chip",
            { scale: 0.6, opacity: 0, duration: 0.6, stagger: 0.15, ease: "back.out(2)" },
            "-=0.5"
          )
          .from(".h-tx", { y: 14, opacity: 0, duration: 0.5, stagger: 0.9 }, "-=0.4");

        gsap.to(".h-bar", {
          scaleY: () => gsap.utils.random(0.25, 1),
          duration: 0.45,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: { each: 0.03, from: "center" },
          repeatRefresh: true,
        });

        const scrub = {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        };
        gsap.to(".h-title", { yPercent: -22, ease: "none", scrollTrigger: scrub });
        gsap.to(".h-sub", { yPercent: -45, opacity: 0, ease: "none", scrollTrigger: scrub });
        gsap.to(".h-glow", { yPercent: 40, scale: 1.3, ease: "none", scrollTrigger: scrub });
        gsap.to(".h-grid", { yPercent: 18, ease: "none", scrollTrigger: scrub });
        gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((el) => {
          const speed = parseFloat(el.dataset.speed ?? "0.2");
          gsap.to(el, { y: -speed * 360, ease: "none", scrollTrigger: scrub });
        });
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#141213] pb-20 pt-32 text-[#F4EDE0]"
    >
      <div className="h-grid dot-grid-dark absolute inset-0 -z-10 opacity-70" />
      <div className="h-glow absolute -right-40 top-10 -z-10 h-[620px] w-[620px] rounded-full bg-[#FF6B5B]/25 blur-[140px]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#141213] to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <p className="h-fade mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#F4EDE0]/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B5B] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6B5B]" />
            </span>
            Multi-tenant AI voice platform
          </p>

          <h1 className="h-title font-display text-[clamp(2.4rem,5.2vw,5rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            {headline.map((line, i) => (
              <span key={line} className="h-line block overflow-hidden pb-[0.08em]">
                <span className={i === headline.length - 1 ? "block text-[#FF6B5B]" : "block"}>
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <div className="h-sub">
            <p className="h-fade mt-8 max-w-xl text-lg leading-relaxed text-[#F4EDE0]/70">
              SHROTAM builds production voice agents for support, sales, collections and
              operations. Wired into your systems, grounded in your knowledge, with a human one
              step away.
            </p>

            <div className="h-fade mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#FF6B5B] px-7 py-3.5 text-sm font-semibold text-[#141213] transition-colors hover:bg-[#ff8173]"
              >
                Book a demo
                <Icon
                  name="arrow-right"
                  size={16}
                  weight="bold"
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-[#F4EDE0] transition-colors hover:bg-white/10"
              >
                Explore solutions
              </Link>
            </div>

            <p className="h-fade mt-8 flex items-center gap-2 text-sm text-[#F4EDE0]/55">
              <Icon name="phone-call" size={18} className="text-[#FF6B5B]" />
              Prefer to talk?
              <a
                href={telLink(siteContact.phone1)}
                className="font-mono text-[#F4EDE0] underline decoration-white/25 underline-offset-4 hover:decoration-[#FF6B5B]"
              >
                {siteContact.phone1.display}
              </a>
            </p>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div
            data-speed="0.12"
            className="h-console relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-5 shadow-[0_40px_120px_-30px_rgba(255,107,91,0.35)] backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF6B5B]/15 text-[#FF6B5B]">
                  <Icon name="phone-incoming" size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold">Inbound · Delivery reschedule</p>
                  <p className="font-mono text-[11px] text-[#F4EDE0]/50">illustrative call</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-300">
                Live
              </span>
            </div>

            <div className="flex h-24 items-center justify-center gap-[3px] py-4">
              {bars.map((h, i) => (
                <span
                  key={i}
                  className="h-bar w-[3px] origin-center rounded-full bg-gradient-to-t from-[#FF6B5B] to-[#ffb4aa]"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            <div className="space-y-3 text-sm">
              <p className="h-tx max-w-[85%] rounded-2xl rounded-bl-md bg-white/10 px-4 py-3">
                Thanks for calling Northline. How can I help?
              </p>
              <p className="h-tx ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-[#FF6B5B] px-4 py-3 font-medium text-[#141213]">
                Can you move my delivery to tomorrow?
              </p>
              <p className="h-tx max-w-[85%] rounded-2xl rounded-bl-md bg-white/10 px-4 py-3">
                Done. Tomorrow between 10 and 1. I&apos;ve texted you the details.
              </p>
            </div>
          </div>

          <div
            data-speed="0.32"
            className="h-chip absolute -left-4 -top-7 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#141213]/90 px-3.5 py-2.5 text-xs shadow-xl backdrop-blur md:flex lg:-left-12"
          >
            <Icon name="brain" size={16} className="text-[#FF6B5B]" />
            <span className="font-mono text-[#F4EDE0]/60">Intent</span> Reschedule
          </div>
          <div
            data-speed="0.22"
            className="h-chip absolute -right-3 top-1/2 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#141213]/90 px-3.5 py-2.5 text-xs shadow-xl backdrop-blur md:flex lg:-right-8"
          >
            <Icon name="waveform" size={16} className="text-[#FF6B5B]" />
            <span className="font-mono text-[#F4EDE0]/60">Sentiment</span> Calm
          </div>
          <div
            data-speed="0.42"
            className="h-chip absolute -bottom-6 left-6 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#141213]/90 px-3.5 py-2.5 text-xs shadow-xl backdrop-blur md:flex lg:-left-6"
          >
            <Icon name="database" size={16} className="text-[#FF6B5B]" />
            <span className="font-mono text-[#F4EDE0]/60">CRM</span> Updated
          </div>
        </div>
      </div>
    </section>
  );
}
