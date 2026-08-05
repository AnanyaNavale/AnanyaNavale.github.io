import "./ProductThinking.css";

import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import TextBlock, {
  type TextBlockItem,
} from "@/components/Section/TextBlock/TextBlock";

import images from "@/assets/images/boogie/images.png";
import mode from "@/assets/images/boogie/mode-toggle.mp4";
import form from "@/assets/images/boogie/google-form.png";

function ProductThinking({ id }: { id: string }) {
  return (
    <section className="boogie-product-thinking" id={id}>
      <SectionHeader
        title="Product Thinking"
        tagline="more than one way of seeing."
        subSectionTagline="And accessibility meant designing for"
      />
      <TextBlock text={textContent.firstParagraph} />

      <div className="pt-designs">
        <div className="pt-designs-first-col">
          <div className="pt-designs-images">
            <div className="pt-designs-images-image">
              <h5>Supplementary Reference Images</h5>
              <div className="pt-designs-images-image-wrapper">
                <img src={images} alt="" />
              </div>
            </div>
            <div className="pt-designs-images-text">
              <h6>A picture is worth a thousand words</h6>
              <p>
                Although blind users wouldn’t find as much use for images,
                low-vision users as well as the general public would find them
                helpful in identifying locations.
                <br />
                <br />
                Images of both buildings and entrances were included for users
                to have visual references and be more secure in their decisions.
              </p>
            </div>
          </div>
          <div className="pt-designs-mode">
            <div className="pt-designs-mode-image">
              <h5>Dark / Light Mode Toggle</h5>
              <div className="pt-designs-mode-image-wrapper">
                <video src={mode} autoPlay loop muted playsInline />
              </div>
            </div>
            <div className="pt-designs-mode-text">
              <h6>Light = Bright</h6>
              <p>
                An interview with a low-vision tester revealed that a design
                centered on blind accessibility did not fully account for the
                spectrum of BLV needs, including sensitivity to light.
                <br />
                <br />A dark/light mode toggle was built to quickly dim the
                brightness of the screen for ease on the eyes.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-designs-second-col">
          <div className="pt-designs-form-text">
            <h6>Crowdsourcing</h6>
            <p>
              Accessibility is not restricted to interfaces—it impacts the
              underlying data as well. Different people remember places
              differently.
              <br />
              <br />
              It was important to try to account for as many perspectives as
              possible in the system’s database.
            </p>
          </div>
          <div className="pt-designs-form-image">
            <h5>Data Crowdsource Form</h5>
            <img src={form} alt="" />
          </div>
        </div>
      </div>
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
