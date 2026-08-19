import "./Theo.css";
import { useEffect, useRef, useState } from "react";

import NavBar from "@/components/NavBar/CaseStudyNavBar";
import MobileNavBar from "@/components/NavBar/CaseStudyNavBarMobile";
import BackButton from "@/components/BackButton/BackButton";
import BackToTopButton from "@/components/BackToTopButton/BackToTopButton";
import Hero from "../../components/CaseStudy/Hero/Hero";
import Overview from "../../components/CaseStudy/Overview/Overview";
import Discovery from "../../components/CaseStudy/Theo/Discovery/Discovery";
import Approach from "../../components/CaseStudy/Theo/Approach/Approach";
import Vision from "@/components/CaseStudy/Theo/Vision/Vision";
import Design from "@/components/CaseStudy/Theo/Design/Design";
import Reflections, { type ReflectionsContent } from "../../components/CaseStudy/Reflections/Reflections";
import Footer from "../../components/CaseStudy/Footer/Footer";

import heroBackground from "../../assets/images/theo/hero-background.jpg";
import heroLeftScreen from "../../assets/images/theo/hero-screen-1.png";
import heroRightScreen from "../../assets/images/theo/hero-screen-2.png";

import { BsLink45Deg, BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa6";
import { theoNavItems } from "@/config/navigation";
import { useIsMobile } from "@/hooks/useIsMobile";


export default function Theo() {
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
    <main className="theo-case-study">
      <BackButton to="/" />
      <div className={`navbar-wrapper ${showNavbar ? "visible" : ""}`}>
        <NavBar items={theoNavItems} />
      </div>

      <MobileNavBar items={theoNavItems} />
      <BackToTopButton isVisible={showNavbar} />

      {/* Hero */}
      <div ref={heroRef}>
        <Hero
          title="Theo"
          valueProp="Gentle nudges. Real progress."
          headline={
            <>
              <span>Most productivity tools assume focus comes easy.</span>
              <span>This one doesn’t.</span>
            </>
          }
          backgroundImage={heroBackground}
          foregroundImages={[heroLeftScreen, heroRightScreen]}
          metadata={[
            {
              label: "Role",
              value: "Lead UI/UX Designer & Developer",
            },
            {
              label: "Team",
              value: isMobile
                ? "Stanford CS 147, Team of 4"
                : "Stanford CS 147\nTeam of 4",
            },
            {
              label: "Tools",
              value: <>Figma, Expo, React&nbsp;Native, Supabase, Github</>,
            },
            {
              label: "Timeline",
              value: isMobile
                ? "Sep–Dec 2025 (10 weeks)"
                : "Sep–Dec 2025\n10 weeks",
            },
          ]}
          links={[
            {
              icon: BsLink45Deg,
              label: "Full Project Site",
              href: "https://web.stanford.edu/class/cs147/projects/EmpoweringLearnerswithAI/Theo/",
            },
            {
              icon: BsGithub,
              label: "GitHub Codebase",
              href: "https://github.com/AnanyaNavale/CS147-Theo",
            },
            {
              icon: FaFigma,
              label: "Figma Prototype",
              href: "https://www.figma.com/proto/PydVDc7BACGHCt1FJZ5py3/Theo--Medium-Fi-Prototype?node-id=0-1&t=5u0jqZ3oEAjuiepe-1",
            },
          ]}
        />

        {/* Overview */}
        <Overview
          firstParagraph="Learners with ADHD (Attention-Deficit/Hyperactivity Disorder) often struggle to regulate their focus when working on tasks. They shift between distraction and hyperfocus, even when they know exactly what they need to do."
          secondParagraph={
            <>
              <strong>Theo</strong> is an AI-powered study companion designed to
              support its users through this challenge in three ways: breaking
              down large tasks, fostering self-accountability, and offering
              encouragement. This project explores how interaction design can
              help people direct their attention more intentionally toward their
              goals.
            </>
          }
        />
      </div>

      {/* Discovery */}
      <Discovery id="discovery" />

      {/* Approach */}
      <Approach id="approach" />

      {/* Vision */}
      <Vision id="vision" />

      {/* Design */}
      <Design id="design" />

      {/* Reflections */}
      <Reflections
        tagline="Good design makes progress feel possible."
        content={reflectionsContent}
        questions={reflectionQuestions}
        id="reflections"
      />

      <Footer currentProjectId="theo" />
    </main>
  );
}

const reflectionsContent: ReflectionsContent = {
  intro: [
    {
      size: "body",
      content: (
        <>
          While{" "}
          <strong className="case-study-reflections-highlight">Theo</strong>’s
          success so far validated many of our design decisions, its central
          assumption remains:
        </>
      ),
    },
    {
      size: "large",
      content: (
        <>
          Can an AI body-double genuinely help students regulate focus, build
          sustainable study habits,
          <br />
          and take control of progress?
        </>
      ),
    },
    {
      size: "body",
      content: (
        <>
          Conducting longitudinal user tests to investigate this question would
          uncover insights into how best to structure the character’s animated
          presence. From in-app reminders and device-based notifications to
          moments of encouragement, we could build a more convincing sense of
          digital body-doubling.
        </>
      ),
    },
    {
      size: "body",
      content: (
        <>
          Beyond validating the concept, there are still important questions
          about designing supportive AI experiences:
        </>
      ),
    },
  ],

  conclusion: [
    {
      size: "large",
      content: (
        <>Every interface is ultimately a conversation between people.</>
      ),
    },
    {
      size: "body",
      content: (
        <>
          What began as my first HCI project became a pillar in the foundation
          of my design practice. Working on{" "}
          <strong className="case-study-reflections-highlight">Theo</strong>{" "}
          changed the way I think about interaction design. Every decision—from
          the visual personality and layout to the architecture and
          functionality—contributed to the conversation the interface was having
          with the user. The project made me realize that interfaces don't
          simply communicate information; they communicate the designer's
          intent, empathy, and trust toward users. Since then, I've found myself
          thinking of the screens I design as a vessel for the signals I’m
          sending to the people I design for.
        </>
      ),
    },
    {
      size: "large",
      content: (
        <>
          My designs are messages in a bottle—if I do my job well, the care
          behind them will reach the right people.
        </>
      ),
    },
  ],
};

const reflectionQuestions = [
  {
    theme: "Interaction",
    content: (
      <>
        What interactions and animations create the strongest sense of
        body-doubling without becoming distracting?
      </>
    ),
  },
  {
    theme: "Relationship",
    content: (
      <>
        How can <strong>Theo</strong> provide meaningful support without making
        students overly dependent?
      </>
    ),
  },
  {
    theme: "Ethics",
    content: (
      <>
        Where should <strong>Theo</strong> set boundaries on advice and
        discussion topics? What sorts of assistance should <strong>Theo</strong>{" "}
        be qualified to offer?
      </>
    ),
  },
  {
    theme: "End Goal",
    content: (
      <>
        How could <strong>Theo</strong> work toward slowly transitioning users
        out of the app to find other longer-term human resources such as
        instructors, mentors, and peers?
      </>
    ),
  },
];

