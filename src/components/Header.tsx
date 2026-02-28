'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        // Set initial state
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <Image src="/logos/wildwood-escapes-no-bg.png" alt="Wild Wood Escapes Logo" width={40} height={40} className={styles.logoImage} />
                    <span>Wild Wood Escapes</span>
                </Link>
                <nav className={styles.navLinks}>
                    <Link href="/" className={pathname === '/' ? styles.active : ''}>Home</Link>
                    <Link href="/jazby-guest-house" className={pathname === '/jazby-guest-house' ? styles.active : ''}>Jazby</Link>
                    <Link href="/wild-wood-cottages" className={pathname === '/wild-wood-cottages' ? styles.active : ''}>Wild Wood</Link>
                    <Link href="/blog" className={pathname === '/blog' ? styles.active : ''}>Stories</Link>
                    <Link href="/contact" className="btn-primary">Contact Us</Link>
                </nav>
            </div>
        </header>
    );
}
