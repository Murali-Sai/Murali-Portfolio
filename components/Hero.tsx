import { profile, about } from "@/lib/data";

/**
 * Index hero (layout.md § 6): the head, one line, the contact action, and the
 * work index starting on the same screen. No hero image — Index-First has none,
 * and the only photograph the page owns belongs beside the biography.
 */
export default function Hero() {
  return (
    <section className="pb-2xl pt-[calc(64px+var(--space-2xl))]">
      <div className="container">
        <div className="grid12 items-end">
          <div className="md:col-span-8">
            <h1 className="text-display text-ink">
              I build agent and retrieval systems.
            </h1>
            <p className="lead mt-lg text-ink-2">
              Multi-agent orchestration, RAG pipelines, and the evaluation
              harnesses that prove they work.
            </p>
            <div className="mt-xl flex flex-wrap items-center gap-md">
              <a className="btn" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a
                className="btn btn-quiet"
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>

          <dl className="mt-2xl text-sm md:col-span-4 md:mt-0">
            <div className="row flex justify-between gap-md py-sm">
              <dt className="text-muted">Now</dt>
              <dd className="m-0 text-right text-ink-2">
                {profile.title}, Dreamline AI
              </dd>
            </div>
            <div className="row flex justify-between gap-md py-sm">
              <dt className="text-muted">Study</dt>
              <dd className="m-0 text-right text-ink-2">
                {about.education[0].degree}, Stevens
              </dd>
            </div>
            <div className="row flex justify-between gap-md py-sm">
              <dt className="text-muted">Based</dt>
              <dd className="m-0 text-right text-ink-2">{profile.location}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
