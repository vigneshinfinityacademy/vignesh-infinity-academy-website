import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Award,
  BookOpenCheck,
  CheckCircle2,
  Code2,
  Laptop2,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  UsersRound,
} from "lucide-react";

import CTA from "@/components/CTA";
import CourseCard from "@/components/CourseCard";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

import {
  featuredComputerCourses,
  schoolCourses,
} from "@/data/courses";

import {
  siteConfig,
  whatsappUrl,
} from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute:
      "Vignesh Infinity Academy | Tuition Centre in Rajapalayam",
  },

  description:
    "Searching for the best tuition centre in Rajapalayam or online Maths tuition for Tamil Nadu Board students? Vignesh Infinity Academy provides offline tuition for Classes 1–12, online Maths for 10th, 11th and 12th, and computer courses.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${siteConfig.url}/`,
    siteName: siteConfig.name,

    title:
      "Vignesh Infinity Academy | Tuition Centre in Rajapalayam",

    description:
      "Offline tuition for Classes 1–12, online Maths classes for 10th, 11th and 12th Tamil Nadu Board students, and practical computer courses.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vignesh Infinity Academy tuition centre in Rajapalayam",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Vignesh Infinity Academy | Tuition Centre in Rajapalayam",

    description:
      "Offline tuition, online Tamil Nadu Board Maths tuition and computer courses.",

    images: ["/og-image.png"],
  },
};

const benefits = [
  {
    icon: BookOpenCheck,
    title: "Clear explanations",
    text: "Complex lessons are broken into simple and understandable steps.",
  },
  {
    icon: UsersRound,
    title: "Personal attention",
    text: "Students receive guidance according to their learning level and pace.",
  },
  {
    icon: Target,
    title: "Goal-focused practice",
    text: "Revision, tests and practical exercises support measurable progress.",
  },
  {
    icon: Laptop2,
    title: "Online Maths and offline tuition",
    text: "Offline all-subject tuition and online Mathematics classes for Classes 10–12.",
  },
];

const homeFaqs = [
  {
    question:
      "How should parents choose the best tuition centre in Rajapalayam?",

    answer:
      "Parents should consider teaching quality, individual attention, regular tests, clear explanations, student results and communication with parents. Vignesh Infinity Academy provides offline tuition for Classes 1–12 with structured academic support.",
  },

  {
    question:
      "Does Vignesh Infinity Academy provide online tuition for all subjects?",

    answer:
      "No. Online tuition is available only for Mathematics for 10th, 11th and 12th standard students. All-subject tuition for Classes 1–12 is available offline.",
  },

  {
    question:
      "Which syllabus is followed for the online Mathematics classes?",

    answer:
      "The online Mathematics classes follow the Tamil Nadu Board of Secondary Education syllabus.",
  },

  {
    question:
      "What are the online Maths tuition fees?",

    answer:
      "The limited-time offer fee is ₹5,999 per year for 10th Mathematics and ₹6,999 per year for 11th and 12th Mathematics. Contact the academy to confirm current offer validity and batch availability.",
  },

  {
    question:
      "Are computer courses available for beginners?",

    answer:
      "Yes. Beginner, programming, professional and career-oriented computer courses are available for school students, college students, job seekers and working professionals.",
  },
];

