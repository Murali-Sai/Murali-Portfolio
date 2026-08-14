import { Award, BookOpen } from "lucide-react";
import { publications } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Publications() {
  return (
    <Section id="publications" index={5} kicker="Research" title="Publications">
      <div className="space-y-5">
        {publications.map((pub, idx) => (
          <Reveal key={pub.title} delay={idx * 70}>
            <article className="card card-hover p-6 md:p-7">
              <div className="flex items-start gap-4">
                <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-none border border-accent/40 bg-transparent text-accent sm:flex">
                  <BookOpen size={18} />
                </span>
                <div>
                  {pub.award && (
                    <span className="mb-2 inline-flex items-center gap-1.5 rounded-none border border-accent/50 bg-accent/[0.08] px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-accent-soft">
                      <Award size={13} />
                      {pub.award}
                    </span>
                  )}
                  <h3 className="font-display text-base font-semibold leading-snug text-ink">
                    {pub.title}
                  </h3>
                  <p className="mt-2 text-sm text-accent-soft">{pub.venue}</p>
                  <p className="text-xs text-ink-faint">
                    {pub.publisher} · {pub.year}
                  </p>
                  <p className="mt-3 text-justify text-sm leading-relaxed text-ink-muted">
                    {pub.description}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
