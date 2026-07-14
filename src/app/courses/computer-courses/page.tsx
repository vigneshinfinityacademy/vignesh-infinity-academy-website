import type { Metadata } from "next";
import { BriefcaseBusiness, CheckCircle2, IndianRupee, Layers3 } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { computerCourseGroups } from "@/data/courses";

export const metadata: Metadata = {
  title: "Computer Courses in Rajapalayam with Fees",
  description: "Explore 12 carefully selected computer courses with limited-time offers: beginner ₹2,999, programming ₹3,999, professional ₹5,999 and career ₹14,999.",
  keywords: ["computer courses in Rajapalayam with fees", "programming course Rajapalayam", "online computer courses Tamil Nadu", "career computer courses"],
  alternates: { canonical: "/courses/computer-courses/" }
};

const levelStyles = {
  Beginner: { badge: "bg-emerald-100 text-emerald-800", glow: "from-emerald-500/15" },
  Programming: { badge: "bg-blue-100 text-blue-800", glow: "from-blue-500/15" },
  Professional: { badge: "bg-violet-100 text-violet-800", glow: "from-violet-500/15" },
  Career: { badge: "bg-amber-100 text-amber-800", glow: "from-amber-500/20" }
} as const;

export default function Page() {
  return <>
    <PageHero
      eyebrow="Computer Courses by Vignesh Technologies"
      title="Practical technology courses with limited-time offers"
      description="Choose from 12 carefully selected beginner, programming, professional and career-oriented courses. Every course clearly shows its regular fee and limited-time offer."
    />

    <section className="relative z-10 -mt-8">
      <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {computerCourseGroups.map((group) => <a key={group.level} href={`#${group.level.toLowerCase()}`} className="pricing-summary-card">
          <span className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider ${levelStyles[group.level].badge}`}>{group.level}</span>
          <p className="mt-5 text-sm font-extrabold text-slate-400 line-through">Regular {group.regularFeeDisplay}</p>
          <p className="mt-1 text-3xl font-black text-slate-950">{group.offerFeeDisplay}</p>
          <p className="mt-1 text-sm font-black text-amber-700">Limited-time offer</p>
          <p className="mt-4 text-sm leading-6 text-slate-600">{group.courses.length} course{group.courses.length > 1 ? "s" : ""}</p>
        </a>)}
      </div>
    </section>

    <section className="pt-14">
      <div className="container">
        <div className="grid gap-5 rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7 md:grid-cols-[auto_1fr] md:items-center sm:p-9">
          <div className="grid size-16 place-items-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-600/20"><Layers3 size={30} /></div>
          <div><p className="eyebrow">One academy, four learning levels</p><h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Start at the right level and progress towards your goal</h2><p className="mt-3 max-w-4xl leading-7 text-slate-600">Begin with basic digital skills, learn programming, move into professional technologies, or select a complete career programme with project and internship support.</p></div>
        </div>
      </div>
    </section>

    {computerCourseGroups.map((group, groupIndex) => (
      <section key={group.level} id={group.level.toLowerCase()} className={`section-space scroll-mt-28 ${groupIndex % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
        <div className="container">
          <Reveal>
            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div>
                <span className={`inline-flex rounded-full px-4 py-2 text-xs font-black tracking-[.15em] uppercase ${levelStyles[group.level].badge}`}>{group.level} Courses</span>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{group.level} courses — offer {group.offerFeeDisplay}</h2>
                <p className="mt-4 max-w-3xl leading-7 text-slate-600">{group.description}</p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <IndianRupee className="text-blue-600" />
                <div><p className="text-xs font-black tracking-wider text-amber-700 uppercase">Limited-time offer</p><p className="text-sm font-bold text-slate-400 line-through">{group.regularFeeDisplay}</p><p className="text-2xl font-black text-blue-700">{group.offerFeeDisplay}</p></div>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {group.courses.map((course, index) => <Reveal key={course.slug} delay={(index % 3) * 70} className="h-full"><CourseCard course={course} dark={groupIndex % 2 === 0} /></Reveal>)}
          </div>

          {group.level === "Career" && (
            <Reveal>
              <div className="mt-12 overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white sm:p-10">
                <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
                  <div><BriefcaseBusiness className="text-amber-300" size={38} /><p className="mt-5 text-xs font-black tracking-[.18em] text-amber-300 uppercase">Included with career courses</p><h3 className="mt-3 text-3xl font-black">More than classroom lessons</h3><p className="mt-4 leading-7 text-slate-300">Every career programme includes practical preparation. Regular fee ₹24,999; limited-time offer ₹14,999.</p></div>
                  <div className="grid gap-3 sm:grid-cols-2">{["Live Project", "Internship", "Course Completion Certificate", "GitHub Support", "Resume Preparation", "Interview Guidance", "Practical Training", "Career Support"].map((benefit) => <div key={benefit} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 font-bold"><CheckCircle2 className="size-5 shrink-0 text-emerald-400" />{benefit}</div>)}</div>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    ))}

    <section className="pb-10">
      <div className="container"><p className="text-center text-sm leading-6 text-slate-500">Offer fees are promotional and available for a limited time. Contact the academy to confirm current offer validity, batch dates, mode and seat availability before admission.</p></div>
    </section>
    <CTA title="Choose a computer course that matches your goal" />
  </>;
}
