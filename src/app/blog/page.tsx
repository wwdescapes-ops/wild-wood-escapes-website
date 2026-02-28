import Link from 'next/link';
import { blogs } from '@/data/blogs';
import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | Wild Wood Escapes',
    description: 'Read the latest stories, guides, and updates from Wild Wood Escapes. Discover the best guest houses in Naivasha, WRC rally tips, and more.',
};

export default function BlogListingPage() {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.pageHeader}>
                <div className={`container ${styles.headerContent}`}>
                    <h1>Our Stories & Guides</h1>
                    <p>Discover Naivasha, travel tips, and updates from Wild Wood Escapes.</p>
                </div>
            </header>

            <main className={`container ${styles.blogGrid}`}>
                {blogs.map((blog) => (
                    <article key={blog.slug} className={styles.blogCard}>
                        <div className={styles.blogImage}>
                            {/* Placeholder gradient for image */}
                            <div className={styles.imagePlaceholder}>
                                <span>{blog.image}</span>
                            </div>
                        </div>
                        <div className={styles.blogContent}>
                            <div className={styles.blogMeta}>
                                <span>{blog.date}</span>
                                <span>&bull;</span>
                                <span>{blog.author}</span>
                            </div>
                            <h2>
                                <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                            </h2>
                            <p>{blog.excerpt}</p>
                            <Link href={`/blog/${blog.slug}`} className={styles.readMore}>
                                Read Article &rarr;
                            </Link>
                        </div>
                    </article>
                ))}
            </main>
        </div>
    );
}
