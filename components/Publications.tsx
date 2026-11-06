import { publications } from "@/lib/data";
import Section from "./Section";

/**
 * Two across (layout.md § 5.3): each entry carries its own title, venue and
 * year, so no cell is an empty frame and neither needs a card around it.
 */
export default function Publications() {
  return (
    <Section id="publications" space="l" title="Research">
      <div className="grid12">
        {publications.map((pub) => (
          <article key={pub.title} className="md:col-span-6">
            <hr className="rule" />
            <div className="pt-lg">
              {pub.award && (
                <p className="mb-sm text-sm text-accent">{pub.award}</p>
              )}
              <h3 className="text-title text-ink">{pub.title}</h3>
              <p className="mt-sm text-ink-2">{pub.venue}</p>
              <p className="fig mt-2xs">
                {pub.publisher} · {pub.year}
              </p>
              <p className="mt-md max-w-[62ch] text-ink-2">{pub.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
