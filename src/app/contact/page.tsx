'use client';

import { Suspense } from 'react';
import BookingForm from '@/components/BookingForm';
import styles from './page.module.css';

export default function ContactPage() {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.pageHeader}>
                <div className={`container ${styles.headerContent}`}>
                    <h1>Contact Us</h1>
                    <p>We&apos;d love to hear from you. Secure your serene stay in Naivasha today.</p>
                </div>
            </header>

            <main className={`container ${styles.mainContent}`}>
                <div className={styles.contactInfo}>
                    <h2>Get in Touch</h2>
                    <p className={styles.leadText}>
                        Whether you want to book a stay at Jazby Guest House or Wild Wood Cottages,
                        or if you just have a general question, our team is ready to help you.
                    </p>
                    <div className={styles.infoBlock}>
                        <h3>Email</h3>
                        <p>admin@wildwoodescapes.com</p>
                    </div>
                    <div className={styles.infoBlock}>
                        <h3>Location</h3>
                        <p>Naivasha, Nakuru County, Kenya</p>
                    </div>
                    <div className={styles.infoBlock}>
                        <h3>Follow Us</h3>
                        <div className={styles.socials}>
                            <a href="#">Instagram</a>
                            <a href="#">Facebook</a>
                            <a href="#">Twitter</a>
                        </div>
                    </div>
                </div>

                <div className={styles.formSection}>
                    <h2>Send an Enquiry</h2>
                    <Suspense fallback={<p>Loading booking form...</p>}>
                        <BookingForm />
                    </Suspense>
                </div>
            </main>
        </div>
    );
}
