import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mellordogschool.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/puppy-classes",
    "/doggy-day-care",
    "/obedience-training",
    "/gundog-training",
    "/protection-training",
    "/sheep-dog-training",
    "/one-to-one-training",
    "/success-stories",
    "/testimonials",
    "/gallery",
    "/faq",
    "/contact",
    "/privacy-policy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
