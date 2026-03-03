'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Wifi, Utensils, Sparkles, Mountain, Car, Crown, Accessibility, Map, Headphones, Phone, Leaf } from 'lucide-react';
import ReviewsSection from '@/components/ReviewsSection';
import styles from './page.module.css';

const AMENITIES = [
  {
    icon: <Wifi size={24} />,
    title: "Free High-Speed WiFi",
    description: "Stay connected at the best guest houses in Naivasha with free WiFi, perfect for remote work or sharing your travel highlights.",
    color: "var(--color-blue)"
  },
  {
    icon: <Utensils size={24} />,
    title: "In-House Chefs",
    description: "Enjoy gourmet meals at our best cottages in Naivasha with in-house chefs, offering personalized dining experiences in Nakuru County.",
    color: "var(--color-orange)"
  },
  {
    icon: <Sparkles size={24} />,
    title: "Unmatched Cleanliness",
    description: "We pride ourselves on having the cleanest guest houses in Naivasha, ensuring a safe and hygienic environment for all our visitors.",
    color: "var(--color-green)"
  },
  {
    icon: <Mountain size={24} />,
    title: "Scenic Mountain Views",
    description: "Wake up to breathtaking landscapes at the most scenic Naivasha holiday homes, located right near Hell's Gate and Lake Naivasha.",
    color: "var(--color-purple)"
  },
  {
    icon: <Car size={24} />,
    title: "Secure On-Site Parking",
    description: "Travel with peace of mind with our secure parking at the best guest accommodation in Naivasha, available 24/7.",
    color: "var(--color-teal)"
  },
  {
    icon: <Crown size={24} />,
    title: "Premium Experience",
    description: "Experience luxury and comfort at our premium guest houses near Hell's Gate, tailored for the discerning world traveler.",
    color: "var(--color-yellow)"
  },
  {
    icon: <Accessibility size={24} />,
    title: "Inclusive Comfort",
    description: "Our facilities include the best handicap accessible vacation rentals Naivasha has to offer, ensuring comfort for everyone.",
    color: "var(--color-pink)"
  },
  {
    icon: <Map size={24} />,
    title: "Adventure Awaits",
    description: "Explore the wild from the best guest rooms in Naivasha, putting you right at the heart of Nakuru County adventures.",
    color: "var(--color-red)"
  },
  {
    icon: <Headphones size={24} />,
    title: "Dedicated Support",
    description: "We offer accommodation guest houses in Naivasha with the best support, ready to assist with WRC bookings and local planning.",
    color: "var(--color-cyan)"
  }
];

export default function Home() {
  return (
    <div className={styles.container}>
      <section id="hero" className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={styles.heroContent}
        >
          <h1>Best Guest Houses in Naivasha for Your Next Escape</h1>
          <p>
            Experience the best guest houses in Naivasha near Hell&apos;s Gate.
            A perfect blend of nature, comfort, and premium hospitality for your ultimate staycation in Naivasha.
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
                  <p>Top-rated comfort and very affordable guest rooms in Naivasha. One of the premier vacation rentals Naivasha has to offer near the lake.</p>
                  <span className={styles.cardLink}>Explore Jazby Guest House details &rarr;</span>
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
                  <p>A serene nature retreat and some of the best cottages in Naivasha, perfect for a self-catering getaway in premium Naivasha holiday homes.</p>
                  <span className={styles.cardLink}>Explore Wild Wood Cottages details &rarr;</span>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="eco-friendly" className={styles.ecoSection}>
        <div className="container">
          <div className={styles.ecoContent}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={styles.ecoImageWrapper}
            >
              <Image
                src="https://res.cloudinary.com/dikq4no6r/image/upload/v1772337457/Silv-4164_cyfr22.jpg"
                alt="Lush green compound at Wild Wood Cottages in Naivasha"
                width={800}
                height={600}
                className={styles.ecoImage}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={styles.ecoText}
            >
              <div className={styles.ecoTag}>
                <Leaf size={16} />
                <span>Sustainable Hospitality</span>
              </div>
              <h2>Eco-Friendly Practices at Our Naivasha Nature Retreats</h2>
              <p>
                At Wild Wood Escapes, we believe in preserving the beauty of Nakuru County for generations to come.
                Our lush green compound at Wild Wood Cottages is more than just a scenic backdrop; it&apos;s a testament
                to our dedication to sustainable hospitality.
              </p>
              <p>
                As part of the best cottages in Naivasha, we implement eco-friendly practices across all our
                properties to ensure your staycation in Naivasha remains a pristine nature retreat.
                From energy conservation to responsible water management, our goal is to provide the
                cleanest guest houses in Naivasha while minimizing our environmental footprint near Hell&apos;s Gate.
              </p>
              <ul className={styles.ecoList}>
                <li>Green landscaping and biodiversity preservation</li>
                <li>Sustainable waste management across properties</li>
                <li>Energy-efficient lighting and appliances</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="amenities" className={styles.amenitiesSection}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.amenitiesHeader}
          >
            <h2>Premium Amenities at Our Naivasha Vacation Rentals</h2>
            <p>Providing the best guest accommodation in Naivasha with thoughtfully curated facilities to ensure your stay is memorable.</p>
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

      <ReviewsSection isFeatured />

      <section id="cta" className={styles.ctaSection}>
        <div className={`container ${styles.ctaContent}`}>
          <h2>Book the Best Cottages in Naivasha for Your Staycation</h2>
          <p>Book your stay at the best guest houses and cottages in Naivasha today. Experience the ultimate relaxation in our premium Naivasha holiday homes.</p>
          <Link href="/contact" className={styles.ctaButton}>
            <Phone size={20} />
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
