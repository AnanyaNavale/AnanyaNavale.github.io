import "./ExperiencePrototypes.css"

import ExpProto from "./ExpProto/ExpProto"

import expProto1 from "@/assets/images/exp-proto-1.jpeg"
import expProto2 from "@/assets/images/exp-proto-2.png"
import expProto31 from "@/assets/images/exp-proto-3-1.png"
import expProto32 from "@/assets/images/exp-proto-3-2.png"

function ExperiencePrototypes() {
  return (
    <div className="experience-prototypes">
      <ExpProto
        header="Accountability"
        color="var(--color-theo-primary)"
        headerColor="var(--color-text-light)"
        title="AI Session Tracker"
        description="A simulated chatbot that tracks work sessions and progress"
        images={[expProto1]}
        text={[
          {
            title: "Assumption",
            content:
              "Users struggle to assess whether their time and attention are aligned with their goals",
          },
          {
            title: "Outcome",
            content:
              "The tester enjoyed the motivation and appreciated the post-work reflection and break reminders",
          },
          {
            title: "Refinement",
            content:
              "Add more personality and visuals to make encouragement feel personal",
          },
        ]}
        icon="up"
        iconBackground="#EDE7E2"
      />
      <ExpProto
        header="Self-Care"
        color="var(--color-theo-secondary)"
        headerColor="var(--color-text-header)"
        title="Digital Body Double"
        description={
          "AI-generated images of animals that model\ncore human needs"
        }
        images={[expProto2]}
        text={[
          {
            title: "Assumption",
            content:
              "Users are reminded about everyday essential activities by a companion’s actions",
          },
          {
            title: "Outcome",
            content:
              "The tester was successfully cued by the companion’s actions, but lacked relatability to the character",
          },
          {
            title: "Refinement",
            content:
              "Build a stronger emotional connection between the user and companion",
          },
        ]}
        icon="up"
        iconBackground="#F8F0E3"
      />
      <ExpProto
        header="Environment"
        color="var(--color-theo-tertiary)"
        headerColor="var(--color-text-light)"
        title="Focus Soundscape"
        description={
          "A curated playlist of ambient sounds that\nsupport focused work"
        }
        images={[expProto31, expProto32]}
        text={[
          {
            title: "Assumption",
            content:
              "Users work effectively with a sound environment personalized to their work habits",
          },
          {
            title: "Outcome",
            content:
              "The tester became distracted by engaging with the sounds rather than treating them as background chatter",
          },
          {
            title: "Refinement",
            content:
              "Find balance between audio that aids focus and noise that distracts",
          },
        ]}
        icon="down"
        iconBackground="#EBE0E0"
      />
    </div>
  );
}

export default ExperiencePrototypes;