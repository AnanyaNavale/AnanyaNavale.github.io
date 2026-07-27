import "./Home.css";

import NavBar, { type NavItem } from "@/components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import GlobalFooter from "../../components/GlobalFooter/GlobalFooter";

export default function Home() {
  return (
    <main className="home">
      <div className="navbar-wrapper visible">
        <NavBar items={navItems} />
      </div>
      <Hero />
      <Projects />
      <GlobalFooter />
    </main>
  );
}

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  // { label: "Contact", href: "#contact" },
];

