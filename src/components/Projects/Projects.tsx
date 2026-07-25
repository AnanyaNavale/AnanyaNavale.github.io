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
        description="Reframing late-night eating as a systems problem by using behavioral research to help students make healthier food choices before hunger set in."
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
      />
      <ProjectCard
        title="Boogie"
        tag="Inclusive Design"
        tagColor="var(--color-boogie-labels)"
        description="Redesigning accessible campus transportation for blind and low-vision riders around the way people naturally navigate, rather than the way maps are organized."
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
      />
      <ProjectCard
        title="Theo"
        tag="Emotional Design"
        tagColor="var(--color-theo-labels)"
        description="Exploring how AI can support attention regulation for learners with ADHD through structure, accountability, and encouragement."
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
      />
    </section>
  );
}
