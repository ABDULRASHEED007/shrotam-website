"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Icon, IconTile } from "@/components/ui/Icon";
import { useCases, type UseCase } from "@/config/use-cases";
import { cn } from "@/lib/utils";

const skin: Record<UseCase["accent"], { card: string; muted: string; num: string; chip: string; tile: "ink" | "coral" | "cream" | "glass" }> = {
  coral: {
    card: "bg-[#FF6B5B] text-[#141213]",
    muted: "text-[#141213]/70",
    num: "text-[#141213]/15",
    chip: "bg-[#141213]/10 text-[#141213]",
    tile: "ink",
  },
  cream: {
    card: "bg-[#F4EDE0] text-[#141213]",
    muted: "text-[#6B635C]",
    num: "text-[#141213]/10",
    chip: "bg-[#141213]/8 text-[#141213]",
    tile: "ink",
  },
  ink: {
    card: "bg-[#262123] text-[#F4EDE0] ring-1 ring-white/10",
    muted: "text-[#F4EDE0]/65",
    num: "text-[#F4EDE0]/10",
    chip: "bg-white/10 text-[#F4EDE0]",
    tile: "coral",
  },
  sand: {
    card: "bg-[#E4D8C3] text-[#141213]",
    muted: "text-[#5b524a]",
    num: "text-[#141213]/12",
    chip: "bg-[#141213]/10 text-[#141213]",
    tile: "ink",
  },
};

export function UseCaseTrack() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const el = track.current!;
        const distance = () => el.scrollWidth - window.innerWidth;

        const tween = gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              gsap.set(".uct-progress", { scaleX: self.progress });
            },
          },
        });

        gsap.utils.toArray<HTMLElement>(".uct-card").forEach((card) => {
          const num = card.querySelector(".uct-num");
          const flow = card.querySelectorAll(".uct-flow > *");
          if (num) {
            gsap.fromTo(
              num,
              { x: 140 },
              {
                x: -140,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  containerAnimation: tween,
                  start: "left right",
                  end: "right left",
                  scrub: true,
                },
              }
            );
          }
          gsap.from(flow, {
            opacity: 0,
            x: 30,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: "left 75%",
              toggleActions: "play none none reverse",
            },
          });
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-[#141213] text-[#F4EDE0] lg:h-screen">
      <div ref={track} className="flex flex-col gap-6 px-4 py-24 sm:px-6 lg:h-full lg:w-max lg:flex-row lg:items-center lg:gap-8 lg:px-[6vw] lg:py-0">
        <div className="shrink-0 lg:w-[34vw] lg:pr-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B5B]">Solutions</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Six jobs a phone line can finally do on its own.
          </h2>
          <p className="mt-6 max-w-md text-[#F4EDE0]/65">
            Each one is a configured agent with its own flow, guardrails and integrations. Keep
            scrolling to see them side by side.
          </p>
          <p className="mt-8 hidden items-center gap-2 font-mono text-xs text-[#F4EDE0]/45 lg:flex">
            Scroll
            <Icon name="arrow-right" size={14} />
          </p>
        </div>

        {useCases.map((uc, i) => {
          const s = skin[uc.accent];
          return (
            <article
              key={uc.slug}
              className={cn(
                "uct-card relative flex shrink-0 flex-col justify-between overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:h-[72vh] lg:w-[44vw] xl:w-[38vw]",
                s.card
              )}
            >
              <span
                className={cn(
                  "uct-num pointer-events-none absolute -top-8 right-0 select-none font-display text-[11rem] font-semibold leading-none",
                  s.num
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <IconTile name={uc.icon} tone={s.tile} size={56} />
                <h3 className="mt-8 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  {uc.shortTitle}
                </h3>
                <p className={cn("mt-3 max-w-md text-base leading-relaxed", s.muted)}>{uc.tagline}</p>
              </div>

              <ul className="relative mt-8 space-y-2.5">
                {uc.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2.5 text-sm font-medium">
                    <Icon name="check" size={18} weight="bold" className={uc.accent === "ink" ? "mt-px shrink-0 text-[#FF6B5B]" : "mt-px shrink-0"} />
                    <span className={s.muted}>{o}</span>
                  </li>
                ))}
              </ul>

              <div className="relative mt-8">
                <div className="uct-flow flex flex-wrap items-center gap-2">
                  {uc.steps.map((st, idx) => (
                    <span key={st.label} className="flex items-center gap-2">
                      <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium", s.chip)}>
                        <Icon name={st.icon} size={14} />
                        {st.label}
                      </span>
                      {idx < uc.steps.length - 1 && (
                        <span className={cn("h-px w-4", uc.accent === "ink" ? "bg-white/25" : "bg-black/25")} />
                      )}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/solutions/${uc.slug}`}
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  <span className="border-b border-current pb-0.5">See how it works</span>
                  <Icon name="arrow-up-right" size={16} weight="bold" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </article>
          );
        })}

        <div className="flex shrink-0 flex-col items-start justify-center gap-6 py-12 lg:w-[30vw] lg:pl-8">
          <h3 className="font-display text-4xl font-semibold leading-tight tracking-tight">
            Don&apos;t see your use case?
          </h3>
          <p className="max-w-sm text-[#F4EDE0]/65">
            Most projects start as a variation of one of these. Tell us the call you want handled.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#F4EDE0] px-6 py-3 text-sm font-semibold text-[#141213] transition-colors hover:bg-[#FF6B5B]"
          >
            Talk to us
            <Icon name="arrow-right" size={16} weight="bold" />
          </Link>
        </div>
      </div>

      <div className="absolute inset-x-[6vw] bottom-6 hidden h-px bg-white/15 lg:block">
        <div className="uct-progress h-full origin-left scale-x-0 bg-[#FF6B5B]" />
      </div>
    </section>
  );
}
