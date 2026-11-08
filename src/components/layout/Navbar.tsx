"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div
        className={cn(
          "pointer-events-auto mx-auto flex max-w-6xl items-center justify-between rounded-full bg-[#F4EDE0] py-2 pl-3 pr-2 ring-1 transition-all duration-300 sm:pl-4",
          scrolled
            ? "shadow-[0_12px_40px_-12px_rgba(20,18,19,0.35)] ring-[#141213]/10"
            : "shadow-[0_8px_30px_-16px_rgba(20,18,19,0.4)] ring-[#141213]/5"
        )}
      >
        <Link href="/" className="flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B5B]">
          <span className="flex size-9 items-center justify-center rounded-full bg-[#141213] text-[#FF6B5B]">
            <span className="font-display text-sm font-bold">S</span>
          </span>
          <span className="font-display text-base font-bold tracking-tight text-[#141213]">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {siteConfig.navigation.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active ? "bg-[#141213] text-[#F4EDE0]" : "text-[#4A4345] hover:bg-[#141213]/8 hover:text-[#141213]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden h-10 items-center rounded-full bg-[#FF6B5B] px-5 text-sm font-semibold text-[#141213] transition-colors hover:bg-[#ff8173] sm:inline-flex"
          >
            Book a demo
          </Link>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full bg-[#141213] text-[#F4EDE0] lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="pointer-events-auto mx-auto mt-2 max-w-6xl rounded-3xl bg-[#F4EDE0] p-3 shadow-xl ring-1 ring-[#141213]/10 lg:hidden">
          <nav className="flex flex-col">
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-3 text-base font-medium text-[#141213] hover:bg-[#EBE3D6]">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-2 rounded-full bg-[#FF6B5B] px-4 py-3 text-center text-sm font-semibold text-[#141213]">
              Book a demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
