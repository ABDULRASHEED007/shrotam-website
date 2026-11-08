import { getLegalDocument, legalEntity } from "@/config/legal";
import { buildLegalMetadata, LegalDocumentLayout } from "@/components/legal/LegalDocumentLayout";
import { responsibleDisclosureSections } from "@/content/legal/responsible-disclosure";

const document = getLegalDocument("responsible-disclosure")!;

export const metadata = buildLegalMetadata(document);

export default function ResponsibleDisclosurePage() {
  return (
    <LegalDocumentLayout document={document} sections={responsibleDisclosureSections}>
      <p className="mb-6 text-sm text-[#6B635C]">
        Security contact (configure before publication):{" "}
        <span className="font-mono text-[#141213]">{legalEntity.securityContactEmail}</span>
      </p>
    </LegalDocumentLayout>
  );
}
