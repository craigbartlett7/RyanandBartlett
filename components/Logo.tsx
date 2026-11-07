import Image from "next/image";
import Link from "next/link";
import logoDark from "@/public/logo.png";
import logoLight from "@/public/logo-light.png";

export default function Logo({ light = false, priority = false }: { light?: boolean; priority?: boolean }) {
  return (
    <Link href="/" className="logo" aria-label="Ryan & Bartlett home">
      <Image
        src={light ? logoLight : logoDark}
        alt="Ryan & Bartlett"
        priority={priority}
        sizes="(min-width: 900px) 180px, 160px"
      />
    </Link>
  );
}
