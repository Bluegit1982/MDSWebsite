import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const testimonials = [
  {
    quote:
      "The transformation in our dog was immediate. We finally had control, confidence, and a calm home again.",
    author: "Emma & Hugo",
    detail: "Puppy classes",
  },
  {
    quote:
      "Every session was clear, supportive, and genuinely tailored to our dog’s needs. The difference was remarkable.",
    author: "Daniel & Ruby",
    detail: "Obedience training",
  },
  {
    quote:
      "Professional, calm, and thoroughly knowledgeable. We felt confident from day one and the results spoke for themselves.",
    author: "Claire & Finn",
    detail: "One-to-one support",
  },
  {
    quote:
      "The structured routine and quality care made such a difference to our dog’s confidence and wellbeing. We would not hesitate to recommend it.",
    author: "Sophie & Milo",
    detail: "Doggy day care",
  },
  {
    quote:
      "Listening to the advice and applying it consistently helped us build a calmer, more reliable dog in just a few weeks.",
    author: "Jacob & Scout",
    detail: "Obedience training",
  },
  {
    quote:
      "We saw the difference in our dog’s behaviour almost immediately, and the support for us as owners was just as valuable.",
    author: "Megan & Bosco",
    detail: "Puppy classes",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F7F2EA]">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C88D42]">Testimonials</p>
            <h1 className="text-4xl font-black tracking-[-0.04em] text-[#173A2A] sm:text-5xl">Kind words from owners we’ve helped.</h1>
            <p className="mt-5 text-lg leading-8 text-[#4B5B5B]">
              Real feedback from families, working dog handlers, and owners who wanted calmer routines, confident dogs, and better communication.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.author} className="rounded-[1.75rem] border border-[#E5DCCB] bg-white p-6 shadow-sm">
                <div className="mb-4 text-[#C88D42]">★★★★★</div>
                <p className="mb-6 text-lg leading-8 text-[#4B5B5B]">“{item.quote}”</p>
                <div className="border-t border-[#E5DCCB] pt-4">
                  <div className="font-bold text-[#173A2A]">{item.author}</div>
                  <div className="text-sm text-[#4B5B5B]">{item.detail}</div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] border border-[#E5DCCB] bg-[#173A2A] px-6 py-12 text-center text-white sm:px-8">
            <h2 className="text-3xl font-black tracking-[-0.04em]">Ready for the same support?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#DDE7E2]">
              We’ll help you understand which programme is the best fit for your dog and the goals you want to achieve.
            </p>
            <div className="mt-6 flex justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-semibold text-[#173A2A] transition hover:bg-[#F4EFE7]">
                Book a consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
