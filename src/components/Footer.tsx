import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { computerCourses, schoolCourses } from "@/data/courses";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container grid gap-10 py-16 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo-mark.webp"
              alt="Vignesh Infinity Academy logo"
              width={74}
              height={52}
              className="h-[52px] w-[74px] rounded-xl bg-white object-contain p-1"
            />
            <div><p className="font-black">Vignesh Infinity Academy</p><p className="text-xs font-semibold text-sky-300">School & Computer Education</p></div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">Clear teaching, personal attention and practical digital skills for students and lifelong learners.</p>
        </div>
        <div>
          <h2 className="footer-heading">School Tuition</h2>
          <ul className="footer-links">{schoolCourses.map((course) => <li key={course.slug}><Link href={`/courses/${course.slug}`}>{course.shortTitle}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="footer-heading">Computer Courses</h2>
          <ul className="footer-links">{computerCourses.slice(0, 5).map((course) => <li key={course.slug}><Link href={`/courses/${course.slug}`}>{course.shortTitle}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="footer-heading">Contact</h2>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex gap-3"><Phone className="mt-0.5 size-4 shrink-0 text-sky-400" /><a href={`tel:${siteConfig.phone}`} className="hover:text-white">{siteConfig.phoneDisplay}</a></li>
            <li className="flex gap-3"><Mail className="mt-0.5 size-4 shrink-0 text-sky-400" /><a href={`mailto:${siteConfig.email}`} className="break-all hover:text-white">{siteConfig.email}</a></li>
            <li className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-sky-400" /><span>{siteConfig.location}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-3 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vignesh Infinity Academy. All rights reserved.</p>
          <div className="flex gap-5"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
        </div>
      </div>
    </footer>
  );
}
