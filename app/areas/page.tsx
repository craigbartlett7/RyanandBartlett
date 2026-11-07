import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { areas } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Estate Agents in Aylesbury, Stoke Mandeville, Wendover & the Vale",
  description:
    "Ryan & Bartlett sell homes across Aylesbury and nearby villages including Stoke Mandeville, Wendover, Haddenham, Waddesdon and Weston Turville.",
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <p className="crumbs">
            <Link href="/">Home</Link> / Areas we cover
          </p>
          <h1>Estate agents across Aylesbury and the Vale</h1>
          <p className="lead">
            Based in Aylesbury, we sell homes in the town and the villages around it. Pick your area to see how we
            work there.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="area-grid">
            {areas.map((a) => (
              <Link key={a.slug} href={`/areas/${a.slug}`} className="area-card">
                <span className="pc">{a.postcodes}</span>
                <h3>Estate agents in {a.name}</h3>
                <p>{a.blurb}</p>
              </Link>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 32 }} className="muted">
            Not on the list? If you are nearby, ask us. We are happy to take a look.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
