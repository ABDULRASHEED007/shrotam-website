"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Icon, IconTile, type IconName } from "@/components/ui/Icon";
import { legalDocuments } from "@/config/legal";
import { voiceAgentComplianceControls } from "@/config/cpaas-compliance";

const layers: { icon: IconName; name: string; title: string; body: string }[] = [
  { icon: "lock", name: "Transport", title: "Encrypted on the wire", body: "Sessions, API calls and voice signalling use TLS 1.2 or higher between consoles, services and telephony infrastructure." },
  { icon: "key", name: "Access", title: "Least-privilege by default", body: "People and agents get only the permissions the approved call path needs. Credentials are scoped per workspace and rotated on schedule." },
  { icon: "stack", name: "Tenancy", title: "One workspace, one boundary", body: "Agents, knowledge sources, recordings and logs are separated per client workspace to prevent cross-tenant access." },
  { icon: "brain", name: "AI controls", title: "Models on a short leash", body: "Agents answer from approved sources and call approved tools only. Call content is not used to train public foundation models unless you opt in." },
  { icon: "plug", name: "CPaaS", title: "Provider terms on the wire", body: "Live calls run on a communications provider. Their ToS, AUP and AI addendum apply to that traffic — our agents are built to support those rules." },
];

const controls: { icon: IconName; k: string; v: string }[] = [
  { icon: "lock", k: "Encryption at rest", v: "AES-256 for stored recordings, transcripts and configuration." },
  { icon: "fingerprint", k: "Caller verification", v: "Configurable identity checks before account data is shared." },
  { icon: "eye", k: "Disclosure", v: "AI and recording disclosures played where required by law or the CPaaS provider." },
  { icon: "headset", k: "Human handoff", v: "Escalation on request, low confidence, sentiment or sensitive intent." },
  { icon: "clipboard", k: "Audit trail", v: "Transcripts, tool calls, disclosures and handoffs logged per call." },
  { icon: "clock", k: "Deletion", v: "Deletion on request and at the end of the configured retention window." },
];

const productionControls = voiceAgentComplianceControls.filter((c) => c.requiredForProduction);

