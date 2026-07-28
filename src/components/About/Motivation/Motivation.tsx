import "./Motivation.css";

type MotivationCard = {
  icon: string;
  title: string;
  description: string;
};

const motivations: MotivationCard[] = [
  {
    icon: "🎯",
    title: "Design Philosophy",
    description:
      "I believe great design isn't about aesthetics alone—it's about solving real problems for real people.",
  },
  {
    icon: "🧩",
    title: "Research Approach",
    description:
      "Every project starts with listening. I dig deep into user needs before sketching a single wireframe.",
  },
  {
    icon: "✨",
    title: "Impact Mindset",
    description:
      "Design should make a difference. I'm drawn to projects that improve accessibility and equity.",
  },
];

function Motivation() {
  return (
    <section className="motivation">
      <h2 className="motivation-title">What motivations Me</h2>

      <div className="motivation-grid">
        {motivations.map((motivation) => (
          <div key={motivation.title} className="motivation-card glass">
            <div className="motivation-card-icon">{motivation.icon}</div>
            <h3 className="motivation-card-title">{motivation.title}</h3>
            <p className="motivation-card-description">{motivation.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Motivation;