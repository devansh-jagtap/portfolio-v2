import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://devanshjagtap.me",
      priority: 1,
      changeFrequency: "weekly",
      lastModified: new Date(),
    },
  ];
}