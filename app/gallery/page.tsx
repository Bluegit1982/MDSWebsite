import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const galleryItems = [
  { title: "Puppy socialisation", color: "from-[#173A2A] to-[#2A5142]" },
  { title: "Obedience sessions", color: "from-[#C88D42] to-[#D7A35A]" },
  { title: "Day care moments", color: "from-[#7EA28D] to-[#96B7A0]" },
  { title: "Field training", color: "from-[#D77A5B] to-[#E89A7A]" },
  { title: "Working dog practice", color: "from-[#4B5B5B] to-[#6C7A7A]" },
  { title: "Happy clients", color: "from-[#173A2A] to-[#5C7B69]" },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F7F2EA]">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C88D42]">Gallery</p>
            <h1 className="text-4xl font-black tracking-[-0.04em] text-[#173A2A] sm:text-5xl">A look at the training and care environment.</h1>
            <p className="mt-5 text-lg leading-8 text-[#4B5B5B]">
              The focus is always on calm learning, safe socialisation, positive routines, and a supportive environment for dogs and owners.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {galleryItems.map((item) => (
              <div key={item.title} className="group overflow-hidden rounded-[1.75rem] border border-[#E5DCCB] bg-white shadow-sm">
                <div className={`h-72 bg-gradient-to-br ${item.color} p-6`} />
                <div className="p-5">
                  <h2 className="text-xl font-bold text-[#173A2A]">{item.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
