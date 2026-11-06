/**
 * Statement (layout.md § 5.9), once a page: the one sentence the whole site is
 * an argument for, taken verbatim from the biography it already carried.
 */
export default function Statement() {
  return (
    <section className="pb-[var(--section-gap-l)]">
      <div className="container">
        <hr className="rule" />
        <blockquote className="m-0 pt-[var(--section-gap-s)]">
          <p className="max-w-[20ch] font-display text-display-s leading-[1.1] text-accent sm:max-w-[26ch]">
            I focus on work that ships and work that is measured rather than
            assumed to work.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
