'use client';

import PropertySection from '@/components/PropertySection';
import styles from './page.module.css';

const JAZBY_SECTIONS = [
    {
        title: "The Living Room",
        description: "Relax in our spacious, well-lit living area. Outfitted with comfortable seating, a flat-screen TV with streaming capabilities, and a warm ambiance perfect for unwinding after a day of adventure.",
        images: ["/images/jazby/living-room-1.jpg", "/images/jazby/living-room-2.jpg"]
    },
    {
        title: "The Kitchen",
        description: "Our fully equipped shared kitchen allows you to prepare your own meals. Features modern appliances, ample counter space, and all the utensils you need for a comfortable self-catering experience.",
        images: ["/images/jazby/kitchen-1.jpg", "/images/jazby/kitchen-2.jpg"]
    },
    {
        title: "The Bedroom",
        description: "Rest easy in our plush beds. Each room is designed for maximum tranquility with premium linens, soundproofing, and sockets conveniently placed near the bed.",
        images: ["/images/jazby/bedroom-1.jpg", "/images/jazby/bedroom-2.jpg"]
    },
    {
        title: "The Bathroom",
        description: "Clean, modern bathrooms featuring walk-in showers, fresh towels daily, and complimentary premium toiletries to refresh yourself.",
        images: ["/images/jazby/bathroom-1.jpg"]
    },
    {
        title: "The Exterior",
        description: "Enjoy our outdoor fireplace and comfortable seating. Take in the crisp Naivasha air, and you might even spot local wildlife passing by. A true pristine getaway.",
        images: ["/images/jazby/exterior-1.jpg", "/images/jazby/exterior-2.jpg"]
    }
];

export default function JazbyPage() {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.pageHeader}>
                <div className={`container ${styles.headerContent}`}>
                    <h1>Jazby Guest House</h1>
                    <p>Premium comfort and outstanding value. Discover your serene stay in Naivasha, perfectly positioned near the best wildlife spots.</p>
                </div>
            </header>

            <main>
                <PropertySection sections={JAZBY_SECTIONS} />
            </main>

            <section className={styles.bookingCta}>
                <div className={`container ${styles.ctaContent}`}>
                    <h2>Reserve Your Stay</h2>
                    <p>Don't miss out on securing the best rates for your Naivasha retreat.</p>
                    <a href="/contact?property=jazby" className="btn-primary">Book Jazby</a>
                </div>
            </section>
        </div>
    );
}
