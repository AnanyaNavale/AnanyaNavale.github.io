import "./KeyInsight.css"

import Section from "@/components/Section/Section";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import TextBlock, { type TextBlockItem } from "@/components/Section/TextBlock/TextBlock";
import Quote from "../../Quote/Quote";

import arrillaga from "@/assets/images/lunacart/arrillaga-nights-labeled.png";
import arrillagaMobile from "@/assets/images/lunacart/arrillaga-nights-labeled-mobile.png";
import pyramid from "@/assets/images/lunacart/food-pyramid.png";
import lateNight from "@/assets/images/lunacart/late-night-labeled.png";
import lateNightMobile from "@/assets/images/lunacart/late-night-labeled-mobile.png";
import tap from "@/assets/images/lunacart/tap-menu-labeled.png";
import tapMobile from "@/assets/images/lunacart/tap-menu-labeled-mobile.png";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function KeyInsight({ id }: { id: string }) {
  const isMobile = useIsMobile();

  return (
    <Section className="lunacart-key-insight" id={id}>
      <SectionHeader
        title="Key Insight"
        tagline={
          "The behavior was justified.\nBut the lack of food choice was not."
        }
      />

      <TextBlock text={textContent.firstParagraph} />

      <div className="key-insight-quotes">
        <Quote
          content={
            <>
              "When we eat late night, that's when I feel like it's the most
              unhealthy, because the only options are like cheap, fast food...
              So like, melts or pizza, hamburgers, fried foods."
            </>
          }
          attr={<>— study participant 06</>}
        />
        <Quote
          content={<>"...it’s horrible. Nothing like Sweetgreens at 2 A.M."</>}
          attr={<>— study participant 07</>}
        />
      </div>

      <TextBlock text={textContent.secondParagraph} />

      {isMobile ? (
        <div className="key-insight-bento">
          <div className="key-insight-bento-pyramid-wrapper">
            <img src={pyramid} alt="" />
          </div>
          <div className="key-insight-bento-middle-row">
            <img src={lateNightMobile} alt="" style={{ width: "53%" }} />
            <img src={arrillagaMobile} alt="" style={{ width: "47%" }} />
          </div>
          <img src={tapMobile} alt="" />
        </div>
      ) : (
        <div className="key-insight-bento">
          <div className="key-insight-bento-first-col">
            <div className="key-insight-bento-pyramid-wrapper">
              <img src={pyramid} alt="" />
            </div>
            <img src={lateNight} alt="" />
          </div>
          <div className="key-insight-bento-second-col">
            <img src={arrillaga} alt="" />
            <img src={tap} alt="" />
          </div>
        </div>
      )}
    </Section>
  );
}

const textContent: {
  firstParagraph: TextBlockItem[];
  secondParagraph: TextBlockItem[];
} = {
  firstParagraph: [
    {
      size: "body",
      content: <>Students weren't looking for a way to eat less at night.</>,
    },
    {
      size: "large",
      content: <>They were looking for healthier choices when they did.</>,
    },
  ],
  secondParagraph: [
    {
      size: "body",
      content: (
        <>
          Once we turned our attention to finding ways for students to eat
          healthier at night,
          <br/>
          we realized something fundamentally odd and frustrating about the
          whole situation.
        </>
      ),
    },
    {
      size: "large",
      content: (
        <>
          Eating healthy at night on campus just wasn’t possible. At least, not
          conveniently.
        </>
      ),
    },
    {
      size: "body",
      content: (
        <>
          It meant turning to off-campus eateries, coordinating pickup or
          delivery,
          <br/>and paying out of pocket instead of using pre-allocated meal
          plan dollars.
        </>
      ),
    },
  ],
};