"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { Icon, IconTile } from "@/components/ui/Icon";
import type { UseCase } from "@/config/use-cases";
import { cn } from "@/lib/utils";

export function SolutionStory({ useCase, next }: { useCase: UseCase; next: UseCase }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".ss-hero > *", { y: 40, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out" });
        gsap.from(".ss-flow-node", { scale: 0.6, opacity: 0, stagger: 0.12, delay: 0.5, ease: "back.out(2)" });
        gsap.from(".ss-flow-line", { scaleX: 0, transformOrigin: "left center", stagger: 0.12, delay: 0.55, ease: "power2.out" });

        gsap.to(".ss-hero-title", {
          yPercent: -20,
          ease: "none",
          scrollTrigger: { trigger: ".ss-header", start: "top top", end: "bottom top", scrub: true },
        });
      });

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const nodes = gsap.utils.toArray<HTMLElement>(".ss-node");
        gsap.fromTo(
          ".ss-fill",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: ".ss-chapters", start: "top 55%", end: "bottom 55%", scrub: true },
          }
        );
        gsap.utils.toArray<HTMLElement>(".ss-chapter").forEach((ch, i) => {
          gsap.from(ch.querySelector(".ss-card"), {
            x: 90,
            opacity: 0,
            ease: "none",
            scrollTrigger: { trigger: ch, start: "top 85%", end: "top 45%", scrub: true },
          });
          gsap.from(ch.querySelectorAll(".ss-line"), {
            y: 24,
            opacity: 0,
            stagger: 0.25,
            ease: "none",
            scrollTrigger: { trigger: ch, start: "top 60%", end: "top 25%", scrub: true },
          });
          ScrollTrigger_create(ch, i, nodes);
        });
      });
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <header className="ss-header relative overflow-hidden bg-[#141213] pb-20 pt-36 text-[#F4EDE0]">
        <div className="dot-grid-dark absolute inset-0 opacity-60" />
        <div className="absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-[#FF6B5B]/20 blur-[130px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="ss-hero">
            <Link href="/solutions" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F4EDE0]/60 hover:text-[#FF6B5B]">
              <Icon name="arrow-right" size={14} className="rotate-180" />
              All solutions
            </Link>
            <div className="mt-8">
              <IconTile name={useCase.icon} tone="coral" size={64} />
            </div>
            <h1 className="ss-hero-title mt-8 max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              {useCase.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[#F4EDE0]/70">{useCase.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#FF6B5B] px-6 py-3 text-sm font-semibold text-[#141213] hover:bg-[#ff8173]">
                Request a demo
                <Icon name="arrow-right" size={16} weight="bold" />
              </Link>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-y-4">
            {useCase.steps.map((s, i) => (
              <div key={s.label} className="flex items-center">
                <div className="ss-flow-node flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur">
                  <Icon name={s.icon} size={22} className="text-[#FF6B5B]" />
                  <span className="text-sm font-medium">{s.label}</span>
                </div>
                {i < useCase.steps.length - 1 && <span className="ss-flow-line mx-2 h-px w-8 bg-gradient-to-r from-[#FF6B5B] to-white/20 sm:w-14" />}
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="bg-[#F4EDE0] py-24">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="border-t border-[#141213]/15 py-10 md:pr-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#6B635C]">The friction</p>
            <p className="mt-5 font-display text-2xl font-semibold leading-snug tracking-tight text-[#141213] sm:text-3xl">{useCase.problem}</p>
          </div>
          <div className="border-t border-[#FF6B5B] py-10 md:pl-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B5B]">The approach</p>
            <p className="mt-5 font-display text-2xl font-semibold leading-snug tracking-tight text-[#141213] sm:text-3xl">{useCase.solution}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#EBE3D6] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B5B]">Inside the call</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-[#141213] sm:text-5xl">
            Four steps, from first word to wrap-up.
          </h2>

          <div className="mt-16 grid gap-12 lg:grid-cols-12">
            <aside className="hidden lg:col-span-4 lg:block">
              <div className="sticky top-32">
                <div className="relative pl-1">
                  <div className="absolute bottom-6 left-[27px] top-6 w-px bg-[#141213]/15" />
                  <div className="ss-fill absolute bottom-6 left-[27px] top-6 w-px origin-top scale-y-0 bg-[#FF6B5B]" />
                  <ol className="space-y-10">
                    {useCase.steps.map((s, i) => (
                      <li key={s.label} data-on={i === 0} className="ss-node group relative flex items-center gap-4 opacity-40 transition-opacity duration-300 data-[on=true]:opacity-100">
                        <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFFBF5] ring-1 ring-[#DDD4C4] transition-all duration-300 group-data-[on=true]:bg-[#141213] group-data-[on=true]:text-[#FF6B5B] group-data-[on=true]:ring-[#141213]">
                          <Icon name={s.icon} size={26} />
                        </span>
                        <div>
                          <p className="font-mono text-[11px] text-[#6B635C]">STEP {String(i + 1).padStart(2, "0")}</p>
                          <p className="font-display text-xl font-semibold text-[#141213]">{s.label}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </aside>

            <div className="ss-chapters space-y-10 lg:col-span-8 lg:space-y-0">
              {useCase.steps.map((s, i) => (
                <div key={s.label} className="ss-chapter lg:flex lg:min-h-[78vh] lg:items-center">
                  <div className="ss-card w-full overflow-hidden rounded-3xl bg-[#141213] text-[#F4EDE0] shadow-[0_40px_90px_-40px_rgba(20,18,19,0.55)]">
                    <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                      <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF6B5B]">
                        <Icon name={s.icon} size={16} />
                        Step {String(i + 1).padStart(2, "0")} · {s.label}
                      </span>
                      <span className="font-mono text-[10px] text-[#F4EDE0]/40">illustrative</span>
                    </div>
                    <div className="p-6 sm:p-8">
                      <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{s.title}</h3>
                      <p className="mt-3 text-[#F4EDE0]/65">{s.detail}</p>
                      <div className="mt-6 rounded-xl border border-white/10 bg-black/30 px-4 py-3 font-mono text-[12.5px] text-[#FF6B5B]">
                        {s.tool}
                      </div>
                      <div className="mt-6 space-y-3">
                        {s.lines.map((l, k) => (
                          <p
                            key={k}
                            className={cn(
                              "ss-line max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                              l.who === "agent" && "rounded-bl-md bg-white/10",
                              l.who === "caller" && "ml-auto rounded-br-md bg-[#FF6B5B] font-medium text-[#141213]",
                              l.who === "system" && "mx-auto max-w-full border border-dashed border-white/20 bg-transparent text-center font-mono text-xs text-[#F4EDE0]/60"
                            )}
                          >
                            {l.text}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4EDE0] py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B5B]">Connects to</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {useCase.integrations.map((n) => (
                <li key={n} className="rounded-full border border-[#141213]/20 px-4 py-2 text-sm font-medium text-[#141213]">{n}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-[#6B635C]">Integrations are scoped per project. Third-party names indicate typical targets, not endorsements.</p>
            <p className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B5B]">Outcomes we design for</p>
            <ul className="mt-4 space-y-3">
              {useCase.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 text-[#141213]">
                  <Icon name="check" size={20} weight="bold" className="mt-0.5 shrink-0 text-[#FF6B5B]" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B5B]">Guardrails</p>
            <ul className="mt-6 divide-y divide-[#141213]/15 border-y border-[#141213]/15">
              {useCase.guardrails.map((g) => (
                <li key={g} className="flex items-start gap-4 py-5">
                  <Icon name="shield" size={24} className="mt-0.5 shrink-0 text-[#141213]" />
                  <span className="text-[#141213]">{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Link href={`/solutions/${next.slug}`} className="group block bg-[#141213] py-20 text-[#F4EDE0] transition-colors hover:bg-[#FF6B5B] hover:text-[#141213]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-60">Next solution</p>
            <p className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-6xl">{next.shortTitle}</p>
          </div>
          <Icon name="arrow-right" size={56} weight="light" className="shrink-0 transition-transform duration-300 group-hover:translate-x-3" />
        </div>
      </Link>
    </div>
  );
}

function ScrollTrigger_create(ch: HTMLElement, i: number, nodes: HTMLElement[]) {
  ScrollTrigger.create({
    trigger: ch,
    start: "top 55%",
    end: "bottom 55%",
    onToggle: (self) => {
      if (!self.isActive) return;
      nodes.forEach((n, j) => {
        n.dataset.on = String(j === i);
      });
    },
  });
}
