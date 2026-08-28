import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F7F2EA]">
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C88D42]">Privacy policy</p>
            <h1 className="text-4xl font-black tracking-[-0.04em] text-[#173A2A] sm:text-5xl">How we manage your information.</h1>
          </div>

          <div className="space-y-6 rounded-[2rem] border border-[#E5DCCB] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-base leading-7 text-[#4B5B5B]">
              Mellor Dog School takes your privacy seriously. Any personal information we collect is used only to respond to enquiries, provide training and care support, and communicate about services you may be interested in.
            </p>

            <div>
              <h2 className="mb-2 text-xl font-bold text-[#173A2A]">Information we may collect</h2>
              <p className="text-base leading-7 text-[#4B5B5B]">
                We may collect details such as your name, email address, phone number, dog details, and any information you provide in an enquiry form or email.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-bold text-[#173A2A]">How we use it</h2>
              <p className="text-base leading-7 text-[#4B5B5B]">
                This information is used to assess your enquiry, respond to your message, and provide appropriate support or guidance. We do not sell or share your personal details for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-bold text-[#173A2A]">Data retention</h2>
              <p className="text-base leading-7 text-[#4B5B5B]">
                We retain information only as long as necessary to manage enquiries and provide the service requested, in line with reasonable business practice and legal compliance.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-bold text-[#173A2A]">Contact</h2>
              <p className="text-base leading-7 text-[#4B5B5B]">
                If you would like to ask a question about your data or request that it be updated or removed, please get in touch through the contact page.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
