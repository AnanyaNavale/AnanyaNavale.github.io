import "./Home.css";

import NavBar, { type MainNavItem } from "@/components/NavBar/MainNavBar";
import Logo from "@/components/Logo/Logo";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import GlobalFooter from "../../components/GlobalFooter/GlobalFooter";
import { MAIN_NAV_ITEMS } from "@/config/navigation";


export default function Home() {
  return (
    <main className="home">
      <Logo />
      <div className="navbar-wrapper visible">
        <NavBar items={MAIN_NAV_ITEMS} />
      </div>
      <Hero />
      <Projects />
      <GlobalFooter />
    </main>
  );
}

