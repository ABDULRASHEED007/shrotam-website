import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactPhones } from "@/components/contact/ContactPhones";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to SHROTAM about AI voice agents. Send an enquiry, call or message us on WhatsApp.",
};

export default function ContactPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-[5fr_6fr]">
      <ContactPhones />
      <section className="bg-[#F4EDE0] px-4 pb-24 pt-16 sm:px-10 lg:px-16 lg:pt-36">
        <div className="mx-auto max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B5B]">Send an enquiry</p>
          <h2 className="mb-10 mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-[#141213] sm:text-4xl">
            Tell us about your calls.
          </h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
