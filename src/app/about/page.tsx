import type { Metadata } from "next";
import { AboutStory } from "@/components/about/AboutStory";

export const metadata: Metadata = {
  title: "About",
  description: "SHROTAM is an AI voice-agent studio building production agents for inbound and outbound calls.",
};

export default function AboutPage() {
  return <AboutStory />;
}
