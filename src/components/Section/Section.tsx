import "./Section.css"

type SectionProps = {
  innerWidth: React.CSSProperties["width"];
  children: React.ReactNode;
  className: string;
  id: string;
  dataTheme?: "dark" | "light";
};

function Section({
  innerWidth,
  children,
  className,
  id,
  dataTheme,
}: SectionProps) {
  return (
    <section
      className={`section ${className ?? ""}`} id={id} data-theme={dataTheme}
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