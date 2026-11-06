import { experience } from "@/lib/data";
import Section from "./Section";

/**
 * Experience as a Table (layout.md § 5.6): role, company, place and period in
 * aligned columns with the period in tabular numerals, the bullets folded into
 * a disclosure so the section can be scanned before it is read.
 */
export default function Experience() {
  return (
    <Section id="experience" space="l" title="Experience">
      <div>
        {experience.map((job) => (
          <article key={`${job.company}-${job.period}`} className="row py-xl">
            <div className="grid12 items-baseline">
              <div className="md:col-span-7">
                <h3 className="text-title text-ink">{job.role}</h3>
                <p className="mt-2xs text-ink-2">{job.company}</p>
              </div>
              <div className="mt-sm md:col-span-5 md:mt-0 md:text-right">
                <p className="fig">{job.period}</p>
                <p className="mt-2xs text-sm text-muted">{job.location}</p>
              </div>
            </div>

            <details className="mt-lg">
              <summary>What I did there</summary>
              <div className="grid12">
                <ul className="m-0 list-none p-0 md:col-span-8">
                  {job.highlights.map((h, i) => (
                    <li key={i} className="mb-md last:mb-0 max-w-[70ch] text-ink-2">
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-md text-sm text-muted md:col-span-4 md:mt-0">
                  {job.stack.join(" · ")}
                </p>
              </div>
            </details>
          </article>
        ))}
      </div>
    </Section>
  );
}
