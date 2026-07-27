import "./BackToTopButton.css";
import { useLayoutEffect, useRef, useState } from "react";

import { BsArrowUp } from "react-icons/bs";

type BackToTopButtonProps = {
  isVisible?: boolean; // Accept visibility from parent
};

function BackToTopButton({ isVisible = true }: BackToTopButtonProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Only handle theme detection, not visibility
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      ref={buttonRef}
      className={`back-to-top back-to-top-theme-${theme} ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <BsArrowUp size={20} />
    </button>
  );
}

export default BackToTopButton;
