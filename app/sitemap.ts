import type { MetadataRoute } from "next";
import { site } from "./lib/site";

export const dynamic = "force-static";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/stay", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/experiences", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/packages", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/gallery", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/discover", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/booking", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/partner", priority: 0.5, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${site.url}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
