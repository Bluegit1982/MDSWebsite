import { ServicePageTemplate } from "@/components/content/ServicePageTemplate";

const serviceStats = [
  { label: "Day care days", value: "Weekly" },
  { label: "Supervision", value: "1:1 care" },
  { label: "Focus", value: "Wellbeing" },
];

const features = [
  {
    title: "Structured routine",
    description: "Regular exercise, enrichment, and calm rest periods support balance and emotional wellbeing.",
  },
  {
    title: "Safe social time",
    description: "Carefully monitored play and interaction encourage healthy social behaviour without overstimulation.",
  },
  {
    title: "Flexible support",
    description: "Ideal for busy households that need regular, reliable days where their dog is both stimulated and looked after.",
  },
];

const timeline = [
  {
    title: "Initial meet-up",
    description: "We get to know your dog’s personality, energy levels, routine, and any sensitivities before care begins.",
  },
  {
    title: "Daily enrichment",
    description: "During care, dogs enjoy exercise, time for rest, structured play, and calm routines tailored to their needs.",
  },
  {
    title: "Ongoing confidence",
    description: "Regular attendance supports a more settled, balanced routine at home and reduces stress when left alone.",
  },
];

const timetable = [
  {
    day: "Monday – Friday",
    sessions: [
      { label: "Day care drop-off", time: "8:00am – 9:00am" },
      { label: "Structured play & enrichment", time: "9:00am – 12:00pm" },
      { label: "Rest & calm routine", time: "12:00pm – 2:00pm" },
      { label: "Pick-up & handover", time: "3:30pm – 4:30pm" },
    ],
  },
  {
    day: "Tuesday & Thursday",
    sessions: [
      { label: "Behaviour reset", time: "5:00pm – 6:00pm" },
      { label: "Recall refresh", time: "6:15pm – 7:00pm" },
    ],
  },
  {
    day: "Saturday",
    sessions: [
      { label: "Weekend enrichment session", time: "9:30am – 11:30am" },
    ],
  },
];

const faqs = [
  {
    question: "Is your day care suitable for nervous dogs?",
    answer: "Yes. We assess temperament carefully and provide a calm, paced environment so dogs can settle comfortably and build confidence gradually.",
  },
  {
    question: "Can I use it as part of a wider training programme?",
    answer: "Yes. Many owners pair day care with obedience or behavioural support for a more consistent and supportive routine.",
  },
  {
    question: "Do dogs get regular exercise and rest?",
    answer: "Absolutely. We build in both active periods and downtime to support calm behaviour and overall wellbeing.",
  },
];

export default function DoggyDayCarePage() {
  return (
    <ServicePageTemplate
      eyebrow="Doggy day care"
      title="A calm, engaging day for your dog."
      intro="Our doggy day care provides structure, enrichment, and consistent companionship so your dog enjoys a safe, positive routine while you’re busy."
      stats={serviceStats}
      features={features}
      timeline={timeline}
      faqs={faqs}
      timetable={timetable}
    />
  );
}
