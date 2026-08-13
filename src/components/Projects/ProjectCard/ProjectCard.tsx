import "./ProjectCard.css";
import ViewCaseStudyButton from "./ViewCaseStudyButton/ViewCaseStudyButton";

type MetadataItem = {
  label: string;
  value: string;
};

type ProjectCardProps = {
  title: string;
  tag: string;
  tagColor: string;
  description: React.ReactNode;
  metadata: MetadataItem[];

  backgroundImage: string;
  foregroundImages: string[];

  link: string;

  reverse?: boolean;
  glassTint?: string;
};

export default function ProjectCard({
  title,
  tag,
  tagColor,
  description,
  metadata,
  backgroundImage,
  foregroundImages,
  link,
  reverse = false,
  glassTint,
}: ProjectCardProps) {
  return (
    <article className={`project-card ${reverse ? "reverse" : ""}`}>
      <div
        className={`project-card-text glass glass-tinted ${reverse ? "reverse" : ""}`}
        style={{ "--glass-tint-color": glassTint } as React.CSSProperties}
      >
        <div className="project-card-content">
          <h2 className="project-card-title">{title}</h2>

          <div
            className="project-card-tag-frame"
            style={{ backgroundColor: tagColor }}
          >
            <p className="project-card-tag">{tag}</p>
          </div>

          <p className="project-card-description">{description}</p>

          <div className="project-card-metadata">
            {metadata.map((item) => (
              <div className="project-card-metadata-row" key={item.label}>
                <p className="project-card-metadata-label">{item.label}</p>

                <p className="project-card-metadata-value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <ViewCaseStudyButton link={link} />
      </div>

      <div className="project-card-image">
        <img
          className="project-card-image-background"
          src={backgroundImage}
          alt=""
          aria-hidden="true"
        />

        {foregroundImages.length === 1 ? (
          <div className="project-card-image-content">
            <img
              className="project-card-image-foreground"
              src={foregroundImages[0]}
              alt=""
            />
          </div>
        ) : (
          <div className="project-card-image-content project-card-image-content-theo">
            <div className="project-card-image-column project-card-image-column-top">
              <img
                className="project-card-image-foreground"
                src={foregroundImages[0]}
                alt=""
              />
            </div>

            <div className="project-card-image-column project-card-image-column-bottom">
              <img
                className="project-card-image-foreground"
                src={foregroundImages[1]}
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}