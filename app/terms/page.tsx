import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website Terms",
  description: "Terms of use for the Ryan & Bartlett website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const owner = site.companyName || site.name;
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <h1>Website terms</h1>
        </div>
      </section>
      <section className="section">
        <div className="container narrow prose">
          <h2>Using this website</h2>
          <p>
            This website is operated by {owner}. By using it you agree to these terms. The content is for general
            information and is not legal, financial or other professional advice.
          </p>
          <h2>Valuations</h2>
          <p>
            Any valuation we give is an opinion based on information available at the time and is not a formal survey
            or guarantee of sale price. The terms of any service we provide to you are set out in your written
            agreement with us.
          </p>
          <h2>Accuracy</h2>
          <p>
            We take care to keep the information on this website accurate, but we do not guarantee that it is
            complete or up to date. Descriptions of areas are general and not a recommendation.
          </p>
          <h2>Links and intellectual property</h2>
          <p>
            We are not responsible for the content of other websites we link to. The content and branding on this
            website belong to us and may not be copied without permission.
          </p>
          <h2>Law</h2>
          <p>These terms are governed by the laws of England and Wales.</p>
        </div>
      </section>
    </>
  );
}
