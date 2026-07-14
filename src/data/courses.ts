export type ComputerCourseLevel = "Beginner" | "Programming" | "Professional" | "Career";

export type Course = {
  slug: string;
  category: "School Tuition" | "Computer Course";
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  audience: string;
  mode: string;
  duration: string;
  highlights: string[];
  syllabus: string[];
  outcomes: string[];
  faqs: { question: string; answer: string }[];
  level?: ComputerCourseLevel;
  fee?: number;
  feeDisplay?: string;
  regularFee?: number;
  regularFeeDisplay?: string;
  offerFee?: number;
  offerFeeDisplay?: string;
  limitedTimeOffer?: boolean;
  providerName?: string;
  board?: string;
  subjects?: string;
};

const schoolCoursesData: Course[] = [
  {
    slug: "offline-tuition-classes-1-to-12",
    category: "School Tuition",
    title: "Offline Tuition for Classes 1–12 – All Subjects",
    shortTitle: "Offline Tuition: Classes 1–12",
    eyebrow: "Offline classes • All-subject support",
    description: "Offline tuition in Rajapalayam for Classes 1–12, with subject support based on the Tamil Nadu Board of Secondary Education syllabus.",
    seoTitle: "Offline Tuition for Classes 1–12 in Rajapalayam",
    seoDescription: "Join offline tuition for Classes 1–12 in Rajapalayam with all-subject academic support based on the Tamil Nadu Board of Secondary Education syllabus.",
    keywords: ["offline tuition in Rajapalayam", "classes 1 to 12 tuition", "all subject tuition Rajapalayam", "Tamil Nadu Board tuition"],
    audience: "Students from Classes 1–12",
    mode: "Offline only – Rajapalayam",
    duration: "Monthly and academic-year batches",
    board: "Tamil Nadu Board of Secondary Education",
    subjects: "All subjects, based on class and batch",
    highlights: ["Offline classroom teaching", "All-subject academic support", "Tamil and English explanation", "Regular homework guidance", "Revision and tests", "Individual doubt clarification"],
    syllabus: ["Tamil Nadu Board textbook lessons", "Chapter-wise concept teaching", "School homework support", "Exercise and textbook problems", "Regular revision", "Test and examination preparation"],
    outcomes: ["Better understanding of school lessons", "Improved homework completion", "Stronger revision habits", "Greater examination confidence"],
    faqs: [
      { question: "Are all-subject classes available online?", answer: "No. All-subject tuition is currently available only through offline classroom batches in Rajapalayam." },
      { question: "Which classes are covered?", answer: "Offline tuition is available for students from Classes 1–12. Subject availability may vary according to the class and batch." },
      { question: "Which syllabus do you follow?", answer: "The tuition follows the Tamil Nadu Board of Secondary Education syllabus." },
      { question: "What is the offline tuition fee?", answer: "Offline tuition fees depend on the standard, subjects and batch. Contact the academy for the current monthly fee and seat availability." }
    ]
  },
  {
    slug: "online-10th-maths-classes",
    category: "School Tuition",
    title: "Online 10th Standard Mathematics Classes",
    shortTitle: "10th Maths Online",
    eyebrow: "Limited-time offer • ₹5,999/year",
    description: "Online Mathematics tuition for 10th standard students following the Tamil Nadu Board of Secondary Education syllabus, with clear explanations, practice and board-exam revision.",
    seoTitle: "Online 10th Maths Classes | Offer ₹5,999/Year",
    seoDescription: "Join online 10th Mathematics tuition for the Tamil Nadu Board syllabus at the limited-time offer fee of ₹5,999 per year instead of ₹11,999.",
    keywords: ["online 10th maths classes", "10th maths tuition Tamil Nadu Board", "10th standard mathematics online class", "Tamil Nadu Board 10th maths coaching"],
    audience: "10th standard students",
    mode: "Online only",
    duration: "Full academic year",
    board: "Tamil Nadu Board of Secondary Education",
    subjects: "Mathematics only",
    fee: 5999,
    feeDisplay: "₹5,999/year",
    regularFee: 11999,
    regularFeeDisplay: "₹11,999",
    offerFee: 5999,
    offerFeeDisplay: "₹5,999/year",
    limitedTimeOffer: true,
    highlights: ["Mathematics-only online tuition", "Tamil Nadu Board syllabus", "Step-by-step concept teaching", "Textbook problem practice", "Regular tests", "Board-exam revision"],
    syllabus: ["Tamil Nadu Board chapter concepts", "Textbook examples and exercises", "Important board-exam problems", "Formula and method revision", "Previous-year and model questions", "Final board-exam preparation"],
    outcomes: ["Stronger Mathematics fundamentals", "Improved problem-solving accuracy", "Better speed and confidence", "Systematic board-exam preparation"],
    faqs: [
      { question: "What is the online 10th Maths fee?", answer: "The regular annual fee is ₹11,999. The current limited-time offer is ₹5,999 for the full academic year." },
      { question: "Are all subjects taught online for 10th standard?", answer: "No. The online course is for Mathematics only. All-subject tuition is available only in offline classroom batches." },
      { question: "Which syllabus do you follow?", answer: "The course follows the Tamil Nadu Board of Secondary Education 10th standard Mathematics syllabus." },
      { question: "Do you conduct tests and revision?", answer: "Yes. Regular practice, tests, important board questions and final revision are included according to the batch plan." }
    ]
  },
  {
    slug: "online-11th-maths-classes",
    category: "School Tuition",
    title: "Online 11th Standard Mathematics Classes",
    shortTitle: "11th Maths Online",
    eyebrow: "Limited-time offer • ₹6,999/year",
    description: "Online Mathematics tuition for 11th standard students following the Tamil Nadu Board of Secondary Education syllabus, with concept-focused teaching and regular problem practice.",
    seoTitle: "Online 11th Maths Classes | Offer ₹6,999/Year",
    seoDescription: "Join online 11th Mathematics tuition for the Tamil Nadu Board syllabus at the limited-time offer fee of ₹6,999 per year instead of ₹13,999.",
    keywords: ["online 11th maths tuition", "11th maths online class Tamil Nadu Board", "11th standard mathematics coaching", "Tamil Nadu Board 11th maths class"],
    audience: "11th standard students",
    mode: "Online only",
    duration: "Full academic year",
    board: "Tamil Nadu Board of Secondary Education",
    subjects: "Mathematics only",
    fee: 6999,
    feeDisplay: "₹6,999/year",
    regularFee: 13999,
    regularFeeDisplay: "₹13,999",
    offerFee: 6999,
    offerFeeDisplay: "₹6,999/year",
    limitedTimeOffer: true,
    highlights: ["Mathematics-only online tuition", "Tamil Nadu Board syllabus", "Step-by-step teaching", "Formula revision", "Worked examples", "Regular tests and doubt support"],
    syllabus: ["Tamil Nadu Board chapter concepts", "Formula understanding", "Textbook examples and exercises", "Higher-order problems", "Unit tests", "Examination revision"],
    outcomes: ["Clearer Mathematics fundamentals", "Better problem-solving ability", "Reduced fear of Mathematics", "Stronger preparation for 12th standard"],
    faqs: [
      { question: "What is the online 11th Maths fee?", answer: "The regular annual fee is ₹13,999. The current limited-time offer is ₹6,999 for the full academic year." },
      { question: "Is this an all-subject online course?", answer: "No. This online course covers Mathematics only. All-subject tuition is available only in offline classroom batches." },
      { question: "Which syllabus do you follow?", answer: "The course follows the Tamil Nadu Board of Secondary Education 11th standard Mathematics syllabus." },
      { question: "Is it suitable for students weak in Maths?", answer: "Yes. Lessons start from the required fundamentals and progress through examples, exercises and regular practice." }
    ]
  },
  {
    slug: "online-12th-maths-classes",
    category: "School Tuition",
    title: "Online 12th Standard Mathematics Classes",
    shortTitle: "12th Maths Online",
    eyebrow: "Limited-time offer • ₹6,999/year",
    description: "Online Mathematics tuition for 12th standard students following the Tamil Nadu Board of Secondary Education syllabus, with exam-oriented concepts, tests and final revision.",
    seoTitle: "Online 12th Maths Classes | Offer ₹6,999/Year",
    seoDescription: "Join online 12th Mathematics tuition for the Tamil Nadu Board syllabus at the limited-time offer fee of ₹6,999 per year instead of ₹13,999.",
    keywords: ["online 12th maths classes", "12th maths tuition Tamil Nadu Board", "12th board maths coaching online", "Tamil Nadu Board 12th maths class"],
    audience: "12th standard students",
    mode: "Online only",
    duration: "Full academic year",
    board: "Tamil Nadu Board of Secondary Education",
    subjects: "Mathematics only",
    fee: 6999,
    feeDisplay: "₹6,999/year",
    regularFee: 13999,
    regularFeeDisplay: "₹13,999",
    offerFee: 6999,
    offerFeeDisplay: "₹6,999/year",
    limitedTimeOffer: true,
    highlights: ["Mathematics-only online tuition", "Tamil Nadu Board syllabus", "Board-oriented preparation", "Important problem practice", "Chapter tests and model exams", "Final revision support"],
    syllabus: ["Tamil Nadu Board chapter concepts", "Textbook and important problems", "Previous-year board questions", "One-mark and short-answer preparation", "Model papers", "Rapid final revision"],
    outcomes: ["Improved accuracy", "Better examination time management", "Greater board-exam confidence", "Systematic revision and practice"],
    faqs: [
      { question: "What is the online 12th Maths fee?", answer: "The regular annual fee is ₹13,999. The current limited-time offer is ₹6,999 for the full academic year." },
      { question: "Is this an all-subject online course?", answer: "No. This online course covers Mathematics only. All-subject tuition is available only in offline classroom batches." },
      { question: "Which syllabus do you follow?", answer: "The course follows the Tamil Nadu Board of Secondary Education 12th standard Mathematics syllabus." },
      { question: "Are previous-year questions and model tests included?", answer: "Yes. Important previous-year questions, chapter tests, model papers and final revision are included according to the batch plan." }
    ]
  }
];

