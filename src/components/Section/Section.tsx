import "./Section.css"

type SectionProps = {
  innerWidth: React.CSSProperties["width"];
  children: React.ReactNode;
  className?: string;
};

function Section({
  innerWidth,
  children,
  className,
}: SectionProps) {
  return (
    <section
      className={`section ${className ?? ""}`}
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