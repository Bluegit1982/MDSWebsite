import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const stories = [
  {
    title: "From chaotic recall to calm reliability",
    summary:
      "A young dog with poor recall and overexcitement became much easier to manage after a structured obedience programme and owner coaching.",
    result: "Improved recall and calmer walks within 6 weeks",
  },
  {
    title: "Confidence building for a nervous puppy",
    summary:
      "A rescue puppy needed support with confidence, socialisation, and household routines. Early training gave the family a calmer beginning together.",
    result: "Better confidence and stronger home routines in 8 weeks",
  },
  {
    title: "Working dog progression with clearer handling",
    summary:
      "A handler looking for stronger field control and confidence improved communication and reliability through a progressive working dog plan.",
    result: "Better control and smoother handling under field conditions",
  },
];

export default function SuccessStoriesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F7F2EA]">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C88D42]">Success stories</p>
            <h1 className="text-4xl font-black tracking-[-0.04em] text-[#173A2A] sm:text-5xl">Real progress, measurable outcomes.</h1>
            <p className="mt-5 text-lg leading-8 text-[#4B5B5B]">
              A consistent approach, tailored support, and owner guidance can make a major difference. These examples show how focused training creates lasting change.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {stories.map((story) => (
              <article key={story.title} className="rounded-[1.75rem] border border-[#E5DCCB] bg-white p-6 shadow-sm">
                <div className="mb-4 h-2 w-20 rounded-full bg-gradient-to-r from-[#173A2A] to-[#C88D42]" />
                <h2 className="mb-3 text-2xl font-black tracking-[-0.03em] text-[#173A2A]">{story.title}</h2>
                <p className="mb-5 text-base leading-7 text-[#4B5B5B]">{story.summary}</p>
                <div className="rounded-2xl bg-[#F7F2EA] p-4 text-sm font-semibold text-[#173A2A]">{story.result}</div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] bg-[#173A2A] p-8 text-center text-white sm:p-10">
            <h2 className="text-3xl font-black tracking-[-0.04em]">Need help with a specific challenge?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#DDE7E2]">
              We’ll assess the right route for your dog and give honest guidance on the best programme to move forward with confidence.
            </p>
            <div className="mt-6 flex justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-semibold text-[#173A2A] transition hover:bg-[#F4EFE7]">
                Enquire today
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
