import "./Questions.css";

import Question, { type QuestionProps } from "./Question/Question";

type QuestionsProps = {
  questions: Omit<QuestionProps, "number">[];
};

export default function Questions({ questions }: QuestionsProps) {
  return (
    <div className="questions">
      {questions.map((question, index) => (
        <Question number={index + 1} theme={question.theme} content={question.content}/>
      ))}
    </div>
  );
}