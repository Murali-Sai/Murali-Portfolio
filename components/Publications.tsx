import { publications } from "@/lib/data";
import Section from "./Section";

/**
 * Two across (layout.md § 5.3). The award is a fact beneath the title, not an
 * announcement above it — an eyebrow is an eyebrow wherever it sits (gate 54).
 */
export default function Publications() {
  return (
    <Section id="publications" space="l" title="Research">
      <div className="grid12">
        {publications.map((pub) => (
          <article key={pub.title} className="md:col-span-6">
            <hr className="rule" />
            <div className="pt-lg">
              <h3 className="text-title text-ink">{pub.title}</h3>
              <p className="mt-sm text-ink-2">{pub.venue}</p>
              <p className="fig mt-2xs">
                {pub.publisher}, {pub.year}
                {pub.award ? `, ${pub.award}` : ""}
              </p>
              <p className="mt-md max-w-[62ch] text-ink-2">{pub.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
