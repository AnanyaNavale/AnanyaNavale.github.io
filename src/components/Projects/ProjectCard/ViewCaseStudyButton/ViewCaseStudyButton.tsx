import "./ViewCaseStudyButton.css";

type ViewCaseStudyButtonProps = {
  buttonText?: string;
};

export default function ViewCaseStudyButton({
  buttonText = "VIEW · CASE · STUDY ·",
}: ViewCaseStudyButtonProps) {
  return (
    <button className="view-case-study-button">
      <svg className="view-case-study-text" viewBox="0 0 100 100">
        <defs>
          <path
            id="circlePath"
            d="M 50,50 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
          />
        </defs>

        <text>
          <textPath href="#circlePath">{buttonText}</textPath>
        </text>
      </svg>
    </button>
  );
}
