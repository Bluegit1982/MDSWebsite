import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#E5DCCB] bg-[#173A2A] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-base font-bold text-[#173A2A]">
              M
            </div>
            <div>
              <div className="text-lg font-bold">Mellor Dog School</div>
              <div className="text-xs uppercase tracking-[0.18em] text-[#DDE7E2]">Training & care</div>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#DDE7E2]">
            Premium dog training and support for puppies, family dogs, working dogs, and behaviour-focused programmes.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#E8D3A7]">Services</h3>
          <ul className="space-y-3 text-sm text-[#DDE7E2]">
            <li><Link href="/puppy-classes">Puppy classes</Link></li>
            <li><Link href="/doggy-day-care">Doggy day care</Link></li>
            <li><Link href="/obedience-training">Obedience training</Link></li>
            <li><Link href="/gundog-training">Gundog training</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#E8D3A7]">Company</h3>
          <ul className="space-y-3 text-sm text-[#DDE7E2]">
            <li><Link href="/success-stories">Success stories</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#E8D3A7]">Contact</h3>
          <ul className="space-y-3 text-sm text-[#DDE7E2]">
            <li>hello@mellordogschool.co.uk</li>
            <li>Call us for a consultation</li>
            <li><Link href="/contact">Book a consultation</Link></li>
            <li><Link href="/privacy-policy">Privacy policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
