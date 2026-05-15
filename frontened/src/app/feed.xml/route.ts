import { DESSERT_DATA } from "../menu/desserts/data";

export async function GET() {
  const baseUrl = "https://blueberry-s-grill.vercel.app";
  
  const items = DESSERT_DATA.map((item) => `
    <item>
      <title>${item.name}</title>
      <link>${baseUrl}${item.href}</link>
      <description>${item.description || item.ingredients.join(", ")}</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>${baseUrl}${item.href}</guid>
    </item>
  `).join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2000/xml/atom">
      <channel>
        <title>Blueberry's Grill - Latest Desserts</title>
        <link>${baseUrl}</link>
        <description>The latest artisanal desserts from Blueberry's Grill</description>
        <language>en-us</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
        ${items}
      </channel>
    </rss>
  `;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
