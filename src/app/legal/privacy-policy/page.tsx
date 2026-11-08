import { getLegalDocument } from "@/config/legal";
import { buildLegalMetadata, LegalDocumentLayout } from "@/components/legal/LegalDocumentLayout";
import { privacyPolicySections } from "@/content/legal/privacy-policy";
import { LegalEntityNotice } from "@/components/legal/LegalEntityNotice";

const document = getLegalDocument("privacy-policy")!;

export const metadata = buildLegalMetadata(document);

export default function PrivacyPolicyPage() {
  return (
    <LegalDocumentLayout document={document} sections={privacyPolicySections}>
      <LegalEntityNotice />
    </LegalDocumentLayout>
  );
}
