import { ServicePageTemplate } from "@/components/content/ServicePageTemplate";

const serviceStats = [
  { label: "Focus", value: "Recall & manners" },
  { label: "Format", value: "Structured lessons" },
  { label: "Support", value: "Home guidance" },
];

const features = [
  {
    title: "Practical obedience",
    description: "Develop reliable recall, calm responses, and better everyday manners in the environment your dog actually lives in.",
  },
  {
    title: "Clear communication",
    description: "Build stronger owner-dog communication with simple, realistic exercises and consistent routines.",
  },
  {
    title: "Better daily life",
    description: "Reduce frustration for both dog and owner through calmer, more predictable behaviour day to day.",
  },
];

const timeline = [
  {
    title: "Goal setting",
    description: "We identify the habits that are most important to you and your dog’s daily routine.",
  },
  {
    title: "Skill building",
    description: "Training focuses on the key exercises and cues most likely to improve real-world behaviour and control.",
  },
  {
    title: "Long-term consistency",
    description: "We coach you on how to maintain progress at home so results continue beyond the training sessions.",
  },
];

const timetable = [
  {
    day: "Tuesday",
    sessions: [
      { label: "Foundation obedience", time: "10:00am – 11:00am" },
      { label: "Small group coaching", time: "6:30pm – 7:30pm" },
    ],
  },
  {
    day: "Thursday",
    sessions: [
      { label: "Recall & focus", time: "9:30am – 10:30am" },
      { label: "Progression class", time: "6:00pm – 7:00pm" },
    ],
  },
  {
    day: "Saturday",
    sessions: [
      { label: "Weekend obedience clinic", time: "9:00am – 10:30am" },
    ],
  },
];

const faqs = [
  {
    question: "Who is obedience training for?",
    answer: "It’s a strong fit for family dogs, rescue dogs, and owners who want calmer, more reliable day-to-day behaviour.",
  },
  {
    question: "How quickly will we see progress?",
    answer: "Many owners notice improvements quickly, with continued progress as routines become consistent and skills are practised at home.",
  },
  {
    question: "Do you tailor the programme to our dog?",
    answer: "Yes. Every dog and household is different, so training is adapted to personality, age, and specific needs.",
  },
];

export default function ObedienceTrainingPage() {
  return (
    <ServicePageTemplate
      eyebrow="Obedience training"
      title="Reliable behaviour, calmer routines."
      intro="Our obedience training helps dogs become more responsive, calmer, and easier to manage in daily life—while also helping owners feel more confident and in control."
      stats={serviceStats}
      features={features}
      timeline={timeline}
      faqs={faqs}
      timetable={timetable}
    />
  );
}
