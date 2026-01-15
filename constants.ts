
import { Question, ProfileDefinition } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "When prices of everyday items suddenly increase, you usually: 💸",
    options: [
      { id: 'A', text: "Ask what caused the increase and what might happen next" },
      { id: 'B', text: "Think about how it affects people and businesses" },
      { id: 'C', text: "Wonder who benefits and who loses" },
      { id: 'D', text: "Feel unsure but curious to learn more" }
    ]
  },
  {
    id: 2,
    text: "In lessons, you enjoy activities that: 📚",
    options: [
      { id: 'A', text: "Break ideas into clear steps or models" },
      { id: 'B', text: "Use real-life examples or current events" },
      { id: 'C', text: "Involve discussion and comparing viewpoints" },
      { id: 'D', text: "Help you slowly make sense of new ideas" }
    ]
  },
  {
    id: 3,
    text: "When faced with a complex issue (e.g. GST increase), you tend to: 📈",
    options: [
      { id: 'A', text: "Analyse causes and consequences" },
      { id: 'B', text: "Connect it to news or daily life" },
      { id: 'C', text: "Weigh different sides before deciding" },
      { id: 'D', text: "Need guidance but improve with practice" }
    ]
  },
  {
    id: 4,
    text: "Which statement sounds most like you? 🤔",
    options: [
      { id: 'A', text: "I like spotting patterns and relationships" },
      { id: 'B', text: "I like understanding how things work in the real world" },
      { id: 'C', text: "I like thinking from different perspectives" },
      { id: 'D', text: "I may not get it immediately, but I keep trying" }
    ]
  },
  {
    id: 5,
    text: "When someone disagrees with you, you usually: 🗣️",
    options: [
      { id: 'A', text: "Re-examine your reasoning" },
      { id: 'B', text: "Use examples to explain your view" },
      { id: 'C', text: "Consider their viewpoint carefully" },
      { id: 'D', text: "Feel challenged but learn from it" }
    ]
  },
  {
    id: 6,
    text: "How do you feel about open-ended questions? 📝",
    options: [
      { id: 'A', text: "I enjoy structuring my answer logically" },
      { id: 'B', text: "I like linking them to real situations" },
      { id: 'C', text: "I enjoy evaluating and balancing ideas" },
      { id: 'D', text: "I find them hard but get better over time" }
    ]
  },
  {
    id: 7,
    text: "When looking at graphs or data, you tend to: 📊",
    options: [
      { id: 'A', text: "Analyse trends and relationships" },
      { id: 'B', text: "Think about what they show in real life" },
      { id: 'C', text: "Interpret what they mean from different angles" },
      { id: 'D', text: "Need time and practice to understand them" }
    ]
  },
  {
    id: 8,
    text: "Economics often has answers that start with “it depends.” You: ⚖️",
    options: [
      { id: 'A', text: "Look for the factors that influence outcomes" },
      { id: 'B', text: "Think about how context changes results" },
      { id: 'C', text: "Accept that different viewpoints matter" },
      { id: 'D', text: "Find it challenging but manageable with support" }
    ]
  },
  {
    id: 9,
    text: "When learning something difficult, you usually: 🧠",
    options: [
      { id: 'A', text: "Break it down into smaller parts" },
      { id: 'B', text: "Ask how it applies in real situations" },
      { id: 'C', text: "Talk it through to clarify thinking" },
      { id: 'D', text: "Improve gradually with effort" }
    ]
  },
  {
    id: 10,
    text: "Which describes you best? ✨",
    options: [
      { id: 'A', text: "I enjoy analysing and explaining ideas" },
      { id: 'B', text: "I like linking what I learn to the real world" },
      { id: 'C', text: "I enjoy weighing arguments and making sense of issues" },
      { id: 'D', text: "I am still developing my thinking skills—and that’s okay" }
    ]
  }
];

export const PROFILES: Record<string, ProfileDefinition> = {
  A: {
    id: 'A',
    title: "Analytical Thinker",
    emoji: "🧠",
    color: "bg-blue-600",
    iconClass: "fa-solid fa-brain",
    strengths: [
      "Logical reasoning",
      "Breaking down causes and effects",
      "Structured explanations"
    ],
    description: "These skills are central to economic analysis and essay writing. You have a natural knack for identifying the 'why' and 'how' behind data and events."
  },
  B: {
    id: 'B',
    title: "Real-World Connector",
    emoji: "🌍",
    color: "bg-emerald-600",
    iconClass: "fa-solid fa-earth-americas",
    strengths: [
      "Linking ideas to current affairs",
      "Understanding real-life impact",
      "Learning through examples"
    ],
    description: "Economics values students who can apply concepts to real contexts. You see the world not just as a set of rules, but as a living system."
  },
  C: {
    id: 'C',
    title: "Perspective Balancer",
    emoji: "⚖️",
    color: "bg-amber-600",
    iconClass: "fa-solid fa-scale-balanced",
    strengths: [
      "Weighing different viewpoints",
      "Evaluating trade-offs",
      "Making balanced judgments"
    ],
    description: "These are key skills for evaluation in A-Level Economics. You understand that most complex problems don't have a single simple solution."
  },
  D: {
    id: 'D',
    title: "Thinking in Progress",
    emoji: "🌱",
    color: "bg-indigo-600",
    iconClass: "fa-solid fa-seedling",
    strengths: [
      "Growth mindset",
      "Willingness to practise and improve",
      "Learning from challenge"
    ],
    description: "A-Level Economics develops thinking over time—effort matters more than a perfect start. Your resilience is your greatest asset in mastering this subject."
  }
};
