import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookOpenCheck, CheckCircle2, Clock3, IndianRupee, Laptop2, UsersRound } from "lucide-react";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { courses, getCourse } from "@/data/courses";
import { siteConfig } from "@/data/site";

export const dynamicParams = false;
export function generateStaticParams() { return courses.map((course) => ({ slug: course.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: course.seoTitle,
    description: course.seoDescription,
    keywords: course.keywords,
    alternates: { canonical: `/courses/${slug}/` },
    openGraph: {
      title: course.seoTitle,
      description: course.seoDescription,
      url: `${siteConfig.url}/courses/${slug}/`,
      images: ["/og-image.png"]
    }
  };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const courseUrl = `${siteConfig.url}/courses/${course.slug}/`;
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "EducationalOrganization",
      name: course.providerName || siteConfig.name,
      url: siteConfig.url
    },
    educationalLevel: course.audience,
    availableLanguage: ["English", "Tamil"],
    ...(course.board ? {
      about: [
        { "@type": "Thing", name: course.subjects || "School tuition" },
        { "@type": "Thing", name: course.board }
      ]
    } : {}),
    url: courseUrl,
    ...(course.offerFee ? {
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: course.mode,
        courseWorkload: course.duration,
        offers: {
          "@type": "Offer",
          price: course.offerFee,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: courseUrl
        }
      }
    } : { courseMode: course.mode })
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: course.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };

  const summaryItems = [
    { icon: UsersRound, label: "Suitable for", value: course.audience },
    ...(course.subjects ? [{ icon: BookOpenCheck, label: "Subject", value: course.subjects }] : []),
    ...(course.board ? [{ icon: BookOpenCheck, label: "Syllabus", value: course.board }] : []),
    { icon: Laptop2, label: "Class mode", value: course.mode },
    { icon: Clock3, label: "Duration", value: course.duration },
    ...(course.offerFeeDisplay ? [{ icon: IndianRupee, label: "Limited-time offer", value: course.offerFeeDisplay }] : [])
  ];

  return <>
    <JsonLd data={[courseSchema, faqSchema]} />
    <PageHero eyebrow={course.level ? `${course.level} Computer Course` : course.category} title={course.title} description={course.description} />

    <section className="relative z-10 -mt-8">
      <div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {summaryItems.map((item) => {
          const Icon = item.icon;
          return <div key={item.label} className={`rounded-2xl border bg-white p-5 shadow-xl ${item.label === "Limited-time offer" ? "border-amber-200 ring-4 ring-amber-50" : "border-slate-200"}`}>
            <Icon className={item.label === "Limited-time offer" ? "text-amber-600" : "text-blue-600"} />
            <p className="mt-3 text-xs font-black tracking-wider text-slate-500 uppercase">{item.label}</p>
            <p className={`mt-1 font-black ${item.label === "Limited-time offer" ? "text-2xl text-amber-700" : ""}`}>{item.value}</p>
          </div>;
        })}
      </div>
    </section>

    {course.offerFeeDisplay && (
      <section className="pt-10">
        <div className="container">
          <div className="fee-banner">
            <div>
              <p className="text-xs font-black tracking-[.18em] text-amber-700 uppercase">Limited-time admission offer</p>
              <div className="mt-2 flex flex-wrap items-end gap-x-4 gap-y-1">
                <h2 className="text-3xl font-black text-slate-950">{course.offerFeeDisplay}</h2>
                <p className="pb-1 text-lg font-extrabold text-slate-400 line-through">Regular {course.regularFeeDisplay}</p>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">This promotional fee is available for a limited time. Contact the academy to confirm the batch date, mode, seat availability and offer validity before admission.</p>
            </div>
            <a href={`https://wa.me/${siteConfig.phone.replace("+", "")}?text=${encodeURIComponent(`Hello Vignesh Infinity Academy, I want to join ${course.shortTitle}. I saw the limited-time offer of ${course.offerFeeDisplay} (regular ${course.regularFeeDisplay}). Please share the batch details.`)}`} target="_blank" rel="noreferrer" className="button button-primary shrink-0">Enquire about admission</a>
          </div>
        </div>
      </section>
    )}

    <section className="section-space">
      <div className="container grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow">Course highlights</p>
          <h2 className="section-title mt-3">What makes this course useful?</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {course.highlights.map((item) => <div key={item} className="flex gap-3 rounded-2xl bg-blue-50 p-4 font-bold text-slate-700"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-blue-600" />{item}</div>)}
          </div>
        </Reveal>
        <Reveal>
          <div className="rounded-[2rem] bg-slate-950 p-7 text-white sm:p-10">
            <p className="eyebrow text-sky-300">What you will learn</p>
            <ol className="mt-7 space-y-4">
              {course.syllabus.map((item, index) => <li key={item} className="flex gap-4"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-blue-600 font-black">{index + 1}</span><span className="pt-1.5 font-bold text-slate-200">{item}</span></li>)}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="section-space bg-slate-50">
      <div className="container">
        <SectionHeading eyebrow="Learning outcomes" title="Skills and confidence students can develop" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {course.outcomes.map((item, index) => <Reveal key={item} delay={index * 70}><div className="feature-card"><CheckCircle2 className="text-emerald-600" /><p className="mt-4 font-black">{item}</p></div></Reveal>)}
        </div>
      </div>
    </section>

    <section className="section-space">
      <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div><p className="eyebrow">Questions</p><h2 className="section-title mt-3">Frequently asked questions</h2><p className="section-copy mt-5">Review the regular and limited-time offer fees above, then contact the academy for current batch timings, offer validity and admission availability.</p></div>
        <FAQ items={course.faqs} />
      </div>
    </section>
    <CTA title={`Enquire about ${course.shortTitle}`} />
  </>;
}
