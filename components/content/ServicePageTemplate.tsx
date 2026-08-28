"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export type FeatureItem = {
  title: string;
  description: string;
};

export type TimelineItem = {
  title: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type TimetableSlot = {
  label: string;
  time: string;
};

export type TimetableDay = {
  day: string;
  sessions: TimetableSlot[];
};

type ServicePageTemplateProps = {
  eyebrow: string;
  title: string;
  intro: string;
  stats: { label: string; value: string }[];
  features: FeatureItem[];
  timeline: TimelineItem[];
  faqs: FAQItem[];
  timetable?: TimetableDay[];
};

export function ServicePageTemplate({
  eyebrow,
  title,
  intro,
  stats,
  features,
  timeline,
  faqs,
  timetable,
}: ServicePageTemplateProps) {
  return (
    <>
      <Header />
      <main className="bg-[#F7F2EA] text-[#173A2A]">
      <section className="border-b border-[#E5DCCB] bg-[#F7F2EA]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#C88D42]">{eyebrow}</p>
            <h1 className="max-w-xl text-4xl font-black tracking-[-0.04em] text-[#173A2A] sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#4B5B5B]">{intro}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#173A2A] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#214b3c]">
                Enquire now
              </Link>
              <Link href="/faq" className="inline-flex items-center justify-center rounded-full border border-[#173A2A] bg-white px-6 py-3.5 text-base font-semibold text-[#173A2A] transition hover:bg-[#F4EFE7]">
                Read FAQs
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45 }} className="relative">
            <div className="absolute -left-6 top-12 h-20 w-20 rounded-full bg-[#D77A5B]/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[#E5DCCB] bg-white p-5 shadow-lg">
              <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#173A2A_0%,#2C5647_35%,#D7A35A_100%)] p-7 text-white">
                <div className="mb-8 flex items-center justify-between">
                  <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]">Programme overview</span>
                  <span className="rounded-full bg-[#F7F2EA] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#173A2A]">Supportive</span>
                </div>

                <div className="space-y-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                      <div className="text-2xl font-black tracking-[-0.04em]">{stat.value}</div>
                      <div className="mt-1 text-sm text-white/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C88D42]">What to expect</p>
          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#173A2A] sm:text-4xl">A structured, confidence-building approach.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-[1.5rem] border border-[#E5DCCB] bg-white p-6 shadow-sm">
              <div className="mb-4 h-10 w-10 rounded-full bg-[#F7F2EA]" />
              <h3 className="mb-3 text-xl font-bold text-[#173A2A]">{feature.title}</h3>
              <p className="text-base leading-7 text-[#4B5B5B]">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {timetable && timetable.length > 0 ? (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C88D42]">Timetable</p>
              <h2 className="text-3xl font-black tracking-[-0.04em] text-[#173A2A] sm:text-4xl">A weekly rhythm built around your dog’s learning.</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {timetable.map((day) => (
                <div key={day.day} className="rounded-[1.5rem] border border-[#E5DCCB] bg-[#F7F2EA] p-5 shadow-sm">
                  <h3 className="mb-4 text-xl font-bold text-[#173A2A]">{day.day}</h3>
                  <ul className="space-y-3">
                    {day.sessions.map((session) => (
                      <li key={`${day.day}-${session.label}`} className="rounded-2xl bg-white p-3">
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
      ) : null}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C88D42]">Progression</p>
            <h2 className="text-3xl font-black tracking-[-0.04em] text-[#173A2A] sm:text-4xl">A clear training journey from start to success.</h2>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={item.title} className="flex gap-5 rounded-[1.5rem] border border-[#E5DCCB] bg-[#F7F2EA] p-5 sm:p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#173A2A] text-sm font-bold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-[#173A2A]">{item.title}</h3>
                  <p className="text-base leading-7 text-[#4B5B5B]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C88D42]">FAQ</p>
          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#173A2A] sm:text-4xl">Common questions answered clearly.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-[1.5rem] border border-[#E5DCCB] bg-white p-5 shadow-sm open:bg-[#F7F2EA]">
              <summary className="cursor-pointer list-none text-lg font-semibold text-[#173A2A]">{faq.question}</summary>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[#4B5B5B]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-[2rem] border border-[#E5DCCB] bg-[#F7F2EA] px-6 py-12 text-center sm:px-8 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C88D42]">Need help choosing?</p>
          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#173A2A] sm:text-4xl">Tell us about your dog and we’ll recommend the right programme.</h2>
          <div className="flex justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#173A2A] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#214b3c]">
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
