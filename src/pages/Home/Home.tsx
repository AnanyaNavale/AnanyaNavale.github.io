import "./Home.css";

import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
