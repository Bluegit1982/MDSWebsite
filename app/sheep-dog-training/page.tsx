import { ServicePageTemplate } from "@/components/content/ServicePageTemplate";

const serviceStats = [
  { label: "Focus", value: "Stock work" },
  { label: "Control", value: "Directional response" },
  { label: "Style", value: "Practical drive" },
];

const features = [
  {
    title: "Working dog control",
    description: "Develop clearer direction, responsiveness, and calm handling when working around stock or in field conditions.",
  },
  {
    title: "Handler confidence",
    description: "Learn to guide your dog with more precision, stronger timing, and quieter communication.",
  },
  {
    title: "Balanced progression",
    description: "Training is structured to match each dog’s experience so confidence and competence grow together.",
  },
];

const timeline = [
  {
    title: "Understanding the dog",
    description: "We review the dog’s working style, temperament, and how it responds to pressure, direction, and environment.",
  },
  {
    title: "Structured control",
    description: "Training builds the core responses and working behaviours needed for safer, calmer handling around stock.",
  },
  {
    title: "Confidence in application",
    description: "Progression continues until both dog and handler show consistent control and reliability in working settings.",
  },
];

const timetable = [
  {
    day: "Tuesday",
    sessions: [
      { label: "Field handling session", time: "8:30am – 10:30am" },
      { label: "Directional control", time: "6:00pm – 7:00pm" },
    ],
  },
  {
    day: "Friday",
    sessions: [
      { label: "Stock work progression", time: "9:00am – 11:00am" },
      { label: "Handler feedback", time: "3:00pm – 4:00pm" },
    ],
  },
];

const faqs = [
  {
    question: "Is sheep dog training suitable for inexperienced handlers?",
    answer: "We can adapt training to different starting points, but a realistic assessment helps ensure the programme matches your dog and your experience level.",
  },
  {
    question: "How do you build a working dog’s confidence?",
    answer: "By incorporating clear structure, progressive exposure, and calm, consistent handling that supports both control and welfare.",
  },
  {
    question: "Do you work on stock handling and obedience together?",
    answer: "Yes. The best working dog programmes connect handling, responsiveness, and command clarity in a practical, integrated way.",
  },
];

export default function SheepDogTrainingPage() {
  return (
    <ServicePageTemplate
      eyebrow="Sheep dog training"
      title="Working dog control with calm, confident handling."
      intro="Our sheep dog training supports handlers and dogs to work with better direction, balance, and control in realistic field environments."
      stats={serviceStats}
      features={features}
      timeline={timeline}
      faqs={faqs}
      timetable={timetable}
    />
  );
}
