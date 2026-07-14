export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  keywords: string[];
  sections: { heading: string; paragraphs: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-prepare-for-10th-board-exams",
    title: "How to Prepare Effectively for 10th Board Exams",
    description: "A practical study plan for revision, model tests, time management and confident board-exam preparation.",
    date: "2026-07-14",
    readingTime: "5 min read",
    keywords: ["10th board exam preparation", "10th study plan", "board exam tips"],
    sections: [
      { heading: "Begin with a realistic weekly plan", paragraphs: ["Divide the syllabus into small weekly targets instead of trying to complete entire subjects at once. Keep difficult chapters earlier in the week, when your attention is stronger.", "Reserve one short session every day for revision. Regular recall is more useful than reading the same chapter only once."] },
      { heading: "Practise writing, not only reading", paragraphs: ["Board examinations test how clearly and quickly you can write answers. Solve textbook exercises, important questions and previous papers within a fixed time.", "After every test, record the mistakes. Revise those exact concepts before writing the next paper."] },
      { heading: "Use the final month carefully", paragraphs: ["The final month should focus on revision, weak chapters, formulas, grammar rules and model exams. Avoid starting too many new resources at the last minute.", "Sleep properly and maintain a consistent routine. A calm, rested mind usually performs better than a tired mind after late-night study."] }
    ]
  },
  {
    slug: "choose-online-maths-tuition",
    title: "How to Choose Online Maths Tuition for 11th and 12th",
    description: "Important points to check before joining an online Mathematics class for higher-secondary students.",
    date: "2026-07-14",
    readingTime: "4 min read",
    keywords: ["online maths tuition", "11th maths class", "12th maths online tuition"],
    sections: [
      { heading: "Look for concept-based explanation", paragraphs: ["A useful Mathematics class should explain why a formula works and how to choose the correct method. Memorising steps without understanding often creates difficulty in unfamiliar problems."] },
      { heading: "Check practice and feedback", paragraphs: ["Students need regular problems, tests and correction. Ask whether the teacher provides doubt clarification and reviews common mistakes.", "Small and structured batches can make it easier for students to ask questions and remain accountable."] },
      { heading: "Choose consistency over shortcuts", paragraphs: ["A course should support the full academic schedule with chapter practice and revision. Consistent weekly learning is usually more effective than relying only on a last-minute crash course."] }
    ]
  },
  {
    slug: "best-computer-courses-for-students",
    title: "Which Computer Course Is Best for School and College Students?",
    description: "A simple guide to choosing computer basics, MS Office, Python, web design or graphic design based on your goal.",
    date: "2026-07-14",
    readingTime: "6 min read",
    keywords: ["best computer course for students", "Python course", "web design course", "MS Office course"],
    sections: [
      { heading: "Start with your current skill level", paragraphs: ["Complete beginners should first learn computer operations, files, internet use and office tools. These skills support almost every academic and career path.", "Students already comfortable with computers can move directly into programming, web development or design."] },
      { heading: "Match the course with your goal", paragraphs: ["Choose MS Office for workplace productivity, Python for programming and logical thinking, web design for website creation, and graphic design for visual content and digital marketing.", "AI tools can improve productivity in all these areas, but they work best when combined with strong basic skills."] },
      { heading: "Prefer practical learning", paragraphs: ["A good computer course should include exercises and projects. Students understand software much faster when they create documents, programs, designs and websites themselves."] }
    ]
  }
];

export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
