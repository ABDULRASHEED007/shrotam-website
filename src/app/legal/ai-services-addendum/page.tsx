import { getLegalDocument } from "@/config/legal";
import { buildLegalMetadata, LegalDocumentLayout } from "@/components/legal/LegalDocumentLayout";
import { aiServicesAddendumSections } from "@/content/legal/ai-services-addendum";

const document = getLegalDocument("ai-services-addendum")!;

export const metadata = buildLegalMetadata(document);

export default function AiServicesAddendumPage() {
  return <LegalDocumentLayout document={document} sections={aiServicesAddendumSections} />;
}