const levelDefaults: Record<ComputerCourseLevel, {
  regularFee: number;
  offerFee: number;
  audience: string;
  duration: string;
  highlights: string[];
  outcomes: string[];
}> = {
  Beginner: {
    regularFee: 4999,
    offerFee: 2999,
    audience: "School students, college students and complete beginners",
    duration: "Flexible short-term practical course",
    highlights: ["Beginner-friendly lessons", "Hands-on practice", "Tamil or English explanation", "Individual attention", "Practical assignments", "Course completion certificate"],
    outcomes: ["Confident use of the subject", "Useful practical skills", "Improved digital confidence", "A strong base for the next learning level"]
  },
  Programming: {
    regularFee: 5999,
    offerFee: 3999,
    audience: "School students, college students and coding beginners",
    duration: "Structured module-based programming course",
    highlights: ["Concepts from basics", "Logic-building exercises", "Hands-on coding", "Debugging practice", "Mini projects", "Course completion certificate"],
    outcomes: ["Stronger programming logic", "Ability to write working programs", "Better problem-solving confidence", "Foundation for advanced development"]
  },
  Professional: {
    regularFee: 8999,
    offerFee: 5999,
    audience: "College students, graduates, job seekers and aspiring professionals",
    duration: "Project-based professional course",
    highlights: ["Industry-relevant tools", "Practical project work", "GitHub guidance", "Portfolio development", "Course completion certificate", "Career-oriented support"],
    outcomes: ["Practical project experience", "Improved professional skills", "Portfolio-ready work", "Preparation for advanced or job-oriented training"]
  },
  Career: {
    regularFee: 24999,
    offerFee: 14999,
    audience: "College students, graduates, job seekers and career changers",
    duration: "Complete career programme with project and internship support",
    highlights: ["Live project", "Internship", "Course completion certificate", "GitHub support", "Resume preparation", "Interview guidance", "Practical training", "Career support"],
    outcomes: ["Job-oriented technical skills", "A completed live project", "A stronger GitHub and resume profile", "Better preparation for interviews and entry-level roles"]
  }
};

