'use client';

import { Suspense } from 'react';
import { Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
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
                        Whether you are looking for serene stays in Naivasha at Jazby Guest House or Wild Wood Cottages,
                        or if you have general questions, we pride ourselves on being guest houses with the best support
                        ready to help you plan your perfect getaway.
                    </p>

                    <div className={styles.infoBlock}>
                        <div className={styles.blockTitle}>
                            <Mail size={20} className={styles.icon} />
                            <h3>Email</h3>
                        </div>
                        <p>info@wildwoodescapes.com</p>
                    </div>

                    <div className={styles.infoBlock}>
                        <div className={styles.blockTitle}>
                            <MapPin size={20} className={styles.icon} />
                            <h3>Location</h3>
                        </div>
                        <p>Naivasha, Nakuru County, Kenya</p>
                    </div>

                    <div className={styles.infoBlock}>
                        <div className={styles.blockTitle}>
                            <Instagram size={20} className={styles.icon} />
                            <h3>Social Media</h3>
                        </div>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialItem}>
                                <Instagram size={16} />
                                <span>Instagram</span>
                            </a>
                            <a href="#" className={styles.socialItem}>
                                <Facebook size={16} />
                                <span>Facebook</span>
                            </a>
                            <a href="#" className={styles.socialItem}>
                                <Twitter size={16} />
                                <span>Twitter</span>
                            </a>
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
