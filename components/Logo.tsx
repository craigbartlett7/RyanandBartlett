import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`logo${light ? " logo-light" : ""}`} aria-label="Ryan & Bartlett home">
      <span className="logo-mark" aria-hidden="true">
        R<span>&amp;</span>B
      </span>
      <span className="logo-text">
        Ryan <span className="amp">&amp;</span> Bartlett
      </span>
    </Link>
  );
}
