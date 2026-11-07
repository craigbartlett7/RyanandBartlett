import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCta from "@/components/MobileCta";
import JsonLd from "@/components/JsonLd";
import { areas } from "@/lib/areas";
import { site } from "@/lib/site";

const heading = Manrope({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const viewport: Viewport = {
  themeColor: "#122335",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Estate Agents in Aylesbury | Ryan & Bartlett – Sold, and staying sold",
    template: "%s | Ryan & Bartlett",
  },
  description:
    "Ryan & Bartlett are independent estate agents in Aylesbury. Verified buyers, a sales pack ready at instruction, a named progressor and no sale, no fee. Book your free valuation.",
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.name,
    url: site.url,
    title: "Estate Agents in Aylesbury | Ryan & Bartlett",
    description: "Sold, and staying sold. Independent Aylesbury estate agents built around getting your sale to completion.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const sameAs: string[] = [];
  const org = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${site.url}/#agency`,
    name: site.name,
    slogan: site.tagline,
    url: site.url,
    logo: `${site.url}/logo.png`,
    image: `${site.url}/logo.png`,
    description:
      "Independent estate agents in Aylesbury, Buckinghamshire, selling homes with verified buyers, a sales pack ready at instruction and a named progressor.",
    ...(site.phone ? { telephone: site.phone } : {}),
    ...(site.email ? { email: site.email } : {}),
    ...(site.address
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.split(",")[0]?.trim(),
            addressLocality: "Aylesbury",
            addressRegion: "Buckinghamshire",
            addressCountry: "GB",
          },
        }
      : {}),
    areaServed: areas.map((a) => ({ "@type": "Place", name: `${a.name}, Buckinghamshire` })),
    priceRange: "No sale, no fee",
    founder: site.founders.map((n) => ({ "@type": "Person", name: n })),
    ...(sameAs.length ? { sameAs } : {}),
  };
  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: "en-GB",
  };

  return (
    <html lang="en-GB" className={`${heading.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCta />
        <JsonLd data={[org, webSite]} />
      </body>
    </html>
  );
}
