import Link from "next/link";
import type { Metadata } from "next";
import { experienceGroups } from "./lib/experiences";
import { rooms } from "./lib/rooms";
import { site } from "./lib/site";

export const metadata: Metadata = {
  title: { absolute: `${site.name} | Boutique guesthouse in Thoddoo, Maldives` },
  description:
    "Stay at Hotel Sun Sky Villa, a warm boutique guesthouse on Thoddoo Island, Maldives. Comfortable rooms, island breakfasts, reef experiences and direct booking support.",
  alternates: { canonical: "/" },
};

const featuredExperiences = experienceGroups
  .flatMap((group) => group.items)
  .filter((item) =>
    [
      "Sandbank escape",
      "Turtle snorkeling",
      "Dolphin cruise",
      "Sunset fishing",
    ].includes(item.name),
  );

const reviews = [
  {
    quote:
      "The kind of place where you arrive as a guest and leave as a friend. Breakfast in the sand courtyard was the best part of every day.",
    name: "Elena & Marek",
    origin: "Slovakia",
  },
  {
    quote:
      "Spotless room, wonderful local team and effortless help with transfers and snorkeling. Thoddoo is special, and this villa made it easy.",
    name: "Sophie",
    origin: "United Kingdom",
  },
  {
    quote:
      "We came for three nights and stayed for six. Quiet, warm and genuinely personal — exactly what we wanted from an island stay.",
    name: "Daniel",
    origin: "Germany",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <img
          className="hero-image"
          src="/images/hero.webp"
          alt="Aerial view of a palm-lined island in Thoddoo, Maldives"
          width={1800}
          height={1013}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-shade" />
        <div className="shell hero-copy">
          <span className="eyebrow light">Thoddoo Island · Maldives</span>
          <h1>
            A quiet island villa,
            <br />
            <em>where the sky meets the sea.</em>
          </h1>
          <p className="hero-lede">
            Hotel Sun Sky Villa is a small, design-led guesthouse on Thoddoo — close to the
            beach, shaped by palm shade and sandy paths, and run with the kind of welcome that
            makes you want to stay a little longer.
          </p>
          <div className="actions">
            <Link className="btn btn-gold" href="/booking">
              Plan your stay
            </Link>
            <Link className="btn btn-glass" href="/stay">
              Explore the rooms
            </Link>
          </div>
          <div className="hero-meta">
            <div>
              From
              <strong>USD 85 / night</strong>
            </div>
            <div>
              Included
              <strong>Breakfast & Wi-Fi</strong>
            </div>
            <div>
              Airport
              <strong>Speedboat assistance</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="At a glance">
        <div>
          <strong>4</strong>
          <span>Room categories</span>
        </div>
        <div>
          <strong>3 min</strong>
          <span>To the beach</span>
        </div>
        <div>
          <strong>Reef</strong>
          <span>Snorkeling on the doorstep</span>
        </div>
        <div>
          <strong>Direct</strong>
          <span>Hosted by the family</span>
        </div>
      </section>

      <section className="section shell split">
        <div className="split-copy">
          <span className="eyebrow">The villa</span>
          <h2>Small by design. Warm by nature.</h2>
          <p>
            Sun Sky Villa began as a family home and still feels like one. There are only a
            handful of rooms, a sandy courtyard for breakfast, and a team who know the island
            by heart — the best reef corners, the quietest beach hours, the fishermen who bring
            in the evening catch.
          </p>
          <p>
            We keep things simple and thoughtful: cool rooms, fresh linen, honest local food,
            and help with the details that make a Maldives trip feel effortless.
          </p>
          <Link className="text-link" href="/about">
            Our story →
          </Link>
        </div>
        <img
          src="/images/garden.webp"
          alt="The garden and villa entrance at Sun Sky Villa"
          width={1600}
          height={787}
          loading="lazy"
          decoding="async"
        />
      </section>

      <section className="section section-cream">
        <div className="shell">
          <div className="section-head">
            <div>
              <span className="eyebrow">Sleep</span>
              <h2>Rooms that feel like a deep breath</h2>
            </div>
            <Link className="text-link" href="/stay">
              All rooms & rates →
            </Link>
          </div>
          <div className="card-grid four">
            {rooms.map((room) => (
              <article className="image-card" key={room.slug}>
                <Link href={`/stay#${room.slug}`} aria-label={room.name}>
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="image-card-body">
                    <span className="card-tag">{room.kicker}</span>
                    <h3>{room.name}</h3>
                    <p>{room.summary}</p>
                    <p className="room-price">
                      From <strong>${room.price}</strong> / night
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-head">
          <div>
            <span className="eyebrow">Days on the water</span>
            <h2>Experiences, arranged for you</h2>
          </div>
          <Link className="text-link" href="/experiences">
            Explore everything →
          </Link>
        </div>
        <div className="card-grid four">
          {featuredExperiences.map((item) => (
            <article className="experience-card" key={item.name}>
              <img src={item.image} alt={item.name} loading="lazy" decoding="async" />
              <div className="experience-body">
                <span className="card-tag">{item.tag}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="experience-meta">
                  <span>{item.duration}</span>
                  <span>From the villa</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-cream">
        <div className="shell split reverse">
          <img
            src="/images/breakfast.webp"
            alt="Fresh island breakfast with fruit, eggs and Maldivian flatbread"
            width={1600}
            height={1200}
            loading="lazy"
            decoding="async"
          />
          <div className="split-copy">
            <span className="eyebrow">At the table</span>
            <h2>Breakfast under the palms</h2>
            <p>
              Mornings at the villa are unhurried. Fresh fruit, eggs, island bread, strong
              coffee and a table in the sand — served whenever you surface, not when a buffet
              clock says so.
            </p>
            <p>
              In the evening we can arrange a private beach dinner, a barbecue of the day's
              catch, or a quiet table in the courtyard.
            </p>
            <Link className="text-link" href="/contact">
              Ask about dining →
            </Link>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-head">
          <div>
            <span className="eyebrow">A glimpse</span>
            <h2>Life at the villa</h2>
          </div>
          <Link className="text-link" href="/gallery">
            Full gallery →
          </Link>
        </div>
        <div className="gallery-grid">
          {[
            "/images/real/room-vaulted.jpg",
            "/images/real/guest-coconut.jpg",
            "/images/real/dining-indoor.jpg",
            "/images/real/room-swan.jpg",
            "/images/sandbank.webp",
            "/images/real/bathroom-2.jpg",
          ].map((src) => (
            <div className="gallery-item" key={src}>
              <img src={src} alt="" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <div className="section-head">
            <div>
              <span className="eyebrow light">Guest notes</span>
              <h2>Kind words, honestly earned</h2>
            </div>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="review-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <blockquote>“{review.quote}”</blockquote>
                <cite>
                  {review.name} · {review.origin}
                </cite>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="cta">
          <span className="eyebrow light">Stay with us</span>
          <h2>Your island story starts with a simple hello.</h2>
          <p>
            Tell us your dates and we'll help with the room, the speedboat and the small
            details. Book direct for the warmest welcome — and the best available rate.
          </p>
          <div className="actions">
            <Link className="btn btn-gold" href="/booking">
              Send an enquiry
            </Link>
            <a className="btn btn-outline-light" href={site.whatsapp}>
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
