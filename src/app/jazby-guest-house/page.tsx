'use client';

import { useRef, Suspense } from 'react';
import Image from 'next/image';
import PropertySection from '@/components/PropertySection';
import BookingForm from '@/components/BookingForm';
import ReviewsSection from '@/components/ReviewsSection';
import jazbyImages from '@/data/jazby-images.json';
import { Home, ConciergeBell, Users, Car, Wifi, Bath, Wind, Mountain, ShowerHead, Utensils } from 'lucide-react';
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
                            <h1>Jazby Guest House: Best Guest Accommodation in Naivasha</h1>
                            <div className={styles.propertyLogo}>
                                <Image src={JAZBY_LOGO} alt="Jazby Logo" width={180} height={70} className={styles.headerLogo} />
                            </div>
                        </div>
                        <p>Discover the best guest rooms near Nakuru and full accommodation guest houses in Naivasha. Jazby Guest House offers premium comfort, exceptional value, and free WiFi, perfectly positioned for your serene stay near Hell&apos;s Gate.</p>
                    </div>
                    <div className={styles.headerAmenities}>
                        <div className={styles.amenity}><Home size={20} /> <span>Apartments</span></div>
                        <div className={styles.amenity}><ConciergeBell size={20} /> <span>Room service</span></div>
                        <div className={styles.amenity}><Users size={20} /> <span>Family rooms</span></div>
                        <div className={styles.amenity}><Car size={20} /> <span>Free on-site parking</span></div>
                        <div className={styles.amenity}><Wifi size={20} /> <span>Free Wifi (In all areas • 24 Mbps)</span></div>
                        <div className={styles.amenity}><Bath size={20} /> <span>Private bathroom</span></div>
                        <div className={styles.amenity}><Wind size={20} /> <span>Balcony</span></div>
                        <div className={styles.amenity}><Mountain size={20} /> <span>View</span></div>
                        <div className={styles.amenity}><ShowerHead size={20} /> <span>Shower</span></div>
                        <div className={styles.amenity}><Utensils size={20} /> <span>Kitchenette</span></div>
                    </div>
                    <button onClick={scrollToBooking} className="btn-primary">Reserve Jazby Now</button>
                </div>
            </header>

            <main>
                <PropertySection sections={JAZBY_SECTIONS} />
                <ReviewsSection propertyName="Jazby Guest House" />
            </main>

            <section id="booking" ref={bookingRef} className={styles.bookingSection}>
                <div className={`container ${styles.bookingContainer}`}>
                    <div className={styles.bookingInfo}>
                        <h2>Reserve Your Stay at Jazby Guest House</h2>
                        <p>Experience the ultimate comfort at Jazby Guest House. Fill out the form below, and our team will get back to you with availability and a personalized quote.</p>
                        <ul className={styles.bookingHighlights}>
                            <li>✓ Instant enquiry via Resend</li>
                            <li>✓ Direct communication</li>
                            <li>✓ Best price guaranteed</li>
                        </ul>
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
