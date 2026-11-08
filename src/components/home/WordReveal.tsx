"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

export function WordReveal({
  text,
  className,
  tone = "light",
}: {
  text: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  const root = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".wr-word", {
          opacity: 0.14,
          ease: "none",
          stagger: 0.1,
          scrollTrigger: {
            trigger: root.current,
            start: "top 80%",
            end: "bottom 45%",
            scrub: true,
          },
        });
      });
    },
    { scope: root }
  );

  return (
    <p
      ref={root}
      className={cn(
        "font-display font-semibold leading-[1.12] tracking-tight",
        tone === "light" ? "text-[#141213]" : "text-[#F4EDE0]",
        className
      )}
    >
      {text.split(" ").map((w, i) => (
        <span key={i} className="wr-word inline-block pr-[0.25em]">
          {w}
        </span>
      ))}
    </p>
  );
}
