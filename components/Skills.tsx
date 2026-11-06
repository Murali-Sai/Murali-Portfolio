import { skills } from "@/lib/data";
import Section from "./Section";
import Terms from "./Terms";

/**
 * Rows (layout.md § 5.5): the group name on the left columns, its tools as a
 * wrapped set on the right — discrete terms, never a dot-joined run (Floor 10).
 */
export default function Skills() {
  return (
    <Section id="skills" space="l" title="Tools">
      <div>
        {skills.map((group) => (
          <div key={group.group} className="row grid12 py-lg">
            <h3 className="text-base text-ink md:col-span-4">{group.group}</h3>
            <div className="mt-sm md:col-span-8 md:mt-0">
              <Terms items={group.items} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
