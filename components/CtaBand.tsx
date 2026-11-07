import Link from "next/link";
import { phoneHref, site } from "@/lib/site";

export default function CtaBand({
  title = "Thinking of selling in Aylesbury?",
  text = "Book a free, no-obligation valuation and see how a certainty-first agent works.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <Link href="/valuation" className="btn btn-accent">
            Get my free valuation
          </Link>
          {site.phone ? (
            <a href={phoneHref} className="btn btn-outline-light">
              Call {site.phone}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
