import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import lunacartBackground from "../../assets/images/lunacart/hero-background.jpg";
import lunacartForeground from "../../assets/images/lunacart/hero-screen.png";

import boogieBackground from "../../assets/images/boogie/hero-background.jpg";
import boogieForeground from "../../assets/images/boogie/hero-screen.png";

import theoBackground from "../../assets/images/theo/hero-background.jpg";
import theoForeground1 from "../../assets/images/theo/hero-screen-1.png";
import theoForeground2 from "../../assets/images/theo/hero-screen-2.png";


export default function Projects() {
  return (
    <section className="projects">
      <ProjectCard
        title="LunaCart"
        tag="Behavioral Design"
        tagColor="var(--color-lunacart-labels)"
        description="Helping students turn the tables on late-night junk food through daytime meal-planning."
        metadata={[
          {
            label: "Role",
            value: "Lead UX researcher & designer",
          },
          {
            label: "Tools",
            value: "Figma, Miro, Replit",
          },
          {
            label: "Methods",
            value: "Diary Studies\nThematic Analysis\nStory Mapping",
          },
        ]}
        backgroundImage={lunacartBackground}
        foregroundImages={[lunacartForeground]}
        link="/lunacart"
        glassTint="rgb(219, 214, 234)"
      />
      <ProjectCard
        title="Boogie"
        tag="Inclusive Design"
        tagColor="var(--color-boogie-labels)"
        description="Reshaping campus navigation for blind and low-vision riders through a system that understands places like a human."
        metadata={[
          {
            label: "Role",
            value: "UI/UX Researcher\nLead Designer & developer",
          },
          {
            label: "Tools",
            value: "Figma, Expo, React Native, Github",
          },
          {
            label: "Methods",
            value:
              "Accessibility Interviews\nUsability Testing\nIterative Design",
          },
        ]}
        backgroundImage={boogieBackground}
        foregroundImages={[boogieForeground]}
        reverse
        link="/boogie"
        glassTint="rgb(197, 228, 235)"
      />
      <ProjectCard
        title="Theo"
        tag="Emotional Design"
        tagColor="var(--color-theo-labels)"
        description="Breaking down focus barriers for ADHD learners through structured study sessions and an animated companion."
        metadata={[
          {
            label: "Role",
            value: "Lead UI/UX designer & developer",
          },
          {
            label: "Tools",
            value: "Figma, Expo, React Native, Supabase, Github",
          },
          {
            label: "Methods",
            value:
              "User Interviews\nExperience Prototyping\nUsability Testing\nFull Stack Development",
          },
        ]}
        backgroundImage={theoBackground}
        foregroundImages={[theoForeground1, theoForeground2]}
        link="/theo"
        glassTint="rgb(223, 208, 208)"
      />
    </section>
  );
}
