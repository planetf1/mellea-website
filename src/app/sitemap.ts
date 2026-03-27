import type { MetadataRoute } from 'next';
import { getAllBlogSlugs } from '@/lib/blogs';
import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = getAllBlogSlugs();

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${siteConfig.url}/blogs/${slug}/`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: `${siteConfig.url}/`,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/blogs/`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogEntries,
  ];
}
