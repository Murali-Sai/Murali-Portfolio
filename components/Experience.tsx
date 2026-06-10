import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <Section id="experience" kicker="Where I've worked" title="Experience">
      <div className="relative space-y-6 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-accent/40 before:via-accent/15 before:to-transparent">
        {experience.map((job, idx) => (
          <Reveal key={`${job.company}-${job.period}`} delay={idx * 70}>
            <div className="relative pl-12">
              <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-none border border-accent/40 bg-bg text-accent">
                <Briefcase size={16} />
              </span>
              <div className="card card-hover p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {job.role}
                    <span className="text-accent"> · </span>
                    <span className="text-accent-soft">{job.company}</span>
                  </h3>
                  <span className="shrink-0 font-mono text-[11px] text-ink-faint">
                    {job.period}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-ink-faint">{job.location}</p>

                <ul className="mt-4 space-y-2.5">
                  {job.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent/70" />
                      <span className="flex-1 text-justify">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span key={s} className="pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
