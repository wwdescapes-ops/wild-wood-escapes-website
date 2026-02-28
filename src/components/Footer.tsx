import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerGrid}`}>
                <div className={styles.brand}>
                    <h2>Wild Wood Escapes</h2>
                    <p>Serene stays in Naivasha. Experience nature, comfort, and premium hospitality near Hell&apos;s Gate and beyond.</p>
                </div>
                <div className={styles.links}>
                    <h3>Properties</h3>
                    <Link href="/jazby-guest-house">Jazby Guest House</Link>
                    <Link href="/wild-wood-cottages">Wild Wood Cottages</Link>
                </div>
                <div className={styles.links}>
                    <h3>Discover</h3>
                    <Link href="/blog">Our Stories</Link>
                    <Link href="/contact">Contact Us</Link>
                </div>
                <div className={styles.contact}>
                    <h3>Contact</h3>
                    <p>Email: admin@wildwoodescapes.com</p>
                    <p>Location: Naivasha, Kenya</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} Wild Wood Escapes. All rights reserved.</p>
            </div>
        </footer>
    );
}