export function SecurityLayers() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".sl-hero > *", { y: 40, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out" });
        gsap.to(".sl-spin", { rotation: 360, duration: 90, repeat: -1, ease: "none", transformOrigin: "50% 50%" });
      });

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const panels = gsap.utils.toArray<HTMLElement>(".sl-panel");
        const rings = gsap.utils.toArray<SVGElement>(".sl-ring");
        const count = panels.length;
        gsap.set(panels.slice(1), { autoAlpha: 0, y: 40 });

        const setActive = (idx: number) => {
          rings.forEach((r, i) => {
            gsap.to(r, {
              stroke: i === idx ? "#FF6B5B" : "rgba(244,237,224,0.18)",
              strokeWidth: i === idx ? 3 : 1.5,
              duration: 0.3,
              overwrite: "auto",
            });
          });
          gsap.utils.toArray<HTMLElement>(".sl-dot").forEach((d, i) => {
            gsap.to(d, { scale: i === idx ? 1.4 : 1, opacity: i === idx ? 1 : 0.45, duration: 0.3, overwrite: "auto" });
          });
        };
        setActive(0);

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: ".sl-pin",
            start: "top top",
            end: `+=${count * 80}%`,
            pin: true,
            scrub: 0.5,
            onUpdate: (self) => setActive(Math.min(count - 1, Math.round(self.progress * (count - 1)))),
          },
        });
        tl.to(".sl-ringwrap", { scale: 1.08, duration: count - 1 }, 0);
        for (let i = 1; i < count; i++) {
          tl.to(panels[i - 1], { autoAlpha: 0, y: -40, duration: 0.4 }, i - 0.3).to(
            panels[i],
            { autoAlpha: 1, y: 0, duration: 0.4 },
            i - 0.1
          );
        }
        tl.to({}, { duration: 0.3 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".sc-row").forEach((row) => {
          gsap.from(row, {
            opacity: 0,
            x: -40,
            ease: "none",
            scrollTrigger: { trigger: row, start: "top 92%", end: "top 70%", scrub: true },
          });
        });
      });
    },
    { scope: root }
  );

  const radii = [60, 105, 150, 195, 240];

  return (
    <div ref={root}>
      <section className="relative overflow-hidden bg-[#141213] pb-10 pt-36 text-[#F4EDE0]">
        <div className="dot-grid-dark absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sl-hero max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B5B]">Security</p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1] tracking-[-0.035em] sm:text-7xl">
              Defence in layers, from the line to the model.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-[#F4EDE0]/70">
              Voice agents handle real customers and real data. Here is how we protect it at every
              layer, and where the limits are.
            </p>
          </div>
        </div>
      </section>

      <section className="sl-pin relative overflow-hidden bg-[#141213] py-16 text-[#F4EDE0] lg:flex lg:h-screen lg:items-center lg:py-0">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative order-2 lg:order-1 lg:h-[420px]">
            {layers.map((l, i) => (
              <div key={l.name} className="sl-panel mb-8 lg:absolute lg:inset-0 lg:mb-0 lg:flex lg:flex-col lg:justify-center">
                <IconTile name={l.icon} tone="coral" size={56} />
                <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-[#F4EDE0]/50">
                  Layer {String(i + 1).padStart(2, "0")} · {l.name}
                </p>
                <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight">{l.title}</h2>
                <p className="mt-4 max-w-md text-[#F4EDE0]/70">{l.body}</p>
              </div>
            ))}
          </div>

          <div className="relative order-1 mx-auto aspect-square w-full max-w-[460px] lg:order-2 lg:max-w-[520px]">
            <div className="sl-ringwrap absolute inset-0">
              <svg viewBox="-260 -260 520 520" className="h-full w-full" fill="none">
                <g className="sl-spin">
                  {radii.map((r, i) => (
                    <circle
                      key={r}
                      className="sl-ring"
                      r={r}
                      stroke="rgba(244,237,224,0.18)"
                      strokeWidth={1.5}
                      strokeDasharray={i % 2 ? "3 9" : "none"}
                    />
                  ))}
                </g>
              </svg>
              {layers.map((l, i) => {
                const angle = (-90 + i * 72) * (Math.PI / 180);
                const r = radii[i] ?? 0;
                const x = 50 + (Math.cos(angle) * r * 100) / 520;
                const y = 50 + (Math.sin(angle) * r * 100) / 520;
                return (
                  <span
                    key={l.name}
                    className="sl-dot absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#141213] text-[#FF6B5B] ring-1 ring-white/20"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <Icon name={l.icon} size={16} />
                  </span>
                );
              })}
            </div>
            <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl bg-[#FF6B5B] text-[#141213] shadow-[0_0_80px_rgba(255,107,91,0.45)]">
              <Icon name="shield" size={44} weight="fill" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4EDE0] py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B5B]">Controls</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-[#141213]">
              What you can expect on every engagement.
            </h2>
          </div>
          <dl className="divide-y divide-[#141213]/15 border-y border-[#141213]/15 lg:col-span-8">
            {controls.map((c) => (
              <div key={c.k} className="sc-row grid gap-2 py-6 sm:grid-cols-[auto_220px_1fr] sm:items-center sm:gap-8">
                <Icon name={c.icon} size={28} className="text-[#141213]" />
                <dt className="font-display text-xl font-semibold text-[#141213]">{c.k}</dt>
                <dd className="text-[#6B635C]">{c.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-[#141213] py-24 text-[#F4EDE0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B5B]">CPaaS flow-down</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight">
              Voice agents inherit the provider&apos;s rules.
            </h2>
            <p className="mt-5 text-[#F4EDE0]/70">
              When live calls run on Plivo or any other communications platform, that provider&apos;s
              Terms of Service, Acceptable Use Policy, Privacy Policy and AI Addendum apply to the
              traffic. SHROTAM voice agents are designed so production deployments can enforce the
              controls those terms expect — before the first live dial.
            </p>
          </div>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productionControls.map((c, i) => (
              <li
                key={c.id}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="font-mono text-[11px] uppercase tracking-widest text-[#FF6B5B]">
                  {String(i + 1).padStart(2, "0")} · {c.accountable}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#F4EDE0]/65">{c.productRequirement}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-sm text-[#F4EDE0]/50">
            Full wording lives in our{" "}
            <Link href="/legal/terms-of-service" className="text-[#FF6B5B] underline-offset-2 hover:underline">
              Terms
            </Link>
            ,{" "}
            <Link href="/legal/ai-services-addendum" className="text-[#FF6B5B] underline-offset-2 hover:underline">
              AI Services Addendum
            </Link>{" "}
            and{" "}
            <Link href="/legal/acceptable-use" className="text-[#FF6B5B] underline-offset-2 hover:underline">
              Acceptable Use Policy
            </Link>
            . Naming Plivo is illustrative — we are not affiliated with Plivo unless a separate
            agreement says so.
          </p>
        </div>
      </section>

      <section className="bg-[#EBE3D6] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B5B]">Plainly stated</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-[#141213]">
              What we do and don&apos;t claim.
            </h2>
            <p className="mt-4 text-[#6B635C]">
              The practices on this page describe how we build and operate. They are not a claim of
              third-party certification (such as SOC 2 or PCI DSS) for SHROTAM itself. Telephony,
              cloud and model providers hold their own attestations, listed in our subprocessor
              register. When a CPaaS is used, that provider&apos;s certifications apply to their
              platform — not automatically to SHROTAM. Legal documents are provided for transparency
              and should be reviewed by counsel before you rely on them.
            </p>
          </div>
          <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:col-span-7">
            {legalDocuments.map((d) => (
              <li key={d.slug}>
                <Link
                  href={d.href}
                  className="group flex items-center justify-between border-b border-[#141213]/15 py-3 text-[#141213] hover:border-[#FF6B5B]"
                >
                  <span className="font-medium">{d.title}</span>
                  <Icon name="arrow-up-right" size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
