import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import "./MobileMenu.css";

import logo from "@/assets/images/logo.svg";

export type MobileMenuItem = {
  label: string;
  href: string;
  isActive: boolean;
  isExternal?: boolean;
  onClick?: () => void;
  children?: MobileMenuItem[]; // Support hierarchical items
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
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isVisible]);

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

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  const handleItemClick = (item: MobileMenuItem) => {
    if (item.onClick) {
      item.onClick();
    }

    // Don't close if item has children (let them expand/collapse instead)
    if (!item.children) {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        className="mobile-menu-overlay"
        data-closing={!isOpen}
        onClick={onClose}
      />

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
            <MobileMenuItem
              key={item.label}
              item={item}
              onClose={onClose}
              expandedItems={expandedItems}
              toggleExpand={toggleExpand}
              handleItemClick={handleItemClick}
            />
          ))}
        </nav>
      </div>
    </>
  );
}

// Recursive menu item component
type MobileMenuItemComponentProps = {
  item: MobileMenuItem;
  onClose: () => void;
  expandedItems: Set<string>;
  toggleExpand: (label: string) => void;
  handleItemClick: (item: MobileMenuItem) => void;
  depth?: number;
};

function MobileMenuItem({
  item,
  onClose,
  expandedItems,
  toggleExpand,
  handleItemClick,
  depth = 0,
}: MobileMenuItemComponentProps) {
  const hasChildren = item.children && item.children.length > 0;
  const isExpanded = expandedItems.has(item.label);

  const renderLink = () => {
    const content = (
      <span className={item.isActive ? "active-pill" : ""}>{item.label}</span>
    );

    const className = `mobile-menu-link ${depth > 0 ? "submenu" : ""}`;

    if (item.isExternal) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          onClick={() => handleItemClick(item)}
        >
          {content}
        </a>
      );
    }

    // Internal link or scroll anchor
    if (item.href.startsWith("#")) {
      return (
        <a
          href={item.href}
          className={className}
          onClick={(e) => {
            e.preventDefault();
            handleItemClick(item);
          }}
        >
          {content}
        </a>
      );
    }

    // React Router link
    return (
      <Link
        to={item.href}
        className={className}
        onClick={() => handleItemClick(item)}
      >
        {content}
      </Link>
    );
  };

  return (
    <div className="mobile-menu-item">
      <div className="mobile-menu-item-parent">
        {renderLink()}

        {hasChildren && (
          <button
            className="mobile-menu-dropdown-button"
            onClick={() => toggleExpand(item.label)}
            aria-label={`Toggle ${item.label} submenu`}
          >
            {isExpanded ? (
              <BsChevronUp size={14} color="var(--color-text-light)" />
            ) : (
              <BsChevronDown size={14} color="var(--color-text-light)" />
            )}
          </button>
        )}
      </div>

      {hasChildren && isExpanded && (
        <div className="mobile-menu-submenu">
          {item.children!.map((child) => (
            <MobileMenuItem
              key={child.label}
              item={child}
              onClose={onClose}
              expandedItems={expandedItems}
              toggleExpand={toggleExpand}
              handleItemClick={handleItemClick}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
