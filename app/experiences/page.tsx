import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import JsonLd from "../components/JsonLd";
import { experienceGroups } from "../lib/experiences";
import { absoluteUrl, emailLink, site, whatsappLink } from "../lib/site";

export const metadata: Metadata = {
  title: "Thoddoo experiences",
  description:
    "Snorkeling, sandbank escapes, dolphin cruises, fishing and island days in Thoddoo, Maldives — arranged by Hotel Sun Sky Villa.",
  alternates: { canonical: "/experiences" },
  openGraph: {
    title: "Thoddoo experiences | Hotel Sun Sky Villa",
    description:
      "Reefs, sandbanks and slow island days, arranged for guests of Sun Sky Villa in Thoddoo.",
    url: absoluteUrl("/experiences"),
    images: [{ url: "/images/sandbank.webp", alt: "A sandbank in Thoddoo, Maldives" }],
  },
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Experiences", item: absoluteUrl("/experiences") },
  ],
};

function message(name: string) {
  return [
    `Hello ${site.name},`,
    "",
    `I am interested in the ${name} experience.`,
    "",
    "Stay dates:",
    "Number of guests:",
    "",
    "Please share availability, current price and what is included.",
  ].join("\n");
}

export default function ExperiencesPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <PageHero
        kicker="Days on the water"
        title="The island, from every angle."
        image="/images/sandbank.webp"
      >
        <p>
          From the house reef to a strip of white sand in the middle of the ocean, our team can
          arrange the best of Thoddoo around your stay. Prices and timings are confirmed before
          you go.
        </p>
      </PageHero>

      {experienceGroups.map((group) => (
        <section className="section shell" key={group.title}>
          <div className="section-head">
            <div>
              <span className="eyebrow">{group.intro}</span>
              <h2>{group.title}</h2>
            </div>
          </div>
          <div className="card-grid four">
            {group.items.map((item) => (
              <article className="experience-card" key={item.name}>
                <img src={item.image} alt={item.name} loading="lazy" decoding="async" />
                <div className="experience-body">
                  <span className="card-tag">{item.tag}</span>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="experience-meta">
                    <span>{item.duration}</span>
                    <span>Price on request</span>
                  </div>
                  <div className="actions" style={{ marginTop: "1rem" }}>
                    <a
                      className="btn btn-dark"
                      href={whatsappLink(message(item.name))}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enquire
                    </a>
                    <a className="btn btn-outline" href={emailLink(`Experience enquiry: ${item.name}`, message(item.name))}>
                      Email
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="section section-cream">
        <div className="shell split">
          <div className="split-copy">
            <span className="eyebrow">Good to know</span>
            <h2>Planned around the sea, not the clock.</h2>
            <p>
              Island weather and sea conditions decide a lot. We'll always confirm the plan the
              evening before, and if conditions aren't right we'll suggest a better alternative
              rather than take you out anyway.
            </p>
            <p>
              Wildlife sightings — turtles, mantas, dolphins, whale sharks — are never
              guaranteed. What is guaranteed is a local crew who know these waters well.
            </p>
          </div>
          <img
            src="/images/real/guest-coconut.jpg"
            alt="Guest enjoying a coconut at Sun Sky Villa"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>
    </>
  );
}
