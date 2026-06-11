// Astro content collection — defines the blog post schema.
// The 100 markdown drafts live in /blog-drafts/. We mirror them here
// via a build-time copy step (see daily-publish.sh) so Astro can validate
// frontmatter and generate static pages.

import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().max(200),
    // Note: `slug` is reserved by Astro and derived from the filename.
    // The frontmatter still has a slug field; we just don't validate it here.
    description: z.string().max(500),
    date: z.coerce.date(),
    author: z.string().default("Chunjun (Francisco) Wang"),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    primary_keyword: z.string(),
    secondary_keywords: z.array(z.string()).default([]),
    related_chapters: z.array(z.number()).default([]),
    internal_links: z.array(z.string()).default([]),
    og_image: z.string().optional(),
    read_time: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
