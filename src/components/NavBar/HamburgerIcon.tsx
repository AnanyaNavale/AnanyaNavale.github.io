import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import "./HamburgerIcon.css";

type HamburgerIconProps = {
  isOpen: boolean;
  onClick: () => void;
  theme?: "light" | "dark"; // NEW - optional theme prop
};

export default function HamburgerIcon({
  isOpen,
  onClick,
  theme = "light",
}: HamburgerIconProps) {
  return (
    <button
      className={`hamburger-button glass hamburger-theme-${theme} ${isOpen ? "open" : ""}`}
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
    </button>
  );
}
