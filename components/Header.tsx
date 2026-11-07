import Link from "next/link";
import Logo from "./Logo";
import { nav, phoneHref, site } from "@/lib/site";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="nav-desktop" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          {site.phone ? (
            <a className="header-phone" href={phoneHref}>
              {site.phone}
            </a>
          ) : null}
          <Link className="btn btn-primary btn-sm" href="/valuation">
            Free valuation
          </Link>
          <details className="nav-mobile">
            <summary aria-label="Menu">
              <span />
              <span />
              <span />
            </summary>
            <div className="nav-mobile-panel">
              {nav.map((n) => (
                <Link key={n.href} href={n.href}>
                  {n.label}
                </Link>
              ))}
              <Link href="/valuation" className="btn btn-primary">
                Free valuation
              </Link>
              {site.phone ? (
                <a href={phoneHref} className="btn btn-ghost">
                  Call {site.phone}
                </a>
              ) : null}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
