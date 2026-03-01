'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { User, Mail, Home, Calendar, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import styles from './BookingForm.module.css';
import { useSearchParams } from 'next/navigation';

interface BookingFormProps {
    defaultProperty?: string;
    successTitle?: string;
    successMessage?: string;
}

export default function BookingForm({ defaultProperty, successTitle, successMessage }: BookingFormProps) {
    const searchParams = useSearchParams();
    const queryProperty = searchParams.get('property') === 'wildwood' ? 'Wild Wood Cottages' :
        searchParams.get('property') === 'jazby' ? 'Jazby Guest House' : '';

    const initialProperty = defaultProperty || queryProperty || '';

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [checkIn, setCheckIn] = useState<Date | null>(null);
    const [checkOut, setCheckOut] = useState<Date | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);

        const templateParams = {
            user_name: formData.get('name'),
            user_email: formData.get('email'),
            property_name: formData.get('property'),
            check_in: checkIn ? checkIn.toLocaleDateString() : 'N/A',
            check_out: checkOut ? checkOut.toLocaleDateString() : 'N/A',
            message: formData.get('message'),
        };

        try {
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            if (result.status === 200) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    }

    if (status === 'success') {
        return (
            <div className={styles.successMessage}>
                <h3>{successTitle || 'Request Sent Successfully!'}</h3>
                <p>{successMessage || 'Thank you for your enquiry. We will get back to you with availability and rates via email very soon.'}</p>
                <button onClick={() => setStatus('idle')} className="btn-primary mt-4">Send Another</button>
            </div>
        );
    }

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <div className={styles.inputWrapper}>
                    <User size={18} className={styles.inputIcon} />
                    <input type="text" id="name" name="name" required placeholder="John Doe" className={styles.inputField} />
                </div>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <div className={styles.inputWrapper}>
                    <Mail size={18} className={styles.inputIcon} />
                    <input type="email" id="email" name="email" required placeholder="john@example.com" className={styles.inputField} />
                </div>
            </div>

            <div className={styles.row}>
                {!defaultProperty ? (
                    <div className={styles.formGroup}>
                        <label htmlFor="property" className={styles.label}>Property</label>
                        <div className={styles.inputWrapper}>
                            <Home size={18} className={styles.inputIcon} />
                            <select id="property" name="property" required defaultValue={initialProperty} className={styles.inputField}>
                                <option value="" disabled>Select a property</option>
                                <option value="Jazby Guest House">Jazby Guest House</option>
                                <option value="Wild Wood Cottages">Wild Wood Cottages</option>
                                <option value="General Enquiry">General Enquiry</option>
                            </select>
                        </div>
                    </div>
                ) : (
                    <input type="hidden" name="property" value={defaultProperty} />
                )}
            </div>

            <div className={styles.row}>
                <div className={styles.formGroup}>
                    <label htmlFor="checkIn" className={styles.label}>Check-in Date</label>
                    <div className={styles.inputWrapper}>
                        <Calendar size={18} className={styles.inputIcon} />
                        <DatePicker
                            selected={checkIn}
                            onChange={(date: Date | null) => setCheckIn(date)}
                            selectsStart
                            startDate={checkIn}
                            endDate={checkOut}
                            minDate={new Date()}
                            placeholderText="Select date"
                            className={styles.inputField}
                            required
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="checkOut" className={styles.label}>Check-out Date</label>
                    <div className={styles.inputWrapper}>
                        <Calendar size={18} className={styles.inputIcon} />
                        <DatePicker
                            selected={checkOut}
                            onChange={(date: Date | null) => setCheckOut(date)}
                            selectsEnd
                            startDate={checkIn}
                            endDate={checkOut}
                            minDate={checkIn || new Date()}
                            placeholderText="Select date"
                            className={styles.inputField}
                            required
                        />
                    </div>
                </div>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message / Special Requests</label>
                <div className={styles.inputWrapper}>
                    <MessageSquare size={18} className={styles.inputIcon} style={{ top: '1.2rem' }} />
                    <textarea id="message" name="message" rows={5} placeholder="Tell us about any specific needs..." className={styles.inputField} />
                </div>
            </div>

            <button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
            </button>

            {status === 'error' && (
                <p className={styles.errorMessage}>There was an error sending your request. Please try again or email us directly.</p>
            )}
        </form>
    );
}
