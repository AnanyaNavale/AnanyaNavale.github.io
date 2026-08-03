import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import "./BackButton.css";

type BackButtonProps = {
  to: string;
};

export default function BackButton({ to }: BackButtonProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  // Detect when button overlaps dark sections
  useLayoutEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const darkSections = Array.from(
      document.querySelectorAll('[data-theme="dark"]'),
    );

    if (darkSections.length === 0) return;

    const checkOverlap = () => {
      const buttonRect = button.getBoundingClientRect();

      const isOverDark = darkSections.some((section) => {
        const sectionRect = section.getBoundingClientRect();
        return (
          buttonRect.bottom > sectionRect.top &&
          buttonRect.top < sectionRect.bottom
        );
      });

      setTheme(isOverDark ? "dark" : "light");
    };

    window.addEventListener("scroll", checkOverlap);
    checkOverlap();

    return () => window.removeEventListener("scroll", checkOverlap);
  }, []);

  // Determine icon color based on hover + theme
  const getIconColor = () => {
    if (isHovered) return "var(--color-text-light)"; // Always light when hovered
    return theme === "dark" ? "var(--color-icon-light)" : "var(--color-icon)";
  };

  return (
    <Link
      to={to}
      className={`back-button glass back-button-theme-${theme}`}
      ref={buttonRef}
      aria-label="Back to home"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BsArrowLeft color={getIconColor()} />
    </Link>
  );
}
