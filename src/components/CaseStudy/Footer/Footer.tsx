// src/components/CaseStudy/CaseStudyFooter/CaseStudyFooter.tsx

import "./Footer.css";
import { Link } from "react-router-dom";
import { PROJECTS } from "@/config/projects";

type CaseStudyFooterProps = {
  currentProjectId: string;
};

export default function Footer({
  currentProjectId,
}: CaseStudyFooterProps) {
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
              className="case-study-footer-card-simple glass"
            >
              <h3 className="case-study-footer-card-name">{project.name}</h3>
              <p className="case-study-footer-card-headline">
                {project.headline}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="case-study-footer-cta">
        <p className="case-study-footer-cta-text">
          Want to chat about this project?
        </p>
        <a
          href="mailto:your.email@example.com"
          className="case-study-footer-cta-button glass"
        >
          Get in Touch
        </a>
      </div>
    </footer>
  );
}