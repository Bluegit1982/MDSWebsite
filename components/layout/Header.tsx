import Link from "next/link";
import { navItems } from "@/lib/site-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E5DCCB] bg-[#F7F2EA]/95 backdrop-blur-sm">
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
