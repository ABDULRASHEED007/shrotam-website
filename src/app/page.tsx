import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { CallStory } from "@/components/home/CallStory";
import { UseCaseTrack } from "@/components/home/UseCaseTrack";
import { SystemMap } from "@/components/home/SystemMap";
import { WordReveal } from "@/components/home/WordReveal";
import { SecurityBand } from "@/components/home/SecurityBand";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "SHROTAM | AI Voice Agents for Business",
  description:
    "SHROTAM builds production AI voice agents for inbound support, outbound sales, collections, appointments and IVR replacement.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CallStory />
      <UseCaseTrack />
      <section className="bg-[#F4EDE0] px-4 py-32 sm:px-6 lg:px-8 lg:py-44">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B5B]">Our view</p>
          <WordReveal
            className="text-3xl sm:text-5xl lg:text-6xl"
            text="Every call is a promise your brand makes out loud. We build voice agents that keep it: grounded in your data, honest about what they can't do, and quick to bring in a human."
          />
        </div>
      </section>
      <SystemMap />
      <SecurityBand />
      <CtaSection />
    </>
  );
}
