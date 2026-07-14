import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = { title: "Education & Computer Learning Blog", description: "Useful study tips, online tuition guidance and computer-course advice from Vignesh Infinity Academy.", alternates: { canonical: "/blog/" } };
export default function BlogPage(){return <><PageHero eyebrow="Learning Blog" title="Helpful guidance for students and parents" description="Read practical articles about board-exam preparation, Mathematics tuition and choosing the right computer course."/><section className="section-space bg-slate-50"><div className="container grid gap-6 lg:grid-cols-3">{blogPosts.map((post,index)=><Reveal key={post.slug} delay={index*90}><article className="course-card h-full"><div className="flex flex-wrap gap-3 text-xs font-bold text-slate-500"><span className="flex items-center gap-1.5"><CalendarDays size={14}/>{new Date(post.date).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}</span><span className="flex items-center gap-1.5"><Clock3 size={14}/>{post.readingTime}</span></div><h2 className="mt-5 text-2xl font-black tracking-tight">{post.title}</h2><p className="mt-4 leading-7 text-slate-600">{post.description}</p><Link href={`/blog/${post.slug}`} className="mt-7 inline-flex items-center gap-2 font-black text-blue-700">Read article <ArrowRight size={17}/></Link></article></Reveal>)}</div></section></>}
