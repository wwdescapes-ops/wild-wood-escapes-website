import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, checkIn, checkOut, property, message } = await request.json();

        const data = await resend.emails.send({
            from: 'Wild Wood Bookings <onboarding@resend.dev>',
            to: ['admin@wildwoodescapes.com'],
            subject: `New Booking Enquiry: ${property}`,
            text: `
Name: ${name}
Email: ${email}
Check-in: ${checkIn}
Check-out: ${checkOut}
Property: ${property}

Message: 
${message}
      `,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
