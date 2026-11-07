import type { Metadata } from "next";
import Link from "next/link";
import ValuationForm from "@/components/ValuationForm";
import { phoneHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Ryan & Bartlett – Estate Agents in Aylesbury",
  description: "Get in touch with Ryan & Bartlett, independent estate agents in Aylesbury. Call, email or request a free valuation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <p className="crumbs">
            <Link href="/">Home</Link> / Contact
          </p>
          <h1>Get in touch</h1>
          <p className="lead">Call us, email us, or send a request and we will come back to you shortly.</p>
        </div>
      </section>
      <section className="section">
        <div className="container split split-form">
          <div className="prose">
            <h2>Ryan &amp; Bartlett</h2>
            {site.phone ? (
              <p>
                <strong>Phone:</strong> <a href={phoneHref}>{site.phone}</a>
              </p>
            ) : null}
            {site.email ? (
              <p>
                <strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            ) : null}
            {site.address ? (
              <p>
                <strong>Office:</strong> {site.address}
              </p>
            ) : null}
            {site.hours ? (
              <p>
                <strong>Opening hours:</strong> {site.hours}
              </p>
            ) : null}
            {!site.phone && !site.email && !site.address ? (
              <p>Send us a request using the form and one of us will be in touch.</p>
            ) : null}
            <p>
              Looking to sell? Our <Link href="/valuation">free valuation</Link> takes two minutes to request.
            </p>
          </div>
          <ValuationForm variant="full" idPrefix="contact" title="Send us a message" />
        </div>
      </section>
    </>
  );
}
