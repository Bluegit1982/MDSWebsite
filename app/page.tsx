import Link from "next/link";
import { ArrowRight, CheckCircle2, PawPrint, ShieldCheck, Star } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceCard } from "@/components/marketing/ServiceCard";
import { services, stats, testimonials } from "@/lib/site-data";

const timetable = [
  {
    day: "Monday",
    badge: "Puppies & manners",
    sessions: [
      { label: "Puppy classes", time: "9:30am – 10:30am" },
      { label: "One-to-one support", time: "6:00pm – 7:00pm" },
    ],
  },
  {
    day: "Tuesday",
    badge: "Day care",
    sessions: [
      { label: "Doggy day care", time: "8:00am – 3:30pm" },
      { label: "Recall refresh", time: "5:30pm – 6:15pm" },
    ],
  },
  {
    day: "Wednesday",
    badge: "Obedience",
    sessions: [
      { label: "Foundation obedience", time: "10:00am – 11:00am" },
      { label: "Small group training", time: "6:30pm – 7:30pm" },
    ],
  },
  {
    day: "Thursday",
    badge: "Working dogs",
    sessions: [
      { label: "Gundog training", time: "9:00am – 11:00am" },
      { label: "Protection prep", time: "6:00pm – 7:30pm" },
    ],
  },
  {
    day: "Friday",
    badge: "Progression",
    sessions: [
      { label: "Behaviour plans", time: "9:30am – 10:30am" },
      { label: "Owner coaching", time: "4:30pm – 5:30pm" },
    ],
  },
  {
    day: "Saturday",
    badge: "Group sessions",
    sessions: [
      { label: "Puppy socialisation", time: "9:00am – 10:00am" },
      { label: "Open obedience clinic", time: "10:30am – 12:00pm" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-[#F7F2EA]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#D8CCB3] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#173A2A]">
                <PawPrint size={14} />
                Trusted dog training for real life results
              </div>
              <h1 className="max-w-xl text-4xl font-black leading-tight tracking-[-0.04em] text-[#173A2A] sm:text-5xl lg:text-6xl">
                Calm, confident dogs start with the right training.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#4B5B5B]">
                Mellor Dog School helps owners build stronger relationships, better behaviour, and a more relaxed everyday home through expert, humane training.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#173A2A] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#214b3c]"
                >
                  Book a consultation
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/puppy-classes"
                  className="inline-flex items-center justify-center rounded-full border border-[#173A2A] bg-white px-6 py-3.5 text-base font-semibold text-[#173A2A] transition hover:bg-[#F4EFE7]"
                >
                  Explore services
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-[#4B5B5B]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-[#173A2A]" size={18} />
                  Reward-based methods
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-[#173A2A]" size={18} />
                  Tailored programmes
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-[#D77A5B]/15 blur-2xl" />
              <div className="absolute -right-4 bottom-8 h-32 w-32 rounded-full bg-[#C88D42]/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[#E5DCCB] bg-white p-4 shadow-xl">
                <div className="h-[520px] rounded-[1.5rem] bg-[radial-gradient(circle_at_top,_rgba(200,141,66,0.35),_transparent_35%),linear-gradient(135deg,#173A2A_0%,#2A5142_35%,#D7A35A_100%)] p-7 text-white">
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em]">Mellor Dog School</span>
                      <span className="rounded-full bg-[#F7F2EA] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#173A2A]">Results-focused</span>
                    </div>

                    <div className="space-y-5">
                      <div className="text-3xl font-black tracking-[-0.04em]">Better behaviour. More confidence. Happier dogs.</div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                          <div className="text-2xl font-black">1:1</div>
                          <div className="mt-1 text-white/80">Personal guidance</div>
                        </div>
                        <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                          <div className="text-2xl font-black">15+</div>
                          <div className="mt-1 text-white/80">Years training</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#E5DCCB] bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-4 sm:px-6 lg:px-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black tracking-[-0.05em] text-[#173A2A]">{stat.value}</div>
                <div className="mt-2 text-sm text-[#4B5B5B]">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#F7F2EA] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-2xl sm:mb-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C88D42]">Our programmes</p>
              <h2 className="text-3xl font-black tracking-[-0.04em] text-[#173A2A] sm:text-4xl">Support for every stage of your dog’s journey.</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  accent={service.accent}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="rounded-[2rem] bg-[#173A2A] p-8 text-white shadow-[0_20px_60px_rgba(23,58,42,0.16)]">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#E8D3A7]">Why owners choose us</p>
              <h2 className="text-3xl font-black tracking-[-0.04em]">Expert guidance, practical support, measurable progress.</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                "Reward-based training that works in real life",
                "Clear programmes designed around your dog’s needs",
                "Supportive coaching for both dogs and owners",
                "Professional, calm, and confidence-building methods",
              ].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-[#E5DCCB] bg-[#F7F2EA] p-6">
                  <CheckCircle2 className="mb-4 text-[#173A2A]" size={24} />
                  <p className="text-lg font-medium leading-7 text-[#173A2A]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F2EA] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-2xl sm:mb-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C88D42]">Weekly timetable</p>
              <h2 className="text-3xl font-black tracking-[-0.04em] text-[#173A2A] sm:text-4xl">Flexible classes and sessions to suit your routine.</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {timetable.map((day) => (
                <div key={day.day} className="rounded-[1.5rem] border border-[#E5DCCB] bg-white p-5 shadow-[0_12px_30px_rgba(23,58,42,0.06)] transition-transform duration-200 hover:-translate-y-0.5">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-[#173A2A]">{day.day}</h3>
                    <span className="rounded-full bg-[#F7F2EA] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#173A2A]">
                      {day.badge}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {day.sessions.map((session) => (
                      <li key={`${day.day}-${session.label}`} className="rounded-2xl bg-[#F7F2EA] p-3">
                        <div className="text-sm font-semibold text-[#173A2A]">{session.label}</div>
                        <div className="mt-1 text-sm text-[#4B5B5B]">{session.time}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F2EA] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between gap-6 sm:mb-10">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C88D42]">Success stories</p>
                <h2 className="text-3xl font-black tracking-[-0.04em] text-[#173A2A] sm:text-4xl">Real results, real confidence.</h2>
              </div>
              <Link href="/success-stories" className="hidden text-sm font-semibold text-[#173A2A] sm:inline-flex">
                View all stories →
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article key={testimonial.author} className="rounded-[1.75rem] border border-[#E5DCCB] bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-1 text-[#C88D42]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mb-6 text-lg leading-8 text-[#4B5B5B]">“{testimonial.quote}”</p>
                  <div className="border-t border-[#E5DCCB] pt-4 text-sm font-semibold text-[#173A2A]">{testimonial.author}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-[2rem] border border-[#E5DCCB] bg-[#F7F2EA] px-6 py-12 text-center shadow-[0_20px_60px_rgba(23,58,42,0.08)] sm:px-8 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C88D42]">Ready to start?</p>
            <h2 className="text-3xl font-black tracking-[-0.04em] text-[#173A2A] sm:text-4xl">Let’s build a calmer, happier routine with your dog.</h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-[#4B5B5B]">
              Whether you are beginning with a puppy, tackling specific behaviour challenges, or looking for a tailored programme, we can help you find the right next step.
            </p>
            <div className="flex justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#173A2A] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#214b3c]">
                Enquire today
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
