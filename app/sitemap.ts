import type { MetadataRoute } from "next";

import { galleryCategories } from "@/data/gallery/categories";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) {
    return [];
  }

  const staticRoutes = [
    "",
    "/about-me",
    "/gallery",
    "/workshops",
    "/contact",
    "/faqs",
    "/terms-and-conditions",
  ];

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
  }));

  const galleryPages: MetadataRoute.Sitemap = galleryCategories.map(
    (category) => ({
      url: new URL(`/gallery/${category.slug}`, siteUrl).toString(),
    }),
  );

  return [...staticPages, ...galleryPages];
}
