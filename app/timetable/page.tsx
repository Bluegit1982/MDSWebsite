import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Weekly Timetable",
  description: "View the weekly timetable for puppy classes, day care, obedience, gundog, and one-to-one dog training sessions.",
};

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

export default function TimetablePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-[#F7F2EA] text-[#173A2A]">
        <section className="border-b border-[#E5DCCB] bg-[#F7F2EA]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#C88D42]">Weekly timetable</p>
            <h1 className="max-w-3xl text-4xl font-black tracking-[-0.04em] text-[#173A2A] sm:text-5xl">
              Flexible dog training sessions designed around real routines.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4B5B5B]">
              Explore the weekly schedule for puppy classes, obedience, day care, working dog training, and personalised support.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#173A2A] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#214b3c]">
                Enquire today
              </Link>
              <Link href="/" className="inline-flex items-center justify-center rounded-full border border-[#173A2A] bg-white px-6 py-3.5 text-base font-semibold text-[#173A2A] transition hover:bg-[#F4EFE7]">
                Back home
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {timetable.map((day) => (
              <div key={day.day} className="rounded-[1.5rem] border border-[#E5DCCB] bg-white p-5 shadow-[0_12px_30px_rgba(23,58,42,0.06)]">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h2 className="text-xl font-bold text-[#173A2A]">{day.day}</h2>
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
        </section>
      </main>
      <Footer />
    </>
  );
}
