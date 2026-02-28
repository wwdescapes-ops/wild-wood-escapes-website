'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={styles.heroContent}
        >
          <h1>Discover Serenity in Naivasha</h1>
          <p>
            Experience the best cottages and guest houses near Hell&apos;s Gate.
            A perfect blend of nature, comfort, and premium hospitality.
          </p>
          <div className={styles.heroActions}>
            <Link href="/jazby-guest-house" className="btn-primary">Explore Jazby</Link>
            <Link href="/wild-wood-cottages" className={styles.secondaryBtn}>Explore Wild Wood</Link>
          </div>
        </motion.div>
      </section>

      <section className={`container ${styles.propertiesSection}`}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={styles.sectionHeader}
        >
          <h2>Our Properties</h2>
          <p>Exclusive accommodations tailored for your perfect getaway in Nakuru County.</p>
        </motion.div>

        <div className={styles.propertiesGrid}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.propertyCardWrapper}
          >
            <Link href="/jazby-guest-house" className={styles.propertyCard}>
              <div className={styles.cardImagePlaceholder}>
                <span className={styles.badge}>Guest House</span>
              </div>
              <div className={styles.cardContent}>
                <h3>Jazby Guest House</h3>
                <p>Top-rated comfort, exceptional value, and right near nature. Our self-catering suites offer free WiFi and beautiful shared spaces. Perfect to beat the WRC prices.</p>
                <span className={styles.cardLink}>View Details &rarr;</span>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.propertyCardWrapper}
          >
            <Link href="/wild-wood-cottages" className={styles.propertyCard}>
              <div className={styles.cardImagePlaceholderDark}>
                <span className={styles.badge}>Cottages</span>
              </div>
              <div className={styles.cardContent}>
                <h3>Wild Wood Cottages</h3>
                <p>A serene nature retreat with mountain views, perfect for a self-catering getaway. Handicap accessible ground floor units right near Crescent Island and Hell&apos;s Gate.</p>
                <span className={styles.cardLink}>View Details &rarr;</span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaContent}`}>
          <h2>Ready for your escape?</h2>
          <p>Book your serene stay today and experience the ultimate relaxation in Naivasha.</p>
          <Link href="/contact" className="btn-primary btn-inverted">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
