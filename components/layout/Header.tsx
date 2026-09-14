"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { navItems } from "@/lib/site-data";

export function Header() {
  const [showHeatAlert, setShowHeatAlert] = useState(true);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5DCCB] bg-[#F7F2EA]/95 backdrop-blur-sm">
      {showHeatAlert ? (
        <div role="alert" className="border-b-2 border-[#B45309] bg-[#FFD43B] text-[#422006]">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
            <p className="text-sm font-bold leading-6 sm:text-base">
              <span className="mr-2" aria-hidden="true">☀️</span>
              Temporary closure: Mellor Dog School is closed for the next few days due to the heat.
              Please check back soon for updates.
            </p>
            <button
              type="button"
              onClick={() => setShowHeatAlert(false)}
              aria-label="Close heat closure notice"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#422006] text-[#422006] transition hover:bg-[#422006] hover:text-[#FFD43B]"
            >
              <X size={18} strokeWidth={3} />
            </button>
          </div>
        </div>
      ) : null}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Mellor Dog School home">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#173A2A] text-lg font-bold text-white">
            M
          </div>
          <div>
            <div className="text-lg font-bold tracking-tight text-[#173A2A]">Mellor Dog School</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#4B5B5B]">Professional training</div>
          </div>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#4B5B5B] transition hover:text-[#173A2A]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-[#173A2A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#214b3c] sm:inline-flex"
          >
            Enquire today
          </Link>
          <button
            type="button"
            aria-label="Open navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D8CCB3] bg-white text-[#173A2A] lg:hidden"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
