import "./Home.css";

import NavBar from "@/components/NavBar/MainNavBar";
import NavBarMobile from "@/components/NavBar/MainNavBarMobile";
import Logo from "@/components/Logo/Logo";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import GlobalFooter from "../../components/GlobalFooter/GlobalFooter";
import { MAIN_NAV_ITEMS } from "@/config/navigation";

export default function Home() {
  return (
    <main className="home">
      <Logo />

      {/* Desktop Nav */}
      <div className="navbar-wrapper visible">
        <NavBar items={MAIN_NAV_ITEMS} />
      </div>

      {/* Mobile Nav - OUTSIDE navbar-wrapper */}
      <NavBarMobile items={MAIN_NAV_ITEMS} />

      <Hero />
      <Projects />
      <GlobalFooter />
    </main>
  );
}
