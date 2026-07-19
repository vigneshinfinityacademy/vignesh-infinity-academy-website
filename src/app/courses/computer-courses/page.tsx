import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";

import {
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  GraduationCap,
  Laptop2,
  MonitorSmartphone,
  Rocket,
  UsersRound,
} from "lucide-react";

import CourseCard from "@/components/CourseCard";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

import {
  computerCourseGroups,
  computerOverviewCourse,
  type ComputerCourseLevel,
} from "@/data/courses";

import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute:
      "Computer Courses in Rajapalayam with Fees | Vignesh Infinity Academy",
  },

  description:
    "Explore 12 practical computer courses in Rajapalayam and online. Beginner courses ₹2,999, programming ₹3,999, professional ₹5,999 and career courses ₹14,999 under limited-time offers.",

  keywords: [
    "best computer courses in Rajapalayam",
    "computer courses in Rajapalayam with fees",
    "computer training centre Rajapalayam",
    "computer courses in Muhavur",
    "online computer courses Tamil Nadu",
    "Python course Rajapalayam",
    "C programming course",
    "web development course",
    "React JS course",
    "Django course",
    "Android app development course",
    "full stack development course",
    "data analysis and AI course",
  ],

  alternates: {
    canonical: "/courses/computer-courses/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${siteConfig.url}/courses/computer-courses/`,
    siteName: siteConfig.name,

    title:
      "Computer Courses in Rajapalayam with Fees",

    description:
      "Beginner, programming, professional and career-oriented computer courses with practical training and limited-time offers.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Computer courses at Vignesh Infinity Academy and Vignesh Technologies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Computer Courses in Rajapalayam with Fees",

    description:
      "Explore 12 beginner, programming, professional and career-oriented computer courses.",

    images: ["/og-image.png"],
  },
};

type LevelDetails = {
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  audience: string;
  accentClass: string;
  iconClass: string;
};

const levelDetails: Record<
  ComputerCourseLevel,
  LevelDetails
> = {
  Beginner: {
    icon: MonitorSmartphone,
    title: "Beginner Computer Courses",
    shortDescription:
      "Start with essential computer, office, AI and digital-design skills.",
    audience:
      "School students, college students and complete beginners",
    accentClass:
      "border-blue-200 bg-blue-50",
    iconClass:
      "bg-blue-600 text-white",
  },

  Programming: {
    icon: Code2,
    title: "Programming Courses",
    shortDescription:
      "Build programming logic through practical coding exercises and projects.",
    audience:
      "Students and beginners who want to learn coding",
    accentClass:
      "border-violet-200 bg-violet-50",
    iconClass:
      "bg-violet-600 text-white",
  },

  Professional: {
    icon: BriefcaseBusiness,
    title: "Professional Computer Courses",
    shortDescription:
      "Learn modern frameworks, app development and professional project skills.",
    audience:
      "College students, graduates and job seekers",
    accentClass:
      "border-emerald-200 bg-emerald-50",
    iconClass:
      "bg-emerald-600 text-white",
  },

  Career: {
    icon: Rocket,
    title: "Career-Oriented Courses",
    shortDescription:
      "Complete job-focused programmes with project, internship and career support.",
    audience:
      "Graduates, job seekers and career changers",
    accentClass:
      "border-amber-200 bg-amber-50",
    iconClass:
      "bg-amber-600 text-white",
  },
};

const formats = [
  {
    icon: Laptop2,
    title: "Online and offline batches",
    text: "Course availability depends on the selected programme, schedule and current batch.",
  },
  {
    icon: UsersRound,
    title: "Courses for every level",
    text: "Options are available for beginners, school students, college students, job seekers and professionals.",
  },
  {
    icon: GraduationCap,
    title: "Practical training",
    text: "Lessons include guided exercises, assignments, projects and real-world applications.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career-course support",
    text: "Career programmes include live project, internship, GitHub, resume and interview guidance.",
  },
];

const benefits = [
  "Tamil or English explanation",
  "Hands-on practical sessions",
  "Individual attention",
  "Mini projects and assignments",
  "Course completion certificate",
  "Online and offline batch options",
  "Affordable limited-time offers",
  "Career support for advanced programmes",
];

