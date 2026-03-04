'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Wifi, Utensils, Sparkles, Mountain, Car, Crown, Accessibility, Map, Headphones, Phone, Leaf } from 'lucide-react';
import ReviewsSection from '@/components/ReviewsSection';
import wildwoodImages from '@/data/wildwood-images.json';
import jazbyImages from '@/data/jazby-images.json';
import lunaImages from '@/data/luna-lights-images.json';
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
              <Link href="/wild-wood-cottages" className={styles.propertyCard}>
                <div className={styles.cardImagePlaceholderDark}>
                  <div className={styles.badgeContainer}>
                    <span className={styles.badge}>Cottages</span>
                    <span className={styles.ecoBadge}><Leaf size={14} /> Eco-Friendly</span>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3>Wild Wood Cottages</h3>
                  <p>A serene nature retreat and some of the best cottages in Naivasha, perfect for a self-catering getaway.</p>
                  <span className={styles.cardLink}>More details &rarr;</span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={styles.propertyCardWrapper}
            >
              <Link href="/jazby-guest-house" className={styles.propertyCard}>
                <div className={styles.cardImagePlaceholder}>
                  <div className={styles.badgeContainer}>
                    <span className={styles.badge}>Guest House</span>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3>Jazby Guest House</h3>
                  <p>Top-rated comfort and guest rooms in Naivasha. Premier vacation rental near the lake.</p>
                  <span className={styles.cardLink}>More details &rarr;</span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={styles.propertyCardWrapper}
            >
              <Link href="/luna-lights-guest-house" className={styles.propertyCard}>
                <div className={styles.cardImageLuna}>
                  <div className={styles.badgeContainer}>
                    <span className={styles.badge}>Guest House</span>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3>Luna Light</h3>
                  <p>Experience comfort and convenience at Luna Light Guest House, offering affordable rooms in Naivasha.</p>
                  <span className={styles.cardLink}>More details &rarr;</span>
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
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={styles.ecoImageGroup}
            >
              <div className={styles.mainImageWrapper}>
                <Image
                  src="https://res.cloudinary.com/dikq4no6r/image/upload/v1772337446/Silv-4137_wh1yvp.jpg"
                  alt="Lush green compound at Wild Wood Cottages"
                  width={700}
                  height={500}
                  className={styles.ecoImageMain}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "backOut" }}
                className={styles.floatingImageWrapper}
              >
                <Image
                  src="https://res.cloudinary.com/dikq4no6r/image/upload/v1772562319/mary-kiragu-eco-tourism-img-1_r1sth7.jpg"
                  alt="Mary Kiragu at Ecomondo Tech Expo 2025"
                  width={400}
                  height={500}
                  className={styles.ecoImageFloating}
                />
                <div className={styles.imageCaption}>
                  <strong>Mary Kiragu</strong>
                  <span>Founder & Director</span>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={styles.ecoText}
            >
              <div className={styles.ecoTag}>
                <Leaf size={16} />
                <span>Global Eco-Tourism & Circular Hospitality</span>
              </div>
              <h2>Pioneering <strong>Sustainable Hospitality</strong> on the Global Stage</h2>
              <p>
                From rural Kenya to the international stage at <strong>Ecomondo Tech Expo 2025 in Italy</strong>,
                Wild Wood Escapes is making global waves in eco-tourism. Our founder, Mary Kiragu, recently
                showcased our little eco-lodge as a living model of circular hospitality and bioeconomy innovation.
              </p>
              <p>
                What began as an experiment in building premium nature retreats from recycled waste containers
                has evolved into some of the best guest houses in Naivasha. We&apos;ve proven that sustainable
                hospitality can be both profitable and world-class, combining luxury with a deep respect for
                the environment near Hell&apos;s Gate.
              </p>
              <p>
                Today, our mission expands beyond Nakuru County. As we grow, we remain rooted in the practices
                that define us: cooking on solar, harvesting rainwater, and growing our own organic food,
                proving that small ideas rooted in purpose can travel the world.
              </p>
              <ul className={styles.ecoList}>
                <li>Circular hospitality: Upcycled container architecture</li>
                <li>100% solar cooking and renewable energy integration</li>
                <li>Rainwater harvesting and organic farm-to-table dining</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="visual-tour" className={styles.visualTourSection}>
        <div className="container">
          <div className={styles.visualTourHeader}>
            <span>Visual Tour</span>
            <h2>Discover Our Spaces</h2>
            <p>Take a glimpse into the comfort and beauty that awaits you at our premier Naivasha retreats.</p>
          </div>

          {[
            {
              name: "Wild Wood Cottages",
              images: [...wildwoodImages.exterior, ...wildwoodImages.bedroom, ...wildwoodImages.bathroom, ...wildwoodImages.living_room, ...wildwoodImages.kitchen].slice(0, 8),
              link: "/wild-wood-cottages"
            },
            {
              name: "Jazby Guest House",
              images: [...jazbyImages.exterior, ...jazbyImages.bedroom, ...jazbyImages.bathroom, ...jazbyImages.living_room, ...jazbyImages.kitchen].slice(0, 8),
              link: "/jazby-guest-house"
            },
            {
              name: "Luna Light",
              images: [...lunaImages.exterior, ...lunaImages.bedroom, ...lunaImages.bathroom].slice(0, 8),
              link: "/luna-lights-guest-house"
            }
          ].map((property, pIdx) => (
            <div key={pIdx} className={styles.propertyTour}>
              <div className={styles.propertyTourMeta}>
                <h3>{property.name}</h3>
                <Link href={property.link} className={styles.viewMoreBtn}>
                  View more by {property.name} &rarr;
                </Link>
              </div>
              <div className={styles.imageGrid}>
                {property.images.map((img, iIdx) => (
                  <motion.div
                    key={iIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: iIdx * 0.05 }}
                    className={styles.tourImageWrapper}
                  >
                    <Image
                      src={img.url}
                      alt={`${property.name} view ${iIdx + 1}`}
                      width={400}
                      height={300}
                      className={styles.tourImage}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
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
