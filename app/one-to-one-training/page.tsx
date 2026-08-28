import { ServicePageTemplate } from "@/components/content/ServicePageTemplate";

const serviceStats = [
  { label: "Focus", value: "Tailored work" },
  { label: "Format", value: "Private coaching" },
  { label: "Outcome", value: "Custom support" },
];

const features = [
  {
    title: "Personalised attention",
    description: "Each session is designed around your dog’s temperament, household dynamics, and the challenges you’re facing.",
  },
  {
    title: "Behaviour-focused support",
    description: "We address the specific patterns that matter most, from reactivity and pulling to recall and confidence issues.",
  },
  {
    title: "Owner confidence coaching",
    description: "You’ll leave each session with clear guidance and practical next steps you can use immediately at home.",
  },
];

const timeline = [
  {
    title: "Assessment and diagnosis",
    description: "We look at what is happening, why it happens, and what the most realistic path to improvement looks like.",
  },
  {
    title: "Focused sessions",
    description: "Each training block tackles priority behaviours and gives you actionable exercises to build consistency.",
  },
  {
    title: "Sustained confidence",
    description: "Progress is reviewed and adjusted over time so you are building skills that work in real life, not just in the session room.",
  },
];

const timetable = [
  {
    day: "Monday",
    sessions: [
      { label: "Behaviour assessment", time: "9:30am – 10:30am" },
      { label: "Personalised plan", time: "6:00pm – 7:00pm" },
    ],
  },
  {
    day: "Wednesday",
    sessions: [
      { label: "1:1 training session", time: "10:00am – 11:00am" },
      { label: "Owner follow-up", time: "6:30pm – 7:15pm" },
    ],
  },
  {
    day: "Saturday",
    sessions: [
      { label: "Progress review", time: "9:00am – 10:00am" },
    ],
  },
];

const faqs = [
  {
    question: "Is one-to-one training suitable for specific behaviour problems?",
    answer: "Yes. This approach is ideal for issues that need tailored support, more attention, or a more focused training plan.",
  },
  {
    question: "How do you decide on the pace of training?",
    answer: "We adapt based on your dog’s confidence level, emotional state, and how quickly new behaviours can be learned without overwhelm.",
  },
  {
    question: "Will I be coached on handling techniques too?",
    answer: "Yes. Part of the programme is helping you become confident and consistent in your own communication with your dog.",
  },
];

export default function OneToOneTrainingPage() {
  return (
    <ServicePageTemplate
      eyebrow="One-to-one training"
      title="Tailored support for your dog and your goals."
      intro="Our one-to-one training gives bespoke, focused help for behaviour challenges, confidence-building, and everyday success in the home environment."
      stats={serviceStats}
      features={features}
      timeline={timeline}
      faqs={faqs}
      timetable={timetable}
    />
  );
}
