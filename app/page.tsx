import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

// Section colors for brand name color changes on scroll
const sectionColors = [
  "var(--burgundy)",
  "var(--gold)",
  "var(--burgundy)",
  "var(--gold)",
  "var(--burgundy)",
  "var(--gold)",
];

export default function Home() {
  return (
    <>
      <Navbar sectionColors={sectionColors} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
