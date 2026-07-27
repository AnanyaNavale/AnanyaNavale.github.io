// src/components/GlobalFooter/GlobalFooter.tsx

import "./GlobalFooter.css";
import { BsLinkedin, BsGithub, BsEnvelope } from "react-icons/bs";

function GlobalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="global-footer">
      <div className="global-footer-content">
        <div className="global-footer-links">
          <a
            href="mailto:ananya.navale@gmail.com"
            className="global-footer-link"
            aria-label="Email"
          >
            <BsEnvelope size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ananyanavale/"
            target="_blank"
            rel="noopener noreferrer"
            className="global-footer-link"
            aria-label="LinkedIn"
          >
            <BsLinkedin size={20} />
          </a>
          <a
            href="https://github.com/AnanyaNavale"
            target="_blank"
            rel="noopener noreferrer"
            className="global-footer-link"
            aria-label="GitHub"
          >
            <BsGithub size={20} />
          </a>
        </div>

        <p className="global-footer-text">
          Designed & built with care by Ananya Navale · {currentYear}
        </p>
      </div>
    </footer>
  );
}

export default GlobalFooter;
