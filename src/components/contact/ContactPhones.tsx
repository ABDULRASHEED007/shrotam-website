"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Icon } from "@/components/ui/Icon";
import { siteContact, sitePhones, telLink, whatsAppLink, WHATSAPP_PREFILL_MESSAGE } from "@/config/contact";

const labels = ["Sales & demos", "Product enquiries"];

export function ContactPhones() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".cp-in", { y: 40, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out" });
        gsap.to(".cp-ring", { scale: 1.6, opacity: 0, duration: 2.2, repeat: -1, stagger: 0.7, ease: "power1.out" });
      });
    },
    { scope: root }
  );

  const hasEmail = !siteContact.email.startsWith("[");

  return (
    <aside ref={root} className="relative overflow-hidden bg-[#141213] px-4 pb-16 pt-32 text-[#F4EDE0] sm:px-10 lg:sticky lg:top-0 lg:h-screen lg:px-14 lg:pt-36">
      <div className="dot-grid-dark absolute inset-0 opacity-50" />
      <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#FF6B5B]/25 blur-[120px]" />

      <div className="relative flex h-full flex-col">
        <div>
          <p className="cp-in font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B5B]">Contact</p>
          <h1 className="cp-in mt-4 font-display text-5xl font-semibold leading-[1] tracking-[-0.03em] sm:text-6xl">
            Prefer to talk it through?
          </h1>
          <p className="cp-in mt-5 max-w-sm text-[#F4EDE0]/70">
            Call or message us about any of our voice-agent products. Or use the form and
            we&apos;ll come back to you.
          </p>
        </div>

        <div className="mt-10 space-y-4 lg:mt-auto">
          {sitePhones.map((p, i) => (
            <div key={p.e164Digits} className="cp-in rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
              <div className="flex items-center gap-4">
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FF6B5B] text-[#141213]">
                  {i === 0 && <span className="cp-ring absolute inset-0 rounded-2xl border border-[#FF6B5B]" />}
                  <Icon name="phone-call" size={24} weight="fill" />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-[#F4EDE0]/50">{labels[i]}</p>
                  <a href={telLink(p)} className="font-display text-2xl font-semibold tracking-tight hover:text-[#FF6B5B] sm:text-3xl">
                    {p.display}
                  </a>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <a href={telLink(p)} className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#F4EDE0] px-4 py-2.5 text-sm font-semibold text-[#141213] transition hover:bg-[#FF6B5B]">
                  <Icon name="phone" size={16} weight="fill" /> Call
                </a>
                <a
                  href={whatsAppLink(p, WHATSAPP_PREFILL_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/25 px-4 py-2.5 text-sm font-semibold transition hover:bg-white/10"
                >
                  <Icon name="whatsapp" size={16} weight="fill" /> WhatsApp
                </a>
              </div>
            </div>
          ))}

          {hasEmail && (
            <a href={`mailto:${siteContact.email}`} className="cp-in flex items-center gap-3 text-sm text-[#F4EDE0]/70 hover:text-[#FF6B5B]">
              <Icon name="mail" size={20} /> {siteContact.email}
            </a>
          )}
          <p className="cp-in text-xs text-[#F4EDE0]/45">We reply to written enquiries within one business day.</p>
        </div>
      </div>
    </aside>
  );
}
