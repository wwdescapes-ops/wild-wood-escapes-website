import Link from 'next/link';
import Image from 'next/image';
import { Leaf } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerGrid}`}>
                <div className={styles.brand}>
                    <Image src="/logos/wildwood-escapes-no-bg.png" alt="Wild Wood Escapes Logo" width={80} height={80} className={styles.logoImage} />
                    <div className={styles.brandTitleContainer}>
                        <h2>Wild Wood Escapes</h2>
                        <span className={styles.ecoBadge}><Leaf size={14} /> Eco-Friendly</span>
                    </div>
                    <p>Serene stays in Naivasha. Experience nature, comfort, and premium hospitality near Hell&apos;s Gate and beyond.</p>
                </div>
                <div className={styles.links}>
                    <h3>Properties</h3>
                    <Link href="/jazby-guest-house">Jazby Guest House</Link>
                    <Link href="/wild-wood-cottages">Wild Wood Cottages</Link>
                    <Link href="/luna-lights-guest-house">Luna Light Guest House</Link>
                </div>
                <div className={styles.links}>
                    <h3>Discover</h3>
                    <Link href="/blog">Our Stories</Link>
                    <Link href="/contact">Contact Us</Link>
                </div>
                <div className={styles.contact}>
                    <h3>Contact</h3>
                    <p>Email: <a href="mailto:info@wildwoodescapes.com">info@wildwoodescapes.com</a></p>
                    <p>Location: Naivasha, Kenya</p>
                    <p>Phone: <a href="tel:+254783777434">+254 783 777434</a></p>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} Wild Wood Escapes. All rights reserved.</p>
            </div>
        </footer>
    );
}
