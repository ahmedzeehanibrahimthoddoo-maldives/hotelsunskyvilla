"use client";

import { useMemo, useState } from "react";
import { rooms } from "../lib/rooms";
import { site } from "../lib/site";

type Props = {
  defaultRoom?: string;
  subject?: string;
  compact?: boolean;
};

function buildMessage(values: {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  room: string;
  message: string;
}) {
  return [
    `Hello ${site.name},`,
    "",
    "I would like to enquire about a stay.",
    "",
    `Name: ${values.name || "—"}`,
    `Email: ${values.email || "—"}`,
    `Phone: ${values.phone || "—"}`,
    `Check-in: ${values.checkIn || "—"}`,
    `Check-out: ${values.checkOut || "—"}`,
    `Guests: ${values.guests || "—"}`,
    `Room: ${values.room || "No preference"}`,
    "",
    values.message ? `Notes: ${values.message}` : "Notes: —",
    "",
    "Please confirm availability and the best rate.",
  ].join("\n");
}

export default function InquiryForm({ defaultRoom = "", subject, compact = false }: Props) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    room: defaultRoom,
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "email" | "whatsapp">("idle");
  const [error, setError] = useState("");

  const message = useMemo(() => buildMessage(values), [values]);
  const mailto = useMemo(
    () =>
      `mailto:${site.email}?subject=${encodeURIComponent(
        subject || `Stay enquiry — ${values.name || "Sun Sky Villa"}`,
      )}&body=${encodeURIComponent(message)}`,
    [message, subject, values.name],
  );
  const whatsapp = useMemo(
    () => `${site.whatsapp}?text=${encodeURIComponent(message)}`,
    [message],
  );

  const update = (key: keyof typeof values) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((current) => ({ ...current, [key]: event.target.value }));
    setError("");
  };

  const validate = () => {
    if (!values.name.trim() || !values.email.trim() || !values.checkIn || !values.checkOut) {
      setError("Please add your name, email and travel dates so we can reply properly.");
      return false;
    }
    if (values.checkOut <= values.checkIn) {
      setError("Check-out should be after check-in.");
      return false;
    }
    return true;
  };

  return (
    <form
      className={`inquiry-form ${compact ? "is-compact" : ""}`}
      onSubmit={(event) => {
        event.preventDefault();
        if (!validate()) return;
        setStatus("email");
        window.location.href = mailto;
      }}
    >
      <div className="form-grid">
        <label>
          <span>Full name</span>
          <input value={values.name} onChange={update("name")} placeholder="Your name" autoComplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" value={values.email} onChange={update("email")} placeholder="you@email.com" autoComplete="email" required />
        </label>
        <label>
          <span>Phone / WhatsApp</span>
          <input value={values.phone} onChange={update("phone")} placeholder="+960 …" autoComplete="tel" />
        </label>
        <label>
          <span>Guests</span>
          <select value={values.guests} onChange={update("guests")}>
            {["1", "2", "3", "4", "5", "6"].map((count) => (
              <option key={count} value={count}>
                {count} {count === "1" ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Check-in</span>
          <input type="date" value={values.checkIn} onChange={update("checkIn")} required />
        </label>
        <label>
          <span>Check-out</span>
          <input type="date" value={values.checkOut} onChange={update("checkOut")} required />
        </label>
        <label className="form-full">
          <span>Room preference</span>
          <select value={values.room} onChange={update("room")}>
            <option value="">No preference</option>
            {rooms.map((room) => (
              <option key={room.slug} value={room.name}>
                {room.name} — from ${room.price}/night
              </option>
            ))}
          </select>
        </label>
        {!compact && (
          <label className="form-full">
            <span>Anything we should know?</span>
            <textarea
              value={values.message}
              onChange={update("message")}
              rows={4}
              placeholder="Celebrating something, arriving late, travelling with children…"
            />
          </label>
        )}
      </div>

      {error ? <p className="form-error">{error}</p> : null}
      {status !== "idle" && !error ? (
        <p className="form-note">
          Your email app should open with the enquiry ready to send. Prefer WhatsApp? Use the
          second button below.
        </p>
      ) : null}

      <div className="form-actions">
        <button className="btn btn-gold" type="submit">
          Send enquiry by email
        </button>
        <button
          className="btn btn-outline"
          type="button"
          onClick={() => {
            if (!validate()) return;
            setStatus("whatsapp");
            window.open(whatsapp, "_blank", "noopener,noreferrer");
          }}
        >
          Send on WhatsApp
        </button>
      </div>

      <p className="form-fineprint">
        We reply personally, usually within a few hours. No payment is taken here. For instant
        confirmation you can also use our{" "}
        <a href={site.bookingEngine} target="_blank" rel="noopener noreferrer">
          online booking engine
        </a>
        .
      </p>
    </form>
  );
}
