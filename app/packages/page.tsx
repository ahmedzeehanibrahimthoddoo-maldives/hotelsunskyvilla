import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import JsonLd from "../components/JsonLd";
import { packages } from "../lib/experiences";
import { absoluteUrl, emailLink, site, whatsappLink } from "../lib/site";

export const metadata: Metadata = {
  title: "Stay packages",
  description:
    "Curated stays at Hotel Sun Sky Villa in Thoddoo — honeymoon, island discovery and family packages with experiences included.",
  alternates: { canonical: "/packages" },
  openGraph: {
    title: "Stay packages | Hotel Sun Sky Villa",
    description: "Curated honeymoon, discovery and family stays in Thoddoo, Maldives.",
    url: absoluteUrl("/packages"),
    images: [{ url: "/images/sandbank.webp", alt: "Thoddoo sandbank" }],
  },
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Packages", item: absoluteUrl("/packages") },
  ],
};

function packageMessage(name: string, nights: number) {
  return [
    `Hello ${site.name},`,
    "",
    `I am interested in the ${name} package (${nights} nights).`,
    "",
    "Preferred dates:",
    "Number of guests:",
    "",
    "Please confirm availability and the total price.",
  ].join("\n");
}

export default function PackagesPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <PageHero
        kicker="Curated stays"
        title="A little more planned, a lot more easy."
        image="/images/sandbank.webp"
      >
        <p>
          Our packages bundle the room, breakfast and the experiences we love most. They are a
          starting point — tell us what you'd change and we'll shape it around you.
        </p>
      </PageHero>

      <section className="section shell">
        <div className="card-grid three">
          {packages.map((pkg) => (
            <article className={`package-card ${pkg.featured ? "is-featured" : ""}`} key={pkg.name}>
              <img src={pkg.image} alt={pkg.name} loading="lazy" decoding="async" />
              <div className="package-body">
                <span className="card-tag">{pkg.nights} nights · from</span>
                <h3>{pkg.name}</h3>
                <div className="package-price">
                  ${pkg.price} <span>total for two</span>
                </div>
                <p>{pkg.description}</p>
                <ul className="package-includes">
                  {pkg.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="actions">
                  <a
                    className="btn btn-gold"
                    href={whatsappLink(packageMessage(pkg.name, pkg.nights))}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enquire
                  </a>
                  <a
                    className="btn btn-outline"
                    href={emailLink(`Package enquiry: ${pkg.name}`, packageMessage(pkg.name, pkg.nights))}
                  >
                    Email
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-cream">
        <div className="shell split">
          <div className="split-copy">
            <span className="eyebrow">Make it yours</span>
            <h2>None of these quite right?</h2>
            <p>
              Most of our guests end up with something between the packages: a few reef days, a
              lot of doing nothing, one special dinner. Tell us the shape of your trip and we'll
              put a plan and a price together.
            </p>
            <p>
              Packages are based on two guests sharing and include the experiences listed.
              Flights, speedboat transfers and extra nights can be added.
            </p>
          </div>
          <div className="info-card">
            <h3>Every stay includes</h3>
            <ul className="package-includes">
              <li>Daily breakfast</li>
              <li>Air-conditioned room with private bathroom</li>
              <li>Free Wi-Fi and beach towels</li>
              <li>Transfer and activity planning</li>
              <li>A real person to ask, any time</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
