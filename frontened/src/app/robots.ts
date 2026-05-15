import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended', 'Bingbot'],
        allow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      }
    ],
    sitemap: 'https://blueberry-s-grill.vercel.app/sitemap.xml',
  };
}
