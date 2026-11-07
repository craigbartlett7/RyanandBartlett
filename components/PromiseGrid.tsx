import { promises } from "@/lib/site";

export default function PromiseGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="promise-grid">
      {promises.map((p, i) => (
        <article className="promise-card" key={p.title}>
          <span className="promise-num" aria-hidden="true">
            {i + 1}
          </span>
          <h3>{p.title}</h3>
          <p>{detailed ? p.body : p.short}</p>
        </article>
      ))}
    </div>
  );
}