type ComputerCourseSeed = {
  slug: string;
  title: string;
  shortTitle?: string;
  description: string;
  keywords: string[];
  syllabus: string[];
  level: ComputerCourseLevel;
  eyebrow?: string;
};

function makeComputerCourse(seed: ComputerCourseSeed): Course {
  const defaults = levelDefaults[seed.level];
  const regularFeeDisplay = `₹${defaults.regularFee.toLocaleString("en-IN")}`;
  const offerFeeDisplay = `₹${defaults.offerFee.toLocaleString("en-IN")}`;
  return {
    slug: seed.slug,
    category: "Computer Course",
    level: seed.level,
    fee: defaults.offerFee,
    feeDisplay: offerFeeDisplay,
    regularFee: defaults.regularFee,
    regularFeeDisplay,
    offerFee: defaults.offerFee,
    offerFeeDisplay,
    limitedTimeOffer: true,
    providerName: "Vignesh Technologies",
    title: seed.title,
    shortTitle: seed.shortTitle || seed.title.replace(" Course", ""),
    eyebrow: seed.eyebrow || `Limited-time offer • ${offerFeeDisplay}`,
    description: seed.description,
    seoTitle: `${seed.title} | Offer ${offerFeeDisplay}`,
    seoDescription: `${seed.description} Limited-time offer ${offerFeeDisplay} instead of ${regularFeeDisplay} for online or offline training from Vignesh Technologies.`,
    keywords: seed.keywords,
    audience: defaults.audience,
    mode: "Online and offline",
    duration: defaults.duration,
    highlights: defaults.highlights,
    syllabus: seed.syllabus,
    outcomes: defaults.outcomes,
    faqs: [
      { question: "What is the course fee?", answer: `The regular fee is ${regularFeeDisplay}. The current limited-time offer fee is ${offerFeeDisplay}. Contact the academy to confirm the next batch date and seat availability.` },
      { question: "Can a beginner join this course?", answer: seed.level === "Beginner" || seed.level === "Programming" ? "Yes. The course begins with the required fundamentals and progresses through guided practice." : "Basic computer knowledge is helpful. Contact the academy for guidance on the best starting level for you." },
      { question: "Are online classes available?", answer: "Yes. Online and offline batches are offered based on course and batch availability." },
      { question: "Will I receive a certificate?", answer: "A course completion certificate is included after meeting the course requirements." }
    ]
  };
}

