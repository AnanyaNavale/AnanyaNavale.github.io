import "./Discovery.css"

import Section from "../../../Section/Section";
import SectionHeader from "../../../Section/SectionHeader/SectionHeader";
import TextBlock, { type TextBlockItem } from "../../../Section/TextBlock/TextBlock";
import QuoteCards from "./QuoteCards/QuoteCards";

import interviewDiagram from "../../../../assets/images/theo/interview-diagram.png";

function Discovery({ id }: { id: string }) {
  return (
    <Section innerWidth={1140} className="theo-discovery" id={id}>
      <SectionHeader
        title="Discovery"
        tagline={"Focus is a lot more nuanced\nthan you think."}
      />

      <TextBlock text={textContent.firstParagraph} />

      <div className="discovery-interview-diagram-container">
        <img
          className="discovery-interview-diagram"
          src={interviewDiagram}
          alt=""
        />
      </div>

      <TextBlock text={textContent.secondParagraph} />

      <QuoteCards
        firstRow={quoteCardContent.firstRow}
        secondRow={quoteCardContent.secondRow}
      />

      <TextBlock
        text={[
          {
            size: "large",
            content: <>And we wanted to help all of them.</>,
          },
        ]}
      />
    </Section>
  );
}

export default Discovery;

const textContent: {
  firstParagraph: TextBlockItem[];
  secondParagraph: TextBlockItem[];
} = {
  firstParagraph: [
    {
      size: "body",
      content: (
        <>
          We conducted 9 interviews with ADHD learners and professionals,
          expecting the conversations to center almost entirely on distraction
          and overstimulation.
        </>
      ),
    },
  ],
  secondParagraph: [
    {
      size: "body",
      content: (
        <>
          Instead, the challenges extended far beyond distraction alone.
          <br />
          Some participants struggled with starting their work; others struggled
          to stop.
          <br />
          These experiences represented only two ends of a much broader
          spectrum.
        </>
      ),
    },
  ],
};

const quoteCardContent = {
  firstRow: [
    {
      quote: (
        <>
          “As long as I can break a problem up into chunks, I’m okay with it.”
        </>
      ),
      attr: "— high school senior (17)",
      borderColor: "var(--color-theo-tertiary)",
    },
    {
      quote:
        "“I don't have control over my brain, so everything else would be nice.”",
      attr: "— freelance graphic designer (26)",
      borderColor: "#B99E8A",
    },
  ],
  secondRow: [
    {
      quote: (
        <>
          “It’s usually my partner, Patti, who will say, ‘You’ve been on that
          task for eight hours—have you eaten?’ And I’ll be like, ‘Oh, no…’”
        </>
      ),
      attr: "— student program director (56)",
      borderColor: "#E7CBA0",
    },
    {
      quote:
        "“I’m always thinking about what I can or should’ve done versus what I have done.”",
      attr: "— biology Ph.D. student (24)",
      borderColor: "var(--color-theo-primary)",
    },
  ],
};