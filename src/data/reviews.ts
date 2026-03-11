export interface Review {
    id: string;
    author: string;
    country: string;
    date: string;
    rating: number;
    text?: string;
    property: 'Wild Wood Cottages' | 'Jazby Guest House';
    source: 'Booking.com';
}

export const reviews: Review[] = [
    // Jazby Guest House Reviews
    {
        id: 'jazby-1',
        author: 'Rishi',
        country: 'Kenya',
        date: 'February 17, 2026',
        rating: 8.0,
        text: 'Easy to find using Google maps. Very clean and well maintained.',
        property: 'Jazby Guest House',
        source: 'Booking.com'
    },
    {
        id: 'jazby-2',
        author: 'Sally',
        country: 'Kenya',
        date: 'November 27, 2025',
        rating: 9.0,
        text: 'The host was very understanding, easy and helpful. I got a good view of animals on my way back home from work.',
        property: 'Jazby Guest House',
        source: 'Booking.com'
    },
    {
        id: 'jazby-3',
        author: 'Patrick',
        country: 'Kenya',
        date: 'November 17, 2025',
        rating: 9.0,
        text: 'The facility location is great, quiet environment and very committed staff.',
        property: 'Jazby Guest House',
        source: 'Booking.com'
    },
    {
        id: 'jazby-4',
        author: 'Ambia',
        country: 'Kenya',
        date: 'September 22, 2025',
        rating: 10.0,
        text: 'Excellent and very cheerful service. Great guest experience. Our minder was very helpful.',
        property: 'Jazby Guest House',
        source: 'Booking.com'
    },
    {
        id: 'jazby-5',
        author: 'Bhanu',
        country: 'India',
        date: 'August 16, 2025',
        rating: 10.0,
        text: 'Very neat and clean. Value for money . Esp studio and 1 bed room .',
        property: 'Jazby Guest House',
        source: 'Booking.com'
    },

    // Wild Wood Cottages Reviews
    {
        id: 'ww-1',
        author: 'Bartłomiej',
        country: 'Poland',
        date: 'February 25, 2026',
        rating: 8.0,
        text: 'Very nice place, loved the vibe. Cool Cat. Nice staff.',
        property: 'Wild Wood Cottages',
        source: 'Booking.com'
    },
    {
        id: 'ww-2',
        author: 'Chadmacks',
        country: 'Canada',
        date: 'February 17, 2026',
        rating: 8.0,
        text: 'It was a lovely little surprise. The room is basic but functional and comfortable. The value is really good.',
        property: 'Wild Wood Cottages',
        source: 'Booking.com'
    },
    {
        id: 'ww-3',
        author: 'Fernando',
        country: 'Italy',
        date: 'January 20, 2026',
        rating: 8.0,
        text: 'Clean, comfortable and well located.',
        property: 'Wild Wood Cottages',
        source: 'Booking.com'
    },
    {
        id: 'ww-4',
        author: 'Ron',
        country: 'Kenya',
        date: 'January 9, 2026',
        rating: 10.0,
        text: 'Lovely place, great host.',
        property: 'Wild Wood Cottages',
        source: 'Booking.com'
    },
    {
        id: 'ww-5',
        author: 'Florence',
        country: 'Kenya',
        date: 'November 2, 2025',
        rating: 8.0,
        text: 'I liked that the property was well maintained.',
        property: 'Wild Wood Cottages',
        source: 'Booking.com'
    },
    {
        id: 'ww-6',
        author: 'Stephen',
        country: 'Kenya',
        date: 'August 5, 2025',
        rating: 9.0,
        text: 'The tranquility and the host was very welcoming.',
        property: 'Wild Wood Cottages',
        source: 'Booking.com'
    },
    {
        id: 'ww-7',
        author: 'Victor',
        country: 'Kenya',
        date: 'June 4, 2025',
        rating: 9.0,
        text: 'I loved everything about Wild Wood Cottages, the aesthetics in the compound are an Oasis compared to the neighborhood and access road to the destination. We enjoyed the reception and the hospitality, the owner, Manager and caretaker are welcoming people who make you want to re-book the cottages every time you visit Naivasha. They are located not too far from the lake front resorts while being just far enough from the crowd for that private aesthetic. The cherry on top is even though breakfast isn\'t theirs to provide, we found a sachet of coffee and sugar provided. This gesture of kindness made me love the place even more. This place is on my number one list every time I visit Naivasha.',
        property: 'Wild Wood Cottages',
        source: 'Booking.com'
    },
    {
        id: 'ww-8',
        author: 'Chege',
        country: 'Kenya',
        date: 'May 20, 2025',
        rating: 9.0,
        text: 'Loved silence, the sunset and how close it was from the road.',
        property: 'Wild Wood Cottages',
        source: 'Booking.com'
    }
];
