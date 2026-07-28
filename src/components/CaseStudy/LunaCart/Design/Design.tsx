import "./Design.css";

import Section from "@/components/Section/Section";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import TextBlock, { type TextBlockItem } from "@/components/TextBlock/TextBlock";
import Screens, { type ScreenItem } from "./Screens/Screens";

import storyMap from "@/assets/images/lunacart/story-map.jpg";
import wireflow from "@/assets/images/lunacart/wireflow.png";

import g1s1 from "@/assets/images/lunacart/screens/night-market.png";
import g1s2 from "@/assets/images/lunacart/screens/group-order.png";
import g1s3 from "@/assets/images/lunacart/screens/checkout.png";
import g2s1 from "@/assets/images/lunacart/screens/reflection-1.png";
import g2s2 from "@/assets/images/lunacart/screens/reflection-2.png";
import g2s3 from "@/assets/images/lunacart/screens/reflection-3.mov";
import g3s1 from "@/assets/images/lunacart/screens/food-item.mp4";
import g3s2 from "@/assets/images/lunacart/screens/cancelation.png";
import g3s3 from "@/assets/images/lunacart/screens/dark-mode.png";
import iphone from "@/assets/images/iphone.svg";
import iphoneNoCamera from "@/assets/images/iphone-no-camera.svg";

function Design({ id }: { id: string }) {
  return (
    <Section innerWidth={1200} className="lunacart-design" id={id}>
      <SectionHeader
        title="Design"
        tagline="So late-night eating had to depend on daytime planning."
      />
      <TextBlock text={textContent.firstParagraph} />
      <div className="design-model-container">
        <div className="design-story-map">
          <h5>Story Map</h5>
          <img src={storyMap} alt="" />
        </div>
        <div className="design-wireflow">
          <h5>Wireflow</h5>
          <img src={wireflow} />
        </div>
      </div>
      <Screens screens={screensContent.firstGroup} label="Final Screens" />
      <SectionHeader
        tagline="Reflections made them personal."
        subSectionTagline="Pre-commitment made choices intentional."
      />
      <Screens screens={screensContent.secondGroup} />
      <SectionHeader
        tagline="room for change."
        subSectionTagline="Intentional choices also needed"
      />
      <TextBlock text={textContent.secondParagraph} />
      <Screens screens={screensContent.thirdGroup} />
    </Section>
  );
}

export default Design;

const textContent: {
  firstParagraph: TextBlockItem[];
  secondParagraph: TextBlockItem[];
} = {
  firstParagraph: [
    {
      size: "body",
      content: (
        <>
          Our hypothesis was simple: if students committed themselves to
          healthier meals during the day, they would be more likely to follow
          through at night—especially if they paid in advance. With that
          intervention defined, we mapped the pre-order experience through story
          maps and wireflows, shaping our final prototype,{" "}
          <strong className="case-study-body-highlight">LunaCart</strong>.
        </>
      ),
    },
  ],
  secondParagraph: [
    {
      size: "body",
      content: (
        <>
          Usability testing uncovered three opportunities to make the experience
          feel more flexible, comfortable, and user-controlled.
        </>
      ),
    },
  ],
};

const screensContent: {
  firstGroup: ScreenItem[];
  secondGroup: ScreenItem[];
  thirdGroup: ScreenItem[];
} = {
  firstGroup: [
    {
      image: g1s1,
      title: "Welcome to LunaCart",
      content: (
        <>
          Prioritizing health without compromising taste—food that combines
          freshness, flavor, and fiber (sometimes).
        </>
      ),
    },
    {
      image: g1s2,
      title: "Food tastes better together",
      content: (
        <>
          Prioritizing health without compromising taste—food that combines
          freshness, flavor, and fiber (sometimes).
        </>
      ),
      reverse: true,
    },
    {
      image: g1s3,
      title: "Snack to the future",
      content: (
        <>
          In committing to a future time and place, users solidify their plans
          and alleviate food-related stress.
        </>
      ),
    },
  ],
  secondGroup: [
    {
      image: g2s1,
      title: (
        <>
          <s>Calorie tracking</s> Vibe check
        </>
      ),
      content: (
        <>
          We’re not here to be a calorie counter. We just want users to be in
          touch with what they want on a more present level.
        </>
      ),
      reverse: true,
    },
    {
      image: g2s2,
      title: "A win a day keeps the junk away",
      content: (
        <>
          Students have a lot on their plate, so it’s important to celebrate the
          small wins and create positive associations with nutritious food.
        </>
      ),
    },
    {
      image: g2s3,
      title: "Music is food for the soul",
      content: (
        <>
          An AI song randomizer creates a simple, expense-free form of
          motivation that’s both expected and surprising to keep users coming
          back!
        </>
      ),
      reverse: true,
      video: iphone,
    },
  ],
  thirdGroup: [
    {
      image: g3s1,
      title: "Meals, your way",
      content: (
        <>
          Ingredient details and customization give users greater control over
          meal choices, portion sizes, and dietary preferences.
        </>
      ),
      video: iphoneNoCamera,
    },
    {
      image: g3s2,
      title: "It’s never too late",
      content: (
        <>
          A cancelation window and countdown timer make pre-orders feel flexible
          rather than locked in.
        </>
      ),
      reverse: true,
    },
    {
      image: g3s3,
      title: "Designed for the dark",
      content: (
        <>
          A dedicated dark mode helps calm users in moments of stress, creates a
          nighttime mindset, and makes the interface navigable in low light.
        </>
      ),
    },
  ],
};