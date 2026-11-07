import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How Ryan & Bartlett collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const controller = site.companyName || site.name;
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <h1>Privacy notice</h1>
          <p className="lead">How we handle the information you give us.</p>
        </div>
      </section>
      <section className="section">
        <div className="container narrow prose">
          <h2>Who we are</h2>
          <p>
            {controller} (&quot;we&quot;, &quot;us&quot;) is the controller of the personal information collected through this website.
            {site.email ? (
              <>
                {" "}
                You can contact us at <a href={`mailto:${site.email}`}>{site.email}</a>.
              </>
            ) : null}
          </p>
          <h2>What we collect</h2>
          <ul>
            <li>
              Details you give us in forms: your name, phone number, email address, property postcode and address,
              property type, timescale and any message.
            </li>
            <li>
              The page you submitted the form from and any campaign tags in the link you used (for example
              utm_source), so we know which of our marketing works.
            </li>
          </ul>
          <h2>How we use it</h2>
          <ul>
            <li>To respond to your enquiry and arrange your valuation (legitimate interests and, where relevant, steps at your request before entering a contract).</li>
            <li>To contact you about the valuation you requested, by phone or email, based on your consent.</li>
            <li>To understand which marketing channels bring us enquiries.</li>
          </ul>
          <h2>Who we share it with</h2>
          <p>
            We use trusted providers to run this website and store enquiries, including Vercel (hosting), Supabase
            (database) and, where enabled, an email delivery provider. They process data on our instructions. We do not
            sell your personal information.
          </p>
          <h2>How long we keep it</h2>
          <p>
            If you do not go on to instruct us we will keep your enquiry for no longer than 12 months. If you do
            instruct us, we will keep records for as long as the law requires.
          </p>
          <h2>Your rights</h2>
          <p>
            You can ask to see, correct or delete the information we hold about you, object to how we use it, or
            withdraw your consent at any time. You can also complain to the Information Commissioner&apos;s Office at{" "}
            <a href="https://ico.org.uk" rel="noopener noreferrer" target="_blank">
              ico.org.uk
            </a>
            .
          </p>
          <h2>Cookies</h2>
          <p>
            This website does not currently use advertising or analytics cookies. If we add them, we will update this
            notice and ask for your consent where required.
          </p>
          <p className="muted">
            Last updated: November 2026. Back to <Link href="/">home</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