const computerCourseSeeds: ComputerCourseSeed[] = [
  // Beginner courses – ₹2,999
  {
    slug: "basic-computer-ai-course",
    title: "Basic Computer & AI Course",
    shortTitle: "Basic Computer & AI",
    level: "Beginner",
    description: "Learn essential computer operations, files, typing, internet basics and practical AI tools through guided hands-on training.",
    keywords: ["basic computer course Rajapalayam", "computer and AI course", "computer course for beginners"],
    syllabus: ["Computer parts and operating systems", "Keyboard, mouse and typing basics", "Files, folders and storage", "Internet and email fundamentals", "Online safety and cloud tools", "AI tools for study and everyday work"]
  },
  {
    slug: "ms-office-ai-course",
    title: "MS Office & AI Course",
    shortTitle: "MS Office & AI",
    level: "Beginner",
    description: "Practical training in Word, Excel, PowerPoint and AI-assisted productivity for academic, personal and office work.",
    keywords: ["MS Office course Rajapalayam", "Excel course", "MS Office and AI training"],
    syllabus: ["Word document creation and formatting", "Excel tables, formulas and charts", "PowerPoint presentation design", "Printing and document management", "Office productivity exercises", "AI-assisted document and presentation work"]
  },
  {
    slug: "canva-basic-graphic-design-course",
    title: "Canva & Basic Graphic Design Course",
    shortTitle: "Canva & Basic Graphic Design",
    level: "Beginner",
    description: "Create posters, social-media graphics, invitations and simple brand materials using Canva and basic design principles.",
    keywords: ["Canva course Rajapalayam", "basic graphic design course", "poster design class"],
    syllabus: ["Canva interface and templates", "Colour, fonts and visual hierarchy", "Poster and flyer design", "Social-media post formats", "Photo editing and background tools", "Exporting designs for print and online use"]
  },

  // Programming courses – ₹3,999
  {
    slug: "c-programming-course",
    title: "C Programming Course",
    shortTitle: "C Programming",
    level: "Programming",
    description: "Build a strong programming foundation with C syntax, logic, functions, arrays, pointers and practical exercises.",
    keywords: ["C programming course Rajapalayam", "C language class", "online C programming course"],
    syllabus: ["Program structure and data types", "Operators and input/output", "Conditions and loops", "Functions and arrays", "Pointers and strings", "File handling and mini programs"]
  },
  {
    slug: "python-programming-course",
    title: "Python Programming Course",
    shortTitle: "Python Programming",
    level: "Programming",
    description: "Learn Python from fundamentals through functions, collections, files and practical mini projects.",
    keywords: ["Python course Rajapalayam", "online Python class", "Python programming for students"],
    syllabus: ["Variables and data types", "Conditions and loops", "Functions and modules", "Lists, tuples and dictionaries", "Files and exception handling", "Practical mini projects"]
  },
  {
    slug: "html-css-javascript-course",
    title: "HTML, CSS & JavaScript Course",
    shortTitle: "HTML, CSS & JavaScript",
    level: "Programming",
    description: "Create responsive interactive web pages using HTML structure, modern CSS and JavaScript fundamentals.",
    keywords: ["HTML CSS JavaScript course", "frontend basics course", "web development class Rajapalayam"],
    syllabus: ["Semantic HTML", "CSS selectors and styling", "Flexbox and Grid", "Responsive web design", "JavaScript fundamentals", "Interactive website project"]
  },

  // Professional courses – ₹5,999
  {
    slug: "react-js-course",
    title: "React JS Course",
    shortTitle: "React JS",
    level: "Professional",
    description: "Build modern component-based web applications using React, hooks, routing, APIs and practical projects.",
    keywords: ["React JS course Rajapalayam", "React course online", "frontend framework course"],
    syllabus: ["Modern JavaScript essentials", "Components and props", "State and React hooks", "Forms and validation", "Routing and API integration", "Deployable React project"]
  },
  {
    slug: "python-django-course",
    title: "Python Django Course",
    shortTitle: "Python Django",
    level: "Professional",
    description: "Develop database-driven web applications using Python, Django, templates, authentication and REST concepts.",
    keywords: ["Django course Rajapalayam", "Python web development course", "Django training online"],
    syllabus: ["Django project structure", "Models and database operations", "Templates and forms", "Authentication and permissions", "REST API fundamentals", "Full Django web application"]
  },
  {
    slug: "android-app-development-course",
    title: "Android App Development Course",
    shortTitle: "Android App Development",
    level: "Professional",
    description: "Learn to design and build Android applications with screens, navigation, data storage and API connectivity.",
    keywords: ["Android app development course", "Android course Rajapalayam", "mobile app development class"],
    syllabus: ["Android project structure", "Layouts and user interfaces", "Activities and navigation", "Local data storage", "API and Firebase basics", "Publish-ready Android project"]
  },

  // Career courses – ₹14,999
  {
    slug: "python-full-stack-development-course",
    title: "Python Full-Stack Development Course",
    shortTitle: "Python Full-Stack Development",
    level: "Career",
    description: "Become job-ready in frontend development, Python, Django, databases, APIs, deployment and full-stack project development.",
    keywords: ["Python full stack course Rajapalayam", "Django full stack training", "job oriented Python course"],
    syllabus: ["HTML, CSS and JavaScript", "Frontend framework fundamentals", "Python and Django backend", "SQL database integration", "REST APIs and authentication", "Deployment and complete live project"]
  },
  {
    slug: "java-full-stack-development-course",
    title: "Java Full-Stack Development Course",
    shortTitle: "Java Full-Stack Development",
    level: "Career",
    description: "Develop complete web applications using frontend technologies, Java, Spring Boot, databases, APIs and deployment workflows.",
    keywords: ["Java full stack course Rajapalayam", "Spring Boot full stack training", "job oriented Java course"],
    syllabus: ["HTML, CSS and JavaScript", "Frontend framework fundamentals", "Core Java and Spring Boot", "SQL database integration", "REST APIs and authentication", "Deployment and complete live project"]
  },
  {
    slug: "data-analysis-artificial-intelligence-course",
    title: "Data Analysis & Artificial Intelligence Career Course",
    shortTitle: "Data Analysis & Artificial Intelligence",
    level: "Career",
    description: "Build career-focused skills in Python, data analysis, visualisation, machine-learning fundamentals and practical AI projects.",
    keywords: ["data analysis AI course Rajapalayam", "artificial intelligence career course", "Python machine learning training"],
    syllabus: ["Python for data analysis", "NumPy and pandas", "Data cleaning and visualisation", "Statistics and analytical thinking", "Machine-learning fundamentals", "Practical data and AI project"]
  }
];

