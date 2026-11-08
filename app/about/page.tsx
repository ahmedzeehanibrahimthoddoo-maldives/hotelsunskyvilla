import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import JsonLd from "../components/JsonLd";
import { absoluteUrl, site } from "../lib/site";

export const metadata: Metadata = {
  title: "About the villa",
  description:
    "The story behind Hotel Sun Sky Villa — a small, family-run guesthouse on Thoddoo Island, Maldives, built around warm island hospitality.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Hotel Sun Sky Villa",
    description:
      "A small, family-run guesthouse on Thoddoo Island, Maldives, built around warm island hospitality.",
    url: absoluteUrl("/about"),
    images: [{ url: "/images/real/courtyard.jpg", alt: "The courtyard at Sun Sky Villa" }],
  },
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "About", item: absoluteUrl("/about") },
  ],
};

const values = [
  {
    title: "Small on purpose",
    body: "A handful of rooms means we know your name, remember how you take your coffee, and can help before you have to ask.",
  },
  {
    title: "Of the island",
    body: "Our team is from Thoddoo. The reef spots, the farm lanes and the best fishing hours come from living here, not a guidebook.",
  },
  {
    title: "Quietly considered",
    body: "Cool rooms, fresh linen, honest food and thoughtful details. Simple things, done properly, every day.",
  },
];

const moments = [
  { src: "/images/real/room-heart.jpg", alt: "Romantic towel art at Sun Sky Villa" },
  { src: "/images/real/dining-breakfast.jpg", alt: "Breakfast served at the villa" },
  { src: "/images/real/guest-coconut.jpg", alt: "A guest with a fresh coconut" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <PageHero
        kicker="Our story"
        title="A family home, opened to the island."
        image="/images/garden.webp"
      >
        <p>
          Sun Sky Villa began with a simple idea: that the best Maldives holiday is not a
          resort, but a real island — experienced with people who call it home.
        </p>
      </PageHero>

      <section className="section shell story-grid">
        <div>
          <span className="eyebrow">How it started</span>
          <h2>Built slowly, with the island.</h2>
          <p>
            The villa started life as a family house on the quiet side of Thoddoo. Over the
            years, rooms were added, a sandy courtyard was planted with palms, and a long table
            appeared where breakfast is still served today.
          </p>
          <p>
            We opened our doors to guests because we loved showing people the island we grew up
            on — the reef at first light, the farms in the middle of the island, the fishermen
            coming in at dusk. That has not changed. What has grown is the number of friends who
            arrived as guests and return every year.
          </p>
          <p>
            Today Hotel Sun Sky Villa is a small, design-led guesthouse with the same family at
            its heart. We are not trying to be a resort. We are trying to be the warmest, easiest
            base for your time in Thoddoo.
          </p>
        </div>
        <img
          src="/images/real/guest-coconut.jpg"
          alt="A guest enjoying a fresh coconut at Sun Sky Villa"
          loading="lazy"
          decoding="async"
        />
      </section>

      <section className="section section-cream">
        <div className="shell">
          <div className="section-head">
            <div>
              <span className="eyebrow">What we care about</span>
              <h2>The things we do not compromise on</h2>
            </div>
          </div>
          <div className="value-grid">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell split">
        <div className="split-copy">
          <span className="eyebrow">The people</span>
          <h2>Hosted by the family, helped by the island.</h2>
          <p>
            You will meet us at check-in, at breakfast and on the jetty. Behind the scenes, a
            small team keeps the rooms fresh, the kitchen honest and the boats on time. Many of
            them have worked here for years; all of them live on Thoddoo.
          </p>
          <p>
            If you need something — a late boat, a birthday cake, a quieter room, a reef guide
            who knows exactly where the turtles sleep — ask. That is what we are here for.
          </p>
          <Link className="text-link" href="/contact">
            Get in touch →
          </Link>
        </div>
        <div className="gallery-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
          {moments.map((moment, index) => (
            <div
              className="gallery-item"
              key={moment.src}
              style={index === 0 ? { gridRow: "span 2" } : undefined}
            >
              <img
                src={moment.src}
                alt={moment.alt}
                loading="lazy"
                decoding="async"
                style={index === 0 ? { aspectRatio: "auto", height: "100%" } : undefined}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="cta">
          <span className="eyebrow light">Meet us in Thoddoo</span>
          <h2>The door is open, and the kettle is on.</h2>
          <p>
            Tell us when you are coming and we will take it from there — the room, the boat, the
            reef and the small things that make a stay feel easy.
          </p>
          <div className="actions">
            <Link className="btn btn-gold" href="/booking">
              Plan your stay
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
