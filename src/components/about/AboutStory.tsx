"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Icon, IconTile, type IconName } from "@/components/ui/Icon";
import { WordReveal } from "@/components/home/WordReveal";

const principles: { icon: IconName; title: string; body: string; bg: string; fg: string; tile: "ink" | "coral" }[] = [
  {
    icon: "waveform",
    title: "Voice-native, not a chatbot with a microphone",
    body: "Turn-taking, interruptions, silence and accents are design problems from day one. We tune for how people actually talk on the phone.",
    bg: "bg-[#FFFBF5]",
    fg: "text-[#141213]",
    tile: "ink",
  },
  {
    icon: "headset",
    title: "A human is always one step away",
    body: "Agents should know their limits. We design handoff rules first and carry the context across, so callers never repeat themselves.",
    bg: "bg-[#FF6B5B]",
    fg: "text-[#141213]",
    tile: "ink",
  },
  {
    icon: "plug",
    title: "Wired into your real systems",
    body: "An agent that can only talk is a demo. Ours read orders, book slots and update records through scoped, audited integrations.",
    bg: "bg-[#141213]",
    fg: "text-[#F4EDE0]",
    tile: "coral",
  },
  {
    icon: "shield",
    title: "Honest about risk and limits",
    body: "We tell you what the agent can't do, what data it touches and where providers are involved, before you sign, not after.",
    bg: "bg-[#E4D8C3]",
    fg: "text-[#141213]",
    tile: "ink",
  },
];

export function AboutStory() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".ab-hero > *", { y: 40, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out" });
        gsap.to(".ab-orb", {
          yPercent: -60,
          scale: 1.4,
          ease: "none",
          scrollTrigger: { trigger: ".ab-hero-wrap", start: "top top", end: "bottom top", scrub: true },
        });
      });

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".ab-card");
        cards.forEach((card, i) => {
          if (i === cards.length - 1) return;
          gsap.to(card.querySelector(".ab-inner"), {
            scale: 0.92,
            filter: "brightness(0.95)",
            ease: "none",
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top 85%",
              end: "top 20%",
              scrub: true,
            },
          });
        });
      });
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <section className="ab-hero-wrap relative overflow-hidden bg-[#F4EDE0] pb-24 pt-40">
        <div className="ab-orb absolute -right-20 top-28 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#FF6B5B] to-[#ffb4aa] opacity-70 blur-2xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="ab-hero max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B5B]">About SHROTAM</p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1] tracking-[-0.035em] text-[#141213] sm:text-7xl lg:text-8xl">
              We build the voice your business answers with.
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-[#F4EDE0] px-4 pb-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <WordReveal
            className="text-2xl sm:text-4xl lg:text-5xl"
            text="SHROTAM is an AI voice-agent studio. We design, build and run agents that handle inbound and outbound calls for businesses, and we stay close to the calls after launch."
          />
        </div>
      </section>

      <section className="bg-[#F4EDE0] px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="mb-10 font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B5B]">How we think</p>
          {principles.map((p, i) => (
            <div key={p.title} className="ab-card mb-6 lg:sticky lg:mb-10" style={{ top: `${6 + i * 1.5}rem` }}>
              <div className={`ab-inner origin-top rounded-[2rem] p-8 shadow-[0_30px_80px_-40px_rgba(20,18,19,0.4)] ring-1 ring-black/5 sm:p-12 lg:min-h-[340px] ${p.bg} ${p.fg}`}>
                <div className="flex items-start justify-between">
                  <IconTile name={p.icon} tone={p.tile} size={60} />
                  <span className="font-display text-6xl font-semibold opacity-20">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h2 className="mt-10 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{p.title}</h2>
                <p className="mt-4 max-w-xl text-lg opacity-75">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FF6B5B] py-24 text-[#141213]"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <p className="max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight">
            Let&apos;s find the first call worth automating.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#141213] px-7 py-3.5 text-sm font-semibold text-[#F4EDE0] hover:bg-[#2A2426]">
            Get in touch
            <Icon name="arrow-right" size={16} weight="bold" />
          </Link>
        </div>
      </section>
    </div>
  );
}
