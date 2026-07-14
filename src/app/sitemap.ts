import type { MetadataRoute } from "next";
import { courses } from "@/data/courses";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/site";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes=["","/courses","/courses/school-tuition","/courses/computer-courses","/results","/about","/blog","/contact","/privacy","/terms"];
  const now=new Date();
  return [
    ...staticRoutes.map(route=>({url:`${siteConfig.url}${route}/`.replace(`${siteConfig.url}//`,`${siteConfig.url}/`),lastModified:now,changeFrequency:route===""?"weekly" as const:"monthly" as const,priority:route===""?1:0.7})),
    ...courses.map(course=>({url:`${siteConfig.url}/courses/${course.slug}/`,lastModified:now,changeFrequency:"monthly" as const,priority:0.8})),
    ...blogPosts.map(post=>({url:`${siteConfig.url}/blog/${post.slug}/`,lastModified:new Date(post.date),changeFrequency:"yearly" as const,priority:0.6})),
  ];
}
