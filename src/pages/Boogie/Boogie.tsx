import "./Boogie.css";
import { useEffect, useRef, useState } from "react";

import BackButton from "@/components/BackButton/BackButton";
import NavBar from "@/components/NavBar/CaseStudyNavBar";
import MobileNavBar from "@/components/NavBar/CaseStudyNavBarMobile"
import BackToTopButton from "@/components/BackToTopButton/BackToTopButton";
import Hero from "../../components/CaseStudy/Hero/Hero";
import Overview from "../../components/CaseStudy/Overview/Overview";
import Discovery from "@/components/CaseStudy/Boogie/Discovery/Discovery";
import KeyInsight from "@/components/CaseStudy/Boogie/KeyInsight/KeyInsight";
import Opportunity from "@/components/CaseStudy/Boogie/Opportunity/Opportunity";
import Approach from "@/components/CaseStudy/Boogie/Approach/Approach";
import Handoff from "@/components/CaseStudy/Boogie/Handoff/Handoff";
import Reflections, {
  type ReflectionsContent,
} from "../../components/CaseStudy/Reflections/Reflections";
import Footer from "../../components/CaseStudy/Footer/Footer";

import heroBackground from "../../assets/images/boogie/hero-background.jpg";
import heroScreen from "../../assets/images/boogie/hero-screen.png";

import { BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa6";
import { boogieNavItems } from "@/config/navigation";
import { useIsMobile } from "@/hooks/useIsMobile";


function Boogie() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showNavbar, setShowNavbar] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Hero visible:", entry.isIntersecting);
        setShowNavbar(!entry.isIntersecting);
      },
      {
        threshold: 0,
      },
    );

    observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="boogie-case-study">
      <BackButton to="/" />
      <div className={`navbar-wrapper ${showNavbar ? "visible" : ""}`}>
        <NavBar items={boogieNavItems} />
      </div>

      <MobileNavBar items={boogieNavItems} />
      <BackToTopButton isVisible={showNavbar} />
      <div ref={heroRef}>
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
              value: isMobile
                ? "UX Researcher, Lead UI Designer & Developer"
                : "UX Researcher\nLead UI Designer & Developer",
            },
            {
              label: "Team",
              value: isMobile
                ? "Stanford CS 377Q, Team of 5"
                : "Stanford CS 377Q\nTeam of 5",
            },
            {
              label: "Tools",
              value: <>Figma, Expo, React&nbsp;Native, Github</>,
            },
            {
              label: "Timeline",
              value: isMobile
                ? "Jan–Mar 2026 (10 weeks)"
                : "Jan–Mar 2026\n10 weeks",
            },
          ]}
          links={[
            {
              icon: BsGithub,
              label: "GitHub Codebase",
              href: "https://github.com/AnanyaNavale/CS377Q-Boogie",
            },
            {
              icon: FaFigma,
              label: "Figma Prototype",
              href: "https://www.figma.com/proto/VZeg3Z2oDSWlrv6xtTLAQ6/Boogie?node-id=0-1&t=6fXsHoqms4giNXiu-1",
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
            <span>
              Completed in collaboration with
              Stanford's&nbsp;DisGo&nbsp;Task&nbsp;Force as part of
              <br />
              CS 377Q: Designing for Accessibility.
            </span>
          }
        />
      </div>

      {/* Discovery */}
      <Discovery id="discovery" />

      {/* Key Insight */}
      <KeyInsight id="key-insight" />

      {/* Opportunity */}
      <Opportunity id="opportunity" />

      {/* Approach, Challenge, Product Thinking */}
      <Approach id="approach" />

      {/* Handoff */}
      <Handoff id="handoff" />

      <Reflections
        tagline={"Accessibility isn't an add-on.\nIt reshapes the system."}
        content={reflectionsContent}
        questions={reflectionQuestions}
        id="reflections"
      />

      <Footer currentProjectId="boogie" />
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
    theme: "Scaling Applicability",
    content: (
      <>
        How dependent is this experience on users' familiarity with their
        surroundings?
      </>
    ),
  },
  {
    theme: "AI Integration",
    content: (
      <>
        Can AI establish the same shared understanding of place as a human
        conversation?
      </>
    ),
  },
  {
    theme: "Interaction",
    content: (
      <>
        When is text sufficient for communicating precise locations, and when
        are richer modalities, such as haptic feedback, necessary?
      </>
    ),
  },
];
