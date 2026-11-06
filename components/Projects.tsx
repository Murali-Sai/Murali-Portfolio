import { projects } from "@/lib/data";
import Section from "./Section";

/**
 * The signature: the work as an Index (layout.md § 5.15) — five hairline rows
 * a reader can scan in one pass, each opening in place into the full case.
 * The lead row is open by default, so the strongest project reads as a case
 * without a click (anatomy.md § hire).
 */
export default function Projects() {
  return (
    <Section
      id="projects"
      space="s"
      top="tight"
      title="Selected work"
      lead="Five systems. Open a row for how it was built and what it was measured against."
    >
      <div>
        {projects.map((p, idx) => (
          <article key={p.name} className="row py-xl">
            <div className="grid12">
              <p className="fig mb-sm md:col-span-1 md:mb-0">
                {String(idx + 1).padStart(2, "0")}
              </p>

              <div className="md:col-span-7">
                <h3 className="text-title text-ink">{p.name}</h3>
                <p className="mt-sm max-w-[65ch] text-ink-2">{p.blurb}</p>
                {p.measured && (
                  <p className="fig mt-md max-w-[70ch] leading-relaxed">
                    {p.measured}
                  </p>
                )}
              </div>

              <div className="mt-md md:col-span-4 md:mt-0">
                <p className="text-sm text-muted">{p.stack.join(" · ")}</p>
                <p className="mt-md flex flex-wrap gap-lg text-sm">
                  {p.demo && (
                    <a
                      className="link"
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live demo
                    </a>
                  )}
                  {p.github && (
                    <a
                      className="link"
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source
                    </a>
                  )}
                </p>
                {p.demo && (
                  <p className="mt-xs text-xs text-muted">
                    First load can take a minute: free-tier cold start.
                  </p>
                )}
              </div>
            </div>

            <details className="mt-lg" open={idx === 0}>
              <summary>
                {idx === 0 ? "How it works" : "Read the detail"}
              </summary>
              <ul className="grid12 m-0 list-none p-0">
                {p.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="md:col-span-10 md:col-start-2 mb-md last:mb-0 max-w-[70ch] text-ink-2"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </details>
          </article>
        ))}
      </div>
    </Section>
  );
}
