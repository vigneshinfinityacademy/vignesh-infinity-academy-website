import { ChevronDown } from "lucide-react";

export default function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.question} className="faq-item group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-black text-slate-900">
            {item.question}<ChevronDown className="size-5 shrink-0 text-blue-600 transition group-open:rotate-180" />
          </summary>
          <p className="mt-4 border-t border-slate-100 pt-4 leading-7 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