const computerOverview: Course = {
  slug: "computer-courses-rajapalayam",
  category: "Computer Course",
  title: "Computer Courses in Rajapalayam",
  shortTitle: "All Computer Courses",
  eyebrow: "12 carefully selected courses • Limited-time offers",
  description: "Choose from beginner, programming, professional and career-oriented computer courses for students, job seekers and professionals.",
  seoTitle: "Computer Courses in Rajapalayam with Fees",
  seoDescription: "Explore 12 computer courses with limited-time offers: beginner ₹2,999, programming ₹3,999, professional ₹5,999 and career courses ₹14,999.",
  keywords: ["computer courses in Rajapalayam with fees", "computer class near Rajapalayam", "online computer course Tamil Nadu", "programming course fees"],
  audience: "School students, college students, job seekers and professionals",
  mode: "Online and offline",
  duration: "Course-dependent flexible batches",
  highlights: ["12 carefully selected course choices", "Four clear learning levels", "Practical sessions", "Affordable fixed fees", "Certificates", "Career-course support"],
  syllabus: ["Computer and office fundamentals", "Graphic design and digital creativity", "Programming languages", "Web and app development", "Full-stack development", "Data analysis and artificial intelligence"],
  outcomes: ["A suitable learning path for every level", "Practical digital and technical skills", "Project and portfolio development", "Better academic and career readiness"],
  faqs: [
    { question: "What are the computer course fees?", answer: "Limited-time offer fees are ₹2,999 for beginner courses, ₹3,999 for programming courses, ₹5,999 for professional courses and ₹14,999 for career courses. Regular fees are shown on every course page." },
    { question: "Are online classes available?", answer: "Yes. Online and offline batches are available depending on the selected course and schedule." },
    { question: "Which course is best for a complete beginner?", answer: "Basic Computer & AI, MS Office & AI or Canva & Basic Graphic Design are suitable starting options." }
  ],
  providerName: "Vignesh Technologies"
};

