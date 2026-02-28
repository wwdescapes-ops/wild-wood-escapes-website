'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './not-found.module.css';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={styles.content}
            >
                <h1 className={styles.errorCode}>404</h1>
                <h2 className={styles.title}>Lost in the Woods?</h2>
                <p className={styles.description}>
                    The page you are looking for has wandered off the trail. Don&apos;t worry, even the best explorers get lost sometimes.
                </p>

                <div className={styles.links}>
                    <Link href="/" className="btn-primary">Return Home</Link>
                    <Link href="/contact" className={styles.secondaryLink}>Visit Contact Page</Link>
                </div>

                <div className={styles.emailCard}>
                    <h3>Need direct assistance?</h3>
                    <p>Reach out to us directly to book your serene stay.</p>
                    <a href="mailto:admin@wildwoodescapes.com" className={styles.emailLink}>admin@wildwoodescapes.com</a>
                </div>

                <div className={styles.socials}>
                    <a href="#" aria-label="Facebook">FB</a>
                    <a href="#" aria-label="Instagram">IG</a>
                    <a href="#" aria-label="Twitter">X</a>
                </div>
            </motion.div>
        </div>
    );
}
