'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Jazby', href: '/jazby-guest-house' },
        { name: 'Wild Wood', href: '/wild-wood-cottages' },
        { name: 'Luna Light', href: '/luna-lights-guest-house' },
        { name: 'Stories', href: '/blog' },
    ];

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo} onClick={closeMenu} aria-label="Wild Wood Escapes - Home">
                    <Image src="/logos/wildwood-escapes-no-bg.png" alt="Wild Wood Escapes Logo" width={80} height={80} className={styles.logoImage} />
                    <span>Wild Wood Escapes</span>
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={pathname === link.href ? styles.active : ''}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact" className="btn-primary">Contact Us</Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={styles.menuButton}
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className={styles.mobileOverlay}
                    >
                        <nav className={styles.mobileNav}>
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * (index + 1) }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileActive : ''}`}
                                        onClick={closeMenu}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link
                                    href="/contact"
                                    className="btn-primary"
                                    onClick={closeMenu}
                                    style={{ width: '100%', textAlign: 'center', marginTop: '1rem' }}
                                >
                                    Contact Us
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
