import "./Footer.css";
import { Link } from "react-router-dom";
import { PROJECTS } from "@/config/projects";

type FooterProps = {
  currentProjectId: string;
};

function Footer({
  currentProjectId,
}: FooterProps) {
  const otherProjects = PROJECTS.filter(
    (project) => project.id !== currentProjectId,
  );

  return (
    <footer className="case-study-footer">
      <div className="case-study-footer-content">
        <h2 className="case-study-footer-title">Explore More Case Studies</h2>

        <div className="case-study-footer-grid">
          {otherProjects.map((project) => (
            <Link
              key={project.id}
              to={project.path}
              className="case-study-footer-card glass"
            >
              <div className="case-study-footer-card-image">
                <img src={project.thumbnail} alt="" />
              </div>

              <div className="case-study-footer-card-content">
                <h3 className="case-study-footer-card-name">{project.name}</h3>
                <p className="case-study-footer-card-headline">
                  {project.headline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="case-study-footer-cta">
        <p className="case-study-footer-cta-text">
          Want to chat about this project?
        </p>
        <a
          href="mailto:ananya.navale@gmail.com"
          className="case-study-footer-cta-button glass"
        >
          Drop me a line
        </a>
      </div>
    </footer>
  );
}

export default Footer;