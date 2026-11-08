import { getLegalDocument } from "@/config/legal";
import { buildLegalMetadata, LegalDocumentLayout } from "@/components/legal/LegalDocumentLayout";
import { termsOfServiceSections } from "@/content/legal/terms-of-service";
import { LegalEntityNotice } from "@/components/legal/LegalEntityNotice";

const document = getLegalDocument("terms-of-service")!;

export const metadata = buildLegalMetadata(document);

export default function TermsOfServicePage() {
  return (
    <LegalDocumentLayout document={document} sections={termsOfServiceSections}>
      <LegalEntityNotice />
    </LegalDocumentLayout>
  );
}
