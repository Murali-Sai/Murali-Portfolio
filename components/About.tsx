import { about } from "@/lib/data";
import Section from "./Section";
import Avatar from "./Avatar";

/**
 * Split (layout.md § 5.1): the page's one photograph beside the biography and
 * the education facts, on a 5/7 ratio. This is the only picture on the page —
 * a CV with library photography would be lying about its material.
 */
export default function About() {
  return (
    <Section id="about" space="l" title="About">
      <div className="grid12 items-start">
        <div className="md:col-span-4">
          <Avatar name="Murali Sai" />
          <dl className="mt-xl text-sm">
            {about.education.map((e) => (
              <div key={e.school} className="row py-md">
                <dt className="text-ink">{e.degree}</dt>
                <dd className="m-0 mt-2xs text-ink-2">{e.school}</dd>
                <dd className="fig m-0 mt-2xs">
                  {e.location} · {e.period}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-xl md:col-span-7 md:col-start-6 md:mt-0">
          <p className="max-w-[68ch] text-ink-2">{about.summary}</p>
          <p className="mt-lg max-w-[68ch] text-ink-2">{about.secondary}</p>

          <p className="mt-xl text-sm text-muted">
            Working on: {about.interests.join(" · ")}
          </p>
        </div>
      </div>
    </Section>
  );
}
