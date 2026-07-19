import type { Metadata } from "next";

import {
  BookOpenCheck,
  CheckCircle2,
  Laptop2,
  MapPin,
  School,
  UsersRound,
} from "lucide-react";

import CourseCard from "@/components/CourseCard";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

import { schoolCourses } from "@/data/courses";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute:
      "Tuition Centre in Rajapalayam & Online Maths | Vignesh Infinity Academy",
  },

  description:
    "Looking for a trusted tuition centre in Rajapalayam or online Maths tuition? Vignesh Infinity Academy offers offline all-subject tuition for Classes 1–12 and online Mathematics for 10th, 11th and 12th Tamil Nadu Board students.",

  keywords: [
    "best tuition centre in Rajapalayam",
    "tuition centre in Muhavur",
    "offline tuition Rajapalayam",
    "Classes 1 to 12 tuition",
    "best online Maths tuition",
    "online 10th Maths tuition",
    "online 11th Maths tuition",
    "online 12th Maths tuition",
    "Tamil Nadu Board Maths classes",
    "Vignesh Infinity Academy",
  ],

  alternates: {
    canonical: "/courses/school-tuition/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${siteConfig.url}/courses/school-tuition/`,
    siteName: siteConfig.name,

    title:
      "Tuition Centre in Rajapalayam & Online Maths | Vignesh Infinity Academy",

    description:
      "Offline all-subject tuition for Classes 1–12 and online Mathematics classes for 10th, 11th and 12th Tamil Nadu Board students.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "School tuition and online Maths classes at Vignesh Infinity Academy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Tuition Centre in Rajapalayam & Online Maths",

    description:
      "Offline tuition for Classes 1–12 and online Tamil Nadu Board Maths classes for 10th, 11th and 12th.",

    images: ["/og-image.png"],
  },
};

const formats = [
  {
    icon: MapPin,
    title: "Offline all-subject tuition",
    text: "Available for Classes 1–12 in Muhavur, Rajapalayam. Subject availability depends on the standard and current batch.",
  },
  {
    icon: Laptop2,
    title: "Online Mathematics only",
    text: "Online classes are available only for Mathematics for 10th, 11th and 12th standard students.",
  },
  {
    icon: School,
    title: "Tamil Nadu Board syllabus",
    text: "School tuition and online Mathematics classes follow the Tamil Nadu Board of Secondary Education syllabus.",
  },
  {
    icon: BookOpenCheck,
    title: "Regular academic support",
    text: "Clear explanations, textbook practice, revision, tests and individual doubt clarification are included.",
  },
];

const benefits = [
  "Simple Tamil and English explanations",
  "Individual attention according to student level",
  "Tamil Nadu Board textbook-based teaching",
  "Regular homework and problem practice",
  "Tests, revision and exam preparation",
  "Direct doubt clarification and academic support",
];

const tuitionFaqs = [
  {
    question:
      "Does Vignesh Infinity Academy provide online tuition for all subjects?",

    answer:
      "No. Online classes are currently available only for Mathematics for 10th, 11th and 12th standard students. All-subject tuition is available only through offline classroom batches.",
  },
  {
    question:
      "Which classes are covered in offline tuition?",

    answer:
      "Offline tuition is available for students from Classes 1–12. The subjects offered may vary according to the standard, batch and current seat availability.",
  },
  {
    question:
      "Which syllabus is followed?",

    answer:
      "The academy follows the Tamil Nadu Board of Secondary Education syllabus for school tuition and online Mathematics classes.",
  },
  {
    question:
      "What is the fee for online 10th Maths tuition?",

    answer:
      "The regular annual fee is ₹11,999. The current limited-time offer fee is ₹5,999 for the full academic year.",
  },
  {
    question:
      "What is the fee for online 11th and 12th Maths tuition?",

    answer:
      "The regular annual fee is ₹13,999. The current limited-time offer fee is ₹6,999 per year for both 11th and 12th Mathematics.",
  },
  {
    question:
      "How can I know the offline tuition fee?",

    answer:
      "Offline tuition fees depend on the standard, subjects and batch. Contact Vignesh Infinity Academy for the current monthly fee and seat availability.",
  },
];

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${siteConfig.url}/courses/school-tuition/#webpage`,

      url: `${siteConfig.url}/courses/school-tuition/`,

      name:
        "Tuition Centre in Rajapalayam and Online Maths Classes",

      description:
        "Offline tuition for Classes 1–12 and online Mathematics classes for 10th, 11th and 12th Tamil Nadu Board students.",

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

      name: "School Tuition Courses",

      numberOfItems: schoolCourses.length,

      itemListElement: schoolCourses.map((course, index) => ({
        "@type": "ListItem",
        position: index + 1,

        item: {
          "@type": "Course",
          name: course.title,
          description: course.description,
          url: `${siteConfig.url}/courses/${course.slug}/`,

          provider: {
            "@type": "EducationalOrganization",
            "@id": `${siteConfig.url}/#organization`,
            name: siteConfig.name,
          },
        },
      })),
    },

    {
      "@type": "FAQPage",

      mainEntity: tuitionFaqs.map((item) => ({
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
          name: "School Tuition",
          item: `${siteConfig.url}/courses/school-tuition/`,
        },
      ],
    },
  ],
};

