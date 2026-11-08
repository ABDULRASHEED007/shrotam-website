import React from "react";
import { legalEntity } from "@/config/legal";
import { siteConfig } from "@/config/site";
import { siteContact } from "@/config/contact";

export function LegalEntityNotice() {
  return (
    <div className="mb-8 p-5 rounded-2xl border border-[#DDD4C4] bg-[#FFFBF5] text-xs text-[#6B635C] space-y-2">
      <p className="font-bold text-[#141213]">Configured entity placeholders</p>
      <ul className="space-y-1 font-mono text-[11px]">
        <li>Brand: {siteConfig.name}</li>
        <li>Legal entity: {legalEntity.registeredLegalName}</li>
        <li>Address: {legalEntity.registeredAddress}</li>
        <li>Legal email: {legalEntity.legalContactEmail}</li>
        <li>Privacy email: {legalEntity.privacyContactEmail}</li>
        <li>Phone: {siteContact.phone1.display} · {siteContact.phone2.display}</li>
      </ul>
    </div>
  );
}