const homepageSchema = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/#webpage`,

      url: `${siteConfig.url}/`,

      name:
        "Vignesh Infinity Academy | Tuition Centre in Rajapalayam",

      description:
        "Offline tuition for Classes 1–12, online Mathematics classes for 10th, 11th and 12th Tamil Nadu Board students, and practical computer courses.",

      isPartOf: {
        "@id": `${siteConfig.url}/#website`,
      },

      about: {
        "@id": `${siteConfig.url}/#organization`,
      },

      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/og-image.png`,
      },

      inLanguage: "en-IN",
    },

    {
      "@type": "FAQPage",

      mainEntity: homeFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,

        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={homepageSchema} />

      <section className="hero">
        <div className="orb orb-one" />
        <div className="orb orb-two" />

        <div className="container relative z-10 grid min-h-[calc(100vh-5rem)] items-center gap-14 py-16 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2 text-sm font-extrabold text-sky-200">
              <Sparkles size={16} />

              Admissions open for school and computer courses
            </div>

            <h1 className="hero-title mt-7">
              Trusted tuition centre in Rajapalayam for{" "}
              <span className="gradient-text">
                school, Maths and digital skills.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Parents and students searching for the best tuition
              centre in Rajapalayam or the best online Maths tuition
              for Tamil Nadu Board students can explore structured,
              student-focused learning at Vignesh Infinity Academy.
              We provide offline tuition for Classes 1–12, online
              Mathematics for 10th, 11th and 12th, and practical
              computer courses.
            </p>

            <p className="mt-3 font-bold text-sky-300">
              சிறந்த கல்வி • தனிப்பட்ட கவனம் • எளிய விளக்கம்
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="button button-primary"
              >
                Enquire on WhatsApp

                <ArrowRight size={18} />
              </a>

              <Link href="/courses" className="button button-outline">
                Explore all courses
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-slate-300">
              {[
                "Offline tuition: Classes 1–12",
                "Online Maths: 10th, 11th and 12th",
                "Tamil Nadu Board syllabus",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2
                    size={17}
                    className="text-emerald-400"
                  />

                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="pulse-ring" />

            <div className="glass-card float-slow p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-black tracking-[.18em] text-sky-300 uppercase">
                    Vignesh Infinity Academy
                  </p>

                  <h2 className="mt-2 text-2xl font-black">
                    Learn with confidence
                  </h2>
                </div>

                <div className="grid h-16 w-24 place-items-center rounded-2xl bg-white p-2 shadow-lg">
                  <Image
                    src="/logo-mark.webp"
                    alt="Vignesh Infinity Academy tuition centre logo"
                    width={90}
                    height={64}
                    className="h-full w-full object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <BookOpenCheck className="text-sky-300" />

                  <h3 className="mt-4 font-black">
                    School tuition
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Offline all-subject support for Classes 1–12 and
                    online Maths for Classes 10–12.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <Code2 className="text-violet-300" />

                  <h3 className="mt-4 font-black">
                    Computer courses
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Practical digital skills, coding, design, web
                    development and artificial intelligence.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-5">
                <ShieldCheck />

                <div>
                  <p className="font-black">
                    Student-focused learning
                  </p>

                  <p className="text-sm text-blue-100">
                    Simple explanations and regular practice
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-3 hidden items-center gap-3 rounded-2xl bg-white px-5 py-4 text-slate-900 shadow-2xl sm:flex">
              <div className="grid size-10 place-items-center rounded-full bg-amber-100 text-amber-600">
                <Star fill="currentColor" size={19} />
              </div>

              <div>
                <p className="font-black">
                  Quality education
                </p>

                <p className="text-xs text-slate-500">
                  Designed around student progress
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-2 bg-white py-8">
        <div className="container grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            ["100%", "10th result"],
            ["1–12", "Offline tuition"],
            ["10–12", "Online Maths"],
            ["12", "Computer course choices"],
          ].map(([value, label]) => (
            <div key={label} className="stat-card">
              <p className="text-2xl font-black text-blue-700 sm:text-3xl">
                {value}
              </p>

              <p className="mt-1 text-sm font-bold text-slate-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-space bg-slate-50">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="School tuition"
              title="Offline tuition and online Mathematics classes"
              description="All-subject tuition is available offline for Classes 1–12. Online classes are available only for Mathematics in 10th, 11th and 12th under the Tamil Nadu Board syllabus."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {schoolCourses.map((course, index) => (
              <Reveal
                key={course.slug}
                delay={index * 90}
                className="h-full"
              >
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link
              href="/courses/school-tuition"
              className="button button-dark"
            >
              View school tuition

              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Computer education"
              title="Practical computer skills for study, work and future careers"
              description="Choose from 12 carefully selected computer courses for beginners, students, job seekers and professionals, with limited-time offers starting from ₹2,999."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredComputerCourses.map((course, index) => (
              <Reveal
                key={course.slug}
                delay={(index % 3) * 80}
                className="h-full"
              >
                <CourseCard course={course} dark />
              </Reveal>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link
              href="/courses/computer-courses"
              className="button button-primary"
            >
              Explore computer courses

              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space bg-gradient-to-b from-blue-50 to-white">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">
              Why choose us
            </p>

            <h2 className="section-title mt-3">
              Personal teaching with practical and understandable
              learning
            </h2>

            <p className="section-copy mt-6">
              The academy supports academic improvement while helping
              students gain confidence in Mathematics, computers and
              modern technology.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-black text-blue-700 shadow-sm">
                Tamil and English explanation
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-black text-blue-700 shadow-sm">
                Affordable learning
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-black text-blue-700 shadow-sm">
                Regular support
              </span>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 80}
                >
                  <div className="feature-card">
                    <div className="grid size-12 place-items-center rounded-2xl bg-blue-600 text-white">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-5 text-lg font-black">
                      {item.title}
                    </h3>

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

      <section className="section-space bg-amber-50">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Student achievement"
              title="100% result in the 10th standard examination"
              description="We celebrate the consistent effort, discipline and academic performance of our students."
            />
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              ["1st Rank", "Ragavi S", "475/500"],
              [
                "2nd Rank",
                "Pandi Nivetha N & Govidaraj S",
                "471/500",
              ],
              ["3rd Rank", "Uma Viji T", "464/500"],
            ].map(([rank, name, score], index) => (
              <Reveal key={rank} delay={index * 100}>
                <div className="rounded-3xl bg-white p-7 text-center shadow-sm">
                  <Trophy className="mx-auto text-amber-500" />

                  <p className="mt-4 text-sm font-black text-blue-700">
                    {rank}
                  </p>

                  <p className="mt-3 min-h-12 text-lg font-black">
                    {name}
                  </p>

                  <p className="mt-2 text-3xl font-black text-amber-600">
                    {score}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/results"
              className="button button-dark"
            >
              See student results

              <Award size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <Reveal>
            <div className="rounded-[2rem] border border-blue-100 bg-blue-50 p-7 sm:p-10">
              <p className="eyebrow">
                Tuition and online learning
              </p>

              <h2 className="section-title mt-3">
                Searching for the best tuition centre or online Maths
                tuition?
              </h2>

              <div className="mt-6 max-w-4xl space-y-5 leading-8 text-slate-700">
                <p>
                  Vignesh Infinity Academy provides{" "}
                  <Link
                    href="/courses/offline-tuition-classes-1-to-12"
                    className="font-black text-blue-700 underline decoration-blue-300 underline-offset-4"
                  >
                    offline tuition for Classes 1–12 in Rajapalayam
                  </Link>
                  . Students receive clear explanations, regular
                  practice, revision and academic support.
                </p>

                <p>
                  Students studying under the Tamil Nadu Board can join{" "}
                  <Link
                    href="/courses/online-10th-maths-classes"
                    className="font-black text-blue-700 underline decoration-blue-300 underline-offset-4"
                  >
                    online 10th Maths tuition
                  </Link>
                  ,{" "}
                  <Link
                    href="/courses/online-11th-maths-classes"
                    className="font-black text-blue-700 underline decoration-blue-300 underline-offset-4"
                  >
                    online 11th Maths tuition
                  </Link>{" "}
                  or{" "}
                  <Link
                    href="/courses/online-12th-maths-classes"
                    className="font-black text-blue-700 underline decoration-blue-300 underline-offset-4"
                  >
                    online 12th Maths tuition
                  </Link>
                  .
                </p>

                <p>
                  The academy also provides{" "}
                  <Link
                    href="/courses/computer-courses"
                    className="font-black text-blue-700 underline decoration-blue-300 underline-offset-4"
                  >
                    computer courses in Rajapalayam
                  </Link>{" "}
                  covering basic computer skills, programming, web
                  development, app development, data analysis and
                  artificial intelligence.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-slate-50">
        <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">
              Common questions
            </p>

            <h2 className="section-title mt-3">
              Tuition and course FAQs
            </h2>

            <p className="section-copy mt-5">
              Learn about tuition modes, syllabus, online Maths fees
              and computer-course availability.
            </p>
          </div>

          <FAQ items={homeFaqs} />
        </div>
      </section>

      <section className="section-space">
        <div className="container grid gap-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-sm font-black text-blue-700">
              <MapPin size={18} />

              Rajapalayam and online across Tamil Nadu
            </div>

            <h2 className="mt-3 text-3xl font-black tracking-tight">
              Local personal attention. Wider online access.
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Students can join offline all-subject tuition in
              Rajapalayam or attend online Mathematics classes for
              10th, 11th and 12th from anywhere in Tamil Nadu.
            </p>
          </div>

          <Link
            href="/contact"
            className="button button-primary"
          >
            Contact academy

            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}