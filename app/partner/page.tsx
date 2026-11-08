import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import JsonLd from "../components/JsonLd";
import { absoluteUrl, emailLink, site, whatsappLink } from "../lib/site";

export const metadata: Metadata = {
  title: "Travel partners",
  description:
    "Work with Hotel Sun Sky Villa in Thoddoo, Maldives. Agent rates, reliable transfers, fast confirmations and a local team on the ground.",
  alternates: { canonical: "/partner" },
  openGraph: {
    title: "Travel partners | Hotel Sun Sky Villa",
    description:
      "Agent rates, reliable transfers and fast confirmations from a small guesthouse in Thoddoo, Maldives.",
    url: absoluteUrl("/partner"),
    images: [{ url: "/images/lagoon.webp", alt: "The lagoon at Thoddoo, Maldives" }],
  },
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Travel partners", item: absoluteUrl("/partner") },
  ],
};

const partnerMessage = [
  `Hello ${site.name},`,
  "",
  "I would like to discuss a travel partnership.",
  "",
  "Agency / company:",
  "Website:",
  "Markets / guest profile:",
  "Estimated room nights per year:",
  "",
  "Please share your agent rates and booking process.",
].join("\n");

const benefits = [
  {
    title: "Agent rates",
    body: "Clear, competitive net rates for tour operators, travel agents and dive partners, with no hidden extras.",
  },
  {
    title: "Fast confirmations",
    body: "A real person answers, usually within a few hours. Availability, changes and special requests are handled directly.",
  },
  {
    title: "Transfers handled",
    body: "We coordinate speedboat connections from Malé around your clients' flights and meet them at the Thoddoo jetty.",
  },
  {
    title: "Experiences included",
    body: "Snorkeling, sandbank trips, fishing and island days can be packaged with the stay and confirmed before arrival.",
  },
  {
    title: "Local knowledge",
    body: "A team living on Thoddoo, able to advise on sea conditions, timing and the best fit for each client.",
  },
  {
    title: "Small-group friendly",
    body: "We work well with couples, families and small groups, and can arrange full-villa use on request.",
  },
];

export default function PartnerPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <PageHero
        kicker="Travel trade"
        title="A reliable little address in Thoddoo."
        image="/images/lagoon.webp"
      >
        <p>
          We work with agents and operators who care about the details. Small enough to be
          personal, organised enough to make your job easy.
        </p>
      </PageHero>

      <section className="section shell split">
        <div className="split-copy">
          <span className="eyebrow">Why partner with us</span>
          <h2>Personal stays, professional handling.</h2>
          <p>
            Hotel Sun Sky Villa is a boutique guesthouse with comfortable rooms, breakfast
            included and a team that answers quickly. For your clients, that means a warm,
            genuine island stay. For you, it means fewer surprises.
          </p>
          <p>
            We are happy to discuss allotments, series bookings, honeymoon and family packages,
            and combined stay-and-experience itineraries.
          </p>
          <div className="actions" style={{ marginTop: "1.6rem" }}>
            <a
              className="btn btn-gold"
              href={whatsappLink(partnerMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on WhatsApp
            </a>
            <a
              className="btn btn-outline"
              href={emailLink("Travel partnership enquiry", partnerMessage)}
            >
              Email the team
            </a>
          </div>
        </div>
        <img
          src="/images/real/room-vaulted.jpg"
          alt="A guest room at Hotel Sun Sky Villa"
          loading="lazy"
          decoding="async"
        />
      </section>

      <section className="section section-cream">
        <div className="shell">
          <div className="section-head">
            <div>
              <span className="eyebrow">The essentials</span>
              <h2>What you can count on</h2>
            </div>
          </div>
          <div className="card-grid three">
            {benefits.map((benefit) => (
              <article className="value-card" key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="story-grid">
          <div>
            <span className="eyebrow">At a glance</span>
            <h2>Good to know</h2>
            <ul className="feature-list" style={{ gridTemplateColumns: "1fr" }}>
              <li>4 room categories, including family and suite options</li>
              <li>Breakfast included in all rates</li>
              <li>Air conditioning, private bathrooms and free Wi-Fi</li>
              <li>Speedboat transfer assistance from Velana International Airport</li>
              <li>Experiences and packages available year-round</li>
              <li>Direct contact with the on-island team</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>Contact for partners</h3>
            <p>
              <a className="text-link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>
              <a className="text-link" href={site.whatsapp}>
                WhatsApp {site.phone}
              </a>
            </p>
            <p style={{ marginTop: "1rem", fontSize: "0.88rem" }}>
              {site.address}
              <br />
              Check-in {site.checkIn} · Check-out {site.checkOut}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
