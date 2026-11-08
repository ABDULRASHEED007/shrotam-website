import type { Metadata } from "next";
import { ProcessJourney } from "@/components/process/ProcessJourney";

export const metadata: Metadata = {
  title: "How we work",
  description:
    "From discovery to launch: how SHROTAM designs, builds, tests and launches production AI voice agents.",
};

export default function ProcessPage() {
  return <ProcessJourney />;
}
