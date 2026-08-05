import "./NavBar.css";
import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

type NavBarProps = {
  items: NavItem[];
};

export default function NavBar({ items }: NavBarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [navbarTheme, setNavbarTheme] = useState<"light" | "dark">("light");

  const closeTimeoutRef = useRef<number | null>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const navbarRef = useRef<HTMLElement | null>(null);

  const [submenuPosition, setSubmenuPosition] = useState({
    top: 0,
    left: 0,
  });

  const openItem = items.find((item) => item.label === openDropdown);

  // Clear any pending close timeout
  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  };

  // Delay closing to allow mouse movement
  const handleMouseLeave = () => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // 200ms grace period
  };

  // Observer to detect when navbar overlaps dark sections
  useLayoutEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    const darkSections = Array.from(
      document.querySelectorAll('[data-theme="dark"]'),
    );

    if (darkSections.length === 0) return;

    const checkOverlap = () => {
      const navbarRect = navbar.getBoundingClientRect();

      // Check if navbar overlaps with ANY dark section
      const isOverDark = darkSections.some((section) => {
        const sectionRect = section.getBoundingClientRect();

        // Check if navbar and section overlap vertically
        return (
          navbarRect.bottom > sectionRect.top &&
          navbarRect.top < sectionRect.bottom
        );
      });

      setNavbarTheme(isOverDark ? "dark" : "light");
    };

    // Check on scroll
    window.addEventListener("scroll", checkOverlap);
    // Check initially
    checkOverlap();

    return () => window.removeEventListener("scroll", checkOverlap);
  }, []);

  // Cleanup timeout on unmount
  useLayoutEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  useLayoutEffect(() => {
    if (!openDropdown) return;

    const element = itemRefs.current[openDropdown];

    if (!element) return;

    const rect = element.getBoundingClientRect();

    setSubmenuPosition({
      top: rect.bottom + 18,
      left: rect.left + rect.width / 3,
    });
  }, [openDropdown]);

  // Enhanced observer that tracks ALL sections including subsections
  useLayoutEffect(() => {
    // Flatten all items including children
    const allSections: { href: string; parentHref?: string }[] = [];

    items.forEach((item) => {
      allSections.push({ href: item.href });

      if (item.children) {
        item.children.forEach((child) => {
          allSections.push({
            href: child.href,
            parentHref: item.href,
          });
        });
      }
    });

    const sectionElements = allSections
      .map((section) => ({
        element: document.querySelector(section.href),
        href: section.href,
        parentHref: section.parentHref,
      }))
      .filter((section) => section.element !== null);

    console.log("Tracking sections:", sectionElements);

    // Track ALL currently intersecting sections
    const intersectingSections = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        // Update the intersecting sections map
        entries.forEach((entry) => {
          const href = `#${entry.target.id}`;

          if (entry.isIntersecting) {
            // Store the intersection ratio (how much is visible)
            intersectingSections.set(href, entry.intersectionRatio);
          } else {
            intersectingSections.delete(href);
          }
        });

        // Find the MOST intersecting section
        if (intersectingSections.size > 0) {
          let maxRatio = 0;
          let mostVisible = null;

          intersectingSections.forEach((ratio, href) => {
            if (ratio > maxRatio) {
              maxRatio = ratio;
              mostVisible = href;
            }
          });

          if (mostVisible) {
            console.log(
              "Most visible section:",
              mostVisible,
              "ratio:",
              maxRatio,
            );
            setActiveSection(mostVisible);
          }
        }
      },
      {
        // threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], // Multiple thresholds for better tracking
        threshold: [0, 0.2, 0.5, 0.8], // Multiple thresholds
        rootMargin: "-100px 0px -50% 0px",
      },
    );

    sectionElements.forEach((section) => {
      observer.observe(section.element!);
    });

    return () => observer.disconnect();
  }, [items]);

  // Helper function to determine if a parent should be active
  const isParentActive = (item: NavItem) => {
    // If submenu is closed, parent is active when any of its sections are active
    if (openDropdown !== item.label) {
      if (activeSection === item.href) return true;

      // Check if any child is active
      if (item.children) {
        return item.children.some((child) => child.href === activeSection);
      }

      return false;
    }

    // If submenu is open, parent is ONLY active if the parent section itself is active
    // (not when children are active)
    return activeSection === item.href;
  };

  // Helper function to determine if a child should be active
  const isChildActive = (childHref: string) => {
    return activeSection === childHref;
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className={`navbar glass navbar-theme-${navbarTheme}`}
      >
        {items.map((item) => {
          return (
            <div
              key={item.label}
              className="navbar-item"
              ref={(el) => {
                itemRefs.current[item.label] = el;
              }}
            >
              <a
                href={item.href}
                className={`navbar-link ${
                  isParentActive(item) ? "active" : ""
                }`}
              >
                {item.label}
              </a>
              {item.children && (
                <button
                  className="navbar-dropdown-button"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {openDropdown === item.label ? (
                    <BsChevronUp
                      size={14}
                      color={
                        navbarTheme === "dark"
                          ? "var(--color-text-light)"
                          : "var(--color-icon)"
                      }
                    />
                  ) : (
                    <BsChevronDown
                      size={14}
                      color={
                        navbarTheme === "dark"
                          ? "var(--color-text-light)"
                          : "var(--color-icon)"
                      }
                    />
                  )}
                </button>
              )}
            </div>
          );
        })}
      </nav>

      {openItem?.children &&
        createPortal(
          <div
            className={`navbar-submenu-wrapper navbar-theme-${navbarTheme}`}
            style={{
              position: "fixed",
              top: submenuPosition.top,
              left: submenuPosition.left,
              transform: "translateX(-50%)",
              zIndex: 1000,
            }}
            onMouseEnter={() => handleMouseEnter(openItem.label)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="navbar-submenu"
              onMouseEnter={() => setOpenDropdown(openItem.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {openItem.children.map((child) => (
                <a
                  key={child.label}
                  href={child.href}
                  className={`navbar-link submenu glass glass-clipped ${
                    isChildActive(child.href) ? "active" : ""
                  }`}
                >
                  {child.label}
                </a>
              ))}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
