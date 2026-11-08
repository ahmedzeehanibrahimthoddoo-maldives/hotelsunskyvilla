import type { Metadata } from "next";

export const siteName = "Thoddoo Sun Sky Villa";
export const siteUrl = "https://thoddoosunskyvilla.com";
export const ogImage = "/og.png";
export const businessEmail = "reservation@thoddoosunskyvilla.com";
export const businessPhone = "+960 769 9946";
export const businessPhoneDial = "9607699946";
export const businessLocation = "Thoddoo Island, Maldives";

function normalizePath(path: string) {
  if (path === "/") return "";
  return path.startsWith("/") ? path : `/${path}`;
}

export function absoluteUrl(path: string) {
  return `${siteUrl}${normalizePath(path)}`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  robots?: Metadata["robots"];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  image = ogImage,
  robots,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [{ url: image, alt: `${siteName} in ${businessLocation}` }],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots,
  };
}

export function buildBreadcrumbList(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    ],
  };
}
