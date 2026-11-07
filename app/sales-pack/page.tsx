import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { packGroups, materialInfo } from "@/lib/salespack";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Selling Your Home in Aylesbury: Sales Pack Checklist",
  description:
    "Every document you need to sell your home in England: title register, TA6, TA10, EPC and more, plus extras for leasehold. A one-page checklist from Ryan & Bartlett, Aylesbury.",
  alternates: { canonical: "/sales-pack" },
};

export default function SalesPackPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Sales pack checklist", item: `${site.url}/sales-pack` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumb} />
      <section className="page-hero">
        <div className="container narrow">
          <p className="crumbs">
            <Link href="/">Home</Link> / Sales pack checklist
          </p>
          <h1>Your sales pack checklist</h1>
          <p className="lead">
            Most sales slow down waiting for paperwork. Gather these before your home goes on the market and a
            buyer&apos;s solicitor has what they need from day one. We will help you with every item.
          </p>
          <p className="no-print" style={{ marginTop: 16 }}>
            <Link href="/valuation" className="btn btn-primary">
              Book your free valuation
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          {packGroups.map((g) => (
            <div key={g.heading} style={{ marginBottom: 32 }}>
              <h2>{g.heading}</h2>
              {g.intro && <p>{g.intro}</p>}
              <ul className="checklist">
                {g.items.map((it) => (
                  <li key={it.title}>
                    <strong>{it.title}</strong>
                    <span>{it.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <h2>What we gather for your listing</h2>
          <p>
            Separately from your paperwork, estate agents must give buyers key facts about a property up front. We
            collect these from you at valuation, so your listing is complete and compliant from day one.
          </p>
          <div className="promise-grid" style={{ marginTop: 16 }}>
            {materialInfo.map((m) => (
              <div key={m.part} className="promise-card">
                <span className="promise-num">{m.part}</span>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </div>
            ))}
          </div>

          <div className="callout" style={{ marginTop: 32 }}>
            <p>
              <strong>Don&apos;t worry if you have gaps.</strong> Nobody has every document to hand. At your free
              valuation we will go through this list with you, order what is missing, and work with your solicitor
              so nothing holds up your sale. This guide is general information, not legal advice, and your
              solicitor will confirm exactly what your sale needs.
            </p>
          </div>

          <p style={{ marginTop: 24 }}>
            <Link href="/valuation" className="btn btn-primary">
              Book your free valuation
            </Link>{" "}
            <Link href="/certainty-promise" className="btn btn-ghost">
              Read our certainty promise
            </Link>
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
