import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import GalleryGrid from "../components/GalleryGrid";
import { galleryImages } from "../lib/rooms";
import { absoluteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look inside Hotel Sun Sky Villa, Thoddoo — rooms, bathrooms, breakfast, the sandy courtyard and days on the reef.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | Hotel Sun Sky Villa",
    description: "Rooms, courtyard, breakfast and island days at Sun Sky Villa in Thoddoo.",
    url: absoluteUrl("/gallery"),
    images: [{ url: "/images/real/courtyard.jpg", alt: "Courtyard at Sun Sky Villa" }],
  },
};

const extraImages = [
  { src: "/images/experience-manta-snorkeling.webp", alt: "Manta ray snorkeling in Thoddoo" },
  { src: "/images/experience-dolphin-cruise.webp", alt: "Dolphin cruise at sunset" },
  { src: "/images/experience-sunset-fishing.webp", alt: "Sunset fishing in the Maldives" },
  { src: "/images/garden.webp", alt: "Tropical garden at the villa" },
  { src: "/images/real/room-heart.jpg", alt: "Towel swans and flowers at Sun Sky Villa" },
  { src: "/images/real/bathroom-3.jpg", alt: "Bathroom at Sun Sky Villa" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="A closer look"
        title="The villa, in its own light."
        image="/images/room-wide.webp"
      >
        <p>
          Real rooms, real breakfasts, real island days. A small gallery of what to expect when
          you arrive.
        </p>
      </PageHero>

      <section className="section shell">
        <GalleryGrid images={[...galleryImages, ...extraImages]} />
      </section>

      <section className="section section-cream">
        <div className="shell section-head">
          <div>
            <span className="eyebrow">Seen enough?</span>
            <h2>Come and see it for yourself.</h2>
          </div>
          <a className="text-link" href="/booking">
            Check availability →
          </a>
        </div>
      </section>
    </>
  );
}
