import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import JsonLd from "../components/JsonLd";
import { absoluteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "Discover Thoddoo",
  description:
    "A local guide to Thoddoo Island, Maldives — beaches, farms, reefs, food and how to get there. Practical notes from Hotel Sun Sky Villa.",
  alternates: { canonical: "/discover" },
  openGraph: {
    title: "Discover Thoddoo | Hotel Sun Sky Villa",
    description:
      "Beaches, farms, reefs and island life: a local guide to Thoddoo, Maldives.",
    url: absoluteUrl("/discover"),
    images: [{ url: "/images/island.webp", alt: "Thoddoo Island, Maldives" }],
  },
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Discover", item: absoluteUrl("/discover") },
  ],
};

const notes = [
  {
    title: "The beaches",
    body: "Thoddoo has a long, walkable stretch of white sand and a calm lagoon on the sunset side. The water is clearest in the morning; the light is best late afternoon.",
  },
  {
    title: "The farms",
    body: "Thoddoo is one of the Maldives' market-garden islands. Papaya, watermelon, chilli and coconut grow here, and the farm lanes are lovely on foot or by bicycle.",
  },
  {
    title: "The reef",
    body: "The house reef is an easy swim from shore. Turtles are common, rays glide past the drop-off, and the coral is healthiest away from the busiest lanes.",
  },
  {
    title: "The food",
    body: "Local cafés serve short eats, rice and curry, and fresh tuna. At the villa we cook a mix of Maldivian and international dishes, with vegetarian options on request.",
  },
];

export default function DiscoverPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <PageHero
        kicker="The island"
        title="Thoddoo, beyond the beach."
        image="/images/island.webp"
      >
        <p>
          A green, easy-going island in Alif Alif Atoll, Thoddoo is small enough to walk and
          rich enough to fill a week. Here is how we like to spend time here.
        </p>
      </PageHero>

      <section className="section shell split">
        <div className="split-copy">
          <span className="eyebrow">Where you are</span>
          <h2>A real island, not a resort</h2>
          <p>
            Thoddoo sits about 40 minutes by speedboat from Malé. There are no resort gates
            here — just sandy roads, family homes, farms and a community that has welcomed
            travellers for years.
          </p>
          <p>
            That means you get something rarer than a polished lobby: mornings that start with
            birdsong, fishermen heading out, and the chance to understand how island life
            actually works.
          </p>
        </div>
        <img src="/images/lagoon.webp" alt="Turquoise lagoon near Thoddoo" loading="lazy" decoding="async" />
      </section>

      <section className="section section-cream">
        <div className="shell">
          <div className="section-head">
            <div>
              <span className="eyebrow">Field notes</span>
              <h2>Four things worth knowing</h2>
            </div>
          </div>
          <div className="card-grid four">
            {notes.map((note) => (
              <article className="info-card" key={note.title}>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell split reverse">
        <img src="/images/sandbank.webp" alt="Guests on a Thoddoo sandbank" loading="lazy" decoding="async" />
        <div className="split-copy">
          <span className="eyebrow">Getting here</span>
          <h2>Malé to Thoddoo, made simple</h2>
          <p>
            Speedboats run between Malé and Thoddoo throughout the day. Share your flight
            details with us and we'll recommend a boat that connects comfortably, then meet you
            at the jetty.
          </p>
          <p>
            Pack light, bring reef-safe sunscreen and a little cash for local cafés. We'll take
            care of the rest.
          </p>
          <Link className="text-link" href="/booking">
            Ask about transfers →
          </Link>
        </div>
      </section>

      <section className="section shell">
        <div className="cta">
          <span className="eyebrow light">Make it your own</span>
          <h2>Tell us what kind of island trip you want.</h2>
          <p>
            Quiet and slow, full of reef days, or somewhere in between — we'll help shape a stay
            that fits.
          </p>
          <div className="actions">
            <Link className="btn btn-gold" href="/booking">
              Start planning
            </Link>
            <Link className="btn btn-outline-light" href="/packages">
              See packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
