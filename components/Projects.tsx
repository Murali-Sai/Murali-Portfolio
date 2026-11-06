import { projects } from "@/lib/data";
import Section from "./Section";
import Terms from "./Terms";

/**
 * The signature: the work as an Index (layout.md § 5.15) — five hairline rows
 * a reader can scan in one pass, each opening in place into the full case.
 * The lead row is open by default, set in two columns so the opened case reads
 * as a composition rather than a slab of prose (layout.md § 8).
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
                  <div className="mt-md">
                    <Terms items={p.measured} tone="figure" />
                  </div>
                )}
              </div>

              <div className="mt-md md:col-span-4 md:mt-0">
                <Terms items={p.stack} />
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
              <ul className="m-0 columns-1 list-none gap-[var(--gap-columns)] p-0 lg:columns-2">
                {p.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="mb-lg break-inside-avoid text-ink-2 last:mb-0"
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
