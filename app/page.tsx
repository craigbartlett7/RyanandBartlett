import type { Metadata } from "next";
import Link from "next/link";
import ValuationForm from "@/components/ValuationForm";
import PromiseGrid from "@/components/PromiseGrid";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { areas } from "@/lib/areas";
import { steps } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Estate Agents in Aylesbury | Ryan & Bartlett – Sold, and staying sold" },
  description:
    "Independent Aylesbury estate agents built around getting your sale to completion. Verified buyers, sales pack ready at instruction, a named progressor, no sale no fee. Free valuation.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">New estate agents in Aylesbury</span>
            <h1>
              Sold, and <em>staying sold.</em>
            </h1>
            <p className="lead">
              Plenty of agents can put a board up. We are built to get your sale all the way to completion: fewer
              fall-throughs, honest valuations, and the paperwork ready before the sign goes up.
            </p>
            <div className="hero-actions">
              <Link href="/valuation" className="btn btn-primary">
                Get my free valuation
              </Link>
              <Link href="/certainty-promise" className="btn btn-ghost">
                See our promise
              </Link>
            </div>
            <ul className="chips">
              <li>No sale, no fee</li>
              <li>A named progressor</li>
              <li>Local to Aylesbury</li>
            </ul>
          </div>
          <ValuationForm idPrefix="hero" title="Free valuation" intro="Tell us a little and we will be in touch shortly." />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">A sale that is agreed is not a sale that is done</h2>
          <p className="section-sub">
            Industry figures suggest roughly three in ten agreed sales in England and Wales fall through before
            completion. Each one costs sellers weeks, money and peace of mind.
          </p>
          <div className="cards-3">
            <div className="card">
              <h3>Buyers who can&apos;t proceed</h3>
              <p>
                Offers accepted from buyers whose finances or chain were never properly checked are a common reason
                sales collapse.
              </p>
            </div>
            <div className="card">
              <h3>Paperwork left until too late</h3>
              <p>
                When the legal information is gathered only after an offer, buyers wait, nerves fray and deals slip.
              </p>
            </div>
            <div className="card">
              <h3>No one owning the sale</h3>
              <p>
                Once the board is up, many sellers are left chasing for news. We think that is backwards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="promise">
        <div className="container">
          <h2 className="section-title">Our certainty promise</h2>
          <p className="section-sub">
            Six commitments to every seller, designed to put certainty ahead of a flashy asking price.
          </p>
          <PromiseGrid />
          <p style={{ textAlign: "center", marginTop: 28 }}>
            <Link href="/certainty-promise" className="btn btn-ghost">
              How each promise works
            </Link>
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title">How selling with us works</h2>
          <p className="section-sub">Four simple steps from first conversation to handing over the keys.</p>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
          <p style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/valuation" className="btn btn-accent">
              Start with a free valuation
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">What&apos;s different about Ryan &amp; Bartlett</h2>
          <p className="section-sub">We&apos;re new, and different on purpose.</p>
          <div className="compare">
            <div className="usual">
              <h3>The usual way</h3>
              <ul>
                <li>A high valuation to win the instruction</li>
                <li>Viewings with anyone who asks</li>
                <li>Legal paperwork started after an offer</li>
                <li>Updates when you chase</li>
                <li>Long tie-ins and little proof of results</li>
              </ul>
            </div>
            <div className="us">
              <h3>Ryan &amp; Bartlett</h3>
              <ul>
                <li>A valuation with the comparable sales behind it</li>
                <li>Buyers verified before they view</li>
                <li>A sales pack ready when you instruct us</li>
                <li>A named progressor and a weekly update</li>
                <li>No sale, no fee, and a short minimum term</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">We&apos;ll publish our numbers</h2>
          <p className="section-sub">
            As a new agency we have no results to show yet, and we won&apos;t pretend otherwise. What we will do is
            publish these figures every quarter from our first completions, so you can hold us to them.
          </p>
          <div className="scoreboard">
            <div className="score">
              <div className="big">Fall-through rate</div>
              <p>How many of our agreed sales fail to complete.</p>
            </div>
            <div className="score">
              <div className="big">Offer to exchange</div>
              <p>The average days from accepted offer to exchange.</p>
            </div>
            <div className="score">
              <div className="big">Asking vs achieved</div>
              <p>How close our sale prices come to our asking prices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Estate agents across Aylesbury and the Vale</h2>
          <p className="section-sub">
            Local knowledge matters. We&apos;re based in Aylesbury and cover the town and the villages around it.
          </p>
          <div className="area-grid">
            {areas.map((a) => (
              <Link key={a.slug} href={`/areas/${a.slug}`} className="area-card">
                <span className="pc">{a.postcodes}</span>
                <h3>Estate agents in {a.name}</h3>
                <p>{a.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <div className="prose">
            <h2>Two local partners, not a call centre</h2>
            <p>
              Ryan &amp; Bartlett is run by Clodagh Ryan and Craig Bartlett. When you call, you speak to one of us.
              When you need an answer on a Friday evening, you do not get a ticket number.
            </p>
            <p>
              We started this agency because we think selling a home should feel less uncertain. That is why
              everything we do is built around one question: will this sale actually complete?
            </p>
            <p>
              <Link href="/about" className="btn btn-ghost">
                Meet the team
              </Link>
            </p>
          </div>
          <div className="callout">
            <p>
              <strong>Our promise in one line:</strong> if we cannot make the case for your price with evidence, we
              will tell you, and if we do not sell your home, you do not pay.
            </p>
          </div>
        </div>
      </section>

      <Faq />
      <CtaBand />
    </>
  );
}
