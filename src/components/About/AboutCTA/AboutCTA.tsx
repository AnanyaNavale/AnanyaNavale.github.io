// src/pages/About/AboutCTA/AboutCTA.tsx

import "./AboutCTA.css";
import {
  BsLinkedin,
  BsGithub,
  BsEnvelope,
  BsFileEarmarkText,
} from "react-icons/bs";

export default function AboutCTA() {
  return (
    <section className="about-cta" id="connect">
      <h2 className="about-cta-title">Let's Create Something Together</h2>
      <p className="about-cta-text">
        I'm currently seeking UX design internships and collaboration
        opportunities. Let's chat!
      </p>

      <div className="about-cta-buttons">
        <a
          href="mailto:your.email@example.com"
          className="about-cta-button glass"
        >
          <BsEnvelope size={20} />
          Get in Touch
        </a>
      </div>

      <div className="about-cta-links">
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="about-cta-link"
          aria-label="LinkedIn"
        >
          <BsLinkedin size={24} />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="about-cta-link"
          aria-label="GitHub"
        >
          <BsGithub size={24} />
        </a>
        <a
          href="/path-to-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="about-cta-link"
          aria-label="Resume"
        >
          <BsFileEarmarkText size={24} />
        </a>
      </div>
    </section>
  );
}
