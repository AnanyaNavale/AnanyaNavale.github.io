import "./Opportunity.css";
import Section from "@/components/Section/Section";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import TextBlock, { type TextBlockItem } from "@/components/TextBlock/TextBlock";

import before from "@/assets/images/boogie/flexigo-list.png";
import after from "@/assets/images/boogie/hero-screen.png";

function Opportunity({ id }: { id: string }) {
  return (
    <Section innerWidth={1140} className="boogie-opportunity" id={id}>
      <SectionHeader
        title="Opportunity"
        tagline={"Booking had to align with\nusers’ lived spatial perception."}
      />

      <TextBlock text={textContent.firstParagraph} />

      <div className="opportunity-screens">
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
    </Section>
  );
}

export default Opportunity;

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