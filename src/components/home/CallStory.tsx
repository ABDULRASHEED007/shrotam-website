"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Icon, IconTile, type IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const steps: { icon: IconName; label: string; text: string }[] = [
  { icon: "phone-incoming", label: "Answer", text: "Picks up on the first ring and asks one open question." },
  { icon: "user-check", label: "Verify", text: "Confirms who is calling before touching account data." },
  { icon: "database", label: "Retrieve", text: "Reads live order and policy data from your systems." },
  { icon: "check", label: "Resolve", text: "Completes the request and confirms by SMS." },
  { icon: "headset", label: "Hand off", text: "Transfers with transcript and intent when a person is needed." },
];

function Bubble({ who, children }: { who: "agent" | "caller"; children: React.ReactNode }) {
  return (
    <p
      className={cn(
        "cs-item max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
        who === "agent"
          ? "rounded-bl-md bg-white/10 text-[#F4EDE0]"
          : "ml-auto rounded-br-md bg-[#FF6B5B] font-medium text-[#141213]"
      )}
    >
      {children}
    </p>
  );
}

function Tool({ children, result }: { children: string; result: string }) {
  return (
    <div className="cs-item rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-[12.5px]">
      <p className="text-[#FF6B5B]">{children}</p>
      <p className="mt-1.5 text-emerald-300/90">→ {result}</p>
    </div>
  );
}

function Panel({ tag, children }: { tag: string; children: React.ReactNode }) {
  return (
    <div className="cs-panel flex flex-col gap-3 p-6 lg:absolute lg:inset-0 lg:justify-center lg:p-10">
      <p className="cs-item mb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#F4EDE0]/45">
        {tag}
      </p>
      {children}
    </div>
  );
}

