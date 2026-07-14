"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/data/site";

const nav = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link href="/" className="group flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo-mark.webp"
            alt="Vignesh Infinity Academy logo"
            width={68}
            height={48}
            priority
            className="h-12 w-[68px] rounded-xl bg-white object-contain p-1 shadow-sm transition duration-300 group-hover:rotate-2 group-hover:scale-105"
          />
          <div className="min-w-0">
            <p className="truncate text-[15px] font-black tracking-tight text-slate-950 sm:text-lg">Vignesh Infinity Academy</p>
            <p className="text-[11px] font-bold tracking-[0.16em] text-blue-700 uppercase">Learn • Grow • Achieve</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className={`nav-link ${active ? "active" : ""}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a href={`tel:${siteConfig.phone}`} className="button button-dark hidden xl:inline-flex">
          <Phone size={17} /> {siteConfig.phoneDisplay}
        </a>

        <button className="icon-button xl:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div className={`mobile-panel xl:hidden ${open ? "open" : ""}`}>
        <nav className="container grid gap-2 py-4" aria-label="Mobile navigation">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 font-bold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700">
              {item.label}
            </Link>
          ))}
          <a href={`tel:${siteConfig.phone}`} className="button button-primary mt-2"><Phone size={17} /> Call {siteConfig.phoneDisplay}</a>
        </nav>
      </div>
    </header>
  );
}
