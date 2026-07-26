import "./Hero.css";
import type { IconType } from "react-icons";

type MetadataItem = {
  label: string;
  value: string;
};

type LinkItem = {
  icon: IconType;
  label: string;
  href: string;
}

type HeroProps = {
  title: string;
  valueProp: string;
  headline: React.ReactNode;

  backgroundImage: string;
  foregroundImages: string[];

  metadata: MetadataItem[];
  links?: LinkItem[];
};

function Hero({
  title, 
  valueProp, 
  headline, 
  backgroundImage, 
  foregroundImages,
  metadata,
  links,
}: HeroProps) {
  
  return (
    <section className="case-study-hero">
      <section className="case-study-hero-above-fold">
        <div className="case-study-header">
          <div className="case-study-title-container">
            <h1 className="case-study-title">{title}</h1>
            <p className="case-study-value-prop">{valueProp}</p>
          </div>
          <div className="case-study-headline">
            {headline}
          </div>
        </div>
        <div className="case-study-hero-image">
          <img
            className="case-study-hero-background"
            src={backgroundImage}
            alt=""
            aria-hidden="true"
          />

          {foregroundImages.length === 1 ? (
            <div className="case-study-hero-image-content">
              <img
                className="case-study-hero-image-foreground"
                src={foregroundImages[0]}
                alt=""
              />
            </div>
          ) : (
            <div className="case-study-hero-image-content case-study-hero-image-content-theo">
              <div className="case-study-hero-image-column case-study-hero-image-column-left">
                <img
                  className="case-study-hero-image-foreground"
                  src={foregroundImages[0]}
                  alt=""
                />
              </div>

              <div className="case-study-hero-image-column case-study-hero-image-column-right">
                <div className="case-study-hero-award">
                  <h4 className="case-study-hero-award-text-first-line">
                    Award: Best Visual Design
                  </h4>
                  <h4 className="case-study-hero-award-text-second-line">
                    Stanford CS 147
                  </h4>
                </div>
                <img
                  className="case-study-hero-image-foreground"
                  src={foregroundImages[1]}
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="case-study-hero-below-fold">
        <div className="case-study-metadata-row">
          {metadata.map((item) => (
            <div className="case-study-metadata-card" key={item.label}>
              <p className="case-study-metadata-label">{item.label}</p>
              <p className="case-study-metadata-value">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="case-study-hero-links-card">
          {links?.map((link) => {
            const Icon = link.icon;

            return (
              <div className="case-study-hero-link" key={link.label}>
                <a
                  className="case-study-hero-link-icon-button"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="case-study-hero-link-icon" />
                </a>
                <p className="case-study-hero-link-label">{link.label}</p>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}

export default Hero;
