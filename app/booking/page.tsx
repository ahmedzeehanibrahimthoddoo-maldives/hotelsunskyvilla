import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import InquiryForm from "../components/InquiryForm";
import { absoluteUrl, site } from "../lib/site";

export const metadata: Metadata = {
  title: "Booking enquiry",
  description:
    "Check availability at Hotel Sun Sky Villa, Thoddoo. Send a direct booking enquiry and our team will reply with the best rate.",
  alternates: { canonical: "/booking" },
  openGraph: {
    title: "Booking enquiry | Hotel Sun Sky Villa",
    description: "Send a direct booking enquiry for Hotel Sun Sky Villa in Thoddoo, Maldives.",
    url: absoluteUrl("/booking"),
    images: [{ url: "/images/real/courtyard.jpg", alt: "Courtyard at Sun Sky Villa" }],
  },
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        kicker="Book direct"
        title="Let's find your dates."
        image="/images/room-wide.webp"
      >
        <p>
          Tell us when you'd like to arrive and we'll reply personally with availability and the
          best direct rate. No payment is taken through this form.
        </p>
      </PageHero>

      <section className="section shell">
        <div className="contact-grid">
          <div>
            <span className="eyebrow">Direct & personal</span>
            <h2>Why book direct?</h2>
            <div className="contact-list">
              <div className="contact-item">
                <strong>Best available rate</strong>
                <span>We match or beat the booking sites.</span>
              </div>
              <div className="contact-item">
                <strong>Real local advice</strong>
                <span>Transfers, rooms and reef days, sorted by the people who live here.</span>
              </div>
              <div className="contact-item">
                <strong>Flexible help</strong>
                <span>Flight delays, late boats and changed plans — just message us.</span>
              </div>
            </div>
            <div className="info-card">
              <h3>Prefer to talk?</h3>
              <p>
                WhatsApp{" "}
                <a className="text-link" href={site.whatsapp}>
                  {site.phone}
                </a>
              </p>
              <p>
                Email{" "}
                <a className="text-link" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
              <p style={{ marginTop: "0.8rem", fontSize: "0.82rem" }}>
                Check-in {site.checkIn} · Check-out {site.checkOut}
              </p>
            </div>
          </div>

          <div className="inquiry-card">
            <h3 style={{ marginBottom: "1.2rem" }}>Stay enquiry</h3>
            <InquiryForm />
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="shell card-grid three">
          <article className="info-card">
            <h3>Instant booking</h3>
            <p>
              Prefer to confirm immediately? Our online booking engine shows live availability
              and accepts payment.
            </p>
            <a className="text-link" href={site.bookingEngine} target="_blank" rel="noopener noreferrer">
              Book online →
            </a>
          </article>
          <article className="info-card">
            <h3>Transfers</h3>
            <p>
              Thoddoo is a speedboat ride from Malé. Share your flight number and we'll suggest
              the best connection and meet you at the jetty.
            </p>
          </article>
          <article className="info-card">
            <h3>Good to know</h3>
            <p>
              Rates are per room per night, breakfast included. Children are welcome; extra beds
              and cots can be arranged on request.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
