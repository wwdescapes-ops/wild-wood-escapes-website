'use client';

import { useRef, Suspense } from 'react';
import PropertySection from '@/components/PropertySection';
import BookingForm from '@/components/BookingForm';
import { Home, ConciergeBell, Users, Car, Wifi, Bath, Wind, Mountain, ShowerHead, Utensils } from 'lucide-react';
import styles from './page.module.css';

const WILDWOOD_SECTIONS = [
    {
        title: "The Living Room",
        description: "A haven of peace in our cottages in Naivasha. The seating area is equipped with a cozy sofa and soundproofing for total quiet, with large windows that invite the natural Nakuru County sunlight in for a perfect nature retreat.",
        images: ["/images/wildwood/living-room/wildwood-ct-img-13.jpg", "/images/wildwood/living-room/wildwood-ct-img-15.jpg", "/images/wildwood/living-room/wildwood-ct-img-3.jpg", "/images/wildwood/living-room/wildwood-ct-img-6.jpg"]
    },
    {
        title: "The Kitchen",
        description: "Embrace the freedom of self-catering in one of the best cottages in Naivasha. Our kitchenette features modern tools to cook up a storm in your private sanctuary after a day of exploring Crescent Island or Hell's Gate.",
        images: ["/images/wildwood/kitchen/wildwood-ct-img-16.webp"]
    },
    {
        title: "The Bedroom",
        description: "Wake up to breathtaking mountain and lake views in our premium nature retreat. These bedrooms offer a rustic feel with comfortable bedding, ensuring you are refreshed for your next Naivasha adventure.",
        images: ["/images/wildwood/bedroom/wildwood-ct-img-14.jpg", "/images/wildwood/bedroom/wildwood-ct-img-2.jpg"]
    },
    {
        title: "The Bathroom",
        description: "Our private, spotless bathrooms are designed to complement your pristine getaway. Equipped with soothing showers and fresh towels, they provide the luxury you expect from the best cottages in Naivasha.",
        images: ["/images/wildwood/bathroom/wildwood-ct-img-17.avif", "/images/wildwood/bathroom/wildwood-ct-img-18.avif"]
    },
    {
        title: "The Exterior",
        description: "Step out into nature at one of the most accessible nature retreats in Nakuru County. Our ground floor units offer immediate access to the outdoors where you can marvel at the Naivasha landscape and nearby wildlife.",
        images: ["/images/wildwood/exterior/wildwood-ct-img-1.jpg", "/images/wildwood/exterior/wildwood-ct-img-10.jpg", "/images/wildwood/exterior/wildwood-ct-img-11.jpg", "/images/wildwood/exterior/wildwood-ct-img-12.jpg", "/images/wildwood/exterior/wildwood-ct-img-4.jpg", "/images/wildwood/exterior/wildwood-ct-img-5.jpg", "/images/wildwood/exterior/wildwood-ct-img-7.jpg", "/images/wildwood/exterior/wildwood-ct-img-8.jpg", "/images/wildwood/exterior/wildwood-ct-img-9.jpg"]
    }
];

export default function WildWoodPage() {
    const bookingRef = useRef<HTMLDivElement>(null);

    const scrollToBooking = () => {
        bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.pageContainer}>
            <header className={styles.pageHeader}>
                <div className={`container ${styles.headerContent}`}>
                    <div className={styles.headerText}>
                        <h1>Wild Wood Cottages</h1>
                        <p>Discover the best cottages in Naivasha and full accommodation cottages. Wild Wood Cottages offers a serene nature retreat perfectly positioned near Hell&apos;s Gate, featuring highly accessible suites and breathtaking views.</p>
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
                    <button onClick={scrollToBooking} className="btn-primary">Book Wild Wood Now</button>
                </div>
            </header>

            <main>
                <PropertySection sections={WILDWOOD_SECTIONS} />
            </main>

            <section ref={bookingRef} className={styles.bookingSection}>
                <div className={`container ${styles.bookingContainer}`}>
                    <div className={styles.bookingInfo}>
                        <h2>Plan Your Escape</h2>
                        <p>Reconnect with nature at Wild Wood Cottages. Fill out the form below to enquire about availability and special rates for your serene getaway.</p>
                        <ul className={styles.bookingHighlights}>
                            <li>✓ Highly accessible units</li>
                            <li>✓ Direct enquiry response</li>
                            <li>✓ Personalized nature retreats</li>
                        </ul>
                    </div>
                    <div className={styles.formWrapper}>
                        <Suspense fallback={<div className={styles.formLoading}>Loading form...</div>}>
                            <BookingForm defaultProperty="Wild Wood Cottages" />
                        </Suspense>
                    </div>
                </div>
            </section>
        </div>
    );
}
