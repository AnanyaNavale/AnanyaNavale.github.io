import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import "./HamburgerIcon.css";

type HamburgerIconProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function HamburgerIcon({ isOpen, onClick }: HamburgerIconProps) {
  return (
    <button
      className={`hamburger-button glass ${isOpen ? "open" : ""}`}
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? <RxCross2 size={20} /> : <RxHamburgerMenu size={20} />}
    </button>
  );
}
