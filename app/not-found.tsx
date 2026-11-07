import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow" style={{ textAlign: "center" }}>
        <h1>That page has moved on</h1>
        <p className="lead" style={{ margin: "0 auto 24px" }}>
          We could not find what you were looking for, but we can help you sell your home.
        </p>
        <Link href="/" className="btn btn-primary">
          Back to the homepage
        </Link>
      </div>
    </section>
  );
}
