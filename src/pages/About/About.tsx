// src/pages/About/About.tsx

import "./About.css";
import { useState } from "react";
import MainNavBar from "@/components/NavBar/MainNavBar";
import { MAIN_NAV_ITEMS } from "@/config/navigation";
import GlobalFooter from "@/components/GlobalFooter/GlobalFooter";
import BackToTopButton from "@/components/BackToTopButton/BackToTopButton";
import Logo from "@/components/Logo/Logo";

function About() {
  const [showNavbar] = useState(true);

  return (
    <main className="about-page">
      <Logo />

      <div className={`navbar-wrapper visible`}>
        <MainNavBar items={MAIN_NAV_ITEMS} />
      </div>

      <BackToTopButton isVisible={showNavbar} />

      <section className="about-placeholder">
        <div className="about-placeholder-content">
          <h1>About</h1>
          <p className="about-coming-soon">Coming very soon!</p>
          <p className="about-teaser">
            In the meantime, check out my case studies to see how I approach
            design problems.
          </p>
        </div>
      </section>

      <GlobalFooter />
    </main>
  );
}

export default About;