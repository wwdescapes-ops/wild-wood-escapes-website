import { notFound } from 'next/navigation';
import { blogs } from '@/data/blogs';
import styles from './page.module.css';
import Link from 'next/link';

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const blog = blogs.find((b) => b.slug === params.slug);
    if (!blog) return { title: 'Not Found' };

    return {
        title: blog.title,
        description: blog.excerpt,
    };
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const blog = blogs.find((b) => b.slug === params.slug);

    if (!blog) {
        notFound();
    }

    // Split content by double newlines for basic paragraph formatting
    const paragraphs = blog.content.split('\n\n').filter(p => p.trim() !== '');

    return (
        <div className={styles.pageContainer}>
            <header className={styles.blogHeader}>
                <div className={`container ${styles.headerContent}`}>
                    <div className={styles.meta}>
                        <Link href="/blog" className={styles.backLink}>&larr; Back to Stories</Link>
                        <span className={styles.date}>{blog.date}</span>
                    </div>
                    <h1>{blog.title}</h1>
                    <p className={styles.author}>By {blog.author}</p>
                </div>
            </header>

            <main className={`container ${styles.blogMain}`}>
                <div className={styles.imageContainer}>
                    <div className={styles.imagePlaceholder}>
                        <span>{blog.image}</span>
                    </div>
                </div>

                <article className={styles.articleContent}>
                    {paragraphs.map((para, index) => (
                        <p key={index}>{para}</p>
                    ))}
                </article>

                <section className={styles.bookingCta}>
                    <h2>Ready to Experience Naivasha?</h2>
                    <p>Book your stay at our premium cottages or guest houses today.</p>
                    <Link href="/contact" className="btn-primary">Book Now</Link>
                </section>
            </main>
        </div>
    );
}
