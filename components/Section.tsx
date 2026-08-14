import Reveal from "./Reveal";

export default function Section({
  id,
  index,
  kicker,
  title,
  children,
}: {
  id: string;
  index?: number;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <Reveal>
        <div className="mb-3 flex items-center gap-3">
          {index !== undefined && (
            <span className="section-index">{String(index).padStart(2, "0")}</span>
          )}
          <p className="section-kicker">{kicker}</p>
        </div>
        <h2 className="section-title">{title}</h2>
        <div className="mt-3 h-1 w-14 bg-accent" />
      </Reveal>
      <div className="mt-6">{children}</div>
    </section>
  );
}
