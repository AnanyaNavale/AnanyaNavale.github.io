import { useState, useLayoutEffect, useCallback, useRef } from "react";
import HamburgerIcon from "./HamburgerIcon";
import MobileMenu from "./MobileMenu";
import type { MobileMenuItem } from "./MobileMenu";
import type { NavItem } from "./CaseStudyNavBar";

type CaseStudyNavBarMobileProps = {
  items: NavItem[];
};

export default function CaseStudyNavBarMobile({
  items,
}: CaseStudyNavBarMobileProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [hamburgerTheme, setHamburgerTheme] = useState<"light" | "dark">(
    "light",
  );
  const hamburgerRef = useRef<HTMLDivElement | null>(null);

  // Detect when hamburger overlaps dark sections
  useLayoutEffect(() => {
    const hamburger = hamburgerRef.current;
    if (!hamburger) return;

    const darkSections = Array.from(
      document.querySelectorAll('[data-theme="dark"]'),
    );

    if (darkSections.length === 0) return;

    const checkOverlap = () => {
      const hamburgerRect = hamburger.getBoundingClientRect();

      const isOverDark = darkSections.some((section) => {
        const sectionRect = section.getBoundingClientRect();
        return (
          hamburgerRect.bottom > sectionRect.top &&
          hamburgerRect.top < sectionRect.bottom
        );
      });

      setHamburgerTheme(isOverDark ? "dark" : "light");
    };

    window.addEventListener("scroll", checkOverlap);
    checkOverlap();

    return () => window.removeEventListener("scroll", checkOverlap);
  }, []);

  // Track active section (same as before)
  useLayoutEffect(() => {
    const allSections: { href: string }[] = [];

    items.forEach((item) => {
      allSections.push({ href: item.href });
      if (item.children) {
        item.children.forEach((child) => {
          allSections.push({ href: child.href });
        });
      }
    });

    const sectionElements = allSections
      .map((section) => ({
        element: document.querySelector(section.href),
        href: section.href,
      }))
      .filter((section) => section.element !== null);

    const intersectingSections = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const href = `#${entry.target.id}`;
          if (entry.isIntersecting) {
            intersectingSections.set(href, entry.intersectionRatio);
          } else {
            intersectingSections.delete(href);
          }
        });

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
            setActiveSection(mostVisible);
          }
        }
      },
      {
        threshold: [0, 0.2, 0.5, 0.8],
        rootMargin: "-100px 0px -50% 0px",
      },
    );

    sectionElements.forEach((section) => observer.observe(section.element!));
    return () => observer.disconnect();
  }, [items]);

  // Convert NavItems to MobileMenuItems with hierarchy
  const convertToMobileItems = useCallback(
    (navItems: NavItem[]): MobileMenuItem[] => {
      return navItems.map((item) => {
        const isExpanded = expandedItems.has(item.label);
        const hasActiveChild =
          item.children?.some((child) => child.href === activeSection) ?? false;

        return {
          label: item.label,
          href: item.href,
          // Parent is active only if:
          // - Its own section is active, OR
          // - Submenu is closed AND a child is active
          isActive:
            activeSection === item.href || (!isExpanded && hasActiveChild),
          onClick: () => {
            const element = document.querySelector(item.href);
            element?.scrollIntoView({ behavior: "smooth" });
          },
          children: item.children?.map((child) => ({
            label: child.label,
            href: child.href,
            // Child is active only when submenu is open and it's the active section
            isActive: isExpanded && activeSection === child.href,
            onClick: () => {
              const element = document.querySelector(child.href);
              element?.scrollIntoView({ behavior: "smooth" });
            },
          })),
        };
      });
    },
    [activeSection, expandedItems],
  );

  const mobileMenuItems = convertToMobileItems(items);

  const handleClose = useCallback(() => {
    setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 300);
  }, []);

  return (
    <>
      <div className="mobile-hamburger-wrapper" ref={hamburgerRef}>
        <HamburgerIcon
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          theme={hamburgerTheme}
        />
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={handleClose}
        items={mobileMenuItems}
        showLogo={false}
        expandedItems={expandedItems}
        setExpandedItems={setExpandedItems}
      />
    </>
  );
}
