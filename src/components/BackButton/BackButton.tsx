import "./BackButton.css";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";

type BackButtonProps = {
  to: string;
  label?: string;
};

export default function BackButton({ to, label = "Back" }: BackButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={to}
      className="back-button glass"
      aria-label="Back to home"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BsArrowLeft
        color={isHovered ? "var(--color-text-light)" : "var(--color-icon)"}
      />
    </Link>
  );
}