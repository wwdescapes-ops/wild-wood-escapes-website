import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { reviews, Review } from '@/data/reviews';
import ReviewCard from './ReviewCard';
import styles from './ReviewsSection.module.css';

interface ReviewsSectionProps {
    propertyName?: 'Wild Wood Cottages' | 'Jazby Guest House';
    isFeatured?: boolean;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ propertyName, isFeatured }) => {
    let propertyReviews: Review[] = [];

    if (isFeatured) {
        // Take 2 top reviews from each property
        const wildWoodReviews = reviews.filter(r => r.property === 'Wild Wood Cottages').slice(0, 2);
        const jazbyReviews = reviews.filter(r => r.property === 'Jazby Guest House').slice(0, 2);
        propertyReviews = [...wildWoodReviews, ...jazbyReviews];
    } else if (propertyName) {
        propertyReviews = reviews.filter(r => r.property === propertyName);
    }

    if (propertyReviews.length === 0) return null;

    return (
        <section id="reviews" className={styles.section} aria-label="Guest Reviews">
            <div className="container">
                <div className={styles.header}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        What Our Guests Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={styles.subtitle}
                    >
                        {isFeatured
                            ? "See why our guests love staying at Wild Wood Escapes properties."
                            : `Read what our guests have to say about their stay at ${propertyName} via Booking.com.`
                        }
                    </motion.p>
                </div>

                <div className={styles.grid}>
                    {propertyReviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ReviewCard review={review} />
                        </motion.div>
                    ))}
                </div>

                <div className={styles.footer}>
                    <p>Verified reviews from our verified guests.</p>
                    {isFeatured ? (
                        <div className={styles.homeLinks}>
                            <Link href="/wild-wood-cottages#reviews" className={styles.bookingLink}>Wild Wood Reviews →</Link>
                            <span className={styles.divider}>|</span>
                            <Link href="/jazby-guest-house#reviews" className={styles.bookingLink}>Jazby Reviews →</Link>
                        </div>
                    ) : (
                        <a
                            href={`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(propertyName || '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.bookingLink}
                        >
                            View all reviews on Booking.com →
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
