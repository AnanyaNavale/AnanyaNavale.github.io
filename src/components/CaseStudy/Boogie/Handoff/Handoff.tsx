import "./Handoff.css";

import Section from "@/components/Section/Section";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import TextBlock, { type TextBlockItem } from "@/components/Section/TextBlock/TextBlock";

import firstSlide from "@/assets/images/boogie/first-slide.png";
import secondSlide from "@/assets/images/boogie/second-slide.png";

function Handoff({ id }: { id: string }) {
  return (
    <Section innerWidth={1140} className="boogie-handoff" id={id}>
      <SectionHeader
        title="Handoff"
        tagline={"Boogie made its way to\nStanford's DisGo Task Force."}
      />

      <TextBlock text={textContent.firstParagraph} />

      <div className="handoff-slides">
        <img src={firstSlide} alt="" />
        <img src={secondSlide} alt="" />
      </div>

      <TextBlock text={textContent.secondParagraph} />
    </Section>
  );
}

export default Handoff;

const textContent: {
  firstParagraph: TextBlockItem[];
  secondParagraph: TextBlockItem[];
} = {
  firstParagraph: [
    {
      size: "body",
      content: (
        <>
          We pitched our research, prototype, and findings directly to the
          people responsible. <br /> There were problems to be solved, and we
          laid out an actionable roadmap for solving them.
        </>
      ),
    },
  ],
  secondParagraph: [
    {
      size: "large",
      content: (
        <>
          Approximately{" "}
          <strong className="handoff-link">
            <a
              href="https://stanforddaily.com/2024/04/15/disability-advocates-criticize-campus-golf-cart-service/"
              target="_blank"
              rel="noopener noreferrer"
            >
              400 people
            </a>
          </strong>{" "}
          depend on DisGo each year. <br /> Every incremental change has the
          potential to improve hundreds of daily journeys.
        </>
      ),
    },
  ],
};