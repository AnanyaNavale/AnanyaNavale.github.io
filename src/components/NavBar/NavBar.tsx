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

function NavBar({ items }: NavBarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [submenuPosition, setSubmenuPosition] = useState({
    top: 0,
    left: 0,
  });

  const openItem = items.find((item) => item.label === openDropdown);

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

  // useLayoutEffect(() => {
  //   console.log("Observer effect ran");

  //   const sections = items
  //     .map((item) => document.querySelector(item.href))
  //     .filter(Boolean);

  //   console.log("Sections found:", sections);
  // }, [items]);

  useLayoutEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    console.log("Sections:", sections);

    const observer = new IntersectionObserver(
      (entries) => {
        console.log("Observer fired", entries);

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Intersecting:", entry.target.id);

            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    sections.forEach((section) => {
      observer.observe(section!);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      <nav className="navbar glass">
        {items.map((item) => {
          console.log(item.href, activeSection);
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
                activeSection === item.href ? "active" : ""
              }`}
            >
              {item.label}
            </a>
            {item.children && (
              <button
                className="navbar-dropdown-button"
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === item.label ? null : item.label,
                  )
                }
              >
                {openDropdown === item.label ? (
                  <BsChevronUp size={14} color="var(--color-icon)" />
                ) : (
                  <BsChevronDown size={14} color="var(--color-icon)" />
                )}
              </button>
            )}
          </div>
        )})}
      </nav>

      {openItem?.children &&
        createPortal(
          <div
            className="navbar-submenu"
            style={{
              position: "fixed",
              top: submenuPosition.top,
              left: submenuPosition.left,
              transform: "translateX(-50%)",
              zIndex: 1000,
            }}
          >
            {openItem.children.map((child) => (
              <a
                key={child.label}
                href={child.href}
                className="navbar-link submenu glass glass-clipped"
              >
                {child.label}
              </a>
            ))}
          </div>,
          document.body,
        )}
    </>
  );
}

export default NavBar;