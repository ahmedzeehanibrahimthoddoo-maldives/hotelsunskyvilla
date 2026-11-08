import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import JsonLd from "../components/JsonLd";
import InquiryForm from "../components/InquiryForm";
import { rooms } from "../lib/rooms";
import { absoluteUrl, site } from "../lib/site";

export const metadata: Metadata = {
  title: "Rooms & rates",
  description:
    "Comfortable, design-led rooms at Hotel Sun Sky Villa in Thoddoo, Maldives — deluxe doubles, family rooms, garden rooms and a sunset suite.",
  alternates: { canonical: "/stay" },
  openGraph: {
    title: "Rooms & rates | Hotel Sun Sky Villa",
    description:
      "Comfortable, design-led rooms on Thoddoo Island with breakfast, air conditioning and direct booking support.",
    url: absoluteUrl("/stay"),
    images: [{ url: "/images/real/room-vaulted.jpg", alt: "Deluxe room at Sun Sky Villa" }],
  },
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Stay", item: absoluteUrl("/stay") },
  ],
};

const roomSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: rooms.map((room, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "HotelRoom",
      name: room.name,
      description: room.summary,
      occupancy: { "@type": "QuantitativeValue", maxValue: room.guests },
      image: `${site.url}${room.images[0]}`,
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: room.price,
        availability: "https://schema.org/InStock",
      },
    },
  })),
};

export default function StayPage() {
  return (
    <>
      <JsonLd data={[breadcrumbs, roomSchema]} />
      <PageHero
        kicker="Your stay"
        title="Rest easy, close to the sea."
        image="/images/room-hero.webp"
      >
        <p>
          Four simple, considered room categories — each with air conditioning, a private
          bathroom and breakfast included. Choose the one that fits your trip.
        </p>
      </PageHero>

      <section className="section shell">
        {rooms.map((room) => (
          <article className="room-card" id={room.slug} key={room.slug}>
            <div className="room-card-media">
              {room.images.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`${room.name} — view ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
            <div className="room-card-body">
              <span className="eyebrow">{room.kicker}</span>
              <h3>{room.name}</h3>
              <div className="room-price">
                From <strong>${room.price}</strong> / night · {room.guests} · {room.bed}
              </div>
              <p>{room.description}</p>
              <ul className="feature-list">
                {room.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="actions">
                <Link className="btn btn-gold" href="/booking">
                  Enquire about this room
                </Link>
                <Link className="btn btn-outline" href="/experiences">
                  See experiences
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="section section-cream">
        <div className="shell">
          <div className="section-head">
            <div>
              <span className="eyebrow">Good to know</span>
              <h2>The little things, taken care of</h2>
            </div>
          </div>
          <div className="card-grid three">
            <article className="info-card">
              <h3>Breakfast, included</h3>
              <p>
                Fresh fruit, eggs, island bread and coffee served in the courtyard each
                morning. Early departure? We'll pack something for the boat.
              </p>
            </article>
            <article className="info-card">
              <h3>Transfers made easy</h3>
              <p>
                Thoddoo is reached by speedboat from Malé. Share your flight details and we'll
                coordinate the transfer and meet you at the jetty.
              </p>
            </article>
            <article className="info-card">
              <h3>Room to breathe</h3>
              <p>
                Daily housekeeping, fresh beach towels, free Wi-Fi and air conditioning in
                every room. Cots and extra beds can be arranged on request.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section shell split">
        <div className="split-copy">
          <span className="eyebrow">Check availability</span>
          <h2>Tell us your dates.</h2>
          <p>
            We'll reply with availability, the best direct rate and anything else you need to
            know. No payment is taken through this form.
          </p>
          <p>
            Prefer to book instantly? Use our{" "}
            <a className="text-link" href={site.bookingEngine} target="_blank" rel="noopener noreferrer">
              online booking engine
            </a>
            .
          </p>
        </div>
        <div className="inquiry-card">
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
