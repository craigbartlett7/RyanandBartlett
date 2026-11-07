import { faqs } from "@/lib/faqs";
import JsonLd from "./JsonLd";

export default function Faq({ heading = "Questions sellers ask us" }: { heading?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section className="section" aria-labelledby="faq-h">
      <div className="container narrow">
        <h2 id="faq-h" className="section-title">
          {heading}
        </h2>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={schema} />
    </section>
  );
}
