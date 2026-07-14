import Link from "next/link";
import { ArrowUpRight, BookOpen, Code2, IndianRupee, Sparkles } from "lucide-react";
import type { Course } from "@/data/courses";

export default function CourseCard({ course, dark = false }: { course: Course; dark?: boolean }) {
  const Icon = course.category === "School Tuition" ? BookOpen : Code2;
  const label = course.level ? `${course.level} Course` : course.category;

  return (
    <article className={`course-card group ${dark ? "course-card-dark" : ""}`}>
      {course.limitedTimeOffer && (
        <div className="offer-ribbon"><Sparkles size={13} /> Limited-time offer</div>
      )}
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="course-icon"><Icon size={25} /></div>
          <span className="course-category">{label}</span>
        </div>

        <p className={`mt-7 text-xs font-black tracking-[0.16em] uppercase ${dark ? "text-sky-300" : "text-blue-600"}`}>
          {course.eyebrow}
        </p>
        <h3 className="course-card-title mt-3 text-xl font-black tracking-tight">{course.shortTitle}</h3>
        <p className={`course-card-description mt-3 text-sm leading-7 ${dark ? "text-slate-300" : "text-slate-600"}`}>{course.description}</p>

        {course.offerFeeDisplay ? (
          <div className={`course-price-box mt-5 rounded-2xl border px-4 py-3 ${dark ? "border-white/10 bg-white/5" : "border-blue-100 bg-blue-50"}`}>
            <div className="flex items-center justify-between gap-3">
              <span className={`flex items-center gap-2 text-xs font-black tracking-wider uppercase ${dark ? "text-slate-300" : "text-slate-500"}`}>
                <IndianRupee size={15} /> Offer fee
              </span>
              <span className="text-sm font-extrabold text-slate-400 line-through">{course.regularFeeDisplay}</span>
            </div>
            <div className="mt-1 flex items-end justify-between gap-3">
              <span className={`text-xs font-black uppercase ${dark ? "text-amber-300" : "text-amber-700"}`}>Limited time</span>
              <span className={`text-2xl font-black ${dark ? "text-amber-300" : "text-blue-700"}`}>{course.offerFeeDisplay}</span>
            </div>
          </div>
        ) : (
          <div className={`course-price-box mt-5 rounded-2xl border px-4 py-3 ${dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-slate-50"}`}>
            <span className={`flex items-center gap-2 text-xs font-black tracking-wider uppercase ${dark ? "text-slate-300" : "text-slate-500"}`}>
              <IndianRupee size={15} /> Tuition fee
            </span>
            <p className={`mt-2 text-xl font-black ${dark ? "text-white" : "text-slate-900"}`}>Contact academy</p>
          </div>
        )}

        <Link href={`/courses/${course.slug}`} className={`relative z-10 mt-auto inline-flex items-center gap-2 pt-6 font-black transition group-hover:gap-3 ${dark ? "text-sky-300" : "text-blue-600"}`}>
          View course <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}
