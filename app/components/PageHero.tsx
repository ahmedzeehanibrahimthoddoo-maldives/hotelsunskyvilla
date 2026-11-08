import type { ReactNode } from "react";

export default function PageHero({
  kicker,
  title,
  image,
  children,
  align = "left",
}: {
  kicker: string;
  title: string;
  image: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <section className={`page-hero ${align === "center" ? "is-center" : ""}`}>
      <img src={image} alt="" aria-hidden="true" className="page-hero-image" />
      <div className="page-hero-shade" />
      <div className="shell page-hero-copy">
        <span className="eyebrow light">{kicker}</span>
        <h1>{title}</h1>
        {children ? <div className="page-hero-lede">{children}</div> : null}
      </div>
    </section>
  );
}
