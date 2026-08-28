import { ServicePageTemplate } from "@/components/content/ServicePageTemplate";

const serviceStats = [
  { label: "Focus", value: "Control & precision" },
  { label: "Delivery", value: "Professional instruction" },
  { label: "Outcome", value: "Safe readiness" },
];

const features = [
  {
    title: "Professional oversight",
    description: "Structured programmes are delivered with a focus on safety, control, and clear handling standards.",
  },
  {
    title: "Clear communication",
    description: "Training supports reliable responses and better direction between dog and handler in demanding situations.",
  },
  {
    title: "Responsible progression",
    description: "Progression is paced carefully to support both dog welfare and the goals of the handler.",
  },
];

const timeline = [
  {
    title: "Initial evaluation",
    description: "We assess suitability, temperament, current training level, and the expectations of the programme.",
  },
  {
    title: "Controlled skill building",
    description: "Each stage introduces structured control, engagement, and response work in a safe and purposeful format.",
  },
  {
    title: "Operational confidence",
    description: "Handlers improve their ability to direct the dog with clarity, discipline, and consistent reinforcement.",
  },
];

const timetable = [
  {
    day: "Wednesday",
    sessions: [
      { label: "Assessment & planning", time: "10:00am – 11:30am" },
      { label: "Structured work block", time: "6:00pm – 7:30pm" },
    ],
  },
  {
    day: "Friday",
    sessions: [
      { label: "Progression session", time: "9:00am – 10:30am" },
      { label: "Handler coaching", time: "5:30pm – 6:30pm" },
    ],
  },
];

const faqs = [
  {
    question: "Is this programme suitable for all dogs?",
    answer: "Suitability depends on temperament, experience, and the goals of the handler. An assessment is the best way to determine fit.",
  },
  {
    question: "How is safety managed?",
    answer: "Professional handling, careful progression, and clear structure are central to the programme to protect both dog and handler.",
  },
  {
    question: "Can I discuss my goals before enrolling?",
    answer: "Yes. A consultation helps clarify expectations, suitability, and the best route for your dog and your needs.",
  },
];

export default function ProtectionTrainingPage() {
  return (
    <ServicePageTemplate
      eyebrow="Protection training"
      title="Professional protection work with clear control and safety."
      intro="Our protection training is built around professional standards, careful progression, and a strong emphasis on handler control, confidence, and dog welfare."
      stats={serviceStats}
      features={features}
      timeline={timeline}
      faqs={faqs}
      timetable={timetable}
    />
  );
}
