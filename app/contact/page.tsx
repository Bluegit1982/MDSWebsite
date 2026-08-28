import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to book a dog training consultation and discuss the right programme for your dog.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F7F2EA]">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C88D42]">Contact</p>
            <h1 className="text-4xl font-black tracking-[-0.04em] text-[#173A2A] sm:text-5xl">Let’s talk about your dog.</h1>
            <p className="mt-5 text-lg leading-8 text-[#4B5B5B]">
              Share a few details and we’ll help you choose the right programme based on your dog’s needs, age, and goals.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6 rounded-[2rem] bg-[#173A2A] p-8 text-white">
              <div>
                <h2 className="text-2xl font-black">Get in touch</h2>
                <p className="mt-3 text-base leading-7 text-[#DDE7E2]">
                  Whether you’re starting with a puppy, working on behaviour, or looking for specialist support, we’re here to help.
                </p>
              </div>

              <div className="space-y-4 text-sm text-[#DDE7E2]">
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div>hello@mellordogschool.co.uk</div>
                </div>
                <div>
                  <div className="font-semibold text-white">Phone</div>
                  <div>Available on request</div>
                </div>
                <div>
                  <div className="font-semibold text-white">Service area</div>
                  <div>North West and surrounding areas</div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
