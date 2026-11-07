import type { Metadata } from "next";
import Link from "next/link";
import ValuationForm from "@/components/ValuationForm";
import { phoneHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Property Valuation in Aylesbury",
  description:
    "Book a free, no-obligation property valuation in Aylesbury with Ryan & Bartlett. A partner visits, and you get a price backed by evidence. No sale, no fee.",
  alternates: { canonical: "/valuation" },
};

export default function ValuationPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="crumbs">
            <Link href="/">Home</Link> / Free valuation
          </p>
          <h1>Your free property valuation in Aylesbury</h1>
          <p className="lead">
            A partner will visit, listen to what you need and give you a price with the evidence behind it. No
            obligation, and no sale, no fee.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container split split-form">
          <div className="prose">
            <h2>What to expect</h2>
            <ul>
              <li>We contact you shortly to find a time that suits you.</li>
              <li>A partner visits your home and talks through your plans and timing.</li>
              <li>You get a valuation with the comparable sales behind it, in writing.</li>
              <li>If you instruct us, we start your sales pack straight away.</li>
            </ul>
            <div className="callout">
              <p>
                <strong>Prefer to talk?</strong>{" "}
                {site.phone ? (
                  <>
                    Call us on <a href={phoneHref}>{site.phone}</a>.
                  </>
                ) : (
                  <>Use the form and we will call you.</>
                )}
              </p>
            </div>
            <p>
              Not sure yet? Read <Link href="/certainty-promise">our certainty promise</Link> first.
            </p>
          </div>
          <ValuationForm variant="full" idPrefix="val" title="Tell us about your home" />
        </div>
      </section>
    </>
  );
}
