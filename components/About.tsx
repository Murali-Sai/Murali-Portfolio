import { GraduationCap, Sparkles } from "lucide-react";
import { about } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Section id="about" kicker="Introduction" title="About Me">
      <Reveal>
        <div className="card p-6 md:p-7">
          <p className="text-[15px] leading-relaxed text-ink-muted">
            {about.summary}
          </p>
          <p className="mt-4 text-justify text-[15px] leading-relaxed text-ink-muted">
            {about.secondary}
          </p>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Reveal delay={80}>
          <div className="card card-hover h-full p-6">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles size={18} className="text-accent" />
              <h3 className="font-display text-lg font-semibold text-ink">
                Interests
              </h3>
            </div>
            <ul className="space-y-2.5">
              {about.interests.map((i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-ink-muted">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="card card-hover h-full p-6">
            <div className="mb-4 flex items-center gap-2">
              <GraduationCap size={18} className="text-accent" />
              <h3 className="font-display text-lg font-semibold text-ink">
                Education
              </h3>
            </div>
            <ul className="space-y-4">
              {about.education.map((e) => (
                <li key={e.school}>
                  <p className="text-sm font-semibold text-ink">{e.degree}</p>
                  <p className="text-sm text-accent-soft">{e.school}</p>
                  <p className="mt-0.5 text-xs text-ink-faint">
                    {e.location} · {e.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
