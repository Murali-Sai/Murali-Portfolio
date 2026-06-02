import Reveal from "./Reveal";

export default function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <Reveal>
        <p className="section-kicker">{kicker}</p>
        <h2 className="section-title">{title}</h2>
        <div className="mt-2 h-px w-16 bg-gradient-to-r from-accent to-transparent" />
      </Reveal>
      <div className="mt-6">{children}</div>
    </section>
  );
}
