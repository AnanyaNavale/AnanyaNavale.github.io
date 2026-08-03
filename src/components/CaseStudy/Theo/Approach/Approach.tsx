import "./Approach.css"

import Section from "../../../Section/Section"
import SectionHeader from "../../../Section/SectionHeader/SectionHeader"
import TextBlock, { type TextBlockItem } from "../../../Section/TextBlock/TextBlock"
import ExperiencePrototypes from "./ExperiencePrototypes/ExperiencePrototypes"
import { useIsMobile } from "@/hooks/useIsMobile"

function Approach({ id }: { id: string }) {
  const isMobile = useIsMobile();

  return (
    <Section innerWidth={1200} className="theo-approach" id={id}>
      <SectionHeader
        title="Approach"
        tagline={
          isMobile
            ? "So a single form of support was never going to be enough."
            : "So a single form of support was\nnever going to be enough."
        }
      />

      <TextBlock text={textContent.firstParagraph} />

      <ExperiencePrototypes />

      <TextBlock text={textContent.secondParagraph} contentAlignment="center" />
    </Section>
  );
}

export default Approach;

const textContent: {
  firstParagraph: TextBlockItem[];
  secondParagraph: TextBlockItem[];
} = {
  firstParagraph: [
    {
      size: "body",
      content: (
        <>
          Our synthesis revealed three distinct forms of support. We explored
          each through low-fidelity experience prototypes.
        </>
      ),
    },
  ],
  secondParagraph: [
    {
      size: "body",
      content: (
        <>
          Participants responded most positively to the{" "}
          <strong>accountability</strong> and <strong>self-care</strong>{" "}
          prototypes.
        </>
      ),
      textAlignment: "center",
    },
    {
      size: "large",
      content: <>We carried these forward into developing our solution.</>,
      textAlignment: "center",
    },
  ],
};