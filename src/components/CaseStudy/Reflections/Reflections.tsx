import "./Reflections.css"

import Section from "../../Section/Section";
import SectionHeader from "../../Section/SectionHeader/SectionHeader";
import TextBlock, { type TextBlockItem } from "../../TextBlock/TextBlock";
import Questions from "../../Section/Questions/Questions";
import { type QuestionProps } from "../../Section/Questions/Question/Question";

export type ReflectionsContent = {
  intro: TextBlockItem[];
  conclusion: TextBlockItem[];
};

type ReflectionsProps = {
  tagline: string;
  content: ReflectionsContent;
  questions: Omit<QuestionProps, "number">[];
  id: string;
};

function Reflections({
  tagline,
  content,
  questions,
  id,
}: ReflectionsProps) {
  return (
    <Section
      innerWidth={1140}
      className="reflections"
      id={id}
    >
      <SectionHeader
        title="Reflections"
        tagline={tagline}
      />

      <TextBlock text={content.intro} />

      <Questions questions={questions}/>

      <TextBlock text={content.conclusion} />
    </Section>
  );
}

export default Reflections;