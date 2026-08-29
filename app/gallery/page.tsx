import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const galleryItems = [
  {
    title: "Puppy socialisation",
    category: "Puppies",
    src: "https://static.wixstatic.com/media/fb83cc_5e00c4a9a4094323a612e4317c5f10b8~mv2.png",
    alt: "Puppy being gently socialised in a calm training environment",
    position: "center center",
  },
  {
    title: "Obedience sessions",
    category: "Training",
    src: "https://static.wixstatic.com/media/fb83cc_e8dc35b980614277b0eadf194a3fbb5b~mv2.png",
    alt: "Dog learning obedience cues during a structured class",
    position: "center center",
  },
  {
    title: "Day care moments",
    category: "Day care",
    src: "https://static.wixstatic.com/media/fb83cc_0c066684d5ec4c70999b3f8d54916020~mv2.jpg",
    alt: "Dog enjoying supervised play and enrichment in a day care setting",
    position: "center 25%",
  },
  {
    title: "Field training",
    category: "Gundog",
    src: "https://static.wixstatic.com/media/fb83cc_440f056f70644ed0ac75069c13d539dc~mv2.jpg",
    alt: "Dog working outdoors in a field training session",
    position: "center 30%",
  },
  {
    title: "Working dog practice",
    category: "Working dogs",
    src: "https://static.wixstatic.com/media/fb83cc_0c066684d5ec4c70999b3f8d54916020~mv2.jpg",
    alt: "Dog in a focused working dog training exercise",
    position: "center 32%",
  },
  {
    title: "Happy clients",
    category: "Results",
    src: "https://static.wixstatic.com/media/fb83cc_440f056f70644ed0ac75069c13d539dc~mv2.jpg",
    alt: "Happy dog and owner after successful training",
    position: "center 35%",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F7F2EA]">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C88D42]">Gallery</p>
            <h1 className="text-4xl font-black tracking-[-0.04em] text-[#173A2A] sm:text-5xl">
              A look at the training and care environment.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#4B5B5B]">
              The focus is always on calm learning, safe socialisation, positive routines, and a supportive environment for dogs and owners.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {galleryItems.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[1.75rem] border border-[#E5DCCB] bg-white shadow-[0_12px_30px_rgba(23,58,42,0.06)]"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{ objectPosition: item.position }}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173A2A]/60 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#173A2A]">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold text-[#173A2A]">{item.title}</h2>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
