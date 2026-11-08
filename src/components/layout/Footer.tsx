import Link from "next/link";
import { siteConfig } from "@/config/site";
import { siteContact, telLink } from "@/config/contact";

const product = [
  { label: "Solutions", href: "/solutions" },
  { label: "How we work", href: "/process" },
  { label: "Security", href: "/security" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms of Service", href: "/legal/terms-of-service" },
  { label: "Security Overview", href: "/legal/security-overview" },
  { label: "AI Services Addendum", href: "/legal/ai-services-addendum" },
  { label: "Subprocessors", href: "/legal/subprocessors" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-[#141213] text-[#F4EDE0]">
      <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-semibold leading-snug tracking-tight">
              AI voice agents that answer, resolve and hand off.
            </p>
            <div className="mt-6 space-y-1 font-mono text-sm text-[#F4EDE0]/60">
              <a href={telLink(siteContact.phone1)} className="block hover:text-[#FF6B5B]">{siteContact.phone1.display}</a>
              <a href={telLink(siteContact.phone2)} className="block hover:text-[#FF6B5B]">{siteContact.phone2.display}</a>
            </div>
          </div>

          <nav className="md:col-span-3 md:col-start-7" aria-label="Product">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#F4EDE0]/45">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {product.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#F4EDE0]/80 transition-colors hover:text-[#FF6B5B]">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-3" aria-label="Legal">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#F4EDE0]/45">Legal</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#F4EDE0]/80 transition-colors hover:text-[#FF6B5B]">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-[#F4EDE0]/45 sm:flex-row sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <Link href="/legal" className="hover:text-[#FF6B5B]">Legal Center</Link>
        </div>
      </div>

      <p
        aria-hidden
        className="pointer-events-none -mb-[0.18em] select-none text-center font-display text-[19vw] font-semibold leading-none tracking-[-0.05em] text-transparent [-webkit-text-stroke:1.5px_rgba(244,237,224,0.14)]"
      >
        SHROTAM
      </p>
    </footer>
  );
}
