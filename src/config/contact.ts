/**
 * Centralized contact configuration for SHROTAM.
 * Telephone and WhatsApp links are derived from E.164 digits — do not hardcode elsewhere.
 */

export const WHATSAPP_PREFILL_MESSAGE =
  "Hello Shrotam, I'm interested in your AI voice agents and would like to discuss a use case.";

export interface SitePhone {
  /** Human-readable display, e.g. +91 98311 45452 */
  display: string;
  /** Digits only with country code, e.g. 919831145452 */
  e164Digits: string;
}

export interface SiteContactConfig {
  countryCode: string;
  phone1: SitePhone;
  phone2: SitePhone;
  /** Primary business email — confirm before publication */
  email: string;
  /** Optional WhatsApp default line (defaults to phone1) */
  defaultWhatsAppPhone: "phone1" | "phone2";
}

export const siteContact: SiteContactConfig = {
  countryCode: "+91",
  phone1: {
    display: "+91 98311 45452",
    e164Digits: "919831145452",
  },
  phone2: {
    display: "+91 77498 45146",
    e164Digits: "917749845146",
  },
  email: "[CONFIGURE: contact@your-official-domain.com]",
  defaultWhatsAppPhone: "phone1",
};

export function telLink(phone: SitePhone): string {
  return `tel:+${phone.e164Digits}`;
}

export function whatsAppLink(
  phone: SitePhone,
  message: string = WHATSAPP_PREFILL_MESSAGE
): string {
  return `https://wa.me/${phone.e164Digits}?text=${encodeURIComponent(message)}`;
}

export const sitePhones = [siteContact.phone1, siteContact.phone2] as const;
