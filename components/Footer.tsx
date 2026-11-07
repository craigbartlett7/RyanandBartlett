import Link from "next/link";
import Logo from "./Logo";
import { areas } from "@/lib/areas";
import { nav, phoneHref, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo light />
          <p className="footer-tag">{site.tagline} Independent estate agents in Aylesbury, Buckinghamshire.</p>
          {site.phone ? (
            <p>
              <a href={phoneHref}>{site.phone}</a>
            </p>
          ) : null}
          {site.email ? (
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          ) : null}
          {site.address ? <p>{site.address}</p> : null}
          {site.hours ? <p className="muted">{site.hours}</p> : null}
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/sales-pack">Sales pack checklist</Link>
            </li>
            <li>
              <Link href="/valuation">Free valuation</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Areas we cover</h4>
          <ul>
            {areas.map((a) => (
              <li key={a.slug}>
                <Link href={`/areas/${a.slug}`}>Estate agents in {a.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-legal">
        <p>
          © {year} {site.companyName || site.name}.
          {site.companyNumber ? ` Registered in England and Wales, company number ${site.companyNumber}.` : ""}
          {site.redressScheme ? ` Member of ${site.redressScheme}.` : ""}
          {site.icoNumber ? ` ICO registration ${site.icoNumber}.` : ""}
        </p>
        <p>
          <Link href="/privacy">Privacy notice</Link> · <Link href="/terms">Website terms</Link>
        </p>
      </div>
    </footer>
  );
}