const computerFaqs = [
  ...computerOverviewCourse.faqs,
  {
    question:
      "How many computer courses are available?",

    answer:
      "There are 12 carefully selected computer courses divided into Beginner, Programming, Professional and Career levels.",
  },
  {
    question:
      "What is the beginner-course fee?",

    answer:
      "The regular fee is ₹4,999. The current limited-time offer fee is ₹2,999 for each beginner-level course.",
  },
  {
    question:
      "What is the programming-course fee?",

    answer:
      "The regular fee is ₹5,999. The current limited-time offer fee is ₹3,999 for each programming course.",
  },
  {
    question:
      "What is the professional-course fee?",

    answer:
      "The regular fee is ₹8,999. The current limited-time offer fee is ₹5,999 for each professional course.",
  },
  {
    question:
      "What is the career-course fee?",

    answer:
      "The regular fee is ₹24,999. The current limited-time offer fee is ₹14,999 for each career-oriented programme.",
  },
];

const allComputerCourses =
  computerCourseGroups.flatMap(
    (group) => group.courses,
  );

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${siteConfig.url}/courses/computer-courses/#webpage`,

      url: `${siteConfig.url}/courses/computer-courses/`,

      name:
        "Computer Courses in Rajapalayam with Fees",

      description:
        "Twelve practical computer courses divided into Beginner, Programming, Professional and Career levels.",

      isPartOf: {
        "@id": `${siteConfig.url}/#website`,
      },

      about: {
        "@id": `${siteConfig.url}/#organization`,
      },

      inLanguage: "en-IN",
    },

    {
      "@type": "ItemList",

      name:
        "Computer Courses at Vignesh Infinity Academy",

      numberOfItems: allComputerCourses.length,

      itemListElement: allComputerCourses.map(
        (course, index) => ({
          "@type": "ListItem",
          position: index + 1,

          item: {
            "@type": "Course",
            name: course.title,
            description: course.description,
            url: `${siteConfig.url}/courses/${course.slug}/`,

            provider: {
              "@type": "EducationalOrganization",
              name:
                course.providerName ||
                siteConfig.name,
              url: siteConfig.url,
            },

            offers: course.offerFee
              ? {
                  "@type": "Offer",
                  price: course.offerFee,
                  priceCurrency: "INR",
                  availability:
                    "https://schema.org/InStock",
                  url: `${siteConfig.url}/courses/${course.slug}/`,
                }
              : undefined,
          },
        }),
      ),
    },

    {
      "@type": "FAQPage",

      mainEntity: computerFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,

        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },

    {
      "@type": "BreadcrumbList",

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteConfig.url}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Courses",
          item: `${siteConfig.url}/courses/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Computer Courses",
          item: `${siteConfig.url}/courses/computer-courses/`,
        },
      ],
    },
  ],
};

export default function ComputerCoursesPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      <PageHero
        eyebrow="Computer Education"
        title="Computer courses in Rajapalayam for every learning level"
        description="Choose from 12 practical courses covering computer fundamentals, office skills, graphic design, programming, web development, app development, full stack development, data analysis and artificial intelligence."
      />

      <section className="section-space">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Learning options"
              title="Practical computer training for students and professionals"
              description="Courses are organised into four clear levels so learners can select the right starting point."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {formats.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 70}
                  className="h-full"
                >
                  <div className="feature-card h-full">
                    <div className="grid size-12 place-items-center rounded-2xl bg-violet-600 text-white">
                      <Icon size={23} />
                    </div>

                    <h2 className="mt-5 text-lg font-black">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-50">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Course levels and fees"
              title="Choose the right course according to your goal"
              description="Each category contains three courses, creating a complete and balanced learning catalogue."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {computerCourseGroups.map(
              (group, index) => {
                const details =
                  levelDetails[group.level];

                const Icon = details.icon;

                return (
                  <Reveal
                    key={group.level}
                    delay={index * 80}
                    className="h-full"
                  >
                    <div
                      className={`h-full rounded-3xl border p-6 ${details.accentClass}`}
                    >
                      <div
                        className={`grid size-13 place-items-center rounded-2xl ${details.iconClass}`}
                      >
                        <Icon size={25} />
                      </div>

                      <p className="mt-5 text-xs font-black tracking-[.16em] text-slate-500 uppercase">
                        {group.level} Level
                      </p>

                      <h2 className="mt-2 text-xl font-black text-slate-950">
                        {details.title}
                      </h2>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {details.shortDescription}
                      </p>

                      <div className="mt-5 border-t border-slate-200 pt-5">
                        <p className="text-sm font-bold text-slate-400 line-through">
                          Regular{" "}
                          {group.regularFeeDisplay}
                        </p>

                        <p className="mt-1 text-3xl font-black text-slate-950">
                          {group.offerFeeDisplay}
                        </p>

                        <p className="mt-1 text-xs font-black text-amber-700 uppercase">
                          Limited-time offer
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              },
            )}
          </div>
        </div>
      </section>

      {computerCourseGroups.map(
        (group, groupIndex) => {
          const details =
            levelDetails[group.level];

          const Icon = details.icon;

          return (
            <section
              key={group.level}
              className={
                groupIndex % 2 === 0
                  ? "section-space"
                  : "section-space bg-slate-50"
              }
            >
              <div className="container">
                <Reveal>
                  <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                    <div className="max-w-3xl">
                      <div className="flex items-center gap-3">
                        <div
                          className={`grid size-12 place-items-center rounded-2xl ${details.iconClass}`}
                        >
                          <Icon size={23} />
                        </div>

                        <p className="eyebrow">
                          {group.level} Courses
                        </p>
                      </div>

                      <h2 className="section-title mt-5">
                        {details.title}
                      </h2>

                      <p className="section-copy mt-4">
                        {group.description}
                      </p>

                      <p className="mt-3 text-sm font-bold text-slate-500">
                        Suitable for:{" "}
                        {details.audience}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4">
                      <p className="text-xs font-black tracking-[.14em] text-amber-700 uppercase">
                        Limited-time offer
                      </p>

                      <div className="mt-1 flex items-end gap-3">
                        <p className="text-3xl font-black text-slate-950">
                          {group.offerFeeDisplay}
                        </p>

                        <p className="pb-1 text-sm font-bold text-slate-400 line-through">
                          {group.regularFeeDisplay}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {group.courses.map(
                    (course, index) => (
                      <Reveal
                        key={course.slug}
                        delay={index * 80}
                        className="h-full"
                      >
                        <CourseCard
                          course={course}
                          dark
                        />
                      </Reveal>
                    ),
                  )}
                </div>
              </div>
            </section>
          );
        },
      )}

      <section className="section-space bg-gradient-to-b from-blue-50 to-white">
        <div className="container grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white sm:p-10">
              <MonitorSmartphone
                className="text-violet-300"
                size={40}
              />

              <p className="mt-6 text-sm font-black tracking-[.18em] text-violet-300 uppercase">
                Practical computer education
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Looking for the best computer course in Rajapalayam?
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                The right course depends on your current knowledge,
                academic needs and career goal. Beginners can start
                with computer fundamentals, MS Office or Canva.
                Students interested in coding can choose C, Python or
                web development. Advanced learners can move into
                React, Django, Android, full stack development, data
                analysis or artificial intelligence.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <p className="eyebrow">
                What students receive
              </p>

              <h2 className="section-title mt-3">
                Learn through explanation, practice and projects
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-emerald-600"
                      size={21}
                    />

                    <p className="font-bold leading-6 text-slate-700">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">
              Course questions
            </p>

            <h2 className="section-title mt-3">
              Frequently asked questions
            </h2>

            <p className="section-copy mt-5">
              Review the learning levels and limited-time fees, then
              contact the academy for batch timings and seat
              availability.
            </p>
          </div>

          <FAQ items={computerFaqs} />
        </div>
      </section>

      <CTA title="Enquire about computer courses" />
    </>
  );
}