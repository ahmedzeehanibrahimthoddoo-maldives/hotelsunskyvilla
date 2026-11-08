export type Room = {
  slug: string;
  name: string;
  kicker: string;
  price: number;
  summary: string;
  description: string;
  guests: string;
  bed: string;
  size: string;
  images: string[];
  features: string[];
};

export const rooms: Room[] = [
  {
    slug: "deluxe-double",
    name: "Deluxe Double Room",
    kicker: "Signature stay",
    price: 95,
    summary:
      "A calm, light-filled retreat for couples and solo travellers, finished with warm timber and crisp white linen.",
    description:
      "Our Deluxe Double is the heart of Sun Sky Villa: a generous bed, cool tiled floors, a private bathroom and a quiet corner to unwind after a day on the reef. Mornings begin with breakfast in the courtyard; evenings end with the sound of the island.",
    guests: "2 guests",
    bed: "Queen bed",
    size: "24 m²",
    images: ["/images/real/room-vaulted.jpg", "/images/real/room-heart.jpg", "/images/real/bathroom-2.jpg"],
    features: [
      "Queen bed with premium linen",
      "Air conditioning & ceiling fan",
      "Private bathroom with hot water",
      "Free high-speed Wi-Fi",
      "Breakfast included",
      "Daily housekeeping",
    ],
  },
  {
    slug: "family-room",
    name: "Family Room",
    kicker: "Room for everyone",
    price: 130,
    summary:
      "A flexible, comfortable room for families and small groups, with space to spread out and settle in.",
    description:
      "The Family Room pairs two comfortable beds with the same warm island feel as the rest of the villa. It is an easy base for families exploring Thoddoo together, with breakfast, beach towels and local advice included.",
    guests: "4 guests",
    bed: "Two queen beds",
    size: "32 m²",
    images: ["/images/real/room-leaf.jpg", "/images/real/room-corner.jpg", "/images/real/room-swan.jpg"],
    features: [
      "Two queen beds",
      "Air conditioning & ceiling fan",
      "Private bathroom with hot water",
      "Free high-speed Wi-Fi",
      "Breakfast included",
      "Family-friendly setup",
    ],
  },
  {
    slug: "garden-room",
    name: "Garden Room",
    kicker: "Close to the palms",
    price: 85,
    summary:
      "A relaxed double room opening toward the garden — simple, cool and quietly removed from the main house.",
    description:
      "Tucked beside the palms, the Garden Room is our most peaceful category. Step out to sandy paths, shaded seating and the courtyard dining area. It is a lovely choice for longer stays and slow island mornings.",
    guests: "2 guests",
    bed: "Double bed",
    size: "20 m²",
    images: ["/images/real/room-vaulted-2.jpg", "/images/real/bathroom-1.jpg", "/images/garden.webp"],
    features: [
      "Double bed",
      "Air conditioning & ceiling fan",
      "Private bathroom with hot water",
      "Free high-speed Wi-Fi",
      "Breakfast included",
      "Garden-side setting",
    ],
  },
  {
    slug: "sunset-suite",
    name: "Sunset Suite",
    kicker: "For slow evenings",
    price: 150,
    summary:
      "Our most spacious room, styled for honeymooners and celebration trips with thoughtful extras.",
    description:
      "The Sunset Suite is made for lingering: a larger bed, soft lighting, a seating corner and a little more room to breathe. Tell us what you are celebrating and our team will help with flowers, a beach dinner or a private island moment.",
    guests: "2 guests",
    bed: "King bed",
    size: "38 m²",
    images: ["/images/real/room-swan.jpg", "/images/real/room-heart.jpg", "/images/real/bathroom-3.jpg"],
    features: [
      "King bed with premium linen",
      "Air conditioning & ceiling fan",
      "Private bathroom with hot water",
      "Free high-speed Wi-Fi",
      "Breakfast included",
      "Celebration styling on request",
    ],
  },
];

export const galleryImages = [
  { src: "/images/real/room-swan.jpg", alt: "Romantic towel art on the bed at Sun Sky Villa" },
  { src: "/images/real/room-vaulted.jpg", alt: "Deluxe room with a vaulted timber ceiling" },
  { src: "/images/real/dining-breakfast.jpg", alt: "Island dinner served at the villa" },
  { src: "/images/real/guest-coconut.jpg", alt: "A guest enjoying a fresh coconut" },
  { src: "/images/sandbank.webp", alt: "Guests on a Thoddoo sandbank" },
  { src: "/images/real/bathroom-2.jpg", alt: "Private bathroom with vanity and gold detail" },
  { src: "/images/lagoon.webp", alt: "Turquoise lagoon near Thoddoo" },
  { src: "/images/real/room-leaf.jpg", alt: "Bed styled with leaf cushions and flowers" },
  { src: "/images/real/dining-indoor.jpg", alt: "Dinner served in the villa dining room" },
  { src: "/images/real/room-corner.jpg", alt: "Room corner with mirror and timber door" },
  { src: "/images/real/guest-coconut-2.jpg", alt: "Guest with a fresh king coconut" },
  { src: "/images/real/courtyard.jpg", alt: "Sandy courtyard dining at Hotel Sun Sky Villa" },
];
