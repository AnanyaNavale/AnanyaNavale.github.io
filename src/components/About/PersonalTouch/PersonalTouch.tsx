// src/pages/About/PersonalTouch/PersonalTouch.tsx

import "./PersonalTouch.css";

const funFacts = [
  "☕ Coffee enthusiast (iced, always)",
  "📚 Currently reading about behavioral design",
  "🎮 Unwind with cozy games",
  "✈️ Love exploring new cities for design inspiration",
];

export default function PersonalTouch() {
  return (
    <section className="personal-touch">
      <h2 className="personal-touch-title">When I'm Not Designing</h2>

      <div className="personal-touch-content glass">
        <ul className="personal-touch-list">
          {funFacts.map((fact, index) => (
            <li key={index} className="personal-touch-item">
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
