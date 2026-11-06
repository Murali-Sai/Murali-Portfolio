/**
 * A wrapped set of discrete terms — a stack, a toolset, a list of figures.
 * No middle-dot joins (Floor 10), and the body face at a step down in sentence
 * case rather than a tracked-capital chip (67).
 */
export default function Terms({
  items,
  tone = "muted",
}: {
  items: string[];
  tone?: "muted" | "figure";
}) {
  return (
    <ul className="m-0 flex list-none flex-wrap gap-x-lg gap-y-2xs p-0">
      {items.map((item) => (
        <li
          key={item}
          className={tone === "figure" ? "fig" : "text-sm text-muted"}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
