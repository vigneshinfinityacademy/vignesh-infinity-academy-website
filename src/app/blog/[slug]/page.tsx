import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, Clock3 } from "lucide-react";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import CTA from "@/components/CTA";
import { blogPosts, getBlogPost } from "@/data/blog";
import { siteConfig } from "@/data/site";

export const dynamicParams=false;
export function generateStaticParams(){return blogPosts.map(post=>({slug:post.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const{slug}=await params;const post=getBlogPost(slug);if(!post)return{};return{title:post.title,description:post.description,keywords:post.keywords,alternates:{canonical:`/blog/${slug}/`},openGraph:{type:'article',title:post.title,description:post.description,publishedTime:post.date,url:`${siteConfig.url}/blog/${slug}/`}}}
export default async function BlogPostPage({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const post=getBlogPost(slug);if(!post)notFound();const schema={"@context":"https://schema.org","@type":"Article",headline:post.title,description:post.description,datePublished:post.date,dateModified:post.date,author:{"@type":"Organization",name:siteConfig.name},publisher:{"@type":"EducationalOrganization",name:siteConfig.name,logo:{"@type":"ImageObject",url:`${siteConfig.url}/logo-full.png`}},mainEntityOfPage:`${siteConfig.url}/blog/${slug}/`};return <><JsonLd data={schema}/><PageHero eyebrow="Learning Blog" title={post.title} description={post.description}/><article className="section-space"><div className="container max-w-4xl"><div className="flex flex-wrap gap-5 border-b border-slate-200 pb-6 text-sm font-bold text-slate-500"><span className="flex items-center gap-2"><CalendarDays size={17}/>{new Date(post.date).toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'})}</span><span className="flex items-center gap-2"><Clock3 size={17}/>{post.readingTime}</span></div><div className="prose-custom">{post.sections.map(section=><section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}</div></div></article><CTA title="Need guidance for tuition or computer courses?"/></>}
