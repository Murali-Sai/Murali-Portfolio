import { profile } from "@/lib/data";

/**
 * The close is the job (layout.md § 7, anatomy.md § hire): plain contact
 * details, no form. A Band in the brand's field colour, edge to edge.
 */
export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-3xl bg-field py-3xl">
      <div className="container">
        <div className="grid12 items-start">
          <div className="md:col-span-6">
            <h2 className="text-section text-ink">Get in touch</h2>
            <p className="lead mt-md text-ink-2">
              Open to AI and machine learning engineering roles, and happy to
              talk through any of the work above.
            </p>
            <p className="mt-xl">
              <a
                className="btn"
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </p>
          </div>

          <dl className="mt-xl text-base md:col-span-5 md:col-start-8 md:mt-0">
            <div className="flex items-baseline justify-between gap-md border-t border-rule-strong py-md">
              <dt className="text-sm text-muted">Email</dt>
              <dd className="m-0 text-right">
                <a className="link" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-md border-t border-rule-strong py-md">
              <dt className="text-sm text-muted">Phone</dt>
              <dd className="m-0 text-right">
                <a className="link" href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>
                  {profile.phone}
                </a>
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-md border-t border-rule-strong py-md">
              <dt className="text-sm text-muted">LinkedIn</dt>
              <dd className="m-0 text-right">
                <a
                  className="link"
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  in/muralisaibk
                </a>
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-md border-y border-rule-strong py-md">
              <dt className="text-sm text-muted">GitHub</dt>
              <dd className="m-0 text-right">
                <a
                  className="link"
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Murali-Sai
                </a>
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-md py-md">
              <dt className="text-sm text-muted">Based</dt>
              <dd className="m-0 text-right text-ink-2">{profile.location}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
