import "./Challenge.css";

import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import TextBlock, {
  type TextBlockItem,
} from "@/components/TextBlock/TextBlock";

function Challenge() {
  return (
    <section className="boogie-challenge">
      <SectionHeader title="Challenge" tagline="human ambiguity." subSectionTagline="But digital dispatchers still had to navigate"/>
      <TextBlock text={textContent.firstParagraph}/>
    </section>
  );
}

export default Challenge;

const textContent: {
  firstParagraph: TextBlockItem[];
} = {
  firstParagraph: [
    {
      size: "body",
      content: (
        <>
          By turning to AI, we introduced some new natural language conundrums
          to the discussion. We wanted to create a system that was more
          intuitive and stress-free to use, so we had to refine our prompting
          and parsing techniques to prevent our new interface from becoming even
          more frustrating than the old.
        </>
      ),
    },
  ],
};