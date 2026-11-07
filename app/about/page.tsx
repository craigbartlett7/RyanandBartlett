import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About Ryan & Bartlett – Independent Aylesbury Estate Agents",
  description:
    "Meet Clodagh Ryan and Craig Bartlett, the partners behind Ryan & Bartlett, a new Aylesbury estate agency built around getting sales to completion.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <p className="crumbs">
            <Link href="/">Home</Link> / About us
          </p>
          <h1>New, and different on purpose</h1>
          <p className="lead">
            Ryan &amp; Bartlett is a new independent estate agency in Aylesbury. We started it because we believe
            selling a home should feel less uncertain.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow prose">
          <h2>Why we started</h2>
          <p>
            Too many sales fall through after the offer is agreed. The reasons are usually familiar: buyers whose
            finances were never checked, legal paperwork started too late, and nobody taking ownership of getting the
            deal over the line. We built Ryan &amp; Bartlett to fix exactly that.
          </p>
          <h2>What you can expect</h2>
          <ul>
            <li>Two local partners you can actually speak to.</li>
            <li>A valuation with the evidence behind it, not a number designed to win the instruction.</li>
            <li>Buyers verified before viewings, and a sales pack ready at instruction.</li>
            <li>A named progressor and a weekly update until completion.</li>
            <li>No sale, no fee.</li>
          </ul>
          <p>
            We are honest about being new. We have everything to prove, which is why we publish our results and put
            our promise in writing.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container narrow">
          <h2 className="section-title">The partners</h2>
          <div className="people">
            <div className="person">
              <div className="avatar" aria-hidden="true">
                CR
              </div>
              <h3>Clodagh Ryan</h3>
              <p className="muted">Partner</p>
              <p>Add Clodagh&apos;s background, experience and a line about what she loves about Aylesbury here.</p>
            </div>
            <div className="person">
              <div className="avatar" aria-hidden="true">
                CB
              </div>
              <h3>Craig Bartlett</h3>
              <p className="muted">Partner</p>
              <p>Add Craig&apos;s background, experience and a line about why he is passionate about this agency here.</p>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
