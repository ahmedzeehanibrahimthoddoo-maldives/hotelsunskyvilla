export type Experience = {
  name: string;
  description: string;
  image: string;
  duration: string;
  tag: string;
};

export type ExperienceGroup = {
  title: string;
  intro: string;
  items: Experience[];
};

export const experienceGroups: ExperienceGroup[] = [
  {
    title: "Reef & marine life",
    intro: "Clear water, healthy reefs and the chance to meet Thoddoo's most famous residents.",
    items: [
      {
        name: "Turtle snorkeling",
        description:
          "A guided reef session with the best chance of meeting green turtles in calm, shallow water.",
        image: "/images/experience-turtle-snorkeling.webp",
        duration: "2–3 hours",
        tag: "Snorkeling",
      },
      {
        name: "Manta snorkeling",
        description:
          "A seasonal marine adventure arranged around local conditions and the movement of manta rays.",
        image: "/images/experience-manta-snorkeling.webp",
        duration: "Half day",
        tag: "Marine life",
      },
      {
        name: "Reef snorkeling",
        description:
          "An easy, flexible outing for guests who want to explore the house reef at their own pace.",
        image: "/images/experience-reef-snorkeling.webp",
        duration: "2 hours",
        tag: "Snorkeling",
      },
      {
        name: "Whale shark trip",
        description:
          "A full day at sea in search of whale sharks, planned with an experienced local crew.",
        image: "/images/experience-whale-shark-trip.webp",
        duration: "Full day",
        tag: "Marine life",
      },
    ],
  },
  {
    title: "Island days",
    intro: "Sandbanks, nearby islands and long afternoons on the water.",
    items: [
      {
        name: "Sandbank escape",
        description:
          "A private-feeling morning on a strip of white sand, with snorkeling and refreshments.",
        image: "/images/experience-sandbank-trip.webp",
        duration: "Half day",
        tag: "Island",
      },
      {
        name: "Island hopping",
        description:
          "Visit neighbouring islands, local villages and quiet beaches with a guide who knows them well.",
        image: "/images/experience-island-hopping.webp",
        duration: "Full day",
        tag: "Island",
      },
      {
        name: "Resort day trip",
        description:
          "A day pass at a nearby resort for a change of scene, pool time and a long lunch.",
        image: "/images/experience-resort-trip.webp",
        duration: "Full day",
        tag: "Day trip",
      },
      {
        name: "Dolphin cruise",
        description:
          "A golden-hour boat ride along the atoll edge, with dolphins often joining the journey.",
        image: "/images/experience-dolphin-cruise.webp",
        duration: "2 hours",
        tag: "Sunset",
      },
    ],
  },
  {
    title: "Fishing & local life",
    intro: "The island's rhythm, seen from the water and the shore.",
    items: [
      {
        name: "Sunset fishing",
        description:
          "Traditional hand-line fishing as the light fades, with your catch prepared back at the villa.",
        image: "/images/experience-sunset-fishing.webp",
        duration: "3 hours",
        tag: "Fishing",
      },
      {
        name: "Octopus hunting",
        description:
          "A local-style reef walk with an experienced guide, learning how islanders read the shallows.",
        image: "/images/experience-octopus-hunting.webp",
        duration: "2 hours",
        tag: "Local",
      },
      {
        name: "Island walk",
        description:
          "A gentle guided walk through Thoddoo's farms, lanes and beaches, ending with fresh coconut.",
        image: "/images/island.webp",
        duration: "2 hours",
        tag: "Local",
      },
      {
        name: "Beach dinner",
        description:
          "A private table by the water, candlelight and a menu planned with our kitchen team.",
        image: "/images/experience-beach-candle-lit-dinner.webp",
        duration: "Evening",
        tag: "Dining",
      },
    ],
  },
];

export const packages = [
  {
    name: "Honeymoon Escape",
    nights: 3,
    price: 495,
    image: "/images/real/room-swan.jpg",
    description:
      "Three slow nights for two, with a sunset cruise, a private beach dinner and a little island surprise.",
    includes: [
      "3 nights in the Sunset Suite",
      "Daily breakfast",
      "Sunset dolphin cruise",
      "Private beach dinner for two",
      "Airport meet & speedboat assistance",
    ],
    featured: false,
  },
  {
    name: "Island Discovery",
    nights: 4,
    price: 640,
    image: "/images/sandbank.webp",
    description:
      "Our most complete introduction to Thoddoo: reefs, sandbanks, local food and time to do nothing at all.",
    includes: [
      "4 nights in a Deluxe Double",
      "Daily breakfast",
      "Sandbank escape",
      "Turtle snorkeling",
      "Sunset fishing",
      "Island walk with a local guide",
    ],
    featured: true,
  },
  {
    name: "Family Sun & Sea",
    nights: 5,
    price: 890,
    image: "/images/real/room-leaf.jpg",
    description:
      "Five easy days for the whole family, with a flexible room setup and activities for every age.",
    includes: [
      "5 nights in the Family Room",
      "Daily breakfast",
      "Reef snorkeling for the family",
      "Sandbank picnic",
      "Dolphin cruise",
      "Beach towels & snorkel gear",
    ],
    featured: false,
  },
];