export function CallStory() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const panels = gsap.utils.toArray<HTMLElement>(".cs-panel");
        const items = gsap.utils.toArray<HTMLElement>(".cs-step");
        const count = panels.length;

        gsap.set(panels.slice(1), { autoAlpha: 0, y: 50 });

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: `+=${count * 90}%`,
            pin: true,
            scrub: 0.6,
            onUpdate: (self) => {
              const idx = Math.min(count - 1, Math.round(self.progress * (count - 1)));
              items.forEach((el, i) => {
                el.dataset.active = String(i === idx);
                el.dataset.done = String(i < idx);
              });
              const n = document.querySelector<HTMLElement>(".cs-bignum");
              if (n) n.textContent = String(idx + 1).padStart(2, "0");
            },
          },
        });

        tl.to(".cs-rail-fill", { scaleY: 1, duration: count - 1 }, 0);
        for (let i = 1; i < count; i++) {
          tl.to(panels[i - 1], { autoAlpha: 0, y: -50, duration: 0.45 }, i - 0.3)
            .to(panels[i], { autoAlpha: 1, y: 0, duration: 0.45 }, i - 0.1)
            .from(
              panels[i].querySelectorAll(".cs-item"),
              { y: 22, opacity: 0, stagger: 0.07, duration: 0.3 },
              i
            );
        }
        tl.to({}, { duration: 0.4 });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative bg-[#F4EDE0] py-24 lg:flex lg:min-h-screen lg:items-center lg:py-0">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B5B]">One call, start to finish</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-[#141213] sm:text-5xl">
            Scroll through a real call, one decision at a time.
          </h2>

          <div className="relative mt-10 hidden lg:block">
            <div className="absolute bottom-3 left-[21px] top-3 w-px bg-[#DDD4C4]" />
            <div className="cs-rail-fill absolute bottom-3 left-[21px] top-3 w-px origin-top scale-y-0 bg-[#FF6B5B]" />
            <ol className="space-y-5">
              {steps.map((s, i) => (
                <li
                  key={s.label}
                  data-active={i === 0}
                  data-done={false}
                  className="cs-step group relative flex items-start gap-4 opacity-45 transition-opacity duration-300 data-[active=true]:opacity-100 data-[done=true]:opacity-70"
                >
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4EDE0] ring-1 ring-[#DDD4C4] transition-all duration-300 group-data-[active=true]:bg-[#141213] group-data-[active=true]:text-[#FF6B5B] group-data-[active=true]:ring-[#141213]">
                    <Icon name={s.icon} size={20} />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-[#141213]">{s.label}</p>
                    <p className="text-sm leading-relaxed text-[#6B635C]">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <ul className="mt-8 space-y-4 lg:hidden">
            {steps.map((s) => (
              <li key={s.label} className="flex items-start gap-3">
                <IconTile name={s.icon} size={40} />
                <div>
                  <p className="font-display font-semibold text-[#141213]">{s.label}</p>
                  <p className="text-sm text-[#6B635C]">{s.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-7">
          <span className="cs-bignum pointer-events-none absolute -top-10 right-2 z-0 hidden select-none font-display text-[10rem] font-semibold leading-none text-[#141213]/[0.05] lg:block">
            01
          </span>
          <div className="relative z-10 overflow-hidden rounded-3xl bg-[#141213] text-[#F4EDE0] shadow-[0_50px_100px_-40px_rgba(20,18,19,0.6)] lg:h-[560px]">
            <div className="flex items-center gap-2 border-b border-white/10 px-6 py-4">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B5B]" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-3 font-mono text-[11px] text-[#F4EDE0]/50">
                northline-couriers / inbound / illustrative call
              </span>
            </div>

            <div className="relative lg:h-[calc(100%-57px)]">
              <Panel tag="00:02 · Greeting">
                <Bubble who="agent">Thanks for calling Northline Couriers. What can I help you with?</Bubble>
                <Bubble who="caller">My parcel was due today. Can you move it to tomorrow?</Bubble>
                <div className="cs-item mt-2 flex items-center gap-2 font-mono text-[11px] text-[#F4EDE0]/50">
                  <Icon name="shield" size={14} className="text-[#FF6B5B]" />
                  Recording disclosure played
                </div>
              </Panel>

              <Panel tag="00:09 · Identity">
                <div className="cs-item space-y-2">
                  {[
                    ["Number matched", "ending 5452"],
                    ["Account found", "NL-48213"],
                    ["Code confirmed", "SMS one-time code"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <span className="flex items-center gap-3 text-sm">
                        <Icon name="check" size={16} weight="bold" className="text-emerald-300" />
                        {k}
                      </span>
                      <span className="font-mono text-xs text-[#F4EDE0]/50">{v}</span>
                    </div>
                  ))}
                </div>
                <Bubble who="agent">Thanks. Verified. Let me check that parcel.</Bubble>
              </Panel>

              <Panel tag="00:21 · Tool calls">
                <Tool result='{ status: "out_for_delivery" }'>{'shipments.track("NL-48213")'}</Tool>
                <Tool result="10:00–13:00, 14:00–17:00">{'slots.available("tomorrow")'}</Tool>
                <Bubble who="agent">I can do tomorrow between 10 and 1, or 2 to 5. Which works?</Bubble>
              </Panel>

              <Panel tag="00:48 · Resolution">
                <Bubble who="caller">10 to 1 is perfect.</Bubble>
                <Bubble who="agent">Booked. I&apos;ve sent the details to your phone.</Bubble>
                <div className="cs-item mt-2 grid grid-cols-3 gap-3">
                  {[
                    ["calendar", "Slot booked"],
                    ["chat", "SMS sent"],
                    ["ticket", "Ticket closed"],
                  ].map(([icon, label]) => (
                    <div
                      key={label}
                      className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-center text-xs"
                    >
                      <Icon name={icon as IconName} size={22} className="text-[#FF6B5B]" />
                      {label}
                    </div>
                  ))}
                </div>
              </Panel>

              <Panel tag="01:12 · Wrap-up">
                <div className="cs-item rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="font-display text-lg font-semibold">Call summary</p>
                  <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                    {[
                      ["Intent", "Reschedule delivery"],
                      ["Outcome", "Resolved by agent"],
                      ["Sentiment", "Calm"],
                      ["Transcript", "Saved and searchable"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex flex-col">
                        <dt className="font-mono text-[11px] uppercase tracking-wider text-[#F4EDE0]/45">{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="cs-item flex items-start gap-3 rounded-2xl border border-[#FF6B5B]/30 bg-[#FF6B5B]/10 p-4 text-sm">
                  <Icon name="headset" size={22} className="shrink-0 text-[#FF6B5B]" />
                  <p>
                    Had the caller asked for a person, the same panel goes to your team as a warm
                    transfer: transcript, intent and parcel already attached.
                  </p>
                </div>
              </Panel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
