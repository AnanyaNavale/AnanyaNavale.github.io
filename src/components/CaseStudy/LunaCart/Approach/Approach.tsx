import "./Approach.css";

import Section from "@/components/Section/Section";
import SectionHeader from "@/components/Section/SectionHeader/SectionHeader";
import TextBlock, { type TextBlockItem } from "@/components/Section/TextBlock/TextBlock";

import rde from "@/assets/images/lunacart/interventions/rde.png";
import popUp from "@/assets/images/lunacart/interventions/pop-up.png";
import stepOne from "@/assets/images/lunacart/interventions/step-one-foods.png";
import onCall from "@/assets/images/lunacart/interventions/on-call-cafe.png";
import healthyDemandSignals from "@/assets/images/lunacart/interventions/healthy-demand-signals.png";
import preOrder from "@/assets/images/lunacart/interventions/pre-order.png";
import snackingBuffer from "@/assets/images/lunacart/interventions/snacking-buffer.png";

import line1 from "@/assets/images/lunacart/interventions/line1.svg";
import line2 from "@/assets/images/lunacart/interventions/line2.svg";
import line3 from "@/assets/images/lunacart/interventions/line3.svg";
import line4 from "@/assets/images/lunacart/interventions/line4.svg";
import line5 from "@/assets/images/lunacart/interventions/line5.svg";

// import line1Mobile from "@/assets/images/lunacart/interventions/line1-mobile.svg";
// import line2Mobile from "@/assets/images/lunacart/interventions/line2-mobile.svg";
// import line3Mobile from "@/assets/images/lunacart/interventions/line3-mobile.svg";
// import line4Mobile from "@/assets/images/lunacart/interventions/line4-mobile.svg";
// import line5Mobile from "@/assets/images/lunacart/interventions/line5-mobile.svg";
import { useIsMobile } from "@/hooks/useIsMobile";

type InterventionCardProps = {
  type: "food-ecosystem" | "behavior" | "design-implications";
  title?: string;
  description?: React.ReactNode;
  image?: string;
  highlighted?: boolean;
  number?: number;
  background?: string;
}

