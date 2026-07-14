import type { Metadata } from "next";
import { BookOpenCheck, Laptop2, MapPin, School } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { schoolCourses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Tamil Nadu Board Tuition: Offline Classes & Online Maths",
  description: "Offline all-subject tuition for Classes 1–12 in Rajapalayam and online Mathematics classes for 10th, 11th and 12th under the Tamil Nadu Board syllabus.",
  keywords: ["Tamil Nadu Board tuition", "offline tuition Rajapalayam", "online 10th maths", "online 11th maths", "online 12th maths"],
  alternates: { canonical: "/courses/school-tuition/" }
};

const formats = [
  {
    icon: MapPin,
    title: "Offline all-subject tuition",
    text: "Available for Classes 1–12 in Rajapalayam. Subject availability depends on the standard and batch."
  },
  {
    icon: Laptop2,
    title: "Online Mathematics only",
    text: "Available for 10th, 11th and 12th standard students. We do not offer all-subject tuition online."
  },
  {
    icon: School,
    title: "Tamil Nadu Board syllabus",
    text: "School tuition and online Mathematics classes follow the Tamil Nadu Board of Secondary Education syllabus."
  },
  {
    icon: BookOpenCheck,
    title: "Regular academic support",
    text: "Clear explanations, textbook practice, revision, tests and individual doubt clarification are included."
  }
];

export default function Page() {
  return <>
    <PageHero
      eyebrow="School Tuition"
      title="The right learning mode for every school student"
      description="Choose offline all-subject tuition for Classes 1–12 or online Mathematics classes for 10th, 11th and 12th, following the Tamil Nadu Board syllabus."
    />

    <section className="section-space">
      <div className="container">
        <SectionHeading eyebrow="Class formats" title="Offline tuition and online Maths are clearly separated" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {formats.map((item, index) => {
            const Icon = item.icon;
            return <Reveal key={item.title} delay={index * 70}>
              <div className="feature-card h-full">
                <div className="grid size-12 place-items-center rounded-2xl bg-blue-600 text-white"><Icon size={23} /></div>
                <h2 className="mt-5 text-lg font-black">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            </Reveal>;
          })}
        </div>
      </div>
    </section>

    <section className="section-space bg-slate-50">
      <div className="container grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {schoolCourses.map((course, index) => <Reveal key={course.slug} delay={index * 80} className="h-full"><CourseCard course={course} /></Reveal>)}
      </div>
    </section>

    <CTA title="Enquire about tuition batches" />
  </>;
}
