import { experience } from "@/lib/data";
import Section from "./Section";
import Terms from "./Terms";

/**
 * Experience as a Table (layout.md § 5.6): role, company, place and period in
 * aligned columns with the period in tabular numerals. The current role is open
 * by default, so the section shows a case at rest rather than three links.
 */
export default function Experience() {
  return (
    <Section id="experience" space="l" title="Experience">
      <div>
        {experience.map((job, idx) => (
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

            <details className="mt-lg" open={idx === 0}>
              <summary>What I did there</summary>
              <div className="grid12">
                <ul className="m-0 list-none p-0 md:col-span-8">
                  {job.highlights.map((h, i) => (
                    <li key={i} className="mb-md max-w-[70ch] text-ink-2 last:mb-0">
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-md md:col-span-4 md:mt-0">
                  <Terms items={job.stack} />
                </div>
              </div>
            </details>
          </article>
        ))}
      </div>
    </Section>
  );
}
