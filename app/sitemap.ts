import type { MetadataRoute } from "next";
import { areas } from "@/lib/areas";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const top: [string, number][] = [
    ["", 1],
    ["/valuation", 0.9],
    ["/certainty-promise", 0.8],
    ["/sales-pack", 0.7],
    ["/areas", 0.8],
    ["/about", 0.6],
    ["/contact", 0.6],
    ["/privacy", 0.2],
    ["/terms", 0.2],
  ];
  return [
    ...top.map(([p, priority]) => ({ url: `${site.url}${p}`, lastModified: now, priority })),
    ...areas.map((a) => ({ url: `${site.url}/areas/${a.slug}`, lastModified: now, priority: 0.8 })),
  ];
}
