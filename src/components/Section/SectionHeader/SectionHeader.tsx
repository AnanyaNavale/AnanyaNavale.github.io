import "./SectionHeader.css"

type HeaderProps = {
  title?: string;
  tagline: string;
  subSectionTagline?: string;
};

function SectionHeader({
  title,
  tagline,
  subSectionTagline,
}: HeaderProps) {
  return (
    <section className="section-header">
      {title && <h2 className="section-heading">{title}</h2>}
      {subSectionTagline ? (
        <div className="subsection-tagline">
          <h3 className="subsection-tagline-regular">{subSectionTagline}</h3>
          <h3 className="subsection-tagline-emphasized">{tagline}</h3>
        </div>
      ) : (
        <h3 className="section-tagline">{tagline}</h3>
      )}
    </section>
  );
}

export default SectionHeader;