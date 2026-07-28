import "./ViewCaseStudyButton.css";
import { Link } from "react-router-dom";

type ViewCaseStudyButtonProps = {
  link: string;
  buttonText?: string;
};

export default function ViewCaseStudyButton({
  link,
  buttonText = "VIEW · CASE · STUDY ·",
}: ViewCaseStudyButtonProps) {
  return (
    <Link className="view-case-study-button" to={link}>
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
    </Link>
  );
}
