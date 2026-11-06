const gaps = {
  s: "pb-[var(--section-gap-s)]",
  m: "pb-[var(--section-gap)]",
  l: "pb-[var(--section-gap-l)]",
} as const;

/**
 * A section owns its background and block padding; the inner .container owns
 * the width (layout.md § 1). The head block is an h2 with at most one line —
 * no eyebrow and no "01" chip above it (gate 54); the hairline carries the seam.
 */
export default function Section({
  id,
  title,
  lead,
  space = "m",
  top = "normal",
  children,
}: {
  id: string;
  title: string;
  lead?: string;
  space?: keyof typeof gaps;
  top?: "tight" | "normal";
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-3xl ${gaps[space]}`}>
      <div className="container">
        <hr className="rule" />
        <div className={`grid12 ${top === "tight" ? "pt-2xl" : "pt-[var(--section-gap-s)]"}`}>
          <div className="md:col-span-7">
            <h2 className="text-section text-ink">{title}</h2>
            {lead && <p className="lead mt-md text-ink-2">{lead}</p>}
          </div>
        </div>
        <div className={top === "tight" ? "mt-xl" : "mt-2xl"}>{children}</div>
      </div>
    </section>
  );
}
