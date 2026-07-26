import "./Section.css"

type SectionProps = {
  innerWidth: React.CSSProperties["width"];
  children: React.ReactNode;
  className: string;
  id: string;
};

function Section({
  innerWidth,
  children,
  className,
  id,
}: SectionProps) {
  return (
    <section
      className={`section ${className ?? ""}`} id={id}
    >
      <section
        className="section-inner"
        style={{ width: innerWidth, maxWidth: innerWidth }}
      >
        {children}
      </section>
    </section>
  );
}

export default Section;