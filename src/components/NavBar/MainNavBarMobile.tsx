// src/components/NavBar/MainNavBarMobile.tsx

import { useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import HamburgerIcon from "./HamburgerIcon";
import MobileMenu from "./MobileMenu";
import type { MobileMenuItem } from "./MobileMenu";
import type { MainNavItem } from "./MainNavBar";

type MainNavBarMobileProps = {
  items: MainNavItem[];
};

export default function MainNavBarMobile({ items }: MainNavBarMobileProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileMenuItems: MobileMenuItem[] = items.map((item) => ({
    label: item.label,
    href: item.href,
    isActive: location.pathname === item.href,
    isExternal: item.isExternal,
  }));

  // Don't immediately close - let MobileMenu handle animation first
  const handleClose = useCallback(() => {
    // Wait for animation to complete before updating parent state
    setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 300); // Match animation duration
  }, []);

  return (
    <>
      {/* Mobile Hamburger */}
      <div className="mobile-hamburger-wrapper">
        <HamburgerIcon
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={handleClose}
        items={mobileMenuItems}
        showLogo={true}
      />
    </>
  );
}
