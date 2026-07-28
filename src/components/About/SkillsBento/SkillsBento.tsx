// src/pages/About/SkillsBento/SkillsBento.tsx

import "./SkillsBento.css";

export default function SkillsBento() {
  return (
    <section className="skills-bento" id="skills">
      <h2 className="skills-bento-title">Skills & Tools</h2>

      <div className="skills-bento-grid">
        <div className="skills-card glass skills-card-large">
          <h3 className="skills-card-title">Design Tools</h3>
          <ul className="skills-list">
            <li>Figma</li>
            <li>Adobe Creative Suite</li>
            <li>Prototyping & Wireframing</li>
            <li>Design Systems</li>
          </ul>
        </div>

        <div className="skills-card glass">
          <h3 className="skills-card-title">UX Skills</h3>
          <ul className="skills-list">
            <li>User Research</li>
            <li>Usability Testing</li>
            <li>Interaction Design</li>
            <li>Accessibility</li>
          </ul>
        </div>

        <div className="skills-card glass">
          <h3 className="skills-card-title">Development</h3>
          <ul className="skills-list">
            <li>React & TypeScript</li>
            <li>HTML & CSS</li>
            <li>Responsive Design</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        <div className="skills-card glass skills-card-large">
          <h3 className="skills-card-title">Soft Skills</h3>
          <ul className="skills-list">
            <li>Cross-functional Collaboration</li>
            <li>Storytelling & Presentation</li>
            <li>Design Thinking</li>
            <li>Iterative Problem Solving</li>
          </ul>
        </div>
      </div>
    </section>
  );
}