import "./About.css";
// import { useEffect, useRef, useState } from "react";

// import BackButton from "@/components/BackButton/BackButton";
import MainNavBar from "@/components/NavBar/MainNavBar";
// import BackToTopButton from "@/components/BackToTopButton/BackToTopButton";
import GlobalFooter from "@/components/GlobalFooter/GlobalFooter";

import AboutHero from "@/components/About/AboutHero/AboutHero";
import Motivation from "@/components/About/Motivation/Motivation";
// import SkillsBento from "@/components/About/SkillsBento/SkillsBento";
import PersonalTouch from "@/components/About/PersonalTouch/PersonalTouch";
import AboutCTA from "@/components/About/AboutCTA/AboutCTA";
import InfiniteCarousel, { type CarouselCard } from "@/components/About/InfiniteCarousel/InfiniteCarousel";
import { MAIN_NAV_ITEMS } from "@/config/navigation";


// Placeholder nav items - adjust as needed
const aboutNavItems = [
  { label: "About", href: "about" },
  { label: "Resume", href: "#resume" },
];

function About() {

  return (
    <main className="about-page">
      {/* <BackButton to="/" /> */}

      <div className="navbar-wrapper visible">
        <MainNavBar items={MAIN_NAV_ITEMS} />
      </div>

      {/* <BackToTopButton /> */}

      <div>
        <AboutHero />
      </div>

      <InfiniteCarousel cards={skillCards}/>
      <Motivation />
      {/* <SkillsBento /> */}
      <PersonalTouch />
      <AboutCTA />

      <GlobalFooter />
    </main>
  );
}

export default About;

const skillCards: CarouselCard[] = [
  {
    title: "UX Design & Research",
    skills: [
      "User Research",
      "Prototyping",
      "Accessibility Design",
      "Journey Mapping",
      "Wireframing",
      "Visual Design",
      "Design Systems",
      "Persona Development",
      "IX Design",
      "Information Architecture",
      "Heuristic Evaluation",
      "Figma",
      "Miro",
      "Excalidraw",
      "Adobe Suite",
    ],
  },
  {
    title: "UI Development",
    skills: [
      "React/React Native",
      "TypeScript / JavaScript",
      "HTML5",
      "CSS3",
      "React Router / Expo Router",
      "Git/GitHub",
      "VSCode",
      "Expo",
      "CSS Animations",
    ],
  },
  {
    title: "Software Engineering",
    skills: [
      "Python",
      "C++ / C",
      "SQL",
      "Supabase",
      "Replit",
      "RESTful APIs",
      "LaTeX",
      "AI APIs (Gemini, Whisper)",
      "Command Line",
    ],
  },
  {
    title: "Process & Collaboration",
    skills: [
      "Usability Testing",
      "Diary Studies",
      "Cross-Functional Teams",
      "User Surveys",
      "Iterative Problem Solving",
      "Presentations",
      "Stakeholder Communication",
    ],
  },
];
