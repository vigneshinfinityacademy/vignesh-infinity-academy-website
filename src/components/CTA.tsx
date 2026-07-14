import { ArrowRight, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/data/site";

export default function CTA({ title = "Ready to start learning?", description = "Contact us for current batch timings, course fees and admission details." }: { title?: string; description?: string }) {
  return (
    <section className="section-space">
      <div className="container">
        <div className="cta-panel">
          <div className="absolute -left-16 -top-16 size-64 rounded-full bg-blue-500/25 blur-3xl" />
          <div className="absolute -bottom-24 -right-10 size-72 rounded-full bg-violet-500/25 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="eyebrow text-sky-300">Admissions & Enquiries</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">{description}</p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button button-primary">WhatsApp Enquiry <ArrowRight size={18} /></a>
              <a href={`tel:${siteConfig.phone}`} className="button button-outline"><Phone size={18} /> Call {siteConfig.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
