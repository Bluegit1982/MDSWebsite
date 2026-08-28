import { ServicePageTemplate } from "@/components/content/ServicePageTemplate";

const serviceStats = [
  { label: "Focus", value: "Field readiness" },
  { label: "Approach", value: "Progressive training" },
  { label: "Outcome", value: "Reliable work" },
];

const features = [
  {
    title: "Field-based confidence",
    description: "Develop calm control, focus, and responsiveness in realistic outdoor environments and working conditions.",
  },
  {
    title: "Clear progression",
    description: "Training is structured to build skills in stages so both dog and handler develop confidence over time.",
  },
  {
    title: "Real-world understanding",
    description: "Practical instruction helps handlers build better timing, communication, and decision-making on the field.",
  },
];

const timeline = [
  {
    title: "Assessment",
    description: "We review your dog’s temperament, current level of training, and the goals you want to achieve.",
  },
  {
    title: "Skill sequencing",
    description: "Training progresses through focus, obedience, and field-driven work in a logical and manageable order.",
  },
  {
    title: "Working confidence",
    description: "Handlers leave with clearer communication, stronger control, and better readiness for real applications.",
  },
];

const timetable = [
  {
    day: "Thursday",
    sessions: [
      { label: "Field foundations", time: "9:00am – 11:00am" },
      { label: "Handling drills", time: "6:00pm – 7:00pm" },
    ],
  },
  {
    day: "Saturday",
    sessions: [
      { label: "Working session", time: "8:30am – 10:30am" },
      { label: "Handler feedback", time: "10:45am – 11:30am" },
    ],
  },
];

const faqs = [
  {
    question: "Is gundog training suitable for beginners?",
    answer: "Yes. We work with handlers at different stages and adapt the training to the dog’s current experience and abilities.",
  },
  {
    question: "What kind of results can we expect?",
    answer: "Expect clearer direction, improved focus, and a stronger working relationship between you and your dog.",
  },
  {
    question: "Do you help with field handling and control?",
    answer: "Yes. We focus on the core handling and obedience skills needed for reliable field work and responsive control.",
  },
];

export default function GundogTrainingPage() {
  return (
    <ServicePageTemplate
      eyebrow="Gundog training"
      title="Field-ready dogs with better focus and control."
      intro="Our gundog training helps dogs and handlers build confidence, responsiveness, and real working ability in a clear, progressive format."
      stats={serviceStats}
      features={features}
      timeline={timeline}
      faqs={faqs}
      timetable={timetable}
    />
  );
}
