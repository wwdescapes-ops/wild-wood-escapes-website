'use client';

import { useState } from 'react';
import styles from './BookingForm.module.css';
import { useSearchParams } from 'next/navigation';

interface BookingFormProps {
    defaultProperty?: string;
}

export default function BookingForm({ defaultProperty }: BookingFormProps) {
    const searchParams = useSearchParams();
    const queryProperty = searchParams.get('property') === 'wildwood' ? 'Wild Wood Cottages' :
        searchParams.get('property') === 'jazby' ? 'Jazby Guest House' : '';

    const initialProperty = defaultProperty || queryProperty || '';

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            checkIn: formData.get('checkIn'),
            checkOut: formData.get('checkOut'),
            property: formData.get('property'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    }

    if (status === 'success') {
        return (
            <div className={styles.successMessage}>
                <h3>Request Sent Successfully!</h3>
                <p>Thank you for your enquiry. We will get back to you with availability and rates via email very soon.</p>
                <button onClick={() => setStatus('idle')} className="btn-primary mt-4">Send Another</button>
            </div>
        );
    }

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <input type="text" id="name" name="name" required placeholder="John Doe" className={styles.inputField} />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input type="email" id="email" name="email" required placeholder="john@example.com" className={styles.inputField} />
            </div>

            <div className={styles.row}>
                {!defaultProperty ? (
                    <div className={styles.formGroup}>
                        <label htmlFor="property" className={styles.label}>Property</label>
                        <select id="property" name="property" required defaultValue={initialProperty} className={styles.inputField}>
                            <option value="" disabled>Select a property</option>
                            <option value="Jazby Guest House">Jazby Guest House</option>
                            <option value="Wild Wood Cottages">Wild Wood Cottages</option>
                            <option value="General Enquiry">General Enquiry</option>
                        </select>
                    </div>
                ) : (
                    <input type="hidden" name="property" value={defaultProperty} />
                )}
            </div>

            <div className={styles.row}>
                <div className={styles.formGroup}>
                    <label htmlFor="checkIn" className={styles.label}>Check-in Date</label>
                    <input type="date" id="checkIn" name="checkIn" required className={styles.inputField} />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="checkOut" className={styles.label}>Check-out Date</label>
                    <input type="date" id="checkOut" name="checkOut" required className={styles.inputField} />
                </div>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message / Special Requests</label>
                <textarea id="message" name="message" rows={5} placeholder="Tell us about any specific needs..." className={styles.inputField} />
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
