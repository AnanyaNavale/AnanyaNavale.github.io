import "./LunaCart.css";

import Navbar from "../../components/CaseStudy/NavBar";
import Hero from "../../components/CaseStudy/Hero/Hero";
import Overview from "../../components/CaseStudy/Overview/Overview";
import Discovery from "@/components/CaseStudy/LunaCart/Discovery/Discovery";
import KeyInsight from "@/components/CaseStudy/LunaCart/KeyInsight/KeyInsight";
import Reflections, {
  type ReflectionsContent,
} from "../../components/CaseStudy/Reflections/Reflections";
import Footer from "../../components/CaseStudy/Footer";

import heroBackground from "../../assets/images/lunacart/hero-background.jpg";
import heroScreen from "../../assets/images/lunacart/hero-screen.png";
import { BsLink45Deg, BsWordpress } from "react-icons/bs";

function LunaCart() {
  return (
    <main className="lunacart-case-study">
      <Navbar />

      <Hero
        title="LunaCart"
        valueProp="Future Me Ordered This"
        headline={
          <>
            <span>Healthy food disappeared after dinner.</span>
            <span>This app <br /> brought it back at midnight.</span>
          </>
        }
        backgroundImage={heroBackground}
        foregroundImages={[heroScreen]}
        metadata={[
          {
            label: "Role",
            value: "Lead UX Researcher & Designer",
          },
          {
            label: "Team",
            value: "Stanford CS 247B\nTeam of 5",
          },
          {
            label: "Tools",
            value: "Figma · Miro · Replit",
          },
          {
            label: "Timeline",
            value: "Jan–Mar 2026\n10 weeks",
          },
        ]}
        links={[
          {
            icon: BsLink45Deg,
            label: "Replit Project",
            href: "https://luna-cart--anavale1.replit.app",
          },
          {
            icon: BsWordpress,
            label: "Project Blog Post",
            href: "https://highercommonsense.com/cs247b/team-rakali-final-writeup/",
          },
        ]}
      />
      <Overview
        firstParagraph="Stanford students often pack a week's worth of academics and social engagements into a single day, leaving little time to work and even less time to eat until after dark. When the dining halls close, healthy meals become nonexistent, making students default to the greasy fast food options available at late-night spots on campus."
        secondParagraph={
          <>
            <strong>LunaCart</strong> helps students decide earlier—securing
            convenient, healthy, and tasty options before nighttime scarcity and
            hunger take over. By shifting meal planning to the daytime, this
            project explores how small changes in timing can lead to healthier
            nocturnal eating habits.
          </>
        }
      />

      {/* Discovery */}
      <Discovery />

      {/* Key Insight */}
      <KeyInsight />

      {/* Approach */}

      {/* Design */}

      <Reflections
        tagline="Designing for behavior means designing for reality."
        content={reflectionsContent}
        questions={reflectionQuestions}
      />

      <Footer />
    </main>
  );
}

export default LunaCart;

const reflectionsContent: ReflectionsContent = {
  intro: [
    {
      size: "body",
      content: (
        <>
          Looking back, populating{" "}
          <strong className="case-study-reflections-highlight">LunaCart</strong>{" "}
          with food from dining halls, campus vendors, or local eateries instead
          of simulating menu items would have made the experience feel more
          realistic and relatable.
          <br />
          As a next step,{" "}
          <strong className="case-study-reflections-highlight">
            partnering with a food provider whose offerings better align
          </strong>{" "}
          with students' preferences would create more opportunities to test the
          experience and evaluate how pre-ordering fits into daily routines over
          an extended period of time.
        </>
      ),
    },
    {
      size: "body",
      content: (
        <>
          Moving the project forward would also require keeping several open
          questions in consideration:
        </>
      ),
    },
  ],

  conclusion: [
    {
      size: "body",
      content: (
        <>
          <strong className="case-study-reflections-highlight">LunaCart</strong>{" "}
          reshaped my understanding of behavior change and how much our habits
          are influenced by design choices. I began the project focused on
          eliminating what I perceived to be an unhealthy habit, but discovered
          that “bad” behaviors can exist for valid reasons. Rather than asking
          people to stop doing something meaningful to them, I now look for
          opportunities that respect existing routines while gently shifting
          decisions toward better outcomes.
        </>
      ),
    },
    {
      size: "large",
      content: <>Learning to change others’ behavior changed my perspective.</>,
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