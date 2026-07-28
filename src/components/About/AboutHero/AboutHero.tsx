import "./AboutHero.css";

import headshot from "@/assets/images/headshot.jpg";

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-content">
        <div className="about-hero-text">
          <h4 className="about-hero-opening">
            Programmer by trade. <br /> Musician & photographer by hobby. <br />{" "}
            Storyteller at heart.
          </h4>
          {/* <p className="about-hero-title">UX Designer & HCI Undergrad</p> */}
          <p className="about-hero-bio">
            Hi, I’m Ananya, an undergrad at Stanford pursuing my Bachelor’s in
            Computer Science with experience in Human-Computer Interaction and
            Operating Systems. There’s always more to a product than meets the
            eye. Decisions and magic happen behind the scenes of a product, and
            I’m there to be the mastermind, cleverly constructing the messages
            that interfaces and tools send their users.
          </p>
          <p className="about-hero-bio emphasized">
            There’s always more to a product than meets the
            eye.
          </p>
          <p className="about-hero-bio">
            Decisions and magic happen behind the scenes of a product, and
            I’m there to be the mastermind, cleverly constructing the messages
            that interfaces and tools send their users.
          </p>
        </div>

        <div className="about-hero-photo glass">
          <img src={headshot} />
          {/* <div className="about-hero-photo-placeholder">Your Photo Here</div> */}
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
