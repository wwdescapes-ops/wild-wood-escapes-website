'use client';

import { useRef, Suspense } from 'react';
import Image from 'next/image';
import PropertySection from '@/components/PropertySection';
import BookingForm from '@/components/BookingForm';
import ReviewsSection from '@/components/ReviewsSection';
import wildwoodImages from '@/data/wildwood-images.json';
import { Home, ConciergeBell, Users, Car, Wifi, Bath, Wind, Mountain, ShowerHead, Utensils, Leaf } from 'lucide-react';
import styles from './page.module.css';

const WILDWOOD_LOGO = "/logos/wildwood-cottages/wildwood-cottages-no-bg.png";

const WILDWOOD_SECTIONS = [
    {
        id: "living-room",
        title: "Spacious Living Room in Naivasha",
        description: "A haven of peace in our cottages in Naivasha. The seating area is equipped with a cozy sofa and soundproofing for total quiet, with large windows that invite the natural Nakuru County sunlight in for a perfect nature retreat.",
        images: wildwoodImages["living-room"]
    },
    {
        id: "kitchen",
        title: "Fully Equipped Self-Catering Kitchen",
        description: "Embrace the freedom of self-catering in one of the best cottages in Naivasha. Our kitchenette features modern tools to cook up a storm in your private sanctuary after a day of exploring Crescent Island or Hell's Gate.",
        images: wildwoodImages["kitchen"]
    },
    {
        id: "bedroom",
        title: "Serene Bedrooms with Mountain Views",
        description: "Wake up to breathtaking mountain and lake views in our premium nature retreat. These bedrooms offer a rustic feel with comfortable bedding, ensuring you are refreshed for your next Naivasha adventure.",
        images: wildwoodImages["bedroom"]
    },
    {
        id: "bathroom",
        title: "Modern and Clean Private Bathrooms",
        description: "Our private, spotless bathrooms are designed to complement your pristine getaway. Equipped with soothing showers and fresh towels, they provide the luxury you expect from the best cottages in Naivasha.",
        images: wildwoodImages["bathroom"]
    },
    {
        id: "exterior",
        title: "Beautiful Exteriors and Nature Walks",
        description: "Step out into nature at one of the most accessible nature retreats in Nakuru County. Our ground floor units offer immediate access to the outdoors where you can marvel at the Naivasha landscape and nearby wildlife.",
        images: wildwoodImages["exterior"]
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
                        <div className={styles.titleWrapper}>
                            <div className={styles.titleBadgeContainer}>
                                <h1>Wild Wood Cottages: Best Self-Catering Cottages in Naivasha</h1>
                                <span className={styles.ecoBadge}><Leaf size={16} /> Eco-Friendly Nature Retreat</span>
                            </div>
                            <div className={styles.propertyLogo}>
                                <Image src={WILDWOOD_LOGO} alt="Wild Wood Logo" width={220} height={80} className={styles.headerLogo} />
                            </div>
                        </div>
                        <p>Discover the best self-catering cottages in Naivasha and luxury cottages Lake Naivasha has to offer. Wild Wood Cottages offers a serene nature retreat perfectly positioned near Hell&apos;s Gate, featuring highly accessible suites and breathtaking views.</p>

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

                        <button onClick={scrollToBooking} className="btn-primary">Reserve Wild Wood Now</button>
                    </div>

                    <div className={styles.heroImageWrapper}>
                        <Image
                            src="https://res.cloudinary.com/dikq4no6r/image/upload/v1772337446/Silv-4137_wh1yvp.jpg"
                            alt="Wild Wood Cottages Garden View"
                            fill
                            priority
                            className={styles.heroImage}
                        />
                    </div>
                </div>
            </header>

            <main>
                <PropertySection sections={WILDWOOD_SECTIONS} propertyName="Wild Wood Cottages" />
                <ReviewsSection propertyName="Wild Wood Cottages" />
            </main>

            <section id="booking" ref={bookingRef} className={styles.bookingSection}>
                <div className={styles.bookingContainer}>
                    <div className={styles.bookingInfo}>
                        <h2>Book Your Naivasha Nature Retreat</h2>
                        <p>Reconnect with nature at Wild Wood Cottages. Fill out the form below to enquire about availability and special rates for your serene getaway.</p>
                        <ul className={styles.bookingHighlights}>
                            <li>✓ Highly accessible units</li>
                            <li>✓ Direct enquiry response</li>
                            <li>✓ Personalized nature retreats</li>
                        </ul>
                    </div>
                    <div className={styles.formWrapper}>
                        <Suspense fallback={<div className={styles.formLoading}>Loading form...</div>}>
                            <BookingForm
                                defaultProperty="Wild Wood Cottages"
                                successTitle="Your Nature Retreat Awaits!"
                                successMessage="Thank you for enquiring about the best cottages in Naivasha. We're excited to help you plan your serene getaway and will be in touch soon."
                                logo={WILDWOOD_LOGO}
                                propertyName="Wild Wood Cottages"
                            />
                        </Suspense>
                    </div>
                </div>
            </section>
        </div>
    );
}
