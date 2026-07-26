import "./NavBar.css";
import { useState } from "react";

import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

type NavBarProps = {
  items: NavItem[];
  // alignment: React.CSSProperties["justifyContent"];
};

function NavBar({ items }: NavBarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="navbar">
      {items.map((item) => (
        <div key={item.label} className="navbar-item">
          <a href={item.href} className="navbar-link" key={item.label}>
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

          {item.children && openDropdown === item.label && (
            <div className="navbar-submenu">
              {item.children.map((child) => (
                <a href={child.href} className="navbar-link submenu" key={child.label}>
                  {child.label}
                </a>
                // <Link
                //   key={child.label}
                //   to={child.href}
                //   className="navbar-link submenu"
                // >
                //   {child.label}
                // </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

export default NavBar;