import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, Noto_Sans_Sinhala, Noto_Sans_Devanagari } from "next/font/google";
import { DICT } from "@/lib/dictionary";
import { CONTACT } from "@/lib/media";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-serif",
  display: "swap",
});
const sinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sinhala",
  display: "swap",
  preload: false,
});
const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-devanagari",
  display: "swap",
  preload: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://roshen-sigiriya-guide.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: DICT.en.meta.title,
  description: DICT.en.meta.description,
  keywords: [
    "Sigiriya guide",
    "Pidurangala sunrise",
    "Lion Rock tour",
    "Thalkote Wewa",
    "Sri Lanka local guide",
    "Sigiriya cooking class",
  ],
  openGraph: {
    title: DICT.en.meta.title,
    description: DICT.en.meta.description,
    type: "website",
    images: [{ url: "/media/roshen-boulder.webp", width: 1600, height: 1066 }],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#1d3a2d",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristInformationCenter",
  name: "Roshen — Sigiriya Local Guide",
  description: DICT.en.meta.description,
  telephone: "+94786915604",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kashyapagama, Pidurangala",
    addressLocality: "Sigiriya",
    addressCountry: "LK",
  },
  availableLanguage: ["Sinhala", "English"],
  founder: { "@type": "Person", name: CONTACT.name },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${sinhala.variable} ${devanagari.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
