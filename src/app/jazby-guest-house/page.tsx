'use client';

import { useRef, Suspense } from 'react';
import Image from 'next/image';
import PropertySection from '@/components/PropertySection';
import BookingForm from '@/components/BookingForm';
import ReviewsSection from '@/components/ReviewsSection';
import jazbyImages from '@/data/jazby-images.json';
import { Home, ConciergeBell, Users, Car, Wifi, Bath, Wind, Mountain, ShowerHead, Utensils, Leaf, Facebook, Instagram } from 'lucide-react';
import styles from './page.module.css';

const JAZBY_LOGO = "/logos/jazby/jazby-1-no-bg.png";

const JAZBY_SECTIONS = [
    {
        id: "living-room",
        title: "Comfortable Guest House Living Area",
        description: "Relax in our spacious, well-lit living area, designed to be one of the best guest rooms in Naivasha for comfort and style. Outfitted with plush seating and a flat-screen TV, it offers a warm ambiance perfect for unwinding after a day of adventure in Nakuru County.",
        images: jazbyImages["living-room"]
    },
    {
        id: "kitchen",
        title: "Shared Kitchen for Your Convenience",
        description: "Our fully equipped shared kitchen allows you to embrace the freedom of self-catering during your stay at our guest houses in Naivasha. Features modern appliances and ample counter space, ideal for preparing meals after exploring Hell's Gate.",
        images: jazbyImages["kitchen"]
    },
    {
        id: "bedroom",
        title: "Top-Rated Guest Rooms in Naivasha",
        description: "Rest easy in our plush rooms, offering some of the best guest accommodation in Naivasha. Each bedroom is designed for maximum tranquility with premium linens and soundproofing to ensure a peaceful night in the heart of Nakuru County.",
        images: jazbyImages["bedroom"]
    },
    {
        id: "bathroom",
        title: "Fresh and Modern Guest Bathrooms",
        description: "Experience modern elegance in our clean, private bathrooms. Featuring walk-in showers and premium toiletries, they provide a refreshing touch to your pristine getaway in Naivasha.",
        images: jazbyImages["bathroom"]
    },
    {
        id: "exterior",
        title: "Outdoor Fireplace and Serene Garden",
        description: "Step outside to enjoy our outdoor fireplace and serene atmosphere. Take in the crisp Naivasha air where you might spot local wildlife, making Jazby one of the most sought-after guest houses in Naivasha for a nature retreat.",
        images: jazbyImages["exterior"]
    }
];

export default function JazbyPage() {
    const bookingRef = useRef<HTMLDivElement>(null);

    const scrollToBooking = () => {
        bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.pageContainer}>
            <header className={styles.pageHeader}>
                <div className={`container ${styles.headerContent}`}>
                    <div className={styles.headerText}>
                        <div className={styles.titleWrapper}>
                            <div className={styles.titleBadgeContainer}>
                                <h1>Jazby Guest House: Best Guest Accommodation in Naivasha</h1>
                                <span className={styles.ecoBadge}><Leaf size={16} /> Eco-Friendly Guest House</span>
                            </div>
                            <div className={styles.propertyLogo}>
                                <Image src={JAZBY_LOGO} alt="Jazby Logo" width={180} height={70} className={styles.headerLogo} />
                            </div>
                        </div>
                        <p>Discover the best guest rooms near Nakuru and luxury nature stays near Nairobi. Jazby Guest House offers premium comfort, exceptional value, and free WiFi, perfectly positioned for your serene stay near Hell&apos;s Gate.</p>

                        <div className={styles.headerAmenities}>
                            <div className={styles.amenity}><Home size={18} /> <span>Apartments</span></div>
                            <div className={styles.amenity}><ConciergeBell size={18} /> <span>Room service</span></div>
                            <div className={styles.amenity}><Users size={18} /> <span>Family rooms</span></div>
                            <div className={styles.amenity}><Car size={18} /> <span>Free on-site parking</span></div>
                            <div className={styles.amenity}><Wifi size={18} /> <span>Free Wifi (In all areas • 24 Mbps)</span></div>
                            <div className={styles.amenity}><Bath size={18} /> <span>Private bathroom</span></div>
                            <div className={styles.amenity}><Wind size={18} /> <span>Balcony</span></div>
                            <div className={styles.amenity}><Mountain size={18} /> <span>View</span></div>
                            <div className={styles.amenity}><ShowerHead size={18} /> <span>Shower</span></div>
                            <div className={styles.amenity}><Utensils size={18} /> <span>Kitchenette</span></div>
                        </div>

                        <button onClick={scrollToBooking} className="btn-primary">Reserve Jazby Now</button>
                    </div>

                    <div className={styles.heroImageWrapper}>
                        <Image
                            src="https://res.cloudinary.com/dikq4no6r/image/upload/v1772343101/Silv-3891_gh9wum.jpg"
                            alt="Jazby Guest House Exterior"
                            fill
                            priority
                            className={styles.heroImage}
                        />
                    </div>
                </div>
            </header>

            <main>
                <PropertySection sections={JAZBY_SECTIONS} propertyName="Jazby Guest House" />
                <ReviewsSection propertyName="Jazby Guest House" />
            </main>

            <section id="booking" ref={bookingRef} className={styles.bookingSection}>
                <div className={styles.bookingContainer}>
                    <div className={styles.bookingInfo}>
                        <h2>Reserve Your Stay at Jazby Guest House</h2>
                        <p>Experience the ultimate comfort at Jazby Guest House. Fill out the form below, and our team will get back to you with availability and a personalized quote.</p>
                        <ul className={styles.bookingHighlights}>
                            <li>✓ Instant enquiry via Resend</li>
                            <li>✓ Direct communication</li>
                            <li>✓ Best price guaranteed</li>
                        </ul>

                        <div className={styles.socialConnect}>
                            <h3>Follow Jazby Guest House</h3>
                            <div className={styles.socialLinks}>
                                <a href="https://www.facebook.com/jazbyguesthouse/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                    <Facebook size={20} />
                                    <span>Facebook</span>
                                </a>
                                <a href="https://www.instagram.com/jazbyhomestay/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                    <Instagram size={20} />
                                    <span>Instagram</span>
                                </a>
                                <a href="https://www.tiktok.com/@jazbyguesthouse" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                    <span className={styles.tiktokIcon}>T</span>
                                    <span>TikTok</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.formWrapper}>
                        <Suspense fallback={<div className={styles.formLoading}>Loading form...</div>}>
                            <BookingForm
                                defaultProperty="Jazby Guest House"
                                successTitle="Thank You for Choosing Jazby!"
                                successMessage="We've received your enquiry for the best guest house in Naivasha. Our team will contact you shortly with a personalized quote for your stay."
                                logo={JAZBY_LOGO}
                                propertyName="Jazby Guest House"
                            />
                        </Suspense>
                    </div>
                </div>
            </section>
        </div>
    );
}
