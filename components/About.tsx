import { about } from "@/lib/data";
import Section from "./Section";
import Avatar from "./Avatar";
import Terms from "./Terms";

/**
 * Split (layout.md § 5.1): the page's one photograph beside the biography, on a
 * 4/7 ratio. Education runs as full-width rows beneath, so neither column of
 * the split is left with an empty half (§ 5.4). This is the only picture on the
 * page — a CV with library photography would be lying about its material.
 */
export default function About() {
  return (
    <Section id="about" space="l" title="About">
      <div className="grid12 items-start">
        <div className="md:col-span-4">
          <Avatar name="Murali Sai" />
        </div>

        <div className="mt-xl md:col-span-7 md:col-start-6 md:mt-0">
          <p className="max-w-[68ch] text-ink-2">{about.summary}</p>
          <p className="mt-lg max-w-[68ch] text-ink-2">{about.secondary}</p>
          <div className="mt-xl">
            <Terms items={about.interests} />
          </div>
        </div>
      </div>

      <dl className="mt-2xl">
        {about.education.map((e) => (
          <div key={e.school} className="row grid12 py-lg">
            <dt className="text-ink md:col-span-5">{e.degree}</dt>
            <dd className="m-0 mt-2xs text-ink-2 md:col-span-4 md:mt-0">
              {e.school}
            </dd>
            <dd className="fig m-0 mt-2xs md:col-span-3 md:mt-0 md:text-right">
              {e.period}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
