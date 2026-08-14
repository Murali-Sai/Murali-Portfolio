import { Github, ExternalLink, Star } from "lucide-react";
import { projects } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <Section id="projects" index={3} kicker="Selected work" title="Projects">
      <div className="grid gap-6">
        {projects.map((p, idx) => (
          <Reveal key={p.name} delay={idx * 60}>
            <article className="card card-hover p-6 md:p-7">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {p.name}
                </h3>
                <div className="flex shrink-0 items-center gap-3">
                  {p.featured && (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-accent">
                      <Star size={13} className="fill-accent" />
                      Featured
                    </span>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub repository"
                      className="text-ink-muted transition-colors hover:text-accent-soft"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-2 text-justify text-sm leading-relaxed text-ink-muted">
                {p.blurb}
              </p>

              <ul className="mt-4 space-y-2">
                {p.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent/70" />
                    <span className="flex-1 text-justify">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="pill">
                    {s}
                  </span>
                ))}
              </div>

              {(p.demo || p.github) && (
                <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                  {p.demo ? (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-none border border-accent/60 bg-transparent px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-accent-soft transition-all hover:bg-accent hover:text-bg"
                    >
                      View Deployed Site <ExternalLink size={13} />
                    </a>
                  ) : (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-none border border-white/15 bg-transparent px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-muted transition-all hover:border-accent hover:text-accent-soft"
                    >
                      <Github size={13} /> Code
                    </a>
                  )}
                  {p.demo && (
                    <span className="text-xs italic text-ink-faint">
                      First load may take up to a minute (free-tier cold start).
                    </span>
                  )}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
