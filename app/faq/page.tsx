import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const faqs = [
  {
    question: "What is the best programme for a new puppy?",
    answer: "Most new puppies benefit from early socialisation and foundation training. This helps build confidence, good manners, and a clearer routine from the start.",
  },
  {
    question: "Do you offer support for behavioural issues?",
    answer: "Yes. One-to-one training is often the best fit for specific behavioural concerns because the sessions can be tailored around your dog’s needs and your home environment.",
  },
  {
    question: "Can my dog attend day care regularly?",
    answer: "Yes. We can discuss routines, welfare needs, and suitability based on your dog’s temperament and energy levels.",
  },
  {
    question: "How long does training usually take?",
    answer: "This depends on the programme, your dog, and the goals you want to work on. Progress is usually gradual and consistent, with results building over time.",
  },
  {
    question: "Is your approach reward-based?",
    answer: "Yes. We use positive, reward-based methods that support confidence, learning, and a strong owner-dog relationship.",
  },
  {
    question: "How do I get started?",
    answer: "The easiest first step is to contact us with a few details about your dog and the type of support you need. We’ll recommend the right programme and next steps.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F7F2EA]">
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C88D42]">FAQ</p>
            <h1 className="text-4xl font-black tracking-[-0.04em] text-[#173A2A] sm:text-5xl">Answers to the questions we hear most often.</h1>
          </div>

          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.question} className="rounded-[1.5rem] border border-[#E5DCCB] bg-white p-5 shadow-sm open:bg-[#F7F2EA]">
                <summary className="cursor-pointer list-none text-lg font-semibold text-[#173A2A]">{item.question}</summary>
                <p className="mt-4 text-base leading-7 text-[#4B5B5B]">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
