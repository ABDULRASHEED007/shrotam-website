"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { Icon, IconTile, type IconName } from "@/components/ui/Icon";

const phases: {
  icon: IconName;
  name: string;
  title: string;
  body: string;
  window: string;
  gets: string[];
}[] = [
  {
    icon: "clipboard",
    name: "Discover",
    title: "Map the calls worth automating",
    body: "We listen to real calls, read your scripts and policies, and pick the one or two flows where automation clearly pays off.",
    window: "Week 1",
    gets: ["Call-flow map with automation scope", "Escalation and compliance rules", "Success metrics agreed up front"],
  },
  {
    icon: "branch",
    name: "Design",
    title: "Shape the conversation",
    body: "Prompts, personas, tool contracts and handoff rules are drafted and tested on paper before anything is built.",
    window: "Weeks 1–2",
    gets: ["Conversation design and voice persona", "Tool and API contracts", "Knowledge-source plan"],
  },
  {
    icon: "plug",
    name: "Build",
    title: "Connect it to your systems",
    body: "Telephony, knowledge retrieval and your CRM, calendar or billing APIs are wired in on a staging workspace.",
    window: "Weeks 2–4",
    gets: ["Working agent on a test number", "Integrations with scoped credentials", "Call logging and dashboards"],
  },
  {
    icon: "waveform",
    name: "Test",
    title: "Break it before customers do",
    body: "We run scripted and adversarial calls, tune latency and interruptions, and review transcripts with your team.",
    window: "Weeks 4–5",
    gets: ["Scenario test pack and results", "Tuned prompts and guardrails", "Go-live checklist"],
  },
  {
    icon: "rocket",
    name: "Launch",
    title: "Go live, then keep improving",
    body: "We start with a slice of traffic, watch the calls with you, and widen as confidence grows. Reviews continue after launch.",
    window: "Week 6 onward",
    gets: ["Phased rollout plan", "Weekly call review and tuning", "Escalation runbook for your team"],
  },
];

export function ProcessJourney() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".pj-hero > *", { y: 40, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out" });

        gsap.to(".pj-progress", {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: ".pj-phases", start: "top 40%", end: "bottom 60%", scrub: true },
        });

        gsap.utils.toArray<HTMLElement>(".pj-phase").forEach((phase) => {
          const num = phase.querySelector<HTMLElement>(".pj-num");
          gsap.fromTo(
            num,
            { yPercent: 18 },
            { yPercent: -18, ease: "none", scrollTrigger: { trigger: phase, start: "top bottom", end: "bottom top", scrub: true } }
          );
          gsap.from(phase.querySelector(".pj-card"), {
            x: 120,
            opacity: 0,
            ease: "none",
            scrollTrigger: { trigger: phase, start: "top 80%", end: "top 40%", scrub: true },
          });
          gsap.from(phase.querySelectorAll(".pj-get"), {
            x: 30,
            opacity: 0,
            stagger: 0.2,
            ease: "none",
            scrollTrigger: { trigger: phase, start: "top 55%", end: "top 20%", scrub: true },
          });
          ScrollTrigger.create({
            trigger: phase,
            start: "top 55%",
            end: "bottom 55%",
            onToggle: (self) => {
              if (num) num.dataset.on = String(self.isActive);
            },
          });
        });
      });
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <section className="relative overflow-hidden bg-[#F4EDE0] pb-16 pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pj-hero max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B5B]">How we work</p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1] tracking-[-0.035em] text-[#141213] sm:text-7xl lg:text-8xl">
              From first call to live in about six weeks.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-[#6B635C]">
              A typical single-flow project. Larger scopes run longer, and we say so before we start.
            </p>
          </div>
        </div>
      </section>

      <section className="pj-phases relative bg-[#F4EDE0] pb-24">
        <div className="absolute bottom-24 left-4 top-0 hidden w-px bg-[#141213]/15 sm:left-6 lg:left-8 xl:block">
          <div className="pj-progress h-full origin-top scale-y-0 bg-[#FF6B5B]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {phases.map((p, i) => (
            <div
              key={p.name}
              className="pj-phase relative grid min-h-[80vh] items-center gap-8 border-t border-[#141213]/15 py-16 lg:grid-cols-12"
            >
              <div className="relative lg:col-span-5">
                <span
                  data-on="false"
                  className="pj-num block select-none font-display text-[10rem] font-semibold leading-[0.85] tracking-tighter text-transparent transition-colors duration-500 [-webkit-text-stroke:2px_#141213] data-[on=true]:text-[#FF6B5B] data-[on=true]:[-webkit-text-stroke:2px_#FF6B5B] sm:text-[14rem] lg:text-[16rem]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-[#6B635C]">{p.window}</p>
              </div>

              <div className="pj-card rounded-3xl bg-[#FFFBF5] p-8 shadow-[0_30px_80px_-40px_rgba(20,18,19,0.35)] ring-1 ring-[#DDD4C4] sm:p-10 lg:col-span-7">
                <div className="flex items-center gap-4">
                  <IconTile name={p.icon} size={52} />
                  <p className="font-display text-xl font-semibold text-[#141213]">{p.name}</p>
                </div>
                <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-[#141213] sm:text-4xl">
                  {p.title}
                </h2>
                <p className="mt-4 text-[#6B635C]">{p.body}</p>
                <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-[#141213]/60">You get</p>
                <ul className="mt-3 divide-y divide-[#DDD4C4] border-t border-[#DDD4C4]">
                  {p.gets.map((g) => (
                    <li key={g} className="pj-get flex items-center gap-3 py-3 text-[#141213]">
                      <Icon name="check" size={18} weight="bold" className="text-[#FF6B5B]" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FF6B5B] py-20 text-[#141213]"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <p className="max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight">
            Start with a 30-minute call. Bring one call you want handled.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#141213] px-7 py-3.5 text-sm font-semibold text-[#F4EDE0] hover:bg-[#2A2426]"
          >
            Book a demo
            <Icon name="arrow-right" size={16} weight="bold" />
          </Link>
        </div>
      </section>
    </div>
  );
}
