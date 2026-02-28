'use client';

import { motion } from 'framer-motion';
import styles from './PropertySection.module.css';

interface RoomSection {
    title: string;
    description: string;
    images: string[];
}

interface PropertySectionProps {
    sections: RoomSection[];
}

export default function PropertySection({ sections }: PropertySectionProps) {
    return (
        <div className={styles.propertyContainer}>
            {sections.map((section, index) => {
                // Alternate layout: even index has text on left, odd index has text on right
                const isTextLeft = index % 2 === 0;

                return (
                    <div key={index} className={`${styles.sectionRow} ${!isTextLeft ? styles.rowReverse : ''}`}>
                        {/* Sticky Text Side */}
                        <div className={styles.textColumn}>
                            <div className={`${styles.stickyText} ${!isTextLeft ? styles.stickyRight : ''}`}>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                >
                                    {section.title}
                                </motion.h2>
                                <div className={styles.accentLine} />
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                >
                                    {section.description}
                                </motion.p>
                            </div>
                        </div>

                        {/* Scrolling Images Side */}
                        <div className={styles.imageColumn}>
                            {section.images.map((imgSrc, imgIndex) => (
                                <motion.div
                                    key={imgIndex}
                                    className={styles.imageWrapper}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                >
                                    <div className={styles.imagePlaceholder}>
                                        <span>{imgSrc} <br />(Actual Image Path)</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
