import Link from "next/link";
import { nav, site } from "../lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div className="footer-brand">
          <span className="brand-mark light" aria-hidden="true">
            <svg viewBox="0 0 32 32" role="img">
              <circle cx="16" cy="16" r="6" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <path d="M16 2v4M16 26v4M2 16h4M26 16h4" />
                <path d="M6.2 6.2l2.8 2.8M23 23l2.8 2.8M25.8 6.2L23 9M9 23l-2.8 2.8" />
              </g>
            </svg>
          </span>
          <p className="footer-name">{site.name}</p>
          <p className="footer-tagline">
            A small island villa with a big sense of welcome. Thoddoo, Maldives.
          </p>
          <p className="footer-address">{site.address}</p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/about">About the villa</Link>
        </div>

        <div className="footer-col">
          <h4>Book direct</h4>
          <Link href="/booking">Enquire now</Link>
          <a href={site.bookingEngine}>Instant booking</a>
          <a href={site.whatsapp}>WhatsApp {site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>

        <div className="footer-col footer-hours">
          <h4>Good to know</h4>
          <p>
            Check-in <span>{site.checkIn}</span>
          </p>
          <p>
            Check-out <span>{site.checkOut}</span>
          </p>
          <p>Airport transfers arranged</p>
          <p>Breakfast included</p>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span className="footer-credit">
          Crafted for island hospitality · <Link href="/partner">Travel partners</Link>
        </span>
      </div>
    </footer>
  );
}
