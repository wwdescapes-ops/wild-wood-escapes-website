'use client';

import { useRef, Suspense } from 'react';
import Image from 'next/image';
import PropertySection from '@/components/PropertySection';
import BookingForm from '@/components/BookingForm';
import lunaLightsImages from '@/data/luna-lights-images.json';
import { Home, ConciergeBell, Users, Car, Wifi, Bath, Mountain, ShowerHead } from 'lucide-react';
import styles from './page.module.css';

const LUNA_LIGHTS_SECTIONS = [
    {
        title: "The Bedroom",
        description: "Rest easy in our very affordable guest rooms in Naivasha. Each room is designed for comfort and simplicity, providing a peaceful space to recharge after your travels through Nakuru County.",
        images: lunaLightsImages["bedroom"]
    },
    {
        title: "The Bathroom",
        description: "Our clean and functional bathrooms offer everything you need for a refreshing stay. We prioritize hygiene and convenience to ensure your time at Luna Light is as comfortable as possible.",
        images: lunaLightsImages["bathroom"]
    },
    {
        title: "The Exterior",
        description: "Luna Light Guest House is situated in a convenient location in Naivasha, offering easy access to local attractions. Our exterior areas provide a safe and welcoming environment for all our guests.",
        images: lunaLightsImages["exterior"]
    }
];

export default function LunaLightsPage() {
    const bookingRef = useRef<HTMLDivElement>(null);

    const scrollToBooking = () => {
        bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.pageContainer}>
            <header className={styles.pageHeader}>
                <div className={`container ${styles.headerContent}`}>
                    <div className={styles.headerText}>
                        <h1>Luna Light Guest House</h1>
                        <p>Experience comfort and convenience at Luna Light Guest House, offering some of the most very affordable guest rooms in Naivasha. Whether you&apos;re visiting for business or leisure, our guest house provides a welcoming stay in the heart of Nakuru County.</p>

                        <div className={styles.headerAmenities}>
                            <div className={styles.amenity}><Home size={18} /> <span>Guest House</span></div>
                            <div className={styles.amenity}><Users size={18} /> <span>Comfortable Rooms</span></div>
                            <div className={styles.amenity}><Car size={18} /> <span>Parking Available</span></div>
                            <div className={styles.amenity}><Wifi size={18} /> <span>Wifi Access</span></div>
                            <div className={styles.amenity}><Bath size={18} /> <span>Private Bathroom</span></div>
                            <div className={styles.amenity}><Mountain size={18} /> <span>Local Views</span></div>
                            <div className={styles.amenity}><ShowerHead size={18} /> <span>Hot Shower</span></div>
                            <div className={styles.amenity}><ConciergeBell size={18} /> <span>Friendly Service</span></div>
                        </div>

                        <button onClick={scrollToBooking} className="btn-primary">Book Luna Light Now</button>
                    </div>

                    <div className={styles.heroImageWrapper}>
                        <Image
                            src="https://res.cloudinary.com/dikq4no6r/image/upload/v1772454799/IMG_20250615_150252_ijlriy.jpg"
                            alt="Luna Light Guest House Exterior"
                            fill
                            priority
                            className={styles.heroImage}
                        />
                    </div>
                </div>
            </header>

            <main>
                <PropertySection sections={LUNA_LIGHTS_SECTIONS} propertyName="Luna Light Guest House" />
            </main>

            <section ref={bookingRef} className={styles.bookingSection}>
                <div className={styles.bookingContainer}>
                    <div className={styles.bookingInfo}>
                        <h2>Affordable Stay in Naivasha</h2>
                        <p>Looking for a budget-friendly and comfortable place to stay? Luna Light Guest House is your best choice for very affordable guest rooms in Naivasha. Contact us today to book your room.</p>
                        <ul className={styles.bookingHighlights}>
                            <li>✓ Unbeatable affordability</li>
                            <li>✓ Central Naivasha location</li>
                            <li>✓ Clean and secure rooms</li>
                        </ul>
                    </div>
                    <div className={styles.formWrapper}>
                        <Suspense fallback={<div className={styles.formLoading}>Loading form...</div>}>
                            <BookingForm
                                defaultProperty="Luna Light Guest House"
                                successTitle="Booking Enquiry Received!"
                                successMessage="Thank you for enquiring about our affordable rooms in Naivasha. We've received your request and will get back to you shortly to confirm availability."
                                propertyName="Luna Light Guest House"
                            />
                        </Suspense>
                    </div>
                </div>
            </section>
        </div>
    );
}
