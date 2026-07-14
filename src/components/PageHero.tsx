import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-hero">
      <div className="orb orb-one" /><div className="orb orb-two" />
      <div className="container relative z-10 py-20 lg:py-24">
        <div className="mb-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-300"><Link href="/" className="hover:text-white">Home</Link><ChevronRight size={15} /><span className="text-sky-300">{eyebrow}</span></div>
        <p className="eyebrow text-sky-300">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
      </div>
    </section>
  );
}
