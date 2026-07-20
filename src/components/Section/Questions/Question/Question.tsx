import "./Question.css";

export type QuestionProps = {
  number: number;
  theme: string;
  content: React.ReactNode;
}

function Question({ number, theme, content }: QuestionProps) {
  return (
    <div className="question">
      <div className="question-number-outer">
        <div className="question-number-inner">
          <h4 className="question-number">{String(number).padStart(2, "0")}</h4>
        </div>
      </div>

      <div className="question-text">
        <div className="question-theme">{theme}</div>
        <div className="question-content">{content}</div>
      </div>
    </div>
  );
}

export default Question;