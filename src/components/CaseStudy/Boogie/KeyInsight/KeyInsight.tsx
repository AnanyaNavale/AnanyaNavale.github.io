import "./KeyInsight.css";

import { useIsMobile } from "@/hooks/useIsMobile";
import Section from "@/components/Section/Section";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import TextBlock, { type TextBlockItem } from "@/components/Section/TextBlock/TextBlock";

import gradientBorder from "@/assets/images/boogie/gradient-border.svg";
import gradientBorderMobile from "@/assets/images/boogie/gradient-border-mobile.svg";
import { BsArrowDown } from "react-icons/bs";


function KeyInsight({ id }: { id: string }) {
  const isMobile = useIsMobile();

  return (
    <Section className="boogie-key-insight" id={id}>
      <SectionHeader
        title="Key Insight"
        tagline={"The problem wasn’t visibility.\nIt was translation."}
      />

      <TextBlock text={textContent.firstParagraph} />

      <div className="key-insight-diagram">
        <div
          className="key-insight-diagram-pov"
          style={{
            backgroundImage:
              "linear-gradient(100deg, var(--color-boogie-tertiary), var(--color-boogie-primary)",
          }}
        >
          <h6>Rider</h6>
          <p>
            “I want to be picked up at <u>Memorial Auditorium</u> at my usual
            spot outside my class.”
          </p>
        </div>
        <BsArrowDown color="var(--color-boogie-tertiary)" />
        <div className="key-insight-diagram-pov middle">
          <img src={isMobile ? gradientBorderMobile : gradientBorder} />
          <h6 style={{ color: "var(--color-text-header)" }}>Flexigo</h6>
          <p style={{ color: "var(--color-text-header)" }}>
            “<u>Memorial Auditorium</u>” → <i>Chain of context broken</i>
          </p>
        </div>
        <BsArrowDown color="#4870D6" />
        <div
          className="key-insight-diagram-pov"
          style={{
            backgroundImage:
              "linear-gradient(100deg, #4A6FD7, var(--color-boogie-secondary)",
          }}
        >
          <h6>Driver</h6>
          <p>
            After looking at rider information → “Oh, I remember this person
            likes to be picked up at this specific back door.”
          </p>
        </div>
      </div>
    </Section>
  );
}

export default KeyInsight;

const textContent: {
  firstParagraph: TextBlockItem[];
} = {
  firstParagraph: [
    {
      size: "large",
      content: (
        <>“Sometimes you may not know the official name of a building.”</>
      ),
    },
    {
      size: "body",
      content: (
        <>
          It wasn’t just the interface that was the worst fit here—the whole
          system was a mismatch. Riders described places through landmarks and
          personal experience, while the system forced them into a fixed set of
          predefined locations. To bridge this gap, drivers had to become
          translators relying on memory and shared knowledge to connect riders’
          descriptions with the system’s pinpoints.
        </>
      ),
    },
  ],
};