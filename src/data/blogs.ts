export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    image: string;
}

export const blogs: BlogPost[] = [
    {
        slug: 'beat-the-prices-wrc-safari-rally',
        title: 'Beat the Prices: Your Serene Basecamp for the WRC Safari Rally',
        excerpt: 'Avoid the price hike during the Naivasha WRC event. Discover how Jazby Guest House offers premium cleanliness and comfort at an unbeatable value.',
        date: '2026-03-01',
        author: 'Admin',
        image: '/images/jazby/exterior-1.jpg',
        content: `The WRC Safari Rally brings thrilling motorsport action to Naivasha, but it also brings skyrocketing accommodation prices. At Jazby Guest House, we believe in exceptional value year-round. Our guests frequently note our pristine cleanliness (rated 9.0!) and our extremely reasonable rates.

Why stay in a noisy, overpriced hotel room when you can have a spacious, self-catering apartment? Enjoy high-speed WiFi, outdoor fire pits, and premium comfort. With the rally stages just a short drive away, Jazby Guest House is the ultimate sanctuary for WRC fans who want to beat the prices and stay comfortably in Naivasha. Book your stay today and spend your money on the experience, not just the bed.`
    },
    {
        slug: 'exploring-hells-gate-national-park',
        title: "A Guide to Exploring Hell's Gate from Wild Wood Cottages",
        excerpt: "Located just 26km from Hell's Gate, Wild Wood Cottages is the perfect serene retreat after a long day of cycling and hiking in the park.",
        date: '2026-02-15',
        author: 'Admin',
        image: '/images/wildwood/exterior-2.jpg',
        content: `Hell's Gate National Park is one of the few places in Kenya where you can hike and cycle alongside giraffes, zebras, and antelopes. The towering cliffs and gorges offer world-class scenery. But after a day of adventure, you need a peaceful place to rest.

Wild Wood Cottages offers the best self-catering cottages in Naivasha. Our ground floor, accessible units offer absolute quiet, stunning mountain views, and a kitchenette to prepare your own meals. Recharge your batteries with our tranquil setting and prepare for another day of exploration. Let nature soothe your tired muscles in our completely soundproofed retreats.`
    },
    {
        slug: 'best-guest-houses-in-naivasha',
        title: 'What Makes for the Best Guest Houses in Naivasha?',
        excerpt: 'Looking for full accommodation guest houses in Naivasha? Learn what to look for, from high-speed internet to self-catering facilities.',
        date: '2026-01-28',
        author: 'Admin',
        image: '/images/jazby/living-room-1.jpg',
        content: `Finding the perfect accommodation in Nakuru County can be daunting. The "best guest houses in Naivasha" should offer more than just a bed; they should offer an experience. When seeking the best hotel rooms near Hell's Gate or Nakuru, always look for autonomy, privacy, and modern amenities.
      
At Wild Wood Escapes, our properties—Jazby Guest House and Wild Wood Cottages—prioritize your autonomy and comfort. With fast WiFi, fully equipped kitchens, beautiful modern living rooms, and private parking, we provide a "home away from home" experience. Whether you’re stopping over near Nakuru or planning a long stay near Lake Naivasha, we guarantee a premium stay that feels entirely yours.`
    }
];
