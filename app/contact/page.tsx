import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import InquiryForm from "../components/InquiryForm";
import JsonLd from "../components/JsonLd";
import { absoluteUrl, site } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Hotel Sun Sky Villa in Thoddoo, Maldives — WhatsApp, email and booking enquiries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Hotel Sun Sky Villa",
    description: "Get in touch with Hotel Sun Sky Villa in Thoddoo, Maldives.",
    url: absoluteUrl("/contact"),
    images: [{ url: "/images/hero.webp", alt: "Thoddoo, Maldives" }],
  },
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Contact", item: absoluteUrl("/contact") },
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <PageHero kicker="Say hello" title="We're here, on the island." image="/images/hero.webp">
        <p>
          Questions about rooms, transfers or the reef? Message us on WhatsApp for the quickest
          reply, or send an enquiry below.
        </p>
      </PageHero>

      <section className="section shell">
        <div className="contact-grid">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Hotel Sun Sky Villa</h2>
            <p className="lede">{site.address}</p>
            <div className="contact-list">
              <div className="contact-item">
                <strong>WhatsApp / phone</strong>
                <a href={site.whatsapp}>{site.phone}</a>
              </div>
              <div className="contact-item">
                <strong>Email</strong>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
              <div className="contact-item">
                <strong>Check-in / check-out</strong>
                <span>
                  {site.checkIn} / {site.checkOut}
                </span>
              </div>
            </div>
            <div className="info-card">
              <h3>Getting to Thoddoo</h3>
              <p>
                Fly into Velana International Airport (MLE), then take a speedboat to Thoddoo.
                Send us your flight details and we'll help with the connection.
              </p>
            </div>
          </div>

          <div className="inquiry-card">
            <h3 style={{ marginBottom: "1.2rem" }}>Send a message</h3>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
