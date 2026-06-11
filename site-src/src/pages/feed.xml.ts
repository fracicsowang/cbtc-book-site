// RSS feed at /blog/feed.xml
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog", ({ data }) => data.draft !== true))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: "cbtcbook.com — Articles on Communications-Based Train Control",
    description:
      "Technical articles on CBTC procurement, agency case studies, standards, and operations. Drawn from twenty years of US deployment experience.",
    site: context.site ?? "https://cbtcbook.com",
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description,
      link: `/blog/${p.slug}/`,
      categories: [p.data.category, ...(p.data.tags ?? [])],
      author: p.data.author ?? "Chunjun (Francisco) Wang",
    })),
    customData: `<language>en-us</language>`,
  });
}
