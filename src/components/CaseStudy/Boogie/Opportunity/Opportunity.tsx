import "./Opportunity.css";

import { useIsMobile } from "@/hooks/useIsMobile";
import Section from "@/components/Section/Section";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import TextBlock, { type TextBlockItem } from "@/components/Section/TextBlock/TextBlock";
import FlipCard from "@/components/FlipCard/FlipCard";

import before from "@/assets/images/boogie/flexigo-list.png";
import after from "@/assets/images/boogie/hero-screen.png";

export default function Opportunity({ id }: { id: string }) {
  const isMobile = useIsMobile();

  return (
    <Section innerWidth={1140} className="boogie-opportunity" id={id}>
      <SectionHeader
        title="Opportunity"
        tagline={
          isMobile
            ? "Booking had to align with users' lived spatial perception."
            : "Booking had to align with\nusers' lived spatial perception."
        }
      />

      <TextBlock text={textContent.firstParagraph} />

      {isMobile ? (
        <FlipCard
          frontImage={before}
          backImage={after}
          frontLabel={{
            title: "Before",
            description: (
              <>
                <strong>Flexigo</strong> location selection flow
                <br />
                <br />
              </>
            ),
          }}
          backLabel={{
            title: "After",
            description: (
              <>
                <strong>Boogie</strong> multimodal booking flow—
                <br />
                manual and conversational
              </>
            ),
          }}
        />
      ) : (
        <div className="opportunity-screens">
          {/* Existing desktop layout */}
          <div className="opportunity-screen">
            <div className="opportunity-screen-label">
              <h6>Before</h6>
              <p>
                <strong>Flexigo</strong> location selection flow
              </p>
            </div>
            <img src={before} alt="" />
          </div>
          <div className="opportunity-screen">
            <div className="opportunity-screen-label">
              <h6>After</h6>
              <p>
                <strong>Boogie</strong> multimodal booking flow—
                <br />
                manual and conversational
              </p>
            </div>
            <img src={after} alt="" />
          </div>
        </div>
      )}
    </Section>
  );
}

const textContent: {
  firstParagraph: TextBlockItem[],
} = {
  firstParagraph: [
    {
      size: "body",
      content: 
      <>
      To match the mental model that BLV users had of the campus layout, the new system had to support this experiential and relative perspective.
      </>
    }
  ]
}