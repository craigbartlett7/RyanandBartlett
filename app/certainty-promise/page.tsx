import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { promises } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Certainty Promise – Selling Your Home in Aylesbury",
  description:
    "Six commitments from Ryan & Bartlett: verified buyers, a sales pack at instruction, a named progressor, evidence-based valuations, no sale no fee and free re-marketing if finance collapses.",
  alternates: { canonical: "/certainty-promise" },
};

export default function PromisePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <p className="crumbs">
            <Link href="/">Home</Link> / Our promise
          </p>
          <h1>Our certainty promise</h1>
          <p className="lead">
            We would rather sell your home properly than quickly list it. These six commitments are how we aim to get
            your sale to completion.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          {promises.map((p, i) => (
            <article key={p.title} className="card" style={{ marginBottom: 18 }}>
              <h2 style={{ fontSize: "1.5rem" }}>
                <span style={{ color: "var(--coral-dark)" }}>{i + 1}.</span> {p.title}
              </h2>
              <p>{p.body}</p>
            </article>
          ))}

          <div className="callout">
            <p>
              <strong>Fair and clear:</strong> the exact terms, including the minimum term, how our fee works and the
              cap on free re-marketing, are written into your agreement. We will talk you through every line before
              you sign.
            </p>
          </div>

          <h2>How we&apos;ll hold ourselves to it</h2>
          <p>
            Every quarter we will publish three numbers from our own sales: our fall-through rate, the average days
            from accepted offer to exchange, and how our achieved prices compare with our asking prices. We are a new
            agency, so those figures will start small and grow, but they will be real.
          </p>
          <p style={{ marginTop: 24 }}>
            <Link href="/valuation" className="btn btn-primary">
              Book your free valuation
            </Link>
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