export default function SchoolTuitionPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      <PageHero
        eyebrow="School Tuition"
        title="Offline tuition in Rajapalayam and online Maths classes"
        description="Choose offline all-subject tuition for Classes 1–12 or online Mathematics classes for 10th, 11th and 12th, following the Tamil Nadu Board syllabus."
      />

      <section className="section-space">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Class formats"
              title="Offline tuition and online Maths are clearly separated"
              description="Students can select the learning mode that matches their class, subject requirements and location."
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
                    <div className="grid size-12 place-items-center rounded-2xl bg-blue-600 text-white">
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
              eyebrow="Available tuition courses"
              title="Choose the right class for your academic needs"
              description="Offline all-subject tuition is available for Classes 1–12. Online Mathematics is available for 10th, 11th and 12th students."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {schoolCourses.map((course, index) => (
              <Reveal
                key={course.slug}
                delay={index * 80}
                className="h-full"
              >
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white sm:p-10">
              <UsersRound className="text-sky-300" size={38} />

              <p className="mt-6 text-sm font-black tracking-[.18em] text-sky-300 uppercase">
                Student-focused learning
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Looking for a trusted tuition centre in Rajapalayam?
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Vignesh Infinity Academy provides structured offline
                tuition in Muhavur, Rajapalayam, along with online
                Mathematics classes for Tamil Nadu Board students.
                Teaching focuses on clear explanations, regular
                practice and improved academic confidence.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <p className="eyebrow">
                Why choose the academy?
              </p>

              <h2 className="section-title mt-3">
                Practical academic support at every stage
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

      <section className="section-space bg-blue-50">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-5xl rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm sm:p-10">
              <p className="eyebrow">
                Best tuition and online Maths searches
              </p>

              <h2 className="section-title mt-3">
                School tuition designed for understanding and progress
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-700">
                <p>
                  Parents searching for the best tuition centre in
                  Rajapalayam should consider teaching quality,
                  individual attention, regular practice, student
                  results and communication. Vignesh Infinity Academy
                  provides offline tuition for Classes 1–12 with
                  Tamil Nadu Board textbook support.
                </p>

                <p>
                  Students looking for the best online Maths tuition
                  can join dedicated Mathematics classes for 10th,
                  11th or 12th standard. These courses include
                  step-by-step explanations, textbook problems, tests,
                  revision and examination preparation.
                </p>

                <p>
                  Online classes are for Mathematics only. Students
                  requiring support in multiple school subjects should
                  join the offline tuition batches in Rajapalayam.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">
              Tuition questions
            </p>

            <h2 className="section-title mt-3">
              Frequently asked questions
            </h2>

            <p className="section-copy mt-5">
              Review the class mode, syllabus and tuition fees before
              contacting the academy for the current batch schedule.
            </p>
          </div>

          <FAQ items={tuitionFaqs} />
        </div>
      </section>

      <CTA title="Enquire about tuition batches" />
    </>
  );
}