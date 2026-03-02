import { allProjects } from "@/data/projects";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = allProjects.map((p) => ({
    url: `https://jamfafrica.org/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: "https://jamfafrica.org", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "https://jamfafrica.org/projects", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "https://jamfafrica.org/donate", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "https://jamfafrica.org/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "https://jamfafrica.org/stories", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "https://jamfafrica.org/gallery", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "https://jamfafrica.org/impact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "https://jamfafrica.org/our-approach", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "https://jamfafrica.org/jam-circle", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "https://jamfafrica.org/governance", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "https://jamfafrica.org/partners", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "https://jamfafrica.org/founders-message", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "https://jamfafrica.org/media", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "https://jamfafrica.org/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "https://jamfafrica.org/volunteer", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "https://jamfafrica.org/why-donate", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "https://jamfafrica.org/faqs", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "https://jamfafrica.org/financial-transparency", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "https://jamfafrica.org/legal-status", priority: 0.7, changeFrequency: "yearly" as const },
    { url: "https://jamfafrica.org/non-discrimination", priority: 0.7, changeFrequency: "yearly" as const },
    { url: "https://jamfafrica.org/privacy-policy", priority: 0.7, changeFrequency: "yearly" as const },
    { url: "https://jamfafrica.org/terms-of-use", priority: 0.7, changeFrequency: "yearly" as const },
    ...projectRoutes,
  ];
}