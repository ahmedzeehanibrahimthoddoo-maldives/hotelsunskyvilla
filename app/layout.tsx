import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import { absoluteUrl, site } from "./lib/site";

const defaultTitle = `${site.name} | Boutique guesthouse in Thoddoo, Maldives`;
const defaultDescription =
  "A warm, design-led island villa in Thoddoo, Maldives with comfortable rooms, breakfast, reef experiences and direct booking support.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: defaultTitle,
    template: `%s | ${site.name}`,
  },
  description: defaultDescription,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: absoluteUrl("/"),
    siteName: site.name,
    images: [{ url: "/images/hero.webp", alt: `${site.name}, Thoddoo, Maldives` }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/images/hero.webp"],
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: site.name,
  url: site.url,
  image: [`${site.url}/images/hero.webp`],
  description: defaultDescription,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Thoddoo Island",
    addressRegion: "Alif Alif Atoll",
    addressCountry: "MV",
  },
  starRating: { "@type": "Rating", ratingValue: "4" },
  amenityFeature: [
    "Free Wi-Fi",
    "Air conditioning",
    "Breakfast",
    "Private bathroom",
    "Airport transfer assistance",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: `Official website of ${site.name} in ${site.location}.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={[hotelSchema, websiteSchema]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
