"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "../lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const frame = requestAnimationFrame(() => firstLinkRef.current?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (event.key !== "Tab" || !menuRef.current) return;
      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const isCurrent = (href: string) => pathname === href;

  return (
    <header className={`site-header ${scrolled || menuOpen ? "is-solid" : ""}`}>
      <div className="shell nav-wrap">
        <Link href="/" className="brand" onClick={closeMenu} aria-label={`${site.name} home`}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" role="img">
              <circle cx="16" cy="16" r="6" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <path d="M16 2v4M16 26v4M2 16h4M26 16h4" />
                <path d="M6.2 6.2l2.8 2.8M23 23l2.8 2.8M25.8 6.2L23 9M9 23l-2.8 2.8" />
              </g>
            </svg>
          </span>
          <span className="brand-text">
            <strong>Sun Sky</strong>
            <em>Villa · Thoddoo</em>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="btn btn-gold nav-book" href="/booking">
          Book your stay
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div className={`mobile-menu-backdrop ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav ref={menuRef} id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation">
          <span className="eyebrow light">Explore Sun Sky Villa</span>
          <Link
            ref={firstLinkRef}
            href="/"
            onClick={closeMenu}
            aria-current={isCurrent("/") ? "page" : undefined}
          >
            Home
          </Link>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              aria-current={isCurrent(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link className="btn btn-gold" href="/booking" onClick={closeMenu}>
            Book your stay
          </Link>
          <a className="mobile-contact" href={site.whatsapp}>
            WhatsApp {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
