import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/content/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Puppy Classes",
  description: "Puppy classes with socialisation, confidence building, and owner guidance for early training success.",
};

const serviceStats = [
  { label: "Age range", value: "8–20 weeks" },
  { label: "Session length", value: "1 hour" },
  { label: "Support", value: "Owner coaching" },
];

const features = [
  {
    title: "Early socialisation",
    description: "Build confidence safely with appropriate exposure to people, environments, and new experiences.",
  },
  {
    title: "Good foundations",
    description: "Teach calm behaviour, polite greetings, engagement, and practical manners from the start.",
  },
  {
    title: "Support for owners",
    description: "Learn how to guide your puppy consistently with simple, clear routines that fit real life.",
  },
];

const timeline = [
  {
    title: "Initial assessment",
    description: "We look at your puppy’s age, personality, and the goals that matter most for your household.",
  },
  {
    title: "Structured lessons",
    description: "Each class introduces manageable skills in a calm environment with clear, reward-based guidance.",
  },
  {
    title: "Real-world confidence",
    description: "Owners leave with practical exercises to carry the training home and build long-term consistency.",
  },
];

const timetable = [
  {
    day: "Monday",
    sessions: [
      { label: "Puppy foundations", time: "9:30am – 10:30am" },
      { label: "Owner coaching", time: "6:00pm – 7:00pm" },
    ],
  },
  {
    day: "Wednesday",
    sessions: [
      { label: "Puppy socialisation", time: "10:00am – 11:00am" },
      { label: "Confidence building", time: "6:30pm – 7:30pm" },
    ],
  },
  {
    day: "Saturday",
    sessions: [
      { label: "Weekend puppy class", time: "9:00am – 10:00am" },
      { label: "Progress check", time: "10:30am – 11:15am" },
    ],
  },
];

const faqs = [
  {
    question: "What age should my puppy start classes?",
    answer: "Most puppies begin between 8 and 20 weeks, when early socialisation and training foundations are especially valuable.",
  },
  {
    question: "Do I need prior experience?",
    answer: "No. Classes are designed to help new owners feel confident from the outset, with practical guidance throughout.",
  },
  {
    question: "Will the sessions help with behavioural issues?",
    answer: "Yes. Classes build confidence and teach key skills that can reduce common issues such as overexcitement, pulling, and poor recall.",
  },
];

export default function PuppyClassesPage() {
  return (
    <main id="main-content">
      <ServicePageTemplate
      eyebrow="Puppy classes"
      title="Early training that builds happy, confident dogs."
      intro="Our puppy classes combine positive, reward-based learning with practical owner support so your dog develops confidence, manners, and calm habits from the start."
      stats={serviceStats}
      features={features}
      timeline={timeline}
      faqs={faqs}
      timetable={timetable}
      />
    </main>
  );
}
