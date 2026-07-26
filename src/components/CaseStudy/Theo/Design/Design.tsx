import "./Design.css";

import Section from "@/components/Section/Section";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import TextBlock, { type TextBlockItem } from "@/components/TextBlock/TextBlock";

import evolutionDiagram from "@/assets/images/theo/goal-breakdown-evolution.png";
import finalScreens from "@/assets/images/theo/final-screens.png";

function Design({ id }: { id: string }) {
  return (
    <Section innerWidth={1140} className="theo-design" id={id}>
      <SectionHeader
        title="Design"
        tagline={"The interface had to feel like\nthe friend it promise to be."}
      />

      <TextBlock text={textContent.firstParagraph} />

      <section className="design-evolution">
        <img src={evolutionDiagram} alt="" />
      </section>

      <section className="design-final-screens">
        <img src={finalScreens} alt="" />
      </section>
    </Section>
  );
}

export default Design;

const textContent: {
  firstParagraph: TextBlockItem[];
} = {
  firstParagraph: [
    {
      size: "body",
      content: (
        <>
          Every interaction was designed to keep users moving toward{" "}
          <i>their</i> goals, <i>their</i> way.
        </>
      ),
    },
    {
      size: "large",
      content: (
        <>
          Users decided. <strong>Theo</strong> guided.
        </>
      ),
    },
  ],
};