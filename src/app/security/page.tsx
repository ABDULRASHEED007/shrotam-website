import type { Metadata } from "next";
import { SecurityLayers } from "@/components/security/SecurityLayers";

export const metadata: Metadata = {
  title: "Security & AI voice controls",
  description:
    "How SHROTAM protects AI voice agent deployments: encryption, tenant isolation, least-privilege access, model controls, retention and auditability.",
};

export default function SecurityPage() {
  return <SecurityLayers />;
}
