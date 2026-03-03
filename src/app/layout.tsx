import type { Metadata } from "next";
import { Bricolage_Grotesque, Familjen_Grotesk } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-familjen",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wildwoodescapes.co.ke'),
  title: {
    template: "%s | Wild Wood Escapes",
    default: "Wild Wood Escapes | Best Cottages & Guest Houses in Naivasha",
  },
  description: "Experience the best cottages, guest houses, and hotel rooms in Naivasha and near Hell's Gate. Book your serene stay at Jazby and Wild Wood.",
  keywords: [
    "Naivasha",
    "Best hotel rooms in Naivasha",
    "best guest house in Naivasha",
    "best guest houses in Naivasha",
    "full accommodation guest houses in Naivasha",
    "best guest rooms near Nakuru",
    "best hotel rooms near Hell's Gate",
    "best cottages in Naivasha",
    "beautiful cottages in Naivasha",
    "full accommodation cottages in Naivasha",
    "Vacation rentals Naivasha",
    "Self-catering cottages Naivasha",
    "Naivasha holiday homes",
    "Luxury cottages Lake Naivasha",
    "Cottages near Hell's Gate National Park",
    "Staycation Naivasha",
    "WRC Safari Rally Kenya",
    "best place to stay during WRC Safari Rally",
    "Naivasha rally accommodation",
    "WRC Safari Rally 2026",
    "motorsports destination Naivasha"
  ],
  openGraph: {
    images: ["/logos/wildwood-escapes.png"],
  },
  twitter: {
    images: ["/logos/wildwood-escapes.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-644NT2K92T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-644NT2K92T');
          `}
        </Script>
      </head>
      <body className={`${bricolage.variable} ${familjen.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
