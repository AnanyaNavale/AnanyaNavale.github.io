import "./BackButton.css";
import { Link } from "react-router-dom";

type BackButtonProps = {
  to: string;
  label?: string;
};

export default function BackButton({ to, label = "Back" }: BackButtonProps) {
  return (
    <Link to={to} className="back-button">
      ← {label}
    </Link>
  );
}
