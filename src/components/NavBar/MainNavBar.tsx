// src/components/NavBar/MainNavBar.tsx

import "./NavBar.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useRef, useLayoutEffect } from "react";

export type MainNavItem = {
  label: string;
  href: string;
  isExternal?: boolean;
};

type MainNavBarProps = {
  items: MainNavItem[];
};

export default function MainNavBar({ items }: MainNavBarProps) {
  const location = useLocation();
  const [navbarTheme, setNavbarTheme] = useState<"light" | "dark">("light");
  const navbarRef = useRef<HTMLElement | null>(null);

  // Theme detection (same as your case study navbar)
  useLayoutEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    const darkSections = Array.from(
      document.querySelectorAll('[data-theme="dark"]'),
    );

    if (darkSections.length === 0) return;

    const checkOverlap = () => {
      const navbarRect = navbar.getBoundingClientRect();

      const isOverDark = darkSections.some((section) => {
        const sectionRect = section.getBoundingClientRect();
        return (
          navbarRect.bottom > sectionRect.top &&
          navbarRect.top < sectionRect.bottom
        );
      });

      setNavbarTheme(isOverDark ? "dark" : "light");
    };

    window.addEventListener("scroll", checkOverlap);
    checkOverlap();

    return () => window.removeEventListener("scroll", checkOverlap);
  }, []);

  return (
    <nav ref={navbarRef} className={`navbar glass navbar-theme-${navbarTheme}`}>
      {items.map((item) => {
        const isActive = location.pathname === item.href;
        const isExternal =
          item.isExternal ||
          item.href.startsWith("http") ||
          item.href.endsWith(".pdf");

        return (
          <div key={item.label} className="navbar-item">
            {isExternal ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-link"
              >
                {item.label}
              </a>
            ) : (
              <Link
                to={item.href}
                className={`navbar-link ${isActive ? "active" : ""}`}
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
