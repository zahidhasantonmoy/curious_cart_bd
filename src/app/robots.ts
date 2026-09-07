import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/checkout', '/profile', '/login', '/register'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'PerplexityBot', 'ClaudeBot', 'Applebot-Extended'],
        allow: ['/', '/about', '/products', '/products/*'],
        disallow: ['/admin/', '/api/'],
      },
    ],
    sitemap: 'https://curiouscart.vercel.app/sitemap.xml',
  };
}
