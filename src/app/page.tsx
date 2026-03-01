'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Wifi, Utensils, Sparkles, Mountain, Car, Crown, Accessibility, Map, Headphones } from 'lucide-react';
import styles from './page.module.css';

const AMENITIES = [
  {
    icon: <Wifi size={24} />,
    title: "Free High-Speed WiFi",
    description: "Stay connected at the best guest houses with free WiFi in Naivasha, perfect for remote work or sharing your travel highlights.",
    color: "var(--color-blue)"
  },
  {
    icon: <Utensils size={24} />,
    title: "In-House Chefs",
    description: "Enjoy gourmet meals at the best cottages with in-house chefs in Naivasha, offering personalized dining experiences.",
    color: "var(--color-orange)"
  },
  {
    icon: <Sparkles size={24} />,
    title: "Unmatched Cleanliness",
    description: "We pride ourselves on being the cleanest guest houses in Naivasha, ensuring a safe and hygienic environment for all our guests.",
    color: "var(--color-green)"
  },
  {
    icon: <Mountain size={24} />,
    title: "Scenic Mountain Views",
    description: "Wake up to breathtaking landscapes at the most scenic cottages in Naivasha, located right near Hell's Gate and Lake Naivasha.",
    color: "var(--color-purple)"
  },
  {
    icon: <Car size={24} />,
    title: "Secure On-Site Parking",
    description: "Travel with peace of mind with our secure parking in Naivasha, available 24/7 for all our residents.",
    color: "var(--color-teal)"
  },
  {
    icon: <Crown size={24} />,
    title: "Premium Experience",
    description: "Experience luxury and comfort at our premium guest houses in Naivasha, tailored for the discerning traveler.",
    color: "var(--color-yellow)"
  },
  {
    icon: <Accessibility size={24} />,
    title: "Inclusive Comfort",
    description: "Our facilities include the best handicap accessible cottages in Naivasha, ensuring comfort and easy access for everyone.",
    color: "var(--color-pink)"
  },
  {
    icon: <Map size={24} />,
    title: "Adventure Awaits",
    description: "Explore the wild from the best guest houses near Hell's Gate, putting you right at the heart of Naivasha's adventures.",
    color: "var(--color-red)"
  },
  {
    icon: <Headphones size={24} />,
    title: "Dedicated Support",
    description: "We are guest houses with the best support in Naivasha, ready to assist with WRC bookings and local activity planning.",
    color: "var(--color-cyan)"
  }
];

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
          <div className={styles.propertiesGrid}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={styles.propertyCardWrapper}
            >
              <Link href="/jazby-guest-house" className={styles.propertyCard}>
                <div className={styles.cardImagePlaceholder}>
                  <span className={styles.badge}>Guest House</span>
                </div>
                <div className={styles.cardContent}>
                  <h3>Jazby Guest House</h3>
                  <p>Top-rated comfort, exceptional value, and right near nature. Perfect to beat the WRC prices.</p>
                  <span className={styles.cardLink}>Explore &rarr;</span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={styles.propertyCardWrapper}
            >
              <Link href="/wild-wood-cottages" className={styles.propertyCard}>
                <div className={styles.cardImagePlaceholderDark}>
                  <span className={styles.badge}>Cottages</span>
                </div>
                <div className={styles.cardContent}>
                  <h3>Wild Wood Cottages</h3>
                  <p>A serene nature retreat with mountain views, perfect for a self-catering getaway.</p>
                  <span className={styles.cardLink}>Explore &rarr;</span>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className={styles.amenitiesSection}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.amenitiesHeader}
          >
            <h2>World-Class Amenities</h2>
            <p>Thoughtfully curated facilities to ensure your stay is comfortable and memorable.</p>
          </motion.div>

          <div className={styles.amenityGrid}>
            {AMENITIES.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.amenityCard}
                style={{ '--accent-color': amenity.color } as React.CSSProperties}
              >
                <div className={styles.amenityIcon}>
                  {amenity.icon}
                </div>
                <h3>{amenity.title}</h3>
                <p>{amenity.description}</p>
              </motion.div>
            ))}
          </div>
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
