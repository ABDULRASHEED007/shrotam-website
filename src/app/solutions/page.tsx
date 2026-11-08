import type { Metadata } from "next";
import { SolutionsIndex } from "@/components/solutions/SolutionsIndex";

export const metadata: Metadata = {
  title: "Voice agent solutions",
  description:
    "Inbound support, outbound sales, collections, loyalty, appointment booking and IVR replacement, delivered as configured AI voice agents.",
};

export default function SolutionsPage() {
  return <SolutionsIndex />;
}
