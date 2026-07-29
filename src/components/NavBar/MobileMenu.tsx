import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MobileMenu.css";

import logo from "@/assets/images/logo.svg";

export type MobileMenuItem = {
  label: string;
  href: string;
  isActive: boolean;
  isExternal?: boolean;
  onClick?: () => void;
};

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  items: MobileMenuItem[];
  showLogo?: boolean;
};

export default function MobileMenu({
  isOpen,
  onClose,
  items,
  showLogo = false,
}: MobileMenuProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Handle opening/closing
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else if (isVisible) {
      // Delay hiding to allow close animation
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen, isVisible]);

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Don't render at all until first open
  if (!isVisible) return null;

  return (
    <>
      {/* Dark overlay */}
      <div
        className="mobile-menu-overlay"
        data-closing={!isOpen}
        onClick={onClose}
      />

      {/* Slide-in panel */}
      <div className="mobile-menu-panel" data-closing={!isOpen}>
        {showLogo && (
          <div className="mobile-menu-logo">
            <Link to="/" onClick={onClose}>
              <img src={logo} alt="Home" />
            </Link>
          </div>
        )}

        <nav className="mobile-menu-items">
          {items.map((item) => (
            <div key={item.label} className="mobile-menu-item">
              {item.isExternal ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-menu-link"
                  onClick={onClose}
                >
                  <span className={item.isActive ? "active-pill" : ""}>
                    {item.label}
                  </span>
                </a>
              ) : (
                <Link
                  to={item.href}
                  className="mobile-menu-link"
                  onClick={() => {
                    item.onClick?.();
                    onClose();
                  }}
                >
                  <span className={item.isActive ? "active-pill" : ""}>
                    {item.label}
                  </span>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
