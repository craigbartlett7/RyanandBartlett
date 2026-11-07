import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PromiseGrid from "@/components/PromiseGrid";
import ValuationForm from "@/components/ValuationForm";
import { areas, getArea } from "@/lib/areas";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: `Estate Agents in ${area.name} | Free Valuation`,
    description: `Selling in ${area.name} (${area.postcodes})? Ryan & Bartlett offer a free valuation, verified buyers, a named progressor and no sale, no fee.`,
    alternates: { canonical: `/areas/${area.slug}` },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Estate agents in ${area.name}`,
    url: `${site.url}/areas/${area.slug}`,
    about: { "@type": "Place", name: `${area.name}, Buckinghamshire` },
    isPartOf: { "@id": `${site.url}/#website` },
    provider: { "@id": `${site.url}/#agency` },
  };
  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Areas", item: `${site.url}/areas` },
      { "@type": "ListItem", position: 3, name: area.name, item: `${site.url}/areas/${area.slug}` },
    ],
  };

  const others = areas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="crumbs">
            <Link href="/">Home</Link> / <Link href="/areas">Areas</Link> / {area.name}
          </p>
          <h1>Estate agents in {area.name}</h1>
          <p className="lead">
            {area.postcodes}. Honest valuations and a sale built to complete, from independent local agents.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split split-form">
          <div className="prose">
            <h2>Selling your home in {area.name}</h2>
            <p>{area.intro}</p>
            {area.districts ? (
              <>
                <h2>Postcodes we cover in {area.name}</h2>
                <ul>
                  {area.districts.map((d) => (
                    <li key={d.code}>
                      <strong>{d.code}:</strong> {d.places}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            <h2>About the area</h2>
            <p>{area.character}</p>
            <h2>Getting around</h2>
            <p>{area.getAround}</p>
            <h2>What it means when you sell</h2>
            <p>{area.sellingNote}</p>
          </div>
          <ValuationForm idPrefix="area" title={`Value my ${area.name} home`} intro="Free, no obligation. No sale, no fee." />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">How we sell homes in {area.name}</h2>
          <p className="section-sub">Our certainty promise applies to every sale, in every village.</p>
          <PromiseGrid />
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>Nearby areas we cover</h2>
          <div className="area-grid">
            {others.map((a) => (
              <Link key={a.slug} href={`/areas/${a.slug}`} className="area-card">
                <span className="pc">{a.postcodes}</span>
                <h3>{a.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={`Selling in ${area.name}?`} />
      <JsonLd data={[schema, crumbs]} />
    </>
  );
}
