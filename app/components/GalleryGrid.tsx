"use client";

import { useEffect, useState } from "react";

type Image = { src: string; alt: string };

export default function GalleryGrid({ images }: { images: Image[] }) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((current) => (current === null ? null : (current + 1) % images.length));
      if (event.key === "ArrowLeft") setActive((current) => (current === null ? null : (current - 1 + images.length) % images.length));
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [active, images.length]);

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <button
            className="gallery-item"
            key={image.src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Open image: ${image.alt}`}
          >
            <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
          </button>
        ))}
      </div>

      {active !== null ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={() => setActive(null)}>
          <button className="lightbox-close" type="button" onClick={() => setActive(null)} aria-label="Close image viewer">
            ×
          </button>
          <button
            className="lightbox-nav prev"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActive((current) => (current === null ? null : (current - 1 + images.length) % images.length));
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <img
            src={images[active].src}
            alt={images[active].alt}
            onClick={(event) => event.stopPropagation()}
          />
          <button
            className="lightbox-nav next"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActive((current) => (current === null ? null : (current + 1) % images.length));
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      ) : null}
    </>
  );
}
