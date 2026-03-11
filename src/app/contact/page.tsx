'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import { Mail, MapPin, Instagram, Facebook, Phone } from 'lucide-react';
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
                        <p><a href="mailto:info@wildwoodescapes.com">info@wildwoodescapes.com</a></p>
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
                            <Phone size={20} className={styles.icon} />
                            <h3>Phone</h3>
                        </div>
                        <p><a href="tel:+254783777434">+254 783 777434</a></p>
                    </div>

                    <div className={styles.infoBlock}>
                        <div className={styles.blockTitle}>
                            <Instagram size={20} className={styles.icon} />
                            <h3>Social Media</h3>
                        </div>
                        
                        <div className={styles.propertySocials}>
                            <div className={styles.propertySocialBlock}>
                                <div className={styles.propertyBrand}>
                                    <Image src="/logos/jazby/jazby-1-no-bg.png" alt="Jazby Logo" width={100} height={40} className={styles.propertyLogo} />
                                    <span>Jazby Guest House</span>
                                </div>
                                <div className={styles.socialLinks}>
                                    <a href="https://www.facebook.com/jazbyguesthouse/" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                                        <Facebook size={16} />
                                        <span>Facebook</span>
                                    </a>
                                    <a href="https://www.instagram.com/jazbyhomestay/" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                                        <Instagram size={16} />
                                        <span>Instagram</span>
                                    </a>
                                    <a href="https://www.tiktok.com/@jazbyguesthouse" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                                        <span className={styles.tiktokIcon}>T</span>
                                        <span>TikTok</span>
                                    </a>
                                </div>
                            </div>

                            <div className={styles.propertySocialBlock}>
                                <div className={styles.propertyBrand}>
                                    <Image src="/logos/wildwood-cottages/wildwood-cottages-no-bg.png" alt="Wild Wood Logo" width={120} height={40} className={styles.propertyLogo} />
                                    <span>Wild Wood Cottages</span>
                                </div>
                                <div className={styles.socialLinks}>
                                    <a href="https://www.facebook.com/p/Wild-Wood-Cottages-WWC-61577249319225/" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                                        <Facebook size={16} />
                                        <span>Facebook</span>
                                    </a>
                                    <a href="https://www.instagram.com/wildwoodcottages/" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                                        <Instagram size={16} />
                                        <span>Instagram</span>
                                    </a>
                                    <a href="https://www.tiktok.com/@wildwoodcottagesnaivasha" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                                        <span className={styles.tiktokIcon}>T</span>
                                        <span>TikTok</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.formSection}>
                    <h2>Send an Enquiry</h2>
                    <Suspense fallback={<p>Loading booking form...</p>}>
                        <BookingForm
                            successTitle="Message Received!"
                            successMessage="Thank you for reaching out to Wild Wood Escapes. Whether you're looking for the best guest house in Naivasha or a private cottage retreat, we'll get back to you shortly."
                        />
                    </Suspense>
                </div>
            </main>
        </div>
    );
}
