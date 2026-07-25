import "./NavBar.css";

export type NavItem = {
  label: string;
  href: string;
};

type NavBarProps = {
  items: NavItem[];
};

function NavBar({ items }: NavBarProps) {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        {/* <div className="navbar-logo">AN</div> */}
        {items.map((item) => (
          <a key={item.label} href={item.href} className="navbar-link">
            {item.label}
          </a>
        ))}
        {/* <div className="navbar-links"></div> */}
      </nav>
    </div>
  );
}

export default NavBar;