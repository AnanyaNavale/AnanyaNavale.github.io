import "./ProductThinking.css";

import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import TextBlock, {
  type TextBlockItem,
} from "@/components/TextBlock/TextBlock";

function ProductThinking() {
  return (
    <section className="boogie-product-thinking">
      <SectionHeader
        title="Product Thinking"
        tagline="more than one way of seeing."
        subSectionTagline="And accessibility meant designing for"
      />
      <TextBlock text={textContent.firstParagraph}/>
    </section>
  );
}

export default ProductThinking;

const textContent: {
  firstParagraph: TextBlockItem[];
} = {
  firstParagraph: [
    {
      size: "body",
      content: (
        <>
          This meant at both the interface and systems levels.
          <br/>
          Accessibility isn’t just about padding fixes for the margins—it’s about uplifting
          the overall user base.
        </>
      ),
    },
    {
      size: "large",
      content: (
        <>
          I don’t <i>hope</i> to design accessibly, I <i>work</i> to design <strong>universally</strong>.
        </>
      ),
    },
  ],
};
