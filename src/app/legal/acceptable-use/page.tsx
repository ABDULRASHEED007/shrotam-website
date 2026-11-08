import { getLegalDocument } from "@/config/legal";
import { buildLegalMetadata, LegalDocumentLayout } from "@/components/legal/LegalDocumentLayout";
import { acceptableUseSections } from "@/content/legal/acceptable-use";

const document = getLegalDocument("acceptable-use")!;

export const metadata = buildLegalMetadata(document);

export default function AcceptableUsePage() {
  return <LegalDocumentLayout document={document} sections={acceptableUseSections} />;
}
