import { MetadataRoute } from 'next'
import { blogs } from '@/data/blogs'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://wildwoodescapes.co.ke'

    // Dynamic blog routes
    const blogEntries = blogs.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Static routes
    const staticRoutes = [
        '',
        '/jazby-guest-house',
        '/wild-wood-cottages',
        '/blog',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return [...staticRoutes, ...blogEntries]
}
