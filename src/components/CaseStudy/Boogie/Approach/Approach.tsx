import "./Approach.css";
import { useIsMobile } from "@/hooks/useIsMobile";

import Section from "@/components/Section/Section";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import TextBlock, {
  type TextBlockItem,
} from "@/components/Section/TextBlock/TextBlock";
import Carousel from "@/components/Carousel/Carousel";
import Challenge from "./Challenge/Challenge";
import ProductThinking from "./ProductThinking/ProductThinking";

import boogieBot from "@/assets/images/boogie/boogiebot.png";
import pickupLocation from "@/assets/images/boogie/pickup-location.png";
import pickupEntrance from "@/assets/images/boogie/pickup-entrance.png";

export default function Approach({ id }: { id: string }) {
  const isMobile = useIsMobile();

  const carouselItems = [
    <div className="approach-screens-second-col-screen">
      <p>
        Select location <br /> by name & image
      </p>
      <img src={pickupLocation} alt="Pickup location selection" />
    </div>,
    <div className="approach-screens-second-col-screen">
      <p>
        Select entrance <br /> by cardinal direction & landmarks
      </p>
      <img src={pickupEntrance} alt="Pickup entrance selection" />
    </div>,
  ];

  return (
    <Section innerWidth={1200} className="boogie-approach" id={id}>
      <div className="boogie-approach-inner">
        <SectionHeader
          title="Approach"
          tagline={
            "Addresses became landmarks.\nHuman dispatchers became digital."
          }
        />
        <TextBlock text={textContent.firstParagraph} />

        {isMobile ? (
          <div className="approach-screens-mobile">
            <div className="approach-screens-first-col">
              <p>
                Coordinate pickup & dropoff <br /> with chatbot dispatch
              </p>
              <img src={boogieBot} alt="Boogie chatbot" />
            </div>
            <p className="approach-screens-divider">OR</p>
            <Carousel
              items={carouselItems}
              paginationColors={["var(--color-boogie-primary)"]}
              inactiveDotColor="var(--color-text-dark)"
              itemWidth="clamp(300px, 62vw, 400px)"
              itemGap="clamp(32px, 3vw, 44px)"
            />
          </div>
        ) : (
          <div className="approach-screens">
            <div className="approach-screens-first-col">
              <p>
                Coordinate pickup & dropoff <br /> with chatbot dispatch
              </p>
              <img src={boogieBot} alt="Boogie chatbot" />
            </div>
            <p
              style={{
                fontFamily: "var(--font-label)",
                fontWeight: 600,
                color: "var(--color-text-header)",
              }}
            >
              OR
            </p>
            <div className="approach-screens-second-col">
              <div className="approach-screens-second-col-screen">
                <p>
                  Select location <br /> by name & image
                </p>
                <img src={pickupLocation} alt="Pickup location selection" />
              </div>
              <div className="approach-screens-second-col-screen">
                <p>
                  Select entrance <br /> by cardinal direction & landmarks
                </p>
                <img src={pickupEntrance} alt="Pickup entrance selection" />
              </div>
            </div>
          </div>
        )}
      </div>

      <Challenge id="challenge" />

      <ProductThinking id="product-thinking" />
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
          People don't remember pins or numbers. They remember physical and
          relative locations. And they know that they can usually rely on
          another human to understand them, like the DisGo drivers.
        </>
      ),
    },
    {
      size: "large",
      content: <>We worked to recreate that, in an app.</>,
    },
  ],
};
