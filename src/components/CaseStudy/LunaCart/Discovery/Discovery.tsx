import "./Discovery.css";

import Section from "@/components/Section/Section";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import TextBlock, { type TextBlockItem } from "@/components/Section/TextBlock/TextBlock";
import Quote from "../../Quote/Quote";

import circleDiagram from "@/assets/images/lunacart/circle-diagram.svg";
import affinityMap from "@/assets/images/lunacart/affinity-map.jpg";

function Discovery({ id }: { id: string }) {
  return (
    <Section innerWidth={1140} className="lunacart-discovery" id={id}>
      <SectionHeader
        title="Discovery"
        tagline="Late-night eating by itself wasn't the real problem."
      />

      <TextBlock text={textContent.firstParagraph} />
      <div className="discovery-quotes">
        <Quote
          content={<>“Late-night eating is something I've always done."</>}
          attr={<>— study participant 01</>}
        />
        <Quote
          content={
            <>
              “I don't think that I've ever made a conscious effort to change my
              late-night eating habits."
            </>
          }
          attr={<>— study participant 03</>}
        />
      </div>

      <TextBlock text={textContent.secondParagraph} />

      <img className="discovery-diagram" src={circleDiagram} alt="" />

      <TextBlock text={textContent.thirdParagraph} />

      <div className="discovery-affinity-map">
        <img src={affinityMap} alt="" />
      </div>
    </Section>
  );
}

export default Discovery;

const textContent: {
  firstParagraph: TextBlockItem[];
  secondParagraph: TextBlockItem[];
  thirdParagraph: TextBlockItem[];
} = {
  firstParagraph: [
    {
      size: "body",
      content: (
        <>
          As members of the Stanford community ourselves, we initially believed
          regular late-night eating was a common undesirable behavior that
          students would want to eliminate.
        </>
      ),
    },
    {
      size: "large",
      content: (
        <>The students we interviewed and observed told another story:</>
      ),
    },
  ],
  secondParagraph: [
    {
      size: "body",
      content: (
        <>
          Rather than a lack of discipline, participants described late-night
          eating as a behavior driven by genuine needs and motivations:
        </>
      ),
    },
  ],
  thirdParagraph: [
    {
      size: "body",
      content: (
        <>
          These themes emerged consistently across our week-long observational
          diary study, forming the foundation of our synthesis.
        </>
      ),
    },
  ],
};