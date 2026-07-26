import "./BackButton.css";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

type BackButtonProps = {
  to: string;
  label?: string;
};

export default function BackButton({ to, label = "Back" }: BackButtonProps) {
  return (
    <Link to={to} className="back-button" aria-label="Back to home">
      <BsArrowLeft color="var(--color-icon)"/>
    </Link>
  );
}
