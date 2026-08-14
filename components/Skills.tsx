import { skills } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <Section id="skills" index={2} kicker="Toolbox" title="Skills">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group, idx) => (
          <Reveal key={group.group} delay={idx * 70}>
            <div className="card card-hover h-full p-6">
              <h3 className="mb-4 font-display text-base font-semibold text-accent-soft">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
