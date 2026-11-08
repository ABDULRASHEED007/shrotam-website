import { getLegalDocument } from "@/config/legal";
import { buildLegalMetadata, LegalDocumentLayout } from "@/components/legal/LegalDocumentLayout";
import { securityOverviewSections } from "@/content/legal/security-overview";

const document = getLegalDocument("security-overview")!;

export const metadata = buildLegalMetadata(document);

export default function SecurityOverviewLegalPage() {
  return <LegalDocumentLayout document={document} sections={securityOverviewSections} />;
}
