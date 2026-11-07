import Link from "next/link";
import { phoneHref, site } from "@/lib/site";

// Sticky bottom bar on phones: the quickest route to an instruction.
export default function MobileCta() {
  return (
    <div className="mobile-cta">
      {site.phone ? (
        <a href={phoneHref} className="btn btn-ghost">
          Call us
        </a>
      ) : null}
      <Link href="/valuation" className="btn btn-primary">
        Free valuation
      </Link>
    </div>
  );
}
