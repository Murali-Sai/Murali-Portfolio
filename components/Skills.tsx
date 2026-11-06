import { skills } from "@/lib/data";
import Section from "./Section";

/**
 * Rows (layout.md § 5.5): the group name on the left columns, its tools as one
 * set line on the right. Tags are the body face, sentence case, untracked (67).
 */
export default function Skills() {
  return (
    <Section id="skills" space="l" title="Tools">
      <div>
        {skills.map((group) => (
          <div key={group.group} className="row grid12 py-lg">
            <h3 className="text-base text-ink md:col-span-4">{group.group}</h3>
            <p className="mt-2xs text-ink-2 md:col-span-8 md:mt-0">
              {group.items.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
