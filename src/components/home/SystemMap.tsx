"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Icon, type IconName } from "@/components/ui/Icon";

interface MapNode {
  id: string;
  label: string;
  icon: IconName;
  x: number;
  y: number;
  side: "l" | "r";
}

const W = 1000;
const H = 560;

const nodes: MapNode[] = [
  { id: "pstn", label: "Phone network", icon: "phone-call", x: 90, y: 110, side: "l" },
  { id: "sip", label: "SIP & WebRTC", icon: "globe", x: 90, y: 280, side: "l" },
  { id: "msg", label: "SMS & WhatsApp", icon: "chat", x: 90, y: 450, side: "l" },
  { id: "crm", label: "CRM", icon: "users", x: 910, y: 70, side: "r" },
  { id: "cal", label: "Calendars", icon: "calendar", x: 910, y: 175, side: "r" },
  { id: "tix", label: "Ticketing", icon: "ticket", x: 910, y: 280, side: "r" },
  { id: "kb", label: "Knowledge base", icon: "book", x: 910, y: 385, side: "r" },
  { id: "pay", label: "Billing & payments", icon: "wallet", x: 910, y: 490, side: "r" },
];

const cx = 500;
const cy = 280;

function pathFor(n: MapNode) {
  if (n.side === "l") {
    const sx = n.x + 52;
    return `M${sx} ${n.y} C ${sx + 170} ${n.y}, ${cx - 190} ${cy}, ${cx - 62} ${cy}`;
  }
  const sx = n.x - 52;
  return `M${sx} ${n.y} C ${sx - 170} ${n.y}, ${cx + 190} ${cy}, ${cx + 62} ${cy}`;
}

export function SystemMap() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const paths = gsap.utils.toArray<SVGPathElement>(".sm-path");
        paths.forEach((p) => {
          const len = p.getTotalLength();
          gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
        });

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=140%",
            pin: true,
            scrub: 0.7,
          },
        });
        tl.from(".sm-core", { scale: 0.5, opacity: 0, duration: 0.5, ease: "back.out(1.6)" })
          .from(".sm-ring", { scale: 0.6, opacity: 0, duration: 0.6, stagger: 0.15 }, "<")
          .to(paths, { strokeDashoffset: 0, duration: 1.2, stagger: 0.12 }, 0.4)
          .from(".sm-node", { scale: 0.6, opacity: 0, duration: 0.5, stagger: 0.12, ease: "back.out(2)" }, 0.6)
          .from(".sm-copy > *", { y: 30, opacity: 0, duration: 0.6, stagger: 0.15 }, 0);

        gsap.to(".sm-orbit", {
          rotation: 360,
          duration: 40,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-[#F4EDE0] py-24 md:flex md:min-h-screen md:items-center md:pb-8 md:pt-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm-copy mb-8 max-w-2xl md:mb-2">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B5B]">Platform</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-[#141213] sm:text-5xl">
            One runtime between your phone lines and your systems.
          </h2>
          <p className="mt-5 text-[#6B635C]">
            Telephony in on the left, your business tools on the right. SHROTAM sits in the
            middle: understanding the call, calling your APIs, and logging what happened.
          </p>
        </div>

        <div className="relative mx-auto hidden w-full max-w-4xl md:block" style={{ aspectRatio: `${W} / ${H}` }}>
          <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" fill="none">
            <g className="sm-orbit" style={{ transformOrigin: `${cx}px ${cy}px` }}>
              <circle className="sm-ring" cx={cx} cy={cy} r={120} stroke="#141213" strokeOpacity="0.12" strokeDasharray="4 8" />
              <circle className="sm-ring" cx={cx} cy={cy} r={170} stroke="#141213" strokeOpacity="0.08" strokeDasharray="2 10" />
            </g>
            {nodes.map((n) => (
              <path
                key={n.id}
                d={pathFor(n)}
                className="sm-path"
                stroke="#FF6B5B"
                strokeWidth={2}
                strokeLinecap="round"
              />
            ))}
          </svg>

          <div
            className="sm-core absolute flex h-[132px] w-[132px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[2rem] bg-[#141213] text-[#F4EDE0] shadow-[0_30px_80px_-20px_rgba(20,18,19,0.6)]"
            style={{ left: `${(cx / W) * 100}%`, top: `${(cy / H) * 100}%` }}
          >
            <Icon name="cpu" size={34} className="text-[#FF6B5B]" />
            <span className="mt-2 font-display text-sm font-semibold tracking-wide">SHROTAM</span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#F4EDE0]/50">Voice runtime</span>
          </div>

          {nodes.map((n) => (
            <div
              key={n.id}
              className="sm-node absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-3"
              style={{ left: `${(n.x / W) * 100}%`, top: `${(n.y / H) * 100}%` }}
            >
              <span className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[#FFFBF5] text-[#141213] shadow-sm ring-1 ring-[#DDD4C4]">
                <Icon name={n.icon} size={26} />
              </span>
              <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-[#141213]">
                {n.label}
              </span>
            </div>
          ))}
        </div>

        <ul className="grid grid-cols-2 gap-3 md:hidden">
          {nodes.map((n) => (
            <li key={n.id} className="flex items-center gap-3 rounded-2xl bg-[#FFFBF5] p-3 ring-1 ring-[#DDD4C4]">
              <Icon name={n.icon} size={22} className="text-[#FF6B5B]" />
              <span className="text-sm font-medium text-[#141213]">{n.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
