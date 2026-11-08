import Link from "next/link";

export default function NotFound() {
  return (
    <section className="notfound">
      <div>
        <span className="eyebrow light">404</span>
        <h1>This path leads to the beach.</h1>
        <p style={{ maxWidth: "44ch", margin: "0 auto 1.6rem", color: "rgba(255,255,255,0.72)" }}>
          The page you were looking for is not here. Let us take you back to the villa.
        </p>
        <div className="actions" style={{ justifyContent: "center" }}>
          <Link className="btn btn-gold" href="/">
            Back home
          </Link>
          <Link className="btn btn-outline-light" href="/booking">
            Plan a stay
          </Link>
        </div>
      </div>
    </section>
  );
}
