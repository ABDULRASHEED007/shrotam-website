"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { callVolumeOptions, interestOptions } from "@/lib/validation/contact";
import { cn } from "@/lib/utils";

const initial = {
  fullName: "",
  businessEmail: "",
  companyName: "",
  phone: "",
  interest: "" as string,
  callVolume: "",
  message: "",
  consent: false,
};

const field =
  "w-full rounded-xl border border-[#DDD4C4] bg-[#FFFBF5] px-4 py-3 text-[15px] text-[#141213] outline-none transition placeholder:text-[#9A9088] focus:border-[#FF6B5B] focus:ring-4 focus:ring-[#FF6B5B]/15";

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");
  const [ref, setRef] = useState("");
  const [delivered, setDelivered] = useState(true);

  const set = <K extends keyof typeof initial>(k: K, v: (typeof initial)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    setErrors({});
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        setMessage(data.message ?? "Please check the form and try again.");
        setState("error");
        return;
      }
      setRef(data.submissionId);
      setDelivered(Boolean(data.delivered));
      setForm(initial);
      setState("done");
    } catch {
      setMessage("Network problem. Please try again, or call us.");
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="flex min-h-[420px] flex-col items-start justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#141213] text-[#FF6B5B]">
          <Icon name="check" size={32} weight="bold" />
        </span>
        <h2 className="mt-8 font-display text-4xl font-semibold tracking-tight text-[#141213]">Thanks, we&apos;ve got it.</h2>
        <p className="mt-4 max-w-md text-[#6B635C]">
          {delivered
            ? "Someone from the team will reply within one business day. If it's urgent, call or WhatsApp us using the numbers beside this form."
            : "Your enquiry was received, but this site isn't connected to our inbox yet. To be sure we see it, please call or WhatsApp us using the numbers beside this form."}
        </p>
        <p className="mt-6 font-mono text-xs text-[#6B635C]">Reference {ref}</p>
        <button
          onClick={() => setState("idle")}
          className="mt-8 rounded-full border border-[#141213]/30 px-5 py-2.5 text-sm font-semibold text-[#141213] hover:bg-[#141213] hover:text-[#F4EDE0]"
        >
          Send another
        </button>
      </div>
    );
  }

  const err = (k: string) =>
    errors[k]?.[0] ? <p className="mt-1.5 text-xs text-red-600">{errors[k][0]}</p> : null;

  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-[#141213]">Full name</span>
          <input className={field} value={form.fullName} onChange={(e) => set("fullName", e.target.value)} autoComplete="name" placeholder="Priya Sharma" />
          {err("fullName")}
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-[#141213]">Work email</span>
          <input className={field} type="email" value={form.businessEmail} onChange={(e) => set("businessEmail", e.target.value)} autoComplete="email" placeholder="priya@company.com" />
          {err("businessEmail")}
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-[#141213]">Company</span>
          <input className={field} value={form.companyName} onChange={(e) => set("companyName", e.target.value)} autoComplete="organization" placeholder="Company name" />
          {err("companyName")}
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-[#141213]">Phone <span className="font-normal text-[#9A9088]">(optional)</span></span>
          <input className={field} type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} autoComplete="tel" placeholder="+91" />
          {err("phone")}
        </label>
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-[#141213]">What are you interested in?</legend>
        <div className="flex flex-wrap gap-2">
          {interestOptions.map((o) => (
            <button
              key={o}
              type="button"
              onClick={() => set("interest", o)}
              aria-pressed={form.interest === o}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition",
                form.interest === o
                  ? "border-[#141213] bg-[#141213] text-[#F4EDE0]"
                  : "border-[#DDD4C4] bg-[#FFFBF5] text-[#141213] hover:border-[#141213]/50"
              )}
            >
              {o}
            </button>
          ))}
        </div>
        {err("interest")}
      </fieldset>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-[#141213]">Monthly call volume <span className="font-normal text-[#9A9088]">(optional)</span></span>
        <select className={field} value={form.callVolume} onChange={(e) => set("callVolume", e.target.value)}>
          <option value="">Select</option>
          {callVolumeOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-[#141213]">Tell us about the calls you want handled</span>
        <textarea className={cn(field, "min-h-[130px] resize-y")} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="What do callers ask for today? Which systems would the agent need to use?" />
        {err("message")}
      </label>

      <label className="flex items-start gap-3 text-sm text-[#6B635C]">
        <input type="checkbox" checked={form.consent} onChange={(e) => set("consent", e.target.checked)} className="mt-1 h-4 w-4 accent-[#FF6B5B]" />
        <span>
          I agree to SHROTAM contacting me about this enquiry, as described in the{" "}
          <a href="/legal/privacy-policy" className="text-[#141213] underline underline-offset-2">Privacy Policy</a>.
        </span>
      </label>
      {err("consent")}

      {state === "error" && (
        <p role="alert" className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#141213] px-8 py-4 text-sm font-semibold text-[#F4EDE0] transition hover:bg-[#FF6B5B] hover:text-[#141213] disabled:opacity-60 sm:w-auto"
      >
        {state === "sending" ? "Sending…" : "Send enquiry"}
        <Icon name="arrow-right" size={16} weight="bold" className="transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
