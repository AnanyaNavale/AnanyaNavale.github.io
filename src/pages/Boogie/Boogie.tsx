import "./Boogie.css";

import Navbar from "../../components/CaseStudy/NavBar";
import Hero from "../../components/CaseStudy/Hero/Hero";
import Overview from "../../components/CaseStudy/Overview/Overview";
import KeyInsight from "@/components/CaseStudy/Boogie/KeyInsight/KeyInsight";
import Opportunity from "@/components/CaseStudy/Boogie/Opportunity/Opportunity";
import Approach from "@/components/CaseStudy/Boogie/Approach/Approach";
import Handoff from "@/components/CaseStudy/Boogie/Handoff/Handoff";
import Reflections, {
  type ReflectionsContent,
} from "../../components/CaseStudy/Reflections/Reflections";
import Footer from "../../components/CaseStudy/Footer";

import heroBackground from "../../assets/images/boogie/hero-background.jpg";
import heroScreen from "../../assets/images/boogie/hero-screen.png";

import { BsGithub } from "react-icons/bs";


function Boogie() {
  return (
    <main className="boogie-case-study">
      <Navbar />

      <Hero
        title="Boogie"
        valueProp="Places, Not Pins"
        headline={
          <>
            <span>An accessible ride service that left people behind.</span>
            <span>A redesign that met them where they were.</span>
          </>
        }
        backgroundImage={heroBackground}
        foregroundImages={[heroScreen]}
        metadata={[
          {
            label: "Role",
            value: "UI/UX Researcher\nLead Designer & Developer",
          },
          {
            label: "Team",
            value: "Stanford CS 377Q\nTeam of 5",
          },
          {
            label: "Tools",
            value: "Figma · Expo · React Native\nGithub",
          },
          {
            label: "Timeline",
            value: "Jan–Mar 2026\n10 weeks",
          },
        ]}
        links={[
          {
            icon: BsGithub,
            label: "GitHub Codebase",
            href: "https://github.com/AnanyaNavale/CS377Q-Boogie",
          },
        ]}
      />

      <Overview
        firstParagraph={
          <>
            Stanford offers an on-demand <u>dis</u>ability <u>go</u>lf (DisGo)
            cart service for students, but its ride-booking experience leaves
            blind and low-vision (BLV) riders relying on an interface that
            wasn't designed with them in mind.
          </>
        }
        secondParagraph={
          <>
            Working with a multidisciplinary team, I redesigned this booking
            experience in <strong>Boogie</strong>, a system based on how BLV
            riders actually describe and search for locations—replacing
            inaccessible location selection with a more intuitive, screen
            reader-friendly workflow.
          </>
        }
        thirdParagraph={
          <>
            Completed in collaboration with Stanford's DisGo Task Force as part
            of
            <br />
            CS 377Q: Designing for Accessibility.
          </>
        }
      />

      {/* Key Insight */}
      <KeyInsight />

      {/* Opportunity */}
      <Opportunity />

      {/* Approach, Challenge, Product Thinking */}
      <Approach />

      {/* Handoff */}
      <Handoff />

      <Reflections
        tagline={"Accessibility isn't an add-on.\nIt reshapes the system."}
        content={reflectionsContent}
        questions={reflectionQuestions}
      />

      <Footer />
    </main>
  );
}

export default Boogie;

const reflectionsContent: ReflectionsContent = {
  intro: [
    {
      size: "body",
      content: (
        <>
          The next iteration of{" "}
          <strong className="case-study-reflections-highlight">Boogie</strong>{" "}
          would focus on validating the redesigned rider experience through
          usability testing with a broader range of blind and low-vision
          students. Beyond that, I'd expand the project to{" "}
          <strong className="case-study-reflections-highlight">
            examine the driver's side of the interaction.
          </strong>{" "}
          Features like landmark-based pickup locations or designated meeting
          points would likely require complementary changes to the driver's
          interface to ensure both riders and drivers are working from the same
          mental model of the journey.
        </>
      ),
    },
    {
      size: "body",
      content: (
        <>
          Further development would require answering several important design
          questions:
        </>
      ),
    },
  ],

  conclusion: [
    {
      size: "body",
      content: (
        <>
          Before{" "}
          <strong className="case-study-reflections-highlight">Boogie</strong>,
          I often thought of accessibility as improving an existing experience
          through better interfaces and assistive features. This project
          challenged that perspective. Working with blind and low-vision users
          showed me that accessibility often begins by questioning the
          assumptions a system makes about how people perceive, navigate, and
          communicate with the world.
        </>
      ),
    },
    {
      size: "large",
      content: (
        <>
          It's a reminder that the best user-focused design decisions are
          sometimes made long before the first screen is created.
        </>
      ),
    },
  ],
};

const reflectionQuestions = [
  {
    theme: "Free Will",
    content: (
      <>
        If access wasn’t a problem, would students voluntarily choose healthy—or
        at least healthier—options?
      </>
    ),
  },
  {
    theme: "Novelty",
    content: (
      <>
        Will this be something that students will only try once or is it
        sustainable? Will the reward system be enough to keep them engaged?
      </>
    ),
  },
  {
    theme: "Quality",
    content: (
      <>
        Which is more important: freshness of food or nutritional value? Do
        students prefer hot + unhealthy food or packaged + healthy food?
      </>
    ),
  },
  {
    theme: "Business Model",
    content: (
      <>
        What sort of operational system would be most profitable for both the
        university and the student community?
      </>
    ),
  },
];
