import "./Design.css";

import Section from "@/components/Section/Section";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import TextBlock, { type TextBlockItem } from "@/components/Section/TextBlock/TextBlock";
import { useIsMobile } from "@/hooks/useIsMobile";

import evolutionDiagram from "@/assets/images/theo/goal-breakdown-evolution.png";
import card1 from "@/assets/images/theo/screens/card-1.png";
import card2 from "@/assets/images/theo/screens/card-2.png";
import card3 from "@/assets/images/theo/screens/card-3.png";
import card4 from "@/assets/images/theo/screens/card-4.png";
import line1 from "@/assets/images/theo/screens/line-1.svg";
import line2 from "@/assets/images/theo/screens/line-2.svg";
import line3 from "@/assets/images/theo/screens/line-3.svg";

import mobileCard1 from "@/assets/images/theo/screens/mobile/mobile-card-1.png";
import mobileCard2 from "@/assets/images/theo/screens/mobile/mobile-card-2.png";
import mobileCard3 from "@/assets/images/theo/screens/mobile/mobile-card-3.png";
import mobileCard4 from "@/assets/images/theo/screens/mobile/mobile-card-4.png";

export default function Design({ id }: { id: string }) {
  const isMobile = useIsMobile();

  return (
    <Section className="theo-design" id={id}>
      <SectionHeader
        title="Design"
        tagline={
          isMobile
            ? "The interface had to feel like the friend it promised to be."
            : "The interface had to feel like\nthe friend it promised to be."
        }
      />

      <TextBlock text={textContent.firstParagraph} />

      <section className="design-evolution">
        <div className="design-diagram-label">Goal Breakdown Evolution</div>
        <img src={evolutionDiagram} alt="" />
      </section>

      <section className="design-final-screens">
        <div className="design-diagram-label">Design Principles in Action</div>
        {isMobile ? (
          // Mobile: Simple column of cards
          <div className="design-final-screens-block">
            <img src={mobileCard1} className="design-final-screen" alt="" />
            <img src={mobileCard2} className="design-final-screen" alt="" />
            <img src={mobileCard3} className="design-final-screen" alt="" />
            <img src={mobileCard4} className="design-final-screen" alt="" />
            <div className="design-final-screens-award">
              <h4 className="design-final-screens-award-text-first-line">
                Award: Best Visual Design
              </h4>
              <h4 className="design-final-screens-award-text-second-line">
                Stanford CS 147
              </h4>
            </div>
          </div>
        ) : (
          // Desktop: Complex layout with lines
          <div className="design-final-screens-block">
            <img src={card1} className="design-final-screen card-1" alt="" />
            <img src={line1} className="design-final-screen line-1" />
            <img src={card2} className="design-final-screen card-2" alt="" />
            <img src={line2} className="design-final-screen line-2" />
            <img src={card3} className="design-final-screen card-3" alt="" />
            <img src={line3} className="design-final-screen line-3" />
            <img src={card4} className="design-final-screen card-4" alt="" />
            <div className="design-final-screens-award">
              <h4 className="design-final-screens-award-text-first-line">
                Award: Best Visual Design
              </h4>
              <h4 className="design-final-screens-award-text-second-line">
                Stanford CS 147
              </h4>
            </div>
          </div>
        )}
      </section>
    </Section>
  );
}

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