export const courses: Course[] = [...schoolCoursesData, computerOverview, ...computerCourseSeeds.map(makeComputerCourse)];
export const schoolCourses = courses.filter((course) => course.category === "School Tuition");
export const computerCourses = courses.filter((course) => course.category === "Computer Course" && course.level);
export const computerOverviewCourse = computerOverview;
export const getCourse = (slug: string) => courses.find((course) => course.slug === slug);
export const formatFee = (fee?: number) => fee ? `₹${fee.toLocaleString("en-IN")}` : "Contact for fee";

export const computerCourseGroups = (["Beginner", "Programming", "Professional", "Career"] as ComputerCourseLevel[]).map((level) => ({
  level,
  fee: levelDefaults[level].offerFee,
  feeDisplay: `₹${levelDefaults[level].offerFee.toLocaleString("en-IN")}`,
  regularFee: levelDefaults[level].regularFee,
  regularFeeDisplay: `₹${levelDefaults[level].regularFee.toLocaleString("en-IN")}`,
  offerFee: levelDefaults[level].offerFee,
  offerFeeDisplay: `₹${levelDefaults[level].offerFee.toLocaleString("en-IN")}`,
  courses: computerCourses.filter((course) => course.level === level),
  description: {
    Beginner: "Easy-to-follow practical courses for students and complete beginners.",
    Programming: "Strong coding foundations through logic, exercises and mini projects.",
    Professional: "Project-based training in modern frameworks, tools and specialised technologies.",
    Career: "Complete job-oriented programmes with live project, internship and career support."
  }[level]
}));

const featuredSlugs = [
  "basic-computer-ai-course",
  "ms-office-ai-course",
  "canva-basic-graphic-design-course",
  "c-programming-course",
  "python-programming-course",
  "html-css-javascript-course",
  "react-js-course",
  "python-django-course",
  "android-app-development-course",
  "python-full-stack-development-course",
  "java-full-stack-development-course",
  "data-analysis-artificial-intelligence-course",
];
export const featuredComputerCourses = featuredSlugs.map((slug) => getCourse(slug)).filter((course): course is Course => Boolean(course));
