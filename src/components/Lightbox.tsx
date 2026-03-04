'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Lightbox.module.css';

interface LightboxProps {
    isOpen: boolean;
    onClose: () => void;
    images: { url: string; title?: string }[];
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
}

export default function Lightbox({
    isOpen,
    onClose,
    images,
    currentIndex,
    setCurrentIndex
}: LightboxProps) {
    const handlePrevious = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }, [currentIndex, images.length, setCurrentIndex]);

    const handleNext = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((currentIndex + 1) % images.length);
    }, [currentIndex, images.length, setCurrentIndex]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') handlePrevious();
            if (e.key === 'ArrowRight') handleNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, handlePrevious, handleNext]);

    if (!images.length) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={styles.overlay}
                    onClick={onClose}
                >
                    <button className={styles.closeButton} onClick={onClose} aria-label="Close lightbox">
                        <X size={24} />
                    </button>

                    <div className={styles.counter}>
                        {currentIndex + 1} / {images.length}
                    </div>

                    {images.length > 1 && (
                        <>
                            <button className={`${styles.navButton} ${styles.prevButton}`} onClick={handlePrevious} aria-label="Previous image">
                                <ChevronLeft size={32} />
                            </button>
                            <button className={`${styles.navButton} ${styles.nextButton}`} onClick={handleNext} aria-label="Next image">
                                <ChevronRight size={32} />
                            </button>
                        </>
                    )}

                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.imageWrapper}>
                            <Image
                                src={images[currentIndex].url}
                                alt={images[currentIndex].title || `Gallery image ${currentIndex + 1}`}
                                width={1200}
                                height={800}
                                priority
                                className={styles.lightboxImage}
                            />
                        </div>
                        {images[currentIndex].title && (
                            <div className={styles.caption}>
                                {images[currentIndex].title}
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