function InterventionCard({type, title, description, image, highlighted, number, background }: InterventionCardProps) {
  return type === "food-ecosystem" ? (
    <div
      className={`intervention-card food-ecosystem ${highlighted && "highlighted"}`}
    >
      <img src={image} alt="" />
      <p>{description}</p>
    </div>
  ) : type === "behavior" ? (
    <div
      className={`intervention-card behavior ${highlighted && "highlighted"}`}
    >
      <h6>{title}</h6>
      <p>{description}</p>
      <img src={image} alt="" />
    </div>
  ) : (
    <div className="intervention-card design-implications">
      <h5 style={{ backgroundImage: background }}>{String(number).padStart(2, "0")}</h5>
      <div className="intervention-card-content">
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Approach({ id }: { id: string }) {
  const isMobile = useIsMobile();

  return (
    <Section innerWidth={1200} className="lunacart-approach" id={id}>
      <SectionHeader
        title="Approach"
        tagline={
          isMobile
            ? "Providing healthier options at night wasn't on the menu.\nNeither was a real-time fix."
            : "Providing healthier options at\nnight wasn't on the menu.\nNeither was a real-time fix."
        }
      />

      <TextBlock text={textContent.firstParagraph} />

      {isMobile ? (
        <div className="approach-intervention-diagram-mobile">
          {/* Tier 1 */}
          <div className="intervention-diagram-row-mobile food-ecosystem">
            <h4>Food Ecosystem Interventions</h4>
            <div className="intervention-cards-mobile food-ecosystem-grid">
              {interventionCardContent.firstRow.map((card, i) => (
                <InterventionCard key={i} {...card} />
              ))}
            </div>
          </div>

          {/* Line between tier 1 and tier 2 */}
          {/* <div className="intervention-diagram-first-row-connector-mobile">
            <img src={line1Mobile} alt="" />
          </div> */}

          {/* Tier 2 */}
          <div className="intervention-diagram-row-mobile behavior">
            <h4>Behavioral Interventions</h4>
            <div className="intervention-cards-mobile behavior-triangle">
              {interventionCardContent.secondRow.map((card, i) => (
                <InterventionCard key={i} {...card} />
              ))}
            </div>
          </div>

          {/* Four fan-out lines between tier 2 and tier 3 */}
          {/* <img
            className="intervention-diagram-second-row-connector-mobile pale-orange"
            src={line2Mobile}
            alt=""
          />
          <img
            className="intervention-diagram-second-row-connector-mobile orange"
            src={line3Mobile}
            alt=""
          />
          <img
            className="intervention-diagram-second-row-connector-mobile purple"
            src={line4Mobile}
            alt=""
          />
          <img
            className="intervention-diagram-second-row-connector-mobile blue"
            src={line5Mobile}
            alt=""
          /> */}

          {/* Tier 3 */}
          <div className="intervention-diagram-row-mobile design-implications">
            <div className="intervention-diagram-row-mobile title-container">
              <h5>Tested Intervention</h5>
              <h4>Design Implications</h4>
            </div>
            <div className="intervention-cards-mobile design-implications-grid">
              {interventionCardContent.thirdRow.map((card, index) => (
                <InterventionCard key={index} {...card} number={index + 1} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="approach-intervention-diagram">
          <div className="intervention-diagram-row food-ecosystem">
            <h4>Food Ecosystem Interventions</h4>
            <div className="intervention-cards food-ecosystem">
              {interventionCardContent.firstRow.map((card) => (
                <InterventionCard
                  type={card.type}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  highlighted={card.highlighted}
                />
              ))}
            </div>
          </div>
          <div className="intervention-diagram-first-row-connector">
            <img src={line1} />
          </div>
          <div className="intervention-diagram-row behavior">
            <h4>Behavioral Interventions</h4>
            <div className="intervention-cards behavior">
              {interventionCardContent.secondRow.map((card) => (
                <InterventionCard
                  type={card.type}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  highlighted={card.highlighted}
                />
              ))}
            </div>
          </div>
          <img
            className="intervention-diagram-second-row-connector pale-orange"
            src={line2}
          />
          <img
            className="intervention-diagram-second-row-connector orange"
            src={line3}
          />
          <img
            className="intervention-diagram-second-row-connector purple"
            src={line4}
          />
          <img
            className="intervention-diagram-second-row-connector blue"
            src={line5}
          />
          <div className="intervention-diagram-row design-implications">
            <div className="intervention-diagram-row title-container">
              <h5>Tested Intervention</h5>
              <h4>Design Implications</h4>
            </div>
            <div className="intervention-cards design-implications">
              {interventionCardContent.thirdRow.map((card, index) => (
                <InterventionCard
                  type={card.type}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  highlighted={card.highlighted}
                  number={index + 1}
                  background={card.background}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <TextBlock text={textContent.secondParagraph} />
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
      content: (
        <>
          The most obvious solutions involved offering healthier food directly
          on campus during regular late-night dining hours (~9pm–2am). However,
          after several unacknowledged attempts to connect with various campus
          dining services, we had to accept that{" "}
          <strong>this was a bridge we didn’t have the scope to cross.</strong>
        </>
      ),
    },
  ],
  secondParagraph: [
    {
      size: "body",
      content: (
        <>
          While participants were willing to pre-order healthier food, many
          wanted options that weren't available through our Step One Foods
          partnership. They also weren’t too keen on those that were. The pilot
          highlighted that food appeal—not just convenience—is critical to
          sustained behavior change.
        </>
      ),
    },
  ],
};

const interventionCardContent: {
  firstRow: InterventionCardProps[];
  secondRow: InterventionCardProps[];
  thirdRow: InterventionCardProps[];
} = {
  firstRow: [
    {
      type: "food-ecosystem",
      description: (
        <>Collaboration with Stanford R&DE (Residential & Dining Enterprise)</>
      ),
      image: rde,
    },
    {
      type: "food-ecosystem",
      description: (
        <>
          Collaboration with a <br />
          campus co-op to produce fresh food at night as a <br />
          week-long pop-up
        </>
      ),
      image: popUp,
    },
    {
      type: "food-ecosystem",
      description: (
        <>
          Pilot program sponsored by Step One Foods to offer snacks
          hand-delivered (by us) at night
        </>
      ),
      image: stepOne,
      highlighted: true,
    },
    {
      type: "food-ecosystem",
      description: (
        <>
          Collaboration with <br /> student-run <br />
          On Call Café
        </>
      ),
      image: onCall,
    },
  ],
  secondRow: [
    {
      type: "behavior",
      title: "Healthy Demand Signals",
      description:
        "Measure student interest in healthier late-night meals using a simulated menu",
      image: healthyDemandSignals,
    },
    {
      type: "behavior",
      title: "Pre-Order & Delivery",
      description: (
        <>
          Reserve healthier food during the day for nighttime delivery
          <br />
          <br />
        </>
      ),
      image: preOrder,
      highlighted: true,
    },
    {
      type: "behavior",
      title: "Snacking Buffer",
      description:
        "Introduce a pause and a healthier snack alternative before acting on a craving",
      image: snackingBuffer,
    },
  ],
  thirdRow: [
    {
      type: "design-implications",
      title: "Making choices earlier increases intentionality.",
      description:
        "Planning during the day allows for well-informed decisions.",
      highlighted: true,
      background:
        "linear-gradient(135deg, var(--color-background-light-frame) 0%, var(--color-lunacart-primary) 75%)",
    },
    {
      type: "design-implications",
      title: "Follow-through needs reinforcement.",
      description:
        "Well-timed reminders help students commit to their earlier plans.",
      highlighted: true,
      background:
        "linear-gradient(135deg, var(--color-background-light-frame) 0%, var(--color-lunacart-secondary) 75%)",
    },
    {
      type: "design-implications",
      title: "Cravings are, by definition, unpredictable.",
      description:
        "The experience should be flexible to allow for shifting plans and tastes.",
      highlighted: true,
      background:
        "linear-gradient(135deg, var(--color-background-light-frame) 0%, var(--color-lunacart-tertiary) 75%)",
    },
    {
      type: "design-implications",
      title: "Nutrition isn’t enough of a reason to eat better.",
      description:
        "Students still care about taste alongside nutrition when choosing meals.",
      highlighted: true,
      background:
        "linear-gradient(135deg, var(--color-background-light-frame) 0%, var(--color-lunacart-quaternary) 75%)",
    },
  ],
};