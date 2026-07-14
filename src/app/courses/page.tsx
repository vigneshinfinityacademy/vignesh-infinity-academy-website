import type { Metadata } from "next";
import CourseCard from "@/components/CourseCard";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { computerCourseGroups, schoolCourses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Courses & Fees",
  description: "Explore offline all-subject tuition, online Mathematics classes for 10th–12th under the Tamil Nadu Board syllabus, and 12 computer courses with limited-time offers.",
  alternates: { canonical: "/courses/" }
};

export default function CoursesPage() {
  return <>
    <PageHero eyebrow="Courses & Fees" title="Choose the right path for academic and digital growth" description="Explore offline all-subject tuition for Classes 1–12, online Mathematics for 10th–12th under the Tamil Nadu Board syllabus, and practical computer courses." />

    <section className="section-space bg-slate-50">
      <div className="container">
        <SectionHeading eyebrow="School tuition" title="Offline all-subject tuition and online Mathematics" description="All-subject tuition is offline only. Online tuition is available only for 10th, 11th and 12th Mathematics." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">{schoolCourses.map((course, index) => <Reveal key={course.slug} delay={index * 90} className="h-full"><CourseCard course={course} /></Reveal>)}</div>
      </div>
    </section>

    {computerCourseGroups.map((group, groupIndex) => <section key={group.level} className={`section-space ${groupIndex % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
      <div className="container">
        <SectionHeading eyebrow={`${group.level} computer courses • Offer ${group.offerFeeDisplay}`} title={`${group.level} technology training`} description={group.description} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{group.courses.map((course, index) => <Reveal key={course.slug} delay={(index % 3) * 70} className="h-full"><CourseCard course={course} dark={groupIndex % 2 === 0} /></Reveal>)}</div>
      </div>
    </section>)}
    <CTA />
  </>;
}
