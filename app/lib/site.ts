export const site = {
  name: "Hotel Sun Sky Villa",
  shortName: "Sun Sky Villa",
  tagline: "A boutique island hideaway in Thoddoo, Maldives",
  url: "https://www.thoddoosunskyvilla.com",
  email: "reservation@thoddoosunskyvilla.com",
  phone: "+960 769 9946",
  phoneDial: "9607699946",
  whatsapp: "https://wa.me/9607699946",
  address: "Thoddoo Island, Alif Alif Atoll, Maldives",
  location: "Thoddoo Island, Maldives",
  bookingEngine: "https://be.aiosell.com/#!/book/22ffd2f355",
  checkIn: "14:00",
  checkOut: "12:00",
  currency: "USD",
} as const;

export const nav = [
  { label: "Stay", href: "/stay" },
  { label: "Experiences", href: "/experiences" },
  { label: "Packages", href: "/packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "Discover", href: "/discover" },
  { label: "Contact", href: "/contact" },
] as const;

export function absoluteUrl(path = "/") {
  return `${site.url}${path === "/" ? "" : path}`;
}

export function whatsappLink(message: string) {
  return `${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function emailLink(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
